var sc = require('smartacjs');
var app = sc.app();
var promise = require('bluebird');
var _ = sc._;
var config = app.conf;
var comm = require('../../common/comm.js');
var roleDAO = require('../dao/roleDAO.js');
var resCode = require('../../resCode');

/**
 * 获取分页的角色列表
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 * @param tenantId 租户id
 * @param callback 回调函数
 */
var getRoleList = function (condition, sort, page,callback) {
    var _sort, _page;
    //排序和分页统一封装格式，以便在DAO层调用公用函数
    if (sort) {
        _sort = {column: sort.name, type: sort.type};
    }
    if (page) {
        _page = {index: page.num, num: page.item};
    }
    promise.props({
        role: roleDAO.getRoleList(condition,_sort, _page),
        totalCount: roleDAO.getRoleCount(condition)
    }).then(function (pages) {
        if (pages) {
            callback(null, pages);
        }
        else {
            throw {message: 'unkonwn error!'};
        }
    }).catch(function (err) {
        callback(err);
    });
};

/**
 * 根据条件查询角色信息
 * @param condition 查询条件
 * @param tenantId 租户id
 * @param callback 回调函数
 */
var find = function (id,callback) {
    roleDAO.find(id)
        .then(function (role) {
            if (role) {
                callback(null, role);
            }
            else {
                throw {message: 'unkonwn error!'};
            }
        })
        .catch(function (err) {
            callback(err);
        });
};

/**
 * 获取菜单和操作
 * @param condition 查询条件
 * @param type 类型menu还是data（表示取的是菜单权限还是数据权限）
 * @param tenantId 租户id
 * @param callback 回调函数
 */
var findMenuAndPower = function (id, type, callback) {
    promise.props({
        menuPower: roleDAO.getMenuPower(id),
        power: roleDAO.getMenuOperations()
    }).then(function (result) {
        if (result) {
            if (result.menuPower && _.isArray(result.menuPower) && result.menuPower.length > 0) {
                result.selected = result.menuPower[0];
                delete result.menuPower;
            }
            callback(null, result);
        }
        else {
            throw {message: 'unkonwn error!'};
        }
    }).catch(function (err) {
        callback(err);
    });
};

/**
 * 新增角色
 * @param role 角色信息
 * @param userInfo 当前登录人信息
 * @param callback 回调函数
 */
var addRole = function (role, userInfo, callback) {
    roleDAO.existsRole(role.name ? role.name : "", "").then(function (existsRole) {
        if (existsRole && existsRole.length && existsRole[0] && existsRole[0].count == 0) {
            return roleDAO.addRole({
                name: role.name ? role.name : '',
                type: role.type ? role.type.toString() : "1",
                createrid: userInfo.innerid
            });
        } else {
            //存在 直接返回 到下一个then
            return Promise.resolve(-1);
        }
    }).then(function (data) {
        if (data && data != -1) {
            if (data.affectedRows == 1) {
                callback(null, comm.response());
            } else {
                var msg = resCode.resJson('sc', 'err_sc_add');
                callback(null,msg);
            }
        } else {
            var msg = resCode.resJson('sc', 'err_sc_add_duplicate');
            callback(null,msg);
        }
    }).catch(function (err) {
        callback(err);
    });
};

/**
 * 更新角色信息
 * @param role 需要更新的内容
 * @param condition 更新条件
 * @param userInfo 当前登录人信息
 * @param callback 回调函数
 */
var updateRole = function (role, id, userInfo, callback) {
    roleDAO.existsRole(role.name ? role.name : "", id).then(function (existsRole) {
        if (existsRole && existsRole.length && existsRole[0] && existsRole[0].count == 0) {
            return roleDAO.updateRole({
                innerid:id?id:"",
                name: role.name ? role.name : '',
                type: role.type ? role.type.toString() : "1",
                modifierid: userInfo.innerid
            });
        } else {
            //存在 直接返回 到下一个then
            return Promise.resolve(-1);
        }
    }).then(function (data) {
        if (data && data != -1) {
            if (data.affectedRows == 1) {
                callback(null, comm.response());
            } else {
                callback(null, {
                    errcode: -1002,
                    errmsg: '保存角色失败',
                    msgbody: ''
                });
            }
        } else {
            callback(null, {
                errcode: -1001,
                errmsg: '角色已经存在',
                msgbody: ''
            });
        }
    }).catch(function (err) {
        callback(err);
    });
 };

/**
 * 保存角色的权限
 * @param id 数据
 * @param menu 菜单权限
 * @param data 数据权限
 * @param userInfo 当前用户信息
 * @param callback 回调函数
 */
var saveRolePower = function (id, menu, data, userInfo, callback) {
    roleDAO.saveRolePower({
        roleid: id ? id : "",
        staffid: userInfo.innerid ? userInfo.innerid : "",
        menuid: menu.id ? menu.id : "",
        menuvalue: menu.value ? menu.value : "",
        dataid: data.id ? data.id : "",
        datavalue: data.value ? data.value : ""
    })
        .then(function (result) {
            if (result) {
                callback(null, result);
            }
            else {
                throw {message: 'unkonwn error!'};
            }
        })
        .catch(function (err) {
            callback(err);
        });
};

/**
 * 根据id删除角色
 * @param id 角色id
 * @param callback 回调函数
 */
var delRole = function (id, callback) {
    roleDAO.delRole(id)
        .then(function (result) {
            if (result) {
                callback(null, result);
            }
            else {
                throw {message: 'unkonwn error!'};
            }
        })
        .catch(function (err) {
            callback(err);
        });
};

/*
* 根据角色对应的用户类型搜索
* */
var getRoleByUserType = function(type,callback){
    if(!type){
        type = "0";
    }
    roleDAO.getRoleByUserType(type).then(function(role){
        callback(null, role);
    }).catch(function (err) {
        callback(err);
    });
}

exports.getRoleList = getRoleList;
exports.find = find;
exports.findMenuAndPower = findMenuAndPower;
exports.addRole = addRole;
exports.updateRole = updateRole;
exports.saveRolePower = saveRolePower;
exports.delRole = delRole;
exports.getRoleByUserType = getRoleByUserType;