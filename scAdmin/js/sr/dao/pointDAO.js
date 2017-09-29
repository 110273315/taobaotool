/**
 * Created by Ryan on 2017/11/18.
 */

'use strict'
let sc = require('smartacjs'),
    app = sc.app(),
    db = sc.db(),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');

/*
 * 根据积分id,获取积分模版信息
 * */
exports.getPointInfo = function *(id, type) {
    let sql = "";
    if (type == 1) {
        sql = "select orgid,custid,addednum as point,currenttotalnum,ifnull(b.nickname,'a') as name,date_format(gettime,'%Y-%m-%d') as time from sr_point_receipt a  left join sr_cust_customer b on a.custid=b.id where a.id=@id@;";
    }
    else {
        sql = "select orgid,custid,disbursednum as point,currenttotalnum,ifnull(b.nickname,'a') as name,date_format(disbursedtime,'%Y-%m-%d') as time from sr_point_disburse a  left join sr_cust_customer b on a.custid=b.id where a.id=@id@;";
    }
    sql = db.makeSQL(sql,{id:id});
    return yield rPool.query(sql);
}