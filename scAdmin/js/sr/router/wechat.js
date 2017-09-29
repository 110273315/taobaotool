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
        '/sr/social/wechat/*': processMessage,//ͳһ����ͻ�ģ��·��
    }
};

let msgProcesser = {
    // ����ַת�̵�ַ
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
* ����ַת�̵�ַ
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
        log.info("����ַת�̵�ַ��������:" + JSON.stringify(obj));

        let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
        let content = PbEncoder.decode(result.content);
        log.info("����ַת�̵�ַ��������:" + JSON.stringify(content.res_generate_short_url));
        if (content && content.res_generate_short_url.errcode == 0) {
            let resJson = comm.response(0, content.res_generate_short_url);
            res.jsonp(resJson)
        }else {
            throw content.res_generate_short_url.errcode;
        }
    }
    else {
        console.error("���󲻴���:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("���󲻴���:" + JSON.stringify(req.body))
    }
}