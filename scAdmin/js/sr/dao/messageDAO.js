/**
 * Created by lucas.zong on 2016/1/4.
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

function* queryCfAccount(data) {
    var _condition = "";
    if (data.shopid) {
        _condition += " and shop_id=@shop_id".replace("@shop_id", "'" + data.shopid + "'");
    }
    if (data.orgids) {
        _condition += " AND org_id in ('" + data.orgids.join(',').replace(/,/g, "\',\'") + "')";
    }

    var sql = "SELECT innerid,`name`,method_code FROM cf_account WHERE  enabled = 1 and function_mask like '1%' ";
    sql = sql + _condition;
    //执行SQL;
    return yield rPool.query(sql);
};
exports.queryCfAccount = queryCfAccount;


let queryMessage = function* (condition, istotal, sort, page) {
    let sql, _condition = "", _sortAndPage;
    if (condition) {
        if (condition.title) {
            _condition = _condition + " AND c.title LIKE'%"+condition.title+"%'";
        }
        if (condition.typecode) {
            _condition = _condition + " AND c.typecode=@typecode@" ;
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
        //if (condition.platformid) {
        //    _condition = _condition + " AND c.platformid=" + condition.platformid ;
        //}
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
        WHERE c.category=1 " + _condition + ";";
    } else {
        sql = "select c.id,bs.name,c.title,DATE_FORMAT(c.starttime,'%Y-%m-%d %T') as starttime,c.platformid,c.state,cstate.keyname as statekey\
               FROM sr_campaign AS c \
        LEFT JOIN sc_org AS bs ON c.orgid=bs.innerid\
        LEFT JOIN (SELECT keycode, keyname FROM sc_code WHERE  istoplevel = (SELECT id FROM sc_code WHERE  keyname = 'campaign_campaignstate')) cstate ON cstate.keycode=c.state\
        WHERE c.category=1 " + _condition + " ORDER BY c." + sort.column + ' ' + sort.type +",c.id asc"+ _sortAndPage.page + ";";
    }

    //执行SQL;
    sql = db.makeSQL(sql,condition)
    return yield rPool.query(sql);
}
exports.queryMessage = queryMessage;

var deleteMessage = function* (data) {
    let conn = yield app.res.getDBWConnection("sr","deleteMessage");
    try {
        let dbResult = yield conn.beginTransaction();
        let delWechatSql = "DELETE FROM  sr_campaign_wechat where campaignid=@id@;";
        delWechatSql = db.makeSQL(delWechatSql,{id:data.id})
        dbResult = yield conn.query(delWechatSql);
        let delMsgSql = "DELETE FROM  sr_campaign_msg where campaignid=@id@;"
        delMsgSql = db.makeSQL(delMsgSql,{id:data.id})
        dbResult = yield conn.query(delMsgSql);
        let delFilterSql = "DELETE FROM sr_campaign_filterrule WHERE campaignid=@id@;";
        delFilterSql = db.makeSQL(delFilterSql,{id:data.id})
        dbResult = yield conn.query(delFilterSql);
        let delCampaignSql = "DELETE FROM sr_campaign WHERE id=@id@;";
        delCampaignSql = db.makeSQL(delCampaignSql,{id:data.id})
        dbResult = yield conn.query(delCampaignSql);
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
exports.deleteMessage = deleteMessage;

var updateReward = function* (data,_jsontosql,orgids) {
    let campdata=data.campdata
    let msgdata = data.msgdata
    let id = data.id
    let objplatform=msgdata.objplatform;//{platformid:"",platformdata:{}}
    let objreward=msgdata.objreward;
    let returnData = {"insertId":"","campaignid":"","platformid":objplatform.platformid};
    let conn = yield app.res.getDBWConnection("sr","updateMessage");
    try {
        let dbResult = yield conn.beginTransaction();
        let sql=""
        if (!id) {
            sql = "insert into sr_campaign \
    (orgid,title,description,platformid,category,starttime,endtime,publisher,publishdate,sendtype,state,issendall,\
    isdeleted,errorcodes,createrid,createdtime,modifierid,modifiedtime)\
    values(@orgid@,@title@,@description@,@platformid@,1,@starttime@,null,null,null,@sendtype@,1,@issendall@,0,null,@userid@,NOW(),@userid@,NOW());";
            sql = db.makeSQL(sql, {
                orgid: campdata.orgid,
                title: campdata.title,
                description: campdata.description,
                platformid: campdata.platformid,
                starttime: campdata.starttime,
                sendtype: campdata.sendtype,
                issendall: objreward.issendall,
                userid: campdata.userid
            })
        }
        else {
            sql = "update sr_campaign set orgid=@orgid@,title=@title@,description=@description@,platformid=@platformid@," +
                "sendtype=@sendtype@,issendall=@issendall@,starttime=@starttime@,modifierid=@userid@,modifiedtime=NOW() where id=@id@;";
            sql = db.makeSQL(sql, {
                id:campdata.id,
                orgid: campdata.orgid,
                title: campdata.title,
                description: campdata.description,
                platformid: campdata.platformid,
                starttime: campdata.starttime,
                sendtype: campdata.sendtype,
                issendall: objreward.issendall,
                userid: campdata.userid
            })
        }
        dbResult = yield conn.query(sql);
        /************************************/
        if(!id){objplatform.platformdata.campaignid = dbResult.insertId;objreward.id = dbResult.insertId}
        else{objplatform.platformdata.campaignid = id;objreward.id = id}
        returnData.campaignid=objplatform.platformdata.campaignid
        let deleteMsgSql = "delete from sr_campaign_msg where campaignid=@campaignid".replace("@campaignid", objplatform.platformdata.campaignid)
        yield conn.query(deleteMsgSql);
        let deleteWechatSql = "delete from sr_campaign_wechat where campaignid=@campaignid".replace("@campaignid", objplatform.platformdata.campaignid)
        yield conn.query(deleteWechatSql);
        /*****************************/
        let campaignsql="";
        if(objplatform.platformid==1){
            campaignsql = "insert sr_campaign_wechat (campaignid,title,sendaccount,wechattype,sortno,author,abstract,content,linkurl,fileid,isenabled) values (@campaignid,@title,@sendaccount,@wechattype,@sortno,@author,@abstract,@content,@linkurl,@fileid,@isenabled)";
            campaignsql = campaignsql.replace("@campaignid", objplatform.platformdata.campaignid);
            campaignsql = campaignsql.replace("@title", "'" +objplatform.platformdata.title+"'" );
            campaignsql = campaignsql.replace("@sendaccount", "'" + objplatform.platformdata.sendaccount + "'");
            campaignsql = campaignsql.replace("@wechattype",  + objplatform.platformdata.wechattype );
            campaignsql = campaignsql.replace("@content", "'" + objplatform.platformdata.content + "'");
            campaignsql = campaignsql.replace("@sortno", "null");
            campaignsql = campaignsql.replace("@author", "null");
            campaignsql = campaignsql.replace("@abstract", "null");
            campaignsql = campaignsql.replace("@linkurl", "null");
            campaignsql = campaignsql.replace("@fileid", "null");
            campaignsql = campaignsql.replace("@isenabled", objplatform.platformdata.isenabled);
        }else{
            if(objplatform.platformid==2){
                objplatform.platformdata.title = ''
            }
            campaignsql = "insert into sr_campaign_msg (campaignid,title,sendaccount,content,typecode) values (@campaignid,@title,@sendaccount,@content,@typecode)";
            campaignsql = campaignsql.replace("@campaignid", objplatform.platformdata.campaignid);
            campaignsql = campaignsql.replace("@title", "'" +objplatform.platformdata.title+"'" );
            campaignsql = campaignsql.replace("@sendaccount", "'" + objplatform.platformdata.sendaccount + "'");
            campaignsql = campaignsql.replace("@content", "'" + objplatform.platformdata.content + "'");
            campaignsql = campaignsql.replace("@typecode", objplatform.platformid);
        }
        let newdbResult = yield conn.query(campaignsql);
        /***************************************/
        returnData.insertId=newdbResult.insertId;
        var rewardscontent = JSON.stringify(objreward.rewards);
        var filterjsons = JSON.stringify(objreward.filterjsons);
        var filtersql = _jsontosql(objreward.filterjsons,orgids);
        filtersql=(new Buffer(filtersql)).toString('base64');
        let deleteFilterSql = "delete from sr_campaign_filterrule where campaignid=@id@;"
        deleteFilterSql = db.makeSQL(deleteFilterSql,objreward)
        yield conn.query(deleteFilterSql);
        let insertFilterSql = "insert into sr_campaign_filterrule (campaignid,platformid,filtersql,filterjsons,filtertext) values(@id@,0,@filtersql@,@filterjsons@,@filtertext@);";
        insertFilterSql = db.makeSQL(insertFilterSql,{id:objreward.id,filtersql:filtersql,filterjsons:filterjsons,filtertext:objreward.filtertext})
        yield conn.query(insertFilterSql);
        yield conn.commit();
        return { code: 0,returnData:returnData };

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
exports.updateReward = updateReward;


function* getMsg(campaignid){
    var sql = "select * from sr_campaign_msg where campaignid=@campaignid";
    sql = sql.replace("@campaignid", campaignid);

    return yield rPool.query(sql);
};
exports.getMsg = getMsg;

function* getEmail(campaignid){
    var sql = "select * from sr_campaign_email where campaignid=@campaignid";
    sql = sql.replace("@campaignid", campaignid);

    return yield rPool.query(sql);
};
exports.getEmail=getEmail;

function* getApp(campaignid){
    var sql = "select * from sr_campaign_app where campaignid=@campaignid";
    sql = sql.replace("@campaignid", campaignid);

    return yield rPool.query(sql);
};
exports.getApp = getApp;

function* getWechat(campaignid){
    var sql = "select * from sr_campaign_wechat where campaignid=@campaignid";
    sql = sql.replace("@campaignid", campaignid);

    return yield rPool.query(sql);
};
exports.getWechat = getWechat;

var publishMessage = function* (data) {
    var sql= "update sr_campaign set state=2 WHERE id='" + data.id + "';";//进行中
    return yield wPool.query(sql);
};
exports.publishMessage = publishMessage;
//
///********************************** 预查看发送结果  **************************************/
var getMmPersonNumForSuccess=function* (platformid){
    //全部统计成功的
    var sql="";

    if(platformid==1){
        sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='campaign_wechatpush_thismonth_count'";
    }else if(platformid==2){
        sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='campaign_smspush_thismonth_count'";
    }else if(platformid==3){
        sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='campaign_emailpush_thismonth_count'";
    }else if(platformid==4){
        sql="SELECT totalnum,DATE_FORMAT(modifiedtime,'%Y-%m-%d %H:%i:%s') AS modifiedtime FROM sr_sys_precounter WHERE table_name='campaign_apppush_thismonth_count'";
    }

    //执行SQL;
    return yield rPool.query(sql);
}
exports.getMmPersonNumForSuccess=getMmPersonNumForSuccess;

var getResultMemberNumForComplete=function* (campaign){
    var tablename="";
    if(campaign.platformid==1){
        tablename="sr_campaign_wechatpush_result";
        var sql="SELECT SUM(totalcount) AS `count` FROM "+tablename+" WHERE campaignid='"+campaign.id+"';";
    }else if(campaign.platformid==2){
        tablename="sr_campaign_smspush";
        var sql="SELECT COUNT(1) AS `count` FROM "+tablename+" WHERE campaignid='"+campaign.id+"';";
    }else if(campaign.platformid==3){
        tablename="sr_campaign_emailpush";
        var sql="SELECT COUNT(1) AS `count` FROM "+tablename+" WHERE campaignid='"+campaign.id+"';";
    }else if(campaign.platformid==4){
        tablename="sr_campaign_apppush";
        var sql="SELECT COUNT(1) AS `count` FROM "+tablename+" WHERE campaignid='"+campaign.id+"';";
    }
    //执行SQL;
    return yield rPool.query(sql);
};
exports.getResultMemberNumForComplete=getResultMemberNumForComplete;

var getResultMemberNumForSuccess=function* (campaign){
    var tablename="";
    if(campaign.platformid==1){
        tablename="sr_campaign_wechatpush_result";
        var sql="SELECT SUM(sentcount) AS `count` FROM "+tablename+" WHERE errcode=0 and campaignid='"+campaign.id+"';";
    }else if(campaign.platformid==2){
        tablename="sr_campaign_smspush";
        var sql="SELECT COUNT(1) AS `count` FROM "+tablename+" WHERE result=1 and campaignid='"+campaign.id+"';";
    }else if(campaign.platformid==3){
        tablename="sr_campaign_emailpush";
        var sql="SELECT COUNT(1) AS `count` FROM "+tablename+" WHERE result=1 and campaignid='"+campaign.id+"';";
    }else if(campaign.platformid==4){
        tablename="sr_campaign_apppush";
        var sql="SELECT COUNT(1) AS `count` FROM "+tablename+" WHERE result=1 and campaignid='"+campaign.id+"';";
    }
    //执行SQL;
    return yield rPool.query(sql);
};
exports.getResultMemberNumForSuccess=getResultMemberNumForSuccess;

///********************************** 查看发送成员list  **************************************/

var queryResultMemberForWechat = function* (condition, istotal, sort, page) {
    var sql, _condition = "", _sortAndPage;
    if (condition) {
        if (condition.id) {
            _condition = _condition + " AND campaignid=@id@";
        }
    }
    if (!sort) {
        sort = {column: "createdtime", type: "DESC"}
    }
    _sortAndPage = comm.sortAndPage(sort, page);

    if (istotal) {
        sql = "SELECT COUNT(1) AS `count` \
               FROM\
        sr_campaign_wechatpush a\
        WHERE 1=1 " + _condition + ";";
    } else {
        sql = "SELECT a.custid, a.nickname,a.photo,a.custname,a.result\
        FROM\
        sr_campaign_wechatpush a\
        WHERE 1=1 " + _condition + " ORDER BY " + sort.column + ' ' + sort.type +",id asc "+ _sortAndPage.page + ";";
    }
    sql = db.makeSQL(sql,condition)

    //执行SQL;
    return yield rPool.query(sql);
}
exports.queryResultMemberForWechat = queryResultMemberForWechat;

var queryResultMemberForSms = function* (condition, istotal, sort, page) {
    var sql, _condition = "", _sortAndPage;
    if (condition) {
        if (condition.id) {
            _condition = _condition + " AND campaignid=@id@";
        }
        if(condition.result!='2'){
            _condition = _condition + " AND result = @result@";
        }
    }
    if (!sort) {
        sort = {column: "createdtime", type: "DESC"}
    }
    _sortAndPage = comm.sortAndPage(sort, page);

    if (istotal) {
        sql = "SELECT COUNT(1) AS `count` \
               FROM\
        sr_campaign_smspush a\
        WHERE 1=1 " + _condition + ";";
    } else {
        sql = "SELECT a.custid, a.custname,a.mobile,a.result,a.errmsg\
        FROM\
        sr_campaign_smspush a\
        WHERE 1=1 " + _condition + " ORDER BY " + sort.column + ' ' + sort.type +",id asc "+ _sortAndPage.page + ";";
    }
    sql = db.makeSQL(sql,condition)
    //执行SQL;
    return yield rPool.query(sql);
}
exports.queryResultMemberForSms = queryResultMemberForSms;

var queryResultMemberForEmail = function* (condition, istotal, sort, page) {
    var sql, _condition = "", _sortAndPage;
    if (condition) {
        if (condition.id) {
            _condition = _condition + " AND campaignid=@id@";
        }
        if(condition.result!='2'){
            _condition = _condition + " AND result = @result@";
        }
    }
    if (!sort) {
        sort = {column: "createdtime", type: "DESC"}
    }
    _sortAndPage = comm.sortAndPage(sort, page);

    if (istotal) {
        sql = "SELECT COUNT(1) AS `count` \
               FROM\
        sr_campaign_emailpush a\
        WHERE 1=1 " + _condition + ";";
    } else {
        sql = "SELECT a.custid,a.custname, a.email,a.result,a.errmsg\
        FROM\
        sr_campaign_emailpush a\
        WHERE 1=1 " + _condition + " ORDER BY " + sort.column + ' ' + sort.type +",id asc "+ _sortAndPage.page + ";";
    }
    //执行SQL;
    sql = db.makeSQL(sql,condition)
    return yield rPool.query(sql);
}
exports.queryResultMemberForEmail = queryResultMemberForEmail;

var queryResultMemberForApp = function* (condition, istotal, sort, page) {
    var sql, _condition = "", _sortAndPage;
    if (condition) {
        if (condition.id) {
            _condition = _condition + " AND campaignid=@id@";
        }
        if(condition.result!='2'){
            _condition = _condition + " AND result = @result@";
        }
    }
    if (!sort) {
        sort = {column: "createdtime", type: "DESC"}
    }
    _sortAndPage = comm.sortAndPage(sort, page);

    if (istotal) {
        sql = "SELECT COUNT(1) AS `count` \
               FROM\
        sr_campaign_apppush a\
        WHERE 1=1 " + _condition + ";";
    } else {
        sql = "SELECT a.custid,a.custname, a.mobile,a.result,a.errmsg\
        FROM\
        sr_campaign_apppush a\
        WHERE 1=1 " + _condition + " ORDER BY " + sort.column + ' ' + sort.type +",id asc "+ _sortAndPage.page + ";";
    }
    sql = db.makeSQL(sql,condition)
    //执行SQL;
    return yield rPool.query(sql);
}
exports.queryResultMemberForApp = queryResultMemberForApp;

exports.getExportSql = function *(condition) {
    let sql, _condition = "";
    if (condition) {
        if (condition.id) {
            _condition = _condition + " AND campaignid=@id@";
        }
        if(condition.result!='2'){
            _condition = _condition + " AND result = @result@";
        }
    }
    if (condition.platformid == 2) {
        sql = "SELECT a.custname as '客户名称',a.mobile as '手机号码',CASE a.result WHEN '1' THEN '成功' WHEN '2' THEN '失败' ELSE '-' END as '结果',a.errmsg as '失败描述'\
        FROM\
        sr_campaign_smspush a\
        WHERE 1=1 " + _condition + ";";
    } else if (condition.platformid == 3) {
        sql = "SELECT a.custname as '客户名称', a.email as '邮箱地址',CASE a.result WHEN '1' THEN '成功' WHEN '2' THEN '失败' ELSE '-' END as '结果',a.errmsg as '失败描述'\
        FROM\
        sr_campaign_emailpush a\
        WHERE 1=1 " + _condition +";";
    } else if (condition.platformid == 4) {
        sql = "SELECT a.custname as '客户名称', a.mobile as '手机号码',CASE a.result WHEN '1' THEN '成功' WHEN '2' THEN '失败' ELSE '-' END as '结果',a.errmsg as '失败描述'\
        FROM\
        sr_campaign_apppush a\
        WHERE 1=1 " + _condition + ";";
    }
    sql = db.makeSQL(sql,condition)
    var exportsql = "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(5,1,now(),'todo')";
    let result = yield rPool.query(exportsql);
    return {result: result, sql: sql};
}

var getOpenid=function* (mobile,accountid) {
    var sql = "select openid from sr_cust_customer where accountid=@accountid@ and mobile=@mobile@;"
    sql = db.makeSQL(sql,{accountid:accountid,mobile:mobile})
    return yield rPool.query(sql);
};
exports.getOpenid=getOpenid;

var getAppinfo=function* (mobile) {
    var sql = "SELECT cust.app_deviceid FROM sr_cust_customer cust where cust.mobile=@mobile@;"
    sql = db.makeSQL(sql,{mobile:mobile})
    return yield rPool.query(sql);
};
exports.getAppinfo=getAppinfo;

function* getWechatImgText(contentid){
    var sql = "SELECT t.*,d.url,d.imageid,d.remark,'' AS details\
    FROM sr_weiapp_reply_content t\
    LEFT JOIN sr_weiapp_news_detail d ON t.id =d.resid AND d.statuscode=1\
    WHERE t.id=@id";
    sql = sql.replace("@id", contentid);

    return yield rPool.query(sql);
};
exports.getWechatImgText = getWechatImgText;

var getWechatContent=function* (id) {
    var sql = "select * from sr_weiapp_reply_content where id=@id@" ;
    sql = db.makeSQL(sql,{id:id})
    return yield rPool.query(sql);
};
exports.getWechatContent = getWechatContent;

var getVideoContent=function* (id) {
    var sql = "select fileid as resourceid,filename from sr_weiapp_resource where id=@id@" ;
    sql = db.makeSQL(sql,{id:id})
    return yield rPool.query(sql);
};
exports.getVideoContent = getVideoContent;

var getWechatDetail=function* (id) {
    var sql = "select * from sr_weiapp_news_detail where resid=@id@";
    sql = db.makeSQL(sql,{id:id})
    return yield rPool.query(sql);
};
exports.getWechatDetail = getWechatDetail;