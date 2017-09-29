'use strict'
var sc = require('smartacjs');
var app = sc.app();// 获取全局APP对象
var co=require('co');

// 公共定义
let msgTemplate = {
    header: {
        sender: app.conf.instanceName,
        sender_type: app.programType
    }
}

// 消息处理器
function MessageProcessor(name,encoder,processer)
{
    sc.assert(encoder);
    console.info("MessageProcessor created!name=%s",name);
    this.encoder=encoder;
    this.name=name;
    this.processer=processer;
    this.log=sc.createNamedLog(name);
}
// 路由请求
MessageProcessor.prototype.onRequest=function(mq, req) {
    //解码消息
    if (this.encoder) {
        var msg = this.encoder.decode(req.content);
        if (msg) {
            //分拣消息
            this.log.log('recv msg:%s', JSON.stringify(sc.deepCopy(msg)));
            for (var key in msg) {
                if (key == 'header') continue;
                if (msg[key] && typeof(msg[key]) == 'object')
                {
                    if ( this.processer[key]) {
                        var body=msg[key];
                        var self=this;
                        // 调用处理器
                        co(function*() {
                            try {
                                yield *  self.processer[key](mq, req, body,msg.header);
                            }
                            catch (e) {
                                if (e instanceof app.err.SCError) {
                                    // 逻辑错误
                                    self.log.error("error!msg=%s,%s", key, e);
                                    self.sendResponseError(mq, req, e);
                                }
                                else {
                                    // 发送系统错误
                                    self.log.error("%s crash!err=%s", key, e);
                                    self.sendResponseError(mq, req);
                                }
                            };
                        });
                    }
                    else {
                        this.log.info('unknow message "%s",drop!', this.name,key);
                        this.sendResponseError(mq, req, app.err.noSupport);
                    }
                    break;
                }
            }
        }
        else {
            this.log.error('decode pb message faile!');
            exports.sendResponseError(mq, req, app.err.encodeFailed);
        }
    }
}
// 发送错误回应
MessageProcessor.prototype.sendResponseError=function(mq, req,err) {
    if (!!!err) err = app.err.systemError;
    // 给出通用错误回应
    var msg = sc.deepCopy(msgTemplate);
    msg.res_error = {};
    msg.res_error.errcode = err.errcode;
    msg.res_error.errmsg = err.errmsg;
    this.sendResponseRaw(mq, req, msg);
}
// 发送正确回应
MessageProcessor.prototype.sendResponse=function(mq, req, name, content) {
    if (!!!content) content = {};
    var msg = sc.deepCopy(msgTemplate);
    msg[name] = content;
    this.sendResponseRaw(mq, req, msg);
}
// 发送回应
MessageProcessor.prototype.sendResponseRaw=function(mq, req, res) {
    //TODO:去除N多null字段
    var strResponse=JSON.stringify(res);
    this.log.log('response:%s',strResponse );
    var buff = this.encoder.encode(res);
    if (buff) {
        mq.sendResponse(req, buff);
    }
    else {
        this.log.error('encode response fail!res=%s', strResponse);
        mq.sendResponse(req, "encode response fail:"+strResponse);
    }
}
module.exports=MessageProcessor;