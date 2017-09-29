/**
 * Created by Ryan on 2016/07/06.
 * 客户数据库操作层
 */
'use strict';
let sc = require('smartacjs'),
    app = sc.app(),
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');

/*
 * 根据客户id,获取客户详细信息
 * */
exports.couponQuery = function* (data) {
    let sql = "select sum(used_by_point_count)+sum(used_by_other_count) as todayused,sum(send_count) as todaysent\
                from sr_report_coupon_proportion \
                where date_format(time,'%Y-%m-%d')=date_format(now(),'%Y-%m-%d');\
                select sum(used_by_point_count)+sum(used_by_other_count) as todayused,sum(send_count) as todaysent\
                from sr_report_coupon_proportion \
                where date_format(time,'%Y-%m-%d')=date_format(date_sub(now(),interval 1 day),'%Y-%m-%d');";
    let result = yield rPool.query(sql);
    return result;
};

exports.couponHistoryQuery = function* () {
    let sql = "select sum(used_by_point_count)+sum(used_by_other_count) as used,sum(send_count) as send,date_format(time,'%Y-%m-%d') as time\
                from sr_report_coupon_proportion \
                where date_format(time,'%Y-%m-%d')>=date_format(date_sub(now(),interval 7 day),'%Y-%m-%d') \
                group by date_format(time,'%Y-%m-%d')";
    let result = yield rPool.query(sql);
    return result;
};

exports.customerHistoryQuery = function* (data) {
    let sql = "select fans,menber,consumer,date_format(time,'%Y-%m-%d') as time\
                from sr_report_customer \
                where date_format(time,'%Y-%m-%d')>=date_format(date_sub(now(),interval 7 day),'%Y-%m-%d') \
                group by date_format(time,'%Y-%m-%d')";
    let result = yield rPool.query(sql);
    return result;
};

exports.customerQuery = function* (data) {
    let sql = "select menber\
                from sr_report_customer \
                where date_format(time,'%Y-%m-%d')=date_format(now(),'%Y-%m-%d');\
                select sum(fans) as totalfans, sum(menber) as totalmenber\
                from sr_report_customer;\
                select count as tradecount\
                from sr_report_trade \
                where date_format(time,'%Y-%m-%d')=date_format(now(),'%Y-%m-%d');";
    let result = yield rPool.query(sql);
    return result;
};

exports.tradeHistoryQuery = function* (data) {
    let sql = "select count,amount,date_format(time,'%Y-%m-%d') as time\
                from sr_report_trade \
                where date_format(time,'%Y-%m-%d')>=date_format(date_sub(now(),interval 7 day),'%Y-%m-%d') \
                group by date_format(time,'%Y-%m-%d')";
    let result = yield rPool.query(sql);
    return result;
};

exports.tradeQuery = function* (data) {
    let sql = "select amount\
                from sr_report_trade \
                where date_format(time,'%Y-%m-%d')=date_format(now(),'%Y-%m-%d');\
                select amount as yesterdayamount\
                from sr_report_trade \
                where date_format(time,'%Y-%m-%d')=date_format(date_sub(now(),interval 1 day),'%Y-%m-%d');\
                select sum(amount) as weekamount\
                from sr_report_trade \
                where YEARWEEK(date_format(time,'%Y-%m-%d'))= YEARWEEK(now());\
                select sum(amount) as monthamount\
                from sr_report_trade \
                where date_format(time,'%Y-%m')=date_format(now(),'%Y-%m');";
    let result = yield rPool.query(sql);
    return result;
};

exports.getCityAndCfAccount = function* () {
    let sql = "select keyvalue from sc_code where keyname='sr_bashboard_city';\
             SELECT innerid FROM cf_account where method_code=11 and enabled=1;";
    let result = yield rPool.query(sql);
    return result;

}