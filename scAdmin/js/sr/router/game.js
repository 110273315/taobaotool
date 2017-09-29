/**
 * Created by Kyler on 2016/7/13 0013.
 */
'use strict'
var sc = require('smartacjs'),
    Promise = sc.Promise,
    app = sc.app();
var co = require('co');
var comm = require('../../common/comm.js');
var config = app.conf;
var gameDAO = require('../dao/gameDAO.js');


exports.autoroute = {
    post: {
        '/sr/game/*': processMessage,//ͳһ����ͻ�ģ��·��
    }
};
var msgProcesser = {
        '/sr/game/gamemanager/del':gameDel, //ɾ����ǩ  '/api/game/delete'
        '/sr/game/gamemanager/list': getgameList,//��ѯ��ǩ  '/api/game/list'
        '/sr/game/gamemanager/shoplist/list':getshoplist, //��ȡ�����б�  '/api/game/shoplist'
        '/sr/game/gamemanager/getrewardslist/list':getrewardslist //��ȡ��ȯ�б�   '/api/game/getrewardslist'
};

function processMessage(req, res) {
    console.log("����processMessage");
    co(function* () {
        try {
            yield* msgProcesser[req.url](req, res);
        }
        catch (e) {
            var resJson = {};
            if (e instanceof app.err.SCError) {
                // �߼�����
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // ����ϵͳ����
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(0, e);
            }
            res.jsonp(resJson);
        };
    });
}

/*
 * ɾ����Ϸ
 * */
function* gameDel(req,res)
{
    res.setHeader('Access-Control-Allow-Origin','*');
    var resJson;
    if(req && req.body && req.body.innerid)
    {
       let result=yield* gameDAO.GameDel(req.body.innerid);
        resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else
    {
        throw app.err.invalidParameter;
    }
}

function* getgameList(req, res) {
    var resJson, sort, page, condition, querytype;
    if (req) {
        if (req.body) {
            condition = {};
            if (req.body.where && req.body.where.gamename) {
                condition.gamename =req.body.where.gamename;
            }
            if (req.body.where && req.body.where.gamestatus) {
                condition.gamestatus = req.body.where.gamestatus;
            }
            if (req.body.where && req.body.where.starttime) {
                condition.starttime = req.body.where.starttime;
            }
            if (req.body.where && req.body.where.endtime) {
                condition.endtime = req.body.where.endtime;
            }
            sort = { "column": "a.id", "type": "DESC" };
            page = { "num": req.body.page.num, "index": req.body.page.index };
            querytype = req.body.querytype;
        }
        let result;
        if (querytype == 'main') {
            result = yield* gameDAO.getGameList(condition, sort, page);
        }
        else if (querytype == 'count') {
           result = yield* gameDAO.getGameCount(condition);
        }
        else {

        }
        resJson = comm.response(0, result);
        console.log(resJson);
        res.jsonp(resJson);
    }
    else {
        throw app.err.invalidParameter;
    }

}

/*
 * ��ȡ�����б�
 * */
function* getshoplist(req,res)
{
    console.log("����getshoplist");
    //res.setHeader('Access-Control-Allow-Origin','*');
    let resJson, sort, page, condition,querytype;
    querytype=req.body.querytype;
    let result =yield* gameDAO.Getshoplist(condition,sort,page,querytype);
    resJson = comm.response(0, result);
    console.log(resJson);
    res.jsonp(resJson);
}

/*
 * ��ȡ��ȯ�б�
 * */
function* getrewardslist(req,res)
{
    res.setHeader('Access-Control-Allow-Origin','*');
    let resJson, sort, page, condition,querytype;
    if(req)
    {
        console.log(req.body);
        if (req.body) {
            condition = req.body.where;
            sort = { "column": "id", "type": "DESC" };

            querytype=req.body.querytype;
        }
        querytype=req.body.querytype;

        let result=yield * gameDAO.Getrewardslist(condition,sort,page,querytype);
        resJson = comm.response(0, result);
        res.jsonp(resJson);
    }

}