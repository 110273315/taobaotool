/**
* TCP通信协议
* Created by michael on 14-6-24.
*/

/**
* 协议头部
* @header 消息头数据项
*/
var scHeader = function (header) {
    //命令字
    //tcpCommand.heartbeat            心跳
    //tcpCommand.heartbeatTimeout     心跳超时，服务器主动断开连接
    //tcpCommand.register             注册
    //tcpCommand.register_ack         注册响应
    //tcpCommand.notice_req           公告
    //tcpCommand.notice_ack           公告响应
    //tcpCommand.msg_req              消息
    //tcpCommand.msg_ack              消息响应
    this.command = header[0] || header.command,
    //备用字段
    this.param = header[1] || header.param
}

/**
* 断开连接（命令字：1001）
* @disconnect 断开连接数据项
*/
var tcp_sc2all_disconnect = function (disconnect) {
    //缓存ID
    this.socketId = disconnect[0] || disconnect.socketId,
    //时间戳
    this.replyTime = disconnect[1] || disconnect.replyTime
}

/**
* 注册（命令字：2）
* @register 注册数据项
*/
var tcp_all2sc_register_req = function (register) {
    //用户标示
    this.flag = register[0] || register.flag,
    //唯一标示
    this.uniqueId = register[1] || register.uniqueId
}

/**
* 注册响应（命令字：2001）
* @registerAck 注册响应数据项
*/
var tcp_sc2all_register_ack = function (registerAck) {
    //错误代码
    this.errorCode = registerAck[0] || registerAck.errorCode,
    //SocketID
    this.socketId = registerAck[1] || registerAck.socketId,
    //唯一标示
    this.uniqueId = registerAck[2] || registerAck.uniqueId,
    //时间戳
    this.replyTime = new Date().getTime() || registerAck[3] || registerAck.replyTime;
}

/**
* 公告（命令字：3）
* @notice 公告数据项
*/
var tcp_all2sc_notice_req = function (notice) {
    //公告内容
    this.notice = notice[0] || notice.notice,
    //公告级别
    this.level = notice[1] || notice.level,
    //唯一标示
    this.uniqueId = notice[2] || notice.uniqueId,
    //缓存ID
    this.socketId = notice[3] || notice.socketId,
    //时间戳
    this.replyTime = notice[4] || notice.replyTime
}

/**
* 公告响应（命令字：3001）
* @noticeAck 公告响应数据项
*/
var tcp_sc2all_notice_ack = function (noticeAck) {
    //错误代码
    this.errorCode = noticeAck[0] || noticeAck.errorCode,
    //唯一标示
    this.uniqueId = noticeAck[1] || noticeAck.uniqueId,
    //时间戳
    this.replyTime = new Date().getTime() || noticeAck[2] || noticeAck.replyTime
}

/**
* 下发公告（命令字：3002）
* @notice 公告数据
*/
var tcp_sc2all_notice = function (notice) {
    //公告内容
    this.notice = notice[0] || notice.notice,
    //时间戳
    this.replyTime = new Date().getTime() || notice[1] || notice.replyTime
}

/**
* 消息（命令字：4）
* @msg 消息数据项
*/
var tcp_all2sc_msg_req = function (msg) {
    //消息内容
    this.msg = msg[0] || msg.msg,
    //消息接受者
    this.to = msg[1] || msg.to,
    //唯一标示
    this.uniqueId = msg[2] || msg.uniqueId,
    //缓存ID
    this.socketId = msg[3] || msg.socketId,
    //时间戳
    this.replyTime = msg[4] || msg.replyTime
}

/**
* 消息响应（命令字：4001）
* @msgeAck 消息响应数据项
*/
var tcp_sc2all_msg_ack = function (msgAck) {
    //错误代码
    this.errorCode = msgAck[0] || msgAck.errorCode,
    //唯一标示
    this.uniqueId = msgAck[1] || msgAck.uniqueId,
    //时间戳
    this.replyTime = new Date().getTime() || msgAck[2] || msgAck.replyTime
}

/**
* 消息下发（命令字：4002）
* @msg 消息内容
*/
var tcp_sc2all_msg = function (msg) {
    //消息内容
    this.msg = msg[0] || msg.msg,
    //时间戳
    this.replyTime = new Date().getTime() || msg[1] || msg.replyTime
}