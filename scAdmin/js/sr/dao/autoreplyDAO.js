/**
 * Created by jiaxing.wang on 2015/8/1.
 */
'use strict'
let sc = require('smartacjs'),
    uuid = sc.guid(),
    app = sc.app(),
    _ = sc._,
    config = app.conf,
    Promise = sc.Promise,
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');

let getAutoreplay = function* (data) {
    let sql = "    SELECT a.*, \
    img.id AS imageresid,img.fileid AS imageid,\
        radio.id AS radioresid,radio.filename AS radioname,\
        video.id AS videoresid,video.filename AS videoname\
    FROM sr_weiapp_autoreply a \
    LEFT JOIN sr_weiapp_resource img ON a.msgtype=3 AND a.contents=img.id\
    LEFT JOIN sr_weiapp_resource radio ON a.msgtype=4 AND a.contents=radio.id\
    LEFT JOIN sr_weiapp_resource video ON a.msgtype=5 AND a.contents=video.id\
    WHERE a.accountid=@accountid@ AND a.replytype=@replytype@;";
    sql = db.makeSQL(sql,data)
    //sql = db.makeSQL(sql,{accountid:data.accountid,replytype:data.replytype})
    return yield rPool.query(sql);
};
exports.getAutoreplay = getAutoreplay;

let setAutoreplay = function* (data) {
    let _contents = data.contents ? "'" + data.contents + "'" : 'null';
    let _sourceid = data.sourceid ? "'" + data.sourceid + "'" : 'null';
    let conn = yield app.res.getDBWConnection("sr","setAutoreplay");
    try {
        let dbResult = yield conn.beginTransaction();
        let delsql = "DELETE FROM sr_weiapp_autoreply WHERE accountid=@accountid@ AND replytype=@replytype@;";
        delsql = db.makeSQL(delsql,data)
        dbResult = yield conn.query(delsql);
        let insertsql = "INSERT INTO sr_weiapp_autoreply(accountid,wechatid,apprelid,sourcetype,sourceid,keyword,triggertype,replytype,contents,msgtype,statuscode,iscustservice,createdtime,createrid,modifiedtime,modifierid)\
                    VALUES (@accountid,@wechatid,@apprelid,@sourcetype,@sourceid,@keyword,@triggertype,@replytype,@contents,@msgtype,@statuscode,@iscustservice,@createdtime,@createrid,@modifiedtime,@modifierid);";
        insertsql = insertsql.replace("@accountid", "'" + data.accountid + "'");
        insertsql = insertsql.replace("@wechatid", "null");
        insertsql = insertsql.replace("@apprelid", "null");
        insertsql = insertsql.replace("@sourcetype", data.sourcetype);
        insertsql = insertsql.replace("@sourceid", _sourceid);
        insertsql = insertsql.replace("@keyword", "null");
        insertsql = insertsql.replace("@triggertype", data.triggertype);
        insertsql = insertsql.replace("@replytype", data.replytype);
        insertsql = insertsql.replace("@contents", _contents);
        insertsql = insertsql.replace("@msgtype", data.msgtype);
        insertsql = insertsql.replace("@statuscode", data.statuscode);
        insertsql = insertsql.replace("@iscustservice", data.iscustservice);
        insertsql = insertsql.replace("@createdtime", "NOW()");
        insertsql = insertsql.replace("@createrid", "'" + data.userid + "'");
        insertsql = insertsql.replace("@modifiedtime", "NOW()");
        insertsql = insertsql.replace("@modifierid", "'" + data.userid + "'");
        let result = yield conn.query(insertsql);
        dbResult = yield conn.commit();
        return result;
    }catch (e) {
        console.error("系统错误:"+e);
        if (conn) {
            yield conn.rollback();
        }
        throw -1
    }finally {
        if (conn) {
            conn.release();
        }
    }

};
exports.setAutoreplay = setAutoreplay;

let deleteAutoreplay = function* (data) {
    let sql="DELETE FROM sr_weiapp_autoreply WHERE id=@id@";
    sql = db.makeSQL(sql,data)
    return yield wPool.query(sql);
};
exports.deleteAutoreplay = deleteAutoreplay;


let getRuleList =function*(accountid){
    let sql = "select * from sr_weiapp_replyrule where accountid=@accountid";
    sql = sql.replace("@accountid", "'"+accountid+"'" );
    return yield rPool.query(sql);
};
exports.getRuleList = getRuleList;

let getRuleKeywordsList =function*(accountid){
    let sql = "SELECT b.* FROM sr_weiapp_replyrule a \
    INNER JOIN sr_weiapp_autoreply b on a.id=b.sourceid and b.replytype=2\
    WHERE a.accountid=@accountid;";
    sql = sql.replace("@accountid", "'"+accountid+"'" );
    return yield rPool.query(sql);
};
exports.getRuleKeywordsList = getRuleKeywordsList;

let getRuleDetailList =function*(accountid){
    let sql = " SELECT b.*,\
        news.id as newsresid,news.title AS newstitle,mainnews.imageid AS newsimageid,DATE_FORMAT(news.modifiedtime,'%Y-%m-%d %T') AS newstime,\
        img.id AS imageresid,img.fileid AS imageid,\
        radio.id AS radioresid,radio.filename AS radioname,\
        video.id AS videoresid,video.filename AS videoname\
    FROM sr_weiapp_replyrule a\
    INNER JOIN sr_weiapp_replyruledetail b ON a.id=b.ruleid\
    LEFT JOIN sr_weiapp_reply_content news ON b.restype=2 AND b.contents=news.id\
    LEFT JOIN sr_weiapp_news_detail mainnews ON news.id = mainnews.resid AND mainnews.statuscode=1\
    LEFT JOIN sr_weiapp_resource img ON b.restype=3 AND b.contents=img.id\
    LEFT JOIN sr_weiapp_resource radio ON b.restype=4 AND b.contents=radio.id\
    LEFT JOIN sr_weiapp_resource video ON b.restype=5 AND b.contents=video.id\
    WHERE a.accountid=@accountid;";
    sql = sql.replace("@accountid", "'"+accountid+"'" );
    return yield rPool.query(sql);
};
exports.getRuleDetailList = getRuleDetailList;

let setRule = function* (data) {
    let isAdd = data.id ? false : true;
    let conn = yield app.res.getDBWConnection("sr","setRule");
    try {
        let dbResult = yield conn.beginTransaction();
        let sql = "update sr_weiapp_replyrule set accountid=@accountid,rulename=@rulename,sendtype=@sendtype,statuscode=@statuscode,modifiedtime=@modifiedtime,modifierid=@modifierid WHERE id=@id;";
        if (isAdd) {
            sql = "insert into sr_weiapp_replyrule(accountid,rulename,sendtype,statuscode,createdtime,createrid,modifiedtime,modifierid)\
                                VALUES (@accountid,@rulename,@sendtype,@statuscode,@createdtime,@createrid,@modifiedtime,@modifierid);";
        }
        sql = sql.replace("@accountid", "'" + data.accountid + "'");
        sql = sql.replace("@rulename", "'" + data.rulename + "'");
        sql = sql.replace("@sendtype", data.sendtype);
        sql = sql.replace("@statuscode", data.statuscode);
        sql = sql.replace("@createdtime", "NOW()");
        sql = sql.replace("@createrid", "'" + data.userid + "'");
        sql = sql.replace("@modifiedtime", "NOW()");
        sql = sql.replace("@modifierid", "'" + data.userid + "'");
        sql = sql.replace("@id", data.id);
        dbResult = yield conn.query(sql);
        if (isAdd) {
            data.id = dbResult.insertId;
        }
        data.id=parseInt(data.id);
        //****************  删除and插入 关键字autoreply ************
        let sqlArr = [];
        let arr = [];
        let delsql = "delete from sr_weiapp_autoreply where sourceid=@sourceid and sourcetype=@sourcetype";
        delsql = delsql.replace("@sourceid", "'" + data.id + "'");
        delsql = delsql.replace("@sourcetype", 1);
        dbResult = yield conn.query(delsql);
        console.error(JSON.stringify())
        if (data.keywords && data.keywords.length > 0) {
            for (let i = 0; i < data.keywords.length; i++) {
                let insertsql = "INSERT INTO sr_weiapp_autoreply(accountid,wechatid,apprelid,sourcetype,sourceid,keyword,triggertype,replytype,contents,msgtype,statuscode,iscustservice,createdtime,createrid,modifiedtime,modifierid)\
                                        VALUES (@accountid,@wechatid,@apprelid,@sourcetype,@sourceid,@keyword,@triggertype,@replytype,@contents,@msgtype,@statuscode,@iscustservice,@createdtime,@createrid,@modifiedtime,@modifierid);";
                insertsql = insertsql.replace("@accountid", "'" + data.keywords[i].accountid + "'");
                insertsql = insertsql.replace("@wechatid", "null");
                insertsql = insertsql.replace("@apprelid", "null");
                insertsql = insertsql.replace("@sourcetype", data.keywords[i].sourcetype);
                insertsql = insertsql.replace("@sourceid", "'" + data.id + "'");
                insertsql = insertsql.replace("@keyword", "'" +data.keywords[i].keyword+"'" );
                insertsql = insertsql.replace("@triggertype", data.keywords[i].triggertype);
                insertsql = insertsql.replace("@replytype", data.keywords[i].replytype);
                insertsql = insertsql.replace("@contents", data.keywords[i].contents ? "'" + data.keywords[i].contents + "'" : 'null');
                insertsql = insertsql.replace("@msgtype", data.keywords[i].msgtype);
                insertsql = insertsql.replace("@statuscode", data.keywords[i].statuscode);
                insertsql = insertsql.replace("@iscustservice", data.keywords[i].iscustservice);
                insertsql = insertsql.replace("@createdtime", "NOW()");
                insertsql = insertsql.replace("@createrid", "'" + data.userid + "'");
                insertsql = insertsql.replace("@modifiedtime", "NOW()");
                insertsql = insertsql.replace("@modifierid", "'" + data.userid + "'");
                dbResult = yield conn.query(insertsql);
            }
        }
        let delsql1 = "delete from sr_weiapp_replyruledetail where ruleid=@ruleid";
        delsql1 = delsql1.replace("@ruleid", "'" + data.id + "'");
        dbResult = yield conn.query(delsql1);
        if (data.ruledetails && data.ruledetails.length > 0) {
            for (let i = 0; i < data.ruledetails.length; i++) {
                let insertsql = "INSERT INTO sr_weiapp_replyruledetail(ruleid,restype,resid,contents,statuscode,createrid,createdtime,modifierid,modifiedtime)\
                                        VALUES (@ruleid,@restype,@resid,@contents,@statuscode,@createrid,@createdtime,@modifierid,@modifiedtime);";

                insertsql = insertsql.replace("@ruleid", data.id);
                insertsql = insertsql.replace("@restype",data.ruledetails[i].restype);
                insertsql = insertsql.replace("@resid", data.ruledetails[i].resid? "'" + data.ruledetails[i].resid + "'" : 'null');
                insertsql = insertsql.replace("@contents", data.ruledetails[i].contents ? "'" + data.ruledetails[i].contents + "'" : 'null');
                insertsql = insertsql.replace("@statuscode", data.ruledetails[i].statuscode);
                insertsql = insertsql.replace("@createdtime", "NOW()");
                insertsql = insertsql.replace("@createrid", "'" + data.userid + "'");
                insertsql = insertsql.replace("@modifiedtime", "NOW()");
                insertsql = insertsql.replace("@modifierid", "'" + data.userid + "'");
                dbResult = yield conn.query(insertsql);
            }
        }
        dbResult = yield conn.commit();

        return data.id;
    }catch (e) {
        console.error("系统错误:"+e);
        if (conn) {
            yield conn.rollback();
        }
        throw -1
    }finally {
        if (conn) {
            conn.release();
        }
    }
};
exports.setRule = setRule;


let deleteRule = function* (data) {
    let conn = yield app.res.getDBWConnection("sr","setRule");
    try {
        let dbResult = yield conn.beginTransaction();
        let sql = "delete from sr_weiapp_replyruledetail where ruleid=@ruleid";
        sql = sql.replace("@ruleid",  data.id );
        dbResult = yield conn.query(sql);
        let sql1="delete from sr_weiapp_autoreply where sourceid=@sourceid and sourcetype=@sourcetype";
        sql1 = sql1.replace("@sourceid", "'" + data.id + "'");
        sql1 = sql1.replace("@sourcetype", 1);
        dbResult = yield conn.query(sql1);
        let sql2 = "delete from sr_weiapp_replyrule where id=@id";
        sql2 = sql2.replace("@id",  data.id );
        dbResult = yield conn.query(sql2);
        dbResult = yield conn.commit();
        return { code: 0 };
    }catch (e) {
        console.error("系统错误:"+e);
        if (conn) {
            yield conn.rollback();
        }
        throw -1
    }finally {
        if (conn) {
            conn.release();
        }
    }
};
exports.deleteRule = deleteRule;