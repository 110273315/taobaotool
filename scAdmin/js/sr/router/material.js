/**
 * Created by Administrator on 2015/11/23.
 */
'use strict'
let sc = require('smartacjs'),
    path = require('path'),
    app = sc.app(),
    config = app.conf,
    conn = sc.RabbitMQ().createConnect(config.mqUrl),
    rabbit = sc.RabbitMQ(),
    promise = sc.Promise,
    _ = sc._,
    materialDAO = require('../dao/materialDAO.js'),
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sr', 'material'),
    co = require('co');

exports.autoroute = {
    post: {
        '/sr/social/newsList/resource/*': processMessage,//统一处理客户模块路由
    }
};
let msgProcesser = {
    '/sr/social/newsList/resource/group/list': getGroupList, //获取所有分组
    '/sr/social/newsList/resource/group/save': materialGroupSave, //保存分组信息
    '/sr/social/newsList/resource/group/delete': materialGroupDelete, //删除分组
    //
    '/sr/social/newsList/resource/save': weiappResourceAdd, //新增素材
    '/sr/social/newsList/resource/edit': weiappResourceUpdate, //修噶素材
    '/sr/social/newsList/resource/delete': weiappResourceDelete, //删除素材
    '/sr/social/newsList/resource/list': weiappResourceList,               //素材列表
    '/sr/social/newsList/resource/batch/delete': weiappResourceDeleteBatch, //批量删除
    '/sr/social/newsList/resource/moveToGroup': weiappResourceMoveToGroup  //移到分组
};

function processMessage(req, res) {
    co(function* () {
        try {
            yield* msgProcesser[req.url](req, res);
        }
        catch (e) {
            res.jsonp(e);
        }
        ;
    });
}


function* getGroupList(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        let resultList = yield* materialDAO.getGroupList(req.body)
        let resJson = comm.response(0, resultList);
        res.jsonp(resJson)
    }catch(e){
        console.error("系统错误:" + e);
        throw app.err.fail.msg("系统错误:" + e)
    }

}

function* materialGroupSave(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        let result = yield* materialDAO.isGroupNameExist(req.body.groupId, req.body.groupName)
        if (result[0]['totalcount'] > 0) {
            //分组名称已存在
            throw app.err.noExist.msg("分组名称已存在")
        } else {
            let resultList = yield* materialDAO.materialGroupSave(req.body)
            let resJson = comm.response(0, resultList);
            res.jsonp(resJson)
        }
    }catch(e){
        console.error("系统错误:" + e);
        throw app.err.fail.msg("系统错误:" + e)
    }


}

function* materialGroupDelete(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        let result = yield* materialDAO.materialGroupDelete(req.body.groupId)
        let resJson = comm.response(0, result);
        res.jsonp(resJson)
    } catch (e) {
        console.error("系统错误:" + e);
        throw app.err.fail.msg("系统错误:" + e)
    }
}

function* weiappResourceAdd(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        let result = yield* materialDAO.addResource(req.body)
        let resJson = comm.response(0, result);
        res.jsonp(resJson)
    }catch(e){
        console.error("系统错误:" + e);
        throw app.err.fail.msg("系统错误:" + e)
    }

}

function* weiappResourceUpdate(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.error("weiappResourceUpdate:" + JSON.stringify(req.body));
    try{
        let result = yield* materialDAO.updateResource(req.body)
        let resJson = comm.response(0, result);
        res.jsonp(resJson)
    }catch(e){
        console.error("系统错误:" + e);
        throw app.err.fail.msg("系统错误:" + e)
    }

}

function* weiappResourceDelete(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.error("weiappResourceDelete:" + JSON.stringify(req.body));
    try {
        let result = yield* materialDAO.deleteResource(req.body.resourceid)
        let resJson = comm.response(0, result);
        res.jsonp(resJson)
    } catch (e) {
        console.error("系统错误:" + e);
        throw app.err.fail.msg("系统错误:" + e)
    }

}

function* weiappResourceList(req, res) {
    let resJson, sort, page, condition;
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.error(JSON.stringify(req.body))
    if (req) {
        try{
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
            }
            let  _page;
            //排序和分页统一封装格式，以便在DAO层调用公用函数
            //if (sort) {
            //    _sort = {column: sort.name, type: sort.type};
            //}
            if (page) {
                if (page.num == 0) {
                    page.num = 1
                }
                _page = {index: page.num, num: page.item};
            }
            let resultList = yield* materialDAO.getResourceList(condition, sort, _page);
            let totalCount = yield* materialDAO.getResourceCount(condition)

            let result = {resultList: resultList, totalCount: totalCount}
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
}

function* weiappResourceDeleteBatch(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        let result = yield* materialDAO.deleteResourceBatch(req.body.ids)
        let resJson = comm.response(0, result);
        res.jsonp(resJson)
    } catch (e) {
        console.error("系统错误:" + e);
        throw app.err.fail.msg("系统错误:" + e)
    }

}

function* weiappResourceMoveToGroup(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        let result = yield* materialDAO.moveToGroup(req.body.ids, req.body.groupid)
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
    }catch(e){
        console.error("系统错误:" + e);
        throw app.err.fail.msg("系统错误:" + e)
    }
}
