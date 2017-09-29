'use strict'
let sc = require('smartacjs'),
    uuid = sc.guid(),
    app = sc.app(),
    _ = sc._,
    config = app.conf,
    promise = sc.Promise,
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');

/**
 *  查询列表信息(分页)
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 */
let getAccountList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;
    //定义字段
    let _fields = "t.*,o.name as shopname,'' as accountnumber ";
    //处理查询条件
    _condition = getWhereCondition(condition);
    //处理排序和分页
    _sortAndPage = comm.sortAndPage(sort, page);
    if (sort && sort.column) {
        if (sort.type) {
            _sortAndPage.sort = 'ORDER BY ' + "t." + sort.column + ' ' + sort.type;
        }
        else {
            _sortAndPage.sort = 'ORDER BY ' + "t." + sort.column + ' DESC ';
        }
    }
    //定义表
    let _tableName = " cf_account t left join sc_org o on t.org_id = o.innerid  ";

    //拼接sql
    _sql = "select " + _fields + " from " + _tableName  + " where " + _condition +_sortAndPage.sort + _sortAndPage.page ;
    _sql = db.makeSQL(_sql,condition)
    //执行SQL
    return yield rPool.query(_sql);
};

/**
 *  查询总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
let getAccountCount = function* (condition, callback) {
    let _sql, _condition;
    let _tableName = " cf_account t left join sc_org o on t.org_id = o.innerid  ";

    //默认值
    _condition = getWhereCondition(condition);
    //处理查询条件
    _sql = " select count(1) as count from " + _tableName + " where " + _condition;
    _sql = db.makeSQL(_sql,condition)
    //执行SQL
    return yield rPool.query(_sql);
};

//查询条件
function getWhereCondition(condition) {
    let _whereSql = " 1=1 and function_mask like '1%'  ";

    if (condition && condition != {}) {
        if (condition.accounttype) {
            _whereSql += " and t.method_code=@accounttype@";
        }
        if (condition.name) {
            _whereSql += " and t.name like '%@name@%'";
        }
    }
    _whereSql += " ";
    return _whereSql;
}

let getAllAccounts=function*() {
    let _sql = "select * from cf_account where function_mask like '1%'  ;";
    //执行SQL
    return yield rPool.query(_sql);
}

let getMenusByAccount=function*(id) {
    //menu主信息
    let _sql = "select t.*,acc.name as accountname from sr_weiapp_wechatmenu t left join cf_account acc on t.accountid=acc.innerid where t.accountid=@id@;";

    //menu明细信息
    _sql += " select menudetail.*,autoreply.msgtype,autoreply.contents as replytext,imageResource.fileid as imageid,radioResource.fileid as radioid,videoResource.fileid as videoid, \
    ifnull(newsResource.title,'') as newstitle,ifnull(mainNews.imageid,'') as newsimageid,ifnull(newsResource.datajson,'') as newsjson,newsResource.datatype as newstype,\
    ifnull(imageResource.filename,'') as imagename,ifnull(radioResource.filename,'') as radioname,ifnull(videoResource.filename,'') as videoname    \
    from sr_weiapp_menudetail menudetail    \
    left join sr_weiapp_wechatmenu menu on menudetail.menuid = menu.innerid \
    left join sr_weiapp_autoreply  autoreply on  autoreply.sourceid=menudetail.innerid and  autoreply.sourcetype=10 \
    left join sr_weiapp_resource	imageResource on autoreply.msgtype=3 and autoreply.contents=imageResource.id    \
    left join sr_weiapp_resource  radioResource on autoreply.msgtype=4 and autoreply.contents=radioResource.id  \
    left join sr_weiapp_resource  videoResource on autoreply.msgtype=5 and autoreply.contents=videoResource.id	 \
    left join sr_weiapp_reply_content newsResource on autoreply.msgtype=2 and autoreply.contents=newsResource.id	 \
    left join sr_weiapp_news_detail mainNews on newsResource.id = mainNews.resid and mainNews.statuscode=1	 \
    where menu.accountid=@id@ order by menudetail.position asc;";
    //msgtype: 3,图片   4,音频   5,视频   2,图文消息
    _sql = db.makeSQL(_sql,{id:id})
    //执行SQL
    return yield rPool.query(_sql);
};


let getMenuSource=function*() {
    let _sql = "select * from sr_weiapp_menuresource;"
    //执行SQL
    return yield rPool.query(_sql);
};


let saveMenus = function*(menuEntity) {
    let sqlToCheckExist = "select COUNT(1) AS count from sr_weiapp_wechatmenu where innerid=@innerid@;";
    sqlToCheckExist = db.makeSQL(sqlToCheckExist,{innerid:menuEntity.innerid})
    let result = yield rPool.query(sqlToCheckExist);
    let count = result[0].count;
    let _sql = "";
    if (count > 0) {
        //更新
        _sql = "update sr_weiapp_wechatmenu   \
                    set accountid=@accountid@,\
                        syncjson=@syncjson@,\
                        statuscode=@statuscode@,\
                        modifierid=@modifierid@,\
                        modifiedtime=now()\
                    where innerid=@innerid@;";
        _sql = db.makeSQL(_sql, menuEntity)
        if (menuEntity.menuDetails.length > 0) {
            menuEntity.menuDetails.forEach(function (item, index) {
                if (item.rowState == 3) {
                    //删除
                    _sql += getDeleteDetailSql(item.innerid);
                } else if (item.rowState == 1) {
                    //新增
                    _sql += getInsertDetailSql(item, menuEntity.accountid);
                } else {
                    //更新
                    _sql += getUpdateDetailSql(item, menuEntity.accountid);
                }
            });
        }

    } else {
        //新增
        _sql = "insert into sr_weiapp_wechatmenu(innerid,accountid,syncjson,statuscode,createrid,createdtime,modifierid,modifiedtime) \
                    values(@innerid@,@accountid@,@syncjson@,1,@createrid@,NOW(),@modifierid@,now());"
        _sql = db.makeSQL(_sql, menuEntity)
        if (menuEntity.menuDetails.length > 0) {
            menuEntity.menuDetails.forEach(function (item, index) {
                _sql += getInsertDetailSql(item, menuEntity.accountid);
            });
        }

    }
    return yield wPool.query(_sql);
}

function getInsertDetailSql(menuDetail,accounid) {
    if(menuDetail.msgtype==undefined ||menuDetail.msgtype.length ==0 ) {
        menuDetail.msgtype = 2;
    }
    let sql = "insert into sr_weiapp_menudetail(innerid,menuid,menuname,menukey,menutype,parentid,level,position,createrid,createdtime,modifierid,modifiedtime)\
    values(@innerid@,@menuid@,@menuname@,@menukey@,@menutype@,@parentid@,@level@,@position@,@createrid@,NOW(),@modifierid@,now());"
    sql = db.makeSQL(sql, menuDetail)
    if (menuDetail.menutype == 'click') {
        //插入数据到自动回复表
        sql += "insert into sr_weiapp_autoreply(accountid,wechatid,apprelid,sourcetype,sourceid,keyword,triggertype,replytype,contents,msgtype,ranknum,statuscode,iscustservice,createrid,createdtime,modifierid,modifiedtime)  \
        values(@accounid@,'','',10,@innerid@,'',1,4,@replytext@,@msgtype@,1,1,0,@createrid@,now(),@modifierid@,now());";
        sql = db.makeSQL(sql, {
            accounid: accounid,
            innerid: menuDetail.innerid,
            createrid: menuDetail.createrid,
            modifierid: menuDetail.modifierid,
            replytext: menuDetail.replytext,
            msgtype: menuDetail.msgtype
        })
    }
    return sql;
}

function getUpdateDetailSql(menuDetail,accounid) {
    if(menuDetail.msgtype==undefined ||menuDetail.msgtype.length ==0 ) {
        menuDetail.msgtype = 2;
    }

    let sql= "update sr_weiapp_menudetail \
    set menuid=@menuid@,  \
        menuname=@menuname@,\
        menukey=@menukey@,\
        menutype=@menutype@,\
        parentid=@parentid@,\
        level=@level@,\
        position=@position@,\
        modifierid=@modifierid@,\
        modifiedtime=now() \
        where innerid=@innerid@;";

    sql+="delete from sr_weiapp_autoreply where sourcetype=10 and sourceid=@innerid@;";
    sql = db.makeSQL(sql, menuDetail)

    if (menuDetail.menutype == 'click') {
        //插入数据到自动回复表
        sql += "insert into sr_weiapp_autoreply(accountid,wechatid,apprelid,sourcetype,sourceid,keyword,triggertype,replytype,contents,msgtype,ranknum,statuscode,iscustservice,createrid,createdtime,modifierid,modifiedtime)  \
        values(@accounid@,'','',10,@innerid@,'',1,4,@replytext@,@msgtype@,1,1,0,@createrid@,now(),@modifierid@,now());";
        sql = db.makeSQL(sql, {
            accounid: accounid,
            innerid: menuDetail.innerid,
            createrid: menuDetail.createrid,
            modifierid: menuDetail.modifierid,
            replytext: menuDetail.replytext,
            msgtype: menuDetail.msgtype
        })
    }

    return sql;
}

function getDeleteDetailSql(detailId) {
    let sql = "delete from sr_weiapp_menudetail where innerid=@detailId@;"
    sql += "delete from sr_weiapp_autoreply where sourcetype=10 and sourceid=@detailId@;";
    sql = db.makeSQL(sql,{detailId:detailId})
    return sql;
}


exports.getAccountList = getAccountList
exports.getAccountCount = getAccountCount;
exports.getMenusByAccount = getMenusByAccount;
exports.getMenuSource = getMenuSource;
exports.saveMenus = saveMenus;
exports.getAllAccounts=getAllAccounts;