/**
 * Socket客户端处理公用类
 * Created by michael on 14-6-26.
 */

var client, socketId;

/*
 * 连接服务器
 * @uri 目标服务器终结点
 * @callback 回调
 * @return 连接成功后的socket对象
 */
var connectServer = function (uri, callback) {
    //回调
    callback = callback ? callback : function () {
    };
    //连接到服务器
    client = io.connect(uri);

    //连接成功之后开始发送心跳包
    client.on('connect', function (data) {
        callback();
        //心跳包
        var heartBeatPackage = getHeader(1, '');
        //定时发送心跳
        setInterval(function () {
            client.emit('receive', heartBeatPackage);
        }, 4000);
    });

    //如果对象可用，定义对象事件
    if (client) {
        //响应事件
        client.on('receive', function (data) {
            //如果数据可用，则进行业务处理
            if (data) {
                //包头
                var scHeader = data.scHeader;
                //正文
                var scBody = data.scBody;
                //错误码
                var errcode = scBody.errorCode || -1;
                //时间戳
                var timeTamp = scBody.replyTime || 0;

                //根据命令字处理业务逻辑
                switch (scHeader.command) {
                    //断开连接                                 
                    case 1001:
                        //01客户端主动断开（socket.io会进行主动重连）
                        client.disconnect();
                        break;
                    //接收服务器端注册响应                                   
                    case 2001:
                        //注册成功
                        if (errcode == '0') {
                            console.log(data);
                            //记录SocketID
                            socketId = scBody.socketId;
                            //其他业务...
                        }
                        //重新注册或...
                        else {

                        }
                        break;
                    //接收服务器端公告响应                       
                    case 3001:
                        //公告发布成功
                        if (errcode == '0') {
                            //处理业务...
                        }
                        //公告发布失败...
                        else {

                        }
                        break;
                    //接收服务器端的公告信息                 
                    case 3002:
                        //如果公告存在，处理公告（将公告显示到页面上...）
                        if (scBody.notice) {
                            //处理公告信息...
                            console.log(scBody.notice);
                        }
                        break;
                    //接收服务器端消息响应                          
                    case 4001:
                        //消息发送成功
                        if (errcode == '0') {
                            //处理业务...
                        }
                        //消息发送失败...
                        else {

                        }
                        break;
                    //接收服务器端消息             
                    case 4002:
                        //如果消息存在，处理消息（将消息显示到页面上...）
                        if (scBody.msg) {
                            //处理消息信息...
                            console.log(scBody.msg);
                        }
                        break;
                    default:
                        break;
                }
            }
        });
    }

    //返回连接对象
    return client;
}

/**
 * 注册
 * @flag 用户标识
 * @uniqueId 唯一标示
 * @callback 回调函数
 */
var register = function (flag, uniqueId, callback) {
    //回调
    callback = callback ? callback : function () {
    };
    //唯一标示
    uniqueId = uniqueId ? uniqueId : null;

    //判断用户标示是否可用
    if (flag) {
        //消息头
        var header = getHeader(tcpCommand.register, null);
        //消息体
        var body = new tcp_all2sc_register_req([flag, uniqueId]);
        //消息包
        var package = getPackage(header, body);
        //判断socket连接状态
        if (client.connected) {
            client.emit('receive', package);
            callback();
        }
        else {
            callback('socket is disconnected');
        }

    }
}

/**
 * 发布公告
 * @notice 公告内容
 * @level 公告级别
 * @uniqueId 唯一标示
 * @socketId socketid
 * @callback 回调函数
 */
var publishNotice = function (notice, level, uniqueId, socketId, callback) {
    //回调
    callback = callback ? callback : function () {
    };
    //公告级别（不同级别的用户可以阅览不同级别的公告--待定）
    level = level ? level : 0;
    //唯一标示
    uniqueId = uniqueId ? uniqueId : null;
    //判断公告是否可用
    if (notice) {
        //时间戳
        var replyTime = new Date().getTime();
        //消息头
        var header = getHeader(tcpCommand.notice_req, null);
        //消息体
        var body = new tcp_all2sc_notice_req([notice, level, uniqueId, socketId, replyTime]);
        //消息包
        var package = getPackage(header, body);
        //判断socket连接状态
        if (client.connected) {
            client.emit('receive', package);
            callback();
        }
        else {
            callback('socket is disconnected');
        }
    }
}

/**
 * 发送消息
 * @msg 消息内容
 * @to 发送对象（数组）
 * @socketId socketId
 * @uniqueId 唯一标示
 * @callback 回调函数
 */
var sendMsg = function (msg, to, uniqueId, socketId, callback) {
    //回调
    callback = callback ? callback : function () {
    };
    //判断是否符合发送条件
    if (msg && to && to.length > 0) {
        //唯一标示
        uniqueId = uniqueId ? uniqueId : null;
        //时间戳
        var replyTime = new Date().getTime();
        //消息头
        var header = getHeader(tcpCommand.msg_req, null);
        //消息体
        var body = new tcp_all2sc_msg_req([msg, to, uniqueId, socketId, replyTime]);
        //消息包
        var package = getPackage(header, body);
        //判断socket连接状态
        if (client.connected) {
            client.emit('receive', package);
            callback();
        }
        else {
            callback('socket is disconnected');
        }
    }
}

//TCP协议命令字
var tcpCommand = {
    //心跳
    heartbeat: 1,
    //注册
    register: 2,
    //公告
    notice_req: 3,
    //消息
    msg_req: 4
}

/**
 * 获取消息头部
 * @command 命令字
 * @param 扩展参数
 * @returns 消息头部
 */
var getHeader = function (command, param) {
    //获取包头
    return new scHeader([command, param]);
}

/**
 * @header 消息头部
 * @body 消息正文
 * @return 获得到Json包
 */
var getPackage = function (header, body) {
    return { 'scHeader': header, 'scBody': body };
}