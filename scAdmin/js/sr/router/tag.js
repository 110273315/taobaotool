/**
 * Created by Ryan on 2016/07/11 0023.
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
var tagDAO = require('../dao/tagDAO.js');
var exportDAO = require('../dao/common.js')
var conn = app.res.getMQConnectionSync();
conn.declareExchange("amq.direct", "direct");
var rpcClient = Rabbit.createRPCClient(conn, "sr.customer.tag.rpc");
var jobRpcClient = Rabbit.createRPCClient(conn, "sc.task.rpc");
var pbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer_tag.proto.js")), "sr.customer.tag", "Message");
var pbJobEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sc_task.proto.js")), "sc.task", "Message");


exports.autoroute = {
    post: {
        '/sr/tag/srtaglist/add': processMessage, // 新增标签
        '/sr/tag/srtaglist/edit': processMessage, //修改标签
        '/sr/tag/srtaglist/status/edit': processMessage, //标签状态更新
        '/sr/tag/srtaglist/delete/edit': processMessage, //标签删除
        '/sr/tag/srtaglist/task/list': processMessage, //标签任务查询
        '/sr/tag/srtaglist/taskdetail/list': processMessage, //标签任务详细查询
        '/sr/tag/srtaglist/cust/list': processMessage, //根据客户查询标签
        '/sr/tag/srtaglist/task/add': processMessage, //��ǩ����
        '/sr/tag/srtaglist/list': processMessage,//标签列表
        '/sr/tag/srtaglist/query': processMessage,//根据主键获取标签信息
        '/sr/tag/srtaglist/cust/add': processMessage,//��Ա��ǩҳ�޸ı�ǩ
        '/sr/tag/srtaglist/all/list': processMessage,
        '/sr/tag/srtaglist/custpre/list': processMessage
    }
};

var msgProcesser = {
    // 查询客户信息
    '/sr/tag/srtaglist/add': tagAdd, // 新增标签
    '/sr/tag/srtaglist/edit': tagEdit, //修改标签
    '/sr/tag/srtaglist/status/edit': tagStatusEdit, //标签状态更新
    '/sr/tag/srtaglist/delete/edit': tagDel, //标签删除
    '/sr/tag/srtaglist/task/list': tagSearch, //标签任务查询
    '/sr/tag/srtaglist/taskdetail/list': tagDetailSearch, //标签任务详细查询
    '/sr/tag/srtaglist/cust/list': tagbyCustIdList, //根据客户查询标签
    '/sr/tag/srtaglist/task/add': tagTaskAdd, //��ǩ����
    '/sr/tag/srtaglist/list': getTagList,//标签列表
    '/sr/tag/srtaglist/query': getTagById,//根据主键获取标签信息
    '/sr/tag/srtaglist/cust/add': addTagByCustid,//��Ա��ǩҳ�޸ı�ǩ
    '/sr/tag/srtaglist/all/list': searchTagAll,
    '/sr/tag/srtaglist/custpre/list': getCustByTagId
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


function* getCustByTagId(req, res) {
    let resJson, sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = req.body.where;
            sort = { "column": "a.taskid", "type": "DESC" };
            page = req.body.page;
            querytype = req.body.querytype;
        }
        let result;
        if (querytype == 'main') {
            result = yield* tagDAO.getCustPreList(condition, sort, page);
            result = { data: result };
        }
        else if (querytype == 'count') {
            result = yield* tagDAO.getCustPreListCount(condition);
            result = { TotalCount: result };
        }
        else {
            result = yield* tagDAO.getCustPreListReportSQL(condition);
            if (result.sql && result.insertId > 0) {
                let data = {};
                data.sql = result.sql;
                data.id = result.insertId;
                data.filename = "TagDetail";
                yield* exportDAO.Export(data);
            }
            else {
                throw app.err.systemError.msg("导出错误");
            }
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/*
 *根据主键查询标签
 * */
function* getTagById(req, res) {
    if (req && req.body && req.body.tagid) {
        let result = yield* tagDAO.getTagById(req.body.tagid);
        if (result && result.length > 0) {
            result = result[0];
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}


/*
 *标签新增
 * */
function* tagAdd(req, res) {
    if (req && req.body && req.body.tag) {
        let tag = req.body.tag;
        
        if (tag.tagname && tag.tagname.trim()) {
            tag.tagname = tag.tagname.trim();
        } else {
            let resJson = comm.response(-1, '标签名字为空');
            res.jsonp(resJson);
            return;
        }
        
        tag.starttime = (tag.hour.length == 2 ? tag.hour : '0' + tag.hour) + ":" + (tag.minute.length == 2 ? tag.minute : '0' + tag.minute) + ":00";
        if (tag.periodcode == 4) {
            tag.starttime = tag.day + ',' + tag.starttime
        }
        else if (tag.periodcode == 5) {
            tag.starttime = tag.weekday + ',' + tag.starttime
        }
        let custsql = "select id from sr_cust_customer where 1=1";
        if (tag.tagsqljson) {
            let tagsqljson = JSON.parse(tag.tagsqljson);
            let orgids = req.userinfo.getSubOrgList();
            let where = buildSQLWhere(tagsqljson.customer, orgids);
            custsql = custsql + where;
            custsql = sc.db().makeSQL(custsql, tagsqljson.customer);
        }
        tag.tagsqldesc = custsql;
        req.body.tag.orgid = req.userinfo.getOrg().innerid;
        let result = yield* tagDAO.addTag(req.body.tag);
        if (result && result.insertId > 0) {
            let type = {};

            let oldtime = new Date();
            oldtime.setSeconds(oldtime.getSeconds() + 20)
            let timestamp2 = Date.parse(oldtime);
            timestamp2 = timestamp2 / 1000;

            if (tag.jobtype == 1) {
                type = { once: { time: timestamp2 } };
            }
            else {
                type = {
                    cycle: {
                        align: true,
                        minute: parseInt(tag.minute),
                        hour: parseInt(tag.hour),
                        day: tag.periodcode == 4 ? parseInt(tag.day) : (tag.periodcode == 3 ? 1 : null),
                        month: tag.periodcode == 4 ? 1 : null,
                        week: tag.periodcode == 5 ? parseInt(tag.weekday) + 1 : null
                    }
                }
            }
            //调用JOB
            let obj = {
                header: {
                    "sender": "1",
                    "sender_type": "sc_admin"
                },
                req_add_task: {
                    task_info: {
                        source: {
                            source_id: result.insertId.toString(),
                            source_type: "tag"
                        },
                        name: tag.tagname,
                        type: "tag",
                        retry_count: 0,
                        parameter: [{ key: "tagid", value: result.insertId.toString() }, { key: "jobtype", value: tag.jobtype }],
                        plan: type,
                        desc: "打标签",
                        is_active: true
                    }
                }
            };
            console.info("Tagging request sc_task data:" + JSON.stringify(obj));
            let postData = pbJobEncoder.encode(obj);
            try {
                let rpcResult = yield jobRpcClient.sendRequest(postData, sc.guid(), 10);
                let content = pbJobEncoder.decode(rpcResult.content);
                console.info("Tagging response from sc_task data:" + JSON.stringify(content));
                if (content.res_error) {
                    let resJson = comm.response(-1, "创建JOB失败:" + content.res_error.errmsg);
                    res.jsonp(resJson);
                }
                else if (content && content.res_add_task && content.res_add_task.task_info && content.res_add_task.task_info.id) {
                    result = yield* tagDAO.updateTaskId(result.insertId, content.res_add_task.task_info.id);
                    let resJson = comm.response(0, result);
                    res.jsonp(resJson);
                }
                else {
                    let resJson = comm.response(-1, "创建JOB失败");
                    res.jsonp(resJson);
                }
            }
            catch (e) {
                console.error("tag job出错:" + JSON.stringify(e));
                let resJson = comm.response(-1, "创建job失败" + JSON.stringify(e));
                res.jsonp(resJson);
            }
        }
        else if (result && result.code == 2) {
            let resJson = comm.response(-1, '标签已存在');
            res.jsonp(resJson);
        }
        else {
            let resJson = comm.response(-1, result);
            res.jsonp(resJson);
        }

    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/*
 * 修改标签
 * */
function* tagEdit(req, res) {
    var resJson;
    if (req && req.body && req.body.tag && req.body.tag.id) {
        let tag = req.body.tag;
        tag.starttime = (tag.hour.length == 2 ? tag.hour : '0' + tag.hour) + ":" + (tag.minute.length == 2 ? tag.minute : '0' + tag.minute) + ":00";
        if (tag.periodcode == 4) {
            tag.starttime = tag.day + ',' + tag.starttime
        }
        else if (tag.periodcode == 5) {
            tag.starttime = tag.weekday + ',' + tag.starttime
        }
        let custsql = "select id from sr_cust_customer where 1=1";
        if (tag.tagsqljson) {
            let tagsqljson = JSON.parse(tag.tagsqljson);
            let orgids = req.userinfo.getSubOrgList();
            let where = buildSQLWhere(tagsqljson.customer, orgids);
            custsql = custsql + where;
            custsql = sc.db().makeSQL(custsql, tagsqljson.customer);
        }
        tag.tagsqldesc = custsql;
        let result = yield* tagDAO.editTag(req.body.tag);
        if (result && result.affectedRows > 0) {
            let type = {};
            let oldtime = new Date()
            oldtime.setSeconds(oldtime.getSeconds() + 5)
            let timestamp2 = Date.parse(oldtime);
            timestamp2 = timestamp2 / 1000;

            if (tag.jobtype == 1) {
                type = { once: { time: timestamp2 } };
            }
            else {
                type = {
                    cycle: {
                        align: true,
                        minute: parseInt(tag.minute),
                        hour: parseInt(tag.hour),
                        day: tag.periodcode == 4 ? parseInt(tag.day) : (tag.periodcode == 3 ? 1 : null),
                        month: tag.periodcode == 4 ? 1 : null,
                        week: tag.periodcode == 5 ? parseInt(tag.weekday) + 1 : null
                    }
                }
            }
            let task_info = {
                task_info: {
                    id: tag.taskid ? tag.taskid : null,
                    source: {
                        source_id: tag.id.toString(),
                        source_type: "tag"
                    },
                    name: tag.tagname,
                    retry_count: 0,
                    type: "tag",
                    parameter: [{ key: "tagid", value: tag.id.toString() }, { key: "jobtype", value: tag.jobtype }],
                    plan: type,
                    desc: "打标签",
                    is_active: true
                }
            }
            if (tag.taskid) {
                //调用JOB
                let obj = {
                    header: {
                        "sender": "1",
                        "sender_type": "sc_admin"
                    },
                    req_update_task: task_info
                };
                console.info("Tagging request sc_task data:" + JSON.stringify(obj))

                let postData = pbJobEncoder.encode(obj);
                try {
                    let rpcResult = yield jobRpcClient.sendRequest(postData, sc.guid(), 10);
                    let content = pbJobEncoder.decode(rpcResult.content);
                    console.info("Tagging response from sc_task data:" + JSON.stringify(content))
                    if (content && content.res_error) {
                        let resJson = comm.response(-1, "更新JOB失败:" + content.res_error.errmsg);
                        res.jsonp(resJson);
                    }
                    else if (content && content.res_update_task) {
                        let resJson = comm.response(0, {});
                        res.jsonp(resJson);
                    }
                    else {
                        let resJson = comm.response(-1, "更新JOB失败");
                        res.jsonp(resJson);
                    }
                }
                catch (e) {
                    console.error("更新tag job出错:" + JSON.stringify(e));
                    let resJson = comm.response(-1, "更新job失败" + JSON.stringify(e));
                    res.jsonp(resJson);
                }
            }
            else {
                //调用JOB
                let obj = {
                    header: {
                        "sender": "1",
                        "sender_type": "sc_admin"
                    },
                    req_add_task: task_info
                };
                let postData = pbJobEncoder.encode(obj);
                try {
                    let rpcResult = yield jobRpcClient.sendRequest(postData, sc.guid(), 10);
                    let content = pbJobEncoder.decode(rpcResult.content);
                    if (content.res_error) {
                        let resJson = comm.response(-1, "创建JOB失败:" + content.res_error.errmsg);
                        res.jsonp(resJson);
                    }
                    else if (content && content.res_add_task && content.res_add_task.task_info && content.res_add_task.task_info.id) {
                        result = yield* tagDAO.updateTaskId(tag.id, content.res_add_task.task_info.id);
                        let resJson = comm.response(0, result);
                        res.jsonp(resJson);
                    }
                    else {
                        let resJson = comm.response(-1, "创建JOB失败");
                        res.jsonp(resJson);
                    }
                }
                catch (e) {
                    console.error("创建tag job出错:" + JSON.stringify(e));
                    let resJson = comm.response(-1, "创建job失败" + JSON.stringify(e));
                    res.jsonp(resJson);
                }
            }
        }
        else if (result && result.code == 2) {
            let resJson = comm.response(-1, '标签已存在');
            res.jsonp(resJson);
        }
        else {
            let resJson = comm.response(-1, "更新失败");
            res.jsonp(resJson);
        }

    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}


function buildSQLWhere(tagsqljson,orgids) {
    let where = "";
    if(orgids&&orgids.length>0);
    {
         where += " and orgid in ('" + orgids.join(',').replace(/,/g, "\',\'") + "')";
    }
    if (tagsqljson.mobile) {
        where += " and mobile=@mobile@";
    }
    if (tagsqljson.typecode) {
        where += " and id in (select custid from sr_cust_type where isdelete=0 and typecode=@typecode@)";
    }
    if (tagsqljson.sexcode) {
        where += " and gendercode=@sexcode@";
    }
    if (tagsqljson.agemin && !isNaN(tagsqljson.agemin)) {
        where += " and birthday<=DATE_SUB(now(),INTERVAL " + tagsqljson.agemin + " YEAR )";
    }
    if (tagsqljson.agemax && !isNaN(tagsqljson.agemax)) {
        where += " and birthday>=DATE_SUB(now(),INTERVAL " + tagsqljson.agemax + " YEAR )";
    }
    if (tagsqljson.sourcecode) {
        where += " and channelcode=@sourcecode@";
    }
    if (tagsqljson.tradestartdate && tagsqljson.tradeenddate) {
        tagsqljson.tradestartdate += " 00:00:00";
        tagsqljson.tradeenddate += " 23:59:59";
        where += " and id in (select custid from sr_cust_trade where tradetime >=@tradestartdate@ and tradetime <=@tradeenddate@)";
    }
    else {
        if (tagsqljson.tradestartdate) {
            tagsqljson.tradeenddate += " 00:00:00";
            where += " and id in (select custid from sr_cust_trade where tradetime >=@tradestartdate@)";
        }
        if (tagsqljson.tradeenddate) {
            tagsqljson.tradeenddate += " 23:59:59";
            where += " and id in (select custid from sr_cust_trade where tradetime <=@tradeenddate@)";
        }
    }
    if (tagsqljson.frequencymin) {
        where += " and tradetimes>=@frequencymin@";
    }
    if (tagsqljson.frequencymax) {
        where += " and tradetimes<=@frequencymax@";
    }
    if (tagsqljson.amountmin) {
        where += " and totaltradeamount>=@amountmin@";
    }
    if (tagsqljson.amountmax) {
        where += " and totaltradeamount<=@amountmax@";
    }
    if (tagsqljson.tags) {
        var tagids = tagsqljson.tags.split(",");
        where += " and id in (select custid from sr_tag_cust where tagid in (" + tagids.join(',') + "))";
    }
    if (tagsqljson.citycode) {
        where += " and citycode=@citycode@";
    }
    if (tagsqljson.countrycode) {
        where += " and countrycode=@countrycode@";
    }
    if (tagsqljson.provincecode) {
        where += " and provincecode=@provincecode@";
    }
    if (tagsqljson.levelno) {
        where += " and id in (select custid from sr_cust_card where statuscode=1 and  levelno =@levelno@)";
    }
    return where;

}

/*
 *修改标签状态
  * */
function* tagStatusEdit(req, res) {
    var resJson;
    if (req && req.body && req.body.innerid) {
        let result = yield* tagDAO.tagStatusEdit(req.body.innerid);
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/*
 * 删除标签
 * */
function* tagDel(req, res) {
    var resJson;
    if (req && req.body && req.body.innerid) {
        let result = yield* tagDAO.tagDel(req.body.innerid);
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/*
 * ��ѯ��ǩ��־(��ҳ)
 * */
function* tagSearch(req, res) {
    let resJson, sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = req.body.where && req.body.where.tagid ? { "tagid": req.body.where.tagid } : null;
            sort = { "column": "a.createdtime", "type": "DESC" };
            page = { "num": req.body.page.item, "index": req.body.page.num };
            querytype = req.body.querytype;
        }
        let result;
        if (querytype == 'main') {
            result = yield* tagDAO.getTagTaskList(condition, sort, page);
            result = { data: result };
        }
        else {
            result = yield* tagDAO.getTagTaskCount(condition);
            result = { TotalCount: result };
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

function* getTagList(req, res) {
    let resJson, sort, page, condition, querytype;
    if (req && req.body) {
        condition = {};
        if (req.body.where && req.body.where.tagname) {
            condition.tagname = req.body.where.tagname;
        }
        if (req.body.where && req.body.where.jobstatus) {
            condition.jobstatus = req.body.where.jobstatus;
        }
        if (req.body.where && req.body.where.tagstatus) {
            condition.tagstatus = req.body.where.tagstatus;
        }
        let orgids = req.userinfo.getSubOrgList();
        condition.orgids = orgids ? orgids : [];
        sort = req.body.order;
        page = req.body.page;
        querytype = req.body.querytype;
        let result;
        if (querytype == "main") {
            result = yield* tagDAO.getTagList(condition, sort, page);
            if (result && 'length' in result && result.length > 0) {
                resJson = comm.response(0, { data: result });

            }
            else {
                resJson = comm.response(0, { data: [] });
            }

        }
        else {
            result = yield* tagDAO.getTagCount(condition);
            if (result && 'length' in result && result.length > 0) {
                resJson = comm.response(0, { TotalCount: [{ count: result[0]['TotalCount'] }] });
            }
            else {
                resJson = comm.response(0, { TotalCount: [{ count: 0 }] });
            }
        }
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }

}

/*
 * 标签任务详细查询
 * */
function* tagDetailSearch(req, res) {
    var resJson, sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = req.body.where.taskid ? { "taskid": req.body.where.taskid } : null;
            sort = req.body.order;
            page = req.body.page;
            querytype = req.body.querytype;
        }
        let result;
        if (querytype == "main") {
            result = yield* tagDAO.getTagTaskDetailList(condition, sort, page);
            result = { data: result };

        }
        else {
            result = yield* tagDAO.getTagTaskDetailCount(condition);
            result = { TotalCount: result };
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/*
 *根据客户id获取标签
 * */
function* tagbyCustIdList(req, res) {
    var resJson, sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = req.body.where.id ? { "id": req.body.where.id } : null;
            sort = req.body.order;
            page = req.body.page;
            querytype = req.body.querytype;
        }
        let result;
        if (querytype == 'main') {
            result = yield* tagDAO.getTagByCustIdList(condition, sort, page);
            result = { data: result };
        }
        else if (querytype == "nocount") {
            result = yield* tagDAO.getTagByCustId(condition);
            result = { nocount: result };
        }
        else {
            result = yield* tagDAO.getTagByCustIdCount(condition);
            result = { TotalCount: result };
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}


function* addTagByCustid(req, res) {
    if (req && req.body && req.body.custid && (req.body.addtag || req.body.deltag)) {

        var obj = {
            "header": {
                "sender": "1",
                "sender_type": "sr_admin"
            },
            "req_update_cust_tag": {
                "customer_id": req.body.custid.toString(),
                "add_tag_id": req.body.addtag.split(','),
                "remove_tag_id": req.body.deltag.split(','),
                "tag_channel": 1
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
            resJson = comm.response(0, content.res_update_cust_tag);
        }
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

function tagTaskAdd(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resJson;
    if (req && req.body && req.body.tagid) {
        tagBiz.tagTaskAdd(req.body
            , function (result) {
                resJson = comm.response(config.status.OK, result);
                res.jsonp(resJson);
            });
    }
    else {
        resJson = comm.response(config.status.FAILURE, 'bad params!');
        res.jsonp(resJson);
    }
}


function* searchTagAll(req, res) {
    let result = yield* tagDAO.searchTagAll(req)
    result = comm.response(0, { data: result });
    res.jsonp(result);
}