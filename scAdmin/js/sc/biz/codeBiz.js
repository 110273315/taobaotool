var sc = require('smartacjs');
var app = sc.app();
var Promise = require('bluebird');
var config = app.conf;
var comm = require('../../common/comm.js');
var codeDAO = require('../dao/codeDAO.js');
var resCode = require('../../resCode');

//获取代码类型列表 分页
var getCodeTypeList = function (condition, sort, page, callback) {
    var _sort, _page;
    //排序和分页统一封装格式，以便在DAO层调用公用函数
    if (sort) {
        _sort = { column: sort.name, type: sort.type };
    }
    else {
        _sort = { column: "modifiedtime,createdtime", type: "desc" };
    }
    if (page) {
        _page = { index: page.num, num: page.item };
    }
    Promise.props({
        code: codeDAO.getCodeTypeList(condition, _sort, _page),
        totalCount: codeDAO.getCodeTypeListCount(condition)
    }).then(function (pages) {
        if (pages) {
            callback(null, pages);
        }
        else {
            throw { message: 'unkonwn error!' };
        }
    }).catch(function (err) {
        callback(err);
    });
}
exports.getCodeTypeList = getCodeTypeList;

//根据代码类型id获取代码类型信息
var getCodeTypeInfo = function (id, callback) {
    Promise.props({
        code: codeDAO.getCodeTypeInfo(id),
        parentlist: codeDAO.getCodeTypeParentList(id)
    }).then(function (list) {
        if (list) {
            callback(null, list);
        }
        else {
            throw { message: 'unkonwn error!' };
        }
    }).catch(function (err) {
        callback(err);
    });
}
exports.getCodeTypeInfo = getCodeTypeInfo;

//获取代码类型是否可编辑
var codetypecanedit = function (id, callback) {
    codeDAO.codetypecanedit(id)
        .then(function (r) {
            if (r && r.length && r[0] && r[0].iscanedit) {
                callback(null, true);
            }
            else {
                callback(null, false);
            }
        }).catch(function (err) {
            callback(err);
        })
}
exports.codetypecanedit = codetypecanedit;

//保存代码类型
var saveCodeType = function (data, user, callback) {
    //判断顺序号和代码类型key是否存在
    codeDAO.existsCodeTypeKey(data.id, data.keyname)
        .then(function (r) {
            if (r && r.length && r[0] && r[0].count) {
                return Promise.resolve(-1);
            }
            else {
                return codeDAO.saveCodeType(data, user);
            }
        })
        .then(function (data) {
            if (data && (data == -1 || data == -2)) {
                callback(null, data);
            }
            else {
                if (data.affectedRows) {
                    callback(null, 1);
                }
                else {
                    callback(null, 2);
                }
            }
        })
        .catch(function (err) {
            callback(err);
        });
}
exports.saveCodeType = saveCodeType;

//获取代码值 根据代码类型（keyname） 如 传city获取所有城市
var getCodeAll = function (callback) {
    codeDAO.getCodeAll()
        .then(function (r) {
            callback(null, r);
        }).catch(function (err) {
            callback(err);
        })
}
exports.getCodeAll = getCodeAll;

//获取代码值 根据代码类型（keyname） 如 传city获取所有城市
var getCodeByTypeKey = function (parenttype, callback) {
    codeDAO.getCodeByTypeKey(parenttype)
        .then(function (r) {
            callback(null, r);
        }).catch(function (err) {
            callback(err);
        })
}
exports.getCodeByTypeKey = getCodeByTypeKey;

//根据父类代码值（keyname）获取子类所有代码值 如传jiangsu获取江苏省下的所有城市 用于下拉框级联绑定
var getCodeByParentTypeKeyName = function (parenttypekeyname, callback) {
    codeDAO.getCodeByParentTypeKeyName(parenttypekeyname)
        .then(function (r) {
            callback(null, r);
        }).catch(function (err) {
            callback(err);
        })
}
exports.getCodeByParentTypeKeyName = getCodeByParentTypeKeyName;

//删除代码表类型
var codetypedelete = function (id, callback) {
    //判断是否有子类
    codeDAO.codetypehaschildren(id)
        .then(function (r) {
            if (r && r.length && r[0] && r[0].count == 0) {
                return codeDAO.codetypedelete(id);
            }
            else {
                return Promise.resolve(-1);
            }
        })
        .then(function (r) {
            if (r == -1) {
                callback(null, -1);
            }
            else {
                if (r && r.affectedRows) {
                    callback(null, 1);
                }
                else {
                    callback(null, 0);
                }
            }
        })
        .catch(function (err) {
            callback(err);
        })
}
exports.codetypedelete = codetypedelete;

//删除代码值
var codedelete = function (id, callback) {
    codeDAO.codedelete(id)
        .then(function (r) {
            if (r && r.affectedRows) {
                callback(null, 1);
            }
            else {
                callback(null, 0);
            }
        })
        .catch(function (err) {
            callback(err);
        })
}
exports.codedelete = codedelete;

//禁用或启用代码类型
var codetypeenabled = function (id, enabled, user, callback) {
    codeDAO.codetypeenabled(id, enabled, user)
        .then(function (r) {
            callback(null, r);
        }).catch(function (err) {
            callback(err);
        })
}
exports.codetypeenabled = codetypeenabled;

//根据模块 获取代码类型
var codetypebymodule = function (module, callback) {
    codeDAO.codetypebymodule(module)
        .then(function (r) {
            callback(null, r);
        }).catch(function (err) {
            callback(err);
        })
}
exports.codetypebymodule = codetypebymodule;

/**
 * 获取商铺业态
 */
var getShopCode = function (codetype, shopid, callback) {
    codeDAO.getShopCode(codetype, shopid)
        .then(function (r) {
            callback(null, r);
        }).catch(function (err) {
            callback(err);
        })
}
exports.getShopCode = getShopCode;

var getShopCodeDetail = function (codetype, shopid, callback) {
    codeDAO.getShopCodeDetail(codetype, shopid)
        .then(function (r) {
            callback(null, r);
        }).catch(function (err) {
            callback(err);
        })
}
exports.getShopCodeDetail = getShopCodeDetail;

//代码值列表 分页
var codedefinelist = function (condition, sort, page, callback) {
    var _sort, _page;
    //排序和分页统一封装格式，以便在DAO层调用公用函数
    if (sort) {
        _sort = { column: sort.name, type: sort.type };
    }
    else {
        _sort = { column: "createdtime", type: "desc" };
    }
    if (page) {
        _page = { index: page.num, num: page.item };
    }
    Promise.props({
        code: codeDAO.codedefinelist(condition, _sort, _page),
        canedit: codeDAO.codeCanEdit(condition),
        totalCount: codeDAO.codedefinelistTotalCount(condition)
    }).then(function (list) {
        if (list) {
            if (list.canedit && list.canedit.length && list.canedit[0] && list.canedit[0].iscanedit && list.canedit[0].isenabled) {
                list.canedit = true;
            }
            else {
                list.canedit = false;
            }
            callback(null, list);
        }
        else {
            throw { message: 'unkonwn error!' };
        }
    }).catch(function (err) {
        callback(err);
    });
}
exports.codedefinelist = codedefinelist;

//根据ID获取代码值信息、代码类型、父代码值下拉框数据源
var codedefinebyid = function (id, callback) {
    codeDAO.codedefineistypebyid(id)
        .then(function (r) {
            if (r && r.length && r[0] && r[0].count) {
                return Promise.props({
                    codedefine: codeDAO.codedefinebyidcodedefine(id),
                    parent: codeDAO.codedefinebyidparent(id)
                })
            }
            else {
                return Promise.resolve(false);
            }
        })
        .then(function (list) {
            if (list) {
                callback(null, list);
            }
            else {
                throw { message: 'unkonwn error!' };
            }
        })
        .catch(function (err) {
            callback(err);
        });
}
exports.codedefinebyid = codedefinebyid;

//根据代码类型及模块 获取代码类型、下拉框数据源
var codedefinebytypemodule = function (type, module, callback) {
    //判断type是否为代码类型
    codeDAO.codedefineistype(type)
        .then(function (r) {
            if (r && r.length && r[0] && r[0].count) {
                return Promise.props({
                    codedefine: codeDAO.codedefinebytypemodulecodetype(type, module),
                    parent: codeDAO.codedefinebytypemoduleparent(type, module)
                })
            }
            else {
                return Promise.resolve(false);
            }
        })
        .then(function (list) {
            if (list) {
                callback(null, list);
            }
            else {
                throw { message: 'unkonwn error!' };
            }
        })
        .catch(function (err) {
            callback(err);
        });
}
exports.codedefinebytypemodule = codedefinebytypemodule;

//保存代码值
var codedefineedit = function (data, user, callback) {
    codeDAO.codedefineeditCheck(data, 1)
        .then(function (r) {
            if (r && r.length && r[0] && r[0].count) {
                return Promise.resolve(-1);
            }
            else {
                return codeDAO.codedefineeditCheck(data, 2);
            }
        })
        .then(function (r) {
            if (r && r == -1) {
                callback(null, -1);
            }
            else {
                if (r && r.length && r[0] && r[0].count) {
                    return Promise.resolve(-2);
                }
                else {
                    return codeDAO.codedefineeditCheck(data, 3);
                }
            }
        })
        .then(function (r) {
            if (r && r == -2) {
                callback(null, -2);
            }
            else {
                if (r && r.length && r[0] && r[0].count) {
                    return Promise.resolve(-3);
                }
                else {
                    return codeDAO.codedefineedit(data, user);
                }
            }
        })
        .then(function (r) {
            if (r && r == -3) {
                callback(null, -3);
            }
            else {
                if (r.affectedRows) {
                    callback(null, 1);
                }
                else {
                    callback(null, 0);
                }
            }
        })
        .catch(function (err) {
            callback(err);
        });
}
exports.codedefineedit = codedefineedit;