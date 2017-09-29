var sc = require('smartacjs'),
    _ = sc._,
    app = sc.app(),
    db = sc.db(),
    comm = require('../../common/comm.js'),
    moment = require('moment'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');

//获取代码类型列表
var getCodeTypeList = function (condition, sort, page) {
    var sql, _condition = "", _sortAndPage;
    /*
    if (condition) {
        _condition = condition.module ? " AND main.module = @module@" : "";
    }
    */
    if (!sort) {
        sort = { column: "sortno", type: "ASC" }
    }
    _sortAndPage = comm.sortAndPage(sort, page);
    sql = "SELECT main.*,IFNULL(parent.keyvalue,'') `parentkeyvalue`,IFNULL(parent.keyname,'') `parentkeyname` FROM (SELECT * FROM sc_code WHERE istoplevel = 0 ) main\
            LEFT JOIN (SELECT * FROM sc_code WHERE istoplevel = 0) parent\
            ON main.parentid = parent.id WHERE 1 = 1 " + _condition + _sortAndPage.sort + _sortAndPage.page + ";";
    sql = db.makeSQL(sql, condition);
    return rPool.query(sql);
}
exports.getCodeTypeList = getCodeTypeList;

//获取代码类型列表总数
var getCodeTypeListCount = function (condition) {
    var sql, _condition = "", _sortAndPage;
    /*
    if (condition) {
        _condition = condition.module ? " AND main.module = @module@" : "";
    }
    */
    sql = "select count(1) `count` from (SELECT main.*,IFNULL(parent.keyvalue,'') `parentkeyvalue` FROM (SELECT * FROM sc_code WHERE istoplevel = 0 ) main\
            LEFT JOIN (SELECT * FROM sc_code WHERE istoplevel = 0) parent\
            ON main.parentid = parent.id WHERE 1 = 1 " + _condition + ") code;";
    sql = db.makeSQL(sql, condition);
    return rPool.query(sql);
}
exports.getCodeTypeListCount = getCodeTypeListCount;

//根据ID获取代码表类型信息
var getCodeTypeInfo = function (id) {
    var sql = "select * from sc_code where id = @id@";
    sql = db.makeSQL(sql, { id: id });
    return rPool.query(sql);
}
exports.getCodeTypeInfo = getCodeTypeInfo;

//获取父代码
var getCodeTypeParentList = function (id) {
    var sql = "select * from sc_code where isenabled = 1 and istoplevel = 0 and id <> @id@ ";
    sql = db.makeSQL(sql, { id: id });
    return rPool.query(sql);
}
exports.getCodeTypeParentList = getCodeTypeParentList;

//代码类型是否允许修改
var codetypecanedit = function (id) {
    var sql = "select iscanedit from sc_code where id = @id@;";
    sql = db.makeSQL(sql, { id: id });
    return rPool.query(sql);
}
exports.codetypecanedit = codetypecanedit;

//是否存在代码表类型key
var existsCodeTypeKey = function (id, key) {
    var sql = "select ifnull(count(1),0) `count` from sc_code where isenabled = 1 and istoplevel = 0 \
    and keyname = @key@ ";
    if (id && id.toString() != '0') {
        sql += " and id <> @id@ ";
    }
    sql = db.makeSQL(sql, { id: id, key: key });
    //执行SQL
    return rPool.query(sql);
}
exports.existsCodeTypeKey = existsCodeTypeKey;

//var existsCodeTypeSort = function (id,sort) {
//    var sql = "select ifnull(count(1),0) `count` from sc_code where isenabled = 1 and istoplevel = 0 and sortno = '" + sort.toString() + "' ";
//    if (id && id.toString() != '0') {
//        sql += " and id <> '" + id.toString() + "' ";
//    }
//    //执行SQL
//    return _dao(function (resolve, reject) {
//        return this.conn.query(sql, null);
//    });
//}
//exports.existsCodeTypeSort = existsCodeTypeSort;

//保存代码表类型
var saveCodeType = function (data, user) {
    var sql = "";
    data.innerid = user.innerid;
    if (data.id && data.id.toString() != "0" && data.id.toString() != "") {
        //修改
        sql = "UPDATE sc_code SET keyname = @keyname@,parentid = @parentid@ ,istoplevel = '0' ,keycode = '0' ,keyvalue = @keyvalue@ \
            ,sortno = @sortno@ ,isenabled = '1' ,iscanedit = @iscanedit@,remark = @remark@ \
            ,modifierid = @innerid@ ,modifiedtime = now() where id = @id@;";
    }
    else {
        //新增
        sql = "INSERT INTO sc_code(keyname,parentid,istoplevel,keycode,keyvalue,sortno,isenabled,iscanedit,remark,createrid,createdtime) \
            VALUES(@keyname@,@parentid@,'0','0',@keyvalue@,@sortno@,'1',@iscanedit@,@remark@,@innerid@,NOW());";
    }
    sql = db.makeSQL(sql, data);
    //执行SQL
    return wPool.query(sql);
}
exports.saveCodeType = saveCodeType;


//根据代码类型key获取绑定到下拉框的数据源
var getCodeAll = function () {
    var sql = "SELECT keyname,keyvalue AS ch,keyvalue_en AS en FROM sc_code WHERE isenabled = 1 AND istoplevel IN (SELECT id FROM sc_code WHERE isenabled = 1 );";
    return rPool.query(sql);
}
exports.getCodeAll = getCodeAll;


//根据代码类型key获取绑定到下拉框的数据源
var getCodeByTypeKey = function (parenttype) {
    var sql = "SELECT * FROM sc_code WHERE isenabled = 1 and istoplevel IN (SELECT id FROM sc_code \
    WHERE isenabled = 1 and keyname = @parenttype@);";
    sql = db.makeSQL(sql, { parenttype: parenttype })
    //执行SQL
    return rPool.query(sql);
}
exports.getCodeByTypeKey = getCodeByTypeKey;

//根据父代码的值（KeyName）获取代码值
var getCodeByParentTypeKeyName = function (parenttypekeyname) {
    var sql = "SELECT * FROM sc_code WHERE isenabled = 1 AND istoplevel <> 0 AND \
    parentid IN (SELECT id FROM sc_code WHERE isenabled = 1 AND keyname = @parenttypekeyname@);";
    sql = db.makeSQL(sql, { parenttypekeyname: parenttypekeyname });
    //执行SQL
    return rPool.query(sql);
}
exports.getCodeByParentTypeKeyName = getCodeByParentTypeKeyName;

//删除代码表类型
var codetypedelete = function (id) {
    //var sql = "update sc_code set isenabled = 0,modifierid = '" + user.innerid + "',modifiedtime = now() where id = '" + id + "' and istoplevel = 1;";
    var sql = "delete from sc_code where id = @id@ and istoplevel = 0";
    sql = db.makeSQL(sql, { id: id });
    //执行SQL
    return wPool.query(sql);
}
exports.codetypedelete = codetypedelete;

//删除代码值
var codedelete = function (id) {
    var sql = "delete from sc_code where id = @id@ and istoplevel <> 0";
    sql = db.makeSQL(sql, { id: id });
    //执行SQL
    return wPool.query(sql);
}
exports.codedelete = codedelete;

//代码表类型是否包含子类型
var codetypehaschildren = function (id) {
    var sql = "select count(1) `count` from sc_code where isenabled = 1 and parentid = @id@;";
    sql = db.makeSQL(sql, { id: id });
    return rPool.query(sql);
}
exports.codetypehaschildren = codetypehaschildren;

//禁用与启用代码表类型
var codetypeenabled = function (id, enabled, user) {
    var sql = "update sc_code set isenabled = @enabled@,modifierid = @innerid@,modifiedtime = now() where id = @id@ and istoplevel = 0";
    sql = db.makeSQL(sql, { enabled: enabled, innerid: user.innerid, id: id });
    return wPool.query(sql);
}
exports.codetypeenabled = codetypeenabled;

//根据模块 获取代码表类型
var codetypebymodule = function (module) {
    var sql = "select * from sc_code where istoplevel = 0 ;";  //and module = @module@
    sql = db.makeSQL(sql, { module: module });
    return wPool.query(sql);
}
exports.codetypebymodule = codetypebymodule;

//获取代码值列表 分页
var codedefinelist = function (condition, sort, page) {
    var _condition = "";
    if (condition) {
        /*
        if (condition.module && condition.module != "" && condition.module != "0") {
            _condition += condition.module ? " AND module = @module@" : "";
        }
        */
        if (condition.codetype && condition.codetype != "" && condition.codetype != "0") {
            _condition += condition.codetype ? " AND istoplevel = @codetype@" : "";
        }
    }
    if (!sort) {
        sort = { column: "istoplevel,sortno", type: "ASC" }
    }
    var _sortAndPage = comm.sortAndPage(sort, page);
    var sql = "SELECT a.*,b.keyvalue `codetype`,b.keyname `codetypename`,b.isenabled `codetype_isenabled`,b.iscanedit `codetype_iscanedit` FROM\
        (SELECT * FROM sc_code WHERE istoplevel <> 0  "+ _condition + _sortAndPage.sort + _sortAndPage.page + " ) a\
        LEFT JOIN (SELECT keyname,keyvalue,id,isenabled,iscanedit FROM sc_code WHERE istoplevel = 0) b\
        ON a.istoplevel = b.id WHERE IFNULL(b.keyvalue,'') <> '';";
    sql = db.makeSQL(sql, condition);
    //执行SQL
    return rPool.query(sql);
}
exports.codedefinelist = codedefinelist;

//代码类型是否允许编辑
var codeCanEdit = function (condition) {
    if (!condition.codetype) {
        condition.codetype = "-1";
    }
    var sql = "select isenabled,iscanedit from sc_code where id = @codetype@";
    sql = db.makeSQL(sql, condition);
    //执行SQL
    return rPool.query(sql);
}
exports.codeCanEdit = codeCanEdit;

//获取代码值列表总数
var codedefinelistTotalCount = function (condition) {
    var _condition = "";
    if (condition) {
        /*
        if (condition.module && condition.module != "" && condition.module != "0") {
            _condition += condition.module ? " AND module = @module@" : "";
        }
        */
        if (condition.codetype && condition.codetype != "" && condition.codetype != "0") {
            _condition += condition.codetype ? " AND istoplevel = @codetype@" : "";
        }
    }
    var sql = "select count(1) `count` from (SELECT a.id,a.module,b.keyvalue `codetype`,a.keycode,a.keyvalue FROM\
        (SELECT id,module,keyvalue,istoplevel,keycode FROM sc_code WHERE istoplevel <> 0  "+ _condition + " ) a\
        LEFT JOIN (SELECT keyname,keyvalue,id FROM sc_code WHERE  istoplevel = 0) b\
        ON a.istoplevel = b.id WHERE IFNULL(b.keyvalue,'') <> '') code;";
    sql = db.makeSQL(sql, condition);
    //执行SQL
    return rPool.query(sql);
}
exports.codedefinelistTotalCount = codedefinelistTotalCount;

//根据ID获取代码值信息
var codedefinebyidcodedefine = function (id) {
    var sql = "SELECT sc_code.*, c.id `pid`,c.istoplevel `pistoplevel`,c.module `pmodule`,c.parentid `pparentid`,c.keyname `pname`,c.keyvalue `pvalue`\
        FROM sc_code LEFT JOIN sc_code c ON sc_code.istoplevel = c.id WHERE sc_code.isenabled = 1 AND sc_code.iscanedit = 1 AND sc_code.istoplevel <> 0 AND sc_code.id = @id@;";
    sql = db.makeSQL(sql, { id: id });
    //执行SQL
    return rPool.query(sql);
}
exports.codedefinebyidcodedefine = codedefinebyidcodedefine;

//根据ID获取父代码值下拉框数据源
var codedefinebyidparent = function (id) {
    var sql = "SELECT * FROM sc_code WHERE istoplevel <> 0 AND  istoplevel = (SELECT parentid FROM \
    sc_code WHERE id = (SELECT istoplevel FROM sc_code WHERE id = @id@))";
    sql = db.makeSQL(sql, { id: id });
    //执行SQL
    return rPool.query(sql);
}
exports.codedefinebyidparent = codedefinebyidparent;

//根据代码类型及模块获取代码类型
var codedefinebytypemodulecodetype = function (type, module) {
    var sql = "SELECT '0' id,'' keyname,'0' parentid,'-1' istoplevel, '' keycode,'' keyvalue,'1' sortno,\
    '1' module,'1' isenabled,'1' iscanedit,'' remark,'' createrid,NOW() createdtime,'' modifierid,NOW() \
    modifiedtime, id `pid`,istoplevel `pistoplevel`,module `pmodule`,parentid `pparentid`,keyname \
    `pname`,keyvalue `pvalue` FROM sc_code WHERE id= @type@";
    sql = db.makeSQL(sql, { type: type });
    //执行SQL
    return rPool.query(sql);
}
exports.codedefinebytypemodulecodetype = codedefinebytypemodulecodetype;

//根据代码类型及模块获取父代码值下拉框数据源
var codedefinebytypemoduleparent = function (type, module) {
    var sql = "SELECT * FROM sc_code WHERE istoplevel = (SELECT CASE parentid WHEN 0 THEN -1 \
    ELSE parentid END parentid FROM sc_code WHERE id= @type@);";
    sql = db.makeSQL(sql, { type: type });
    //执行SQL
    return rPool.query(sql);
}
exports.codedefinebytypemoduleparent = codedefinebytypemoduleparent;

//是否为代码表类型 根据类型
var codedefineistype = function (type) {
    var sql = "SELECT COUNT(1) `count` FROM sc_code WHERE istoplevel = 0 AND isenabled = 1 \
    AND iscanedit = 1 AND id = @type@";
    sql = db.makeSQL(sql, { type: type });
    //执行SQL
    return rPool.query(sql);
}
exports.codedefineistype = codedefineistype;

//是否为代码表类型 根据ID
var codedefineistypebyid = function (id) {
    var sql = "SELECT COUNT(1) `count` FROM sc_code WHERE istoplevel = 0 AND isenabled = 1 \
    AND iscanedit = 1 AND id = (SELECT istoplevel FROM sc_code WHERE id = @id@)";
    sql = db.makeSQL(sql, { id: id });
    //执行SQL
    return rPool.query(sql);
}
exports.codedefineistypebyid = codedefineistypebyid;

//保存代码值之前校验
var codedefineeditCheck = function (data, type) {
    var sql = "";
    switch (type) {
        case 1:
            //key 全局唯一
            sql = "SELECT count(1) `count` FROM sc_code WHERE iscanedit = 1 AND isenabled = 1 AND keyname = @keyname@";
            break;
        case 2:
            //sort 当前代码表类型下唯一
            if (data.parentid == "0") {
                sql = "SELECT count(1) `count` FROM sc_code WHERE iscanedit = 1 AND isenabled = 1 AND parentid = @istoplevel@ AND sortno = @sortno@";
            } else {
                sql = "SELECT count(1) `count` FROM sc_code WHERE iscanedit = 1 AND isenabled = 1 AND parentid = @parentid@ AND sortno = @sortno@";
            }
            break;
        case 3:
            //code 当前代码表类型下唯一
            if (data.parentid == "0") {
                sql = "SELECT count(1) `count` FROM sc_code WHERE iscanedit = 1 AND isenabled = 1 AND parentid = @istoplevel@ AND keycode = @keycode@";
            } else {
                sql = "SELECT count(1) `count` FROM sc_code WHERE iscanedit = 1 AND isenabled = 1 AND parentid = @parentid@ AND keycode = @keycode@";
            }
            break;
    }
    if (data.id && data.id != "0") {
        sql += " and id <> @id@";
    }
    sql = db.makeSQL(sql, data);
    //执行SQL
    return rPool.query(sql);
}
exports.codedefineeditCheck = codedefineeditCheck;

//保存代码值
var codedefineedit = function (data, user) {
    var sql = "";
    data.innerid = user.innerid;
    if (data.id && data.id != "0") {
        //修改
        sql = "UPDATE sc_code SET keyname = @keyname@ ,parentid = @parentid@,istoplevel = @istoplevel@,keycode = @keycode@ \
           ,keyvalue = @keyvalue@,keyvalue_en = @keyvalue_en@,sortno = @sortno@,module = @module@,isenabled = '1' ,iscanedit = '1' ,remark = @remark@ \
           ,modifierid = @innerid@,modifiedtime = NOW() WHERE id = @id@;";
    }
    else {
        if (data.parentid != "0") {
            //新增
            sql = "INSERT INTO sc_code(keyname,parentid,istoplevel,keycode,keyvalue,keyvalue_en,sortno,isenabled,iscanedit,remark,createrid,createdtime) VALUES ( \
           @keyname@,@parentid@,@istoplevel@,@keycode@,@keyvalue@,@keyvalue_en@,@sortno@,'1','1',@remark@,@innerid@,NOW());";
        } else {
            //新增
            sql = "INSERT INTO sc_code(keyname,parentid,istoplevel,keycode,keyvalue,keyvalue_en,sortno,isenabled,iscanedit,remark,createrid,createdtime) VALUES ( \
           @keyname@,@istoplevel@,@istoplevel@,@keycode@,@keyvalue@,@keyvalue_en@,@sortno@,'1','1',@remark@,@innerid@,NOW());";
        }
    }
    sql = db.makeSQL(sql, data);
    //执行SQL
    return wPool.query(sql);
}
exports.codedefineedit = codedefineedit;

var getShopCode = function (codetype, shopid) {
    var sql = "SELECT c.keyname as resourcekey ,CAST(c.keycode AS CHAR) AS codevalue ,c.keyvalue AS name,c.keyvalue_en AS enname,s.industry_code,s.isselected,CASE s.is_main WHEN 1 THEN true ELSE false END AS is_main  FROM sc_code c \
            LEFT JOIN (SELECT industry_code,industry_key,is_main,'true' as isselected FROM sc_shopindustry_relationship WHERE shopid = @shopid@ ) s ON c.keyname = s.industry_key \
            WHERE c.isenabled = 1 and c.istoplevel IN (SELECT id FROM sc_code WHERE isenabled = 1 and keyname = @codetype@);";
    sql = db.makeSQL(sql, { codetype: codetype, shopid: shopid });
    return rPool.query(sql);
}
exports.getShopCode = getShopCode;

var getShopCodeDetail = function (codetype, shopid) {
    var sql = "SELECT c.keyname as resourcekey ,CAST(c.keycode AS CHAR) AS codevalue,c.keyvalue AS name,c.keyvalue_en AS enname, s.industry_code,s.isselected,CASE s.is_main WHEN 1 THEN true ELSE false END AS is_main  FROM sc_code c \
            LEFT JOIN (SELECT industry_code,industry_key,is_main, 'true' as isselected FROM sc_shopindustry_relationship WHERE shopid = @shopid@ ) s ON c.keyname = s.industry_key \
            WHERE c.isenabled = 1 AND c.istoplevel <> 0 AND c.parentid IN (SELECT id FROM sc_code WHERE isenabled = 1 AND keyname = @codetype@);";
    sql = db.makeSQL(sql, { codetype: codetype, shopid: shopid });
    return rPool.query(sql);
}
exports.getShopCodeDetail = getShopCodeDetail;