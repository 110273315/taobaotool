/**
 * Created by Kyler on 2016/2/25 0025.
 */
'use strict';
var sc = require('smartacjs');
var app = sc.app();
let db = sc.db();
let wconn = app.res.getWPoolSync('sc');
let rconn = app.res.getRPoolSync('sc');
let comm = require('../../common/comm.js');


/*
 *  卡券结算方列表
 * */
var CouponSettlementList = function* (condition, sort, page,querytype) {
    var sqlWhere = '';
    let _sortAndPage,sql,_tableName;
    if (condition) {
        if (condition.settlementid) {
            sqlWhere += " and srcs.shop_id = '" + condition.settlementid +"'";
        }
        if (condition.settlecouponid) {
            sqlWhere += " and sct.id = '" + condition.settlecouponid+"'";
        }
        if (condition.starttime) {
            sqlWhere += " and srcs.time>='" + condition.starttime+"'";
        }
        if (condition.endtime) {
            sqlWhere += " and srcs.time<='" + condition.endtime+"'";
        }
    }
    _sortAndPage = comm.sortAndPage(sort, page);

    _tableName = "sr_report_coupon_settlement srcs  LEFT JOIN sr_coupon_template sct ON sct.id = srcs.coupon_temp_id  LEFT JOIN sc_shop ss ON srcs.shop_id = ss.innerid  " +
        "LEFT JOIN (SELECT srcs2.shop_id AS ashopid, srcs2.coupon_temp_id as acouponid,sum(srcs2.settlement_value) AS asettlement FROM sr_report_coupon_settlement srcs2 " +
        "GROUP BY srcs2.shop_id,srcs2.coupon_temp_id) srcs3 on srcs3.ashopid!=srcs.shop_id AND srcs3.acouponid=srcs.coupon_temp_id where 1=1 "+sqlWhere;
    if(querytype == 'count'){
        sql  = "select count(1) as count from " + _tableName +";";
        return yield rconn.query(sql);
    }else if(querytype == 'main'){
        sql = "SELECT srcs.id,srcs.shop_id AS shopid,srcs.coupon_temp_id AS coupontempid,ss.`name` AS shopname,sct.`name` AS templetename,sum(srcs.settlement_value) AS settlement,IFNULL(SUM(srcs3.asettlement),0) as bsettlement" +
            " FROM "+ _tableName +" GROUP BY srcs.settlement_account_id,srcs.shop_id,srcs.coupon_temp_id " +_sortAndPage.sort + _sortAndPage.page + ";";
        return yield rconn.query(sql);
    }else if(querytype == 'export'){
        sql = "SELECT ss.`name` AS '店铺名称',sct.`name` AS '礼券名称',sum(srcs.settlement_value) AS '本店结算汇总',IFNULL(SUM(srcs3.asettlement),0) as '他方结算汇总'" +
            " FROM "+ _tableName +" GROUP BY srcs.settlement_account_id,srcs.shop_id,srcs.coupon_temp_id  ORDER BY srcs.createdtime DESC;";
        var exportsql= "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(7,1,now(),'todo')";
        let result = yield wconn.query(exportsql);
        return { result: result, sql: sql };
    }


    //执行SQL

}
exports.couponSettlementList = CouponSettlementList;

/**
 * 获取导出结算明细sql
 */
var getSettlementExportSql = function* (condition) {

    var _sql;
    _sql = "SELECT srcs.id,sct.`name` AS '礼券名称',CASE WHEN sct.category_code = 1 THEN '折扣券' WHEN sct.category_code = 2 THEN '抵扣券' " +
        "WHEN sct.category_code = 3 THEN '商品券' END AS '礼券类型',CASE WHEN sct.settlement_type_code = 1 THEN '比率' WHEN " +
        "sct.settlement_type_code = 2 THEN '面额' END AS '结算类型',sci.`no` AS '礼券编号',sci.used_time AS '核销时间'," +
        "(IFNULL(settle2.settlementvalue1,0) + IFNULL(settle3.settlementvalue2,0) + IFNULL(settle4.settlementvalue3,0)) as '实际优惠金额'," +
        "settle2.settlemenname1 AS '本结算方',settle2.settlementvalue1 AS '本结算方金额(元)',settle3.settlemenname2 AS '结算方2'," +
        "settle3.settlementvalue2 AS '结算方2金额(元)',settle4.settlemenname3 AS '结算方3',settle4.settlementvalue3 AS '结算方3金额(元)' " +
        "FROM sr_report_coupon_settlement srcs LEFT JOIN sr_coupon_template sct ON sct.id = srcs.coupon_temp_id LEFT JOIN sr_coupon_settlement " +
        "scs ON scs.settlement_account_id = srcs.settlement_account_id LEFT JOIN sr_coupon_instance sci ON sci.id = scs.coupon_instance_id " +
        "LEFT JOIN (SELECT cpsa.`name` AS settlemenname1,srcs1.coupon_temp_id AS couponid1,srcs1.settlement_account_id AS settlementid1," +
        "srcs1.settlement_value AS settlementvalue1 FROM sr_report_coupon_settlement srcs1 LEFT JOIN cf_pay_settlement_account cpsa ON " +
        "srcs1.settlement_account_id = cpsa.innerid WHERE srcs1.shop_id = @shopid@ AND srcs1.coupon_temp_id = @coupontempid@) " +
        "settle2 ON settle2.couponid1 = srcs.coupon_temp_id LEFT JOIN (SELECT cpsa2.`name` AS settlemenname2,srcs2.id AS id2," +
        "srcs2.coupon_temp_id AS couponid2,srcs2.settlement_account_id AS settlementid2,srcs2.settlement_value AS settlementvalue2 " +
        "FROM sr_report_coupon_settlement srcs2 LEFT JOIN cf_pay_settlement_account cpsa2 ON srcs2.settlement_account_id = cpsa2.innerid " +
        "WHERE srcs2.shop_id != @shopid@ AND srcs2.coupon_temp_id = @coupontempid@) settle3 ON settle3.couponid2 = srcs.coupon_temp_id " +
        "LEFT JOIN (SELECT cpsa3.`name` AS settlemenname3,srcs3.id AS id3,srcs3.coupon_temp_id AS couponid3,srcs3.settlement_account_id AS settlementid3," +
        "srcs3.settlement_value AS settlementvalue3 FROM sr_report_coupon_settlement srcs3 LEFT JOIN cf_pay_settlement_account cpsa3 ON " +
        "srcs3.settlement_account_id = cpsa3.innerid WHERE srcs3.shop_id != @shopid@ AND srcs3.coupon_temp_id = @coupontempid@) " +
        "settle4 ON settle4.id3 != settle3.id2 WHERE srcs.coupon_temp_id = @coupontempid@ AND srcs.shop_id = @shopid@";
    _sql = db.makeSQL(_sql,condition)
    var exportsql= "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(6,1,now(),'todo')";
    let result = yield wconn.query(exportsql);
    return { result: result, sql: _sql };
}
exports.getSettlementExportSql = getSettlementExportSql;

/*
 *  积分商城兑换占比
 * */
var pointcouponexchange = function* (condition) {
    var sqlWhere = 'where 1=1';
    if (condition) {
        if (condition.start_time) {
            sqlWhere += " and time>='" + condition.start_time+" 00:00:00'";
        }
        if (condition.end_time) {
            sqlWhere += " and time<='" + condition.end_time+" 23:59:59'";
        }
    }
    let sql = "SELECT srcp.coupon_name AS couponname,srcp.sumcount AS couponcount,FORMAT((100 * (srcp.sumcount / srcp1.count)),0) AS rate " +
        "FROM (SELECT sum(used_by_point_count) AS count FROM sr_report_coupon_proportion "+sqlWhere+" ) srcp1," +
        "(SELECT coupon_temp_id,coupon_name,time,SUM(used_by_point_count) as sumcount from sr_report_coupon_proportion "+sqlWhere+" GROUP BY coupon_temp_id ORDER BY sumcount desc) srcp LIMIT 0,9 " +
        "UNION ALL SELECT '其它' AS couponname,IFNULL(srcp1.count,0) - IFNULL(sum(srcp.sumcount),0) AS couponcount," +
        "FORMAT((100 * ((srcp1.count - sum(srcp.sumcount)) / srcp1.count)),0) AS rate FROM " +
        "(SELECT sum(used_by_point_count) AS count FROM sr_report_coupon_proportion "+sqlWhere+" ) srcp1, " +
        "(SELECT coupon_temp_id,coupon_name,time,SUM(used_by_point_count) as sumcount from sr_report_coupon_proportion "+sqlWhere+" GROUP BY coupon_temp_id ORDER BY sumcount desc LIMIT 0,9) srcp"
    //执行SQL
    return yield rconn.query(sql);
}
exports.pointcouponexchange = pointcouponexchange;

/*
 *  非积分商城核销占比
 * */
var othercouponexchange = function* (condition) {
    var sqlWhere = 'where 1=1';
    if (condition) {
        if (condition.start_time) {
            sqlWhere += " and time>='" + condition.start_time+" 00:00:00'";
        }
        if (condition.end_time) {
            sqlWhere += " and time<='" + condition.end_time+" 23:59:59'";
        }
    }
    let sql = "SELECT srcp.coupon_name AS couponname,srcp.sumcount AS couponcount,FORMAT((100 * (srcp.sumcount / srcp1.count)),0) AS rate " +
        "FROM (SELECT sum(used_by_other_count) AS count FROM sr_report_coupon_proportion "+sqlWhere+" ) srcp1," +
        "(SELECT coupon_temp_id,coupon_name,time,SUM(used_by_other_count) as sumcount from sr_report_coupon_proportion "+sqlWhere+" GROUP BY coupon_temp_id ORDER BY sumcount desc) srcp LIMIT 0,9 " +
        "UNION ALL SELECT '其它' AS couponname,IFNULL(srcp1.count,0) - IFNULL(sum(srcp.sumcount),0) AS couponcount," +
        "FORMAT((100 * ((srcp1.count - sum(srcp.sumcount)) / srcp1.count)),0) AS rate FROM " +
        "(SELECT sum(used_by_other_count) AS count FROM sr_report_coupon_proportion "+sqlWhere+" ) srcp1, " +
        "(SELECT coupon_temp_id,coupon_name,time,SUM(used_by_other_count) as sumcount from sr_report_coupon_proportion "+sqlWhere+" GROUP BY coupon_temp_id ORDER BY sumcount desc LIMIT 0,9) srcp"
    //执行SQL
    return yield rconn.query(sql);
}
exports.othercouponexchange = othercouponexchange;


/*
 *  礼券领取核销比
 * */
var couponusesend = function* (condition) {
    var sqlWhere = 'where 1=1';
    if (condition) {
        if (condition.start_time) {
            sqlWhere += " and time>='" + condition.start_time+" 00:00:00'";
        }
        if (condition.end_time) {
            sqlWhere += " and time<='" + condition.end_time+" 23:59:59'";
        }
    }
    let sql = "SELECT coupon_name,SUM(send_count) as sendcount,SUM((used_by_other_count+used_by_point_count)) AS usecount," +
        "CAST(FORMAT((100 * ( SUM((used_by_other_count+used_by_point_count)) / SUM(send_count))),0) AS SIGNED) AS rate " +
        "FROM sr_report_coupon_proportion "+sqlWhere+" GROUP BY coupon_name ORDER BY rate desc LIMIT 0,10";
    //执行SQL
    return yield rconn.query(sql);
}
exports.couponusesend = couponusesend;


/*
 * 获取卡券列表
 * */
var getCouponList =function* (){
    var sql = "SELECT id,name FROM sr_coupon_template WHERE is_enabled=1 order by id desc;";
    //执行SQL
    return yield rconn.query(sql);
}

exports.getCouponList=getCouponList;
















///*
// * 标签数量
// * */
//var CouponSettlementCount = function (condition) {
//    var sqlWhere = '';
//    if (condition) {
//        if (condition.couponid) {
//            sqlWhere += " and couponid= " + condition.couponid ;
//        }
//        if (condition.settlementid) {
//            sqlWhere += " and settlementid='" + condition.settlementid+"'";
//        }
//    }
//    var sql = "select count(id) as TotalCount from  sr_report_coupon_settlement where 1=1 " + sqlWhere + ";";
//
//    //执行SQL
//    return _dao(function () {
//        return this.conn.query(sql, null);
//    });
//}
//exports.getCouponSettlementCount = CouponSettlementCount;
//
//
//var CouponSettlementReportSQL = function (condition,  callback) {
//    var sqlWhere = '';
//    if (condition) {
//        if (condition.couponid) {
//            sqlWhere += " and couponid= " + condition.couponid ;
//        }
//        if (condition.settlementid) {
//            sqlWhere += " and settlementid='" + condition.settlementid+"'";
//        }
//    }
//    var sql = "  SELECT name as '礼券名称',limitvalue as '限制金额',maxdiscountamount as '最大优惠金额',  couponcategory  as '礼券类型',  couponvalue as '礼券面值/折扣', " +
//        " settlementname as '结算方', settlementvalue as '结算金额/比率' " +
//        "FROM sr_report_coupon_settlement where 1=1 " + sqlWhere +";";
//
//    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(8,1,now(),'" + condition.userid + "')";
//
//    return _dao(function () {
//        this.conn.query(exportsql)
//            .then(function (result) {
//                callback(null, result, sql);
//            })
//            .catch(function (err) {
//                callback(err, null);
//            })
//    })
//}
//exports.CouponSettlementReportSQL=CouponSettlementReportSQL;
//
///*
//* 获取卡券列表
//* */
//var getCouponList =function(condition){
//    var sqlWhere = '';
//
//    //_sortAndPage = comm.sortAndPage(sort, page);
//    var sql = "SELECT id,name FROM sr_rewards_coupon WHERE isenabled=1 order by id desc;";
//
//    //执行SQL
//    return _dao(function () {
//        return this.conn.query(sql, null);
//    });
//}
//
//exports.getCouponList=getCouponList;
//
//var getSettlementCouponList =function(condition){
//    var sqlWhere = '';
//
//    //_sortAndPage = comm.sortAndPage(sort, page);
//    var sql = "SELECT DISTINCT couponid AS id,name FROM sr_report_coupon_settlement order by id desc;";
//
//    //执行SQL
//    return _dao(function () {
//        return this.conn.query(sql, null);
//    });
//}
//
//exports.getSettlementCouponList=getSettlementCouponList;
//
///*
//* 获取结算方
//* */
//var getsettlementList=function(condition){
//    var sql = "SELECT innerid,name FROM cf_pay_settlement_account;";
//
//    //执行SQL
//    return _dao(function () {
//        return this.conn.query(sql, null);
//    });
//}
//
//exports.getsettlementList=getsettlementList;
//
///*
// *  卡券兑换报表
// * */
//var CouponExchangeList = function (condition, sort, page) {
//    var sqlWhere = '';
//    if (condition) {
//        if (condition.couponid) {
//            sqlWhere += " and couponid= " + condition.couponid ;
//        }
//        if (condition.categorycode) {
//            sqlWhere += " and categorycode=" + condition.categorycode;
//        }
//
//        if(condition.starttime){
//            sqlWhere +=" and exchangedate >='" + condition.starttime+"'";
//        }
//
//        if(condition.endtime){
//            sqlWhere +=" and DATE_ADD(exchangedate,INTERVAL -1 DAY) <'" + condition.endtime+"'";
//        }
//    }
//    _sortAndPage = comm.sortAndPage(sort, page);
//    var sql = "SELECT name, point, sum(exchangenum) AS exchangenum, sum(sumpoint) AS sumpoint,createdtime " +
//        "FROM sr_report_coupon_exchange where 1=1 " + sqlWhere +" GROUP BY name "+ _sortAndPage.sort + _sortAndPage.page + "    ;" +
//        "SELECT createdtime FROM sr_report_coupon_exchange ORDER BY createdtime DESC LIMIT 1; ";
//
//    //执行SQL
//    return _dao(function () {
//        return this.conn.query(sql, null);
//    });
//}
//exports.getCouponExchangeList = CouponExchangeList;
//
///*
//* 卡券兑换数量
//* */
//var CouponExchangeCount = function(condition){
//    var sqlWhere = '';
//    if (condition) {
//        if (condition.couponid) {
//            sqlWhere += " and couponid= " + condition.couponid ;
//        }
//        if (condition.categorycode) {
//            sqlWhere += " and categorycode=" + condition.categorycode;
//        }
//
//        if(condition.starttime){
//            sqlWhere +=" and exchangedate >='" + condition.starttime+"'";
//        }
//
//        if(condition.endtime){
//            sqlWhere +=" and DATE_ADD(exchangedate,INTERVAL -1 DAY) <'" + condition.endtime+"'";
//        }
//    }
//    var sql = "SELECT count(0) AS TotalCount FROM (SELECT name FROM sr_report_coupon_exchange  WHERE 1=1 "+sqlWhere+" GROUP BY name) t;"
//
//    //执行SQL
//    return _dao(function () {
//        return this.conn.query(sql, null);
//    });
//}
//exports.getCouponExchangeCount=CouponExchangeCount;
//
///*
//* 卡券兑换报表导出
//* */
//var CouponExchangeReportSQL = function (condition,  callback) {
//    var sqlWhere = '';
//    if (condition) {
//        if (condition.couponid) {
//            sqlWhere += " and couponid= " + condition.couponid ;
//        }
//        if (condition.categorycode) {
//            sqlWhere += " and categorycode=" + condition.categorycode;
//        }
//
//        if(condition.starttime){
//            sqlWhere +=" and exchangedate >='" + condition.starttime+"'";
//        }
//
//        if(condition.endtime){
//            sqlWhere +=" and DATE_ADD(exchangedate,INTERVAL -1 DAY) <'" + condition.endtime+"'";
//        }
//    }
//
//    var sql = " SELECT name as '礼券名称', point as '兑换所需的积分数量', sum(exchangenum) as '已兑换数量', " +
//        "sum(sumpoint) as '已兑换积分' " +
//        "FROM sr_report_coupon_exchange where 1=1 " + sqlWhere +"  GROUP BY name ;";
//
//    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(9,1,now(),'" + condition.userid + "')";
//
//    return _dao(function () {
//        this.conn.query(exportsql)
//            .then(function (result) {
//                callback(null, result, sql);
//            })
//            .catch(function (err) {
//                callback(err, null);
//            })
//    })
//}
//exports.CouponExchangeReportSQL=CouponExchangeReportSQL;
//
//
///*
// *  卡券兑换明细报表
// * */
//var CouponExchangedetailList = function (condition, sort, page) {
//    var sqlWhere = '';
//    if (condition) {
//        if (condition.couponid) {
//            sqlWhere += " and couponid= " + condition.couponid ;
//        }
//        if(condition.cardno)
//        {
//            sqlWhere +=" and cardno like '%" + condition.cardno +"%'";
//        }
//
//        if(condition.levelno)
//        {
//            sqlWhere +=" and levelno=" + condition.levelno;
//        }
//        if (condition.categorycode) {
//            sqlWhere += " and categorycode=" + condition.categorycode;
//        }
//
//        if(condition.starttime){
//            sqlWhere +=" and exchangedate >='" + condition.starttime+"'";
//        }
//
//        if(condition.endtime){
//            sqlWhere +=" and DATE_ADD(exchangedate,INTERVAL -1 DAY) <'" + condition.endtime+"'";
//        }
//
//        if(condition.mobile)
//        {
//            sqlWhere +=" and mobile like '%" + condition.mobile + "%'";
//        }
//    }
//    _sortAndPage = comm.sortAndPage(sort, page);
//    var sql = "SELECT no,name,fullname, cardno, mobile, idnum, date_format(exchangedate,'%Y-%m-%d') AS exchangedate,createdtime " +
//        " FROM sr_report_coupon_exchange_detail where 1=1 " + sqlWhere + " " +_sortAndPage.sort + _sortAndPage.page + "    ; ";
//
//    //执行SQL
//    return _dao(function () {
//        return this.conn.query(sql, null);
//    });
//}
//exports.getCouponExchangedetailList = CouponExchangedetailList;
//
///*
// * 卡券兑换明细数量
// * */
//var CouponExchangedetailCount = function(condition){
//    var sqlWhere = '';
//    if (condition) {
//        if (condition.couponid) {
//            sqlWhere += " and couponid= " + condition.couponid ;
//        }
//        if(condition.cardno)
//        {
//            sqlWhere +=" and cardno like '%" + condition.cardno +"%'";
//        }
//
//        if(condition.levelno)
//        {
//            sqlWhere +=" and levelno=" + condition.levelno;
//        }
//        if (condition.categorycode) {
//            sqlWhere += " and categorycode=" + condition.categorycode;
//        }
//
//        if(condition.starttime){
//            sqlWhere +=" and exchangedate >='" + condition.starttime+"'";
//        }
//
//        if(condition.endtime){
//            sqlWhere +=" and DATE_ADD(exchangedate,INTERVAL -1 DAY) <'" + condition.endtime+"'";
//        }
//
//        if(condition.mobile)
//        {
//            sqlWhere +=" and mobile like '%" + condition.mobile + "%'";
//        }
//    }
//    var sql = "SELECT count(no) AS TotalCount FROM sr_report_coupon_exchange_detail  WHERE 1=1 "+sqlWhere +";"
//
//    //执行SQL
//    return _dao(function () {
//        return this.conn.query(sql, null);
//    });
//}
//exports.getCouponExchangedetailCount=CouponExchangedetailCount;
//
///*
// * 卡券兑换明细报表导出
// * */
//var CouponExchangedetailReportSQL = function (condition,  callback) {
//    var sqlWhere = '';
//    if (condition) {
//        if (condition.couponid) {
//            sqlWhere += " and couponid= " + condition.couponid ;
//        }
//        if(condition.cardno)
//        {
//            sqlWhere +=" and cardno like '%" + condition.cardno +"%'";
//        }
//
//        if(condition.levelno)
//        {
//            sqlWhere +=" and levelno=" + condition.levelno;
//        }
//        if (condition.categorycode) {
//            sqlWhere += " and categorycode=" + condition.categorycode;
//        }
//
//        if(condition.starttime){
//            sqlWhere +=" and exchangedate >='" + condition.starttime+"'";
//        }
//
//        if(condition.endtime){
//            sqlWhere +=" and DATE_ADD(exchangedate,INTERVAL -1 DAY) <'" + condition.endtime+"'";
//        }
//
//        if(condition.mobile)
//        {
//            sqlWhere +=" and mobile like '%" + condition.mobile + "%'";
//        }
//    }
//
//    var sql = " SELECT no as '礼券编号',name as '礼券名称',fullname as '客户名称', cardno as '会员卡号', mobile as '手机号码', idnum as '证件号码', date_format(exchangedate,'%Y-%m-%d') as '兑换日期' " +
//        " FROM sr_report_coupon_exchange_detail where 1=1 " + sqlWhere +";";
//
//    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(10,1,now(),'" + condition.userid + "')";
//
//    return _dao(function () {
//        this.conn.query(exportsql)
//            .then(function (result) {
//                callback(null, result, sql);
//            })
//            .catch(function (err) {
//                callback(err, null);
//            })
//    })
//}
//exports.CouponExchangedetailReportSQL=CouponExchangedetailReportSQL;