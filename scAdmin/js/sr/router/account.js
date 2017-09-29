'use strict'
let sc = require('smartacjs'),
    path = require('path'),
    app = sc.app(),
    config = app.conf,
    rabbit = sc.RabbitMQ(),
    Promise = sc.Promise,
    _=sc._,
    accountDAO = require('../dao/accountDAO.js'),
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sc', 'account'),
    co = require('co');
let conn = sc.RabbitMQ().createConnect(config.mqUrl);
conn.start()
conn.declareExchange("amq.direct", "direct");
let rpcClient = rabbit.createRPCClient(conn, "cf.wechat.rpc");
let pbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wechat.proto.js")), "cf.wechat", "Message");

exports.autoroute = {
    post: {
        '/accountList/weiapp/menu/query': getMenusByAccount,               //根据账号获取菜单信息
        '/accountList/weiapp/menu/edit': saveMenus               //保存菜单信息
        //'/sr/social/accountList/weiapp/menu/getsource': getMenuSource               //获取菜单
    }
};

function getMenusByAccount(req, res) {
    co(function*(){
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.error("getMenusByAccount:" + JSON.stringify(req.body));
        if (req && req.body && req.body.id) {
            try {
                let result = yield* accountDAO.getMenusByAccount(req.body.id)
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
}


//function getMenuSource(req, res) {
//    co(function*(){
//        var resJson = {};
//        res.setHeader('Access-Control-Allow-Origin', '*');
//        console.error("getMenuSource:" + JSON.stringify(req.body));
//        try {
//            let result = yield* accountDAO.getMenuSource()
//            let resJson = comm.response(0, result);
//            res.jsonp(resJson)
//        } catch (e) {
//            console.error("系统错误:" + e);
//            throw app.err.fail.msg("系统错误:" + e)
//        }
//    })
//}

function saveMenus(req, res) {
    co(function*(){
        var resJson = {};
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.error("saveMenus:" + JSON.stringify(req.body));
        if (req && req.body) {
            let menuEntity = req.body
            try {
                yield* accountDAO.saveMenus(menuEntity)

                console.error(menuEntity.syncToWechat);
                if (menuEntity.syncToWechat == 1) {
                    //菜单同步到微信
                    var menusetting = menuEntity.menujson;
                    console.error("menusetting:" + JSON.stringify(menusetting));
                    var obj = {
                        "header": {
                            "sender": "req_menu_reset",
                            "sender_type": "sendertype1"
                        },
                        "req_menu_reset": menusetting
                    }
                    let postData = pbEncoder.encode(obj);
                    log.info("同步微信菜单请求数据:" + JSON.stringify(obj));
                    rpcClient.sendRequest(postData, sc.guid(), 10).then(function (result) {
                        let content = pbEncoder.decode(result.content);
                        log.info("同步微信菜单返回数据: " + JSON.stringify(content));
                        if (content && content.res_menu_reset.errcode == 0) {
                            //发送成功
                            let resJson1 = comm.response(0, content.res_menu_reset);
                            res.jsonp(resJson1)
                        } else {
                            let resulterr = {
                                errcode: content.res_menu_reset.errcode,
                                errmsg: content.res_menu_reset.errmsg
                            }
                            let resJson2 = comm.response(0, resulterr);
                            res.jsonp(resJson2)
                        }
                    }).catch(function (err) {
                        log.error("同步到微信错误:" + err);
                        let catcherr = {
                            errcode: -1,
                            errmsg: "同步到微信错误:" + err
                        }
                        let resJson3 = comm.response(0, catcherr);
                        res.jsonp(resJson3)
                    });
                } else {
                    //无需同步到微信
                    console.error("无需同步到微信");
                    let elseerr = {
                        errcode: -2,
                        errmsg: "无需同步到微信"
                    }
                    let resJson4 = comm.response(0, elseerr);
                    res.jsonp(resJson4)
                }
            } catch (e) {
                console.error("系统错误:" + e);
                let catcherr1 = {
                    errcode: -1,
                    errmsg: "系统错误:" + e
                }
                let resJson5 = comm.response(0, catcherr1);
                res.jsonp(resJson5)
            }
        } else {
            console.error("请求不存在:" + JSON.stringify(req.body));
            let elseerr2 = {
                errcode: -10,
                errmsg: "请求不存在:" + JSON.stringify(req.body)
            }
            let resJson6 = comm.response(0, elseerr2);
            res.jsonp(resJson6)
        }
    })
}

