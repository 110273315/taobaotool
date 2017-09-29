/**
 * Created by Key on 2016/10/21 0021.
 */
'use strict'
let sc = require('smartacjs'),
    path = require('path'),
    app = sc.app(),
    config = app.conf,
    rabbit = sc.RabbitMQ(),
    Promise = sc.Promise,
    _=sc._,
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sc', 'message'),
    co = require('co');
let conn = sc.RabbitMQ().createConnect(config.mqUrl);
conn.start()
conn.declareExchange("amq.direct", "direct");
let rpcClient = rabbit.createRPCClient(conn, "cf.wechat.rpc");
let PbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wechat.proto.js")), "cf.wechat", "Message");

exports.autoroute = {
    post: {
        '/sr/social/wechat/*': processMessage,//统一处理客户模块路由
    }
};

let msgProcesser = {
    // 长地址转短地址
    '/sr/social/wechat/long2short/query': long2short
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

/*
* 长地址转短地址
* */
function* long2short(req,res)
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.body && req.body.sessionid) {
        console.log(JSON.stringify(req.body))

        let obj = {
            "header": {
                "sender": "req_generate_short_url",
                "sender_type": "sendertype1"
            },
            "req_generate_short_url": {
                "account_id": req.body.account_id,
                "long_url": req.body.long_url
            }
        }

        let postData = PbEncoder.encode(obj);
        log.info("长地址转短地址请求数据:" + JSON.stringify(obj));

        let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
        let content = PbEncoder.decode(result.content);
        log.info("长地址转短地址返回数据:" + JSON.stringify(content.res_generate_short_url));
        if (content && content.res_generate_short_url.errcode == 0) {
            let resJson = comm.response(0, content.res_generate_short_url);
            res.jsonp(resJson)
        }else {
            throw content.res_generate_short_url.errcode;
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}