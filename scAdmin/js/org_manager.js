/**
 * Created by Simon on 2016/5/16.
 * 组织管理器,依赖SCServer功能
 */
var sc = require("smartacjs");
var app = sc.app();
var Promise = sc.Promise;
var db = sc.db();
var _ = sc._;

// 缓存组织列表
var _orgList = {};

//根组织
var _rootOrg = [];

/**
 * 组织对象
 * @param obj
 * @constructor
 */
function Org(obj) {
    _.extend(this, obj);
    this._sub = new Array();
    this._parent = null;
}

// 获取父组织
Org.prototype.getParent = function () {
    return this._parent;
};

// 获取所有子组织
Org.prototype.getAllSub = function () {
    if (this._allSub && this._allSub.length > 0) return this._allSub;
    this._allSub = new Array();
    for (var i = 0; i < this._sub.length; i++) {

    }
}

/**
 * 获取所有父组织
 * @param 父组织的类型
 */
Org.prototype.getAllParent = function (type) {
    var res = new Array();
    for (var org = this.getParent(); org; org = org.getParent()) {
        if (!!!type || org.class_code == type)
            res.push(org)
    }
    return res;
}

// 获取子组织
Org.prototype.getSub = function () {
    return this._sub;
};

// 获取最近租户
Org.prototype.getNearTenant = function () {
    for (var org = this.getParent(); org; org = org.getParent()) {
        if (org.class_code == 1)
            return org;
    }
}
// 获取附加属性
Org.prototype.getProperty = function (key) {

};

// 是否父组织判断
Org.prototype.isParentOrg = function (parentid) {
    var result = false;
    for (var org = this.getParent(); org; org = org.getParent()) {
        if (org.innerid == parentid) {
            result = true;
            break;
        }
    }
    return result;
}

// 查找组织
exports.findOrg = function (id) {
    if (_orgList[id]) {
        return _orgList[id];
    } else {
        return null;
    }
}

// 获取根组织
exports.getRootOrg = function (id) {
    // 获取所有组织,非id子的组织将iD去除
}

// 获取所有子组织
exports.getSubOrg = function (id, arr) {
    if (!arr) {
        arr = []
        arr.push(id);
    };
    var subList = [];
    var org = exports.findOrg(id);
    subList = org.getSub();
    subList.forEach(function (subOrg) {
        arr.push(subOrg.innerid);
        exports.getSubOrg(subOrg.innerid,arr);
    })
    return arr;
}

// 初始化
exports.init = function () {
    var sql = db.makeSQLSelect('sc_org', ['*']);
    var pool = app.res.getRPoolSync('sc');
    pool.query(sql, 'findOrg')
        .then(function (orgList) {
            //遍历组织数据，并添加到内存中
            orgList.forEach(function (orgData) {
                _orgList[orgData.innerid] = new Org(orgData);
            })
            for (var key in _orgList) {
                var org = _orgList[key];
                //判断是否存在父级
                if (org.parent_id) {
                    //父级组织
                    var parentOrg = _orgList[org.parent_id];
                    if (parentOrg) {
                        org._parent = parentOrg;
                        parentOrg._sub.push(org);
                    } else {
                        console.warn("org config error!parent org not exist! id=%s", org.innerid);
                    }
                }
            };
        })
        .catch(function (err) {
            console.error('org init error!err=%s', err);
        })
}

// 清缓存
exports.clearCache = function () {
    _orgList = {};
}

//重新加载缓存
exports.reload = function () {
    exports.clearCache();
    exports.init();
}

exports.Org = Org;