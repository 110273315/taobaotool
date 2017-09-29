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
let getNewsList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;
    //定义字段
    let _fields = "t.*,d.url,d.imageid,d.remark,'' as details ";
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
    let _tableName = "sr_weiapp_reply_content t \
    left join sr_weiapp_news_detail d on t.id =d.resid and d.statuscode=1  ";
    //拼接sql
    _sql = "select " + _fields + " from " + _tableName  + " where " + _condition +_sortAndPage.sort + _sortAndPage.page +";";
    //执行SQL
    return yield rPool.query(_sql);
};

/**
 *  查询总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
let getNewsCount = function* (condition, callback) {
    let _sql, _condition;
    let _tableName = "sr_weiapp_reply_content t \
    left join sr_weiapp_news_detail d on t.id =d.resid and d.statuscode=1  ";
    //默认值
    _condition = getWhereCondition(condition);
    //处理查询条件
    _sql = " select count(1) as count from " + _tableName + " where " + _condition +";";
    //执行SQL
    return yield rPool.query(_sql);
};

//查询条件
function getWhereCondition(condition) {
    let _whereSql = " 1=1 AND t.statuscode=1 ";
    //增加id选择
    if (condition && condition != {}) {
        if (condition.id) {
            _whereSql += " and t.id=" + condition.id +" ";
        }
    }
    /*
     if (condition && condition != {}) {
     if (condition.filetype) {
     _whereSql += " and t.filetype=" + condition.filetype;
     }

     if (condition.groupid) {
     _whereSql += " and t.groupid=" + condition.groupid;
     }
     if (condition.filename) {
     _whereSql += " and t.filename like '%" + condition.filename + "%'";
     }
     }
     _whereSql +=" ";
     */
    return _whereSql;
}

let insertNews  = function* (newsEntity,callback) {

    //替换标题、作者、摘要中的双引号和反斜杠
    newsEntity.title = newsEntity.title.replace(/\\/g, "").replace(/"/g, "").replace(/\'/g, "");

    let _sql = " insert into sr_weiapp_reply_content(weiappid,accountid,title,orderno,datatype,datajson,statuscode,jsonfileid,jsonfileid2,createrid,createdtime,modifierid,modifiedtime) \
                        values(@weiappid@,@accountid@,@title@,@orderno@,@datatype@,@datajson@,@statuscode@,@jsonfileid@,@jsonfileid2@,@createrid@,NOW(),@modifierid@,now());";
    _sql = db.makeSQL(_sql, newsEntity)
    if (newsEntity.newsDetails.length > 0) {
        newsEntity.newsDetails.forEach(function (item, index) {
            //替换标题、作者、摘要中的双引号和反斜杠
            item.title = item.title.replace(/\\/g, "").replace(/"/g, "").replace(/\'/g, "");
            item.author = item.author.replace(/\\/g, "").replace(/"/g, "").replace(/\'/g, "");
            item.remark = item.remark.replace(/\\/g, "").replace(/"/g, "").replace(/\'/g, "");
            _sql += " insert into sr_weiapp_news_detail(resid,title,author,imageid,contents,url,orderno,hits,isshowpic,statuscode,remark,contentImageList,createrid,createdtime,modifierid,modifiedtime) \
            select max(id),@title@,@author@,@imageid@,@contents@,@url@,@orderno@,@hits@,@isshowpic@,@statuscode@,@remark@,@contentImageList@,@createrid@,now(),@modifierid@,now() from sr_weiapp_reply_content;";
            _sql = db.makeSQL(_sql,item)
        });
    }

    _sql += " select max(id) as id from sr_weiapp_reply_content;"

    //执行SQL
    return yield wPool.query(_sql);
}

//let addDetail= function(newsDetailEntity,callback) {
//    let _sql = getInsertDetailSql(newsDetailEntity)
//    //执行SQL
//    console.error("sql:" + _sql);
//    return _dao(function () {
//        this.conn.query(_sql)
//            .then(function (result) {
//                getNews( item.resid,callback);
//                //callback(null, result);
//            })
//            .catch(function (err) {
//                callback(err, null);
//            })
//    })
//}

function getUpdateDetailSql(detail) {
    let _sql = "update sr_weiapp_news_detail   \
        set	resid=@resid@,\
            title=@title@,\
            author=@author@,\
            imageid=@imageid@,\
            contents=@contents@,\
            url=@url@,\
            orderno=@orderno@,\
            hits=@hits@,\
            isshowpic=@isshowpic@,\
            statuscode=@statuscode@,\
            remark=@remark@,\
            contentImageList=@contentImageList@,\
            modifierid=@modifierid@,\
            modifiedtime=NOW() \
        where id=@id@;";
    _sql = db.makeSQL(_sql, detail)
    return _sql;
}

function getInsertDetailSql(item) {
    let _sql = " insert into sr_weiapp_news_detail(resid,title,author,imageid,contents,url,orderno,hits,isshowpic,statuscode,remark,contentImageList,createrid,createdtime,modifierid,modifiedtime) \
            select @resid@,@title@,@author@,@imageid@,@contents@,@url@,@orderno@,@hits@,@isshowpic@,@statuscode@,@remark@,@contentImageList@,@createrid@,now(),@modifierid@,now() from sr_weiapp_reply_content limit 1;";
    _sql = db.makeSQL(_sql,item)
    return _sql;
}

let updateNews = function* (newsEntity) {
    //替换标题、作者、摘要中的双引号和反斜杠
    newsEntity.title = newsEntity.title.replace(/\\/g, "").replace(/"/g, "").replace(/\'/g, "");

    let _sql = "update sr_weiapp_reply_content    \
    set weiappid=@weiappid@,    \
        accountid=@accountid@,   \
        title=@title@,\
        orderno=@orderno@,      \
        datatype=@datatype@,     \
        datajson=@datajson@,   \
        statuscode=@statuscode@,   \
        jsonfileid=@jsonfileid@, \
        jsonfileid2=@jsonfileid2@, \
        modifierid=@modifierid@,   \
        modifiedtime=now()  \
    where id=@id@;"
    _sql = db.makeSQL(_sql, newsEntity)
    if (newsEntity.newsDetails != null && newsEntity.newsDetails.length > 0) {
        newsEntity.newsDetails.forEach(function (item, index) {

            //替换标题、作者、摘要中的双引号和反斜杠
            item.title = item.title.replace(/\\/g, "").replace(/"/g, "").replace(/\'/g, "");
            item.author = item.author.replace(/\\/g, "").replace(/"/g, "").replace(/\'/g, "");
            item.remark = item.remark.replace(/\\/g, "").replace(/"/g, "").replace(/\'/g, "");
            if (item.id < 0) {
                //新增
                item.resid = newsEntity.id;
                _sql += getInsertDetailSql(item);
            } else {
                if (item.rowState == 3) {
                    //3删除
                    _sql += " delete from sr_weiapp_news_detail where id=" + item.id + ";"
                } else {
                    //2修改
                    _sql += getUpdateDetailSql(item);
                }
            }
        });
    }

    //执行SQL
    return yield wPool.query(_sql);
};

let getNews=function* (id,callback) {
    let _sql = "select * from sr_weiapp_reply_content where id=@id@; \
    select * from sr_weiapp_news_detail where resid=@id@;"
    //执行SQL
    _sql = db.makeSQL(_sql,{id:id})
    return yield rPool.query(_sql);
};

let deleteNews=function* (id,callback) {
    let _sql = "delete from sr_weiapp_reply_content where id=@id@; \
    delete from sr_weiapp_news_detail where resid=@id@;"
    //执行SQL
    _sql = db.makeSQL(_sql,{id:id})
    return yield wPool.query(_sql);
};

//let deleteDetail=function(id,callback) {
//    let _sql = " delete from sr_weiapp_news_detail where id=" + id + ";"
//
//    //执行SQL
//    console.error("sql:" + _sql);
//    return _dao(function () {
//        this.conn.query(_sql)
//            .then(function (result) {
//                console.error("deleteDetail:" + JSON.stringify(result));
//                callback(null, result);
//            })
//            .catch(function (err) {
//                callback(err, null);
//            })
//    })
//};

let getOpenid=function* (mobile,accountid) {
    let _sql = "select openid from sr_cust_customer where accountid=@accountid@ and mobile=@mobile@;"
    _sql = db.makeSQL(_sql,{accountid:accountid,mobile:mobile})
    return yield rPool.query(_sql);
}

//分组查询、保存、删除
exports.getNewsList = getNewsList;
exports.getNewsCount = getNewsCount;
exports.insertNews = insertNews;
exports.updateNews = updateNews;
//exports.addDetail = addDetail;
exports.getNews=getNews;
exports.deleteNews=deleteNews;
//exports.deleteDetail=deleteDetail;
exports.getOpenid =getOpenid;
