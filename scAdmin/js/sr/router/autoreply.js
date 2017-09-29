/**
 * Created by lucas.zong on 2015/12/28.
 */
'use strict'
let sc = require('smartacjs'),
    path = require('path'),
    app = sc.app(),
    config = app.conf,
    conn = sc.RabbitMQ().createConnect(config.mqUrl),
    rabbit = sc.RabbitMQ(),
    Promise = sc.Promise,
    _=sc._,
    autoreplayDAO = require('../dao/autoreplyDAO.js'),
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sc', 'account'),
    co = require('co');


exports.autoroute = {
    post: {
        '/accountList/weiapp/accountautoreply/query':getAccountAutoreplay,
        '/accountList/weiapp/autoreply/edit': setAutoreplay,//设置自动回复
        '/accountList/weiapp/autoreply/del': deleteAutoreplay,//删除回复
        '/accountList/weiapp/autoreply/rule/edit':setRule,
        '/accountList/weiapp/autoreply/rule/del':deleteRule
    }
};

function getAccountAutoreplay(req,res){
    co(function*(){
        res.setHeader('Access-Control-Allow-Origin', '*');
        let resJson, data;
        if (req&&req.body&& req.body.sessionid) {
            try{
                data = req.body;
                let result = {
                    "newfansreplay": null,//关注回复
                    "msgreplay": null,//消息回复
                    "keywordsreplay": {"rulelist": []}//关键字回复
                };
                let newfansreplay = yield* autoreplayDAO.getAutoreplay({"accountid": data.accountid, "replytype": 1})
                let msgreplay = yield* autoreplayDAO.getAutoreplay({"accountid": data.accountid, "replytype": 3});
                let rulelist = yield* autoreplayDAO.getRuleList(data.accountid);
                let rulekeywordslist = yield* autoreplayDAO.getRuleKeywordsList(data.accountid);
                let ruledetaillist = yield* autoreplayDAO.getRuleDetailList(data.accountid);
                if (rulelist) {
                    _.each(rulelist, function (rule) {
                        var keywords = _.where(rulekeywordslist, {"sourceid": rule.id+""});
                        var ruledetails = _.where(ruledetaillist, {"ruleid": rule.id});
                        rule.keywords = keywords;
                        rule.ruledetails = ruledetails;
                        result.keywordsreplay.rulelist.push(rule);
                    });
                }

                if(newfansreplay.length>0){
                    result.newfansreplay = newfansreplay[0];
                }
                if(msgreplay.length>0){
                    result.msgreplay = msgreplay[0];
                }
                let resJson = comm.response(0, result);
                res.jsonp(resJson)
            }catch(e){
                console.error("系统错误:" + e);
                throw app.err.fail.msg("系统错误:" + e)
            }
        }else {
            console.error("请求不存在:" + JSON.stringify(req.body));
            throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
        }
    })
};

function setAutoreplay(req,res){
    co(function*(){
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req && req.body && req.body.sessionid) {
            try{
                let result = yield* autoreplayDAO.setAutoreplay(req.body)
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
    })
};

function deleteAutoreplay(req,res){
    co(function*(){
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req && req.body && req.body.sessionid) {
            try{
                let result = yield* autoreplayDAO.deleteAutoreplay(req.body)
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
    })
};

function setRule(req,res){
    co(function*(){
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req && req.body && req.body.sessionid) {
            try{
                let result = yield* autoreplayDAO.setRule(req.body)
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
    })
};

function deleteRule(req,res){
    co(function*(){
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req && req.body && req.body.sessionid) {
            try{
                let result = yield* autoreplayDAO.deleteRule(req.body)
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
    })
};