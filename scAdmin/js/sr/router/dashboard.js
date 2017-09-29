/**
 * Created by Administrator on 2015/11/23.
 */
'use strict'
var sc = require('smartacjs'),
    Promise = sc.Promise,
    app = sc.app(),
    Rabbit = sc.RabbitMQ();
var co = require('co');
var path = require('path');
var comm = require('../../common/comm.js');
var config = app.conf;
var dashboardDAO = require('../dao/dashboardDAO.js');
var conn = app.res.getMQConnectionSync();
conn.declareExchange("amq.direct", "direct");
var rpcCFClient = Rabbit.createRPCClient(conn, "cf.baidu.rpc");
var pbCFEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_baidu.proto.js")), "cf.baidu", "Message");

exports.autoroute = {
    post: {
        '/api/dashboard/dashboard/customer/query': processMessage, //今日会员
        '/api/dashboard/dashboard/coupon/query': processMessage, //今日优惠券
        '/api/dashboard/dashboard/trade/query': processMessage,//今日消费额
        '/api/dashboard/dashboard/customer/history/query': processMessage, //7天会员
        '/api/dashboard/dashboard/coupon/history/query': processMessage,   //7天优惠券
        '/api/dashboard/dashboard/trade/history/query': processMessage, //7天消费额
        '/api/dashboard/dashboard/weather/query': processMessage//天气预报
    }
};


var msgProcesser = {
    // 查询客户信息
    '/api/dashboard/dashboard/customer/query': customerQuery, //今日会员
    '/api/dashboard/dashboard/coupon/query': couponQuery, //今日优惠券
    '/api/dashboard/dashboard/trade/query': tradeQuery,//今日消费额
    '/api/dashboard/dashboard/customer/history/query': customerHistoryQuery, //7天会员
    '/api/dashboard/dashboard/coupon/history/query': couponHistoryQuery,   //7天优惠券
    '/api/dashboard/dashboard/trade/history/query': tradeHistoryQuery, //7天消费额
    '/api/dashboard/dashboard/weather/query': weatherQuery//天气预报
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
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        };
    });
}


function* customerQuery(req, res) {
    let result = yield* dashboardDAO.customerQuery();
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* couponQuery(req, res) {
    let result = yield* dashboardDAO.couponQuery();
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* tradeQuery(req, res) {
    let result = yield* dashboardDAO.tradeQuery();
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* customerHistoryQuery(req, res) {
    let result = yield* dashboardDAO.customerHistoryQuery();
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* couponHistoryQuery(req, res) {
    let result = yield* dashboardDAO.couponHistoryQuery();
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* tradeHistoryQuery(req, res) {
    let result = yield* dashboardDAO.tradeHistoryQuery();
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* weatherQuery(req, res) {
    //调用CF
    let result = yield* dashboardDAO.getCityAndCfAccount();
    console.log('天气预报配置:' + JSON.stringify(result));
    if (result.length == 2 && result[0] && result[0].length > 0 && result[0][0].keyvalue && result[1] && result[1].length > 0 && result[1][0].innerid) {
        let weather = yield app.redis.get("weather:" + result[0][0].keyvalue);
        if (weather) {
            console.log('从redis取得天气预报' + weather);
            let resJson = comm.response(0, JSON.parse(weather));
            res.jsonp(resJson);
        }
        else {
            console.log('从redis没有取得天气预报,请求cf');
            var request = {
                header: {
                    "sender": "1",
                    "sender_type": "sc_admin"
                },
                req_query_recentweathers: {
                    account_id: result[1][0].innerid,
                    city_name: result[0][0].keyvalue
                }
            };
            let postData = pbCFEncoder.encode(request);
            console.log("向cf请求天气预报");
            try {
                let rpcResult = yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
                let content = pbCFEncoder.decode(rpcResult.content);
                console.log("cf返回天气预报:" + JSON.stringify(content));
                if (content && content.res_error) {
                    let resJson = comm.response(-1, "向CF请求天气预报出错:" + content.res_error.errmsg);
                    res.jsonp(resJson);
                }
                else if (content && content.res_query_recentweathers) {
                    let resJson = comm.response(0, content.res_query_recentweathers.result);
                    res.jsonp(resJson);
                    app.redis.setex("weather:" + result[0][0].keyvalue, JSON.stringify(content.res_query_recentweathers.result), 120 * 60);
                }
                else {
                    let resJson = comm.response(-1, "向CF请求天气预报出错");
                    res.jsonp(resJson);
                }
            }
            catch (e) {
                console.error("向CF请求天气预报出错:" + JSON.stringify(e));
                let resJson = comm.response(-1, "向CF请求天气预报出错" + JSON.stringify(e));
                res.jsonp(resJson);
            }
        }
    }
    else {
        let resJson = comm.response(-1, '天气预报未正确配置');
        res.jsonp(resJson);
    }
}

