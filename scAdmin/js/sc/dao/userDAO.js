'use strict'
let sc = require('smartacjs'),
    app = sc.app(),
    _ = sc._,
    Promise = sc.Promise,
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');

/*
* 用户登陆
* */
let login = function* (user,pwd) {
    let _sql = db.makeSQL("SELECT `innerid`,`type`,`bindid`,`role_id`,`userid`,`name`,`language`,`profile_photo`,`birthday`,`position`,`mobile`,`gender`,`email`,`qq`,`weibo`,`wechat`,\
         `facebook`,`remark` FROM sc_user WHERE isdeleted = '0' AND userid = @user@ AND `password` = @pwd@;",{user:user,pwd:pwd});
    let result = yield rPool.query(_sql);
    return result;
}
exports.login = login;

/*
* 用户权限（登录的同时取出）
* */
let limit = function* (user,pwd) {
    let _sql = db.makeSQL("SELECT menu.innerid,menu.menukey,module.modulekey,role.permission \
        FROM sc_role_define role LEFT JOIN sc_menu menu ON role.menu_key = menu.menukey \
        LEFT JOIN sc_module module ON menu.moduleid = module.innerid \
        WHERE role.role_id = (SELECT role_id FROM sc_user WHERE userid = @user@ AND PASSWORD = @pwd@ AND isdeleted = 0 LIMIT 1) \
        AND menu.isdisplay = 1 ORDER BY permission DESC",{user:user,pwd:pwd});
    let result = yield rPool.query(_sql);
    return result;
}
exports.limit = limit;
