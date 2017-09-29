'use strict'
let sc = require('smartacjs'),
    Promise = sc.Promise,
    app = sc.app(),
    Rabbit = sc.RabbitMQ();
let co = require('co');
let comm = require('../../common/comm.js');
let userDAO = require('../dao/userDAO.js');
let resCode = require('../../resCode');
let config = app.conf;
let log = sc.createNamedLog('scadmin', 'app');

exports.autoroute = {
    post: {
        '/api/login': processMessage
    }
};

var msgProcesser = {
    '/api/login':login
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


/**
 * 用户登陆
 * @param req
 * @param res
 */
function* login(req, res) {
    var resJson;
    console.info("login param :"+JSON.stringify(req.body))
    if (req && req.body && req.body.name && req.body.password) {
        var result = {user:null,sessionID:null};
        let userinfoList = yield* userDAO.login(req.body.name, req.body.password);
        if (userinfoList && userinfoList.length) {
            let limitinfo = yield* userDAO.limit(req.body.name, req.body.password)
            let userinfo = userinfoList[0]
            if (userinfo) {
                userinfo.User_int_TenantID = "1";
            }
            //设置缓存信息
            userinfo.user_id = req.body.name;
            userinfo.staff_id = userinfo.innerid;
            console.info("userinfo:"+JSON.stringify(userinfo))
            var session = app.session.createSession(userinfo);
            result.sessionID = session.id;
            // app.session.setMenuCache(userinfo.innerid,JSON.stringify(limitinfo));
            result.userinfo = userinfo
            if (userinfo.type != 1) {
                resCode.resJson('sc', 'err_sc');
                res.jsonp(resJson);
            } else {
                resJson = comm.response(result);
                res.jsonp(resJson);
            }
        }else{
            console.info("no user info!")
            resJson = resCode.resJson('system', 'er_login');
            res.jsonp(resJson);
        }

    } else {
        resJson = resCode.resJson('system', 'failure');
        res.jsonp(resJson);
    }
}
