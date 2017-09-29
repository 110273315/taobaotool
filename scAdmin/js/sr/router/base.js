/**
 * Created by Ryan on 2015/11/23.
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
var baseDAO = require('../dao/baseDAO.js');
var conn = app.res.getMQConnectionSync();
conn.declareExchange("amq.direct", "direct");
var rpcClient = Rabbit.createRPCClient(conn, "sc.task.rpc");
var pbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sc_task.proto.js")), "sc.task", "Message");

exports.autoroute = {
    post: {
        '/sr/base/rulesetting/list': processMessage, //积分倍率列表
        '/sr/base/rulesetting/query': processMessage, //积分倍率列表
        '/sr/base/rulesetting/edit': processMessage, //倍率新增
        // '/sr/base/sttemplate/list': processMessage,   //模版信息列表
        // '/sr/base/tempMsgList/list': processMessage, //获取一条模版消息
        // '/sr/base/tempMsgList/edit': processMessage,     //模版更新
        '/sr/base/tempMsgList/templateSettingList/list': processMessage,   //模版信息列表
        '/sr/base/tempMsgList/templateSettingInfo/query': processMessage, //获取一条模版消息
        '/sr/base/tempMsgList/templateSettingEdit/edit': processMessage,     //模版更新
        '/sr/base/srjob/list': processMessage,     //job列表
        '/sr/base/srjob/log/list': processMessage,   //job日志列表
        '/sr/base/srjob/run/edit': processMessage,         //立刻运行Job
        '/sr/base/srjob/pauseResume/edit':processMessage,//暂停恢复job
        '/sr/base/srjob/killTask/edit':processMessage,//终止Job
        '/sr/base/srjob/status/edit': processMessage,     //Job状态
        '/sr/base/srjob/org/list': getAllOrg, //所有组织
        '/sr/base/srjob/shop/list': processMessage   //所有门店
    }
};


var msgProcesser = {
    '/sr/base/rulesetting/list': getPointMultiple, //积分倍率列表
    '/sr/base/rulesetting/query': getPointMultipleTree, //积分倍率列表
    '/sr/base/rulesetting/edit': pointMultipleSave, //倍率新增
    // '/sr/base/sttemplate/list': getTempMsg,   //模版信息列表
    // '/sr/base/tempMsgList/list': searchTempMsg, //获取一条模版消息
    // '/sr/base/tempMsgList/edit': tempMessageUpdate,     //模版更新
    '/sr/base/tempMsgList/templateSettingList/list': getTempMsg,   //模版信息列表
    '/sr/base/tempMsgList/templateSettingInfo/query': searchTempMsg, //获取一条模版消息
    '/sr/base/tempMsgList/templateSettingEdit/edit': tempMessageUpdate,     //模版更新
    '/sr/base/srjob/list': getJobList,     //job列表
    '/sr/base/srjob/log/list': getJobLogList,   //job日志列表
    '/sr/base/srjob/run/edit': runJob,         //立刻运行Job
    '/sr/base/srjob/status/edit': jobStatusUpdate,     //Job状态
    '/sr/base/srjob/pauseResume/edit':pauseResumeJob,//暂停恢复job
    '/sr/base/srjob/killTask/edit':killTask,//终止Job
    '/sr/base/srjob/org/list': getAllOrg,
    '/sr/base/srjob/shop/list': getAllShop
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


function* getPointMultiple(req, res) {
    let result = yield* baseDAO.getPointMultiple(req.body);
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* getPointMultipleTree(req, res) {
    let result = yield* baseDAO.getPointMultipleTree();
    if (result && 'length' in result && result.length > 0) {
        // result.push
        result.push({ id: 'cardlevel', pid: 0, text: '会员卡等级', seqno: 0, param: 1 });
        result.push({ id: 'shop', pid: 0, text: '店铺', seqno: 1, param: 2 });
    };
    var resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* pointMultipleSave(req, res) {
    let result = yield* baseDAO.pointMultipleSave(req.body);
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}



function* getTempMsg(req, res) {
    var resJson,condition, querytype;
    if (req) {
        if (req.body) {
            condition = req.body.where ? req.body.where : null;
            querytype = req.body.querytype ? req.body.querytype : (req.query.querytype ? req.query.querytype : null);
        }
        let result;
        if (querytype == "main") {
            result = yield* baseDAO.getTempMsgList(condition);
            result = { data: result };
        }
        //读取数据总数
        else {
            result = yield* baseDAO.getTempMsgCount(condition)
            result = { TotalCount: [{ count: result[0]['totalcount'] }] };
        }
        result = comm.response(0, result)
        res.jsonp(result);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }

}

function* searchTempMsg(req, res) {
    var resJson = {};
    let result = yield* baseDAO.searchTempMsg(req.body);
    var resJson = comm.response(0, result[0]);
    res.jsonp(resJson);
}

function* tempMessageUpdate(req, res) {
    console.error("1111111111")
    var resJson = {};
    let result = yield* baseDAO.tempMessageUpdate(req.body.tempMsg);
    var resJson = comm.response(0, result);
    res.jsonp(resJson);
}



function* getJobList(req, res) {
    var sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = req.body.where ? req.body.where : null;
            sort = req.body.order ? req.body.order : null;
            page = req.body.page ? req.body.page : null;
            querytype = req.body.querytype ? req.body.querytype : (req.query.querytype ? req.query.querytype : null);
        }
        let result;
        if (querytype == "main") {
            result = yield* baseDAO.getJobList(condition, sort, page);
            result = { data: result };
        }
        //读取数据总数
        else {
            result = yield* baseDAO.getJobListCount(condition)
            result = { TotalCount: [{ count: result[0]['totalcount'] }] };
        }
        result = comm.response(0, result)
        res.jsonp(result);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}



function* getJobLogList(req, res) {
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
        if (querytype == "main") {
            result = yield* baseDAO.getJobLogList(condition, sort, page);
            result = { data: result };
        }
        //读取数据总数
        else {
            result = yield* baseDAO.getJobLogListCount(condition)
            result = { TotalCount: [{ count: result[0]['totalcount'] }] };
        }
        result = comm.response(0, result)
        res.jsonp(result);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/**
 *  job立刻执行
 */
function* runJob(req, res) {
    var job = req.body;
    var obj = {
        "header": {
            "sender": "req_start_task",
            "sender_type": "sc_admin"
        },
        "req_start_task": {
            "task_id": job.innerid,
        }
    };
    let postData = pbEncoder.encode(obj);
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pbEncoder.decode(result.content);
    let resJson = {};
    if (content.res_start_task&&content.res_start_task.run_id) {
        resJson = comm.response(0, "任务运行成功！");
    }
    else {
        resJson = comm.response(1, "任务运行失败");
    }
    res.jsonp(resJson);
}

/**
 * 更改job状态  
 */
function* jobStatusUpdate(req, res) {
    var job = req.body;
    let resJson = {};
    var is_active = true
    if(job.status=='0')is_active=false
    let result = yield* baseDAO.getTaskByID(job.innerid);
    if(result&&result.length>0){
        let task = result[0]
        let plan = JSON.parse(task.plan)
        delete plan.type;
        var newParameter = []
        var parameter = JSON.parse(task.parameter)
        for(var k in parameter){
            newParameter.push({key: k, value: parameter[k]})
        }
        let obj = {
            "header": {
                "sender": "req_update_task",
                "sender_type": "sc_admin"
            },
            "req_update_task": {
                "task_info": {
                    id: job.innerid,
                    name: task.name,//任务名称
                    type: task.type,//任务类型
                    source: {source_type: task.source_type, source_id: task.source_id},
                    parameter: newParameter,
                    plan: plan,
                    desc: task.desc,//备注
                    is_active: is_active,//是否活跃
                    retry_interval:task.retry_interval,
                    retry_count: task.retry_count//重试次数,0不重试
                }
            }
        };
        let postData = pbEncoder.encode(obj);
        rpcClient.sendRequest(postData, sc.guid(), 10).then(function (result) {
            let content = pbEncoder.decode(result.content);
            let msgbody = {
                errcode: 0,
                errmsg: "操作成功"
            }
            resJson = comm.response(0, msgbody);
            res.jsonp(resJson);
        }).catch(function (err) {
            resJson = comm.response(1, err);
            res.jsonp(resJson);
        });
    }else{
        resJson = comm.response(1, {errcode:1,errmsg:"task不存在!"});
        res.jsonp(resJson);
    }
}

/**
 *  job暂停恢复
 */
function* pauseResumeJob(req, res) {
    var job = req.body;

    var obj = null;
    if(job.status==1){
        obj =  {
            "header": {
                "sender": "req_pause_task",
                "sender_type": "sc_admin"
            },
            "req_pause_task": {
                "run_id": job.innerid,
            }
        };
    }else{
        obj =  {
            "header": {
                "sender": "req_resume_task",
                "sender_type": "sc_admin"
            },
            "req_resume_task": {
                "run_id": job.innerid,
            }
        };
    }

    let postData = pbEncoder.encode(obj);
    let resJson = {};
    rpcClient.sendRequest(postData, sc.guid(), 10).then(function (result) {
        let content = pbEncoder.decode(result.content);
        if(job.status==1){
            if (content.res_pause_task && content.res_pause_task.errcode == 0) {
                resJson = comm.response(0, "暂停成功！");
            }
            else {
                resJson = comm.response(1, content.res_pause_task.errmsg);
            }
        }else{
            if (content.res_resume_task && content.res_resume_task.errcode == 0) {
                resJson = comm.response(0, "恢复运行成功！");
            }
            else {
                resJson = comm.response(1, content.res_resume_task.errmsg);
            }
        }

        res.jsonp(resJson);
    }).catch(function (err) {
        resJson = comm.response(1, err);
        res.jsonp(resJson);
    });

}


/**
 *  job终止
 */
function* killTask(req, res) {
    var job = req.body;
    var obj = {
        "header": {
            "sender": "req_terminate_task",
            "sender_type": "sc_admin"
        },
        "req_terminate_task": {
            "run_id": job.innerid,
        }
    };
    let postData = pbEncoder.encode(obj);
    let resJson = {};
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10).then(function (result) {
        let content = pbEncoder.decode(result.content);
        resJson = comm.response(0, "终止任务成功！");
        res.jsonp(resJson);
    }).catch(function (err) {
        resJson = comm.response(1, err);
        res.jsonp(resJson);
    });

}

function getAllOrg(req, res) {
    var resJson = {};
    let orgids = req.userinfo.getSubOrgList();
    var result = [];
    orgids.forEach(function (item, index) {
        let org = app.org.findOrg(item);
        let obj = {};
        obj.innerid = org.innerid;
        obj.name = org.name;
        result.push(obj);
    });

    var resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* getAllShop(req, res) {
    var resJson = {};
    let orgsql = req.userinfo.getOrgSQL();
    let result = yield* baseDAO.getAllShop(orgsql);
    var resJson = comm.response(0, result);
    res.jsonp(resJson);
}

