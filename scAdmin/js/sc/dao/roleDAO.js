var sc = require('smartacjs'),
    _ = sc._,
    db = sc.db(),
    comm = require('../../common/comm.js'),
    app = sc.app(),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');


/*
* 获取所有角色 用于绑定下拉框
* */
var getAllRoleName = function () {
    var sql = "SELECT innerid,`name` FROM sc_role;";
    return rPool.query(sql);
}
exports.getAllRoleName = getAllRoleName;

/*
* 获取分页的角色列表
* */
var getRoleList = function (condition, sort, page) {
    var sql, _condition = "", _sortAndPage;
    //处理查询条件
    if (condition) {
        _condition += condition.name ? " AND `name` LIKE @name@" : '';
        condition.name = condition.name ? '%' + condition.name + '%' : '';
        _condition += condition.type ? " AND `type` = @type@" : '';
    }
    //处理排序和分页
    _sortAndPage = comm.sortAndPage(sort, page);
    sql = "SELECT sc_role.*,IFNULL(sc_user.`count`,0) `count` FROM \
    (SELECT * FROM sc_role WHERE 1 = 1 " + _condition + _sortAndPage.sort + _sortAndPage.page + ") sc_role \
    LEFT JOIN (SELECT role_id,COUNT(1) `count` FROM sc_user GROUP BY role_id) \
    sc_user ON sc_role.innerid = sc_user.role_id;";
    sql = db.makeSQL(sql, condition);
    return rPool.query(sql);
};
exports.getRoleList = getRoleList;

/**
 * 根据条件获取角色数量
 * @param condition 条件
 * @param tenantId 租户id
 * @param callback 回调函数
 */
var getRoleCount = function (condition) {
    var sql, _condition = "", _sortAndPage;
    //处理查询条件
    if (condition) {
        _condition += condition.name ? " AND `name` LIKE @name@" : '';
        condition.name = condition.name ? '%' + condition.name + '%' : '';
    }
    sql = "select count(1) `count` from (SELECT innerid,`name`,`type`,modifierid,modifiedtime \
    FROM sc_role where 1 = 1 " + _condition + " ) role;";
    sql = db.makeSQL(sql, { name: condition.name });
    return rPool.query(sql);
};
exports.getRoleCount = getRoleCount;

/**
 * 根据条件查询角色信息
 * @param condition 查询条件
 * @param tenantId 租户id
 * @param callback 回调函数
 */
var find = function (id) {
    var sql = "SELECT sc_role.*,IFNULL(sc_user.`count`,0) `count` FROM sc_role "
        + "LEFT JOIN (SELECT role_id,COUNT(1) `count` FROM sc_user GROUP BY role_id) \
         sc_user ON sc_user.role_id = sc_role.innerid WHERE sc_role.innerid = @id@";
    sql = db.makeSQL(sql, { id: id });
    return rPool.query(sql);
};
exports.find = find;

/**
 * 根据条件查询菜单权限
 * @param condition 查询条件
 * @param tenantId 租户id
 * @param callback 回调函数
 */
var getMenuPower = function (id) {
    var sql = "SELECT role_id,GROUP_CONCAT(CAST(menu_id AS CHAR)  SEPARATOR ',') AS selected,GROUP_CONCAT(CAST(permission AS CHAR)  SEPARATOR ',')AS `value` FROM ( \
        SELECT menu.innerid menu_id,role.permission,role.role_id,role.menu_key FROM sc_role_define role inner JOIN sc_menu menu ON role.menu_key = menu.menukey \
        WHERE 1=1 AND role_id = @id@ \
        ) tb GROUP BY role_id;";
    sql = db.makeSQL(sql, { id: id });
    return rPool.query(sql);
};
exports.getMenuPower = getMenuPower;

/**
 * 获取菜单及其当前拥有的操作
 */
var getMenuOperations = function () {
    var sql = "SELECT tb.id,tb.text,tb.name,tb.enname,tb.pid,tb.type,tc.text keyss,tc.value\
              FROM (\
                     (\
                        SELECT module.seqno seqno,module.innerid id,module.modulekey `text`,module.modulename `name`,module.modulename_en `enname`,0 pid,'1' `type`\
		                 FROM sc_module module\
                        ORDER BY module.seqno ASC\
                     )\
                     UNION\
                     (\
                        SELECT menu.sortno seqno,menu.innerid id,menu.menukey `text`,menu.menuname `name`,menu.menuname_en `enname`,menu.moduleid pid,'2' `type`\
                        FROM sc_menu menu WHERE menu.isdisplay=1\
                        ORDER BY menu.sortno ASC\
                     )\
              ) tb\
              LEFT JOIN (\
                SELECT menuid pid,GROUP_CONCAT(CAST(btnid AS CHAR) ORDER BY btnvalue ASC) AS `text`,GROUP_CONCAT(CAST(btnvalue AS CHAR) ORDER BY btnvalue ASC) AS `value`\
                FROM sc_menuresource GROUP  BY menuid\
              ) tc ON tb.id=tc.pid  ORDER BY tb.seqno;";
    return rPool.query(sql);
};
exports.getMenuOperations = getMenuOperations;

/**
 * 角色新增与修改前 判断是否有重名角色
 */
var existsRole = function (rolename, innerid) {
    var sql = "select count(1) `count` from sc_role where `name` = @rolename@ ";
    if (innerid) {
        sql += " and innerid <> @innerid@ ";
    }
    sql = db.makeSQL(sql, { rolename: rolename, innerid: innerid });
    return rPool.query(sql);
}
exports.existsRole = existsRole;

/**
 * 新增角色
 * @param role 角色信息
 * @param callback 回调函数
 */
var addRole = function (role) {
    var sql = "insert into sc_role(innerid,name,type,createrid,createdtime) values\
    (uuid(),@name@,@type@,@createrid@,now());";
    sql = db.makeSQL(sql, role)
    return wPool.query(sql);
};
exports.addRole = addRole;

/*
* 更新角色信息
* */
var updateRole = function (role) {
    var sql = "update sc_role set name = @name@,type = @type@,modifierid = @modifierid@,\
    modifiedtime = now() where innerid = @innerid@;";
    sql = db.makeSQL(sql, role);
    return wPool.query(sql);
}
exports.updateRole = updateRole;

/**
 * 保存角色的权限
 * @param data 数据
 * @param callback 回调函数
 */
var saveRolePower = function (data, callback) {
    var sql = "CALL sp_insertPower(@roleid@,@staffid@,@menuid@\
    ,@menuvalue@,@dataid@,@datavalue@);";
    sql = db.makeSQL(sql, data);
    return wPool.query(sql);
};
exports.saveRolePower = saveRolePower;

/**
 * 根据id删除角色
 * @param id 角色id
 * @param callback 回调函数
 */
var delRole = function (id) {
    var sql = "CALL scsp_delrole(@id@);";
    sql = db.makeSQL(sql, { id: id })
    return wPool.query(sql);
};
exports.delRole = delRole;

/*
 * 根据角色对应的用户类型搜索
 * */
var getRoleByUserType = function (type) {
    var sql = "select * from sc_role where `type` = @type@";
    sql = db.makeSQL(sql, { type: type.toString() });
    return rPool.query(sql);
}
exports.getRoleByUserType = getRoleByUserType;