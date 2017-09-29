/**
 * session基类
 */
var sc = require("smartacjs");
var app = sc.app();
var Promise = sc.Promise;
var _ = sc._;
//获取redis连接
var redis = app.redis;
var conf = app.conf;

//内存用来记录session
var _sessionList = {};

/**
 * 会话对象
 * 所有属性直接访问
 */

function Session(obj) {
    //缓存的数据obj
    this.data = obj;
    this.id = obj.id;
    this._isDeleted = false;
}


// 是否强连接
Session.prototype.isStrong = function () {
    //比较时间，用于判断内存中的session是否强壮。该时间为当前时间 - 配置的强连接时间
    var now = new Date().valueOf();
    //如果最后访问时间小于比较时间，则说明session已经过期
    return this.data.lasttime + app.conf.session.strong_timeout * 1000 > now.valueOf();
}
// 移除连接
Session.prototype.remove = function () {
    this._isDeleted = true;
    this.updateToRedis();
    delete _sessionList[this.id];
    console.debug("session[%s] remove!", this.id);
}
// 更新会话访问时间
Session.prototype.access = function () {
    //更新obj的最后访问时间
    this.data.lasttime = new Date().valueOf();
    return this.updateToRedis();
}
if (sc.isDebug && sc.isTest) {
    process.nextTick(function () {
        var session = null;
        exports.findSession(0).then(function (sess) {
            session = sess;
            return session.addNotify({ a: 1, b: "hello1" });
        }).then(function () {
            return session.addNotify({ a: 2, b: "hello2" });
        }).then(function () {
            return session.addNotify({ a: 3, b: "hello3" });
        }).then(function () {
            return session.getNotifyList();
        }).then(function (notifyList) {
            console.log(JSON.stringify(notifyList));

        }).catch(function (e) {
            console.error(e);
        });

    })
}
// 获取通知列表
Session.prototype.getNotifyList = function () {
    var self = this;
    return new Promise(function (resolve, reject) {
        var key = self.getRedisNotifyKey();
        var rc = app.redis.conn();
        var data = null;
        rc.lrange(key, 0, -1).then(function (da) {
            data = da;
            if (data && data.length > 0) {
                // 将字符串列表转换为对象
                for (var i = 0; i < data.length; i++) {
                    try {
                        data[i] = JSON.parse(data[i]);
                    }
                    catch (e) {
                        console.log("parse notify data fail!data=%s", data[i]);
                        data[i] = null;
                    }
                }

                return rc.del(key);
            }
            else {
                resolve([]);
            }
        }).then(function () {
            resolve(data);
        }).catch(function (e) {
            console.error("cann't get session notify list,error=%s", e);
            resolve([]);
        });
    });

}
// 添加通知
Session.prototype.addNotify = function (notifyObject) {
    var key = this.getRedisNotifyKey();
    var rc = app.redis.conn();
    return rc.rpush(key, JSON.stringify(notifyObject));
}

// 获取组织
Session.prototype.getOrg = function () {
    var self = this;
    return new Promise(function (resolve, reject) {
        //存在组织数据则直接返回
        if (self._org) return resolve(self._org);
        //如果不存在orgid，则直接返回
        if (!!!self.orgid) return reject('cannot find orgid');
        var Org = require('../server/js/org_manager.js');
        if (self.orgid) {
            self._org = Org.findOrg(self.orgid);
            resolve(self._org)
        } else {
            reject('cannot find org!');
        }
    })
}
function convertToRedisUserID(staff_id) {
    return "session:user:" + staff_id.toLocaleLowerCase();
}
function convertToRedisID(id) {
    id = id.toLocaleLowerCase();
    //if (app.conf.isCompatible == true) {
        return "session:instance:"+id;
    //} else{
    //    return "session:" + id;
    //}
}

Session.prototype.getRedisID = function () {
    return convertToRedisID(this.data.id);
}

Session.prototype.getRedisUserID = function () {
    return convertToRedisUserID(this.data.user_id);
}

Session.prototype.getRedisNotifyKey = function () {
    return this.getRedisID() + ":notify";
}

// 同步Redis
Session.prototype.updateFromRedis = function () {
    var self = this;
    return new Promise(function (resolve, reject) {
        // redis查找
        redis.get(self.getRedisID())
            .then(function (sessionData) {
                if (sessionData) {
                    try {
                        var sessionObject = JSON.parse(sessionData);
                        self.data = sessionObject;
                    } catch (e) {
                        console.warn("session sync error!!error=%s!data=%s", e, sessionData);
                        reject(app.err.noExist);
                    } finally {
                        resolve();
                    }
                } else {
                    console.debug("session sync failed!!no  data!");
                    reject(app.err.noExist);
                }
            }).catch(function (err) {
                console.warn("session sync error!err=%s", err);
                reject(app.err.systemError);
            });
    });
}

// 同步Redis
Session.prototype.updateToRedis = function () {
    if (!this._isDeleted) {
        var expireTime = conf.session.timeout;
        //key: sessionid   val:obj
        var isSucess = redis.setex(this.getRedisID(), JSON.stringify(this.data), expireTime);
        if (isSucess) {
            //key : staff_id  val: sessionid
            return redis.setex(this.getRedisUserID(), this.id, expireTime);
        } else {
            return isSucess;
        }
    }
    else {
        redis.del(this.getRedisID());
        redis.del(this.getRedisUserID());
    }
}

// 获取会话
exports.findSession = function (id, access) {
    return new Promise(function (resolve, reject) {
        if (sc.isDebug && id == "0") {
            var sessionData = {
                program_type: 2,
                staff_id: 'test_user',
                user_id: 'test',
                terminal_id: 'test',
                shop_id:'shop_test_hs_ghgc',
                id:'0'
            };
            return resolve(exports._createSession(sessionData));
        }

        // 内存数组中查找
        var sessionData = _sessionList[id];
        if (!!!sessionData) {
            // redis查找
            var session = exports._createSession({ id: id });
            session.updateFromRedis().then(function () {
                //缓存中插入最新的数据
                //_sessionList[id] = session.data;
                //更新会话访问时间
                if (access) session.access();
                resolve(session);
            }).catch(function (e) {
                // 报告不存在错误
                resolve(null);
                console.log("cann't find session,session id=%s", id);
            });
        } else {
            var session = exports._createSession(sessionData);
            //更新会话访问时间
            if (access) session.access();
            if (!session.isStrong()) {
                // 如果连接不强壮,则需要刷新一次状态
                session.updateFromRedis().then(function () {
                    resolve(session);
                }).catch(function (e) {
                    // 报告不存在错误
                    resolve(null);
                });
            }
            else {
                resolve(session);
            }
        }
    })
}
// 获取会话(通过职员ID)
exports.findSessionByUserID = function (loginId) {
    var self = this;
    var session;
    return new Promise(function (resolve, reject) {
        //根据staffId从redis中获取sessionid
        redis.get(convertToRedisUserID(loginId))
            .then(function (sessionid) {
                //如果查不到sessionid,则返回空；
                if (!!!sessionid) return resolve(null);
                return exports.findSession(sessionid, false);
            })
            .then(function (session) {
                resolve(session);
            })
            .catch(function (err) {
                reject(err);
            })
    })
}
// 内部创建接口
exports._createSession = function (sessionObject) {
    return new Session(sessionObject);
}

// 创建会话
exports.createSession = function (sessionObject) {
    if (!!!sessionObject.staff_id) {
        console.error("create session fail!miss staff id");
        return null;
    }
    if (!!!sessionObject.user_id) {
        console.error("create session fail!miss user id");
        return null;
    }
    // 创建session,ID自动赋值
    sessionObject.id = sc.guid22();
    var time = new Date().valueOf();
    sessionObject.createtime = time;
    sessionObject.lasttime = time;
    var session = exports._createSession(sessionObject);
    //内存中加入会话
    //_sessionList['session:' + sessionObject.id] = sessionObject;
    //redis加入会话
    if (session.updateToRedis()) {
        return session;
    } else {
        return null;
    }
}

//登陆时菜单权限存入redis
exports.setMenuCache = function (id,jsonstr){
    redis.set("session:menu:"+id, jsonstr);
}

//获取菜单权限
exports.getMenuCache = function (id){
    return new Promise(function (resolve, reject) {
        redis.get("session:menu:"+id)
            .then(function (limit) {
                if (!!!limit) return resolve(null);
                return limit;
            })
            .then(function (session) {
                resolve(session);
            })
            .catch(function (err) {
                reject(err);
            })
    })
}

exports.Session = Session;

/**
 * 每分钟清空内存中的session
 */
function checkSessionList() {
    _sessionList = {};
}

setInterval(checkSessionList, 60000);