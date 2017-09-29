/**
 * Created by Administrator on 2015/11/23.
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
var webappDAO = require('../dao/webappDAO.js');
let log = sc.createNamedLog('scAdmin', 'webapp');

exports.autoroute = {
    post: {
        '/sr/webapp/homepage/query': processMessage,
        '/sr/webapp/homepage/pic/list': processMessage,
        '/sr/webapp/homepage/edit': processMessage,
        '/sr/webapp/homepage/pic/add': processMessage
    }
};


var msgProcesser = {
    // 查询客户信息
    '/sr/webapp/homepage/query': QueryHomePage,
    '/sr/webapp/homepage/edit': EditHomePage,
    '/sr/webapp/homepage/pic/list': GetHomePagePicList,
    '/sr/webapp/homepage/pic/add': AddHomePagePic,
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
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        };
    });
}


function* QueryHomePage(req, res) {
    let result = yield* webappDAO.queryHomePage()
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}


function* EditHomePage(req, res) {
    let result = yield* webappDAO.editHomePage(req.body);
    let resJson;
    if (result &&result.affectedRows>0) {
        resJson = comm.response(0, 'ok');
    }
    else {
        resJson = comm.response(-1, '');
    }
    res.jsonp(resJson);
}

function* GetHomePagePicList(req, res) {
    let result = yield* webappDAO.getHomePagePicList();
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* AddHomePagePic(req, res) {
    let result = yield* webappDAO.addHomePagePic(req.body);
    let resJson;
    if (result && result.insertId > 0) {
        resJson = comm.response(0, 'ok');
    }
    else {
        resJson = comm.response(-1, '');
    }
    res.jsonp(resJson);
}
