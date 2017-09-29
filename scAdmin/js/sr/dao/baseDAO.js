/**
 * Created by Ryan on 2016/07/06.
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


exports.getPointMultiple = function* (condition) {
    var _sql = "";
    if (condition.param == "1") {
        _sql = "select keyname, c.* ,2 as newtypecode,keycode as newobjectid from sc_code a inner join  (select id  from  sc_code where istoplevel in(select id from sc_code where keyname='cardlevel') )b on a.id=b.id left join sr_point_multiple c on c.objectid=a.keycode and typecode=2";
    }
    else if (condition.param == "2") {
        _sql = "select a.name,b.*,1 as newtypecode,innerid as newobjectid from sc_shop a left join sr_point_multiple b on a.innerid=b.objectid and typecode=1";
    }
    else if (condition.param == "3") {
        _sql = "select keyname,c.*,2 as newtypecode,keycode as newobjectid from sc_code a inner join  (select id  from  sc_code where istoplevel in(select id from sc_code where keyname='cardlevel') and keyname=@id@)b on a.id=b.id left join sr_point_multiple c on c.objectid=a.keycode and typecode=2";
    }
    else if (condition.param == "4") {
        _sql = "select a.name,b.*,1 as newtypecode,innerid as newobjectid  from sr_shop a left join sr_point_multiple b  on a.innerid=b.objectid and typecode=1 left join sc_code c on c.keycode=ifnull(industryid_code,0) and istoplevel in (select id from sc_code where keyname='sc_industry')  where c.keyname='" + condition.id + "'";
    }
    else if (condition.param == "5") {
        _sql = "select a.name,b.*,1 as newtypecode,innerid as newobjectid from sc_shop a left join sr_point_multiple b  on a.innerid=b.objectid and typecode=1 where a.innerid=@id@";
    }
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    return result;
}

exports.getPointMultipleTree = function* () {

    var _sql = "select keyname as id,keyname as text,'cardlevel' as pid,sortno as seqno, 3 as param from sc_code where istoplevel in( select id from sc_code where keyname='cardlevel') \
    union \
    select keyname as id, keyname as text, 'shop' as pid, sortno as seqno, 4 as param from sc_code where istoplevel in (select id from sc_code where keyname = 'sc_industry') \
union \
select innerid as id, name as text, concat('sc_industry_', ifnull(industryid_code, '0')) as pid, 0 as seqno, 5 as param from sr_shop";
    //执行SQL
    let result = yield rPool.query(_sql);
    return result;
};

exports.getPointMultipleCount = function* (condition) {
    var _sql, _condition;
    //默认值
    _condition = '';
    if (condition) {
        _condition = condition.typecode ? " and a.typecode=@typecode@" : "";
        _condition = condition.objectid ? " and s.name=@objectid@" : "";
    }

    _sql = " select count(1) as totalcount from sr_point_multiple where 1=1 " + _condition;
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    return result;
};

exports.pointMultipleSave = function* (pointMultiple) {
    var sql = '';
    pointMultiple.data.forEach(function (item, index) {
        item.discount = item.discount?item.discount:null
        item.cumulativeamount = item.cumulativeamount?item.cumulativeamount:null
        item.iscumulative = item.iscumulative?item.iscumulative:0
        item.multiple = item.multiple?item.multiple:null
        if (item.id == null || item.id == '' || item.id < 0) {
            sql += "insert into sr_point_multiple(typecode,objectid,multiple,iscumulative,cumulativeamount,createrid,createdtime,discount) value " +
                "(@newtypecode@,@newobjectid@,@multiple@,@iscumulative@,@cumulativeamount@,'todo',now(),@discount@);";
            sql = db.makeSQL(sql, item);
        }
        else {
            sql += "update sr_point_multiple set multiple=@multiple@,iscumulative=@iscumulative@,cumulativeamount=@cumulativeamount@,discount=@discount@,modifiedtime=now() where id=@id@;";
            sql = db.makeSQL(sql, item);
        }
    });
    let result = yield wPool.query(sql);
    return result;
}



exports.getTempMsgList = function* (data) {
    let sql = "select * from cf_template_setting where source_type=@source_type@;";
    sql = db.makeSQL(sql, data);
    return yield rPool.query(sql);
};

exports.getTempMsgCount = function* (data) {
    let sql = " select count(1) as totalcount from cf_template_setting where source_type=@source_type@;";
    sql = db.makeSQL(sql, data);
    return yield rPool.query(sql);
};

exports.searchTempMsg = function* (data) {
    var sql = "select * from cf_template_setting where `key` =@key@";
    sql = db.makeSQL(sql, data);
    return yield rPool.query(sql);
}

exports.tempMessageUpdate = function* (data) {
    let channel = ""
    if(data.channel){
        channel=data.channel
    }
    var sql = "update cf_template_setting set `name`=@name@,`desc`=@desc@,model=@model@,wechat_detail_info=@wechat_detail_info@,channel='["+channel+"]',info='"+JSON.stringify(data.info)+"',example='"+JSON.stringify(data.example)+"',modifierid=@modifierid@,modifiedtime=now() where `key` = @key@";
    sql = db.makeSQL(sql, data);
    let result = yield wPool.query(sql);
    return result;
}


exports.getJobList = function* (condition, sort, page) {
    var _sql = '', _condition = '', _sortAndPage = {};

    //定义字段
    var _fields = " innerid,name,is_active,next_time,type,last_status ";

    //处理查询条件
    if (condition) {
        _condition += condition.taskname ? " and name=@taskname@" : "";
        _condition += condition.runninglevel ? " and last_status=@runninglevel@" : "";
        _condition += condition.isenabled ? " and is_active=@isenabled@" : "";
    }
    //处理排序和分页

    _sortAndPage = comm.sortAndPage(sort, page);
    if (sort && sort.name) {
        if (sort.type) {
            _sortAndPage.sort = ' ORDER BY ' + sort.name + ' ' + sort.type;
        }
        else {
            _sortAndPage.sort = ' ORDER BY ' + sort.name + ' DESC ';
        }
    }

    //定义表
    var _tableName = "sc_task"

    //拼接sql
    _sql = "select " + _fields + " from " + _tableName + " where is_once_task = 0 " + _condition + _sortAndPage.sort + _sortAndPage.page;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    return result;
};

exports.getJobLogList = function* (condition, sort, page) {
    var _sql, _sortAndPage;

    //定义字段
    var _fields = " innerid,name,begin_time,status";

    _sortAndPage = comm.sortAndPage(sort, page);
    //定义表
    var _tableName = "sc_task_run_time"

    //拼接sql
    _sql = "select " + _fields + " from sc_task_run_time where task_id=@id@  order by begin_time desc" + _sortAndPage.page;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    return result;
};

exports.delJob = function* (taskid) {
    var sql = "delete from sr_sys_schedule_task where id=@id@" + taskid;
    sql = db.makeSQL(sql, { id: taskid });
    let result = yield wPool.query(sql);
    return result;
}

exports.getJobListCount = function* (condition) {
    var _sql, _condition = '';
    var _tableName = "sc_task ";
    //默认值
    if (condition) {
        _condition += condition.taskname ? " and name=@taskname@" : "";
        _condition += condition.runninglevel ? " and last_status=@runninglevel@" : "";
        _condition += condition.isenabled ? " and is_active=@isenabled@" : "";
    }
    //处理查询条件
    _sql = " select count(1) as totalcount from " + _tableName + " where  is_once_task = 0" + _condition;
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    return result;
};

exports.getJobLogListCount = function* (condition) {
    //处理查询条件
    var _sql = " select count(1) as totalcount from sc_task_run_time where task_id=@id@";
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    return result;
};



exports.getAllShop = function* (orgwhere) {
    var sql = "select * from sr_shop where 1=1 " + (orgwhere ? orgwhere : "");
    let result = yield rPool.query(sql);
    return result;
}

exports.getTaskByID = function* (id) {
    var sql = "select * from sc_task where innerid=@id@";
    sql = db.makeSQL(sql,{id:id})
    let result = yield rPool.query(sql);
    return result;
}
