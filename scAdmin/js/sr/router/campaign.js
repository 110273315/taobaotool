/**
 * Created by Administrator on 2015/11/23.
 */
'use strict';
var sc = require('smartacjs'),
    app = sc.app();
var co = require('co');
var comm = require('../../common/comm.js');
var path = require('path');
let moment = require('moment');
var config = app.conf;
var campaignDAO = require('../dao/campaignDAO.js');
let Rabbit = sc.RabbitMQ();
let mqconn = app.res.getMQConnectionSync();
var tagRpcClient = Rabbit.createRPCClient(mqconn, "sr.customer.tag.rpc");
let pointRpcClient = Rabbit.createRPCClient(mqconn, "sr.customer.point.rpc");
let pointEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer_point.proto.js")), "sr.customer.point", "Message");
var tagEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer_tag.proto.js")), "sr.customer.tag", "Message");
let exportDAO = require('../dao/common.js');
exports.autoroute = {
    post: {
        // 查询客户信息
        '/sr/campaign/campaignlist/list': getCampaignList, //活动列表查询
        '/sr/campaign/campaignlist/query': searchCampaign, //查询单个活动
        '/sr/campaign/campaignlist/add': addCampaign,//修改活动
        '/sr/campaign/campaignlist/edit': editCampaign,//修改活动
        '/sr/campaign/campaignlist/sort/edit': sortCampaign, //修改排序
        '/sr/campaign/campaignlist/starts/edit': editCampaignStatus, //修改状态
        '/sr/campaign/campaignlist/categorytag/list': getAllCampaignTagCategory,//获取所有类型和标签
        '/sr/campaign/campaignlist/categorytag/add': addCampaignCategoryTag,
        '/sr/campaign/campaignlist/categorytag/del': delCampaignCategoryTag,
        '/sr/campaign/campaignlist/log/list': getCampaignLogList, //获取活动操作历史
        '/sr/campaign/campaignlist/sign/list': getCampaignSignList, //获取活动报名历史
        '/sr/campaign/campaignlist/sign/log/list': getCampaignSignLogList, //获取活动报名操作历史
        '/sr/campaign/campaignlist/sign/status/edit': editSignStatus, //修改报名状态
        '/sr/campaign/campaignlist/summary/query': queryPvUvSummary, //活动pv/uv汇总
        '/sr/campaign/campaignlist/summary/list': searchPvUvDetail,//活动pv/uv明细
        '/sr/campaign/campaignlist/checkincode/resend/edit': resendCheckinCode, //重发签到码
        '/sr/campaign/campaignlist/allsessions/query':queryAllSessions,//获取某活动下面所有的场次
        '/sr/campaign/campaignlist/checkincode/query':queryCheckinCode//查看签到码
    }
};
/**
 *  查询活动所有信息(分页)
 * @param req 查询条件
 * @param res
 */
function getCampaignList(req, res) {
    co(function* () {
        var resJson;
        try {
            var sort, page, condition, querytype;
            if (req) {
                if (req.body) {
                    let orgids = req.userinfo.getSubOrgList();
                    condition = req.body.where ? req.body.where : null;
                    condition.orgids = orgids ? orgids : [];
                    sort = req.body.order ? req.body.order : null;
                    page = req.body.page ? req.body.page : null;
                    querytype = req.body.querytype ? req.body.querytype : (req.query.querytype ? req.query.querytype : null);
                }
                let result;
                if (querytype == 'main') {
                    result = yield* campaignDAO.getCampaignList(condition, sort, page);
                }
                else if (querytype == 'count') {
                    result = yield* campaignDAO.getCampaignCount(condition);
                }
                else {

                    let r = yield* campaignDAO.getCampaignExportSql(condition);
                    let result = r.result;
                    if (result && result.insertId > 0) {
                        let data = {};
                        data.sql = r.sql;
                        data.id = result.insertId;
                        data.filename = "Campaign";
                        yield* campaignDAO.ExportCampaign(data);
                        resJson = comm.response(0, '');
                        res.jsonp(resJson);
                    }
                    else {
                        resJson = comm.response(-1, 'export fail');
                        res.jsonp(resJson);
                    }

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
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function searchPvUvDetail(req, res) {
    co(function* () {
        var resJson;
        try {
            var sort, page, condition, querytype;
            if (req) {
                if (req.body) {
                    let orgids = req.userinfo.getSubOrgList();
                    condition = req.body.where ? req.body.where : null;
                    condition.orgids = orgids ? orgids : [];
                    sort = req.body.order ? req.body.order : null;
                    page = req.body.page ? req.body.page : null;
                    querytype = req.body.querytype ? req.body.querytype : (req.query.querytype ? req.query.querytype : null);
                }
                let result;
                if (querytype == 'main') {
                    result = yield* campaignDAO.searchPvUvDetail(condition, sort, page);
                }
                else if (querytype == 'count') {
                    result = yield* campaignDAO.searchPvUvDetailCount(condition);
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
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function queryPvUvSummary(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.queryPvUvSummary(req.body);
            let resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function addCampaign(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.addCampaign(req.body);
            if (result) {
                let resJson = comm.response(0, result.id);
                res.jsonp(resJson);
            }
            else {
                console.error("新增活动失败:" + JSON.stringify(req.body));
                throw app.err.systemError.msg("新增活动失败");
            }
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function sortCampaign(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.sortCampaign(req.body);
            if (result && result.affectedRows > 0) {
                let resJson = comm.response(0, result);
                res.jsonp(resJson);
            }
            else {
                console.error("活动排序失败:" + JSON.stringify(req.body));
                throw app.err.systemError.msg("活动排序失败:" + JSON.stringify(req.body));
            }
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function searchCampaign(req, res) {
    co(function* () {
        var resJson;
        try {
            console.log('start get campaign by id'+JSON.stringify(req.body));
            let result = yield* campaignDAO.searchCampaign(req.body);
            if (result instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, result);
                resJson = comm.response(result.errcode, result.errmsg);
                res.jsonp(resJson);
            }
            else
            {
                if (result && result.length > 0) {
                    let resJson = comm.response(0, result);
                    res.jsonp(resJson);
                }
                else {
                    console.error("找不到活动:" + JSON.stringify(req.body));
                    throw app.err.noExist.msg("找不到活动:" + JSON.stringify(req.body));
                }
            }

        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function getAllCampaignTagCategory(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.getAllCampaignTagCategory(req.body.type);
            let resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });


}

function editCampaign(req, res) {
    co(function* () {
        var resJson;
        try {
            console.log('editCampaign:' + req.userinfo.getOrg().innerid);
            req.body.orgid = req.userinfo.getOrg().innerid;
            let result = yield* campaignDAO.editCampaign(req.body);
            let resJson = comm.response(0, req.body.id);
            res.jsonp(resJson);
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}


/**
 *  修改活动状态
 * @param req 活动信息
 * @param res
 */
function editCampaignStatus(req, res) {
    co(function* () {
        var resJson = {};
        try {

            if (req && req.body) {
                let result = yield* campaignDAO.editCampaignStatus(req.body);
                if (result) {
                    resJson = comm.response(0, result);
                    res.jsonp(resJson);
                }
                else {
                    throw app.err.systemError.msg("异常错误");
                }
            }
            else {
                throw app.err.systemError.msg("无参数");
            }
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function addCampaignCategoryTag(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.addCampaignCategoryTag(req.body);
            if (result && result.insertId) {
                let resJson = comm.response(0, result.insertId);
                res.jsonp(resJson);
            }
            else {
                console.error("新增类型标签失败:" + JSON.stringify(req.body));
                throw app.err.systemError.msg("新增类型标签失败");
            }
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function delCampaignCategoryTag(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.delCampaignCategoryTag(req.body.id);
            if (result && result.affectedRows) {
                let resJson = comm.response(0, 'ok');
                res.jsonp(resJson);
            }
            else {
                console.error("新增类型标签失败:" + JSON.stringify(req.body.campaign));
                throw app.err.systemError.msg("新增类型标签失败");
            }
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function resendCheckinCode(req, res) {
    co(function* () {
        var resJson;
        try {
            //发送模版消息
            if (app.notify_helper.isInited) {
                yield* sendTemplateMessageForCampaign(req.body.id, 'checkincoderesend');
                let resJson = comm.response(0, 'ok');
                res.jsonp(resJson);
            }

        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}


function editSignStatus(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.editSignStatus(req.body);
            if (result && result.affectedRows > 0) {

                let resJson = comm.response(0, result);
                res.jsonp(resJson);
                if (result.point && result.point.disbursednum) {
                    var point = {
                        "header": {
                            "sender": "req_change_point",
                            "sender_type": "sendertype1"
                        },
                        "req_change_point": {
                            "csc": {
                                "id": result.point.custid.toString()
                            },
                            "value": Math.abs(result.point.disbursednum),
                            "psi": {
                                "source_type": '6',
                                "source_id": result.point.sourceid.toString()
                            },
                            "remark": '活动报名返还',
                            "operater_id": req.body.modifierid
                        }
                    };
                    let postData = pointEncoder.encode(point);
                    let pointResult = yield pointRpcClient.sendRequest(postData, sc.guid(), 10);
                    pointResult = pointEncoder.decode(pointResult.content);
                }
                if (result.tagid) {
                    var tag = {
                        "header": {
                            "sender": "1",
                            "sender_type": app.programType
                        },
                        "req_update_cust_tag": {
                            "customer_id": result.custid.toString(),
                            "add_tag_id": [result.tagid.toString()],
                            "remove_tag_id": [],
                            "tag_channel": 1
                        }
                    };
                    let postData = tagEncoder.encode(tag);
                    let tagresult = yield tagRpcClient.sendRequest(postData, sc.guid(), 10);
                    tagresult = tagEncoder.decode(tagresult.content);
                }
                //发送模版消息
                if (app.notify_helper.isInited) {
                    yield* sendTemplateMessageForCampaign(req.body.id, 'campaigncheck');
                }
            }
            else {
                console.error("报名状态修改失败:" + JSON.stringify(req.body));
                throw app.err.systemError.msg("报名状态修改失败");
            }
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function* sendTemplateMessageForCampaign(id, key) {
    let signinfo = yield* campaignDAO.getSignInfoById(id);
    console.log("signinfo:" + JSON.stringify(signinfo));
    let status = "";
    if (signinfo.sign_info[0].status == 1) {
        status = '审核通过';
    } else if (signinfo.sign_info[0].status == 2) {
        status = '已取消';
    } else if (signinfo.sign_info[0].status == 3) {
        status = '审核未通过';
    } else if (signinfo.sign_info[0].status == 4) {
        status = '签到成功';
    }
    let message_obj = [{
        key: 'name',
        value: signinfo.sign_info[0].campaign_name
    }, {
        key: 'mobile',
        value: signinfo.sign_info[0].phone
    }, {
        key: 'customer_name',
        value: signinfo.sign_info[0].name
    }, {
        key: 'person_num',
        value: signinfo.sign_info[0].person_num.toString()
    }, {
        key: 'signtime',
        value: new Date().format("yyyy-MM-dd hh:mm:ss")
    },
    {
        key: 'checkin_code',
        value: signinfo.sign_info[0].checkin_code
    },
    {
        key: 'custom_display_address',
        value: signinfo.sign_info[0].custom_display_address
    },
    //     {
    //     key: 'seasons_name',
    //     value: signinfo.sign_info[0].seasons_name ? signinfo.sign_info[0].seasons_name : ''
    // }, {
    //     key: 'seasons_duration',
    //     value: signinfo.sign_info[0].seasons_duration ? signinfo.sign_info[0].seasons_duration : ''
    // },
        {
        key: 'status',
        value: status
    }

    ];
    console.info('message_obj' + JSON.stringify(message_obj));
    if (signinfo.sign_info[0].cust_id) {
        yield* app.notify_helper.sendTemplateNotify(key, signinfo.sign_info[0].cust_id, message_obj);
    }
    else {
        yield* app.notify_helper.sendTemplateNotifyWithMobile(key, signinfo.sign_info[0].phone, message_obj);
    }
}

function getCampaignLogList(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.getCampaignLogList(req.body.id);
            let resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function getCampaignSignLogList(req, res) {
    co(function* () {
        var resJson;
        try {
            let result = yield* campaignDAO.getCampaignSignLogList(req.body.id);
            let resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

function getCampaignSignList(req, res) {
    co(function* () {
        var resJson;
        try {
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
                    result = yield* campaignDAO.getCampaignSignList(condition, sort, page);
                }
                else if (querytype == 'count') {
                    result = yield* campaignDAO.getCampaignSignCount(condition);
                }
                else {

                    let r = yield* campaignDAO.getCampaignSignExportSql(condition);
                    let result = r.result;
                    if (result && result.insertId > 0) {
                        let data = {};
                        data.sql = r.sql;
                        data.id = result.insertId;
                        data.filename = "CampaignSignDetail";
                        yield* campaignDAO.ExportCampaign(data);
                        resJson = comm.response(0, '');
                        res.jsonp(resJson);

                    }
                    else {
                        resJson = comm.response(-1, 'export fail');
                        res.jsonp(resJson);
                    }
                    return;

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
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}


function queryAllSessions(req, res) {
    co(function*() {
        var resJson;
        try {
            console.log('req.body：'+JSON.stringify(req.body));
            let sessionList = yield* campaignDAO.queryAllSessions(req.body);
            console.log('场次列表：'+JSON.stringify(sessionList));
            let resJson = comm.response(0, sessionList);
            res.jsonp(resJson);
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}

/**
 * 根据开始时间，结束时间填充日期列表
 * @param startdate
 * @param list
 */
function getSelectDateList(item) {
    let datelist = [];
    let start_date=item.begin_date;
    //将第一天加入列表
    datelist.push({session_id:item.id,session_name:item.name,date:start_date.format("yyyy-MM-dd"),times:[]});
    //计算开始，结束相差的天数
    let diff_day=(item.end_date-item.begin_date)/24/60/60;
    for (var i = 1; i <= diff_day; i++) {
        let next_date= start_date+(i*24*60*60);
        if(next_date<=item.end_date) {
            datelist.push({session_id:item.id,session_name:item.name,date: next_date.format("yyyy-MM-dd"),times:[]});
        }
    }
    return datelist;
}


/**
 * 填充时间列表
 * @param startdate
 * @param list
 */
function getSelectTimeList(item,date_item) {
    let timelist = [];
    let start_time=item.begin_time;
    //将开始时间加入列表
    timelist.push({session_id:item.id,time_id:item.id,time:start_time});
    //计算开始，计算相差的小时数(以半小时为单位)
    let diff_span=(item.end_time-item.begin_time)/60/30;
    for (var i = 1; i <= diff_span; i++) {
        let next_time= start_time+1800;
        if(next_time<=item.end_time) {
            timelist.push({session_id:date_item.session_id,session_time_id:item.id,session_name:date_item.session_name,date:date_item.date,time:next_time});
        }
    }
    return timelist;
}


function* queryCheckinCode(req, res) {
    co(function*() {
        var resJson;
        try {
            let checkinCode = yield* campaignDAO.queryCheckinCode(req.body.sign_id);
            let resJson = comm.response(0, {checkin_code:checkinCode});
            res.jsonp(resJson);
        }
        catch (e) {
            resJson = {};
            if (e instanceof app.err.SCError) {
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        }
    });
}