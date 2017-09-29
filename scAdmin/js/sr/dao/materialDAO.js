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

let getGroupList = function* (condition) {
    //let _sql = "select groupId,groupName from sr_weiapp_resource_group;";
    let _sql = "select  \
    -1 AS groupid,\
    '' as groupname,\
        (select count(1) as count from sr_weiapp_resource where filetype=3 and groupid=-1) AS count \
    UNION   \
    select g.groupid,g.groupname,IFNULL(A.count,0) as count from sr_weiapp_resource_group g  \
    left join   \
    (select r.groupid,count(1) as count from sr_weiapp_resource_group g   right join sr_weiapp_resource r on g.groupid = r.groupid   \
    where (r.filetype=3 or r.filetype is null)  \
    group by r.groupid ) A on g.groupid= a.groupid ";

    //执行SQL
    return yield rPool.query(_sql);
}

let isGroupNameExist = function* (id,groupName) {
    let _sql = "select count(1) AS totalcount from sr_weiapp_resource_group where groupId!=@id@ and groupName=@groupName@";
    _sql = db.makeSQL(_sql,{id:id,groupName:groupName})
    return yield rPool.query(_sql);
}


let materialGroupSave = function* (groupEntity, callback) {
    let _sql = "";
    //保存分组信息
    if (groupEntity.groupId > 0) {
        //更新
        _sql = "update sr_weiapp_resource_group set groupName=@groupName@ where groupId=@groupId@";
        _sql = db.makeSQL(_sql,{groupId:groupEntity.groupId,groupName:groupEntity.groupName})
    } else {
        //新增
        _sql = "insert into sr_weiapp_resource_group(groupName) values(@groupName@)";
        _sql = db.makeSQL(_sql,{groupName:groupEntity.groupName})
    }

    return yield wPool.query(_sql);
}

let  materialGroupDelete=function* (groupId) {
    let _sql = "update sr_weiapp_resource set groupid=-1 where filetype=3 and groupid=" + groupId +
        ";delete from sr_weiapp_resource_group where groupId=" + groupId + ";";
    _sql = db.makeSQL(_sql,{groupId:groupId})
    return yield wPool.query(_sql);
}


let  addResource=function* (resourceEntity) {
    let _sql = "insert into sr_weiapp_resource(weiappid,accountid,fileid,filename,filetype,groupid,extension,wechat_mediaid,statuscode," +
        "createdtime,createrid) values (@weiappid@,@accountid@,@fileid@,@filename@,@filetype@,@groupid@,@extension@,@mediaid@,@statuscode@,now(),@createrid@);select max(id) as resourceid from sr_weiapp_resource;";
    _sql = db.makeSQL(_sql,resourceEntity)
    return yield wPool.query(_sql);
}

let updateResource=function* (resourceEntity,callback) {
    let _sql = "update sr_weiapp_resource set filename=@filename@ where id=@resourceid@";
    _sql = db.makeSQL(_sql,resourceEntity)
    return yield wPool.query(_sql);
}

let deleteResource= function* (id) {
    let _sql = "delete from sr_weiapp_resource where id=@id@";
    _sql = db.makeSQL(_sql,{id:id})
    return yield wPool.query(_sql);
}

/**
 *  查询素材信息(分页)
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 */
let getResourceList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;

    //定义字段
    let _fields = "t.id as resourceid,t.fileid,t.filename,ifnull(g.groupName,'') as groupName,t.createdtime,'0k' as filesize,0 as selected ";

    //处理查询条件
    _condition = getWhereCondition(condition);
    //处理排序和分页
    _sortAndPage = comm.sortAndPage(sort, page);
    if (sort) {
        if (sort.type) {
            _sortAndPage.sort = 'ORDER BY ' + "t." + sort.name + ' ' + sort.type;
        }
        else {
            _sortAndPage.sort = 'ORDER BY ' + "t." + sort.name + ' DESC ';
        }
    }
    //定义表
    let _tableName = "sr_weiapp_resource t \
            left join sr_weiapp_resource_group g ON t.groupid = g.groupId ";

    //拼接sql
    _sql = "select " + _fields + " from " + _tableName  + " where " + _condition +_sortAndPage.sort + _sortAndPage.page ;
    //_sql = "SELECT sc_role.*,IFNULL(sc_user.`count`,0) `count` FROM (SELECT * FROM sc_role WHERE 1 = 1 " + _condition + _sortAndPage.sort + _sortAndPage.page + ") sc_role LEFT JOIN (SELECT role_id,COUNT(1) `count` FROM sc_user GROUP BY role_id) sc_user ON sc_role.innerid = sc_user.role_id;";

    _sql = db.makeSQL(_sql,condition)
    return yield rPool.query(_sql);
};

/**
 *  查询素材总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
let getResourceCount = function* (condition) {
    let _sql, _condition;
    let _tableName = "sr_weiapp_resource t \
            left join sr_weiapp_resource_group g ON t.groupid = g.groupId ";
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
    let _whereSql = " 1=1 ";
    if (condition && condition != {}) {
        if (condition.filetype) {
            _whereSql += " and t.filetype=@filetype@";
        }
        if (condition.groupid) {
            _whereSql += " and t.groupid=@groupid@";
        }
        if (condition.filename) {
            _whereSql += " and t.filename like '%@filename@%'";
        }
    }
    _whereSql +=" ";
    return _whereSql;
}


let deleteResourceBatch= function* (ids) {
    let _sql = "delete from sr_weiapp_resource where id in(" + ids +");";
    //执行SQL
    return yield wPool.query(_sql);
}

let moveToGroup= function* (ids,groupid) {
    let _sql = "update sr_weiapp_resource set groupid=" + groupid + " where id in(" + ids + ");";
    //执行SQL
    return yield wPool.query(_sql);
}

//分组查询、保存、删除
exports.getGroupList = getGroupList
exports.materialGroupSave = materialGroupSave;
exports.materialGroupDelete=materialGroupDelete;

//素材新增、修改、删除
exports.addResource=addResource;
exports.updateResource=updateResource;
exports.deleteResource=deleteResource;
//素材查询
exports.getResourceList=getResourceList;
exports.getResourceCount=getResourceCount;

exports.deleteResourceBatch=deleteResourceBatch;
exports.moveToGroup=moveToGroup;
exports.isGroupNameExist=isGroupNameExist
