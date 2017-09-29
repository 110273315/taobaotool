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
let moment = require("moment");

//获取礼券列表
let getReward = function* (condition) {
    let sql = "select *\
               FROM sr_campaign AS c \
        WHERE id=@id@" ;
    sql=db.makeSQL(sql,{id:condition.id})
    return yield rPool.query(sql);
};
exports.getReward = getReward;

let getFilter = function* (condition) {

    let sql = "select *\
               FROM sr_campaign_filterrule AS c \
        WHERE campaignid=@id@";
    sql=db.makeSQL(sql,{id:condition.id})
    return yield rPool.query(sql);
};
exports.getFilter = getFilter;

exports.queryReward = function* (condition, istotal, sort, page) {
    let sql, _condition = "", _sortAndPage;
    if (condition) {
        if (condition.title) {
            _condition = _condition + " AND c.title LIKE'%"+condition.title+"%'";
        }
        if (condition.typecode) {
            _condition = _condition + " AND c.typecode=@typecode@";
        }
        if (condition.fromtime) {
            _condition = _condition + " AND c.starttime>=@fromtime@";
        }
        if (condition.totime) {
            _condition = _condition + " AND c.starttime<='"+condition.totime + " 23:59:59'";
        }
        if (condition.orgids) {
            _condition += " AND c.orgid in ('" + condition.orgids.join(',').replace(/,/g, "\',\'") + "')";
        }
    }
    if (!sort) {
        sort = {column: "modifiedtime", type: "DESC"}
    }
    _sortAndPage = comm.sortAndPage(sort, page);

    if (istotal) {
        sql = "SELECT COUNT(1) AS `count` \
               FROM sr_campaign AS c \
        LEFT JOIN sc_org AS bs ON c.orgid=bs.innerid\
        LEFT JOIN (SELECT keycode, keyname FROM sc_code WHERE  istoplevel = (SELECT id FROM sc_code WHERE  keyname = 'campaign_campaignstate')) cstate ON cstate.keycode=c.state\
        WHERE c.category=2 " + _condition + ";";
    } else {
        sql = "select c.id,bs.name,c.title,DATE_FORMAT(c.starttime,'%Y-%m-%d %T') as starttime,c.state,cstate.keyname as statekey\
               FROM sr_campaign AS c \
        LEFT JOIN sc_org AS bs ON c.orgid=bs.innerid\
        LEFT JOIN (SELECT keycode, keyname FROM sc_code WHERE  istoplevel = (SELECT id FROM sc_code WHERE  keyname = 'campaign_campaignstate')) cstate ON cstate.keycode=c.state\
        WHERE c.category=2 " + _condition + " ORDER BY c." + sort.column + ' ' + sort.type +",c.id asc"+ _sortAndPage.page + ";";
    }
    sql = db.makeSQL(sql,condition)
    let result =  yield rPool.query(sql);
    return result;
}

exports.updateReward = function* (data,condition) {
    let campdata=data.campdata
    let rewarddata = data.rewarddata
    let id = data.id
    let rewardscontent = campdata.rewards;
    rewardscontent.forEach(function(detail){
        delete detail['$$hashKey']
    })
    let rewardstring = JSON.stringify(rewardscontent)
    let filterjsons = JSON.stringify(campdata.filterjsons);
    let filtersql = _jsontosql(campdata.filterjsons,condition);
    filtersql=(new Buffer(filtersql)).toString('base64');
    let returnData = {"id":""};
    let conn = yield app.res.getDBWConnection("sr","updateReward");
    try {
        let dbResult = yield conn.beginTransaction();
        /******************************/
        let sql = ""
        if (!id) {
            sql = "insert into sr_campaign \
    (orgid,title,description,platformid,category,rewardscontent,starttime,endtime,publisher,publishdate,sendtype,state,issendall,isdeleted,errorcodes,createrid,createdtime,modifierid,modifiedtime)\
    values(@orgid@,@title@,@description@,@platformid@,@category@,@rewardstring@,@starttime@,null,null,null,@sendtype@,"
                + "1,0,0,null,@userid@,NOW(),@userid@,NOW());";
            //执行SQL;
            sql = db.makeSQL(sql, {
                orgid: rewarddata.orgid,
                title: rewarddata.title,
                description: rewarddata.description,
                platformid: rewarddata.platformid,
                category: rewarddata.category,
                rewardstring: rewardstring,
                starttime: rewarddata.starttime,
                userid: rewarddata.userid,
                sendtype:rewarddata.sendtype
            })
        }
        else {
            sql = "update sr_campaign \
    set orgid=@orgid@,title=@title@,description=@description@,platformid=@platformid@,category=@category@,rewardscontent=@rewardstring@,starttime=@starttime@,sendtype=@sendtype@,modifierid=@userid@,modifiedtime=NOW()\
     where id=@id@;";
            //执行SQL;
            sql = db.makeSQL(sql, {
                orgid: rewarddata.orgid,
                title: rewarddata.title,
                description: rewarddata.description,
                platformid: rewarddata.platformid,
                category: rewarddata.category,
                rewardstring: rewardstring,
                starttime: rewarddata.starttime,
                userid: rewarddata.userid,
                sendtype:rewarddata.sendtype,
                id: rewarddata.id
            })
        }
        dbResult = yield conn.query(sql);
        /******************************/
        if(!id){campdata.id = dbResult.insertId;}
        else{campdata.id = id;}
        //let deleteRewardSql = "";
        //deleteRewardSql = "delete from sr_rewards_rule_rewards_only where detailid = @id@"
        //deleteRewardSql = db.makeSQL(deleteRewardSql,{id:campdata.id})
        //dbResult = yield conn.query(deleteRewardSql);
        //let deleteRewardCouponSql = "";
        //deleteRewardCouponSql = "delete from sr_rewards_rule_sendmultcoupon_only where rewardid = @id@"
        //deleteRewardCouponSql = db.makeSQL(deleteRewardCouponSql,{id:campdata.id})
        //dbResult = yield conn.query(deleteRewardCouponSql);
        ///*****************************/
        //for(let i = 0; i < rewardscontent.length; i++){
        //    let detail = rewardscontent[i];
        //    detail.point = detail.point ? detail.point : null;
        //    detail.exday = detail.exday ? detail.exday : null;
        //    detail.couponid = detail.couponid ? detail.couponid : null;
        //    detail.num = detail.num ? detail.num : null;
        //    detail.multiple = detail.multiple ? detail.multiple : null;
        //    let detailsql = "insert into sr_rewards_rule_rewards_only(detailid,typeid,point,exday,couponid,num,multiple,createdtime) values(@id@,@typeid@,@point@,@exday@,@couponid@,@num@,@multiple@,now())";
        //    detailsql = db.makeSQL(detailsql, {
        //        id: campdata.id,
        //        typeid: detail.typeid,
        //        point: detail.point,
        //        exday: detail.exday,
        //        couponid: detail.couponid,
        //        num: detail.num,
        //        multiple: detail.multiple
        //    })
        //    dbResult = yield conn.query(detailsql);
        //}
        ///**********************************/
        //let hisuuid = sc.guid();
        //let k = 1;
        //let num = 0
        //for(let j = 0; j < rewardscontent.length; j++) {
        //    let detailj = rewardscontent[j];
        //    detailj.typeid = detailj.typeid ? detailj.typeid : null;
        //    if(detailj.typeid == 2){
        //        num += parseInt(detailj.num) ? parseInt(detailj.num) : 0;
        //        for (k; k <= num; k++) {
        //            detailj.couponid = detailj.couponid ? detailj.couponid : null;
        //            let detailjsql = "insert into sr_rewards_rule_sendmultcoupon_only(hisuuid,idxno,strvalue,rewardid) values('" + hisuuid + "'," + k + "," + detailj.couponid + "," + campdata.id + ")";
        //            dbResult = yield conn.query(detailjsql);
        //        }
        //    }
        //}
        ///**************************************/
        //returnData.id=campdata.id
        //拼接sql
        let deleteFilterSql = "delete from sr_campaign_filterrule where campaignid=@id@;";
        deleteFilterSql = db.makeSQL(deleteFilterSql,{id:campdata.id})
        dbResult = yield conn.query(deleteFilterSql);
        let insertFilterSql = "insert into sr_campaign_filterrule (campaignid,platformid,filtersql,filterjsons,filtertext) values('" + campdata.id + "',0,'"+filtersql+"','" + filterjsons + "','" + campdata.filtertext + "');";
        dbResult = yield conn.query(insertFilterSql);
        /*****************************************/
        //returnData.result = dbResult
        dbResult = yield conn.commit();
        return { code: 0 ,returnData:{id:campdata.id}};
    }catch (e) {
        if (conn) {
            yield conn.rollback();
        }
        return { code: -1 }
    }
    finally {
            if (conn) {
                conn.release();
            }
        }
};

let getFailCoupon=function* (id){
    let sql="SELECT count(1) as count from sr_rewards_log where third_id = @id@ and status = 2 and reward_type=2";
    sql=db.makeSQL(sql,{id:id})
    return yield rPool.query(sql);
};
exports.getFailCoupon=getFailCoupon;

let getFailPoint=function* (id){
    let sql="SELECT count(1) as count from sr_rewards_log where third_id = @id@ and status = 2 and reward_type=1";
    sql=db.makeSQL(sql,{id:id})
    return yield rPool.query(sql);
};
exports.getFailPoint=getFailPoint;


let deleteReward = function* (data) {
    let conn = yield app.res.getDBWConnection("sr","deleteReward");
    try {
        let dbResult = yield conn.beginTransaction();
        let sql = "DELETE FROM sr_campaign WHERE id=@id@;";
        sql=db.makeSQL(sql,{id:data.id})
        dbResult = yield conn.query(sql);
        let sqlfilter = "DELETE FROM sr_campaign_filterrule WHERE campaignid=@id@;";
        sqlfilter=db.makeSQL(sqlfilter,{id:data.id})
        dbResult = yield conn.query(sqlfilter);
        dbResult = yield conn.commit();
        return { code: 0 };
    }catch (e) {
        if (conn) {
            yield conn.rollback();
        }
        return { code: -1 }
    }
    finally {
        if (conn) {
            conn.release();
        }
    }
};
exports.deleteReward = deleteReward;

let publishReward = function* (data) {
    let sql = "update sr_campaign set state=2 WHERE id=@campaignid@;";//进行中
    sql=db.makeSQL(sql,data)
    return yield wPool.query(sql);
};
exports.publishReward = publishReward;

let getSendTargetNum = function* (filtersql) {

    let where = (new Buffer(filtersql, 'base64')).toString();
    let sql = "SELECT count(1) as `count` from sr_cust_customer cust where "+where;
    return yield rPool.query(sql);
}
exports.getSendTargetNum = getSendTargetNum;
/********************************** 预查看发送结果  **************************************/
let getMaxCouponAssignNumForPre =function* (couponid){
    let sql="SELECT max_assign_count as `count` FROM sr_coupon_template WHERE id=@couponid@;";
    sql=db.makeSQL(sql,{couponid:couponid})
    return yield rPool.query(sql);
};


let getInvalidCustCardTypeNum = function* (filtersql,custcardtypelimit) {
    if(custcardtypelimit=='')
    {
        return {count:0};
    }
    let where = (new Buffer(filtersql, 'base64')).toString();
    let sql = "SELECT count(1) as `count` from sr_cust_customer cust " +
        "LEFT JOIN sr_cust_card card on card.custid= cust.id and card.statuscode=1 and (  card.duetime>=now() or card.duetime is null)" +
        "where "+where+" and card.levelno not in("+custcardtypelimit+")";
    return yield rPool.query(sql);
}
exports.getInvalidCustCardTypeNum= getInvalidCustCardTypeNum;

exports.getMaxCouponAssignNumForPre = getMaxCouponAssignNumForPre;

let getCouponAssignedNumForPre =function* (couponid){
    let sql="SELECT COUNT(1) AS `count` FROM sr_coupon_instance WHERE cust_id IS NOT NULL AND coupon_temp_id=@couponid@;";
    sql=db.makeSQL(sql,{couponid:couponid})
    return yield rPool.query(sql);
};
exports.getCouponAssignedNumForPre=getCouponAssignedNumForPre;

/********************************** 查看发送成功结果  **************************************/
let getResultMemberNumForComplete=function* (campaignid){
    let sql="SELECT COUNT(distinct(cust_id)) AS `count` FROM sr_rewards_log WHERE third_id=@campaignid@;";
    sql=db.makeSQL(sql,{campaignid:campaignid})
    return yield rPool.query(sql);
};
exports.getResultMemberNumForComplete=getResultMemberNumForComplete;

let getResultMemberNumForSuccess=function* (campaignid){
    let sql="SELECT COUNT(distinct(cust_id)) AS `count` FROM sr_rewards_log WHERE status=1 AND third_id=@campaignid@;";
    sql=db.makeSQL(sql,{campaignid:campaignid})
    return yield rPool.query(sql);
};
exports.getResultMemberNumForSuccess=getResultMemberNumForSuccess;

let getResultPointsMemberNumForSuccess=function* (campaignid){
    let sql="SELECT COUNT(distinct(cust_id)) AS `count` FROM sr_rewards_log WHERE reward_type=1 and status=1 AND third_id=@campaignid@;";
    sql=db.makeSQL(sql,{campaignid:campaignid})
    return yield rPool.query(sql);
};
exports.getResultPointsMemberNumForSuccess=getResultPointsMemberNumForSuccess;

let getResultCouponMemberNumForSuccess=function* (campaignid){
    let sql="SELECT COUNT(distinct(cust_id)) AS `count` FROM sr_rewards_log WHERE reward_type=2 and status=1 AND third_id=@campaignid@;";
    sql=db.makeSQL(sql,{campaignid:campaignid})
    return yield rPool.query(sql);
};
exports.getResultCouponMemberNumForSuccess=getResultCouponMemberNumForSuccess;

let getMmPersonNumForSuccess=function* (sendtype){
    //全部统计成功的
    let sql="";
    if(sendtype==1){
        sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='pushreward_thismonth_cust_count'";
    }else if(sendtype==2){
        sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='pushpoint_thismonth_cust_count'";
    }else{
        sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='pushrewardandpoint_thismonth_cust_count'";
    }

    return yield rPool.query(sql);
};
exports.getMmPersonNumForSuccess=getMmPersonNumForSuccess;

let getMmPointsNumForSuccess=function* (){
    let sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='push_thismonth_point_count'";
    return yield rPool.query(sql);
};
exports.getMmPointsNumForSuccess=getMmPointsNumForSuccess;

let getMmCouponNumForSuccess=function* (){
    let sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='push_thismonth_coupon_count'";
    return yield rPool.query(sql);
};
exports.getMmCouponNumForSuccess=getMmCouponNumForSuccess;

/********************************** 查看Pre发送成员list  **************************************/
let queryPreResultMember = function* (filtersql, istotal, sort, page) {
    let sql, _sortAndPage;
    let _condition = (new Buffer(filtersql, 'base64')).toString();

    if(!_condition){
        _condition="1=1";
    }

    if (!sort) {
        sort = {column: "createdtime", type: "DESC"}
    }
    _sortAndPage = comm.sortAndPage(sort, page);

    if (istotal) {
        sql = "SELECT COUNT(1) AS `count` \
               FROM\
        sr_cust_customer cust\
        WHERE " + _condition + ";";
    } else {
        sql = "SELECT fullname,nickname,photo,mobile,emailaddress\
        FROM\
        sr_cust_customer cust\
        WHERE " + _condition + " ORDER BY " + sort.column + ' ' + sort.type +",id asc "+ _sortAndPage.page + ";";
    }
    //执行SQL;
    return yield rPool.query(sql);
}
exports.queryPreResultMember = queryPreResultMember;



let getCustcardtypelimitById=function* (id)
{
    let sql="SELECT r.cust_card_type_limit FROM sr_coupon_rule r left join sr_coupon_template t on r.coupon_temp_id = t.id WHERE t.id=@id@";
    sql=db.makeSQL(sql,{id:id})
    return yield rPool.query(sql);
}
exports.getCustcardtypelimitById = getCustcardtypelimitById;

/********************************** 查看发送成员list  **************************************/

let queryResultMember = function* (condition, istotal, sort, page) {
    let sql, _condition = "", _sortAndPage;
    if (condition) {
        if (condition.id) {
            _condition = _condition + " AND a.third_id=@id@";
        }
        if(condition.result!='2'){
            _condition = _condition + " and a.status = @result@";
        }
        _condition = db.makeSQL(_condition,condition)
    }
    if (!sort) {
        sort = {column: "createdtime", type: "DESC"}
    }
    _sortAndPage = comm.sortAndPage(sort, page);
    if (istotal) {
        sql = "SELECT COUNT(1) AS `count` \
               FROM\
        sr_rewards_log a\
        WHERE a.source_type = 4 " + _condition + ";";
    } else {
        sql = "SELECT b.fullname, a.reward_type as reward_type,a.status, \
        a.err_code,a.err_msg\
           FROM  sr_rewards_log a left join sr_cust_customer b on a.cust_id=b.id\
        WHERE a.source_type = 4 " + _condition + " ORDER BY " + sort.column + ' ' + sort.type +",a.id asc "+ _sortAndPage.page + ";";
    }

    //执行SQL;
    return yield rPool.query(sql);
}
exports.queryResultMember = queryResultMember;

exports.getExportSql = function *(condition) {
    let sql, _condition = "";
    if (condition) {
        if (condition.id) {
            _condition = _condition + " AND third_id=@id@";
        }
        if (condition.result != '2') {
            _condition = _condition + " and a.status = @result@";
        }
        _condition = db.makeSQL(_condition,condition)
    }
    sql = "SELECT b.fullname as '客户名称',CASE a.reward_type WHEN '1' THEN '积分' WHEN '2' THEN '礼券' END as '奖励类型',\
     CASE a.status WHEN '1' THEN '成功' WHEN '2' THEN '失败' ELSE '-' END as '结果',DATE_FORMAT(a.reward_time ,'%Y-%m-%d %H:%i:%s') as '奖励时间',\
     a.err_code as '错误码',a.err_msg as '错误描述'\
           FROM  sr_rewards_log a left join sr_cust_customer b on a.cust_id=b.id\
        WHERE a.source_type = 4 " + _condition + ";";
    var exportsql = "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(4,1,now(),'todo')";
    let result = yield rPool.query(exportsql);
    return {result: result, sql: sql};
}

let _jsontosql = function (json,condition) {
    let rule = json;
// --------------  主查询的表别名必须是cust
    let where = "cust.statuscode=1";
    //所属机构
    if(condition) {
        where += " and cust.orgid in ('" + condition.join(',').replace(/,/g, "\',\'") + "')";
    }
    if (rule.iscust && _.has(rule,"customer") && (_.keys(rule.customer)).length > 0) {
        //会员编号
        //if(_.has(rule.customer, "no")&&rule.customer.no){
        //    where+=" and id in (select custid from sr_cust_customer_extend where no = '"+rule.customer.no+"')  ";
        //}
        //手机号
        if (_.has(rule.customer, "mobile") && rule.customer.mobile) {
            //where += " and (mobile like '" + rule.customer.mobile + "%' or reverse_mobile like reverse('%" + rule.customer.mobile + "')) ";
            where += " and cust.mobile like '" + rule.customer.mobile + "%'";
        }
        //会员类型
        if (_.has(rule.customer, "typecode") && rule.customer.typecode) {
            //where += " and typecode='" + rule.customer.typecode + "'";
            where +=" and EXISTS(SELECT 'x' FROM sr_cust_type ct WHERE custid=cust.id AND isdelete=0 AND typecode="+rule.customer.typecode +" )"
        }
        //性别
        if (_.has(rule.customer, "sexcode") && rule.customer.sexcode) {
            where += " and cust.gendercode='" + rule.customer.sexcode + "'";
        }
        //年龄小
        if (_.has(rule.customer, "agemin") && rule.customer.agemin) {
            where += " and cust.birthday<= (select concat(convert(year(NOW())-" + parseInt(rule.customer.agemin) + ",char(12)) ,'-12-12 23:59:59'))";
        }
        //年龄大
        if (_.has(rule.customer, "agemax") && rule.customer.agemax) {
            where += " and cust.birthday>= (select concat(convert(year(NOW())-" + parseInt(rule.customer.agemax) + ",char(12)),'-01-01 00:00:00'))";
        }
        //渠道
        if (_.has(rule.customer, "sourcecode") && rule.customer.sourcecode) {
            where += " and cust.channelcode='" + rule.customer.sourcecode + "'";
        }
        //创建开始时间
        if (_.has(rule.customer, "createdstarttime") && rule.customer.createdstarttime) {
            where += " and cust.createdtime>='" + rule.customer.createdstarttime + "'";
        }
        //创建结束时间
        if (_.has(rule.customer, "createdendtime") && rule.customer.createdendtime) {
            where += " and cust.createdtime<='" + rule.customer.createdendtime + "'";
        }
        //交易开始时间
        if (_.has(rule.customer, "tradestartdate") && rule.customer.tradestartdate) {
            where += " and cust.id in (select custid from sr_cust_trade where tradetime >='" + rule.customer.tradestartdate + "')";
        }
        //交易结束时间
        if (_.has(rule.customer, "tradeenddate") && rule.customer.tradeenddate) {
            where += " and cust.id in (select custid from sr_cust_trade where tradetime <='" + rule.customer.tradeenddate + "')";
        }
        //次数 min
        if (_.has(rule.customer, "frequencymin") && rule.customer.frequencymin) {
            where += " and cust.tradetimes >=" + rule.customer.frequencymin;
        }
        //次数 max
        if (_.has(rule.customer, "frequencymax") && rule.customer.frequencymax) {
            where += " and cust.tradetimes <=" + rule.customer.frequencymax;
        }
        //金额 min
        if (_.has(rule.customer, "amountmin") && rule.customer.amountmin) {
            where += " and cust.totaltradeamount >=" + rule.customer.amountmin;
        }
        //金额 max
        if (_.has(rule.customer, "amountmax") && rule.customer.amountmax) {
            where += " and cust.totaltradeamount <=" + rule.customer.amountmax;
        }
        //标签
        if (_.has(rule.customer, "tags") && rule.customer.tags.length > 0) {
            let ids = (_.pluck(rule.customer.tags, 'id')).join(',');
            where += " AND cust.id IN (SELECT DISTINCT custid FROM sr_tag_cust WHERE tagid IN(" + ids + "))";
        }
        //会员卡类型
        if (_.has(rule.customer, "levelno") && rule.customer.levelno) {
            where += " and cust.id IN (SELECT DISTINCT custid FROM sr_cust_card WHERE statuscode = 1 and levelno =" + rule.customer.levelno + ")";
        }
    }

    return where;
};





exports._jsontosql = _jsontosql;




