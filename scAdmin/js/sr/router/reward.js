/**
 * Created by lucas.zong on 2015/12/21.
 */
'use strict'
var sc = require('smartacjs'),
    path = require('path'),
    app = sc.app(),
    config =  require('../../../../conf.js'),
    rabbit = sc.RabbitMQ(),
    Promise = sc.Promise,
    _=sc._,
    exportDAO=require('../dao/common.js'),
    rewardDAO = require('../dao/rewardDAO.js'),
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sr', 'reward'),
    co = require('co');
let conn = sc.RabbitMQ().createConnect(config.mqUrl);
conn.start()
conn.declareExchange("amq.direct", "direct");
let publishRpcClient = rabbit.createRPCClient(conn, "sc.task.rpc");
let publishPbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sc_task.proto.js")), "sc.task", "Message");
let rewardErrorRpcClient = rabbit.createRPCClient(conn, "sr.customer.rewardfail");
let rewardErrorPbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer_coupon.proto.js")), "sr.customer.coupon", "Message")

exports.autoroute = {
    post: {
        '/sr/campaign/reward/query':processMessage,
        '/sr/campaign/reward/result/query':processMessage,
        '/sr/campaign/reward/resultmember/query':processMessage,
        '/sr/campaign/reward/list':processMessage,
        '/sr/campaign/reward/edit': processMessage,//设置奖赏 第二步
        '/sr/campaign/reward/delete': processMessage,//设置奖赏 第二步
        '/sr/campaign/reward/publish/edit': processMessage,//发布 第三步
        '/sr/campaign/reward/exportFailReward':processMessage//导出奖赏推送失败明细
    }
};

var msgProcesser = {
    // 查询客户信息
    '/sr/campaign/reward/query':getReward,
    '/sr/campaign/reward/result/query':queryResult,
    '/sr/campaign/reward/resultmember/query':queryResultMember,
    '/sr/campaign/reward/list':queryReward,
    '/sr/campaign/reward/edit': updateReward,//设置奖赏 第二步
    '/sr/campaign/reward/delete': deleteReward,//设置奖赏 第二步
    '/sr/campaign/reward/publish/edit': publishReward,//发布 第三步
    '/sr/campaign/reward/exportFailReward':exportFailReward//导出奖赏推送失败明细
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

/**
 * 查询礼券列表
 * @param name {string} 名称
 * @param category {string} 类型
 */
function* getReward(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resJson, condition;
    if (req) {
        if (req.body) {
            condition = req.body ? req.body : null;
        }
        try{
            let profile = yield* rewardDAO.getReward(condition);
            let filterrule = yield* rewardDAO.getFilter(condition);
            let result = {profile: profile, filterrule: filterrule}
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
};

/**
 * 查询礼券列表
 * @param name {string} 名称
 * @param category {string} 类型
 */
function* queryReward(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resJson, sort, page, condition,orgids;
    if (req) {
        try{
            if (req.body) {
                orgids = req.userinfo.getSubOrgList();
                condition = req.body.where ? req.body.where : null;
                condition.orgids = orgids ? orgids : [];
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
            }
            //let  _sort;
            //排序和分页统一封装格式，以便在DAO层调用公用函数
            //if (sort) {
            //    _sort = {column: sort.name, type: sort.type};
            //}
            let list = yield* rewardDAO.queryReward(condition, false, sort, page);
            let TotalCount = yield* rewardDAO.queryReward(condition, true);
            let result={list:list,TotalCount:TotalCount}
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
};

function* updateReward(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.body && req.body.sessionid) {
        try{
            let orgids = req.userinfo.getSubOrgList();
            orgids = orgids ? orgids : [];
            let result = yield* rewardDAO.updateReward(req.body,orgids)
            let resJson = comm.response(0, result.returnData);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }
    else {
        console.error("活动更新请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("活动更新请求不存在:" + JSON.stringify(req.body))
    }
};


function* deleteReward(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.body && req.body.sessionid) {
        try{
            let result = yield* rewardDAO.deleteReward(req.body.where)
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }else{
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
};

function* publishReward(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.body && req.body.sessionid) {
        try{
            let rescontent = {}
            let id = req.body.id;
            let resJson = null;
            let errorcode = {"noExisted": -100, "published": -400, "nofilter": -200,"noPlatformInfo":-77, "noRewardInfo": -66, "noSendTarget": -6};
            let rewardData = yield* rewardDAO.getReward({"id": id})
            if (!rewardData || rewardData.length == 0) {
                resJson = comm.response(0, {errcode:-100,errmsg:"活动不存在!"});
                res.jsonp(resJson)
                return;
            }
            if (rewardData[0].state > 1) {
                resJson = comm.response(0, {errcode:-400,errmsg:"活动已发布!"});
                res.jsonp(resJson)
                return;
            }
            if(rewardData[0].platformid==99){
                resJson = comm.response(0, {errcode:-100,errmsg:"活动不存在!"});
                res.jsonp(resJson)
                return;
            }

            if(rewardData[0].platformid==0){//推奖赏
                if (!rewardData[0].rewardscontent) {
                    resJson = comm.response(0, {errcode:-66,errmsg:"奖赏信息不存在!"});
                    res.jsonp(resJson)
                    return;
                }
            }
            let filterDate = yield* rewardDAO.getFilter({"id": rewardData[0].id});
            if (!filterDate || filterDate.length == 0) {
                resJson = comm.response(0, {errcode:-200,errmsg:"没有过滤条件!"});
                res.jsonp(resJson)
                return;
            }
            let sendTargetNum = yield* rewardDAO.getSendTargetNum(filterDate[0].filtersql);
            if (sendTargetNum[0]['count'] == 0) {
                resJson = comm.response(0, {errcode:-6,errmsg:"没有发送人员!"});
                res.jsonp(resJson)
                return;
            }
            /********************************************************/
            let pointexdate = null;
            let rewardObj = {};
            let pointsNum = 0;
            let sendtype = null;
            let title = rewardData[0].title
            let oldtime = null;
            if(rewardData[0].sendtype==1){
                oldtime = new Date()
                oldtime.setSeconds(oldtime.getSeconds()+5)
            }else{
                let nowtime = new Date();
                oldtime = new Date(rewardData[0].starttime)
                if(nowtime > oldtime){
                    resJson = comm.response(0, {errcode:-7,errmsg:"当前时间已超过推送时间,请重新设置推送时间!"});
                    res.jsonp(resJson);
                    return;
                }else{
                    oldtime.setSeconds(oldtime.getSeconds()+5)
                }
            }

            let timestamp2 = Date.parse(oldtime);
            timestamp2 = timestamp2 / 1000;

            //解析奖赏内容rewardcontent
            rewardObj = JSON.parse(rewardData[0].rewardscontent);
            let sendPoint = false
            let sendCoupon = false
            rewardObj.forEach(function (detail) {
                if (detail.point) {
                    sendPoint = true
                    pointsNum += parseInt(detail.point);
                }
                if (detail.couponid) {
                    sendCoupon = true
                }
            })
            if (sendPoint && sendCoupon) {
                sendtype = 3
            } else {
                if (sendPoint) {
                    sendtype = 2
                } else {
                    sendtype = 1
                }
            }
            let parmeter = []
            parmeter.push({key: "campaignid", value: id})
            parmeter.push({key: "sendtype", value: sendtype.toString()})

            let obj = {
                "header": {
                    "sender": "req_add_task",
                    "sender_type": "sc_admin"
                },
                "req_add_task": {
                    task_info: {
                        //id: taskid,//任务ID
                        name: title,//任务名称
                        type: "reward",//任务类型
                        source:{source_type:null,source_id:null},
                        parameter: parmeter,
                        plan: {
                            once: {
                                time: timestamp2 //运行时间
                            },
                            timeout: 0,//运行超时时间(s)
                            repeate: false,//是否可以重复运行
                        },
                        desc: "",//备注
                        is_active: true,//是否活跃
                        retry_count: 0//重试次数,0不重试
                    }
                }
            }
            log.info("创建job请求数据:" + JSON.stringify(obj));
            let postData = publishPbEncoder.encode(obj);
            yield* rewardDAO.publishReward({"campaignid": id});
            publishRpcClient.sendRequest(postData, sc.guid(), 10).then(function (result) {
                let content = publishPbEncoder.decode(result.content);
                console.error("创建job回应内容：" + JSON.stringify(content))
                rescontent = {errcode:0,errmsg:content.res_add_task}
                let resJson = comm.response(0, rescontent);
                res.jsonp(resJson)
            })
        }catch(e){
            console.error("系统错误:" + e);
            let resJson = comm.response(0, {errcode:-77,errmsg:"系统错误!"});
            res.jsonp(resJson)
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
};

function* queryResultMember(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    var resJson, sort, page, condition,querytype;
    if (req) {
        try{
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
                querytype = req.body.querytype ? req.body.querytype : null;
            }
            if (querytype == "export") {
                let r = yield * rewardDAO.getExportSql(condition);
                let result = r.result;
                if (result && result.insertId > 0) {
                    let data = {};
                    data.sql =r.sql;
                    data.id = result.insertId;
                    data.filename = "RewardsLog";
                    yield* exportDAO.Export(data);
                    resJson = comm.response(0, '');
                    res.jsonp(resJson);
                }
                else {
                    resJson = comm.response(-1, 'export fail');
                    res.jsonp(resJson);
                }
            }else{
                let list = yield* rewardDAO.queryResultMember(condition, false, sort, page);
                let TotalCount = yield* rewardDAO.queryResultMember(condition, true);
                let result = {list: list, TotalCount: TotalCount}
                let resJson = comm.response(0, result);
                res.jsonp(resJson)
            }
        }catch(e){
            console.error("系统错误:" + e);
            resJson = comm.response(-1, 'export fail');
            res.jsonp(resJson);
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        resJson = comm.response(-1, '请求不存在!');
        res.jsonp(resJson);
    }

}

function* queryResult(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    let resJson, condition;
    if (req) {
        try{
            if (req.body) {
                condition = req.body ? req.body : null;
            }
            let id = condition.id
            let couponnum = 0
            let pointnum = 0
            let result = {
                "points": null,
                "couponid": null,
                "sendtype": 3,
                "prepersonnum": 0,
                "prepointsnum": 0,
                "precouponnum": 0,
                "couponfail":null,
                "pointfail":null,
                "successpersonnum": 0,//成功人数
                "mmpersonnum": {num:0,time:null},
                "mmpointsnum": {num:0,time:null},
                "mmcouponnum": {num:0,time:null},
                "overcouponnum": 0,//不计算剩余礼券
                "rate": 0
            };
            let profiledata = yield* rewardDAO.getReward({"id": id})
            let filterdata = yield* rewardDAO.getFilter({"id": id})
            /**************************************/
            let profile = profiledata[0];
            let filter = filterdata[0];
            let rewardObj = JSON.parse(profile.rewardscontent);
            let couponflag = false;
            let pointflag = false;
            rewardObj.forEach(function (detail) {
                if(detail.couponid){
                    couponflag = true
                }
                if(detail.point){
                    pointflag = true
                }
                if (detail.couponid) {
                    couponnum += parseInt(detail.num);
                }
                if (detail.point) {
                    pointnum += parseInt(detail.point);
                }
            })
            if(couponflag&&pointflag){
                result.sendtype = 3
            }else{
                if(couponflag){
                    result.sendtype = 1
                }
                if(pointflag){
                    result.sendtype = 2
                }
            }
            let prepersonnum = yield* rewardDAO.getResultMemberNumForComplete(id);//
            let successpersonnum = yield* rewardDAO.getResultMemberNumForSuccess(id);//
            let couponSuccess = yield* rewardDAO.getResultCouponMemberNumForSuccess(id);//
            let pointSuccess = yield* rewardDAO.getResultPointsMemberNumForSuccess(id);//
            let couponFail = yield* rewardDAO.getFailCoupon(id);//
            let pointFail = yield* rewardDAO.getFailPoint(id);//
            let mmpersonnum =  yield* rewardDAO.getMmPersonNumForSuccess(result.sendtype);//
            let mmpointsnum =  yield* rewardDAO.getMmPointsNumForSuccess();//
            let mmcouponnum =  yield* rewardDAO.getMmCouponNumForSuccess();//

            /*******************************************/
            let coupon = 0;
            let point = 0;
            result.couponfail = couponFail[0]["count"];
            result.pointfail = pointFail[0]["count"];
            /********************** 计算结果 *****************/
            if (prepersonnum && prepersonnum.length > 0) {
                result.prepersonnum = prepersonnum[0]["count"];
            }
            if (couponSuccess && couponSuccess.length > 0) {
                coupon = couponSuccess[0]["count"];
                result.precouponnum = parseInt(coupon)*couponnum;//因为礼券个数都是1
            }
            if (pointSuccess && pointSuccess.length > 0) {
                point = pointSuccess[0]["count"];
                result.prepointsnum = parseInt(point) * pointnum;
            }
            if (successpersonnum && successpersonnum.length > 0) {
                result.successpersonnum = successpersonnum[0]["count"];
            }
            if (mmpersonnum && mmpersonnum.length > 0) {
                //result.mmpersonnum = data.mmpersonnum[0]["count"];
                result.mmpersonnum.num = mmpersonnum[0]["totalnum"];
                result.mmpersonnum.time = mmpersonnum[0]["modifiedtime"];
            }
            if (mmpointsnum && mmpointsnum.length > 0) {
                //result.mmpointsnum = data.mmpointsnum[0]["count"];
                result.mmpointsnum.num = mmpointsnum[0]["totalnum"];
                result.mmpointsnum.time = mmpointsnum[0]["modifiedtime"];
            }
            if (mmcouponnum && mmcouponnum.length > 0) {
                //result.mmcouponnum = data.mmcouponnum[0]["count"];
                result.mmcouponnum.num = mmcouponnum[0]["totalnum"];
                result.mmcouponnum.time = mmcouponnum[0]["modifiedtime"];
            }

            if (result.prepersonnum != 0) {
                //已发送成功人数/已发送人数
                result.rate = (result.successpersonnum / result.prepersonnum * 100).toFixed(2);
            }

            resJson = comm.response(0, result);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
};


function* exportFailReward(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    let resJson;
    if (req.body && req.body.sessionid) {
        let id = req.body.id;
        let result = req.body.result;
        let sql = "SELECT custname as '姓名',rewardsstatus as '礼券结果', couponerrmsg as '描述',pointsstatus as '积分结果',pointerrmsg as '描述' from sr_rewards_job_docustids where campaignid = "+id;
        if(result != '2'){
            sql +=  "and (rewardsstatus = '"+result+"' or pointsstatus = '"+result+"')";
        }
        let obj = {
            "header": {
                "sender": "req_export_coupon",
                "sender_type": "sendertype1"
            },
            "req_export_coupon": {
                "id": 1,//为了符合协议规则，随意给的数据，没有作用
                "sql": sql
            }
        }
        let postData = rewardErrorPbEncoder.encode(obj);
        rewardErrorRpcClient.object.sendRequest(postData, sc.guid(), 600).then(function(result){
            let res=rewardErrorPbEncoder.decode(result.content)
            resJson = {Status:200,errcode:res.res_destroy_coupon.errcode,errmsg:res.res_destroy_coupon.errmsg};
            res.jsonp(resJson);
        }).catch(function (err) {
                throw app.err.fail.msg("导出失败："+err)
                log.error("导出失败："+err);
        });
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}