// /**
//  * 角色路由
//  */
// exports.autoroute = {
//     get: {
//         '/base/base/RoleManagement/list': getRoleList,
//         '/base/base/RoleManagement/edit': getRoleInfo,
//         '/base/base/RoleManagement/roleEditMenu/query': getRolePower,
//         '/base/base/StaffManagement/getRoleByUserType':getRoleByUserType
//     },
//     post: {
//         '/base/base/RoleManagement/add': addRole,
//         '/base/base/RoleManagement/edit': updateRole,
//         '/base/base/RoleManagement/del': delRole,
//         '/base/base/RoleManagement/roleSaveMenu/edit': roleMenuSave,
//         '/base/base/RoleManagement/roleSaveMenu/add': roleMenuSave
//     }
// };
//
// var sc = require('smartacjs');
// var app = sc.app();
// var promise = require('bluebird');
// var comm = require('../../common/comm.js');
// var config = app.conf;
// var roleBiz = promise.promisifyAll(require('../biz/roleBiz.js'));
// var resCode = require('../../resCode');
//
// function getRoleByUserType(req,res) {
//     var resJson;
//     roleBiz.getRoleByUserTypeAsync(req.query.type)
//         .then(function (pages) {
//             resJson = comm.response(pages);
//             res.jsonp(resJson);
//         })
//         .catch(function (err) {
//             resJson = resCode.resJson('sc', 'err_sc_query');
//             res.jsonp(resJson);
//         });
// }
//
// /**
//  * 获取角色分页列表
//  * @param req
//  * @param res
//  */
// function getRoleList(req, res) {
//     var resJson, sort, page, condition;
//     if (req) {
//         if (req.query) {
//             condition = req.query.where ? req.query.where : null;
//             sort = req.query.order ? req.query.order : null;
//             page = req.query.page ? req.query.page : null;
//         }
//         roleBiz.getRoleListAsync(condition, sort, page)
//             .then(function (pages) {
//                 resJson = comm.response(pages);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resCode.resJson('sc', 'err_sc_query');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// /**
//  * 获取角色信息
//  * @param req
//  * @param res
//  */
// function getRoleInfo(req, res) {
//     var resJson;
//     if (req && req.query && req.query.where && req.query.where.id) {
//         roleBiz.findAsync(req.query.where.id)
//             .then(function (role) {
//                 resJson = comm.response(role);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resCode.resJson('sc', 'err_sc_query');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// /**
//  * 获取角色权限信息
//  * @param req
//  * @param res
//  */
// function getRolePower(req, res) {
//     var resJson;
//     if (req && req.query && req.query.where && req.query.where.id && req.query.type) {
//         roleBiz.findMenuAndPowerAsync(req.query.where.id, req.query.type)
//             .then(function (rp) {
//                 resJson = comm.response(rp);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resCode.resJson('sc', 'err_sc_query');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// /**
//  * 新增角色
//  * @param req
//  * @param res
//  */
// function addRole(req, res) {
//     var resJson;
//     var userinfo = req.userinfo.data;
//     if (req && req.body && req.body.param) {
//             roleBiz.addRoleAsync(req.body.param,userinfo)
//                 .then(function (result) {
//                     resJson = comm.response(result);
//                     res.jsonp(resJson);
//                 })
//                 .catch(function (err) {
//                     resJson = resCode.resJson('sc', 'err_sc_add');
//                     res.jsonp(resJson);
//                 })
//         }
//         else {
//             resJson = resCode.resJson('system', 'failure');
//             res.jsonp(resJson);
//         }
// }
//
// /**
//  * 更新角色
//  * @param req
//  * @param res
//  */
// function updateRole(req, res) {
//     var resJson;
//    var userinfo = req.userinfo.data;
//         if (req && req.body && req.body.where && req.body.param) {
//             roleBiz.updateRoleAsync(req.body.param, req.body.where.id,userinfo)
//                 .then(function (result) {
//                     resJson = comm.response(result);
//                     res.jsonp(resJson);
//                 })
//                 .catch(function (err) {
//                     resJson = resCode.resJson('sc', 'err_sc_modify');
//                     res.jsonp(resJson);
//                 })
//         }
//         else {
//             resJson = resCode.resJson('system', 'failure');
//             res.jsonp(resJson);
//         }
// }
//
// /**
//  * 角色菜单权限保存
//  * @param req
//  * @param res
//  */
// function roleMenuSave(req, res) {
//     var resJson;
//      var userinfo = req.userinfo.data;
//         if (req && req.body && req.body.where && req.body.where.id && req.body.obj && req.body.objData) {
//             roleBiz.saveRolePowerAsync(req.body.where.id, req.body.obj, req.body.objData,userinfo)
//                 .then(function (result) {
//                     resJson = comm.response(result);
//                     res.jsonp(resJson);
//                 })
//                 .catch(function (err) {
//                     resJson = resCode.resJson('sc', 'err_sc');
//                     res.jsonp(resJson);
//                 })
//         }
//         else {
//             resJson = resCode.resJson('system', 'failure');
//             res.jsonp(resJson);
//         }
// }
//
// /**
//  * 删除角色
//  * @param req
//  * @param res
//  */
// function delRole(req, res) {
//     var resJson;
//     if (req && req.body && req.body.where && req.body.where.id) {
//         roleBiz.delRoleAsync(req.body.where.id)
//             .then(function (result) {
//                 resJson = comm.response(result);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resCode.resJson('sc', 'err_sc_delete');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }