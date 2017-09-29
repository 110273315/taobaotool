'use strict';
var sc = require('smartacjs'),
    app = sc.app();
var co = require('co');
var path = require('path');
var comm = require('../../common/comm.js');
var config = app.conf;
var pointDAO = require('../dao/pointDAO.js');
let Rabbit = sc.RabbitMQ();
let mqconn = app.res.getMQConnectionSync();
let pointRpcClient = Rabbit.createRPCClient(mqconn, "sr.customer.point.rpc");
let pointEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer_point.proto.js")), "sr.customer.point", "Message");
exports.autoroute = {
    post: {
        '/sr/point/point/*': processMessage,//统一处理客户模块路由
    }
};
var msgProcesser = {
    '/sr/point/point/receipt/add': changePoint,//添加积分
    '/sr/point/point/disburse/add': changePoint,//消费积分
    '/sr/point/point/main/query': queryCustPointMain,//积分概要
    '/sr/point/point/detail/search': queryCustPointDetail//积分明细
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
        }

    });
}
function* changePoint(req, res) {
    let model = req.body;
    let pointnum;
    if (model.typeid == 1) {
        pointnum = model.addednum;
    }
    else {
        pointnum = model.disbursednum * (-1);
    }
    var obj = {
        "header": {
            "sender": "req_change_point",
            "sender_type": "sendertype1"
        },
        "req_change_point": {
            "csc": {
                "id": model.custid
            },
            "value": parseInt(pointnum),
            "psi": {
                "source_type": model.channelcode,
                "source_id": model.sourceid
            },
            "expire_time": model.duetime ? Date.parse(model.duetime) / 100 : 0,
            "remark": model.remark,
            "attach": JSON.stringify({
                "tradeid": model.tradeid,
                "tradeamount": model.tradeamount,
                "isenable": parseInt(model.isenable)
            }),
            "operater_id":model.createrid
        }
    };
    let postData = pointEncoder.encode(obj);
    let result = yield pointRpcClient.sendRequest(postData, sc.guid(), 10);
    var r = {};
    r.errcode = 0;
    r.errmsg = "ok";
    r.msgbody = {};
    let content = pointEncoder.decode(result.content);
    if (content) {
        r.errcode = 0;
        r.errmsg = "success";
        r.msgbody.id = content.res_change_point.point_id;
        r.msgbody.valid_value = content.res_change_point.valid_value;
        res.jsonp(r);
        let pointinfo = yield* pointDAO.getPointInfo(content.res_change_point.point_id, model.typeid);
        if (pointinfo.length > 0 && pointinfo[0].point !== 0 && app.notify_helper.isInited) {
            yield* app.notify_helper.sendTemplateNotify('systemchangepoint', model.custid,
                [{
                    key: 'custname',
                    value: '会员名称'
                }, {
                    key: 'custnamevalue',
                    value: pointinfo[0].name
                }, {
                    key: 'point',
                    value: Math.abs(pointinfo[0].point).toString()
                }, {
                    key: 'changetype',
                    value: (model.typeid == 1 ? "上调" : "下调"),
                }, {
                    key: 'currenttotalnum',
                    value: pointinfo[0].currenttotalnum.toString(),
                }]);
        }
    }
    else {
        r.errcode = 0;
        r.errmsg = "无数据";
        r.msgbody.id = 0;
        res.jsonp(r);
    }

}

function* queryCustPointMain(req, res) {
    let model = req.body;
    var obj = {
        "header": {
            "sender": "req_query_point_summary",
            "sender_type": "sendertype1"
        },
        "req_query_point_summary": {
            "csc": {
                "id": model.custid,
                "mobile": model.mobile,
                "card_id": model.cardno
            }
        }
    };
    let postData = pointEncoder.encode(obj);
    let result = yield pointRpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pointEncoder.decode(result.content);
    var r = {};
    r.errcode = 0;
    r.errmsg = "ok";
    r.msgbody = {};
    if (content) {
        r.errcode = 0;
        r.msgbody = content.res_query_point_summary.summary;
    }
    res.jsonp(r);
}

function* queryCustPointDetail(req, res) {
    let model = req.body;
    var obj = {
        "header": {
            "sender": "req_query_point_detail",
            "sender_type": "sendertype1"
        },
        "req_query_point_detail": {
            "csc": {
                "id": model.where.custid
            },
            "dsc": {
                "time_begin": model.where.begindate,
                "time_end": model.where.enddate,
                "order_by": model.order.column,
                "order_type": model.order.type,
                "page_size": parseInt(model.page.num),
                "page_index": parseInt(model.page.index)
            }
        }
    };
    let postData = pointEncoder.encode(obj);
    let result = yield pointRpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pointEncoder.decode(result.content);
    var r = {};
    r.errcode = 0;
    r.errmsg = "ok";
    r.msgbody = {};
    r.msgbody.TotalCount = [];
    r.msgbody.data = [];
    if (content) {
        r.msgbody.data = content.res_query_point_detail.pi;
        r.msgbody.TotalCount.push({ "count": content.res_query_point_detail.page_info.item_count });
    }
    console.error("返回结果==" + JSON.stringify(content));
    res.jsonp(r);
}