/**
 * Created by Ryan on 2016/07/06.
 * 数据库操作层
 */
'use strict';
let sc = require('smartacjs'),
    app = sc.app(),
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');
let log = sc.createNamedLog('scAdmin', 'customerDao');
let SCError = app.err.SCError;


exports.queryHomePage = function* (data) {
    let sql = "select * from app_homepage_template";
    let result = yield rPool.query(sql);
    if (result && result.length > 0 && result[0].html) {
        return JSON.parse(result[0].html);
    } else {
        return null;
    }
};

exports.editHomePage = function* (data) {
    var sql = " update app_homepage_template set html=@html@";
    sql = db.makeSQL(sql, { html: JSON.stringify(data) });
    let result = yield wPool.query(sql);
    return result;
}


exports.getHomePagePicList = function* (data) {
    let sql = "select uuid from app_homepage_pic";
    let result = yield rPool.query(sql);
    if (result && result.length > 0 ) {
        return result;
    } else {
        return [];
    }
};

exports.addHomePagePic = function* (data) {
    var sql = " insert into app_homepage_pic value(null,@uuid@)";
    sql = db.makeSQL(sql, data);
    let result = yield wPool.query(sql);
    return result;
}
