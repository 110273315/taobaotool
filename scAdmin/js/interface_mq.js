/**
 * Created by Simon on 2015/11/13.
 */
var sc=require('smartacjs');
var app=sc.app();
var scRabbit=sc.RabbitMQ();
app.mq={};// 全局MQ连接字典

// 创建MQ连接
var createConnection=function()
{
    try
    {
        for (var key in app.conf.mq)
        {
            var url=app.conf.mq[key];
            console.info("create rabbit mq connection:%s(%s)",url,key);
            var conn=scRabbit.createConnect(url);
            if (conn)
            {
                console.info("start rabbit mq connection:%s(%s)",url,key);
                conn.start();
                app.mq[key]=conn;
            }
        }
        return true;
    }
    catch(e)
    {
        console.error("createConnection fail!error=%s",e);
    }
    return false;
}
// 创建选项对象
var createOptions=function(config){
    if (!!!config) config=app.conf.options;
    if (typeof(config)!="object")
    {
        console.error("create options fail!config object invalid!");
        return false;
    }
    for (var key in config)
    {
        var confObject=config[key];
        if (typeof(confObject)=="object")
        {
            if(confObject.type=="rpc_client")
            {
                // 创建为RPC
                if (!confObject.mq) confObject.mq="default";
                if (!confObject.rpc_name || confObject.rpc_name=="")
                {
                    console.error("cann't create options rpc_client!rpc_name invalid!option=%s",key);
                    return false;
                }
                confObject.object=scRabbit.createRPCClient(app.mq[confObject.mq],confObject.rpc_name);
            }
            else if (confObject.type=="rpc_server")
            {
                if (!confObject.mq) confObject.mq="default";
                if (!confObject.rpc_name || confObject.rpc_name=="")
                {
                    console.error("cann't create options rpc_server!rpc_name invalid!option=%s",key);
                    return false;
                }
                confObject.object=scRabbit.createRPCServer(app.mq[confObject.mq],confObject.rpc_name,sc.makeFunc(onRPCRequest,confObject));
            }
            else if (confObject.type=="exchange")
            {
                // 创建为交换器
                if (!!!confObject.mq) confObject.mq="default";
                if (!!!confObject.exchange_type) confObject.exchange_type="direct";
                if (!!!confObject.exchange_name) {
                    console.error("cann't create options exchange '%s',unknow exchange name!",key);
                    return false;
                }
                if (!!!confObject.durable) confObject.durable=true;
                if (!!!confObject.autoDelete) confObject.autoDelete=false;
                // 检查参数
                var mq=app.mq[confObject.mq];
                if (mq)
                {
                    var mq=app.mq[confObject.mq];
                    mq.declareExchange(confObject.exchange_name,confObject.exchange_type,confObject.durable,confObject.autoDelete);
                    confObject.object=mq;
                }
                else
                {
                    console.error("cann't create options exchange '%s',mq invalid!",key);
                    return false;
                }
            }
            else
            {
                if (!createOptions(confObject)) return false;
            }
        }
        else
        {
            console.warn("create options skip!,option '%s' not config object!",key);
            return true;
        }
    }
    return true;
}

// 收到RPC请求时的处理
function onRPCRequest(option,conn,req)
{
    // 转换
    if (!!!option.convertor) option.convertor=convertor.default;
    var reqData=option.convertor(req.content);
    if (typeof(reqData)=="object")
    {
        var target;
        // 寻找HTTP目标
        for (var t in option.target)
        {
            target=sc.getSubObject(reqData, t.key_path);
            if (target) break;
        }
        if (target)
        {
            // 找到HTTP目标,准备发起调用
            if (target.method=="GET")
            {
                target=sc.deepCopy(target);
                target.path+=JSON.stringify(reqData);
            }
            var req=http.request(target,function(res)
            {
                res.setEncoding('utf8');
                var resText="";
                res.on('data', function (chunk) {
                    console.log('BODY: ' + chunk);
                    resText+=chunk;
                });
                res.on('end',function()
                {
                    // 接收数据完成,开始转码
                    var resBuff=option.convertor(resText);
                    if (resBuff!=null)
                    {
                        conn.sendResponse(req,resBuff);
                    }
                    else
                    {
                        // 回应转码失败!
                        conn.sendResponse(req,"ERROR:http response cann't encode!");
                        console.error("onRPCRequest Error!http response cann't encode!");
                    }
                });
            });
            req.on('error',function(e)
            {
                // 请求失败
                conn.sendResponse(req,"ERROR:http request error!"+e);
                console.error("onRPCRequest Error!http request error!"+e);
            });
        }
        else
        {
            // 解码失败
            conn.sendResponse(req,"ERROR:http request cann't decode!");
            console.error("onRPCRequest Error!http request cann't decode!");
        }
    }
    else
    {
        // 解码失败
        conn.sendResponse(req,"ERROR:Cann't decode!");
        console.error("onRPCRequest Error!Cann't decode data");
    }
}


// 初始化接口
exports.init=function()
{
    return (createConnection() && createOptions());
}