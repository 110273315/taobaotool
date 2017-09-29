/**
 * Created by kyler on 2016/7/13 0013.
 */

'use strict'
let sc = require('smartacjs'),
    app = sc.app(),
    _ = sc._,
    Promise = sc.Promise,
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPoolSR = app.res.getRPoolSync('sc'),
    wPoolSR = app.res.getWPoolSync('sc'),
    rPoolShake = app.res.getRPoolSync('sc'),
    wPoolShake = app.res.getWPoolSync('sc');
/*
 *  标签列表
 * */
var gameList = function* (condition, sort, page) {
    let sqlWhere = '',_sortAndPage;
    if (condition) {
        if (condition.gamename) {
            sqlWhere += " and a.name like @gamename@";
        }
        if (condition.gamestatus) {
            sqlWhere += " and a.status=@gamestatus@";
        }

        if(condition.starttime)
        {
            sqlWhere +=" and a.starttime >=@starttime@";
        }

        if(condition.endtime)
        {
            sqlWhere +=" and a.endtime <date_add(@endtime@,interval 1 day)";
        }
    }

    var conds={};
    conds.gamename="%" + condition.gamename +"%";
    conds.gamestatus=condition.gamestatus;
    conds.starttime=condition.starttime;
    conds.endtime=condition.endtime;

    sqlWhere= db.makeSQL(sqlWhere,conds);
    _sortAndPage = comm.sortAndPage(sort, page);
    var sql = "SELECT a.id, a.name, DATE_FORMAT(a.starttime,'%Y-%m-%d') as starttime,DATE_FORMAT(a.endtime,'%Y-%m-%d') as endtime, a.status, a.gametype FROM sk_game a where 1=1 " + sqlWhere +" "+ _sortAndPage.sort + _sortAndPage.page + "    ; ";

    //执行SQL
    let result=yield  rPoolShake.query(sql);
    if (result && 'length' in result && result.length > 0) {
        return { data: result };
    }
    else {
        return null;
    }
}
exports.getGameList = gameList;

/*
 * 获取游戏数量
 * */
var getGameCount = function* (condition) {
    let sqlWhere = '';
    if (condition) {
        if (condition.gamename) {
            sqlWhere += " and a.name like @gamename@";
        }
        if (condition.gamestatus) {
            sqlWhere += " and a.status=@gamestatus@";
        }

        if(condition.starttime)
        {
            sqlWhere +=" and a.starttime >=@starttime@";
        }

        if(condition.endtime)
        {
            sqlWhere +=" and a.endtime <date_add(@endtime@,interval 1 day)";
        }
    }

    let conds={};
    conds.gamename="%" + condition.gamename +"%";
    conds.gamestatus=condition.gamestatus;
    conds.starttime=condition.starttime;
    conds.endtime=condition.endtime;

    sqlWhere= db.makeSQL(sqlWhere,conds);
    let sql = "select count(a.id) as TotalCount from  sk_game a where 1=1 " + sqlWhere + ";";

    //执行SQL
    let result=yield rPoolShake.query(sql);
    if (result && 'length' in result && result.length > 0) {
        let totalCount = result[0]['TotalCount'];
        let json = {
            TotalCount: [{ count: totalCount }]
        }
        return json;
    }
    else {
        return null;
    }
}
exports.getGameCount = getGameCount;

/*删除游戏*/
var GameDel = function* (id){
    let sql = "DELETE FROM sk_game WHERE id=@id@;";
    sql=db.makeSQL(sql,{"id":id});
    //?执行SQL
    let result=yield wPoolShake.query(sql);
    return result;
}
exports.GameDel = GameDel;


/*
 * 获取商铺列表
 * */
var Getshoplist = function* (condition,sort,page)
{
    let sqlWhere="";
    if(condition)
    {
        sqlWhere = "";
    }
    let sql="SELECT innerid AS Innerid, NO, NAME AS Spname, logourl, orgid, industryid_code, industryid_code_key,innerid AS Spcode,innerid AS Sppwd FROM sr_shop " +
        " where state=0 " + sqlWhere + ";";
    //?执行SQL

    let result =yield rPoolSR.query(sql);

    return result;
}

exports.Getshoplist = Getshoplist;

/*
 * 获取卡券列表
 * */
var Getrewardslist=function* (condition,sort,page)
{
    console.log(condition);
    var where="";
    if(condition.cardid)
    {
        where=" and id != @cardid@";
    }
    let sql="SELECT c.id AS Innerid, `name` AS `name`, image_id AS Imageurl,  '0' AS shopid,c.createdtime,c.max_assign_count as maxassigncount,\
     IFNULL((SELECT SUM(number) FROM sk_card WHERE srcouponid=c.id),0) as occupynum \
    FROM sr_coupon_template c \
    WHERE c.is_enabled=1 and c.applicable_channel=3 \
    and c.id IN (SELECT m.id FROM (SELECT c.id, c.max_assign_count,COUNT(i.id) AS assign FROM sr_coupon_template c LEFT JOIN sr_coupon_instance i\
    ON i.coupon_temp_id=c.id GROUP BY c.id) m\
    WHERE m.max_assign_count > m.assign)  ORDER BY c.createdtime DESC;";

    //?执行SQL
    console.log(sql);
    sql=db.makeSQL(sql,condition);
    let result=yield rPoolSR.query(sql);
    return result;
}

exports.Getrewardslist=Getrewardslist;