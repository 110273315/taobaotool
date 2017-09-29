/**
 * Created by Ryan on 2015/12/23.
 */

'use strict'
var sc = require('smartacjs'),
    app = sc.app(),
    _ = sc._,
    Promise = sc.Promise,
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');



/*
 * 交易明细列表Dao
 * @param condition
 * add  by snow on 2016/3/30
 * */
exports.queryTradeList = function* (condition) {
    let sql = "";
    if (condition.querytype == "main") {
        sql = "SELECT t.tradeno ,c.`fullname`,cc.cardno,o.`name` AS orgname,s.no,s.`name`,  t.`tradetime`,t.`tradeamount` ,concat('TradeType_',t.typeid) as typeid,isback" +
            "  ,t.custid, user.name as creatername FROM  sr_cust_trade t LEFT JOIN sr_cust_customer c ON t.custid=c.id " +
            "  LEFT JOIN sr_cust_card cc ON c.id=cc.custid and cc.statuscode=1" +
            " LEFT JOIN sc_shop s ON t.shopid=s.innerid  " +
            " LEFT JOIN sc_org o ON s.orgid=o.innerid " +
            " LEFT JOIN sc_user user ON user.innerid=t.createrid "+
            " where 1=1";
    }
    else {
        sql = "select count(1) as totalcount  " +
            "  FROM  sr_cust_trade t LEFT JOIN sr_cust_customer c ON t.custid=c.id " +
            "  LEFT JOIN sr_cust_card cc ON c.id=cc.custid and cc.statuscode=1" +
            " LEFT JOIN sc_shop s ON t.shopid=s.innerid  " +
            " LEFT JOIN sc_org o ON s.orgid=o.innerid " +
            " where 1=1 ";
    }


    if (condition.where) {
        //会员名
        if (condition.where.custname) {
            sql += " and c.fullname like concat('%',@custname@,'%')";
        }
        if (condition.where.custcardno) {
            sql += " and cc.cardno like concat('%',@custcardno@,'%')";
        }
        if (condition.where.mobile) {
            sql += " and c.mobile like concat('%',@mobile@,'%')";
        }

        if (condition.where.custid) {
            sql += " and c.id =@custid@";
        }

        if (condition.where.shopid) {
            sql += " and t.shopid =@shopid@";
        }

        //门店
        if (condition.where.orgid) {
            sql += " and s.orgid =@orgid@";
        }
        else if (condition.where.orgids) {
            sql += " and s.orgid in ('" + condition.where.orgids.join(',').replace(/,/g, "\',\'") + "')";
        }
        //交易号
        if (condition.where.tradeno) {
            sql += " and t.tradeno like concat('%',@tradeno@,'%' )";
        }
        //消费金额(begin)
        if (condition.where.tradeamountmin) {
            sql += " and t.`tradeamount`>=@tradeamountmin@";
        }
        //消费金额(end)
        if (condition.where.tradeamountmax) {
            sql += " and t.`tradeamount`<=@tradeamountmax@";
        }

        //交易时间（begin）
        if (condition.where.tradebegindate) {
            condition.where.tradebegindate += " 00:00:00";
            sql += " and t.tradetime>=@tradebegindate@";

        }
        //交易时间（end）
        if (condition.where.tradeenddate) {
            condition.where.tradeenddate += " 23:59:59";
            sql += " and t.tradetime<=@tradeenddate@";

        }
    }
    if (condition.querytype == "main") {
        let _sortAndPage = comm.sortAndPage(condition.order, condition.page);
        sql += " " + _sortAndPage.sort + " " + _sortAndPage.page;
    }
    sql = db.makeSQL(sql, condition.where)
    let result = yield rPool.query(sql);
    return result;
};


exports.getExportSql = function* (condition) {
    var sql = "SELECT t.tradeno  as 交易号,c.`fullname` as 姓名,cc.cardno as 卡号,o.`name` AS 门店名,s.no as 店铺编号,s.`name` as 店铺名, date_format( t.`tradetime`,'%Y-%m-%d %T')  as 交易时间,t.`tradeamount` as 交易额, case when typeid=1 then '交易' when typeid=2 then '退货' end as 交易类型,user.name as 操作人  " +
        "  FROM  sr_cust_trade t LEFT JOIN sr_cust_customer c ON t.custid=c.id " +
        "  LEFT JOIN sr_cust_card cc ON c.id=cc.custid and cc.statuscode=1" +
        " LEFT JOIN sc_shop s ON t.shopid=s.innerid  " +
        " LEFT JOIN sc_org o ON s.orgid=o.innerid " +
        " LEFT JOIN sc_user user ON user.innerid=t.createrid "+
        " where 1=1";


    if (condition.where) {
        //会员名
        if (condition.where.custname) {
            sql += " and (c.fullname like '%" + condition.where.custname + "%' )";
        }
        if (condition.where.custcardno) {
            sql += " and (cc.cardno like '%" + condition.where.custcardno + "%')";
        }
        if (condition.where.mobile) {
            sql += " and (c.mobile like '%" + condition.where.mobile + "%')";
        }

        //门店
        if (condition.where.orgid) {
            sql += " and s.orgid ='" + condition.where.orgid + "'";
        }
        else if (condition.where.orgids) {
            sql += " and s.orgid in ('" + condition.where.orgids.join(',').replace(/,/g, "\',\'") + "')";
        }
        //交易号
        if (condition.where.tradeno) {
            sql += " and (t.tradeno like '%" + condition.where.tradeno + "%' )";
        }
        //消费金额(begin)
        if (condition.where.tradeamountmin) {
            sql += " and t.`tradeamount`>=" + condition.where.tradeamountmin;
        }
        //消费金额(end)
        if (condition.where.tradeamountmax) {
            sql += " and t.`tradeamount`<=" + condition.where.tradeamountmax;
        }

        //交易时间（begin）
        if (condition.where.tradebegindate) {
            sql += " and t.tradetime>='" + condition.where.tradebegindate + " 00:00:00' ";

        }
        //交易时间（end）
        if (condition.where.tradeenddate) {
            sql += " and t.tradetime<='" + condition.where.tradeenddate + " 23:59:59' ";

        }


    }
    sql += " order by tradetime desc";

    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(13,1,now(),'" + condition.where.userid + "')";
    let result = yield rPool.query(exportsql);
    let res = { sql: sql, insertId: result.insertId };
    return res;
}


exports.tradeHistoryChart = function* (query) {
    var sql = 'select DATE_FORMAT(tradetime,"%Y-%m-%d") time,sum(tradeamount) count from sr_cust_trade where custid =@custid@ and date_sub(curdate(), INTERVAL 7 DAY) <= date(tradetime) GROUP BY DATE_FORMAT(tradetime, "%Y-%m-%d")';
    sql = db.makeSQL(sql, query)
    let result = yield rPool.query(sql);
    return result;
}

exports.queryTradeTotalReport = function* (query) {
    console.error(JSON.stringify(query));
    var sql = "select concat('cardlevel_',cardtype) as cardtype,sum(totalamount) as totalamount from sr_report_cardtrade where  1=1 ";
    if (query.where) {
        if (query.where.cardtype) {
            sql += " and cardtype=@cardtype@";
        }
        if (query.where.begintime) {
            sql += " and sectiondate>=@begintime@";
        }
        if (query.where.endtime) {
            sql += " and sectiondate>=@endtime@";
        }
    }

    sql += " group by cardtype;  SELECT createdtime FROM sr_report_cardtrade ORDER BY createdtime DESC LIMIT 1; ";
    sql = db.makeSQL(sql, query.where)
    let result = yield rPool.query(sql);
    return result;
};

exports.exportTradeTotal = function (query, callback) {
    console.error(JSON.stringify(query));
    var sql = "    select card.keyvalue as 会员卡级别,sum(totalamount) as 总金额 from sr_report_cardtrade t1    left join sc_code   card on card.keycode=t1.cardtype and card.keyname like 'cardlevel_%' where 1=1";
    if (query.where) {
        if (query.where.cardtype) {
            sql += " and cardtype=" + query.where.cardtype;
        }
        if (query.where.begintime) {
            sql += " and sectiondate>='" + query.where.begintime + "'";
        }
        if (query.where.endtime) {
            sql += " and sectiondate>='" + query.where.endtime + "'";
        }
    }
    sql += " group by cardtype";
    console.error("sql==" + sql);
    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(4,1,now(),'" + query.userid + "')";
    return _dao(function () {
        this.conn.query(exportsql)
            .then(function (result) {
                callback(null, result, sql);
            })
            .catch(function (err) {
                callback(err, null, null);
            })
    })

};

exports.exportTradeDetail = function (query, callback) {
    var sp = "select t3.cardno as 会员卡号,t2.fullname as 会员名称,gender.keyvalue as 性别 , levelno.keyvalue as 卡类型,t2.mobile as 电话,count(1) as 交易次数,sum(t1.tradeamount) as 交易总额,sum(t4.pointnum) as 积分数" +
        " from sr_cust_trade t1" +
        " left join sr_cust_customer t2 on t1.custid=t2.id" +
        " left join sc_code gender on t2.gendercode=gender.keycode and gender.keyname like 'gender_%'" +
        " left join sr_cust_card t3 on t1.custid=t3.custid and t3.statuscode=1   left join (select sum(pointnum) as pointnum,r.tradeid from sr_point_trade r group by r.tradeid) t4 on t1.id=t4.tradeid " +
        " left join sc_code levelno on t3.levelno=levelno.keycode and levelno.keyname like 'cardlevel_%'  where 1=1";

    if (query.where) {
        if (query.where.cardtype) {
            sp += " and t3.levelno=" + query.where.cardtype;
        }
        if (query.where.cardno) {
            sp += " and t3.cardno='" + query.where.cardno + "'";
        }
        if (query.where.gendercode) {
            sp += " and t2.gendercode=" + query.where.gendercode;
        }
        if (query.where.begintime) {
            sp += " and tradetime>='" + query.where.begintime + "'";
        }
        if (query.where.endtime) {
            sp += " and tradetime<='" + query.where.endtime + " 23:59:59'";
        }

    }
    sp += " group by t1.custid,t3.cardno,t2.fullname,t2.gendercode,t3.levelno,t2.mobile having 1=1";
    if (query.where) {
        if (query.where.tradestarttimes) {
            sp += " and count(1)>=" + query.where.tradestarttimes;
        }
        if (query.where.tradeendtimes) {
            sp += " and count(1)<=" + query.where.tradeendtimes;
        }
    }

    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(5,1,now(),'" + query.userid + "')";
    return _dao(function () {
        this.conn.query(exportsql)
            .then(function (result) {
                callback(null, result, sp);
            })
            .catch(function (err) {
                callback(err, null, null);
            })
    })

};


exports.queryTradeDetailReport = function* (query) {
    var sp = "";
    var from,to;
    if (query.querytype == 'main') {
        sp = "select t3.cardno,t2.fullname,concat('gender_',t2.gendercode) as gendercode,concat('cardlevel_',t3.levelno) as levelno,t2.mobile,count(1) as totaltimes,sum(t1.tradeamount) as totalamount,sum(t4.pointnum) as totalpoint" +
            " from sr_cust_trade t1" +
            " left join sr_cust_customer t2 on t1.custid=t2.id" +
            " left join sr_cust_card t3 on t1.custid=t3.custid and t3.statuscode=1   left join (select sum(pointnum) as pointnum,r.tradeid from sr_point_trade r group by r.tradeid) t4 on t1.id=t4.tradeid where 1=1 ";
    }
    else {
        sp = "select count(1) as countnum " +
            " from sr_cust_trade t1" +
            " left join sr_cust_customer t2 on t1.custid=t2.id" +
            " left join sr_cust_card t3 on t1.custid=t3.custid and t3.statuscode=1   left join (select sum(pointnum) as pointnum,r.tradeid from sr_point_trade r group by r.tradeid) t4 on t1.id=t4.tradeid where 1=1  ";
    }
    if (query.where) {
        if (query.where.cardtype) {
            sp += " and t3.levelno=@cardtype@";
        }
        if (query.where.cardno) {
            sp += " and t3.cardno=@cardno@";
        }
        if (query.where.gendercode) {
            sp += " and t2.gendercode=@gendercode@";
        }
        if (query.where.begintime) {
            sp += " and tradetime>=@begintime@";
        }
        if (query.where.endtime) {
            query.where.endtime += " 23:59:59";
            sp += " and tradetime<=@endtime@";
        }

    }
    sp += " group by t1.custid,t3.cardno,t2.fullname,t2.gendercode,t3.levelno,t2.mobile having 1=1";
    if (query.where) {
        if (query.where.tradestarttimes) {
            sp += " and count(1)>=@tradestarttimes@";
        }
        if (query.where.tradeendtimes) {
            sp += " and count(1)<=@tradeendtimes@";
        }
    }
    if (query.querytype == "main") {
        if (query.order.ordername) {
            sp += " order by " + query.order.name;
        }
        else {
            sp += " order by cardno ";
        }
        if (query.order.ordertype) {
            sp += " " + query.order.type;
        }
        else {
            sp += " desc";
        }
        if (query.page) {
            if (query.page.num) {
                from = (query.page.num - 1) * query.page.item;
                to = parseInt(query.page.item);
            }
        }
        else {
            from = 0;
            to = 10;
        }
        sp += " limit " + from + "," + to;
    }
    else {
        sp = "select count(*) as countnum from (" + sp + ") tdata;"
    }
    sp = db.makeSQL(sp, query.where)
    let result = yield rPool.query(sp);
    return result;
};


exports.refundTrade = function* (query) {
    var sp = "CALL srsp_cust_trade_refund(@tradeno@,@errorcode,@errormsg);" +
        "select @errorcode as errorcode,@errormsg as errormsg;";
    sp = db.makeSQL(sp, query)
    let result = yield wPool.query(sp);
    return result;
}