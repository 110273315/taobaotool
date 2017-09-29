/**
 * Created by jiaxing.wang on 2016/7/1.
 */
'use strict'
let sc = require('smartacjs'),
    path = require('path'),
    app = sc.app(),
    config = app.conf,
    rabbit = sc.RabbitMQ(),
    Promise = sc.Promise,
    _ = sc._,
    qrcodeDAO = require('../dao/qrcodeDAO.js'),
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sc', 'message'),
    co = require('co');
let conn = sc.RabbitMQ().createConnect(config.mqUrl);
conn.start()
conn.declareExchange("amq.direct", "direct");
let qrcodeRpcClient = rabbit.createRPCClient(conn, "cf.wechat.rpc");
let qrcodePbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wechat.proto.js")), "cf.wechat", "Message");

exports.autoroute = {
    post: {
        '/sr/social/accountList/*': processMessage,//统一处理客户模块路由
    }
};

let msgProcesser = {
    // 查询客户信息
    '/sr/social/accountList/qrcode/list': queryQrcode,
    '/sr/social/accountList/qrcode/account/query': queryAccount,
    '/sr/social/accountList/qrcode/query': queryByid,
    '/sr/social/accountList/qrcode/edit': updateQrcode,
    '/sr/social/accountList/qrcode/delete': deleteQrcode
};

function processMessage(req, res) {
    co(function* () {
        try {
            yield* msgProcesser[req.url](req, res);
        }
        catch (e) {
            res.jsonp(e);
        };
    });
}

/**
 * 查询二维码列表
 * @param name {string} 名称
 * @param category {string} 类型
 */
function* queryQrcode(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let resJson, sort, page, condition;
    if (req) {
        try {
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
            }
            let list = yield* qrcodeDAO.queryQrcode(condition, false, sort, page);
            let TotalCount = yield* qrcodeDAO.queryQrcode(condition, true)
            let result = { list: list, TotalCount: TotalCount }
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        } catch (e) {
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
};
//根据id查询账号名称
function* queryAccount(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req && req.body && req.body.accountid) {
        try {
            let result = yield* qrcodeDAO.queryAccount(req.body.accountid);
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        } catch (e) {
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}

//根据id查询二维码信息
function* queryByid(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req && req.body && req.body.id) {
        try {
            let result = yield* qrcodeDAO.queryByid(req.body.id);
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        } catch (e) {
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}

//更新二维码
function* updateQrcode(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.body && req.body.sessionid) {
        console.error(JSON.stringify(req.body.qrdata))
        let qrdata = req.body.qrdata;
        let isExisted = yield* qrcodeDAO.checkQrcodeDuplicate(qrdata);
        if (isExisted) {
            let resJson = comm.response(-1, '场景id已存在');
            res.jsonp(resJson);
            return false;
        }
        let obj = {}
        if (qrdata.expire_seconds == 0) {
            obj = {
                "header": {
                    "sender": "req_generate_qrcode",
                    "sender_type": "sendertype1"
                },
                "req_generate_qrcode": {
                    "account_id": qrdata.account_id,
                    "store_type": 2,
                    "scene_str": qrdata.scenes_id
                }
            }
        } else {
            obj = {
                "header": {
                    "sender": "req_generate_qrcode",
                    "sender_type": "sendertype1"
                },
                "req_generate_qrcode": {
                    "account_id": qrdata.account_id,
                    "store_type": 1,
                    "expire_seconds": parseInt(qrdata.expire_seconds) * 24 * 60 * 60,
                    "scene_id": parseInt(qrdata.scenes_id)

                }
            }
        }
        let postData = qrcodePbEncoder.encode(obj);
        log.info("生成带场景的二维码请求数据:" + JSON.stringify(obj));
        let result = yield qrcodeRpcClient.sendRequest(postData, sc.guid(), 20)
        let content = qrcodePbEncoder.decode(result.content);
        log.info("生成带场景的二维码返回数据:" + JSON.stringify(content.res_generate_qrcode));
        if (content && content.res_generate_qrcode.errcode == 0) {
            qrdata.url = content.res_generate_qrcode.qrcode_url;
            qrdata.ticket_url = content.res_generate_qrcode.ticket_url;
            let result = yield* qrcodeDAO.updateQrcode(qrdata);
            let resJson = comm.response(0, content);
            res.jsonp(resJson)
        } else {
            throw content.res_generate_qrcode.errcode;
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}

/**
 * 删除二维码
 * @param req
 * @param res
 */
function* deleteQrcode(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.body && req.body.sessionid) {
        try {
            console.error(JSON.stringify(req.body))
            let result = yield* qrcodeDAO.deleteQrcode(req.body)
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        } catch (e) {
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    } else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
};

