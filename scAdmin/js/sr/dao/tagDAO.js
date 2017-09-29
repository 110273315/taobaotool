/**
 * Created by Ryan on 2015/11/23 0023.
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

/*
* 根据主键,获取标签
* */
exports.getTagById = function* (tagId) {
    let sql = "select * from sr_tag_tag a where a.id=@tagId@";
    sql = db.makeSQL(sql, { tagId: tagId });
    let result = yield rPool.query(sql);
    return result;
}

exports.updateTaskId = function* (tagid, taskid) {
    let sql = "update sr_tag_tag set taskid=@taskid@  where id=@tagId@";
    sql = db.makeSQL(sql, { tagId: tagid, taskid: taskid });
    let result = yield wPool.query(sql);
    return result;
}


/*
* 新增标签
* */
exports.addTag = function* (tag) {
    let validatesql = "select count(1) as count from sr_tag_tag where tagname=@tagname@ and isdeleted=0";
    validatesql = db.makeSQL(validatesql, tag);
    let result = yield rPool.query(validatesql);
    if (result[0].count > 0) {
        return { code: 2 };
    }
    else {
        let addTagSql = "INSERT INTO sr_tag_tag(tagname,taghotcount,tagsqldesc,isenabled,isdeleted,channelcode,createrid,createdtime,orgid,tagsqljson,jobtype,periodcode,starttime,filtertext) VALUES (@tagname@,0,@tagsqldesc@,1,0,1,'',NOW(),@orgid@,@tagsqljson@,@jobtype@,@periodcode@,@starttime@,@filtertext@);";
        addTagSql = db.makeSQL(addTagSql, tag);
        result = yield wPool.query(addTagSql);
        return result;
    }
}


/*
* 修改标签
* */
exports.editTag = function* (tag) {
    let validatesql = "select count(1) as count from sr_tag_tag where tagname=@tagname@ and isdeleted=0 and id<>@id@";
    validatesql = db.makeSQL(validatesql, tag);
    let result = yield rPool.query(validatesql);
    if (result[0].count > 0) {
        return { code: 2 };
    }
    else {
        let editTagSql = "UPDATE sr_tag_tag SET tagname =@tagname@,tagsqldesc=@tagsqldesc@,tagsqljson=@tagsqljson@,jobtype=@jobtype@,periodcode=@periodcode@,starttime=@starttime@,modifiedtime = NOW(),filtertext=@filtertext@ WHERE id =@id@";
        editTagSql = db.makeSQL(editTagSql, tag);
        result = yield wPool.query(editTagSql);
        return result;
    }
}


/*
* 标签状态修改
* */
exports.tagStatusEdit = function* (innerid) {
    let tagStatusSql = "UPDATE sr_tag_tag SET isenabled=ABS(isenabled-1),modifiedtime = NOW() WHERE id=@id@";
    tagStatusSql = db.makeSQL(tagStatusSql, { id: innerid });
    let result = yield wPool.query(tagStatusSql);
    return result;
}


/*
* 删除标签
* */
exports.tagDel = function* (innerid) {
    var tagDelSql = "UPDATE sr_tag_tag SET isdeleted=1,modifiedtime = NOW() WHERE id=@id@";
    tagDelSql = db.makeSQL(tagDelSql, { id: innerid });
    let result = yield wPool.query(tagDelSql);
    return result;
}


/*
 * 标签列表数据
 * */
exports.getTagList = function* (condition, sort, page) {
    let sqlWhere = '';
    if (condition) {
        if (condition.tagname) {
            sqlWhere += " and a.tagname like concat('%',@tagname@,'%')";
        }
        if (condition.jobstatus) {
            sqlWhere += " and c.is_active=@jobstatus@";
        }
        if (condition.tagstatus) {
            sqlWhere += " and a.isenabled=@tagstatus@";
        }
        if (condition.orgids) {
            sqlWhere += " and a.orgid in ('" + condition.orgids.join(',').replace(/,/g, "\',\'") + "')";
        }
    }
    let _sortAndPage = comm.sortAndPage(sort, page);
    let sql = "select a.id,a.tagname,a.taghotcount,a.isenabled," +
        "periodcode," +
        "concat('tag_jobfrequency_', ifnull(periodcode,'')) as periodtext," +
        "ifnull(starttime,'') as starttime, concat('jobstatus_',ifnull(c.is_active,''))  as jobstatus, a.isenabled,a.jobtype from sr_tag_tag a left join sc_task c on c.innerid=a.taskid and c.is_once_task=0 " +
        "  where a.isdeleted<>1 " + sqlWhere + " " + _sortAndPage.sort + _sortAndPage.page + "    ; ";

    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;

}

/*
* 标签列表数量
* */
exports.getTagCount = function* (condition) {
    let sqlWhere = '';
    if (condition) {
        if (condition.tagname) {
            sqlWhere += " and a.tagname like concat('%',@tagname@,'%')";
        }
        if (condition.jobstatus) {
            sqlWhere += " and c.is_active=@jobstatus@";
        }
        if (condition.tagstatus) {
            sqlWhere += " and a.isenabled=@tagstatus@";
        }
         if (condition.orgids) {
            sqlWhere += " and a.orgid in ('" + condition.orgids.join(',').replace(/,/g, "\',\'") + "')";
        }
    }
    var sql = "select count(a.id) as TotalCount from sr_tag_tag a left join sc_task c on c.innerid=a.taskid and c.is_once_task=0 where a.isdeleted<>1" + sqlWhere + ";";

    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}

/*
* 标签日志列表
* */
exports.getTagTaskList = function* (condition, sort, page) {

    let _sortAndPage = comm.sortAndPage(sort, page);

    let sql = "SELECT a.id AS innerid,b.tagname, concat('historytype_',a.historytype) as historytype,concat('historysource_', a.historysource) as historysource,a.createdtime," +
        "(SELECT count(custid) FROM sr_tag_cust c WHERE c.taskid=a.id AND c.tagid=a.tagid) AS custnumber " +
        "FROM sr_tag_task a INNER JOIN sr_tag_tag b ON b.id=a.tagid  WHERE b.id=@tagid@ " + _sortAndPage.sort + _sortAndPage.page + ";";
    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}

/*
* 新增标签任务
* */
exports.addTagTask = function* (tagtask) {
    let sql = 'insert into sr_tag_task (orgid,historytype,historysource,tagid,isusetagsql,custlist,tagsql,isactivities,createrid,createdtime) ' +
        "value(@orgid@,@historytype@ ,@historysource@,@tagid@,@isusetagsql@,@custlist@,@tagsql@,0,@createrid@,now());";
    sql = db.makeSQL(sql, tagtask);
    let result = yield wPool.query(sql);
    return result;
}

/*
* 标签日志总数
* */
exports.getTagTaskCount = function* (condition) {
    var sql = "SELECT count(a.id) as count " +
        "FROM sr_tag_task a INNER JOIN sr_tag_tag b ON b.id=a.tagid WHERE b.id=@tagid@";

    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}


/*
 * 标签日志详情列表
 * */
exports.getTagTaskDetailList = function* (condition, sort, page) {
    let sqlWhere = '';
    if (condition) {
        sqlWhere += " AND c.taskid=@taskid@";
    }
    let _sortAndPage = comm.sortAndPage(sort, page);

    let sql = "SELECT b.id,b.fullname FROM sr_tag_cust c left JOIN sr_cust_customer b ON c.custid=b.id WHERE 1=1 " + sqlWhere + _sortAndPage.page + ";";

    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}

/*
 * 标签日志详情列表总数
 * */
exports.getTagTaskDetailCount = function* (condition) {
    let sqlWhere = '';
    if (condition) {
        sqlWhere += " AND c.taskid=@taskid@";
    }

    let sql = "SELECT count(b.id) as count " +
        "FROM sr_tag_cust c JOIN sr_cust_customer b ON c.custid=b.id WHERE 1=1 " + sqlWhere + ";";

    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}

/*
 * 所有客户标签
 * */
exports.getTagByCustId = function* (condition) {
    let sql = "SELECT t.id,t.tagname FROM sr_tag_cust c JOIN sr_tag_tag t ON t.id=c.tagid WHERE t.isdeleted=0 and c.custid=@id@";
    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}


/*
 * 客户标签列表
 * */
exports.getTagByCustIdList = function* (condition, sort, page) {
    let sqlWhere = '';
    if (condition) {
        sqlWhere += " AND  c.custid=@custid@";
    }
    let _sortAndPage = comm.sortAndPage(sort, page);

    let sql = "SELECT t.id,t.tagname FROM sr_tag_cust c JOIN sr_tag_tag t ON t.id=c.tagid WHERE 1=1  " + sqlWhere + _sortAndPage.sort + ";";
    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}


/*
 *  客户标签列表总数
 * */
exports.getTagByCustIdCount = function* (condition) {
    let sqlWhere = '';
    if (condition) {
        sqlWhere += " AND  c.custid=@custid@";
    }

    let sql = "SELECT count(c.id) as count FROM sr_tag_cust c JOIN sr_tag_tag t ON t.id=c.tagid WHERE 1=1 " + sqlWhere + ";";

    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}


/*
 *  查询所有标签
 * */
exports.searchTagAll = function* (req) {
    var sql = "select id ,tagname from sr_tag_tag where isdeleted=0 and isenabled=1 order by   createdtime desc";
    let result = yield rPool.query(sql);
    return result;
}


/*
 *  会员详情列表
 * */
exports.getCustPreList = function* (condition, sort, page) {
    var sqlWhere = '';
    if (condition.fullname) {
        sqlWhere += " AND  fullname like  concat('%',@fullname@,'%') ";
    }

    if (condition.mobile) {
        sqlWhere += " AND  mobile like concat('%',@mobile@,'%') ";
    }

    if (condition.gendercode) {
        sqlWhere += " AND  gendercode =@gendercode@";
    }
    let _sortAndPage = comm.sortAndPage(sort, page);

    var sql = "select fullname,mobile,gendercode from sr_tag_cust a left join sr_cust_customer c on c.id=a.custid WHERE tagid=@id@ "
        + sqlWhere + _sortAndPage.sort + ',c.createdtime desc ' + _sortAndPage.page + ";";
    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}

exports.getCustPreListReportSQL = function* (condition) {
    var sqlWhere = '';
    if (condition.fullname) {
        sqlWhere += " AND  fullname like  concat('%',@fullname@,'%') ";
    }

    if (condition.mobile) {
        sqlWhere += " AND  mobile like concat('%',@mobile@,'%') ";
    }

    if (condition.gendercode) {
        sqlWhere += " AND  gendercode =@gendercode@";
    }
    var sql = "SELECT fullname as '姓名',mobile as '手机号',(CASE gendercode WHEN 1 THEN '男' WHEN 2 THEN '女' ELSE '' END) AS '性别' from sr_tag_cust a left join sr_cust_customer c on c.id=a.custid WHERE tagid=@id@ "
        + sqlWhere + ";";

    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(14,1,now(),'" + condition.userid + "')";
    sql = db.makeSQL(sql, condition);
    let result = yield wPool.query(exportsql);
    let res = {};
    res.sql = sql;
    res.insertId = result.insertId;
    return res;
}


/*
 * 
 * */
exports.getCustPreListCount = function* (condition) {
    var sqlWhere = '';
    if (condition.fullname) {
        sqlWhere += " AND  fullname like  concat('%',@fullname@,'%') ";
    }

    if (condition.mobile) {
        sqlWhere += " AND  mobile like concat('%',@mobile@,'%') ";
    }

    if (condition.gendercode) {
        sqlWhere += " AND  gendercode =@gendercode@";
    }

    var sql = "SELECT count(1) as count from sr_tag_cust a left join sr_cust_customer c on c.id=a.custid WHERE tagid=@id@ " + sqlWhere + ";";

    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}