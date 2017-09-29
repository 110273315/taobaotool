/**
 * Created by lucas.zong on 2015/12/21.
 */

'use strict'
let sc = require('smartacjs'),
    app = sc.app(),
    _ = sc._,
    Promise = sc.Promise,
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');



function* queryAccount(accountid) {

    var sql = "SELECT `name` FROM cf_account WHERE  innerid='" + accountid + "'";
    //执行SQL;
    return yield rPool.query(sql);
};
exports.queryAccount = queryAccount;

function* queryByid(id) {

    var sql = "SELECT * FROM sc_qrcode WHERE  id='" + id + "'";
    //执行SQL;
    return yield rPool.query(sql);
};
exports.queryByid = queryByid;

exports.queryQrcode = function* (condition, istotal, sort, page) {
    let sql, _condition = "", _sortAndPage;
    if (condition) {
        if (condition.scenes_name) {
            _condition = _condition + " AND scenes_name='" + condition.scenes_name + "'";
        }
        if (condition.typecode) {
            if (condition.typecode == 0) {
                _condition = _condition + " AND expire_seconds= 0 ";
            }
            if (condition.typecode == 1) {
                _condition = _condition + " AND expire_seconds!= 0 ";
            }
        }
        if (condition.accountid) {
            _condition = _condition + " AND account_id='" + condition.accountid + "'";
        }
    }
    sort = { column: "createdtime", type: "DESC" }
    _sortAndPage = comm.sortAndPage(sort, page);
    if (istotal) {
        sql = "SELECT COUNT(1) AS `count` \
               FROM sc_qrcode \
        WHERE 1 = 1 " + _condition + ";";
    } else {
        sql = "select *  FROM sc_qrcode \
        WHERE 1=1 " + _condition + " ORDER BY " + sort.column + ' ' + sort.type + ",id asc" + _sortAndPage.page + ";";
    }
    let result = yield rPool.query(sql);
    return result;
}

exports.checkQrcodeDuplicate = function* (data) {
    let sql = "select count(1) as count from sc_qrcode where scenes_id=@scenes_id@ and id<>@id@";
    sql = db.makeSQL(sql, data);
    let result = yield rPool.query(sql);
    return (result && result.length > 0 && result[0].count > 0);
}

exports.updateQrcode = function* (data) {
    let sql = ""
    if (!data.id) {
        sql = "insert into sc_qrcode \
    (id,url,scenes_id,scenes_name,expire_seconds,account_id,createrid,createdtime,ticket_url)\
    values(null,@url@,@scenes_id@,@scenes_name@,@expire_seconds@,@account_id@,@createrid@,NOW(),@ticket_url@);";

        //执行SQL;
    }
    else {
        sql = "update sc_qrcode \
    set url=@url@,scenes_id=@scenes_id@,scenes_name=@scenes_name@,expire_seconds=@expire_seconds@,\
    account_id=@account_id@,ticket_url=@ticket_url@ where id=@id@" ;
        //执行SQL;
    }
    sql = db.makeSQL(sql, data)
    let result = yield rPool.query(sql);
    return result;
};

var deleteQrcode = function* (data) {
    let delSql = "DELETE FROM  sc_qrcode where id='" + data.id + "';";
    return yield wPool.query(delSql);
};
exports.deleteQrcode = deleteQrcode;



