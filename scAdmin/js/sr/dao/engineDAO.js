'use strict';
/**
 * Created by Eason on 2016/7/15.
 */
let sc = require('smartacjs'),
    db = sc.db(),
    app = sc.app();
var config = app.conf;
exports.rewardsRuleList = function* (query, conn) {
    var from = 0;
    var to = 10;
    var sp = "";
    if (query.querytype == 'main') {
        sp = " SELECT id,concat('ruletype_',typeid) as typeid,name,remark,date_format(begintime,'%Y-%m-%d %T')  as begintime,date_format(endtime,'%Y-%m-%d %T')as endtime,status,ifnull(count,0) as count FROM  sr_rewards_rulemain a\
                left join (select count(1) as count,ruleid from ( select count(1),ruleid from sr_rewards_rule_rewardsdetail where status='0' group by ruleid,hisuuid) t group by t.ruleid) b on a.id=b.ruleid\
        where 1 = 1 ";
    }
    else {
        sp = "SELECT count(1) as countnum FROM  sr_rewards_rulemain  where 1=1";
    }
    if (query.where) {
        if (query.where.typeid) {
            sp += " and typeid=@typeid@";
        }
        if (query.where.name) {
            sp += " and name like '%@name@%' "
        }
    }
    if (query.querytype == "main") {
        if (query.order.ordername) {
            sp += " order by " + query.order.ordername;
        }
        else {
            sp += " order by id ";
        }
        if (query.order.ordertype) {
            sp += " " + query.order.ordertype;
        }
        else {
            sp += " desc";
        }
        if (query.page) {
            if (query.page.index) {
                from = (query.page.index - 1) * query.page.num;
                to = parseInt(query.page.num);
            }
        }
        else {
            from = 0;
            to = 10;
        }
        sp += " limit " + from + "," + to;
    }
    sp = db.makeSQL(sp, query.where)
    let result;

    if (conn) {
        result = yield conn.query(sp);
    }
    else {
        result = yield app.res.getWPoolSync('sr').query(sp);
    }
    return result;

};

//��ȡĳһ��������ϸ
exports.queryRewardsRule = function* (query) {
    let sql = "select id,typeid,name,remark,date_format(begintime,'%Y-%m-%d %T')  as begintime,date_format(endtime,'%Y-%m-%d %T')as endtime,status,tagid,rewardtype from sr_rewards_rulemain where id=@id@";
    sql = db.makeSQL(sql, query)
    let conn = yield app.res.getDBWConnection("sr", "queryRewardsRule");
    try {
        var _result = null;
        _result = yield conn.query(sql);
        if (_result && _result.length > 0) {
            let rulesql = "SELECT * FROM sr_rewards_ruledetail where ruleid=@id@";
            rulesql = db.makeSQL(rulesql, query)
            let rules = yield conn.query(rulesql);
            _result[0].rolelist = rules
            if (_result[0].typeid == 5 || _result[0].typeid == 6 || _result[0].typeid == 7 || _result[0].typeid == 8) {
                _result[0].maxtimes = rules[0].maxtimes;
                _result[0].totaltimes = rules[0].totaltimes;
                _result[0].tag = rules[0].tagtype;
            }
            let details = [];
            for (let item of _result[0].rolelist) {
                let detailsql = "select a.id,a.detailid,a.typeid,a.point,a.exday,concat(a.couponid,',',b.name) as coupon,a.num,a.multiple from sr_rewards_rule_rewards a left join sr_coupon_template b on a.couponid=b.id  where detailid=@id@";
                detailsql = db.makeSQL(detailsql, item)
                let detail = yield conn.query(detailsql);
                details.push(detail);
            }
            if (_result[0].typeid == 5 || _result[0].typeid == 6 || _result[0].typeid == 7 || _result[0].typeid == 8) {
                _result[0].details = details[0];
            }
            let index = 0;
            for (let detail of details) {
                _result[0].rolelist[index].details = detail;
                index++;
            }
            return _result;
        }
        else {
            return _result;
        }
    }
    catch (err) {
        console.error("err==" + err);
    }
    finally {
        conn.release();
    }
};

////�޸Ĺ���״̬
exports.setRuleStatus = function* (query, conn) {
    var sql = "update sr_rewards_rulemain set status=abs(status-1) where id=@id@";
    sql = db.makeSQL(sql, query)
    let result;
    if (conn) {
        result = yield conn.query(sql);
    }
    else {
        result = yield app.res.getWPoolSync('sr').query(sql);
    }
    return result;
};

exports.saveRule = function* (model) {
    let conn = yield app.res.getDBWConnection("sr", "saveRule");
    try {
        yield conn.beginTransaction();
        model.rewardtype = model.rewardtype ? model.rewardtype : 0;
        model.tagid = model.tagid ? model.tagid : null;
        model.begintime = model.begintime ? model.begintime : null;
        model.endtime = model.endtime ? model.endtime : null;
        model.remark = model.remark ? model.remark : null;
        if (!model.id) {
            var mainsql = "insert into sr_rewards_rulemain(typeid,name,rewardtype,tagid,begintime,endtime,status,remark)values(@typeid@,@name@,@rewardtype@,@tagid@,@begintime@,@endtime@,0,@remark@)";
            mainsql = db.makeSQL(mainsql, model)
            let result = yield conn.query(mainsql);
            let ruleid = result.insertId;
            let items = [];
            for (let item of model.rolelist) {
                item.tagtype = item.tagtype ? item.tagtype : null;
                let rulesql = "insert into sr_rewards_ruledetail(ruleid,content,orderid,maxtimes,totaltimes,tagtype) values(@ruleid@,@content@,@orderid@,@maxtimes@,@totaltimes@,@tagtype@)";
                rulesql = db.makeSQL(rulesql, {
                    ruleid: ruleid,
                    content: item.content,
                    orderid: item.orderid,
                    maxtimes: (item.maxtimes == '' || item.maxtimes == null) ? 0 : item.maxtimes,
                    totaltimes: item.totaltimes,
                    tagtype: item.tagtype
                })
                let roleResult = yield conn.query(rulesql);
                for (let detail of item.details) {
                    detail.point = detail.point ? detail.point : null;
                    detail.exday = detail.exday ? detail.exday : null;
                    detail.couponid = detail.couponid ? detail.couponid : null;
                    detail.num = detail.num ? detail.num : null;
                    detail.multiple = detail.multiple ? detail.multiple : null;
                    let sql = "insert into sr_rewards_rule_rewards(detailid,typeid,point,exday,couponid,num,multiple,createdtime) values(@insertId@,@typeid@,@point@,@exday@,@couponid@,@num@,@multiple@,now())";
                    sql = db.makeSQL(sql, {
                        insertId: roleResult.insertId,
                        typeid: detail.typeid,
                        point: detail.point,
                        exday: detail.exday,
                        couponid: detail.couponid,
                        num: detail.num,
                        multiple: detail.multiple
                    });
                    yield conn.query(sql);
                }
            }

            if (model.typeid == 8) {
                for (let item of model.rolelist[0].tagids) {
                    let tagsql = "insert into sr_rewards_rule_tag(tagid,detailid)values(" + item + "," + items[0].insertId + ")";
                    yield conn.query(tagsql);
                }
            }
        }
        else {
            let res = []
            let updatemain = "update sr_rewards_rulemain set name=@name@,rewardtype=@rewardtype@,tagid=@tagid@,begintime=@begintime@,endtime=@endtime@,remark=@remark@ where id=@id@";
            updatemain = db.makeSQL(updatemain, model);
            yield conn.query(updatemain);
            for (let role of model.rolelist) {
                role.content = role.content ? role.content : null;
                role.orderid = role.orderid ? role.orderid : null;
                role.maxtimes = (role.maxtimes == '' || role.maxtimes == null) ? 1 : role.maxtimes;
                role.totaltimes = (role.totaltimes == '' || role.totaltimes == null) ? 1 : role.totaltimes;
                role.tagtype = role.tagtype ? role.tagtype : null;
                if (model.typeid == 5 || model.typeid == 6 || model.typeid == 7 || model.typeid == 8) {
                    let updatesql = "update sr_rewards_ruledetail set content=@content@, orderid=@orderid@,maxtimes=@maxtimes@,totaltimes=@totaltimes@,tagtype=@tagtype@ where id=@id@";
                    updatesql = db.makeSQL(updatesql, role);
                    yield conn.query(updatesql)
                }
                else {
                    if (role.status) {
                        if (role.status == 'new') {
                            console.error("1111111111==" + JSON.stringify(role))
                            let newsql = "insert into sr_rewards_ruledetail(ruleid,content,orderid,maxtimes,totaltimes,tagtype) values(@ruleid@,@content@,@orderid@,@maxtimes@,@totaltimes@,@tagtype@)";
                            newsql = db.makeSQL(newsql, role);
                            let roleRes = yield conn.query(newsql);
                            for (let detail of role.details) {
                                detail.point = detail.point ? detail.point : null;
                                detail.exday = detail.exday ? detail.exday : null;
                                detail.couponid = detail.couponid ? detail.couponid : null;
                                detail.num = detail.num ? detail.num : null;
                                detail.multiple = detail.multiple ? detail.multiple : null;
                                let newsql = "insert into sr_rewards_rule_rewards(detailid,typeid,point,exday,couponid,num,multiple,createdtime) values(@insertId@,@typeid@,@point@,@exday@,@couponid@,@num@,@multiple@,now())";
                                newsql = db.makeSQL(newsql, {
                                    insertId: roleRes.insertId,
                                    typeid: detail.typeid,
                                    point: detail.point,
                                    exday: detail.exday,
                                    couponid: detail.couponid,
                                    num: detail.num,
                                    multiple: detail.multiple
                                });
                                yield conn.query(newsql);
                            }
                        }
                        else if (role.status == 'update') {
                            let updatesql = "update sr_rewards_ruledetail set content=@content@, orderid=@orderid@,maxtimes=@maxtimes@,totaltimes=@totaltimes@,tagtype=@tagtype@ where id=@id@";
                            updatesql = db.makeSQL(updatesql, role);
                            yield conn.query(updatesql)
                        }
                        else if (role.status == 'deleted') {
                            let deletesql = "delete from sr_rewards_ruledetail where id=@id@";
                            deletesql = db.makeSQL(deletesql, role);
                            yield conn.query(deletesql);
                            var deletedsql = "delete from sr_rewards_rule_rewards where detailid=@id@";
                            deletedsql = db.makeSQL(deletedsql, role);
                            yield conn.query(deletedsql);
                        }
                    }
                }
                for (let detail of role.details) {
                    detail.point = detail.point ? detail.point : null;
                    detail.exday = detail.exday ? detail.exday : null;
                    detail.couponid = detail.couponid ? detail.couponid : null;
                    detail.num = detail.num ? detail.num : null;
                    detail.multiple = detail.multiple ? detail.multiple : null;
                    if (role.status != 'new' && role.status != 'deleted') {
                        var detailsql = '';
                        if (detail.status == 'new') {
                            detailsql = "insert into sr_rewards_rule_rewards(detailid,typeid,point,exday,couponid,num,multiple,createdtime) values(@id@,@typeid@,@point@,@exday@,@couponid@,@num@,@multiple@,now())";
                            detailsql = db.makeSQL(detailsql, {
                                id: role.id,
                                typeid: detail.typeid,
                                point: detail.point,
                                exday: detail.exday,
                                couponid: detail.couponid,
                                num: detail.num,
                                multiple: detail.multiple
                            });
                            yield conn.query(detailsql);
                        }
                        else if (detail.status == 'update') {
                            detailsql = "update sr_rewards_rule_rewards set typeid=" + detail.typeid + ",point=" + detail.point + ",exday=" + detail.exday + ",couponid=" + detail.couponid + ",num=" + detail.num + ",multiple=" + detail.multiple + " where id=" + detail.id;
                            detailsql = db.makeSQL(detailsql, detail);
                            yield conn.query(detailsql);
                        }
                        else if (detail.status == 'deleted') {
                            detailsql = "delete from sr_rewards_rule_rewards where id=" + detail.id;
                            detailsql = db.makeSQL(detailsql, detail);
                            yield conn.query(detailsql);
                        }

                    }
                }
            }
            if (model.typeid == 8) {
                let deletetag = "delete from sr_rewards_rule_tag where detailid=@detailid@";
                deletetag = db.makeSQL(deletetag, { detailid: model.rolelist[0].id });
                yield conn.query(deletetag);
                for (let item of model.rolelist[0].tagids) {
                    let tagsql = "insert into sr_rewards_rule_tag(tagid,detailid)values(" + item + "," + model.rolelist[0].id + ")";
                    yield conn.query(tagsql);
                }
            }
        }
        yield conn.commit();
        return true;
    }
    catch (err) {
        if (conn) {
            yield conn.rollback();
        }
        return false;
    }
    finally {
        if (conn) {
            conn.release();
        }
    }

};

exports.getRuleTag = function* (query, conn) {
    var sql = "select b.* from sr_rewards_rule_tag a left join sr_tag_tag  b on a.tagid=b.id left join sr_rewards_ruledetail c on c.id=a.detailid where c.ruleid=  @id@";
    sql = db.makeSQL(sql, query)
    let result;
    if (conn) {
        result = yield conn.query(sql);
    }
    else {
        result = yield app.res.getWPoolSync('sr').query(sql);
    }
    return result;
};

exports.getHistory = function* (query, conn) {
    var from = 0;
    var to = 10;
    var sp = "";
    if (query.querytype == 'main') {
        sp = " SELECT c.photo,c.fullname,c.mobile, sum(addednum) as point,group_concat(concat(d.name,':',e.no)) as coupon, date_format(max(a.createdtime),'%Y-%m-%d %T') as createdtime\
                    FROM sr_rewards_rule_rewardsdetail a\
                    left join sr_point_receipt b on a.pointid = b.id\
                    left join sr_coupon_instance e on e.id=a.couponid\
                    left join sr_coupon_template d on d.id = e.coupon_temp_id\
                    left join sr_cust_customer c on c.id = a.custid where a.status=0 and a.ruleid = @id@\
                    group by a.ruleid, a.hisuuid order by a.createdtime desc";
    }
    else {
        sp = "SELECT count(1) as TotalCount FROM  (SELECT count(1) from sr_rewards_rule_rewardsdetail where ruleid=@id@ and status=0 group by ruleid, hisuuid) t";
    }
    sp = db.makeSQL(sp, query.where)
    if (query.querytype == "main") {
        if (query.page) {
            if (query.page.num) {
                from = (query.page.num - 1) * query.page.item;
                to = parseInt(query.page.item);
            }
        }
        else {
            from = 0;
            to = 10;
        }
        sp += " limit " + from + "," + to;
    }
    let result;
    if (conn) {
        result = yield conn.query(sp);
    }
    else {
        result = yield app.res.getWPoolSync('sr').query(sp);
    }
    return result;
};