'use strict';
var sc = require('smartacjs'),
    app = sc.app();
var co = require('co');
var path = require('path');
var comm = require('../../common/comm.js');
var config = app.conf;
var couponDAO = require('../dao/couponDAO.js');
let exportDAO = require('../dao/common.js');
let log = sc.createNamedLog('scAdmin', 'coupon');
let Rabbit = sc.RabbitMQ();
let mqconn = app.res.getMQConnectionSync();
let couponRpcClient = Rabbit.createRPCClient(mqconn, "sr.customer.coupon_class.rpc");
let couponRpcClient2 = Rabbit.createRPCClient(mqconn, "sr.customer.coupon.rpc");
let couponEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer_coupon.proto.js")), "sr.customer.coupon", "Message");
var rpcCFClient = Rabbit.createRPCClient(mqconn, "cf.wechat.rpc");
var pbCFEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wechat.proto.js")), "cf.wechat", "Message");
let rpcCFPayClient = Rabbit.createRPCClient(mqconn, "cf.wxpay.rpc");
let cfPayEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wxpay.proto.js")), "cf.wxpay", "Message");
let rpcPointClient = Rabbit.createRPCClient(mqconn, "sr.customer.point.rpc");
let pointEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer_point.proto.js")), "sr.customer.point", "Message");

//var appServer = require('../../../../scAPPServer/js/mq_interface.js');
exports.autoroute = {
    get: {

    },
    post: {
        '/sr/reward/coupon/add': couponTemplateAdd,  // 礼券模板新增
        '/sr/reward/coupon/edit': couponTemplateEdit,  // 礼券模板编辑
        '/sr/reward/coupon/list': getCouponList,//查询礼券列表
        '/sr/reward/coupon/maxcount/edit': updateCouponMaxCount, //更新库存
        '/sr/reward/coupon/status/edit': updateCouponStatus, //更新礼券状态
        '/sr/reward/coupon/log/list': getCouponLogList,//礼券日志列表
        '/sr/reward/coupon/instance/list': getCouponInstanceList,//礼券核销明细
        '/sr/reward/coupon/settlement/list': getAllSettlement,//获取结算方
        '/sr/reward/coupon/query': getCouponDetailById,//获取礼券明细
        '/sr/reward/coupon/cfaccount/list': cfAccountList,//获取cf账号
        '/sr/reward/coupon/enabled/list': getAllEnableCouponList,//获取所有启用礼券
        '/sr/reward/coupon/cust/list': getCouponListByCustId,//根据会员id获取礼券列表
        '/reward/coupon/history/list': getCouponHistory,//获取礼券核销历史
        '/coupon/order/list': queryCouponOrderList,//获取订单列表
        '/coupon/order/query': getCouponOrderById,//获取订单详情
        '/coupon/order/delivery/edit': deliverOrder,//发货
        '/coupon/order/refund/edit': refundOrder,//退货
        '/coupon/order/cancel/edit': cancelOrder//取消订单
    }
};

// var msgProcesser = {
//     '/sr/reward/coupon/list': getCouponList,
//     '/sr/reward/coupon/query': getCouponDetailById,
//     '/sr/reward/coupon/status/edit': updateCouponStatus,
//     '/sr/reward/coupon/add': addCoupon,
//     '/sr/reward/coupon/edit': updateCoupon,
//     //'/reward/coupon/history/list': getCouponHistory,
//     '/sr/reward/coupon/settlement/list': getAllSettlement,
//     '/sr/reward/coupon/shop/list': getAllShop,
//     '/sr/reward/coupon/maxcount/edit': updateCouponMaxCount,
//     '/sr/reward/coupon/instance/list': getCouponInstanceList,
//     //'/reward/coupon/use/edit': useCoupon,
//     '/sr/reward/coupon/cust/list': getCouponListByCustId,
//     '/sr/reward/coupon/enabled/list': getAllEnableCouponList,
//     '/sr/reward/coupon/export/list': getExportList, //������ʷ
//     '/sr/reward/coupon/import/list': getCouponImportHistoryList,  //ϵͳ������ʷ
//     '/sr/reward/coupon/import/add': importCoupon,
//     '/sr/reward/coupon/cfaccount/list':cfAccountList
//     //'/reward/coupon/rule/list': getCouponRuleList,
//     //'/reward/coupon/rule/query': getCouponRuleDetailById,
//     //'/reward/coupon/rule/edit': updateCouponRule,
//     //'/reward/coupon/rule/del': deleteCouponRule,
//     //'/reward/coupon/rule/type': getValidRuleListByType,
//     //'/reward/coupon/useCouponTest': useCouponTest,
//     //'/reward/coupon/queryCouponTemp/': queryCouponTemp //test spay
// };


/**
 * 获取礼券模板列表
 */
function getCouponList(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson, sort, page, condition, querytype, orgids;
        if (req) {

            if (req.body) {
                orgids = req.userinfo.getSubOrgList();
                condition = req.body.where ? req.body.where : { orgids: null };
                condition.orgids = orgids ? orgids : [];
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
            if (querytype == "main") {

                let result = yield* couponDAO.getCouponList(condition, sort, page);
                resJson = comm.response(0, result);
                res.jsonp(resJson);
            }
            else if (querytype == "count") {
                let result = yield* couponDAO.getCouponCount(condition, sort, page);
                var _json = {
                    TotalCount: result
                };
                resJson = comm.response(0, _json);
                res.jsonp(resJson);

            }
            else {
                let r = yield* couponDAO.getExportSql(condition, sort, page, 1);
                let result = r.result;
                if (result && result.insertId > 0) {
                    let data = {};
                    data.sql = r.sql;
                    data.id = result.insertId;
                    data.filename = "Coupon";
                    yield* exportDAO.Export(data);
                    resJson = comm.response(0, '');
                    res.jsonp(resJson);
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
/**
 * 获取礼券模板信息
 */
function getCouponDetailById(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let resJson;
        let id;
        if (req.body) {
            id = req.body.id;
            let obj = {
                coupondata: yield* couponDAO.getCouponDetailById(id),
                settlementdata: yield* couponDAO.getSettlementListById(id),
                shopdata: yield* couponDAO.getShopListById(id),
                rule_list: yield* couponDAO.getCouponRuleById(id),
                allShopCount: yield* couponDAO.getAllShopCount(false, null)
            };
            console.log('coupon data:' + JSON.stringify(obj))
            resJson = comm.response(0, obj);
            res.jsonp(resJson);
        }
        else {
            resJson = comm.response(config.status.FAILURE, 'no parameter');
            res.jsonp(resJson);
        }
    })
}

/**
 * 获取礼券模板日志列表
 */
function getCouponLogList(req, res) {
    co(function* () {
        try {
            var resJson;
            var sort, page, condition, querytype;
            if (req) {
                if (req.body) {
                    condition = req.body.where ? req.body.where : null;
                    sort = req.body.order ? req.body.order : null;
                    page = req.body.page ? req.body.page : null;
                    querytype = req.body.querytype ? req.body.querytype : (req.query.querytype ? req.query.querytype : null);
                }
                let result;
                if (querytype == 'main') {
                    result = yield* couponDAO.getCouponLogList(condition, sort, page);
                }
                else if (querytype == 'count') {
                    result = yield* couponDAO.getCouponLogCount(condition);
                }
                else {
                    throw app.err.systemError.msg("参数错误");

                }
                resJson = comm.response(0, result);
                console.log(resJson);
                res.jsonp(resJson);
            }
            else {
                throw app.err.systemError.msg("无参数");
            }
        }
        catch (e) {
            var resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(0, e);
            }
            res.jsonp(resJson);
        }
    });



}

/**
 * 更改礼券模板状态
 */
function updateCouponStatus(req, res) {
    co(function* () {
        try {
            let resJson;
            let result = yield* couponDAO.updateCouponStatus(req.body);
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        catch (e) {
            var resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(0, e);
            }
            res.jsonp(resJson);
        }
    });



}

/**
 * 获取礼券核销历史
 */
function getCouponHistory(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson;
        var sort, page, condition, querytype, orgids;
        if (req) {
            if (req.body) {
                orgids = req.userinfo.getSubOrgList();
                condition = req.body.where ? req.body.where : { orgids: null };
                condition.orgids = orgids ? orgids : [];
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
            if (querytype == "main") {
                let result = yield* couponDAO.getCouponHistoryList(condition, sort, page);
                res.jsonp(comm.response(0, result));
            }
            else if (querytype == "count") {
                let result = yield* couponDAO.getCouponHistoryCount(condition, sort, page);
                res.jsonp(comm.response(0, {
                    TotalCount: result
                }));
            }
            else {
                let r = yield* couponDAO.getCouponHistoryExport(condition);
                let result = r.result;
                if (result && result.insertId > 0) {
                    let data = {};
                    data.sql = r.sql;
                    data.id = result.insertId;
                    data.filename = "Coupon";
                    yield* exportDAO.Export(data);
                    resJson = comm.response(0, '');
                    res.jsonp(resJson);
                }
                else {
                    resJson = comm.response(-1, 'export fail');
                    res.jsonp(resJson);
                }

            }

        }
    });
}

/**
 * 获取礼券结算方
 */
function getAllSettlement(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let result = yield* couponDAO.getAllSettlement();
        res.jsonp(comm.response(0, result));
    })
}

/**
 * 获取所有店铺
 */
function getAllShop(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson;
        var sort, page, condition, querytype;
        if (req) {
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
        }
        var _sort, _page;
        if (sort) {
            _sort = { column: sort.name, type: sort.type };
        }
        if (page) {
            _page = { index: page.num, num: page.item };
        }
        if (querytype == "main") {
            let result = yield* couponDAO.getAllShopData(condition, _sort, _page, true);
            res.jsonp(comm.response(0, result));
        }
        else if (querytype == "count") {
            let result = yield* couponDAO.getAllShopCount(condition, _sort, _page, true);
            res.jsonp(comm.response(0, {
                TotalCount: result
            }));

        }
        else if (querytype == "mainWithoutPaging") {
            let result = yield couponDAO.getAllShopData(condition, _sort, _page, false);
            res.jsonp(comm.response(0, result));
        }
    })
}

/**
 * 更新礼券库存
 */
function updateCouponMaxCount(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let couponResult = yield* couponDAO.checkCouponExist(req.body);
        if (couponResult && couponResult.length > 0) {
            let couponReserve = yield* couponDAO.checkCouponReserve(req.body);
            log.info("剩余库存:" + couponReserve)
            let remaincount = parseInt(couponReserve) + parseInt(req.body.count)
            if (remaincount < 0) {
                log.error("Stock is less than 0!")
                res.jsonp(comm.response(-2, { errcode: -2, errmsg: "库存小于0!" }));
                return;
            }
            let result = yield* couponDAO.updateCouponMaxCount(req.body);
            res.jsonp(comm.response(0, result));
            try {
                if (couponResult[0].wechat_card_id && couponResult[0].cf_accountid) {
                    console.log("同步微信卡包库存");
                    let ex = {
                        header: {
                            "sender": "1",
                            "sender_type": "sc_admin"
                        },
                        req_coupon_template_stock_update: {
                            account_id: couponResult[0].cf_accountid,
                            coupon_template_id: couponResult[0].wechat_card_id,
                            change_value: parseInt(req.body.count)
                        }
                    };
                    let postData = pbCFEncoder.encode(ex);
                    let cfresult = yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
                    let content = pbCFEncoder.decode(cfresult.content);
                    console.log("cf库存修改结果:" + JSON.stringify(content.res_coupon_template_stock_update));
                }
            }
            catch (ex) {
                console.error("同步卡包库存失败:" + ex);
            }
        } else {
            log.error("coupon templete is not exist!");
            res.jsonp(comm.response(-1, { errcode: -1, errmsg: "礼券模板不存在!" }));
            return;
        }
    });
}

/**
 * 获取礼券实例列表
 */
function getCouponInstanceList(req, res) {
    co(function* () {
        try {
            var resJson;
            var sort, page, condition, querytype;
            if (req) {
                if (req.body) {
                    condition = req.body.where ? req.body.where : null;
                    sort = req.body.order ? req.body.order : { type: "desc", column: "ci.modifiedtime" };
                    page = req.body.page ? req.body.page : null;
                    querytype = req.body.querytype ? req.body.querytype : null;
                }

            }
            var _sort, _page;
            if (sort) {
                _sort = { column: sort.column, type: sort.type };
            }
            if (page) {
                _page = { index: page.index, num: page.num };
            }
            if (querytype == "main") {
                let result = yield* couponDAO.getCouponInstanceList(condition, _sort, _page);
                res.jsonp(comm.response(0, result));
            }
            else if (querytype == "count") {
                let result = yield* couponDAO.getCouponInstanceCount(condition, _sort, _page, true);
                res.jsonp(comm.response(0, {
                    TotalCount: result
                }));
            }
            else {
                couponDAO.getExportSql(condition, _sort, _page, 2, function (err, result, sql) {
                    if (result && result.insertId > 0) {
                        var obj = {
                            "header": {
                                "sender": "req_export_coupon",
                                "sender_type": "sendertype1"
                            },
                            "req_export_coupon": {
                                "id": result.insertId,
                                "sql": sql,
                            }
                        }
                        app.mqResource.pushMessage('coupon_import', obj);
                        res.jsonp(comm.response(0, result));
                    }
                });
            }
        }
        catch (e) {
            var resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(0, e);
            }
            res.jsonp(resJson);
        }
    });
}
/**
 * 获取启用礼券模板列表
 */
function getAllEnableCouponList(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let orgids = req.userinfo.getSubOrgList();
        let condition = req.body ? req.body : { orgids: null };
        condition.orgids = orgids ? orgids : [];
        let result = yield* couponDAO.getAllEnableCouponList(condition);
        res.jsonp(comm.response(0, result));
    })
}
/**
 * 获取导出礼券列表
 */
function getExportList(req, res) {
    co(function* () {
        var resJson;
        var sort, page, condition, querytype;
        if (req) {
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
            var _page;
            if (page) {
                _page = { index: page.num, num: page.item };
            }
            if (querytype == "main") {
                couponDAO.getExportList(condition, _page, function (err, result) {
                    if (result) {
                        res.jsonp(comm.response(0, { data: result }));
                    }
                    else {
                        res.jsonp(comm.response(-1, { data: null }));
                    }
                });
            }
            else {
                couponDAO.getExportCount(condition, function (err, result) {
                    if (result && 'length' in result && result.length > 0) {
                        res.jsonp(comm.response(0, { TotalCount: [{ count: result[0].totalcount }] }));
                    }
                    else {
                        res.jsonp(comm.response(-1, { data: null }));
                    }
                });
            }
        }
        else {
            resJson = comm.response(config.status.FAILURE, 'no parameter');
            res.jsonp(resJson);
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
    })
}
/**
 * 获取礼券导入历史
 */
function getCouponImportHistoryList(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var sort, page, condition, querytype;
        var resJson = {};
        if (req) {
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
            var _sort, _page;
            if (sort) {
                _sort = { column: sort.name, type: sort.type };
            }
            if (page) {
                _page = { index: page.num, num: page.item };
            }
            if (querytype == "main") {
                let result = yield couponDAO.getCouponImportHistoryList(condition, _sort, _page);
                res.jsonp(comm.response(0, { data: result }));
            }
            else {
                let result = yield couponDAO.getCouponImportHistoryCount(condition);
                res.jsonp(comm.response(0, { TotalCount: [{ count: result[0].totalcount }] }));
            }
        }
        else {
            resJson = comm.response(config.status.FAILURE, "no parameter");
            res.jsonp(resJson);
        }
    })
}

/**
 *导入礼券模板
 */
function importCoupon(req, res) {
    co(function* () {
        console.error(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');

        //??????????MQ
        var obj = {
            "header": {
                "sender": "req_import_coupon",
                "sender_type": "sendertype1"
            },
            "req_import_coupon": {
                "file": req.body.path,
                "coupon_id": parseInt(req.body.couponid),
                "staff_id": "",
                "original_file_name": req.body.name,
                "org_id": req.body.orgid
            }
        };

        let postData = couponEncoder.encode(obj);
        let result = yield couponRpcClient.sendRequest(postData, sc.guid(), 10);

        res.jsonp(comm.response(0, result));
    })

}
/**
 * 根据会员id获取礼券
 */
function getCouponListByCustId(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson;
        var sort, page, condition, querytype;
        if (req) {
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
            var _sort, _page;
            if (querytype == "main") {
                let result = yield* couponDAO.getCouponListByCustIdList(condition, sort, page);
                resJson = comm.response(0, { data: result });
                res.jsonp(resJson);
            }
            else if (querytype == "count") {
                let result = yield* couponDAO.getCouponListByCustIdCount(condition, _sort, _page);
                var _json = { TotalCount: result };
                resJson = comm.response(0, _json);
                res.jsonp(resJson);
            }
        }
        else {
            resJson = comm.response(config.status.FAILURE, 'no parameter');
            res.jsonp(resJson);
        }
    })
}

function cfAccountList(req, res) {
    co(function* () {
        let result = yield* couponDAO.cfAccountList();
        result = comm.response(0, result);
        res.jsonp(result);
    })
}

/**
 * 新增礼券模板
 */
function couponTemplateAdd(req, res) {
    console.log('req.body.data:' + JSON.stringify(req.body.data));
    co(function* () {
        let resJson;
        if (req && req.body && req.body.data && req.body.data.coupondata) {
            let result = yield* couponDAO.couponTemplateAdd(req.body.data);
            if (result instanceof app.err.SCError) {
                resJson = comm.response(-1, result);
            }
            else {
                if (req.body.data.coupondata.isenable_wechat_card == 1 || req.body.data.coupondata.isenable_wechat_card == '1') {
                    try {


                        console.log("卡券同步微信卡包");
                        let obj = {};
                        let coupon_type = 5;
                        if (req.body.data.coupondata.category_code == 1) {
                            coupon_type = 3;
                        } else if (req.body.data.coupondata.category_code == 2) {
                            coupon_type = 2;
                        }
                        else if (req.body.data.coupondata.category_code == 4) {
                            coupon_type = 4;
                        }
                        obj = {
                            "header": {
                                "sender": "1",
                                "sender_type": "sc_admin"
                            },
                            "req_coupon_template_create": {
                                "account_id": req.body.data.coupondata.cf_accountid,
                                "coupon_type": coupon_type,
                                "basic_info": {
                                    "logo_uuid": req.body.data.coupondata.image_id,
                                    "code_type": 3,
                                    "brand_name": config.scAdmin.brand_name,//'乐逛科技',
                                    "title": req.body.data.coupondata.name,
                                    "color": "Color010",
                                    "notice": removeHtmlTab(req.body.data.coupondata.detail_rule),
                                    "description": removeHtmlTab(req.body.data.coupondata.detail_rule),
                                    "quantity": parseInt(req.body.data.coupondata.max_assign_count),
                                    "type": parseInt(req.body.data.coupondata.valid_type_code),
                                    "begin_timestamp": req.body.data.coupondata.valid_type_code == 1 ? Date.parse(req.body.data.coupondata.valid_starttime ) / 1000 : null,
                                    "end_timestamp": req.body.data.coupondata.valid_type_code == 1 ? Date.parse(req.body.data.coupondata.valid_endtime ) / 1000 : null,
                                    "fixed_term": req.body.data.coupondata.valid_type_code == 2 ? parseInt(req.body.data.coupondata.valid_days) : null
                                },
                                "extend_info": {
                                    "use_custom_code": true,
                                    "can_give_friend": false
                                },
                                "message_cash": {
                                    "least_cost": req.body.data.coupondata.category_code == 2 ? parseInt(req.body.data.coupondata.limit_value*100) : null,
                                    "reduce_cost": req.body.data.coupondata.category_code == 2 ? parseInt(req.body.data.coupondata.coupon_value*100) : null,
                                },
                                "message_discount": {
                                    discount: req.body.data.coupondata.category_code == 1 ? parseInt((10 - req.body.data.coupondata.coupon_value) * 10) : null
                                },
                                "message_gift": {
                                    gift: req.body.data.coupondata.category_code == 4 ? req.body.data.coupondata.name : null
                                }
                            }
                        };
                        let postData = pbCFEncoder.encode(obj);
                        let cfresult = yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
                        let content = pbCFEncoder.decode(cfresult.content);
                        if (content && content.res_coupon_template_create && content.res_coupon_template_create.errcode == 0 && content.res_coupon_template_create.coupon_template_id) {
                            yield* couponDAO.updateWechatCardStatus({ id: result, statuscode: 1, templateid: content.res_coupon_template_create.coupon_template_id });
                            resJson = comm.response(0, 'OK');
                            let obj = {
                                "header": {
                                    "sender": "1",
                                    "sender_type": "sc_admin"
                                },
                                "req_coupon_template_query": {
                                    "account_id": req.body.data.coupondata.cf_accountid,
                                    "coupon_template_id": content.res_coupon_template_create.coupon_template_id
                                }
                            };
                            postData = pbCFEncoder.encode(obj);
                            cfresult = yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
                            let querycontent = pbCFEncoder.decode(cfresult.content);
                            if (querycontent && querycontent.res_coupon_template_query && querycontent.res_coupon_template_query.errcode === 0) {
                                yield* couponDAO.updateWechatCardStatus({ id: result, statuscode: querycontent.res_coupon_template_query.result.status,templateid: content.res_coupon_template_create.coupon_template_id  })
                            }
                        } else {
                            resJson = comm.response(-1, '微信卡包创建失败');
                        }
                    }
                    catch (ex) {
                        console.error("微信卡包创建失败:" + ex);
                        resJson = comm.response(-1, '微信卡包同步失败');
                    }
                }
                else {
                    resJson = comm.response(0, result);
                }
            }
            // resJson = comm.response(0, result);
            res.jsonp(resJson);
        } else {
            throw app.err.systemError.msg('no parameter');
        }
    })
}

function removeHtmlTab(tab) {
    return tab.replace(/<[^<>]+?>/g, '');//删除所有HTML标签
}
/**
 * 编辑礼券模板
 */
function couponTemplateEdit(req, res) {
    co(function* () {
        let resJson;
        if (req && req.body && req.body.data && req.body.data.coupondata) {
            let result = yield* couponDAO.couponTemplateEdit(req.body.data);
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        } else {
            throw app.err.systemError.msg('no parameter');
        }
    })
}

/**
 * 获取礼券订单列表
 */
function queryCouponOrderList(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var resJson, sort, page, condition, querytype, orgids;
        if (req) {
            if (req.body) {
                orgids = req.userinfo.getSubOrgList();
                condition = req.body.where ? req.body.where : { orgids: null };
                condition.orgids = orgids ? orgids : [];
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
            if (querytype == "main") {

                let result = yield* couponDAO.getCouponOrderList(condition, sort, page);
                resJson = comm.response(0, result);
                res.jsonp(resJson);
            }
            else if (querytype == "count") {
                let result = yield* couponDAO.getCouponOrderCount(condition, sort, page);
                var _json = {
                    TotalCount: result
                };
                resJson = comm.response(0, _json);
                res.jsonp(resJson);

            }
            else {

                let r = yield* couponDAO.getExportOrderSql(condition, sort, page);
                let result = r.result;
                if (result && result.insertId > 0) {
                    let data = {};
                    data.sql = r.sql;
                    data.id = result.insertId;
                    data.filename = "CouponOrder";
                    yield* exportDAO.Export(data);
                    resJson = comm.response(0, '');
                    res.jsonp(resJson);
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

/**
 * 获取礼券订单详情
 */
function getCouponOrderById(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let resJson;
        let id;
        if (req.body) {
            id = req.body.order_id;
            let obj = {
                order_info: yield* couponDAO.getOrderDetailById(id),
                cust_info: yield* couponDAO.getOrderCustInfoById(id),
                address_info: yield* couponDAO.getOrderAddressById(id),
                history_info: yield* couponDAO.getOrderHistoryById(id)
            };
            console.log('coupon order data:' + JSON.stringify(obj))
            resJson = comm.response(0, obj);
            res.jsonp(resJson);
        }
        else {
            resJson = comm.response(config.status.FAILURE, 'no parameter');
            res.jsonp(resJson);
        }
    })
}

/**
 * 发货
 */
function deliverOrder(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        try {
            let resJson;
            log.info('req.body:' + JSON.stringify(req.body))
            if (req && req.body && req.body.data) {
                let result = yield* couponDAO.deliverOrder(req.body.data);
                if (result instanceof app.err.SCError) {
                    resJson = comm.response(-1, result);
                }
                else {
                    let data = req.body.data;
                    let coupon_result = yield* couponDAO.getCouponInfoByOrderId(data.order_id);
                    if (coupon_result.coupon_no) {
                        let msg = {
                            staff_id: data.modifier_id,
                            remark: data.remark,
                            coupon_no: coupon_result.coupon_no,
                            cust_id: coupon_result.cust_id
                        }
                        let use_coupon_result = yield* UseCoupon(msg);
                        log.info('use_coupon_result:' + JSON.stringify(use_coupon_result));
                        resJson = comm.response(0, result);
                        res.jsonp(resJson);
                    }

                }

            } else {
                throw app.err.systemError.msg('no parameter');
            }
        }
        catch (e) {
            var resJson = {};
            if (e instanceof app.err.SCError) {
                log.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                log.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(0, e);
            }
            res.jsonp(resJson);
        }

    })
}


/**
 * 退货
 */
function refundOrder(req, res) {
    co(function* () {
        try {
            res.setHeader('Access-Control-Allow-Origin', '*');
            let resJson;
            if (req && req.body && req.body.data) {
                let msg = req.body.data
                log.info('msg:'+JSON.stringify(msg))
                let coupon_order_info = yield* couponDAO.getOrderDetail(msg);
                if (coupon_order_info instanceof app.err.SCError) {
                    throw app.err.systemError.msg('get order info faild!')
                }
                else {
                    msg.cust_id = coupon_order_info.cust_id;
                    msg.modifierid = msg.modifier_id;
                    msg.order_no = coupon_order_info.no;
                    let coupon_temp_id = coupon_order_info.rule_info.coupon_temp.id;
                    let payment_type = coupon_order_info.payment_type;
                    if (msg.refund_type == 4)//2.换货
                    {
                        //2.1	验证该礼券模板可用库存left_count是否足够（从redis获取），若不足，则不允许换货
                        let left_count = yield* couponDAO.getLeftCount(coupon_temp_id);
                        if (left_count <= 0) {
                            throw app.err.as.coupon.couponLowStock;
                        }
                        else {
                            //新增订单历史记录至表sr_coupon_order_history，操作类型为‘商品换货’
                            //更新该模板可用库存数left_count(-1)，最大发放数max_assgin_count(-1)至redis
                            msg.oper_type_code = 9;
                            let exchangeGoods_result = yield* couponDAO.exchangeGoods(msg);
                            if (exchangeGoods_result instanceof app.err.SCError) {
                                throw app.err.systemError.msg('exchange good faild!')
                            }
                            resJson = comm.response(0, exchangeGoods_result);
                            res.jsonp(resJson);
                        }
                    }
                    else {
                        log.info('退货！')
                        log.info('coupon_order_info:'+JSON.stringify(coupon_order_info))
                        let point = coupon_order_info.rule_info.point;
                        let amount = coupon_order_info.rule_info.amount;
                        msg.point = point;
                        msg.amount = amount;
                        let isRefundSuccess = 1;
                        let refundAmount_result;
                        //判断该笔订单是否用微信支付，若是，调用cf微信退款接口
                        if (amount > 0 && payment_type == 1) {
                            //调用cf去微信查询是否已退款
                            let query_refund = yield* GetWXRefundResult(msg);
                            if (query_refund.errcode == 0 && query_refund.result && query_refund.result.refund_info) {
                                //款已退
                                isRefundSuccess = 1;
                                msg.third_refund_no = query_refund.result.refund_info[0].wx_refund_id;
                            }
                            else {
                                refundAmount_result = yield* RefundAmount(msg);
                                if (refundAmount_result.errcode == 0) {
                                    isRefundSuccess = 1;
                                    msg.third_refund_no = refundAmount_result.result ? refundAmount_result.result.wx_refund_id : null;
                                }
                                else {
                                    isRefundSuccess = 0;
                                }
                            }
                        }
                        if (isRefundSuccess == 1) {

                            msg.coupon_instance_id = coupon_order_info.coupon_info.id;
                            //调用SRServer积分接口req_change_point退回积分
                            if (point > 0) {
                                let returnPoint_result = yield* ReturnPoint(msg, '1');
                            }
                            //作废礼券
                            log.info('作废礼券!!')
                            let delete_coupon_result = yield* couponDAO.deleteCoupon(msg);
                            if (delete_coupon_result instanceof app.err.SCError) {
                                throw app.err.as.coupon.deletCouponFaild;
                            }
                            else {
                                //取消订单
                                let order_obj =
                                {
                                    order_id: msg.order_id,
                                    oper_type_code: formatOrderOperType(msg.refund_type),
                                    remark: msg.remark,
                                    modifierid: msg.modifierid,
                                    third_refund_no: msg.third_refund_no
                                };
                                let cancel_order_result = yield* couponDAO.cancelOrder(order_obj);
                                if (cancel_order_result instanceof app.err.SCError) {
                                    throw app.err.as.rule.cancelOrderFaild;
                                }
                                resJson = comm.response(0, cancel_order_result);
                                res.jsonp(resJson);
                            }
                        }
                        else {
                            throw app.err.as.rule.refundFaild;
                        }
                    }
                }
            } else {
                throw app.err.systemError.msg('no parameter');
            }
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

    })
}


/**
 * 取消
 */
function cancelOrder(req, res) {
    co(function* () {
        try
        {
            res.setHeader('Access-Control-Allow-Origin', '*');
            let resJson;
            if (req && req.body && req.body.data) {
                let msg = req.body.data
                let coupon_order_info = yield* couponDAO.getOrderDetail(msg);
                if (coupon_order_info instanceof app.err.SCError) {
                    throw app.err.systemError.msg('get order info faild!')
                }
                else {
                    let order_status = coupon_order_info.status;
                    let coupon_temp_data = coupon_order_info.rule_info.coupon_temp;
                    if ((coupon_temp_data.type == 4 && order_status == 5) || (coupon_temp_data.type != 4 && order_status == 2)) {
                        msg.cust_id = coupon_order_info.cust_id;
                        msg.order_no = coupon_order_info.no;
                        let payment_type = coupon_order_info.payment_type;
                        let point = coupon_order_info.rule_info.point;
                        let amount = coupon_order_info.rule_info.amount;
                        msg.point = point;
                        msg.amount = amount;
                        let isRefundSuccess = 1;
                        let refundAmount_result;
                        //判断该笔订单是否用微信支付，若是，调用cf微信退款接口
                        if (amount > 0 && payment_type == 1) {
                            //调用cf去微信查询是否已退款
                            let query_refund = yield* GetWXRefundResult(msg);
                            log.info('query_refund:'+JSON.stringify(query_refund))
                            if (query_refund.errcode == 0 && query_refund.result && query_refund.result.refund_info) {
                                //款已退
                                isRefundSuccess = 1;
                                msg.third_refund_no = query_refund.result.refund_info[0].wx_refund_id;
                            }
                            else {
                                refundAmount_result = yield* RefundAmount(msg);
                                if (refundAmount_result.errcode == 0) {
                                    isRefundSuccess = 1;
                                    msg.third_refund_no = refundAmount_result.result ? refundAmount_result.result.wx_refund_id : null;
                                }
                                else {
                                    isRefundSuccess = 0;
                                }
                            }
                        }
                        if (isRefundSuccess == 1) {

                            msg.coupon_instance_id = coupon_order_info.coupon_info.id;
                            //调用SRServer积分接口req_change_point退回积分
                            if (point > 0) {
                                let returnPoint_result = yield* ReturnPoint(msg, "1");
                            }
                            //作废礼券
                            let delete_coupon_result = yield*  couponDAO.deleteCoupon(msg);
                            if (delete_coupon_result instanceof app.err.SCError) {
                                throw app.err.as.coupon.deletCouponFaild;
                            }
                            else {
                                //取消订单
                                let order_obj =
                                {
                                    order_id: msg.order_id,
                                    oper_type_code: 6,
                                    remark: msg.remark,
                                    modifierid: msg.modifierid,
                                    third_refund_no: msg.third_refund_no
                                };
                                let cancel_order_result = yield*  couponDAO.cancelOrder(order_obj);
                                if (cancel_order_result instanceof app.err.SCError) {
                                    throw app.err.as.rule.cancelOrderFaild;
                                }
                                else {
                                    resJson = comm.response(0, cancel_order_result);
                                    res.jsonp(resJson);
                                }
                            }
                        }
                        else {
                            throw app.err.as.rule.refundFaild;
                        }
                    }
                    else {
                        throw app.err.as.rule.notAllowRefund;
                    }

                }
            }
            else {
                throw app.err.systemError.msg('no parameter');
            }
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

    })
}

let _utility = {
    getResContent: (key, resData, pbEncoder) => {
        if (resData && 'content' in resData) {
            let content = pbEncoder.decode(resData.content);

            if (key in content) {
                return content[key];
            } else {
                console.warn(key + " error! " + key + " is empty!resData=%s", resData);
                return _utility.getResStatusMsg(app.err.noFound);
            }
        } else {
            console.warn(key + " error! resData is empty!resData=%s", resData);
            return _utility.getResStatusMsg(app.err.noFound);
        }
    }
}

/**
 * 查询微信退货状态
 * @param msg
 */
function* GetWXRefundResult(msg) {
    let req_wxpay_query_refund = {
        "header": {
            "sender": "1",
            "sender_type": "sc_admin"
        },
        "req_wxpay_query_refund": {
            "account_id": app.conf.scAdmin.account.wxpay,
            "trade_no": msg.order_no
        }
    };
    log.debug('ready to send request to cf req_wxpay_query_refund, data=%s', JSON.stringify(req_wxpay_query_refund));
    let postData = cfPayEncoder.encode(req_wxpay_query_refund);
    let res_wxpay_query_refund = yield rpcCFPayClient.sendRequest(postData, sc.guid(), 10);
    res_wxpay_query_refund = cfPayEncoder.decode(res_wxpay_query_refund.content);
    log.debug('req_wxpay_query_refund get result from cfserver res_wxpay_query_refund, result=%s', JSON.stringify(res_wxpay_query_refund.res_wxpay_query_refund));
    return res_wxpay_query_refund.res_wxpay_query_refund;
}

/**
 * 退金额
 * @param msg
 */
function* RefundAmount(msg) {
    let req_wxpay_apply_refund = {
        "header": {
            "sender": "1",
            "sender_type": "sc_admin"
        },
        "req_wxpay_apply_refund": {
            "account_id": app.conf.scAdmin.account.wxpay,
            "trade_no": msg.order_no,
            "refund_no": msg.order_no,
            "total_fee": msg.amount,
            "refund_fee": msg.amount
        }
    };
    log.debug('ready to send request to cf req_wxpay_apply_refund, data=%s', JSON.stringify(req_wxpay_apply_refund));
    let postData = cfPayEncoder.encode(req_wxpay_apply_refund);
    let res_wxpay_apply_refund = yield rpcCFPayClient.sendRequest(postData, sc.guid(), 10);
    res_wxpay_apply_refund = cfPayEncoder.decode(res_wxpay_apply_refund.content);
    log.debug('req_wxpay_apply_refund get result from cfserver res_wxpay_apply_refund, result=%s', JSON.stringify(res_wxpay_apply_refund.res_wxpay_apply_refund));
    return res_wxpay_apply_refund.res_wxpay_apply_refund;
}

/**
 * 退回积分
 * @param msg：point
 */
function* ReturnPoint(msg, source_type) {
    //扣积分
    let req_change_point = {
        header: {
            sender: "1",
            sender_type: "sc_admin"
        },
        req_change_point: {
            csc: {
                id: msg.cust_id.toString()
            },
            value: msg.point,
            psi: {
                source_type: source_type,
                source_id: msg.coupon_instance_id.toString()
            }

        }
    };
    log.debug('req_change_point ready to send request to srserver req_change_point, data=%s', JSON.stringify(req_change_point));
    // 调用SRServer积分接口req_change_point退回积分
    let postData = pointEncoder.encode(req_change_point);
    let res_change_point = yield rpcPointClient.sendRequest(postData, sc.guid(), 10);
    res_change_point = pointEncoder.decode(res_change_point.content);
    log.debug('req_change_point get result from srserver result_point, result=%s', JSON.stringify(res_change_point));
    return res_change_point;
}


function* UseCoupon(msg) {
    let req_destroy_coupon = {
        header: {
            sender: "1",
            sender_type: "sc_admin"
        },
        req_destroy_coupon: {
            coupon_no: msg.coupon_no,
            staff_id: msg.staff_id,
            is_customer_check: false,
            remark: msg.remark,
            shop_id: null,
            customer_condition: {},
            destory_source: { source_type: "PC", source_id: msg.staff_id }

        }
    };
    if (msg.cust_id) {
        req_destroy_coupon.req_destroy_coupon.customer_condition = {
            id: msg.cust_id.toString()
        }
    }
    log.info('------req_destroy_coupon---' + JSON.stringify(req_destroy_coupon))
    req_destroy_coupon = couponEncoder.encode(req_destroy_coupon);
    let result = yield couponRpcClient2.sendRequest(req_destroy_coupon, '', 0);
    result = couponEncoder.decode(result.content);
    log.info('result:' + JSON.stringify(result));
    if (!result.res_error) {
        return null;
    }
    else {
        let useErrorCode;
        useErrorCode = result.res_error.errcode;
        if (useErrorCode == app.err.sr.coupon.couponInstanceNotExist.errcode) {

            log.warn('礼券编码为' + msg.coupon_no + '在系统不存在');
            return app.err.as.coupon.couponNoNotExist;
        }

        else if (useErrorCode == app.err.sr.coupon.alreadyUsed.errcode) {
            log.warn('礼券编码为' + msg.coupon_no + '在系统已经被核销');
            return app.err.as.coupon.alreadyUsed
        }
        else if (useErrorCode == app.err.sr.coupon.disableCoupon.errcode) {
            log.warn('礼券编码为' + msg.coupon_no + '在系统已经被禁用');
            return app.err.as.coupon.disableCoupon
        }
        else if (useErrorCode == app.err.sr.coupon.alreadyLocked.errcode) {
            log.warn('礼券编码为' + msg.coupon_no + '在系统被其他程序锁定');
            return app.err.sr.coupon.alreadyLocked
        }
        else if (useErrorCode == app.err.sr.coupon.invalidCoupon.errcode) {
            log.warn('礼券编码为' + msg.coupon_no + '已经过期');
            return app.err.as.coupon.invalidCoupon
        }
        else {
            log.error('调用srserver接口核销礼券' + msg.coupon_no + '失败！');
            return app.err.systemError;
        }
    }
}

function formatOrderOperType(refund_type) {
    refund_type = parseInt(refund_type)
    switch (refund_type) {
        case 2:
            return 7;
        case 3:
            return 8;
    }
}
