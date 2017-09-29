/**
 * Created by Simon on 2016/5/16.
 * 会话管理
 *
 */
var sc = require("smartacjs");
var app = sc.app();
var Promise = sc.Promise;
var _ = sc._;
var Session = require('../../public/sc_session');
var util = require('util');
var conf = app.conf;
// 日志对象
var log = sc.createNamedLog('session_manager');
var redis = app.redis;
var resCode = require('./resCode');
//自定义错误类型
var sessionError = function (msg) {
    this.message = msg;
}
sessionError.prototype = Object.create(Error.prototype);
var SessionError = sessionError;
//定义权限值
var power = {
    add: 1,
    edit: 2,
    del: 4,
    list: 8,
    query: 16
}
/**
 * 会话对象
 * 所有属性直接访问
 */
function AdminSession(obj) {
    Session.Session.call(this, obj);
}

util.inherits(AdminSession, Session.Session);

//获取职员信息
AdminSession.prototype.getStaff = function () {
    return this.data;
}

//获取组织信息
AdminSession.prototype.getOrg = function () {
    if (this.org_id) return app.org.findOrg(this.org_id);
    if (this.data.type == 1) {
        this.org_id = this.data.bindid;
        return app.org.findOrg(this.org_id);
    } else {
        return null;
    }
}

//获取拼接sql
AdminSession.prototype.getOrgSQL = function () {
    if (this._subOrgSql) return this._subOrgSql;
    if (!!!this.org_id && this.data.type == 1) {
        this.org_id = this.data.bindid;
        subOrgList = app.org.getSubOrg(this.org_id);
        var sql = " AND orgid in ('" + subOrgList.join(',').replace(/,/g, "\',\'") + "')";
        this._subOrgSql = sql;
        return this._subOrgSql;
    } else {
        return null;
    }
}

//获取本组织以及子组织列表
AdminSession.prototype.getSubOrgList = function () {
    if (this._subOrgList) return this._subOrgList;
    if (!!!this.org_id && this.data.type == 1) {
        this.org_id = this.data.bindid;
        subOrgList = app.org.getSubOrg(this.org_id);
        this._subOrgList = subOrgList;
        return this._subOrgList;
    } else {
        return null;
    }
}

//获取店铺
AdminSession.prototype.getShop = function () {

}

//拷贝属性
for (var attr in Session) {
    exports[attr] = Session[attr];
}

// 内部创建接口
Session._createSession = function (sessionObject) {
    return new AdminSession(sessionObject);
}

/**
 * 路由过滤
 */
exports.routeFilter = function (req, res, next) {
    var reg = /^\/api\//;
    //Ueditor上传图片时会发送一个options请求，回复只需要状态为200就行
    if (req.method == 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,X_Requested_With')
        res.send();
        return;
    }
    //验证路由是否是特例
    if (reg.test(req.baseUrl)) {
        //直接通过，走路由
        next();
    } else {
        var isspecialRoutes=0;
        for (var i=0;i<=app.conf.scAdmin.routes.specialRoutes.length-1;i++){
            if (app.conf.scAdmin.routes.specialRoutes[i]==req.baseUrl) {
                isspecialRoutes=1;
            }
        }
        if (isspecialRoutes==1){
            next();
        }
        else{
            //所有已加载路由
            var routes = app.module.allRoutes;
            //判断是不是正常路由(即访问路由是否已被加载)
            var isNormal = routes.some(function (route) { return route == req.baseUrl });
            if (isNormal) {
                //正常路由逻辑
                normal(req, res, next);
            } else {
                next();
            }
        }
    }
}

/**
 * 正常接口逻辑
 */
var normal = function (req, res, next) {
    var sessionID, resJson, path;
    try {
        sessionID = req.query.sessionid || req.body.sessionid;
        path = req.baseUrl;
        if (sessionID) {
            //1.根据session获取用户信息
            exports.findSession(sessionID, true)
                .then(function (session) {
                    if (!!!session) throw new SessionError('cannot find session!');
                    //将当前用户信息设置到req对象，以便以后使用
                    req.userinfo = session;
                    //获取权限
                    return redis.get("session:menu:"+session.data.innerid);
                })
                //3.检查权限
                .then(function (limitInfo) {
                    try {
                        //路由数组
                        var urlsplit = path.split('/');
                        //路由数组长度
                        var url_split_length = urlsplit.length;
                        if (url_split_length > 3) {
                            //获取操作(即路由最后一位)
                            var actionValue = urlsplit[url_split_length - 1];
                            //获取大模块和页面KEY(页面Key由前端作为参数传过来)
                            var pageKey = req.query.menuKey || req.body.menuKey;
                            var isPowerGo = false;
                            limitInfo = JSON.parse(limitInfo);
                            limitInfo.forEach(function (item) {
                                if (item.menukey.toUpperCase() === pageKey.toUpperCase()) {
                                    if (power[actionValue]) {
                                        //做与操作，判断权限
                                        if ((parseInt(item.permission) & power[actionValue]) === power[actionValue]) {
                                            isPowerGo = true;
                                        }
                                    }
                                }
                            })
                            if (isPowerGo) {
                                return Promise.resolve(true);
                            } else {
                                throw new SessionError('access is not allowed!');
                            }
                        } else {
                            //路由错误
                            throw new SessionError('routing does not conform to the specification');
                        }
                    } catch (e) {
                        throw new SessionError('limit error:' + e);
                    }
                })
                .then(function () {
                    next();
                })
                .catch(SessionError, function (ex) {
                    log.error(ex);
                    //无权限操作
                    if (ex.message.indexOf('access is not allowed!') > -1) {
                        resJson = resCode.resJson('system', 'er_power_nopower');
                    } else if (ex.message.indexOf('routing does not conform to the specification') > -1) {
                        //路由异常
                        resJson = resCode.resJson('system', 'er_route_addr');
                    } else {
                        //没有session
                        resJson = resCode.resJson('system', 'er_session_expire');
                    }
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.jsonp(resJson);
                })
                .catch(function (ex) {
                    log.error(ex);
                    //服务器报错
                    resJson = resJson = resCode.resJson('system', 'failure');
                    res.jsonp(resJson);
                });
        } else {
            //没有session
            resJson = resCode.resJson('system', 'er_session_expire');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.jsonp(resJson);
        }
    } catch (e) {
        log.error(e);
        //服务器报错
        resJson = resJson = resCode.resJson('system', 'failure');
        res.jsonp(resJson);
    }
};

