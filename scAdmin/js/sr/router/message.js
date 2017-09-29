/**
 * Created by lucas.zong on 2016/1/4.
 */
'use strict'
let sc = require('smartacjs'),
    path = require('path'),
    app = sc.app(),
    config = app.conf,
    rabbit = sc.RabbitMQ(),
    Promise = sc.Promise,
    _ = sc._,
    rewardDAO = require('../dao/rewardDAO.js'),
    messageDAO = require('../dao/messageDAO.js'),
    exportDAO = require('../dao/common.js'),
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sr', 'message'),
    co = require('co');
let conn = sc.RabbitMQ().createConnect(config.mqUrl);
conn.start()
conn.declareExchange("amq.direct", "direct");
let appRpcClient = rabbit.createRPCClient(conn, "cf.app.rpc");
let appPbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_app.proto.js")), "cf.app", "Message");
let wechatRpcClient = rabbit.createRPCClient(conn, "cf.wechat.rpc");
let wechatPbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wechat.proto.js")), "cf.wechat", "Message");
let msgRpcClient = rabbit.createRPCClient(conn, "cf.rpc");
let msgPbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf.proto.js")), "cf", "Message");
let publishRpcClient = rabbit.createRPCClient(conn, "sc.task.rpc");
let publishPbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sc_task.proto.js")), "sc.task", "Message");

exports.autoroute = {
    post: {
        '/sr/campaign/message/accountList/list': queryCfAccount,
        '/sr/campaign/message/query': getMessage,
        '/sr/campaign/message/result/query': queryResult,
        '/sr/campaign/message/resultmember/query': queryResultMember,
        '/sr/campaign/message/list': queryMessage,
        '/sr/campaign/message/sms/edit': sendSmsForPreview,
        '/sr/campaign/message/email/edit': sendEmailForPreview,
        '/sr/campaign/message/wechat/edit': sendWechatForPreview,
        '/sr/campaign/message/app/edit': sendAppForPreview,
        '/sr/campaign/message/edit': updateMessage,//设置消息 第二步
        '/sr/campaign/message/del': deleteMessage,//设置消息 第二步
        '/sr/campaign/message/publish/edit': publishMessage//发布 第三步
    }
};

//function processMessage(req, res) {
//    co(function* () {
//        try {
//            yield* msgProcesser[req.url](req, res);
//        }
//        catch (e) {
//            res.jsonp(e);
//        };
//    });
//}

/**
 * 查询礼券列表
 * @param name {string} 名称
 * @param category {string} 类型
 */
function getMessage(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let resJson, condition;
        if (req) {
            try {
                if (req.body) {
                    condition = req.body ? req.body : null;
                }
                let returnData = {
                    "profile": null,
                    "filterrule": null,
                    "wechat": null,
                    "sms": null,
                    "email": null,
                    "weiappreplycontent": null
                };
                let profile = yield* rewardDAO.getReward(condition);
                let filterrule = yield* rewardDAO.getFilter(condition);
                /***************/
                returnData.profile = profile;
                returnData.filterrule = filterrule;
                let getMsgContent = null
                if (returnData.profile[0].platformid == 1) {
                    getMsgContent = yield* messageDAO.getWechat(returnData.profile[0].id);
                } else {
                    getMsgContent = yield* messageDAO.getMsg(returnData.profile[0].id);
                }
                /************/
                if (returnData.profile[0].platformid == 1) {
                    returnData.wechat = getMsgContent;
                }
                if (returnData.profile[0].platformid == 2) {
                    returnData.sms = getMsgContent;
                }
                if (returnData.profile[0].platformid == 3) {
                    returnData.email = getMsgContent;
                }
                if (returnData.profile[0].platformid == 4) {
                    returnData.app = getMsgContent;
                }

                if (returnData.wechat && returnData.wechat[0].wechattype < 3) {
                    returnData.weiappreplycontent = yield* messageDAO.getWechatImgText(returnData.wechat[0].content);
                } else if (returnData.wechat && returnData.wechat[0].wechattype > 3) {
                    returnData.weiappreplycontent = yield* messageDAO.getVideoContent(returnData.wechat[0].content);
                }
                let resJson = comm.response(0, returnData);
                res.jsonp(resJson)
            } catch (e) {
                console.error("系统错误:" + e);
                throw app.err.fail.msg("系统错误:" + e)
            }

        }
        else {
            console.error("请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
        }
    })
};

function queryCfAccount(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.body && req.body.sessionid) {
            try {
                let orgids = req.userinfo.getSubOrgList();
                let data = {orgids:orgids}
                let result = yield* messageDAO.queryCfAccount(data)
                let resJson = comm.response(0, result);
                res.jsonp(resJson)
            } catch (e) {
                console.error("系统错误:" + e);
                throw app.err.fail.msg("系统错误:" + e)
            }
        }
        else {
            console.error("获取账号请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("获取账号请求不存在:" + JSON.stringify(req.body))
        }
    })
};

function queryMessage(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');

        let resJson, sort, page, condition, orgids;
        if (req) {
            try {
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
                let list = yield* messageDAO.queryMessage(condition, false, sort, page);
                let TotalCount = yield* messageDAO.queryMessage(condition, true)
                let result = {list: list, TotalCount: TotalCount}
                let resJson = comm.response(0, result);
                res.jsonp(resJson)
            } catch (e) {
                console.error("系统错误:" + e);
                throw app.err.fail.msg("系统错误:" + e)
            }
        }
        else {
            console.error("请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
        }
    })
};

function updateMessage(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (req.body && req.body.sessionid) {
            try {
                let orgids = req.userinfo.getSubOrgList();
                orgids = orgids ? orgids : [];
                let result = yield* messageDAO.updateReward(req.body, rewardDAO._jsontosql,orgids)
                let resJson = comm.response(0, result.returnData);
                res.jsonp(resJson)
            } catch (e) {
                console.error("系统错误:" + e);
                throw app.err.fail.msg("系统错误:" + e)
            }
        }
        else {
            console.error("活动更新请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("活动更新请求不存在:" + JSON.stringify(req.body))
        }
    })
};

function deleteMessage(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.body && req.body.sessionid) {
            try {
                let result = yield* messageDAO.deleteMessage(req.body.where)
                let resJson = comm.response(0, result);
                res.jsonp(resJson)
            } catch (e) {
                console.error("系统错误:" + e);
                throw app.err.fail.msg("系统错误:" + e)
            }
        } else {
            console.error("请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
        }
    })
};

function publishMessage(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        try {
            let profile = null;
            let filter = null;
            let detail = null;
            let id = req.body.id;
            let rescontent = {}
            let errorcode = {
                "noExisted": -100,
                "published": -400,
                "nofilter": -200,
                "noPlatformInfo": -77,
                "noRewardInfo": -66,
                "noSendTarget": -6,
                "timeExpired":-7
            };
            let resJson = null;
            let rewardData = yield* rewardDAO.getReward({"id": id})
            if (!rewardData || rewardData.length == 0) {
                //活动不存在!
                resJson = comm.response(0, {errcode:-100,errmsg:"活动不存在!"});
                res.jsonp(resJson)
                return;
            }
            if (rewardData[0].state > 1) {
                //"活动已发布!"
                resJson = comm.response(0, {errcode:-400,errmsg:"活动已发布!"});
                res.jsonp(resJson)
                return;
            }
            if (rewardData[0].platformid == 99) {
                //活动不存在!
                resJson = comm.response(0, {errcode:-100,errmsg:"活动不存在!"});
                res.jsonp(resJson)
                return;
            }

            //if (rewardData[0].platformid == 0) {//推奖赏
            //    //奖赏信息不存在!
            //    let resJson = comm.response(0, {errcode:-66,errmsg:"奖赏信息不存在!"});
            //    res.jsonp(resJson)
            //    return;
            //}
            let filterDate = yield* rewardDAO.getFilter({"id": rewardData[0].id});
            if (!filterDate || filterDate.length == 0) {
                //会员条件不存在!
                resJson = comm.response(0, {errcode:-200,errmsg:"没有过滤条件!"});
                res.jsonp(resJson)
                return;
            }
            let sendTargetNum = yield* rewardDAO.getSendTargetNum(filterDate[0].filtersql);
            if (sendTargetNum[0]['count'] == 0) {
                //会员不存在!
                resJson = comm.response(0, {errcode:-6,errmsg:"没有发送人员!"});
                res.jsonp(resJson)
                return;
            }

            profile = rewardData;
            filter = filterDate;

            if (profile[0].platformid == 1) {
                detail = yield* messageDAO.getWechat(profile[0].id);
            } else {
                detail = yield* messageDAO.getMsg(profile[0].id);
            }
            /*******************************/
            let oldtime = null;
            if(profile[0].sendtype==1){
                oldtime = new Date()
                oldtime.setSeconds(oldtime.getSeconds()+5)
            }else{
                let nowtime = new Date();
                oldtime = new Date(profile[0].starttime)
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
            let channelcode = null
            switch (profile[0].platformid) {
                case 1:
                    channelcode = 4;
                    break;//微信
                case 2:
                    channelcode = 1;
                    break;//短信
                case 3:
                    channelcode = 2;
                    break;//邮件
                case 4:
                    channelcode = 3;
                    break;//app
            }

            let parmeter = []
            parmeter.push({key: "sendaccount", value: detail[0].sendaccount})
            parmeter.push({key: "campaignid", value: detail[0].campaignid.toString()})
            parmeter.push({key: "title", value: detail[0].title})
            parmeter.push({key: "content", value: detail[0].content})
            parmeter.push({key: "sendtype", value: channelcode.toString()})
            let obj = {
                "header": {
                    "sender": "req_add_task",
                    "sender_type": "sc_admin"
                },
                "req_add_task": {
                    task_info: {
                        //id: taskid,//任务ID
                        name: profile[0].title,//任务名称
                        type: "msg",//任务类型
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
            yield* messageDAO.publishMessage(profile[0]);
            publishRpcClient.sendRequest(postData, sc.guid(), 10).then(function (result) {
                let content = publishPbEncoder.decode(result.content);
                console.error("创建job回应内容：" + JSON.stringify(content))
                rescontent = {errcode:0,errmsg:content.res_add_task}
                //messageDAO.publishMessage(profile[0]);
                let resJson = comm.response(0, rescontent);
                res.jsonp(resJson)
            })
        } catch (e) {
            console.error("系统错误:" + e);
            let resJson = comm.response(0, {errcode:-77,errmsg:"系统错误!"});
            res.jsonp(resJson)
        }
    })
};

function queryResultMember(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');

        let resJson, sort, page, condition, querytype;
        if (req) {
            try {
                if (req.body) {
                    condition = req.body.where ? req.body.where : null;
                    sort = req.body.order ? req.body.order : null;
                    page = req.body.page ? req.body.page : null;
                    querytype = req.body.querytype ? req.body.querytype : null;
                }
                //let  _page;
                //排序和分页统一封装格式，以便在DAO层调用公用函数
                //if (sort) {
                //    _sort = {column: sort.name, type: sort.type};
                //}
                //if (page) {
                //    _page = {index: page.num, num: page.item};
                //}
                let list = []
                let TotalCount = 0
                if (querytype == "export") {
                    let r = yield * messageDAO.getExportSql(condition);
                    let result = r.result;
                    if (result && result.insertId > 0) {
                        let data = {};
                        data.sql = r.sql;
                        data.id = result.insertId;
                        data.filename = "MessageLog";
                        yield* exportDAO.Export(data);
                        resJson = comm.response(0, '');
                        res.jsonp(resJson);
                    }
                    else {
                        resJson = comm.response(-1, 'export fail');
                        res.jsonp(resJson);
                    }
                } else {
                    if (condition.platformid == 1) {
                        list = yield* messageDAO.queryResultMemberForWechat(condition, false, sort, page);
                        TotalCount = yield* messageDAO.queryResultMemberForWechat(condition, true)
                    } else if (condition.platformid == 2) {
                        list = yield* messageDAO.queryResultMemberForSms(condition, false, sort, page);
                        TotalCount = yield* messageDAO.queryResultMemberForSms(condition, true)
                    } else if (condition.platformid == 3) {
                        list = yield* messageDAO.queryResultMemberForEmail(condition, false, sort, page);
                        TotalCount = yield* messageDAO.queryResultMemberForEmail(condition, true)
                    } else if (condition.platformid == 4) {
                        list = yield* messageDAO.queryResultMemberForApp(condition, false, sort, page);
                        TotalCount = yield* messageDAO.queryResultMemberForApp(condition, true)
                    }
                    let result = {list: list, TotalCount: TotalCount}
                    let resJson = comm.response(0, result);
                    res.jsonp(resJson)
                }
            } catch (e) {
                console.error("系统错误:" + e);
                throw app.err.fail.msg("系统错误:" + e)
            }
        }
        else {
            console.error("请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
        }
    })
};

function queryResult(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let resJson, condition;
        if (req) {
            try {
                if (req.body) {
                    condition = req.body ? req.body : null;
                }
                let id = req.body.id
                let result = {
                    "platformid": 1,
                    "prepersonnum": 0,
                    "successpersonnum": 0,
                    "mmpersonnum": {"num": 0, "time": null},
                    "rate": 0
                };
                let profile = yield* rewardDAO.getReward({"id": id});
                let filter = yield*rewardDAO.getFilter({"id": id});
                result.platformid = profile[0].platformid;
                let prepersonnum = yield* messageDAO.getResultMemberNumForComplete(profile[0]);
                let successpersonnum = yield* messageDAO.getResultMemberNumForSuccess(profile[0]);
                let mmpersonnum = yield* messageDAO.getMmPersonNumForSuccess(profile[0].platformid);
                /*******************/
                if (prepersonnum && prepersonnum[0].count) {
                    result.prepersonnum = prepersonnum[0]["count"];
                } else {
                    result.prepersonnum = 0
                }
                if (mmpersonnum && mmpersonnum.length > 0) {
                    //result.mmpersonnum = data.mmpersonnum[0]["count"];
                    result.mmpersonnum.num = mmpersonnum[0]["totalnum"];
                    result.mmpersonnum.time = mmpersonnum[0]["modifiedtime"];
                }
                if (successpersonnum && successpersonnum[0].count) {
                    result.successpersonnum = successpersonnum[0]["count"];
                } else {
                    result.successpersonnum = 0
                }
                if (result.prepersonnum != 0) {
                    //已发送成功人数/已发送人数
                    result.rate = (result.successpersonnum / result.prepersonnum * 100).toFixed(2);
                } else {
                    result.rate = 0
                }
                let resJson = comm.response(0, result);
                res.jsonp(resJson)
            } catch (e) {
                console.error("系统错误:" + e);
                throw app.err.fail.msg("系统错误:" + e)
            }
        }
        else {
            console.error("请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
        }
    })
};

function sendSmsForPreview(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let resJson = null
        let msgbody = null;
        if (req.body && req.body.sessionid) {
            let data = req.body
            let obj = {
                "header": {
                    "sender": "req_campagin_preview_sms",
                    "sender_type": "sendertype1"
                },
                "req_send_text": {
                    "account_id": data.accountid,
                    "customer_search_condition": [{"cf_account_id": data.accountid, "mobile": data.mobile}],
                    "content": data.content
                }
            };
            let postData = msgPbEncoder.encode(obj);
            log.info("发送短信预览请求数据:" + JSON.stringify(obj));
            msgRpcClient.sendRequest(postData, sc.guid(), 0)
                .then(function (result) {
                    let content = msgPbEncoder.decode(result.content);
                    log.info("发送短信预览返回数据:" + JSON.stringify(content));
                    if (content && content.res_send_text.errcode == 0) {
                        resJson = comm.response(0, content);
                        res.jsonp(resJson)
                    } else {
                        msgbody = -2
                        resJson = comm.response(0, msgbody);
                        res.jsonp(resJson)
                    }
                }).catch(function (err) {
                    msgbody = -2
                    resJson = comm.response(0, msgbody);
                    res.jsonp(resJson)
                });

        }
        else {
            msgbody = -2
            resJson = comm.response(0, msgbody);
            res.jsonp(resJson)
        }
    })
};

function sendEmailForPreview(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let resJson = null
        let msgbody = null;
        if (req.body && req.body.sessionid) {
            let data = req.body
            let obj = {
                "header": {
                    "sender": "req_campagin_preview_email",
                    "sender_type": "sendertype1"
                },
                "req_send_text": {
                    "account_id": data.accountid,
                    "customer_search_condition": [{"cf_account_id": data.accountid, "email": data.email}],
                    "content": data.content
                }
            };
            let postData = msgPbEncoder.encode(obj);
            log.info("发送邮件预览请求数据:" + JSON.stringify(obj));
            msgRpcClient.sendRequest(postData, sc.guid(), 0)
                .then(function (result) {
                    let content = msgPbEncoder.decode(result.content);
                    log.info("发送邮件预览返回数据:" + JSON.stringify(content));
                    if (content && content.res_send_text.errcode == 0) {
                        let resJson = comm.response(0, content);
                        res.jsonp(resJson)
                    } else {
                        msgbody = -2
                        resJson = comm.response(0, msgbody);
                        res.jsonp(resJson)
                    }
                }).catch(function (err) {
                    msgbody = -2
                    resJson = comm.response(0, msgbody);
                    res.jsonp(resJson)
                });
        }
        else {
            msgbody = -2
            resJson = comm.response(0, msgbody);
            res.jsonp(resJson)
        }
    })
};

function sendWechatForPreview(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.body && req.body.sessionid) {
            let data = req.body
            let resJson = null
            let msgbody = {
                errcode: null,
                errmsg: null
            }
            //发文本
            if (data.wechattype == 3) {
                let openid = null;
                let result = yield* messageDAO.getOpenid(data.mobile, data.accountid)
                if (!result || result.length == 0) {
                    msgbody.errcode = -1
                    msgbody.errmsg = "根据账号id和手机号码找不到openid"
                    resJson = comm.response(0, msgbody);
                    res.jsonp(resJson)
                }
                openid = result[0].openid;
                //*************发送Q
                let obj = {
                    "header": {
                        "sender": "req_campagin_preview_wechat",
                        "sender_type": "sendertype1"
                    },
                    "req_group_message_send": {
                        "account_id": data.accountid,
                        "customer_search_condition": [{"cf_account_id": data.accountid, "wechat_open_id": openid}],
                        "message_content": {"type": 2, "content": data.content}
                    }
                }
                let postData = wechatPbEncoder.encode(obj);
                log.info("发送微信文本预览请求数据:" + JSON.stringify(obj));
                wechatRpcClient.sendRequest(postData, sc.guid(), 10)
                    .then(function (result) {
                        let content = wechatPbEncoder.decode(result.content);
                        log.info("发送微信文本预览返回数据:" + JSON.stringify(content));
                        if (content && content.res_group_message_send.errcode == 0) {
                            resJson = comm.response(0, content);
                            res.jsonp(resJson)
                        } else {
                            msgbody.errcode = content.res_message_weiapp.errcode
                            msgbody.errmsg = content.res_message_weiapp.errmsg
                            resJson = comm.response(0, msgbody);
                            res.jsonp(resJson)
                        }
                    }).catch(function (err) {
                        msgbody.errcode = -10
                        msgbody.errmsg = "发送微信图文消息预览错误：" + err
                        resJson = comm.response(-10, msgbody);
                        res.jsonp(resJson)
                    });
            } else {//发图文
                let openid = null;
                let result = yield* messageDAO.getOpenid(data.mobile, data.accountid)
                if (!result || result.length == 0) {
                    msgbody.errcode = -1
                    msgbody.errmsg = "根据账号id和手机号码找不到openid"
                    resJson = comm.response(0, msgbody);
                    res.jsonp(resJson)
                }

                openid = result[0].openid;
                let wxcontent = yield* messageDAO.getWechatContent(data.content)
                let wxdetail = yield* messageDAO.getWechatDetail(data.content)

                var CustomerSearchCondition = [];
                var CustomerSearch = {};
                CustomerSearch.cf_account_id = data.accountid;
                CustomerSearch.wechat_open_id = openid;
                CustomerSearchCondition.push(CustomerSearch);
                var obj = {
                    header: {
                        sender: "req_group_message_send",
                        sender_type: "sendertype1"
                    },
                    req_group_message_send: {
                        account_id: data.accountid,
                        customer_search_condition: CustomerSearchCondition,
                        message_content: {type: "NEWS", resource_id: wxcontent[0].jsonfileid, content: "preview"}
                    }
                }

                log.info("发送微信图文预览请求数据:" + JSON.stringify(obj));
                let postData = wechatPbEncoder.encode(obj);
                wechatRpcClient.sendRequest(postData, sc.guid(), 10)
                    .then(function (result) {
                        let content = wechatPbEncoder.decode(result.content);
                        log.info("发送微信图文预览返回数据:" + JSON.stringify(content));
                        if (content && content.res_group_message_send.errcode == 0) {
                            resJson = comm.response(0, content);
                            res.jsonp(resJson)
                        } else {
                            msgbody.errcode = content.res_group_message_send.errcode
                            msgbody.errmsg = content.res_group_message_send.errmsg
                            resJson = comm.response(0, msgbody);
                            res.jsonp(resJson)
                        }
                    }).catch(function (err) {
                        msgbody.errcode = -10
                        msgbody.errmsg = "发送微信图文消息预览错误：" + err
                        resJson = comm.response(-10, msgbody);
                        res.jsonp(resJson)
                    });
            }
        }
        else {
            console.error("请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
        }
    })
}

function sendAppForPreview(req, res) {
    co(function* () {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let resJson = null
        let msgbody = null;
        if (req.body && req.body.sessionid) {
            let data = req.body
            let app_deviceid = null;
            let pbEncoder = null;
            let result = yield* messageDAO.getAppinfo(data.mobile)
            if (!result || result.length == 0) {
                msgbody = "设备号不存在"
                resJson = comm.response(-1, msgbody);
                res.jsonp(resJson)
            }
            app_deviceid = result[0].app_deviceid;
            //*************发送Q
            let obj = {
                "header": {
                    "sender": "req_campagin_preview_app",
                    "sender_type": "sendertype1"
                },
                "req_push_message": {
                    "account_id": data.accountid,
                    "device_type": 9,
                    "customer_search_condition": [{"app_target_value": app_deviceid}],
                    "message_content": {
                        "type": 9,
                        "content": data.content,
                        "title": data.title
                    }

                }
            }
            let postData = appPbEncoder.encode(obj);
            log.info("发送APP消息预览请求数据:" + JSON.stringify(obj));
            appRpcClient.sendRequest(postData, sc.guid(), 10)
                .then(function (result) {
                    let content = appPbEncoder.decode(result.content);
                    log.info("发送APP消息预览返回数据:" + JSON.stringify(content));
                    if (content && content.res_push_message.errcode == 0) {
                        let resJson = comm.response(0, content);
                        res.jsonp(resJson)
                    } else {
                        resJson = comm.response(content.res_push_message.errcode, content.res_push_message.errmsg);
                        res.jsonp(resJson)
                    }
                }).catch(function (err) {
                    msgbody = "系统错误"
                    resJson = comm.response(-10, msgbody);
                    res.jsonp(resJson)
                });
        }
        else {
            msgbody = "请求不存在"
            resJson = comm.response(-10, msgbody);
            res.jsonp(resJson)
        }
    })
}