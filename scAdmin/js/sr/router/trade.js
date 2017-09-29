/**
 * Created by Ryan on 2016/07/12.
 */
'use strict'
var sc = require('smartacjs'),
    Promise = sc.Promise,
    app = sc.app(),
    log = sc.createNamedLog('sr', 'trade'),
     Rabbit = sc.RabbitMQ();
var co = require('co');
var path = require('path');
var comm = require('../../common/comm.js');
var config = app.conf;
var tradeDAO = require('../dao/tradeDAO.js');
var exportDAO = require('../dao/common.js')
var conn = app.res.getMQConnectionSync();
conn.declareExchange("amq.direct", "direct");
var rpcClient = Rabbit.createRPCClient(conn, "sr.trade.rpc");
var pbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_trade.proto.js")), "sr.trade", "Message");

exports.autoroute = {
    post: {
        '/sr/trade/srtradelist/history/query': processMessage,
        '/trade/report/total': processMessage,
        '/sr/trade/reportradet/detail': processMessage,
        '/trade/report/total/export': processMessage,
        '/trade/report/detail/export': processMessage,
        '/sr/trade/srtradelist/list': processMessage, // add by snow ,交易明细列表
        '/sr/trade/srtradelist/refund/edit': processMessage,
        '/sr/trade/srtradelist/add': processMessage
    }
};

var msgProcesser = {
    '/sr/trade/srtradelist/history/query': tradeHistoryChart,
    '/trade/report/total': queryTradeTotalReport,
    '/sr/trade/reportradet/detail': queryTradeDetailReport,
    '/trade/report/total/export': exportTradeTotal,
    '/trade/report/detail/export': exportTradeDetail,
    '/sr/trade/srtradelist/list': queryTradeList, // add by snow ,交易明细列表
    '/sr/trade/srtradelist/refund/edit': refundTrade,
    '/sr/trade/srtradelist/add': addTrade
};


function processMessage(req, res) {
    co(function* () {
        try {
            yield* msgProcesser[req.url](req, res);
        }
        catch (e) {
            var resJson = {};
            if (e instanceof app.err.SCError) {
                // 逻辑错误
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(0, e);
            }
            res.jsonp(resJson);
        };
    });
}

/*
 * 交易明细列表
 * @param req
 * @param res
 * add  by snow on 2016/3/30
 * */
function* queryTradeList(req, res) {
    let orgids = req.userinfo.getSubOrgList();
    req.body.where.orgids = orgids ? orgids : [];
    let result = yield* tradeDAO.queryTradeList(req.body);
    if (req.body.querytype == "main") {
        result = { data: result };
    }
    else if (req.body.querytype == "count") {
        result = { TotalCount: [{ count: result[0].totalcount }] };
    }
    else {
        result = yield* tradeDAO.getExportSql(req.body);
        if (result && result.insertId > 0 && result.sql) {
            let data = {};
            data.sql = result.sql;
            data.id = result.insertId;
            data.filename = "TradeInfo";
            yield* exportDAO.Export(data);
        }
        else {
            throw app.err.systemError.msg("导出错误");
        }
    }
    var resJson = comm.response(0, result);
    res.jsonp(resJson);
}


function* tradeHistoryChart(req, res) {
    let result = yield* tradeDAO.tradeHistoryChart(req.body)
    var resJson = comm.response(0, { data: result });
    res.jsonp(resJson);
}

function* addTrade(req, res) {
    console.log('trade body:'+JSON.stringify(req.body))
    var obj = {
        "header": {
            "sender": "1",
            "sender_type": "sc_admin"
        },
        "req_add_trade": {
            "trade": {
                "operater_id":req.body.createrid,
                "org_id": req.body.orgid,
                "shop_id": req.body.shopid,
                "cust_id": req.body.custid,
                "trade_no": req.body.tradeno,
                "trade_amount": req.body.tradeamount * 100,
                "trade_time": new Date(req.body.tradetime).getTime()/1000,
                "type_code": 1,
            }
        }
    };
    let postData = pbEncoder.encode(obj);
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pbEncoder.decode(result.content);
    let resJson = {};
    if (content.res_error) {
        resJson = comm.response(-1, content.res_error.errmsg);
    }
    else {
        resJson = comm.response(0, content.res_add_trade);
    }
    res.jsonp(resJson);
}

function queryTradeTotalReport(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    tradeBiz.queryTradeTotalReport(req.body)
        .then(function (result) {
            res.jsonp(result);
        });
}

function queryTradeDetailReport(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    tradeBiz.queryTradeDetailReport(req.body)
        .then(function (result) {
            res.jsonp(result);
        });
}

function exportTradeTotal(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    tradeBiz.exportTradeTotal(req.body, function (err, result) {
        res.jsonp(result);
    });
}

function exportTradeDetail(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    tradeBiz.exportTradeDetail(req.body, function (err, result) {
        res.jsonp(result);
    });
}

function* refundTrade(req, res) {
    console.log('refund trade:'+JSON.stringify(req.body))
    let r = {};
    var obj = {
        "header": {
            "sender": "1",
            "sender_type": "sc_admin"
        },
        "req_add_trade": {
            "trade": {
                "cust_id": req.body.custid,
                "trade_no": req.body.tradeno,
                "trade_amount": 0,
                "type_code": 2,
            }
        }
    };
    log.info("refund trade rpc request data："+JSON.stringify(obj));
    let postData = pbEncoder.encode(obj);
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pbEncoder.decode(result.content);
    log.info("refund trade rpc response data: "+JSON.stringify(content));
    let resJson = {};
    if (content.res_error) {
        resJson.errcode = content.res_error.errcode;
        resJson.errmsg = content.res_error.errmsg;
    }else{
        resJson.errcode = 0;
        resJson.errmsg = "退货成功";
    }
    res.jsonp(resJson);
    // }
    // else {
    //     resJson = comm.response(0, content.res_add_trade);
    // }
    // let result = yield* tradeDAO.refundTrade(req.body);
    // if (result[1][0].errorcode) {
    //     r.errcode = result[1][0].errorcode
    // } else {
    //     r.errcode = result[1][0].errorcode
    // }
    //
    // var err = r.errcode
    // switch (err) {
    //     case -10: r.errmsg = "会员不存在!"; break;
    //     case -1: r.errmsg = "已退货，无法再次退货!"; break;
    //     case -2: r.errmsg = "不允许退奖赏!"; break;
    //     case -3: r.errmsg = "礼券已使用，不允许退货!"; break;
    //     case -4: r.errmsg = "积分不够，不允许退货!"; break;
    //     case -5: r.errmsg = "系统错误!"; break;
    //     case 2: r.errmsg = "退货成功!"; break;//退货成功,但不退还奖励!
    //     case 0: r.errmsg = "退货成功!"; break;
    //     default: r.errmsg = "系统错误!";;
    // }

}