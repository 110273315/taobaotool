/**
 * Created by Kyler on 2016/2/25 0025.
 */
'use strict'
let sc = require('smartacjs'),
    path = require('path'),
    app = sc.app(),
    config = app.conf,
    rabbit = sc.RabbitMQ(),
    Promise = sc.Promise,
    _=sc._,
    reportDAO = require('../dao/reportDAO.js'),
    exportDAO = require('../dao/common.js'),
    couponDAO = require('../dao/couponDAO.js'),
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sc', 'report'),
    co = require('co');

exports.autoroute = {
    post: {
        '/sr/report/getcouponsettlement/list':getcouponsettlementList, //查询卡券结算方报表
        '/sr/report/exportsettlementdetail/list':exportsettlementdetail,//导出结算方明细
        '/sr/report/coupon/exchange/proportion/list':pointcouponexchange, //积分商城兑换占比
        '/sr/report/othercouponexchange/list':othercouponexchange, //非积分商城核销占比
        '/sr/report/coupon/use/proportion/list':couponusesend, //礼券领取核销比
        '/sr/report/getcouponList/list':getcouponList, //获取可用礼券
        //'/sr/report/getcouponList/list':getcouponList, //查询卡券
        //'/sr/report/getsettlementList/list':getsettlementList, //查询结算方
        //
        //'/sr/report/couponexchange':couponexchange, //礼券兑换报表
        //'/sr/report/couponexchangedetail':couponexchangedetail //礼券兑换明细报表
        '/sr/report/coupon/order/list':queryCouponOrderReportList//订单报表
    }
};

/*
* 礼券结算方
* */
function getcouponsettlementList(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson, sort, page, condition, querytype;
        if (req && req.body) {
            condition = req.body.where ? req.body.where : null;
            sort = req.body.order ? req.body.order : null;
            page = req.body.page ? req.body.page : null;
            querytype = req.body.querytype ? req.body.querytype : null;
            let result;
            if (querytype == 'main') {
                result = yield* reportDAO.couponSettlementList(condition, sort, page, querytype);
            } else if (querytype == 'count') {
                let count = yield* reportDAO.couponSettlementList(condition, null, null, querytype);
                result = {
                    TotalCount: count
                };
            }else if (querytype == 'export') {
                let r = yield* reportDAO.couponSettlementList(condition, sort, page, querytype);
                let result = r.result;
                if (result && result.insertId > 0) {
                    let data = {};
                    data.sql = r.sql;
                    data.id = result.insertId;
                    data.filename = "MarktingReport";
                    yield* exportDAO.Export(data);
                    resJson = comm.response(0, '');
                    res.jsonp(resJson);
                }
                else {
                    resJson = comm.response(-1, '礼券结算报表出失败!');
                    res.jsonp(resJson);
                }
            } else {
                resJson = comm.response(config.status.FAILURE, '参数错误!');
                res.jsonp(resJson);

            }
            resJson = comm.response(0, result);
            console.log(resJson);
            res.jsonp(resJson);
        }
        else {
            resJson = comm.response(config.status.FAILURE, 'express frame error!');
            res.jsonp(resJson);
        }
    })
}

/*
 * 导出礼券结算方明细
 * */
function exportsettlementdetail(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson,condition;
        if (req&&req.body) {
            condition = req.body ? req.body : null;
            let r = yield* reportDAO.getSettlementExportSql(condition);
            let result = r.result;
            if (result && result.insertId > 0) {
                let data = {};
                data.sql = r.sql;
                data.id = result.insertId;
                data.filename = "MarktingReport";
                yield* exportDAO.Export(data);
                resJson = comm.response(0, '');
                res.jsonp(resJson);
            }
            else {
                resJson = comm.response(-1, '结算方明细导出失败!');
                res.jsonp(resJson);
            }
        }
        else {
            resJson = comm.response(config.status.FAILURE, 'express frame error!');
            res.jsonp(resJson);
        }
    })
}

/*
 * 积分商城兑换占比
 * */
function pointcouponexchange(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson,condition;
        if (req && req.body) {
            condition = req.body ? req.body : null;
            let result = yield* reportDAO.pointcouponexchange(condition);
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        else {
            resJson = comm.response(config.status.FAILURE, '请求错误!');
            res.jsonp(resJson);
        }
    })
}

/*
 * 非积分商城兑换占比
 * */
function othercouponexchange(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson,condition;
        if (req && req.body) {
            condition = req.body ? req.body : null;
            let result = yield* reportDAO.othercouponexchange(condition);
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        else {
            resJson = comm.response(config.status.FAILURE, '请求错误!');
            res.jsonp(resJson);
        }
    })
}


/*
 * 礼券领取核销比
 * */
function couponusesend(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson,condition;
        if (req && req.body) {
            condition = req.body ? req.body : null;
            let result = yield* reportDAO.couponusesend(condition);
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        else {
            resJson = comm.response(config.status.FAILURE, '请求错误!');
            res.jsonp(resJson);
        }
    })
}

/*
* 查询有效的礼券
* */
function getcouponList(req,res){
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson;
        if (req && req.body) {
            let result = yield* reportDAO.getCouponList();
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        else {
            resJson = comm.response(config.status.FAILURE, '请求错误!');
            res.jsonp(resJson);
        }
    })
}
/*
 * 获取订单列表
 * */
function queryCouponOrderReportList(req,res){
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson,sort, page, condition, querytype,orgids;
        if (req) {
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
            if (querytype == "main") {

                let result = yield* couponDAO.getCouponOrderReportList(condition, sort, page);
                resJson = comm.response(0, result);
                res.jsonp(resJson);
            }
            else if (querytype == "count") {
                let result = yield* couponDAO.getCouponOrderReportCount(condition);
                var _json = {
                    TotalCount: result
                };
                resJson = comm.response(0, _json);
                res.jsonp(resJson);

            }
            else if (querytype == "statistic") {

                let result = yield* couponDAO.getCouponOrderReportStatistic(condition);
                resJson = comm.response(0, result);
                res.jsonp(resJson);
            }
            else {
                log.info('start export order report')
                let r = yield* couponDAO.getExportOrderReportSql(condition, sort, page);
                let result = r.result;
                if (result && result.insertId > 0) {
                    let data = {};
                    data.sql = r.sql;
                    data.id = result.insertId;
                    data.filename = "CouponOrder";
                    yield* exportDAO.Export(data);
                    resJson = comm.response(0, '');
                    res.jsonp(resJson);
                    log.info('finish export order report')
                }
                else {
                    resJson = comm.response(-1, 'export fail');
                    res.jsonp(resJson);
                }

            }
        }
        else {
            resJson = comm.response(config.status.FAILURE, 'no parameter');
            res.jsonp(resJson);
        }
    })

}


/*
* 获取结算方
* */
function getsettlementList(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resJson, sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = {};

            sort = { "column": "innerid", "type": "DESC" };
            //page = { "num": req.body.page.item, "index": req.body.page.num };
            querytype = req.body.querytype;
        }
        couponBiz.settlementList(condition, sort, page, querytype,
            function (pages) {
                resJson = comm.response(config.status.OK, pages);
                res.jsonp(resJson);
            });
    }
    else {
        resJson = comm.response(config.status.FAILURE, 'express frame error!');
        res.jsonp(resJson);
    }
}

/*
* 礼券兑换报表
* */
function couponexchange(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resJson, sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = {};

            if(req.body.where)
            {
                condition = req.body.where;
            }

            sort = { "column": "id", "type": "DESC" };
            querytype = req.body.querytype;
            if (querytype != 'export') {
                page = {"num": req.body.page.item, "index": req.body.page.num};
            }
        }
        couponBiz.couponExchangeList(condition, sort, page, querytype,
            function (pages) {
                if (querytype != 'export') {
                    resJson = comm.response(config.status.OK, pages);
                    res.jsonp(resJson);
                }
                else {
                    resJson = comm.response(config.status.OK, '');
                    res.jsonp(resJson);
                }
            });
    }
    else {
        resJson = comm.response(config.status.FAILURE, 'express frame error!');
        res.jsonp(resJson);
    }

}

/*
 * 礼券兑换明细报表
 * */
function couponexchangedetail(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resJson, sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = {};

            if(req.body.where)
            {
                condition = req.body.where;
            }

            sort = { "column": "sr_report_coupon_exchange_detail.exchangedate", "type": "DESC" };
            querytype = req.body.querytype;
            if (querytype != 'export') {
                page = {"num": req.body.page.item, "index": req.body.page.num};
            }
        }
        couponBiz.couponExchangedetailList(condition, sort, page, querytype,
            function (pages) {
                if (querytype != 'export') {
                    resJson = comm.response(config.status.OK, pages);
                    res.jsonp(resJson);
                }
                else {
                    resJson = comm.response(config.status.OK, '');
                    res.jsonp(resJson);
                }
            });
    }
    else {
        resJson = comm.response(config.status.FAILURE, 'express frame error!');
        res.jsonp(resJson);
    }

}

/**
 * 获取导出订单列表
 */
// function getExportOrderList(req, res) {
//     co(function* () {
//         var resJson;
//         var sort, page, condition, querytype;
//         if (req) {
//             if (req.body) {
//                 condition = req.body.where ? req.body.where : null;
//                 sort = req.body.order ? req.body.order : null;
//                 page = req.body.page ? req.body.page : null;
//                 querytype = req.body.querytype ? req.body.querytype : null;
//             }
//             var _page;
//             if (page) {
//                 _page = { index: page.num, num: page.item };
//             }
//             if (querytype == "main") {
//                 couponDAO.getExportOrderList(condition, _page, function (err, result) {
//                     if (result) {
//                         res.jsonp(comm.response(0, { data: result }));
//                     }
//                     else {
//                         res.jsonp(comm.response(-1, { data: null }));
//                     }
//                 });
//             }
//             else {
//                 couponDAO.getExportOrderCount(condition, function (err, result) {
//                     if (result && 'length' in result && result.length > 0) {
//                         res.jsonp(comm.response(0, { TotalCount: [{ count: result[0].totalcount }] }));
//                     }
//                     else {
//                         res.jsonp(comm.response(-1, { data: null }));
//                     }
//                 });
//             }
//         }
//         else {
//             resJson = comm.response(config.status.FAILURE, 'no parameter');
//             res.jsonp(resJson);
//         }
//         res.setHeader('Access-Control-Allow-Origin', '*');
//     })
// }