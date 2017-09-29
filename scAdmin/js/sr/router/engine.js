
'use strict';
var sc = require('smartacjs'),
    app = sc.app();
var co = require('co');
var path = require('path');
var comm = require('../../common/comm.js');
var config = app.conf;
var engineDAO = require('../dao/engineDAO.js');

exports.autoroute = {
    post: {
        '/sr/rewards/*': processMessage,//统一处理客户模块路由
    }
};


var msgProcesser = {
    '/sr/rewards/rule/list':rewardsRuleList,
    '/sr/rewards/rule/query':queryRewardsRule,
    '/sr/rewards/rule/update':setRuleStatus,
    '/sr/rewards/rule/tag/list':getRuleTag,
    '/sr/rewards/rule/add': saveRule,
    '/sr/rewards/rule/history/list':getHistory
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
function *  rewardsRuleList(req,res){
    let r = {};
    r.errcode = 0;
    r.errmsg = "ok";
    r.msgbody = {};
    r.msgbody.TotalCount = [];
    r.msgbody.data = [];
    let result=yield * engineDAO.rewardsRuleList(req.body);
    if (req.body.querytype == "main") {
        r.msgbody.data = result;
    }
    else {
        r.msgbody.TotalCount.push({"count": result[0].countnum});
    }
    res.jsonp(r);
}

function * queryRewardsRule(req,res){
    let result=yield * engineDAO.queryRewardsRule(req.body);
    let r = {};
    r.errcode = 0;
    r.errmsg = "ok";
    r.msgbody = {};
    r.msgbody.data = result[0];
    res.jsonp(r);
}
function * setRuleStatus(req,res){
    let result=yield * engineDAO.setRuleStatus(req.body);
    var r = {};
    r.errcode = 0;
    r.errmsg = "ok";
    res.jsonp(r);
}
function * getRuleTag(req,res){
    let result=yield * engineDAO.getRuleTag(req.body);
    var r = {};
    r.errcode = 0;
    r.errmsg = "ok";
    r.msgbody={};
    r.msgbody.data ={};
    r.msgbody.data = result;
    res.jsonp(r);
}
function * saveRule(req,res){
    let result=yield * engineDAO.saveRule(req.body);
    if(result)
    {
        let resJson = comm.response(0, "");
        res.jsonp(resJson)
    }
    else
    {
        throw app.err.noExist.msg("新增/编辑失败")
    }

}
function  * getHistory(req,res){
    try{
        let result=yield * engineDAO.getHistory(req.body);
        let resJson = comm.response(0, result);
        res.jsonp(resJson)
    }catch(e){
        let resJson = comm.response(1, e);
        res.jsonp(resJson)
    }

}