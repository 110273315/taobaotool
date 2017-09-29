/**
 * Created by Ryan on 2016/07/06.
 * 活动数据库操作层
 */
'use strict';
let sc = require('smartacjs'),
    app = sc.app(),
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');
var fs = require('fs');
/*
 * 根据活动id,获取活动详细信息
 * */
exports.searchCampaign = function* (data) {
    try {
        let sql = "select *,date_format(start_time,'%Y-%m-%d %T') as start_time,date_format(end_time,'%Y-%m-%d %T') as end_time,date_format(display_start_time,'%Y-%m-%d %T') as display_start_time,date_format(display_end_time,'%Y-%m-%d %T') as display_end_time from app_campaign where id =@id@";
        sql = db.makeSQL(sql, data);
        let result = yield rPool.query(sql);
        if (result && result.length > 0) {
            if (result[0].allow_checkin_type) {
                result[0].allow_checkin_type = result[0].allow_checkin_type.split(',');
            }
            if (result[0].categorys) {
                sql = "select id,name from app_campaign_category where id in(" + result[0].categorys + ")";
                result[0].categorys = yield rPool.query(sql);
            }
            if (result[0].tags) {
                sql = "select id,image from app_campaign_category where id in(" + result[0].tags + ")";
                result[0].tags = yield rPool.query(sql);
            }
            if (result[0].display_channel) {
                result[0].display_channel = result[0].display_channel.split(',');
            }
            if (result[0].member_level) {
                result[0].member_level = result[0].member_level.split(',');
            }
            sql = "select count(1) as num from app_campaign_sign where campaign_id=@id@";
            sql = db.makeSQL(sql, data);
            let count = yield rPool.query(sql);
            if (count && count.length > 0 && count[0].num) {
                result[0].sign_number = count[0].num;
            }
            else {
                result[0].sign_number = 0;
            }
            //获取报名设置信息
            sql = "select *,date_format(begin_time,'%Y-%m-%d %T') as begin_time,date_format(end_time,'%Y-%m-%d %T') as end_time," +
                " date_format(last_cancel_time,'%Y-%m-%d %T') as last_cancel_time from app_campaign_sign_set where campaign_id=@id@";
            sql = db.makeSQL(sql, data);
            let sign_result = yield rPool.query(sql);
            if (sign_result && sign_result.length > 0) {
                result[0].sign = sign_result[0];
                //获取报名场次信息
                sql = " select *,date_format(begin_time,'%Y-%m-%d %T') as begin_time,date_format(end_time,'%Y-%m-%d %T') as end_time " +
                    " from app_campaign_seasons where campaign_id=@id@;"
                sql = db.makeSQL(sql, data);
                let seasons_result = yield rPool.query(sql);
                if (seasons_result && seasons_result.length > 0) {
                    //获取报名场次时间段信息
                    result[0].sign.sessions = seasons_result;
                    for (let i = 0; i < result[0].sign.sessions.length; i++) {
                        let session = result[0].sign.sessions[i];
                        sql = " select GROUP_CONCAT(week) as week,begin_time,end_time,remark from app_campaign_seasons_time  where seasons_id=" + session.id + "  GROUP BY begin_time,end_time;";
                        let time_result=yield rPool.query(sql);
                        session.times = time_result;
                        //将week放至场次主结构中
                        if(time_result&&time_result.length>0)
                        {
                            session.week = session.times[0].week.split(',');
                        }

                        //delete session.times.week;
                    }

                }
            }
            console.log('获取到的报名场次信息结果result' + JSON.stringify(result));
            sql = "select * from app_campaign_seasons where campaign_id=@id@";
            sql = db.makeSQL(sql, data);
            result[0].sessions = yield rPool.query(sql);

            sql = "select * from app_campaign_shop where campaign_id=@id@";
            sql = db.makeSQL(sql, data);
            result[0].shops = yield rPool.query(sql);
            //
            //  sql = "select * from app_campaign_sign_set where campaign_id=@id@";
            //  sql = db.makeSQL(sql, data);
            //
            // let signres = yield rPool.query(sql);
            if (sign_result && sign_result.length > 0) {
                if (result[0].sign.sign_metadata) {
                    result[0].sign.sign_metadata = JSON.parse(result[0].sign.sign_metadata);
                }
                sql = "select * from app_campaign_sign_point where sign_set_id=@innerid@";
                sql = db.makeSQL(sql, result[0].sign);
                result[0].sign.points = yield rPool.query(sql);
            }
        }
        return result;
    }
    catch (e) {
            console.error("searchCampaign catch error, err=%s", e);
            return app.err.dbOpertationFailed;
        }
    finally {
         console.log("searchCampaign finish!");
        }
};


/**
 *  查询活动所有信息(分页)
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 */
exports.getCampaignList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;

    //定义字段
    let _fields = " c.*,date_format(c.start_time,'%Y-%m-%d %T') as start_time,date_format(c.end_time,'%Y-%m-%d %T') as end_time," +
        "date_format(c.display_start_time,'%Y-%m-%d %T') as display_start_time,date_format(c.display_end_time,'%Y-%m-%d %T') as display_end_time, " +
        "t.shopname,concat(date_format(s.begin_time,'%Y-%m-%d %T'),'~',date_format(s.end_time,'%Y-%m-%d %T')) as sign_date," +
        "(select group_concat(image) from app_campaign_category where  find_in_set(id,c.tags)) as tags,ifnull(d.signnum,0)+ifnull(e.signnum,0) as signnum," +
        "ifnull(f.signnum,0)+ifnull(g.signnum,0) as checkinnum,ifnull(h.signinnum,0)+ifnull(i.signinnum,0) as signinnum ";
    //处理查询条件
    _condition = getCampaignQueryWhere(condition);
    //处理排序和分页

    _sortAndPage = comm.sortAndPage(sort, page);

    //定义表
    let _tableName = "app_campaign as c " +
        "inner join (select id from app_campaign  c where  " + _condition + ' ' + _sortAndPage.sort + ' ' + _sortAndPage.page + ") as c1 on c.id=c1.id\
       left join (select campaign_id, group_concat(shop_name) as shopname from app_campaign_shop group by campaign_id) t on t.campaign_id=c.id \
       left join app_campaign_sign_set s on s.campaign_id=c.id \
       left join (select campaign_id,sum(signnum) as signnum from sr_report_campaign_signnum where status in (0,1,4) group by campaign_id) d on c1.id=d.campaign_id \
       left join (select campaign_id,sum(person_num) as signnum from app_campaign_sign where status in (0,1,4) and createdtime >= DATE_FORMAT(curdate(),'%Y-%m-%d 00:05:00') group by campaign_id) e on c1.id=e.campaign_id \
       left join (select campaign_id,sum(signnum) as signnum from sr_report_campaign_signnum where status in(1,4) group by campaign_id) f on c1.id=f.campaign_id \
       left join (select campaign_id,sum(person_num) as signnum from app_campaign_sign where modifiedtime >= DATE_FORMAT(curdate(),'%Y-%m-%d 00:05:00') and status in(1,4) group by campaign_id) g on c1.id=g.campaign_id\
       left join (select campaign_id,sum(signnum) as signinnum from sr_report_campaign_signnum where status in(4) group by campaign_id) h on c1.id=h.campaign_id \
       left join (select campaign_id,sum(person_num) as signinnum from app_campaign_sign where  status =4 group by campaign_id) i on c1.id=i.campaign_id";

    //拼接sql
    _sql = "select " + _fields + " from " + _tableName + " " + _sortAndPage.sort;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    if (result && 'length' in result && result.length > 0) {
        result.forEach(res => {
            if (res.tags) {
                res.tags = res.tags.split(',');
            }
        });
        return { data: result };
    }
    else {
        return { data: [] };
    }
};

/**
 *  查询活动总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
exports.getCampaignCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "app_campaign as c";
    //默认值
    _condition = getCampaignQueryWhere(condition);
    //处理查询条件
    _sql = " select count(*) as totalcount from " + _tableName + " where " + _condition;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    if (result && 'length' in result && result.length > 0) {
        let totalCount = result[0].totalcount;
        let json = {
            TotalCount: [{ count: totalCount }]
        };
        return json;
    }
    else {
        return null;
    }
};

/**
 *  获取活动导出sql
 * @param condition 查询条件
 */
exports.getCampaignExportSql=function* (condition) {
    console.log('export campaign condition:'+JSON.stringify(condition))
    var _sql=getCampaignExportListSql(condition);

    var exportsql= "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(25,1,now(),'todo')";
    let result = yield wPool.query(exportsql);
    return { result: result, sql: _sql };
}

function getCampaignExportListSql(condition) {
    let _sql, _condition;

    //定义字段
    let _fields = " c.name as '活动名称',CONCAT(date_format(c.start_time,'%Y-%m-%d %T'),'~',date_format(c.end_time,'%Y-%m-%d %T')) as '活动时段'," +
        "ifnull(d.signnum,0)+ifnull(e.signnum,0) as '报名人数'," +
        "ifnull(f.signnum,0)+ifnull(g.signnum,0) as '确认人数',ifnull(h.signinnum,0)+ifnull(i.signinnum,0) as '签到人数' ";
    //处理查询条件
    _condition = getCampaignQueryWhere(condition);
    //定义表
    let _tableName = "app_campaign as c " +
        "inner join (select id from app_campaign  c where  " + _condition+ ") as c1 on c.id=c1.id\
       left join (select campaign_id, group_concat(shop_name) as shopname from app_campaign_shop group by campaign_id) t on t.campaign_id=c.id \
       left join app_campaign_sign_set s on s.campaign_id=c.id \
       left join (select campaign_id,sum(signnum) as signnum from sr_report_campaign_signnum status in (0,1,4)  group by campaign_id) d on c1.id=d.campaign_id \
       left join (select campaign_id,sum(person_num) as signnum from app_campaign_sign where status in (0,1,4)  and createdtime >= DATE_FORMAT(curdate(),'%Y-%m-%d 00:05:00') group by campaign_id) e on c1.id=e.campaign_id \
       left join (select campaign_id,sum(signnum) as signnum from sr_report_campaign_signnum where status in(1,4) group by campaign_id) f on c1.id=f.campaign_id \
       left join (select campaign_id,sum(person_num) as signnum from app_campaign_sign where modifiedtime >= DATE_FORMAT(curdate(),'%Y-%m-%d 00:05:00') and status in(1,4) group by campaign_id) g on c1.id=g.campaign_id\
       left join (select campaign_id,sum(signnum) as signinnum from sr_report_campaign_signnum where status in(4) group by campaign_id) h on c1.id=h.campaign_id \
       left join (select campaign_id,sum(person_num) as signinnum from app_campaign_sign where  status =4 group by campaign_id) i on c1.id=i.campaign_id";


    //拼接sql
    _sql = "select " + _fields + " from " + _tableName+" order by c.modifiedtime desc";
    _sql = db.makeSQL(_sql, condition);
    return _sql;
}


function getCampaignQueryWhere(condition) {
    console.log("活动列表查询条件:" + JSON.stringify(condition));
    var _whereSql = " is_deleted=0 ";
    if (condition && condition != {}) {
        if (condition.name) {
            _whereSql += " and c.name =@name@";
        }
        if (condition.memberlevel) {
            _whereSql += " and FIND_IN_SET(@memberlevel@,member_level)";
        }
        if (condition.shopids && condition.shopids.length > 0) {
            let tempshopid = [];
            condition.shopids.forEach(item => {
                tempshopid.push("'" + item + "'");
            });
            condition.shopids = tempshopid.join(',');
            _whereSql += " and c.id in (select campaign_id from app_campaign_shop where shop_id in(@shopids@))";
        }
        if (condition.status) {
            _whereSql += " and  c.is_enabled =@status@";
        }
        if (condition.displaychannel) {

            _whereSql += " and FIND_IN_SET(@displaychannel@,c.display_channel)";
        }
        if (condition.category && condition.category.length > 0) {
            let cSql = " 1=2";
            condition.category.forEach(category => {
                cSql += " or c.categorys like '%" + category + "%'";
            });
            _whereSql += " and (" + cSql + ")";
        }
        if (condition.tags && condition.tags.lenth > 0) {
            let tSql = " 1=2";
            condition.tags.forEach(tag => {
                tSql += " or c.tags like '%" + tag + "%'";
            });
            _whereSql += " and (" + tSql + ")";
        }
        if (condition.hasSignup == "0") {
            _whereSql += " and c.id not in(select distinct campaign_id from app_campaign_sign)";
        } else if (condition.hasSignup == "1") {
            _whereSql += " and c.id in(select campaign_id from app_campaign_sign)";
        }
        if (condition.isNeedSign == "0") {
            _whereSql += " and is_need_sign=0";
        } else if (condition.isNeedSign == "1") {
            _whereSql += " and is_need_sign=1";
        }
    }
    return _whereSql;
}



/**
 *  修改活动状态
 * @param req 查询条件
 * @param callback 回调函数
 */
exports.editCampaignStatus = function* (body) {
    let sql = '';
    let sqllog = '';
    if (body.is_deleted) {
        sql = "update app_campaign set is_deleted=1 ,modifierid=@modifierid@, modifiedtime=now() where id=@id@";
    }
    else {
        sql = "update app_campaign set is_enabled=@is_enabled@ ,modifierid=@modifierid@, modifiedtime=now() where id=@id@";
        sqllog = "insert into app_campaign_log value(null,@id@,@is_enabled@,@modifierid@,now())";

    }
    sql = db.makeSQL(sql, body);
    if (sqllog) {
        sqllog = db.makeSQL(sqllog, body);
    }
    let result = yield wPool.query(sql);
    if (sqllog) {
        yield wPool.query(sqllog);
    }
    return result;
};

/**
 *  修改活动排序
 * @param body 排序信息
 */
exports.sortCampaign = function* (body) {
    let sql = "";
    let otherSql = "";
    if (body.change > 0) {
        otherSql = "update app_campaign set sort=@sort@ where sort=" + (body.sort + 1);
        sql = "update app_campaign set sort+1 where id=@id@ and sort=@sort@";

    }
    else if (body.change < 0) {
        otherSql = "update app_campaign set sort=@sort@ where sort=" + (body.sort - 1);
        sql = "update app_campaign set sort-1 where id=@id@ and sort=@sort@";
    }
    otherSql = db.makeSQL(otherSql, body);
    sql = db.makeSQL(sql, body);
    let result = yield wPool.query(otherSql);
    if (result && result.affectedRows > 0) {
        result = yield wPool.query(sql);
    }
    return result;
};

exports.queryPvUvSummary = function* (body) {
    let sql = "";
    let result = {
        pv: {
            wechat: [],
            app: []
        },
        uv: {
            wechat: [],
            app: []
        }
    };
    if (!body.where.end || body.where.end == body.where.start) {
        sql = "select count(1) as value, CONVERT(date_format(createdtime,'%H'),signed)+1 as `key` from app_campaign_click where source_type=1 and  date_format(createdtime,'%Y-%m-%d')=@start@  group by date_format(createdtime,'%H') order by createdtime;\
select count(1) as value,`key` from(select cust_id, CONVERT(date_format(createdtime,'%H'),signed)+1 as `key` from app_campaign_click where source_type=1 and date_format(createdtime,'%Y-%m-%d')=@start@  group by date_format(createdtime,'%H'),cust_id) t;\
select count(1) as value, CONVERT(date_format(createdtime,'%H'),signed)+1 as `key` from app_campaign_click where source_type=2 and date_format(createdtime,'%Y-%m-%d')=@start@  group by date_format(createdtime,'%H') order by createdtime;\
select count(1) as value,`key` from(select cust_id,CONVERT(date_format(createdtime,'%H'),signed)+1 as `key` from app_campaign_click where source_type=2 and date_format(createdtime,'%Y-%m-%d')=@start@  group by date_format(createdtime,'%H'),cust_id) t;";
    }
    else {
        sql = "select count(1) as value, date_format(createdtime,'%Y-%m-%d') as `key` from app_campaign_click where source_type=1 and createdtime>=@start@ and createdtime<=@end@ group by date_format(createdtime,'%Y-%m-%d') order by createdtime;\
select count(1) as value,`key` from(select cust_id, date_format(createdtime,'%Y-%m-%d') as `key` from app_campaign_click where source_type=1 and createdtime>=@start@ and createdtime<=@end@ group by date_format(createdtime,'%Y-%m-%d'),cust_id) t;\
select count(1) as value, date_format(createdtime,'%Y-%m-%d') as `key` from app_campaign_click where source_type=2 and createdtime>=@start@ and createdtime<=@end@ group by date_format(createdtime,'%Y-%m-%d') order by createdtime;\
select count(1) as value,`key` from(select cust_id,date_format(createdtime,'%Y-%m-%d') as `key` from app_campaign_click where source_type=2 and createdtime>=@start@ and createdtime<=@end@ group by date_format(createdtime,'%Y-%m-%d'),cust_id) t;";
    }

    sql = db.makeSQL(sql, body.where);
    let sqlRes = yield rPool.query(sql);
    result.pv.wechat = sqlRes[0];
    result.uv.wechat = sqlRes[1].filter(x => { return x.key });
    result.pv.app = sqlRes[2];
    result.uv.app = sqlRes[3].filter(x => { return x.key });
    return result;
}

/**
 *  新增活动
 * @param req 活动信息
 */
exports.addCampaign = function* (campaign) {

    let conn = yield app.res.getDBWConnection("sr", "addCampaign");
    let isBeginTransaction = false;
    try {
        console.log("新增的活动实体:" + JSON.stringify(campaign));
        let dbResult = yield conn.beginTransaction();
        isBeginTransaction = true;
        let sql = "INSERT INTO `app_campaign`(`id`,`name`,`start_time`,`end_time`,`display_start_time`,`display_end_time`,`display_channel`,`campaign_scope`,`alert_rule`,`pre_days`,`pre_hours`,`pre_minutes`,`member_level`,`is_match_level`,`content`,`sort`,`is_top`,`is_enabled`,`is_deleted`,`createrid`,`createdtime`)\
        VALUES (@id@,@name@,@start_time@,@end_time@,@display_start_time@,@display_end_time@,@display_channel@,@campaign_scope@,@alert_rule@,@pre_days@,@pre_hours@,@pre_minutes@,@member_level@,@is_match_level@,'',0,0,0,0,@createrid@,now());";
        campaign.id = sc.guid();
        if (campaign.display_channel && campaign.display_channel.length > 0) {
            campaign.display_channel = campaign.display_channel.join(',');
        } else {
            campaign.display_channel = null;
        }
        if (campaign.member_level && campaign.member_level.length > 0) {
            campaign.member_level = campaign.member_level.join(',');
        } else {
            campaign.member_level = null;
        }

        sql = db.makeSQL(sql, campaign);
        console.log('插入活动主表:' + sql);
        dbResult = yield conn.query(sql);
        if (dbResult && dbResult.affectedRows) {
            let campaign_id = campaign.id;
            if (campaign.shops && campaign.shops.length > 0) {
                for (let i = 0; i < campaign.shops.length; i++) {
                    campaign.shops[i].campaign_id = campaign_id;
                    campaign.shops[i].createrid = campaign.createrid;
                    sql = "insert into app_campaign_shop values(@campaign_id@,@shop_id@,@shop_name@,@createrid@,now())";
                    sql = db.makeSQL(sql, campaign.shops[i]);
                    console.log('插入活动门店表:' + sql);
                    yield conn.query(sql);
                }
            }
            // if (campaign.sessions && campaign.sessions.length > 0) {
            //     for (let i = 0; i < campaign.sessions.length; i++) {
            //         campaign.sessions[i].campaign_id = campaign_id;
            //         campaign.sessions[i].createrid = campaign.createrid;
            //         campaign.sessions[i].sequence = (i + 1);
            //         sql = "insert into app_campaign_seasons values(null,@campaign_id@,@duration@,@name@,@sequence@,@createrid@,now(),null,null)";
            //         sql = db.makeSQL(sql, campaign.sessions[i]);
            //         console.log('插入活动场次表:' + sql);
            //         yield conn.query(sql);
            //     }
            // }
        }
        yield conn.commit();
        dbResult.id = campaign.id;
        return dbResult;
    }
    catch (e) {
        console.error("新增活动异常:" + e);
        if (isBeginTransaction && conn) {
            yield conn.rollback();
        }
        throw app.err.systemError.msg(e);
    }
    finally {
        if (conn) {
            conn.release();
        }
    }
};

/**
 *  新增活动
 * @param req 活动信息
 */
exports.editCampaign = function* (campaign) {
    console.log('更新的活动主表:' + JSON.stringify(campaign));
    let conn = yield app.res.getDBWConnection("sr", "editCampaign");
    let isBeginTransaction = false;
    try {
        let dbResult = yield conn.beginTransaction();
        isBeginTransaction = true;
        if(campaign.content)
        {
            campaign.content= campaign.content.replace(/'/g, "''");
        }
        let sql = "update `app_campaign` set `name`=@name@,\
        `start_time`=@start_time@,\
            `end_time`=@end_time@,\
            `display_start_time`=@display_start_time@,\
            `display_end_time`=@display_end_time@,\
            `display_channel`=@display_channel@,\
            `campaign_scope`=@campaign_scope@,\
            `image`=@image@,\
            `alert_rule`=@alert_rule@,\
            `pre_days`=@pre_days@,\
            `pre_hours`=@pre_hours@,\
            `pre_minutes`=@pre_minutes@,\
            `categorys`=@categorys@,\
            `tags`=@tags@,\
            `member_level`=@member_level@,\
            `is_match_level`=@is_match_level@,\
            `custom_display`=@custom_display@,\
            `custom_display_address`=@custom_display_address@,\
            `is_need_sign`=@is_need_sign@,\
            `allow_checkin_type`=@allow_checkin_type@,\
            `content_type`=@content_type@,\
            `content`=@content@,modifierid=@createrid@,modifiedtime=now()\
        where id=@id@";
        if (campaign.sign_number !== 0 && campaign.sign_number != '0') {
            sql = "update `app_campaign` set `name`=@name@,\
            `end_time`=@end_time@,\
            `display_end_time`=@display_end_time@,\
            `campaign_scope`=@campaign_scope@,\
            `image`=@image@,\
            `alert_rule`=@alert_rule@,\
            `pre_days`=@pre_days@,\
            `pre_hours`=@pre_hours@,\
            `pre_minutes`=@pre_minutes@,\
            `categorys`=@categorys@,\
            `tags`=@tags@,\
            `member_level`=@member_level@,\
            `is_match_level`=@is_match_level@,\
            `custom_display`=@custom_display@,\
            `custom_display_address`=@custom_display_address@,\
            `is_need_sign`=@is_need_sign@, \
            `allow_checkin_type`=@allow_checkin_type@,\
            `content_type`=@content_type@,\
            `content`=@content@,modifierid=@createrid@,modifiedtime=now()\
        where id=@id@";
        }
        if (campaign.categorys && campaign.categorys.length > 0) {
            let categorys = [];
            campaign.categorys.forEach(category => {
                categorys.push(category.id);
            });
            campaign.categorys = categorys.join(',');
        }
        else {
            campaign.categorys = null;
        }
        if (campaign.allow_checkin_type && campaign.allow_checkin_type.length > 0) {
            campaign.allow_checkin_type = campaign.allow_checkin_type.join(',');
        }
        else {
            campaign.allow_checkin_type = null;
        }
        if (campaign.tags && campaign.tags.length > 0) {
            let tags = [];
            campaign.tags.forEach(tag => {
                tags.push(tag.id);
            });
            campaign.tags = tags.join(',');
        }
        else {
            campaign.tags = null;
        }
        if (campaign.display_channel && campaign.display_channel.length > 0) {
            campaign.display_channel = campaign.display_channel.join(',');
        } else {
            campaign.display_channel = null;
        }
        if (campaign.member_level && campaign.member_level.length > 0) {
            campaign.member_level = campaign.member_level.join(',');
        } else {
            campaign.member_level = null;
        }
        sql = db.makeSQL(sql, campaign);
        console.log('更新活动主表:' + sql);
        dbResult = yield conn.query(sql);
        let campaign_id = campaign.id;
        sql = "delete from app_campaign_shop where campaign_id=@id@";
        sql = db.makeSQL(sql, campaign);
        yield conn.query(sql);
        if (campaign.shops && campaign.shops.length > 0) {
            for (let i = 0; i < campaign.shops.length; i++) {
                campaign.shops[i].campaign_id = campaign_id;
                campaign.shops[i].createrid = campaign.modifierid;
                sql = "insert into app_campaign_shop values(@campaign_id@,@shop_id@,@shop_name@,@createrid@,now())";
                sql = db.makeSQL(sql, campaign.shops[i]);
                console.log('插入活动门店表:' + sql);
                yield conn.query(sql);
            }
        }


        sql = "delete from app_campaign_sign_point where sign_set_id in(select innerid from app_campaign_sign_set where campaign_id=@id@)";
        sql = db.makeSQL(sql, campaign);
        yield conn.query(sql);
        sql = "delete from app_campaign_sign_set where campaign_id=@id@";
        sql = db.makeSQL(sql, campaign);
        yield conn.query(sql);

        if (campaign.sign) {
            campaign.sign.innerid = sc.guid();
            campaign.sign.campaign_id = campaign_id;
            campaign.sign.createrid = campaign.modifierid;
            if (campaign.sign.tag_action_type != 1 && campaign.sign.tag_action_type != '1') {
                sql = "select * from sr_tag_tag where tagname=@name@ and isdeleted=0";
                sql = db.makeSQL(sql, campaign);
                let tag = yield app.res.getRPoolSync().query(sql);
                if (tag && tag.length > 0) {
                    campaign.sign.tag_id = tag[0].id;
                } else {
                    sql = "INSERT INTO sr_tag_tag(tagname,taghotcount,isenabled,isdeleted,channelcode,createrid,createdtime,orgid) VALUES (@name@,0,1,0,1,@createrid@,NOW(),@orgid@);";
                    sql = db.makeSQL(sql, campaign);
                    let result = yield app.res.getWPoolSync().query(sql);
                    campaign.sign.tag_id = result.insertId;
                }
            } else {
                campaign.sign.tag_id = null;
            }
            if (!campaign.sign.checkin_url) {
                campaign.sign.checkin_url = null;
            }
            if (!campaign.sign.sign_limit) {
                campaign.sign.sign_limit = null;
            }
            if (!campaign.sign.sign_metadata) {
                campaign.sign.sign_metadata = null;
            }
            else {
                campaign.sign.sign_metadata = JSON.stringify(campaign.sign.sign_metadata);
            }
            if (!campaign.sign.dispaly_tag_id||campaign.sign.dispaly_tag_id.length==0) {
                campaign.sign.dispaly_tag_id = null;
            }
            else {
                campaign.sign.dispaly_tag_id=campaign.sign.dispaly_tag_id.join(',');
            }
            if (!campaign.sign.tip) {
                campaign.sign.tip = null;
            }
            if (campaign.sign.pre_begin_hours == "") {
                campaign.sign.pre_begin_hours = null;
            }
            if (campaign.sign.pre_begin_minutes == "") {
                campaign.sign.pre_begin_minutes = null;
            }
            if (campaign.sign.pre_begin_days == "") {
                campaign.sign.pre_begin_days = null;
            }
            if (campaign.sign.pre_begin_time == "") {
                campaign.sign.pre_begin_time = null;
            }
            if (campaign.sign.begin_time == "") {
                campaign.sign.begin_time = null;
            }
            if (campaign.sign.end_time == "") {
                campaign.sign.end_time = null;
            }
            if (campaign.sign.pre_end_hours == "") {
                campaign.sign.pre_end_hours = null;
            }
            if (campaign.sign.pre_end_minutes == "") {
                campaign.sign.pre_end_minutes = null;
            }
            if (campaign.sign.pre_end_days == "") {
                campaign.sign.pre_end_days = null;
            }
            if (campaign.sign.pre_end_time == "") {
                campaign.sign.pre_end_time = null;
            }
            if (campaign.sign.last_cancel_time == "") {
                campaign.sign.last_cancel_time = null;
            }
            if (campaign.sign.pre_cancel_hours == "") {
                campaign.sign.pre_cancel_hours = null;
            }
            if (campaign.sign.pre_cancel_minutes == "") {
                campaign.sign.pre_cancel_minutes = null;
            }
            if (campaign.sign.pre_cancel_days == "") {
                campaign.sign.pre_cancel_days = null;
            }
            if (campaign.sign.pre_cancel_time == "") {
                campaign.sign.pre_cancel_time = null;
            }

            if (campaign.sign.begin_time_type) {
                if (campaign.sign.begin_time_type == 1) {
                    campaign.sign.pre_begin_hours = null;
                    campaign.sign.pre_begin_minutes = null;
                    campaign.sign.pre_begin_days = null;
                    campaign.sign.pre_begin_time = null;
                }
                else if (campaign.sign.begin_time_type == 2) {
                    campaign.sign.begin_time = null;
                    campaign.sign.pre_begin_days = null;
                    campaign.sign.pre_begin_time = null;
                }
                else if (campaign.sign.begin_time_type == 3) {
                    campaign.sign.begin_time = null;
                    campaign.sign.pre_begin_hours = null;
                    campaign.sign.pre_begin_minutes = null;
                }

            }
            if (campaign.sign.end_time_type) {
                if (campaign.sign.end_time_type == 1) {
                    campaign.sign.pre_end_hours = null;
                    campaign.sign.pre_end_minutes = null;
                    campaign.sign.pre_end_days = null;
                    campaign.sign.pre_end_time = null;
                }
                else if (campaign.sign.end_time_type == 2 || campaign.sign.end_time_type == 3) {
                    campaign.sign.end_time = null;
                    campaign.sign.pre_end_days = null;
                    campaign.sign.pre_end_time = null;
                }
                else if (campaign.sign.end_time_type == 4) {
                    campaign.sign.end_time = null;
                    campaign.sign.pre_end_hours = null;
                    campaign.sign.pre_end_minutes = null;
                }

            }
            if (campaign.sign.sign_limit_count == "") {
                campaign.sign.sign_limit_count = null;
            }
            if (campaign.sign.each_limit_count == "") {
                campaign.sign.each_limit_count = null;
            }
            if (campaign.sign.each_season_count == "") {
                campaign.sign.each_season_count = null;
            }
            if (campaign.sign.last_cancel_type&&campaign.sign.last_cancel_type!='') {
                if (campaign.sign.last_cancel_type == 1) {
                    campaign.sign.pre_cancel_hours = null;
                    campaign.sign.pre_cancel_minutes = null;
                    campaign.sign.pre_cancel_days = null;
                    campaign.sign.pre_cancel_time = null;
                }
                else if (campaign.sign.last_cancel_type == 2 || campaign.sign.last_cancel_type == 3) {
                    campaign.sign.last_cancel_time = null;
                    campaign.sign.pre_cancel_days = null;
                    campaign.sign.pre_cancel_time = null;
                }
                else if (campaign.sign.last_cancel_type == 4) {
                    campaign.sign.last_cancel_time = null;
                    campaign.sign.pre_cancel_hours = null;
                    campaign.sign.pre_cancel_minutes = null;
                }
            }
            else
            {
                campaign.sign.last_cancel_type=null;
            }
            if (campaign.sign.cancel_num == "") {
                campaign.sign.cancel_num = null;
            }
            console.log('campaign.sign:' + JSON.stringify(campaign.sign));

            sql = "insert into app_campaign_sign_set values\
                (@innerid@,@campaign_id@,\
                @begin_time_type@,@end_time_type@,@begin_time@,@end_time@,\
                @pre_begin_hours@,@pre_begin_minutes@,@pre_begin_days@,@pre_begin_time@,\
                @pre_end_hours@,@pre_end_minutes@,@pre_end_days@,@pre_end_time@,\
                @sign_limit_type@,@sign_limit_count@,@each_limit_type@,@each_limit_count@,@each_season_type@,@each_season_count@,\
                @last_cancel_type@,@last_cancel_time@,@pre_cancel_hours@,@pre_cancel_minutes@,@pre_cancel_days@,@pre_cancel_time@,\
                @cancel_num_type@,@cancel_num@,\
                @tag_action_type@,@tag_id@,@dispaly_tag_id@,\
                @checkin_url@,@is_direct_confirm@,@rule_type@,@sign_marked_word@,\
                @sign_metadata@,@has_set@,@tip@,@exchange_type@,@createrid@,now(),null,null)";
            sql = db.makeSQL(sql, campaign.sign);
            console.log('插入活动规则表:' + sql);
            let signResult = yield conn.query(sql);
            if (signResult && signResult.affectedRows) {
                if (campaign.sign.points && campaign.sign.points.length > 0) {
                    for (let i = 0; i < campaign.sign.points.length; i++) {
                        campaign.sign.points[i].sign_id = campaign.sign.innerid;
                        campaign.sign.points[i].createrid = campaign.modifierid;
                        sql = "insert into app_campaign_sign_point values(@sign_id@,@level@,@point@,@createrid@,now())";
                        sql = db.makeSQL(sql, campaign.sign.points[i]);
                        console.log('插入活动规则积分表:' + sql);
                        yield conn.query(sql);
                    }
                }
            }
            if (campaign.sign_number === 0 || campaign.sign_number == '0') {
                sql = "delete from app_campaign_seasons where campaign_id=@id@";
                sql = db.makeSQL(sql, campaign);
                yield conn.query(sql);
                sql = "delete from app_campaign_seasons_time where seasons_id in (select id from app_campaign_seasons where campaign_id=@id@)";
                sql = db.makeSQL(sql, campaign);
                yield conn.query(sql);

                if (campaign.sign.sessions && campaign.sign.sessions.length > 0) {
                    for (let i = 0; i < campaign.sign.sessions.length; i++) {
                        campaign.sign.sessions[i].campaign_id = campaign_id;
                        campaign.sign.sessions[i].createrid = campaign.modifierid;
                        campaign.sign.sessions[i].sequence = (i + 1);
                        campaign.sign.sessions[i].remark = campaign.sign.sessions[i].remark ? campaign.sign.sessions[i].remark : null;
                        if(campaign.sign.sessions[i].end_time)
                        {
                            console.log('campaign.sign.sessions[i].end_time.format("yyyy-MM-dd 23:59:59"):'+(new Date(campaign.sign.sessions[i].end_time)).format("yyyy-MM-dd 23:59:59"));
                            console.log('campaign.sign.sessions[i].end_time.Format("yyyy-MM-dd 23:59:59"):'+(new Date(campaign.sign.sessions[i].end_time)).DateFormat("yyyy-MM-dd 23:59:59"));
                            campaign.sign.sessions[i].end_time=(new Date(campaign.sign.sessions[i].end_time)).DateFormat('yyyy-MM-dd 23:59:59');
                        }
                        sql = "insert into app_campaign_seasons values(null,@campaign_id@,@begin_time@,@end_time@,@name@,@remark@,@sequence@,@createrid@,now(),null,null)";
                        sql = db.makeSQL(sql, campaign.sign.sessions[i]);
                        console.log('插入活动场次表:' + sql);
                        yield conn.query(sql);

                        if (campaign.sign.sessions[i].times && campaign.sign.sessions[i].times.length > 0) {
                            let time_list = campaign.sign.sessions[i].times;
                            console.log('场次信息:' + JSON.stringify(campaign.sign.sessions[i]));
                            // 获取场次ID
                            let query_session_sql = "select * from app_campaign_seasons where `campaign_id`=@campaign_id@ and sequence=@sequence@ order by id desc limit 1;";
                            query_session_sql = db.makeSQL(query_session_sql, {
                                campaign_id: campaign_id,
                                sequence: campaign.sign.sessions[i].sequence
                            });
                            let result_session = yield conn.query(query_session_sql);

                            let session_id = result_session[0].id;
                            for (let j = 0; j < time_list.length; j++) {
                                let time_item = time_list[j];
                                time_item.remark = time_item.remark ? time_item.remark : null;
                                time_item.session_id = session_id;
                                time_item.createrid = campaign.modifierid;
                                console.log('活动场次具体时间信息:' + JSON.stringify(time_item));
                                let week_list = campaign.sign.sessions[i].week;
                                //如果没有勾选循环，则自动补充
                                if (!week_list || week_list.length == 0) {
                                    week_list = [0, 1, 2, 3, 4, 5, 6];
                                }
                                for (let k = 0; k < week_list.length; k++) {

                                    time_item.week = parseInt(week_list[k]);
                                    console.log('单条活动场次具体时间信息:' + JSON.stringify(time_item));
                                    sql = "insert into app_campaign_seasons_time values(null,@session_id@,@week@,@begin_time@,@end_time@,@remark@,@createrid@,now(),null,null)";
                                    sql = db.makeSQL(sql, time_item);
                                    console.log('插入活动场次时间段表:' + sql);
                                    yield conn.query(sql);
                                }
                            }
                        }

                    }
                }
            }
        }
        yield conn.commit();
        return dbResult;
    }
    catch (e) {
        console.error("修改活动异常:" + e);
        if (isBeginTransaction && conn) {
            yield conn.rollback();
        }
        throw app.err.systemError.msg(e);
    }
    finally {
        if (conn) {
            conn.release();
        }
    }
};


exports.getAllCampaignTagCategory = function* (type) {
    let sql = "select * from app_campaign_category where type=@type@ and is_deleted=0";
    sql = db.makeSQL(sql, { type: type });
    let result = yield rPool.query(sql);
    return result;
};

exports.addCampaignCategoryTag = function* (category) {
    let sql = "insert into app_campaign_category values(null,@type@,@image@,@name@,0,@createrid@,now(),null,null)";
    sql = db.makeSQL(sql, category);
    let result = yield wPool.query(sql);
    return result;
};

exports.delCampaignCategoryTag = function* (id) {
    let sql = "update app_campaign_category set is_deleted=1 where id=@id@";
    sql = db.makeSQL(sql, { id: id });
    let result = yield wPool.query(sql);
    return result;
};

exports.getCampaignLogList = function* (id) {
    let sql = "select c.*,u.name,date_format(c.createdtime,'%Y-%m-%d %T') as createdtime from app_campaign_log c left join sc_user u on u.innerid=c.createrid where campaign_id=@id@ order by c.createdtime desc";
    sql = db.makeSQL(sql, { id: id });
    let result = yield rPool.query(sql);
    return result;
};

exports.getCampaignSignLogList = function* (id) {
    let sql = "select s.*,date_format(s.createdtime,'%Y-%m-%d %T') as createdtime,u.name from app_campaign_sign_log s left join sc_user u on u.innerid=s.createrid where sign_id=@id@ order by createdtime desc";
    sql = db.makeSQL(sql, { id: id });
    let result = yield rPool.query(sql);
    return result;
};

exports.editSignStatus = function* (data) {
    let sql = '';
    let custid;
    let campaign_id;
    if (data.status == 1) {
        sql = "select * from app_campaign_sign where innerid=@id@";
        sql = db.makeSQL(sql, data);
        let sign = yield rPool.query(sql);
        if (sign && sign.length > 0) {
            campaign_id = sign[0].campaign_id;
            if (sign[0].cust_id) {
                custid = sign[0].cust_id;
            }
            // let remaind = yield* RemainderPersonNum(sign[0].campaign_id);
            // if (remaind - sign[0].person_num < 0) {
            //     throw app.err.as.campaign.reachMaximum;
            // }
        }
        else {
            throw app.err.systemError.msg('no sign info');
        }
    }
    sql = "update app_campaign_sign set status=@status@,modifiedtime=now(),modifierid=@modifierid@ where innerid=@id@";
    sql = db.makeSQL(sql, data);
    let result = yield wPool.query(sql);
    if (result && result.affectedRows > 0) {
        sql = "insert into app_campaign_sign_log value(null,@id@,@status@,now(),@modifierid@)";
        sql = db.makeSQL(sql, data);
        yield wPool.query(sql);
        if (data.status == 3) {
            sql = "select * from sr_point_disburse where channelcode=6 and sourceid=@id@";
            sql = db.makeSQL(sql, data);
            let point = yield rPool.query(sql);
            if (point && point.length > 0) {
                result.point = point[0];
            }
        }
        if (data.status == 1 && custid) {
            sql = "select * from app_campaign_sign_set where campaign_id=@campaign_id@";
            sql = db.makeSQL(sql, { campaign_id: campaign_id });
            let signset = yield rPool.query(sql);
            if (signset && signset.length > 0 && signset[0].tag_action_type == 3 && signset[0].tag_id) {
                result.tagid = signset[0].tag_id;
                result.custid = custid;
            }
        }

    }
    return result;
};


//活动剩余名额
function* RemainderPersonNum(campaign_id) {
    let sql = "select max_person_num from app_campaign where id=@campaign_id@";
    sql = db.makeSQL(sql, { campaign_id: campaign_id });
    let result = yield app.res.getRPoolSync().query(sql);
    if (result && result.length > 0) {
        let max = result[0].max_person_num;
        sql = "select sum(person_num) as total from app_campaign_sign where campaign_id=@campaign_id@ and status in (1,4)";
        sql = db.makeSQL(sql, { campaign_id: campaign_id });
        result = yield app.res.getRPoolSync().query(sql);
        if (result && result[0].length > 0) {
            let sign = result[0].total;
            return max - sign;
        }
        else {
            return max;
        }
    }
    else {
        return 0;
    }
};



/**
 *  查询活动报名信息(分页)
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 */
exports.getCampaignSignList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;

    //定义字段
    let _fields = " DISTINCT s.*,c.cardno,date_format(s.createdtime,'%Y-%m-%d %T') as createdtime," +
        "concat(date_format(ss.season_date,'%Y-%m-%d'),' ',left(SEC_TO_TIME(st1.begin_time),5),'~',left(SEC_TO_TIME(st1.end_time),5)) as session_name ," +
        "concat(date_format(cs.season_date,'%Y-%m-%d'),' ',left(SEC_TO_TIME(st2.begin_time),5),'~',left(SEC_TO_TIME(st2.end_time),5)) as checkin_session_name ";
    //处理查询条件
    _condition = " campaign_id=@id@";
    //处理排序和分页
    if (condition.mobile) {
        _condition += " and mobile=@mobile@";
    }
    if (condition.status) {
        if (condition.status == 3) {
            _condition += " and status in (2,3)";
        } else {
            _condition += " and status=@status@";
        }

    }
    let where2=" 1=1 ";
    //报名场次日期
    if (condition.sign_session_date) {
        where2 += " and date_format(ss.season_date,'%Y-%m-%d')=date_format(@sign_session_date@,'%Y-%m-%d') ";
    }
    //报名场次时间段
    if (condition.sign_session_id) {
        where2 += " and st1.id=@sign_session_id@ ";
    }
    //实际签到场次日期
    if (condition.checkin_session_date) {
        where2 += " and date_format(cs.season_date,'%Y-%m-%d')=date_format(@checkin_session_date@,'%Y-%m-%d') ";
    }
    //实际签到场次时间段
    if (condition.checkin_session_id) {
        where2 += " and st2.id=@checkin_session_id@ ";
    }

    _sortAndPage = comm.sortAndPage(sort, page);

    //定义表
    let _tableName = "app_campaign_sign as s " +
        "inner join (select innerid from app_campaign_sign  where  " + _condition + ' ' + _sortAndPage.sort + ' '+ ") as s1 on s.innerid=s1.innerid\
       left join sr_cust_card  c on c.custid=s.cust_id and c.statuscode=1 \
       left join app_campaign_sign_seasons ss on ss.sign_id=s1.innerid\
       left join app_campaign_checkin_seasons cs on cs.sign_id=s1.innerid\
       left join app_campaign_seasons_time st1 on st1.id=ss.seasons_time_id\
       left join app_campaign_seasons_time st2 on st2.id=cs.seasons_time_id where "+where2;

    //拼接sql
    _sql = "select " + _fields + " from " + _tableName + " " + _sortAndPage.sort+ _sortAndPage.page ;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    if (result && 'length' in result && result.length > 0) {
        return { data: result };
    }
    else {
        return null;
    }
};

/**
 *  查询活动报名信息总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
exports.getCampaignSignCount = function* (condition) {
    var _sql, _condition;

    //默认值
    _condition = " campaign_id=@id@";
    if (condition.mobile) {
        _condition += " and mobile=@mobile";
    }
    if (condition.status) {
        if (condition.status == 3) {
            _condition += " and status in (2,3)";
        } else {
            _condition += " and status=@status@";
        }
    }
    let where2=" 1=1 ";
    //报名场次日期
    if (condition.sign_session_date) {
        where2 += " and date_format(ss.season_date,'%Y-%m-%d')=date_format(@sign_session_date@,'%Y-%m-%d') ";
    }
    //报名场次时间段
    if (condition.sign_session_id) {
        where2 += " and st1.id=@sign_session_id@ ";
    }
    //实际签到场次日期
    if (condition.checkin_session_date) {
        where2 += " and date_format(cs.season_date,'%Y-%m-%d')=date_format(@checkin_session_date@,'%Y-%m-%d') ";
    }
    //实际签到场次时间段
    if (condition.checkin_session_id) {
        where2 += " and st2.id=@checkin_session_id@ ";
    }

    //定义表
    let _tableName = "app_campaign_sign as s " +
        "inner join (select innerid from app_campaign_sign  where  " + _condition +") as s1 on s.innerid=s1.innerid\
       left join sr_cust_card  c on c.custid=s.cust_id and c.statuscode=1 \
       left join app_campaign_sign_seasons ss on ss.sign_id=s1.innerid\
       left join app_campaign_checkin_seasons cs on cs.sign_id=s1.innerid\
       left join app_campaign_seasons_time st1 on st1.id=ss.seasons_time_id\
       left join app_campaign_seasons_time st2 on st2.id=cs.seasons_time_id where "+where2;
    //处理查询条件
    _sql = " select count(DISTINCT s.innerid) as totalcount from " + _tableName ;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    if (result && 'length' in result && result.length > 0) {
        let totalCount = result[0].totalcount;
        let json = {
            TotalCount: [{ count: totalCount }]
        };
        return json;
    }
    else {
        return null;
    }
};

/**
 *  获取导出sql
 * @param condition 查询条件
 * @param callback 回调函数
 */
exports.getCampaignSignExportSql = function* (condition) {
    console.log('export condition:'+JSON.stringify(condition))
    var _sql=getCampaignSignExportListSql(condition);

    var exportsql= "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(20,1,now(),'todo')";
    let result = yield wPool.query(exportsql);
    return { result: result, sql: _sql };
}

function getCampaignSignExportListSql(condition) {
    let _sql, _condition;

    //定义字段
    let _fields = " DISTINCT c.cardno as '会员卡号',s.customer_name as '会员姓名',s.mobile as '手机号',s.person_num as '参与人数'," +
        "date_format(s.createdtime,'%Y-%m-%d %T') as '报名时间',s.checkin_code as '签到码'," +
        "case when s.status=0 then '未确认' when  s.status=1 then '已确认' when  s.status=2 then '已取消' when  s.status=3 then '未通过' else '已签到' end as '状态'," +
        "concat(date_format(ss.season_date,'%Y-%m-%d'),' ',left(SEC_TO_TIME(st1.begin_time),5),'~',left(SEC_TO_TIME(st1.end_time),5)) as '报名场次' ," +
        "concat(date_format(cs.season_date,'%Y-%m-%d'),' ',left(SEC_TO_TIME(st2.begin_time),5),'~',left(SEC_TO_TIME(st2.end_time),5)) as '实际签到场次', "+
        " params  ";
    //处理查询条件
    _condition = " campaign_id=@id@";
    //处理排序和分页
    if (condition.mobile) {
        _condition += " and mobile=@mobile@";
    }
    if (condition.status) {
        if (condition.status == 3) {
            _condition += " and status in (2,3)";
        } else {
            _condition += " and status=@status@";
        }
    }

    let where2=" 1=1 ";
    //报名场次日期
    if (condition.sign_session_date) {
        where2 += " and date_format(ss.season_date,'%Y-%m-%d')=date_format(@sign_session_date@,'%Y-%m-%d') ";
    }
    //报名场次时间段
    if (condition.sign_session_id) {
        where2 += " and st1.id=@sign_session_id@ ";
    }
    //实际签到场次日期
    if (condition.checkin_session_date) {
        where2 += " and date_format(cs.season_date,'%Y-%m-%d')=date_format(@checkin_session_date@,'%Y-%m-%d') ";
    }
    //实际签到场次时间段
    if (condition.checkin_session_id) {
        where2 += " and st2.id=@checkin_session_id@ ";
    }


    //定义表
    let _tableName = "app_campaign_sign as s " +
        "inner join (select innerid from app_campaign_sign  where  " + _condition +") as s1 on s.innerid=s1.innerid\
       left join sr_cust_card  c on c.custid=s.cust_id and c.statuscode=1 \
       left join app_campaign_sign_seasons ss on ss.sign_id=s1.innerid\
       left join app_campaign_checkin_seasons cs on cs.sign_id=s1.innerid\
       left join app_campaign_seasons_time st1 on st1.id=ss.seasons_time_id\
       left join app_campaign_seasons_time st2 on st2.id=cs.seasons_time_id  where "+where2;
    //拼接sql
    _sql = "select " + _fields + " from " + _tableName+" order by s.params desc";
    _sql = db.makeSQL(_sql, condition);
    return _sql;
}

exports.getSignInfoById = function* (id) {
    let sql = "select s.status, s.cust_id,s.campaign_id,a.name as campaign_name, a.image as campaign_image_uuid,a.campaign_scope as campaign_scope,\
    unix_timestamp(a.start_time) as start_time,unix_timestamp(a.end_time) as end_time,customer,c.photo as image_uuid, \
    s.mobile as phone,customer_name as name,person_num,params,status,unix_timestamp(s.modifiedtime) as time,\
    checkin_code,a.custom_display_address\
          from app_campaign_sign s\
          left join app_campaign a on a.id=s.campaign_id\
          left join sr_cust_customer c on c.id=s.cust_id \
          where s.innerid=@id@";
    sql = db.makeSQL(sql, { id: id });
    let result = yield rPool.query(sql);
    return { sign_info: result };
};



/**
 *  查询活动所有信息(分页)
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 */
exports.searchPvUvDetail = function* (condition, sort, page) {
    let _sql, _sortAndPage;
    if (!condition.end) {
        condition.end = condition.start;
    }
    //定义字段
    let _fields = " c.id,c.name,ifnull(a.wechatpv,0) as wechatpv ,ifnull(b.apppv,0) as apppv,ifnull(d.wechatuv,0) as wechatuv,ifnull(e.appuv,0) as appuv";

    _sortAndPage = comm.sortAndPage(sort, page);

    //定义表
    let _tableName = "app_campaign as c " +
        "inner join (select id from app_campaign  c where display_start_time<=concat(@end@,' 23:59:59') and display_end_time>=concat(@start@,' 00:00:00') " + _sortAndPage.sort + ' ' + _sortAndPage.page + ") as c1 on c.id=c1.id\
       left join (select count(1) as wechatpv,campaign_id from app_campaign_click where source_type=1 and createdtime>=concat(@start@,' 00:00:00') and createdtime<=concat(@end@,' 23:59:59') group by campaign_id) a on a.campaign_id=c.id\
       left join (select count(1) as apppv,campaign_id from app_campaign_click where source_type=2 and createdtime>=concat(@start@,' 00:00:00') and createdtime<=concat(@end@,' 23:59:59') group by campaign_id) b on b.campaign_id=c.id\
       left join (select count(1) as wechatuv,campaign_id from (select cust_id,campaign_id from app_campaign_click where source_type=1 and createdtime>=concat(@start@,' 00:00:00') and createdtime<=concat(@end@,' 23:59:59') group by campaign_id,cust_id) t group by campaign_id) d on d.campaign_id=c.id\
       left join (select count(1) as appuv,campaign_id from (select cust_id,campaign_id from app_campaign_click where source_type=2 and createdtime>=concat(@start@,' 00:00:00') and createdtime<=concat(@end@,' 23:59:59') group by campaign_id,cust_id) t group by campaign_id) e on e.campaign_id=c.id ";
    //拼接sql
    _sql = "select " + _fields + " from " + _tableName + " " + _sortAndPage.sort;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    if (result && 'length' in result && result.length > 0) {
        return { data: result };
    }
    else {
        return { data: [] };
    }
};

/**
 *  查询活动总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
exports.searchPvUvDetailCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "app_campaign as c";
    if (!condition.end) {
        condition.end = condition.start;
    }
    //处理查询条件
    _sql = " select count(1) as totalcount from " + _tableName + " where display_start_time<=concat(@end@,' 23:59:59') and display_end_time>=concat(@start@,' 00:00:00')";
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    if (result && 'length' in result && result.length > 0) {
        let totalCount = result[0].totalcount;
        let json = {
            TotalCount: [{ count: totalCount }]
        };
        return json;
    }
    else {
        return null;
    }
};

exports.ExportCampaign = function* (data) {
    let sql = data.sql;
    let uuid = sc.guid();

    let filename = data.filename + CurentTimeNoBlank() + '.xlsx';
    console.log("生成文件名:"+filename);
    console.error("执行的sql语句："+sql)
    let result = yield rPool.query(sql);

    if (result && result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            let sign=result[i];
            if(sign.params&&sign.params.length>0)
            {
                console.log('sign.params:'+sign.params)
                let para=JSON.parse(sign.params);
                para.forEach(function(item,index)
                {
                    console.log('sign.params:'+JSON.stringify(item))
                    sign[item.key]=item.value;
                })
            }
            delete sign.params;
        }

        console.log('export Campaign Sign result:'+JSON.stringify(result));
        let excel = require('node-xlsxwriter.node');
        let ret = excel.test(filename, result, []);
        let updateResult = yield uploadFile(filename);
        if (typeof updateResult != 'Object') {
            updateResult = JSON.parse(updateResult);
        }
        if (updateResult.code == 0 && updateResult.uuid) {
            sql = "update sr_sys_export set statuscode=2,path='" + updateResult.uuid + "' where id=@id@";
            sql = db.makeSQL(sql, data)
            let result = yield wPool.query(sql);
        }
    }
    else {
        sql = "update sr_sys_export set statuscode=3 where id=@id@";
        sql = db.makeSQL(sql, data)
        let result = yield wPool.query(sql);
    }
}

function CurentTimeNoBlank() {
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //分

    var clock = year + "";

    if (month < 10)
        clock += "0";

    clock += month + "";

    if (day < 10)
        clock += "0";

    clock += day + "";

    if (hh < 10)
        clock += "0";

    clock += hh + "";
    if (mm < 10) clock += '0';
    clock += mm + "";
    if (ss < 10) clock += '0';
    clock += ss;
    return (clock);
}

var uploadFile = function (filepath) {
    return new Promise(function (resolve, reject) {
        var innerid = sc.guid();
        var exec = require('child_process').exec;
        //调用小工具
        exec('node ' + sc.formatString("$(CurrentDirectory)../scResource/resClient/resClient.js") + ' upload -s ' +
            app.conf.scResource.resourceHost + ':' + app.conf.scResource.httpPort + ' -F ' + innerid + ' -t temp -p sr -P ' + filepath
            , { timeout: 10000 }, function (err, msg) {
                fs.unlinkSync(filepath);
                if (err) {
                    reject(err)
                } else {
                    try {
                        console.log(JSON.stringify(msg));
                        if (JSON.parse(msg).code == 0) {
                            resolve(msg);
                        } else {
                            reject(msg);
                        }
                    }
                    catch (e) {
                        console.error(e.stack);
                        reject(e.stack);
                    }
                }
            })
    })
};


// exports.queryAllSessionTime=function* (data)
// {
//     let sql="";
//     if(data.need_check==1)
//     {
//         sql=" select t.id, t.week,t.begin_time,t.end_time ,t.seasons_id,t.remark\
//               from app_campaign_seasons_time t\
//               inner join  app_campaign_seasons se on se.id=t.seasons_id\
//               inner join app_campaign_sign on si se.id=si.seasons_id and si.status=4 and si.campaign_id='"+data.campaign_id+"' "+
//               "where se.campaign_id='"+data.campaign_id+"';"
//     }
//     else
//     {
//         sql=" select t.id, t.week,t.begin_time,t.end_time ,t.seasons_id,t.remark\
//               from app_campaign_seasons_time t \
//               inner join app_campaign_seasons s on t.seasons_id=s.id where s.campaign_id='"+data.campaign_id+"';"
//     }
//     let result = yield rPool.query(sql);
//     return result;
// }

exports.queryAllSessions=function* (data)
{
    let sql="";
    //签到场次
    if(data.need_check==1)
    {
        sql=" select DISTINCT st.id,\
              DATE_FORMAT(cs.season_date ,'%Y-%m-%d') as season_date,\
              st.remark,\
              st.begin_time as begin_time,\
              st.end_time as end_time\
              from  app_campaign_seasons_time  st  \
              inner join app_campaign_checkin_seasons cs on st.id=cs.seasons_time_id\
              inner join app_campaign_sign si on cs.sign_id=si.innerid and si.status=4 and si.campaign_id='"+data.campaign_id+"' \
              where si.campaign_id='"+data.campaign_id+"';"
    }
    //报名场次
    else
    {
        sql=" select DISTINCT st.id,\
            DATE_FORMAT(cs.season_date ,'%Y-%m-%d') as season_date, \
            st.remark,\
            st.begin_time as begin_time, \
            st.end_time as end_time\
            from  app_campaign_seasons_time st  \
            inner join app_campaign_sign_seasons cs on st.id=cs.seasons_time_id  \
            inner join app_campaign_sign si on cs.sign_id=si.innerid and si.campaign_id='"+data.campaign_id+"' \
            where si.campaign_id='"+data.campaign_id+"';"
    }
    let result = yield rPool.query(sql);
    return result;
}


exports.queryCheckinCode=function* (sign_id)
{
    let sql=" select checkin_code from app_campaign_sign where innerid='"+sign_id+"';";
    let result = yield rPool.query(sql);
    return result[0].checkin_code;
}

