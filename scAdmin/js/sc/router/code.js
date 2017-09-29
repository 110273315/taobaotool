// var sc = require('smartacjs');
// var app = sc.app();
// var promise = require('bluebird');
// var comm = require('../../common/comm.js');
// var config = app.conf;
// var codeBiz = promise.promisifyAll(require('../biz/codeBiz.js'));
// var resCode = require('../../resCode');
//
// exports.autoroute = {
//     get: {
//         //获取代码表类型列表 分页  参数：模块、页码
//         '/base/base/codetype/list': getCodeTypeList,
//         //根据ID获取信息
//         '/base/base/codetype/query': getCodeTypeInfo,
//         //代码表是否允许编辑
//         '/base/base/codetype/canedit/query': codetypecanedit,
//         //根据代码类型key获取代码表值 用于绑定代码表下拉框
//         '/api/base/code/list': getCodeByTypeKey,
//         //根据代码表类型及父级代码值获取代码表
//         '/api/base/code/parent/list': getCodeByParentTypeKeyName,
//         //删除代码表类型
//         '/base/base/codetype/del': codetypedelete,
//         //禁用启用代码类型
//         '/base/base/codetype/enabled/edit': codetypeenabled,
//         //根据模块获取代码表类型
//         '/base/base/codetype/codetypebymodule/query': codetypebymodule,
//         //获取代码值列表 分页 模块、代码类型、页码
//         '/base/base/codetype/codedefine/list': codedefinelist,
//         //删除代码值
//         '/base/base/codetype/code/del': codedelete,
//         //获取代码值详细信息
//         '/base/base/codetype/codedefine/query': codedefine,
//         //获取商铺业态
//         '/api/base/codeShop/list': getShopCode,
//         //获取商铺行业明细类型
//         '/api/base/codeShop/detail/list': getShopCodeDetail,
//         //获取所有代码值
//         '/base/base/codeall/list': getCodeAll,
//     },
//     post: {
//         //保存代码表类型
//         '/base/base/codetype/edit': saveCodeType,
//         //保存代码值
//         '/base/base/codedefine/edit': codedefineedit
//     }
// }
//
// //获取所有代码值
// function getCodeAll(req, res) {
//     var resJson;
//     codeBiz.getCodeAllAsync()
//         .then(function (r) {
//             resJson = comm.response(r);
//             res.jsonp(resJson);
//         })
//         .catch(function (err) {
//             resJson = resJson = resCode.resJson('system', 'failure');
//             res.jsonp(resJson);
//         })
// }
//
// //获取代码表类型列表 分页  参数：模块、页码
// function getCodeTypeList(req, res) {
//     var resJson, sort, page, condition;
//     if (req) {
//         if (req.query) {
//             condition = req.query.where ? req.query.where : null;
//             sort = req.query.order ? req.query.order : {name: "IFNULL(main.modifiedtime,main.createdtime)", type: "DESC"};
//             page = req.query.page ? req.query.page : null;
//         }
//         codeBiz.getCodeTypeListAsync(condition, sort, page)
//             .then(function (pages) {
//                 resJson = comm.response(pages);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //根据ID获取信息
// function getCodeTypeInfo(req, res) {
//     var resJson;
//     if (req.query && req.query.where && req.query.where.id) {
//         codeBiz.getCodeTypeInfoAsync(req.query.where.id)
//             .then(function (r) {
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //代码表是否允许编辑
// function codetypecanedit(req, res) {
//     var resJson;
//     if (req.query && req.query.where && req.query.where.id) {
//         codeBiz.codetypecaneditAsync(req.query.where.id)
//             .then(function (r) {
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //保存代码表类型
// function saveCodeType(req, res) {
//     var resJson;
//     if (req.body && req.body.sessionid) {
//         codeBiz.saveCodeTypeAsync(req.body, req.userinfo.data)
//             .then(function (r) {
//                 // -1 key 存在 -2 sort存在 1 ok 2 fail
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //根据代码类型key获取代码表值 用于绑定代码表下拉框
// function getCodeByTypeKey(req, res) {
//     var resJson;
//     if (req.query && req.query.parenttype) {
//         codeBiz.getCodeByTypeKeyAsync(req.query.parenttype)
//             .then(function (r) {
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //根据代码表类型及父级代码值获取代码表
// function getCodeByParentTypeKeyName(req, res) {
//     // codetype:city(keyname) parentvalue:1(keycode)
//     var resJson;
//     if (req.query && req.query.keyname) {
//         codeBiz.getCodeByParentTypeKeyNameAsync(req.query.keyname)
//             .then(function (r) {
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //删除代码表类型
// function codetypedelete(req, res) {
//     var resJson;
//     if (req.query && req.query.where && req.query.where.id) {
//         codeBiz.codetypedeleteAsync(req.query.where.id)
//             .then(function (r) {
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //禁用启用代码类型
// function codetypeenabled(req, res) {
//     var resJson;
//     if (req.query && req.query.sessionid && req.query.id && req.query.enabled) {
//         codeBiz.codetypeenabledAsync(req.query.id, req.query.enabled, req.userinfo.data)
//             .then(function (r) {
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //根据模块获取代码表类型
// function codetypebymodule(req, res) {
//     var resJson;
//     if (req.query && req.query.module) {
//         codeBiz.codetypebymoduleAsync(req.query.module)
//             .then(function (r) {
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //获取代码值列表 分页 模块、代码类型、页码
// function codedefinelist(req, res) {
//     var resJson, sort, page, condition;
//     if (req.query) {
//         condition = req.query.where ? req.query.where : null;
//         sort = req.query.order ? req.query.order : {name: "istoplevel,parentid,sortno",type:"ASC"};
//         page = req.query.page ? req.query.page : null;
//     }
//     codeBiz.codedefinelistAsync(condition, sort, page)
//         .then(function (pages) {
//             resJson = comm.response(pages);
//             res.jsonp(resJson);
//         })
//         .catch(function (err) {
//             resJson = resJson = resCode.resJson('system', 'failure');
//             res.jsonp(resJson);
//         })
// }
//
// //删除代码值
// function codedelete(req, res) {
//     var resJson;
//     if (req.query && req.query.where && req.query.where.id) {
//         codeBiz.codedeleteAsync(req.query.where.id)
//             .then(function (r) {
//                 resJson = comm.response(r);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             })
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //获取代码值详细信息
// function codedefine(req, res) {
//     var resJson;
//     if (req.query && req.query.where && req.query.where) {
//         if (req.query.where.id && req.query.where.id != "0") {
//             //存在ID 修改 或手动更改地址栏 根据ID获取代码值信息、代码类型、父代码值下拉框数据源
//             codeBiz.codedefinebyidAsync(req.query.where.id)
//                 .then(function (r) {
//                     resJson = comm.response(r);
//                     res.jsonp(resJson);
//                 })
//                 .catch(function (err) {
//                     resJson = resJson = resCode.resJson('system', 'failure');
//                     res.jsonp(resJson);
//                 })
//         }
//         else {
//             if (req.query.where.type && req.query.where.module) {
//                 //新增 根据代码类型及模块 获取代码类型、父代码值下拉框数据源
//                 codeBiz.codedefinebytypemoduleAsync(req.query.where.type, req.query.where.module)
//                     .then(function (r) {
//                         resJson = comm.response(r);
//                         res.jsonp(resJson);
//                     })
//                     .catch(function (err) {
//                         resJson = resJson = resCode.resJson('system', 'failure');
//                         res.jsonp(resJson);
//                     })
//             }
//             else {
//                 //参数错误
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             }
//         }
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //保存代码值
// function codedefineedit(req, res) {
//     var resJson;
//     if (req.body && req.body.sessionid && req.body.keyname && req.body.sortno && req.body.keycode) {
//         codeBiz.codedefineeditAsync(req.body, req.userinfo.data)
//             .then(function (s) {
//                 resJson = comm.response(s);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             });
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// /**
//  * 获取商铺业态
//  */
// function getShopCode(req, res) {
//     var resJson;
//     if (req.query && req.query.codetype && req.query.shopid) {
//         codeBiz.getShopCodeAsync(req.query.codetype, req.query.shopid)
//             .then(function (s) {
//                 resJson = comm.response(s);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             });
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }
//
// //获取商铺明细行业类型
// function getShopCodeDetail(req, res) {
//     var resJson;
//     if (req.query && req.query.codetype && req.query.shopid) {
//         codeBiz.getShopCodeDetailAsync(req.query.codetype, req.query.shopid)
//             .then(function (s) {
//                 resJson = comm.response(s);
//                 res.jsonp(resJson);
//             })
//             .catch(function (err) {
//                 resJson = resJson = resCode.resJson('system', 'failure');
//                 res.jsonp(resJson);
//             });
//     }
//     else {
//         resJson = resJson = resCode.resJson('system', 'failure');
//         res.jsonp(resJson);
//     }
// }