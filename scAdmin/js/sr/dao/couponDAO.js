'use strict';
var sc = require('smartacjs');
var app = sc.app();
let db = sc.db();
let wconn = app.res.getWPoolSync('sc');
let rconn = app.res.getRPoolSync('sc');
let comm = require('../../common/comm.js');
let Rabbit = sc.RabbitMQ();
let path = require('path');
let log = sc.createNamedLog('scAdmin', 'couponDAO')
let mqconn = app.res.getMQConnectionSync();
let cfRpcClient = Rabbit.createRPCClient(mqconn, "cf.wechat.rpc");
let cfEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wechat.proto.js")), "cf.wechat", "Message");

/**
 // *  查询礼券所有信息(分页)
 // * @param condition 查询条件
 // * @param sort 排序
 // * @param page 分页
 // */
var getCouponList = function* (condition, sort, page) {
    var _sql = getQueryCouponListSql(condition, sort, page, 0);
    return yield rconn.query(_sql);
};
var getCouponCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "sr_coupon_template as c";
    //默认值
    _condition = getCouponQueryWhere(condition);
    //处理查询条件
    _sql = " select count(*) as count from " + _tableName + " where " + _condition;
    //执行SQL
    return yield rconn.query(_sql);
};
function getQueryCouponListSql(condition, sort, page, getAll) {
    var _sql, _condition, _sortAndPage;
    var _tableName, _fields;
    if (getAll == 1)//for export
    {
        _tableName = "sr_coupon_template as c left join sr_coupon_rule r on c.id=r.coupon_temp_id";
        _fields = "DISTINCT c.name as 礼券名称,\
        c.applicable_channel as 投放渠道,\
        (case when c.valid_type_code=2 then CONCAT(' 有效天数:',c.valid_days) else CONCAT(DATE_FORMAT(c.valid_starttime,'%Y-%m-%d'),'~',DATE_FORMAT(c.valid_endtime,'%Y-%m-%d')) end) as 有效期, \
        c.left_count as 库存,\
        CONCAT(c.send_count,' / ',c.used_count) as '领取/核销' ,\
        CONCAT(DATE_FORMAT(r.retrievable_starttime,'%Y-%m-%d'),'~',DATE_FORMAT(r.retrievable_endtime,'%Y-%m-%d')) as 展示时间 ,\
        (case when c.is_enabled=1 then '启用' else '禁用' end) as 状态 ,\
        DATE_FORMAT(c.createdtime,'%Y-%m-%d %T') as 创建日期";
    }
    else//for search
    {
        _tableName = "sr_coupon_template as c left join sr_coupon_rule r on c.id=r.coupon_temp_id";
        _fields = "DISTINCT c.id as id,\
        c.name as name,\
        c.applicable_channel as applicable_channel,\
        (case when c.valid_type_code=2 then CONCAT(' 有效天数:',c.valid_days) else CONCAT(DATE_FORMAT(c.valid_starttime,'%Y-%m-%d'),'~',DATE_FORMAT(c.valid_endtime,'%Y-%m-%d')) end) as validdate, \
        c.max_assign_count as max_assign_count,\
        c.send_count as send_count,\
        c.used_count as used_count ,\
        c.left_count as left_count,\
        c.category_code as category_code,\
        CONCAT(DATE_FORMAT(r.retrievable_starttime,'%Y-%m-%d'),'~',DATE_FORMAT(r.retrievable_endtime,'%Y-%m-%d')) as showTime ,\
        c.is_enabled as is_enabled ,\
        DATE_FORMAT(c.createdtime,'%Y-%m-%d %T') as createdtime";
    }
    //定义表

    /* left join sc_code a on a.keycode=c.categorycode and a.parenttype='coupon_category'";*/
    //定义字段


    //处理查询条件
    _condition = getCouponQueryWhere(condition);
    //处理排序和分页

    //拼接sql
    if (getAll == 1) {
        _sql = "select " + _fields + " from " + _tableName + " where " +
            _condition + ";";
    }
    else {
        _sortAndPage = comm.sortAndPage(sort, page);

        _sql = "select " + _fields + " from " + _tableName + " where " +
            _condition + _sortAndPage.sort + _sortAndPage.page + ";";
    }

    return _sql;
}

function getCouponQueryWhere(condition) {
    var _whereSql = " 1=1 ";
    if (condition && condition != {}) {
        if (condition.max_assign_count) {
            _whereSql += " and (c.max_assign_count - c.send_count)<=@max_assign_count@";
        }
        if (condition.min_assign_count) {
            _whereSql += " and (c.max_assign_count - c.send_count)>=@min_assign_count@";
        }
        if (condition.name) {
            _whereSql += " and c.name like '%" + condition.name + "%'";
        }
        if (condition.category_code) {
            _whereSql += " and c.category_code=@category_code@";
        }
        if (condition.applicable_channel) {
            _whereSql += " and find_in_set(@applicable_channel@,c.applicable_channel)  ";
        }
        if (condition.class_code) {
            _whereSql += " and c.class_code=@class_code@";
        }
        if (condition.is_enabled) {
            _whereSql += " and c.is_enabled=@is_enabled@";
        }
        if (condition.orgids) {
            _whereSql += " AND c.orgid in ('" + condition.orgids.join(',').replace(/,/g, "\',\'") + "')";
        }
        _whereSql = db.makeSQL(_whereSql, condition);
    }
    return _whereSql;
}
///**
// *  查询礼券数量
// * @param condition 查询条件
// * @param sort 排序
// * @param page 分页
// */


var getCouponInstanceSql = function (condition, sort, page, getAll) {
    var _sql, _condition, _sortAndPage;
    var _tableName = "sr_coupon_instance i\
                      left join sr_cust_customer c on c.id=i.cust_id\
                      left join sr_cust_card card on card.custid=i.cust_id and card.statuscode=1\
                      left join sc_user u on u.innerid=i.used_source_id\
                      left join sr_coupon_order o on o.coupon_instance_id=i.id and o.cust_id=i.cust_id\
                      left join sr_coupon_template temp on temp.id=i.coupon_temp_id\
    left join sc_code as code2 on i.status=code2.keycode and code2.parentid=(select id from sc_code where keyname='CouponUseStatus')";
    //定义字段
    var _fields;
    //处理查询条件
    _condition = getCouponInstanceQueryWhere(condition);
    if (getAll == 0) {
        _fields = " i.id, card.cardno,c.fullname,card.levelno,c.mobile,temp.name,date_format(i.send_time,'%Y-%m-%d') as send_time,i.no,date_format(i.used_time,'%Y-%m-%d') as used_time,u.name as username, i.used_source_type,o.point,code2.keyvalue as coupon_status ";
        //处理排序和分页
        _sortAndPage = comm.sortAndPage(sort, page);
        //拼接sql
        _sql = "select " + _fields + " from " + _tableName + " where " +
            _condition + _sortAndPage.sort + _sortAndPage.page + ";";
    }
    else {
        _sql = "select\
        card.cardno as 会员卡号,\
        c.fullname as 姓名,\
        card.levelno as 等级,\
        c.mobile as 手机号码,\
        temp.name as 礼券名称,\
        date_format(i.send_time,'%Y-%m-%d') as 领取时间 ,\
        i.no as 领取序列号,\
        date_format(i.used_time,'%Y-%m-%d') as 核销时间,\
        u.name as username as 核销人, \
        code.keyvalue as 核销场所,\
        o.point as 积分\
        from sr_coupon_instance i\
        left join sr_cust_customer c on c.id=i.cust_id\
        left join sr_cust_card card on card.custid=i.cust_id and card.statuscode=1\
        left join sc_user u on u.innerid=i.used_source_id\
        left join sr_coupon_order o on o.coupon_instance_id=i.id and o.cust_id=i.cust_id\
        left join sr_coupon_template temp on temp.id=i.coupon_temp_id\
        left join sc_code code on code.keycode=i.used_source_type and keyname like 'coupon_usechannel_%'";
        _sql = " where " +  _condition + ";";
    }
    return _sql;
};
///**
// *  查询用券信息(分页)
// *  类型：1 发放， 2 已使用
// * @param condition 查询条件
// * @param sort 排序
// * @param page 分页
// */
var getCouponInstanceList = function* (condition, sort, page) {

    var _sql = getCouponInstanceSql(condition, sort, page, 0);
    return yield rconn.query(_sql);
};
function getCouponInstanceQueryWhere(condition) {
    var _whereSql = " 1=1 ";
    if (condition && condition != {}) {
        if (condition.name) {
            _whereSql += " and temp.name like concat('%',@name@,'%')";
        }
        if (condition.category_code) {
            _whereSql += " and find_in_set(@category_code@,temp.category_code)>0";
        }
        if (condition.applicable_channel) {
            _whereSql += " and temp.applicable_channel=@applicable_channel@";
        }
        if (condition.customer) {
            _whereSql += " and (c.mobile like concat('%',@customer@,'%') or card.cardno like concat('%',@customer@,'%')) ";
        }
        if (condition.no) {
            _whereSql += " and i.no like concat('%',@no@,'%') ";
        }
        if (condition.class_code) {
            _whereSql += " and temp.class_code=@class_code@";
        }
        if (condition.used_source_type) {
            _whereSql += " and temp.used_source_type=@used_source_type@";
        }
        if (condition.username) {
            _whereSql += " and u.name like concat('%',@username@,'%')";
        }
        if (condition.typecode == "1")//已发放
        {
            _whereSql += " and i.send_time is not null ";
        }
        else if (condition.typecode == "2")//已使用
        {
            _whereSql += " and i.used_time is not null";
        }
        if(condition.send_begin_time)
        {
            condition.send_begin_time+=" 00:00:00";
            _whereSql += " and i.send_time>=@send_begin_time@";
        }
        if(condition.send_end_time){
             condition.send_end_time+=" 23:59:59";
            _whereSql +=  " and i.send_time<=@send_end_time@";
        }
         if(condition.used_begin_time)
        {
            condition.used_begin_time+=" 00:00:00";
            _whereSql += " and i.used_time>=@used_begin_time@";
        }
        if(condition.used_end_time){
             condition.used_end_time+=" 23:59:59";
            _whereSql +=  " and i.used_time<=@used_end_time@";
        }
        _whereSql=db.makeSQL(_whereSql,condition);
    }
    return _whereSql;
}
///**
// *  查询用券数量
// * @param condition 查询条件
// */
var getCouponInstanceCount = function* (condition, callback) {
    var _sql, _condition;
    var _tableName = "sr_coupon_instance i\
                      left join sr_cust_customer c on c.id=i.cust_id\
                      left join sr_cust_card card on card.custid=i.cust_id and card.statuscode=1\
                      left join sc_user u on u.innerid=i.used_source_id\
                      left join sr_coupon_order o on o.coupon_instance_id=i.id and o.cust_id=i.cust_id\
                      left join sr_coupon_template temp on temp.id=i.coupon_temp_id\
    left join sc_code as code2 on i.status=code2.keycode and code2.parentid=(select id from sc_code where keyname='CouponUseStatus')";
    //默认值
    _condition = getCouponInstanceQueryWhere(condition);
    //处理查询条件
    _sql = " select count(1) as count from " + _tableName + " where " + _condition;
    //执行SQL
    return yield rconn.query(_sql);
};
//
//
//function * SendNoticeToSPay(couponid) {
//    console.error("SendNoticeToSPay:" + couponid);
//    var coupontemp = {
//        "header": {
//            "sender": "ntf_coupon_template_changed",
//            "sender_type": "sendertype1"
//        },
//        "ntf_coupon_template_changed": {
//            "coupon_template_info": []
//        }
//    };
//    var coupon_template_info = [];
//    var settle = [];
//    var settleobj = {};
//    var shop = [];
//    var obj = {};
//    try {
//        getCouponDetailById(couponid)
//            .then(function (r) {
//                console.error("getCouponDetailById:" + JSON.stringify(r[0]));
//                var result = r[0];
//
//                obj.id = result.id.toString();
//                obj.name = result.name;
//                obj.image = result.imageurl;
//                obj.type = result.categorycode;
//                obj.org_id = result.orgid;
//                obj.expire = {};
//                if (result.validtypecode == 1) {
//                    obj.expire = {
//                        absolute: {
//                            begin_time: result.validstarttime,
//                            end_time: result.validendtime
//                        }
//                    }
//                }
//                else {
//                    obj.expire = {
//                        relative: {
//                            day: result.validdays
//                        }
//                    };
//
//                }
//                obj.max_assign_count = result.maxassigncount;
//                obj.sent_count = result.sentcount;
//                obj.urplus_count = result.maxassigncount - result.sentcount;
//                if (result.goodtypecode) {
//                    obj.class_code = result.goodtypecode;
//                }
//                obj.detail_rule = result.detailrule;
//                obj.limit_count = result.uselimit;
//                obj.limit_fee = result.limitvalue;
//                if (result.maxdiscountamount) {
//                    obj.limit_max_discount = result.maxdiscountamount;
//                }
//
//                obj.face_value = result.couponvalue;
//                obj.so = {};
//                if (result.shortagehandlecode != 0) {
//                    obj.so.loio = result.shortagehandlecode;
//                }
//
//                // obj.so.sai = [];
//                //obj.shop_id = [];
//                return getSettlementListById(couponid);
//            })
//            .then(function (result) {
//                console.error("getSettlementListById:" + JSON.stringify(result));
//                if (result && result.length > 0) {
//                    result.forEach(function (r) {
//                        settleobj = {
//                            settlement_account_id: r.settlementid,
//                            value: r.settlementvalue
//                        };
//                        settle.push(settleobj);
//                    })
//                    obj.so.sai = settle;
//                }
//
//                return getShopListById(couponid);
//            })
//            .then(function (result) {
//                if (result && result.length > 0) {
//                    result.forEach(function (r) {
//                        shop.push(r.shopid);
//                    })
//                    obj.shop_id = shop;
//                }
//                coupon_template_info.push(obj);
//                coupontemp.ntf_coupon_template_changed.coupon_template_info = coupon_template_info;
//                return coupontemp;
//            })
//            .then(function (finnal) {
//                app.mqResource.pushMessage('customerCouponNew', finnal);
//            });
//
//    }
//    catch (err) {
//        console.error("SendNoticeToSPay Error:" + err);
//    }
//
//
//    //var obj1 = {
//    //    "header": {"sender": "ntf_coupon_template_changed", "sender_type": "sendertype1"},
//    //    "ntf_coupon_template_changed": {
//    //        "coupon_template_info":[
//    //            {
//    //                "id": "2",
//    //                "name": "test",
//    //                "image": "76f64be6-2385-481b-88b2-5639a2ea5e0c",
//    //                "type": 1,
//    //                "org_id": "1",
//    //                "expire": {
//    //                    "relative":
//    //                    {
//    //                        "day": 10
//    //                    }
//    //                },
//    //                "max_assign_count": 0,
//    //                "sent_count": 0,
//    //                "urplus_count": 0,
//    //                "class_code": 3,
//    //                "detail_rule": "<p>123</p>",
//    //                "limit_count": 0,
//    //                "limit_fee": 10,
//    //                "limit_max_discount": 10,
//    //                "face_value": 10,
//    //                //"so":{},
//    //                //"shop_id":{}
//    //                //"so": {"loio": 1, "sai": [{"settlement_account_id": "0", "value": 100}]},
//    //                //"shop_id": ["shop2"]
//    //            }
//    //        ]
//    //    }
//    //}
//    //app.mqResource.pushMessage('customerCouponNew', obj1);
//}
//
///**
// * 根据礼券ID获取礼券详细信息
// * @param id 礼券ID
// */
var getCouponDetailById = function* (id) {
    var _sql;
    //处理查询条件
    _sql = " select c.id as id,orgid,c.name as name,category_code,coupon_value,code_prefix,image_id,detail_rule,valid_type_code,\
    DATE_FORMAT(valid_starttime ,'%Y-%m-%d') as valid_starttime, DATE_FORMAT(valid_endtime ,'%Y-%m-%d') as valid_endtime,valid_days,\
    class_code,c.applicable_channel,max_assign_count,limit_value,max_discount_amount,settlement_type_code,shortage_handle_code,\
    is_sync_wechat,applicable_scope,send_count,used_count,is_enabled,c.createrid,c.createdtime,c.modifierid,c.modifiedtime,c.isenable_wechat_card,c.wechat_card_status\
     from sr_coupon_template c \
     where c.id= @id@;";
    _sql = db.makeSQL(_sql,{id:id})
    return yield rconn.query(_sql);
};

///**
// * 根据礼券ID获取礼券详细信息
// * @param id 礼券ID
// */
var getCouponRuleById = function* (id) {
    var _sql;
    //处理查询条件
    _sql = " select rule.id,rule.applicable_channel,\
    rule.cust_card_type_limit,rule.is_auto_down,rule.limit_type,rule.limit_num,rule.is_allow_share,\
    rule.exchange_type,\
    DATE_FORMAT(rule.retrievable_starttime ,'%Y-%m-%d %T') as retrievable_starttime,\
    DATE_FORMAT(rule.retrievable_endtime ,'%Y-%m-%d %T') as retrievable_endtime,\
    DATE_FORMAT(sale.sale_starttime ,'%Y-%m-%d %T') as sale_starttime,\
    DATE_FORMAT(sale.sale_endtime ,'%Y-%m-%d %T') as sale_endtime,\
    sale.remind_minutes ,is_allow_delivery\
     from  sr_coupon_rule rule left join sr_coupon_sale_rule sale on sale.rule_id=rule.id\
     where rule.coupon_temp_id= @id@;";
    _sql = db.makeSQL(_sql,{id:id})
    let result= yield rconn.query(_sql);
    if(result&&result.length>0) {
        for (var i = 0; i < result.length; i++)
        {
            let rule_id=result[i].id;
            _sql=" select * from sr_coupon_point_rule where rule_id= "+rule_id;
            let point_result= yield rconn.query(_sql);
            result[i].point_rule=point_result;
        }
    }
    return result;

};
exports.getCouponRuleById=getCouponRuleById;

///**
// * 根据礼券ID获取结算方列表信息
// * @param id 礼券ID
// */
var getSettlementListById = function* (id) {
    var _sql = " select sa.id,sa.sequence_no ,sa.settlement_value ,sa.settlement_id,cf.name as settlementname from sr_coupon_settlement_account as sa" +
        " left join cf_pay_settlement_account as cf on cf.innerid=sa.settlement_id  where sa.coupon_temp_id=@id@ order by sa.sequence_no asc;";
    _sql = db.makeSQL(_sql,{id:id})
    //执行SQL
    return yield rconn.query(_sql);
}
///**
// * 根据礼券ID获取礼券店铺列表信息
// * @param id 礼券ID
// */
var getShopListById = function* (id) {
    var _sql = " select cs.shop_id ,s.name as name , s.area as area from sr_coupon_shop cs left join sc_shop s on cs.shop_id=s.innerid where cs.coupon_temp_id=@id@;";
    //执行SQL
    _sql = db.makeSQL(_sql,{id:id})
    return yield rconn.query(_sql);
}

var getPonitRuleById = function* (id) {
    var _sql = " SELECT point_rule.id,point_rule.point,point_rule.amount,point_rule.cust_card_type_limit" +
        " from sr_coupon_point_rule point_rule LEFT JOIN sr_coupon_rule rule on rule.id = point_rule.rule_id " +
        "where rule.coupon_temp_id=@id@ and rule.applicable_channel=1;";
    //执行SQL
    _sql = db.makeSQL(_sql,{id:id})
    return yield rconn.query(_sql);
}
///**
// *  修改礼券状态
// * @param req 查询条件
// */
var updateCouponStatus = function* (req) {
    //执行SQL
    var _json = {
        errcode: 0
    };
    var rewardscontentLike = '\\"coupon\\":{\\"id\\":\\"' + req.id + '\\"';
    var checkSql = "select count(*) as count from sr_campaign where rewardscontent like '%" + rewardscontentLike + "%' and state not in (3,4,5)";
    let result = yield rconn.query(checkSql);
    if (result[0].count > 0) {
        _json.errcode = -5;
    }
    else {
        var _sql = "";
        if (req && req != {} && req.id) {
             _sql = "update sr_coupon_template set is_enabled=@is_enabled@, modifiedtime=now(),modifierid=@modifierid@ where id=@id@;";
             _sql = db.makeSQL(_sql, {is_enabled: req.statuscode, id: req.id, modifierid: req.userinfo.innerid});
             yield wconn.query(_sql);
            var newTemplate = yield * findCouponTemplate(req.id)
            log.info("begin update coupontemplate status,coupon data:" + JSON.stringify(newTemplate))
            newTemplate.is_enabled = parseInt(req.statuscode);
            newTemplate.modifierid = req.userinfo.innerid;
            let objs = [];
            objs.push(newTemplate)
            log.info("end update coupontemplate status,coupon data:" + JSON.stringify(objs))
            app.redis.set("coupon:template:" + req.id, JSON.stringify(objs))
        }
    }
    return _json;

};

var findCouponTemplate = function*(couponId) {
    log.info("find CouponTemplate By id:"+couponId)
    let couponTemplete = yield app.redis.get("coupon:template:"+couponId);
    couponTemplete = eval('(' + couponTemplete + ')')
    if(couponTemplete){
        log.info("find CouponTemplate Info from redis!")
        return couponTemplete[0];
    }else{
        var sql = "select id,orgid,name,category_code,coupon_value,code_prefix,image_id,detail_rule,valid_type_code,valid_starttime,valid_endtime,valid_days,\
    class_code,applicable_channel,max_assign_count,limit_value,max_discount_amount,settlement_type_code,shortage_handle_code,is_sync_wechat,applicable_scope,send_count,used_count,left_count,is_enabled,createrid,createdtime,modifierid,modifiedtime\
    from sr_coupon_template where id=@couponId@";
        sql = db.makeSQL(sql, {couponId: couponId});
        let result = yield rconn.query(sql);
        log.info("find CouponTemplate Info from mysql!")
        return result[0];
    }

};


// var findCouponTemplate = function*(couponId) {
//         var sql = "select id,orgid,name,category_code,coupon_value,code_prefix,image_id,detail_rule,valid_type_code,UNIX_TIMESTAMP(valid_starttime) as valid_starttime,UNIX_TIMESTAMP(valid_endtime) as valid_endtime,valid_days,\
//     class_code,applicable_channel,max_assign_count,limit_value,max_discount_amount,settlement_type_code,shortage_handle_code,is_sync_wechat,applicable_scope,send_count,used_count,is_enabled,createrid,createdtime,modifierid,modifiedtime\
//     from sr_coupon_template where id=@couponId@";
//         sql = db.makeSQL(sql, {couponId: couponId});
//         let result = yield rconn.query(sql);
//         return result;
// };

exports.getCouponLogList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;

    //定义字段
    let _fields = "a.id,a.coupon_temp_id,a.log_type,a.data,a.createrid,DATE_FORMAT(a.createdtime ,'%Y-%m-%d %H:%i:%s') as createdtime,b.name as username";

    //处理排序和分页
    _sortAndPage = comm.sortAndPage(sort, page);

    //定义表
    let _tableName = "sr_coupon_template_log a " +
        "left join sc_user b on b.innerid = a.createrid \
        where coupon_temp_id=@id@";

    //拼接sql
    _sql = "select " + _fields + " from " + _tableName + " " + _sortAndPage.sort + " " + _sortAndPage.page;
    //执行SQL
    _sql = db.makeSQL(_sql, condition)
    let result = yield rconn.query(_sql);
    if (result && 'length' in result && result.length > 0) {
        return { data: result };
    }
    else {
        return null;
    }
};

/**
 *  查询礼券日志总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
exports.getCouponLogCount = function* (condition) {
    var _sql, _condition;

    //处理查询条件
    _sql = "select count(1) as totalcount from sr_coupon_template_log where coupon_temp_id=@id@";

    //执行SQL
    _sql = db.makeSQL(_sql, condition)
    let result = yield rconn.query(_sql);
    if (result && 'length' in result && result.length > 0) {
        let totalCount = result[0]['totalcount'];
        let json = {
            TotalCount: [{ count: totalCount }]
        }
        return json;
    }
    else {
        return null;
    }
};


function formatsqlparam(sql) {
    if (sql.toString() != "") {
        return sql.toString().replace(/'/g, '');
    }
    else {
        return "";
    }


}

///**
// *  查询礼券历史所有信息(分页)
// * @param condition 查询条件
// * @param sort 排序
// * @param page 分页
// */
var getCouponHistoryList = function*(condition, sort, page) {
    //TODO 活动名称
    var _sql, _condition, _sortAndPage, _languagecode;
    _languagecode = 1;//TODO
    _sortAndPage = comm.sortAndPage(sort, page);
    //处理查询条件
    _condition = getCouponHistoryQueryWhere(condition, false);
    //定义表
    //INNER JOIN \
    //(SELECT id FROM sr_coupon_history as ch1 WHERE " + _condition + _sortAndPage.sort + _sortAndPage.page + ") AS ch2 ON ch.id=ch2.id  \
    var _tableName = "sr_coupon_instance as ci\
    LEFT JOIN sr_coupon_template ct ON ct.id = ci.coupon_temp_id\
    LEFT JOIN sr_coupon_order co ON co.coupon_instance_id = ci.id\
    LEFT JOIN sr_cust_customer c ON c.id = ci.cust_id\
    LEFT JOIN (SELECT * from sr_cust_card where statuscode = 1) cc ON c.id = cc.custid\
    left join sr_cust_customer scc on scc.id = ci.used_source_id\
    left join sc_code as code2 on ci.status=code2.keycode and code2.parentid=(select id from sc_code where keyname='CouponUseStatus')\
    LEFT JOIN sc_org AS o ON ci.orgid = o.innerid \
    LEFT JOIN sc_user user ON user.innerid=ci.used_source_id   where "+ _condition + _sortAndPage.sort + _sortAndPage.page;
    //定义字段
    var _fields = "ci.id as id,\
    cc.levelno AS levelno,\
        cc.cardno AS cardno,\
        ci. NO AS couponno,\
        ct. NAME AS couponname,\
        o. NAME AS shopname,\
        DATE_FORMAT(ci.used_time, '%Y-%m-%d %T') AS usedtime,\
        DATE_FORMAT(ci.send_time, '%Y-%m-%d %T') AS gettime,\
       case when ci.used_source_type='service' then '服务台' when  ci.used_source_type='store' then '商铺平台' else '其他' end as usechannelvalue,\
       user.name as verifiername,\
       CONCAT('coupon_sendchannel_',ci.send_source_type)  as sendchannelvalue,\
        c.fullname AS custname,\
        c.mobile AS mobile,\
        co.point AS point,\
        co.amount AS amount,\
        scc.fullname AS username,code2.keyvalue as coupon_status "


    //处理排序和分页


    //拼接sql
    _sql = "select " + _fields + " from " + _tableName
    /*        + " where " +
     _condition + _sortAndPage.sort + _sortAndPage.page + ";";*/

    //执行SQL
    return yield rconn.query(_sql);
};
//
function getCouponHistoryQueryWhere(condition, iscount) {
    var _whereSql = " 1 = 1 ";
    if (condition && condition != {}) {
        //var _opertypecode = condition.opertypecode ? condition.opertypecode : 1;
        //_whereSql += " and ch.oper_type_code=" + _opertypecode + " ";

        // if (iscount && !condition.starttime && !condition.endtime && !condition.custname && !condition.mobile && !condition.custname && !condition.couponno && !condition.verifiername && !condition.templeteid
        // ) {
        //     _whereSql += " AND ci.createdtime >=CURDATE() ";
        // }
        // else {
            //if (condition.opertypecode) {
            //    _whereSql += " and ch.oper_type_code=" + condition.opertypecode + " ";
            //}
            if (condition.name_mobile_cardnum) {
                _whereSql += " AND (ci.cust_id IN (SELECT id FROM sr_cust_customer WHERE (fullname like '" + condition.name_mobile_cardnum + "%' or reverse_fullname like '%" + condition.name_mobile_cardnum + "'))  or ci.cust_id IN (SELECT id FROM sr_cust_customer WHERE mobile='" + condition.name_mobile_cardnum + "')  or cc.cardno = '" + condition.name_mobile_cardnum + "') ";
            }
            //if (condition.mobile && !condition.custname) {
            //    _whereSql += " or ch.cust_id IN (SELECT id FROM sr_cust_customer WHERE mobile='" + condition.name_mobile_cardnum + "') ";
            //}
            //if (condition.custname && condition.mobile) {
            //    _whereSql += " AND ch.cust_id IN (SELECT id FROM sr_cust_customer WHERE (fullname like '" + condition.custname + "%' or reverse_fullname like '%" + condition.custname + "') and mobile='" + condition.mobile + "') ";
            //}
            ////会员卡号
            //if (condition.cardno) {
            //    _whereSql += " or cc.cardno = '" + condition.name_mobile_cardnum + "' ";
            //}
            if (condition.couponno) {
                _whereSql += " and ci.no='" + condition.couponno + "' ";
            }
            if (condition.verifiername) {
               _whereSql += " and user.name='" + condition.verifiername + "' ";
            }
            if (condition.templeteid) {
                _whereSql += " and ct.id ='" + condition.templeteid + "' ";
            }
            //********************************
            //礼券类型
            if (condition.categorycode) {
                _whereSql += " and ct.category_code =" + condition.categorycode +" " ;
            }
            //投放渠道
            if (condition.sendsourcetype) {
                _whereSql += " and ci.send_source_type = '" + condition.sendsourcetype + "' ";
            }
            // //投放渠道
            // if (condition.sendsourcetype) {
            //     _whereSql += " and ci.send_source_type = '" + condition.sendsourcetype + "' ";
            // }
            //兑换序列
            if (condition.no) {
                _whereSql += " and ci.no = '" + condition.no + "' ";
            }
            //展示分类
            if (condition.classcode) {
                _whereSql += " and ct.class_code = '" + condition.classcode + "' ";
            }
            //状态
            if (condition.status) {
                _whereSql += " and ci.status = '" + condition.status + "' ";
            }
            //核销人
            if (condition.usedsourceid) {
                _whereSql += " and ci.used_source_id = '" + condition.usedsourceid + "' ";
            }
            //核销场所
            if (condition.usedsourcetype) {
                _whereSql += " and ci.used_source_type = '" + condition.usedsourcetype + "' ";
            }
            if (condition.orgids) {
                _whereSql += " AND ci.orgid in ('" + condition.orgids.join(',').replace(/,/g, "\',\'") + "')";
            }
            //统计时段
            if (condition.coupon_period_type==1) {
                if (condition.starttime) {
                    _whereSql += " and  DATE_FORMAT(ci.send_time ,'%Y-%m-%d') >='" + condition.starttime + "' ";
                }
                if (condition.endtime) {
                    _whereSql += " and DATE_FORMAT(ci.send_time ,'%Y-%m-%d')<='" + condition.endtime + "' ";
                }
            }else{
                if (condition.starttime) {
                    _whereSql += " and  DATE_FORMAT(ci.used_time ,'%Y-%m-%d') >='" + condition.starttime + "' ";
                }
                if (condition.endtime) {
                    _whereSql += " and DATE_FORMAT(ci.used_time ,'%Y-%m-%d')<='" + condition.endtime + "' ";
                }
            }
        // }

    }
    return _whereSql;
}
//
///**
// *  查询礼券历史数量
// * @param condition 查询条件
// */
var getCouponHistoryCount = function  *(condition) {
    var _sql, _condition;
    //TODO 活动名称
    //定义表
    var _tableName = "sr_coupon_instance as ci\
    LEFT JOIN sr_coupon_template ct ON ct.id = ci.coupon_temp_id\
    LEFT JOIN sr_coupon_order co ON co.coupon_instance_id = ci.id\
    LEFT JOIN sr_cust_customer c ON c.id = ci.cust_id\
    LEFT JOIN (SELECT * from sr_cust_card where statuscode = 1) cc ON c.id = cc.custid\
    left join sr_cust_customer scc on scc.id = ci.used_source_id\
    left join sc_code as code2 on ci.status=code2.keycode and code2.parentid=(select id from sc_code where keyname='CouponUseStatus')\
    LEFT JOIN sc_org AS o ON ci.orgid = o.innerid\
    LEFT JOIN sc_user user ON user.innerid=ci.used_source_id";

    // var _tableName = "sr_coupon_history as ch \
    //    left join sr_coupon_instance ci on ch.instance_id = ci.id\
    //    left join sr_coupon_template ct on ct.id = ci.coupon_temp_id\
    //    left join sr_coupon_order co on co.coupon_instance_id = ci.id\
    //    left join sr_cust_customer c on c.id = ch.cust_id\
    //    left join sr_cust_card cc on c.id = cc.custid\
    //    left join sr_cust_customer scc on scc.id = ch.used_source_id  \
    //    left join sc_org as o on ci.orgid=o.innerid";
    //默认值
    _condition = getCouponHistoryQueryWhere(condition, true);
    //处理查询条件
    _sql = " select count(*) as count from " + _tableName + " where " + _condition;
    //执行SQL
    //填入查询条件
    //if (condition && condition != {} && (
    //        !condition.starttime && !condition.endtime && !condition.custname && !condition.mobile && !condition.custname && !condition.couponno && !condition.verifiername && !condition.couponname
    //    )) {
    //    let result = yield getPrecounter(condition);
    //    //预计算的数量 初始加载
    //    if (result && 'length' in result && result.length > 0) {
    //        var totalnum = result[0].totalnum ? result[0].totalnum : 0;
    //        _sql = " select " + totalnum + " + count(*) as count from " + _tableName + " where " + _condition;
    //        return yield rconn.query(_sql);
    //    }
    //}
    //else {
        return yield rconn.query(_sql);
    //}
};
//
var getCouponHistoryExport = function * (condition, callback) {
    //TODO 活动名称
    var _sql, _condition, _languagecode;
    _languagecode = 1;//TODO
    //处理查询条件
    _condition = getCouponHistoryQueryWhere(condition, false);
    //定义表
    var _tableName = "sr_coupon_instance as ci\
    LEFT JOIN sr_coupon_template ct ON ct.id = ci.coupon_temp_id\
    LEFT JOIN sr_coupon_order co ON co.coupon_instance_id = ci.id\
    LEFT JOIN sr_cust_customer c ON c.id = ci.cust_id\
    LEFT JOIN (SELECT * from sr_cust_card where statuscode = 1) cc ON c.id = cc.custid\
    left join sr_cust_customer scc on scc.id = ci.used_source_id\
    left join sc_code as code2 on ci.status=code2.keycode and code2.parentid=(select id from sc_code where keyname='CouponUseStatus')\
    LEFT JOIN sc_org AS o ON ci.orgid = o.innerid\
     LEFT JOIN sc_user user ON user.innerid=ci.used_source_id  where "+ _condition;
    //定义字段
    var _fields = "c.fullname AS '姓名',\
        c.mobile AS '手机号',\
        ct. NAME AS '礼券名称',\
        ci. NO AS '礼券编号',\
        code2.keyvalue as '礼券状态',\
        DATE_FORMAT(ci.send_time, '%Y-%m-%d %T') AS '领取时间',\
        co.point AS '积分变动',\
        co.amount AS '支付金额',\
    user.name AS '核销人',\
    DATE_FORMAT(ci.used_time, '%Y-%m-%d %T') AS '核销时间'";


    //拼接sql
    _sql = "select " + _fields + " from " + _tableName

    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(30,1,now(),'todo')";
    //执行SQL
    let result = yield wconn.query(exportsql);
    return { result: result, sql: _sql }

}
exports.getCouponHistoryExport = getCouponHistoryExport;
///*
// * 查询预计算的数量
// * */
//var getPrecounter = function  *(condition) {
//    var _whereSql = " where table_name='pagelist_couponsent_history' ";
//    if (condition && condition != {}) {
//        var _opertypecode = condition.opertypecode ? condition.opertypecode : 1;
//
//        if (_opertypecode != 1) {
//            _whereSql = "where table_name='pagelist_couponuse_history' ";
//        }
//    }
//    var _sql = "SELECT totalnum FROM sr_sys_precounter " + _whereSql + " limit 1;";
//    return yield rconn.query(_sql);
//}
//
///**
// *  查询所有的结算方
// * @param callback 回调函数
// */
var getAllSettlement = function* (callback) {
    var _sql = "select innerid,name from cf_pay_settlement_account";
    //执行SQL
    return yield rconn.query(_sql);
}
//
//
///**
// *  查询所有店铺信息(分页)
// * @param sort 排序
// * @param page 分页
// */
var getAllShopData = function* (condition, sort, page, needPaging) {
    var _sql, _sortAndPage, _condition;
    _sortAndPage = comm.sortAndPage(sort, page);
    _condition = getShopQueryWhere(condition);
    if (needPaging) {
        _sql = "select innerid,name,area from sr_shop where " +
            _condition + _sortAndPage.sort + _sortAndPage.page + ";";
    }
    else {
        _sql = "select innerid,name,area from sr_shop where " +
            _condition + ";";
    }
    return yield rconn.query(_sql);
}
function getShopQueryWhere(condition) {
    var _whereSql = " 1=1 and state = 0 ";
    if (condition && condition != {}) {
        if (condition.shopname) {
            _whereSql += " and name like '%" + condition.shopname + "%' ";
        }
        if (condition.industry) {
            _whereSql += " and industryid_code in (" + condition.industry + ") ";
        }
        if (condition.orgid) {
            //  _whereSql += " and orgid ='" + condition.orgid + "' ";
        }
    }
    return _whereSql;
}
//
//
///**
// *  查询所有店铺数量
// * @param sort 排序
// * @param page 分页
// */
var getAllShopCount = function* (needWhere, condition) {
    var _sql, _condition;

    if (needWhere) {
        _condition = getShopQueryWhere(condition);
        _sql = "select count(*) as count  from sc_shop where " + _condition + " ;";
    }
    else {
        _sql = "select count(*) as count  from sc_shop;";
    }
    return yield rconn.query(_sql);
}
//
//var getCouponShopCount = function* (couponid) {
//    var _sql;
//    _sql = "select count(*) as count  from sr_rewards_coupon_shop where couponid=" + couponid + ";";
//    return yield rconn.query(_sql);
//}
//
/**
 * 检查礼券是否存在
 * @param couponid
 */
var checkCouponExist = function* (req){
    var checksql = "select * from sr_coupon_template where id=@id@";
    checksql = db.makeSQL(checksql,{id:req.id})
    return yield rconn.query(checksql);
}
/**
 * 检查礼券是否超过库存
 * @param couponid
 */
var checkCouponReserve = function* (req){
    //var newTemplate = yield * findCouponTemplate(req.id);
    // var checksql = "select ifnull(max_assign_count,0)-ifnull(send_count,0) as remaincount from sr_coupon_template where id=@id@;";
    // checksql = db.makeSQL(checksql,{id:req.id})
   // return parseInt(newTemplate.max_assign_count)-parseInt(newTemplate.send_count);

    let left_count=yield app.redis.get("coupon:counter:"+req.id+":left");
    console.log('left_count:'+left_count)
    return parseInt(left_count);
   // return parseInt(newTemplate.left_count)
}
///**
// *  修改礼券最大发放数量
// * @param req 查询条件
// */
var updateCouponMaxCount = function* (req) {
    let conn = yield app.res.getDBWConnection("sr", "updateCouponMaxCount");
    var result;
    try {
        // var sql = "select max_assign_count from sr_coupon_template where id=@id@;"
        // sql = db.makeSQL(sql,{id:req.id})
        // let maxassigncount = yield conn.query(sql);
        var newTemplate = yield * findCouponTemplate(req.id)
        let maxassigncount =newTemplate.max_assign_count;
        let leftcount =newTemplate.left_count;
        result = yield conn.beginTransaction();
         var updatesql = "update sr_coupon_template set max_assign_count=(max_assign_count + @count@),left_count=(left_count+@count@) where  id=@id@;"
         updatesql = db.makeSQL(updatesql, {id: req.id, count: req.count})
         result = yield conn.query(updatesql);
        let newcount = parseInt(maxassigncount)+parseInt(req.count)
        let data = '{"old_max_assgin_count":'+maxassigncount+',"new_max_assgin_count":'+newcount+'}'
        let insertlogsql = "INSERT into sr_coupon_template_log (coupon_temp_id,log_type,data,createrid,createdtime) values(@id@,'库存修改',@data@,@custid@,NOW());"
        insertlogsql = db.makeSQL(insertlogsql, {id: req.id,data:data,count:req.count,custid:req.userinfo.innerid,})
        result = yield conn.query(insertlogsql);
        newTemplate.max_assign_count= newcount;
        newTemplate.left_count= parseInt(leftcount)+parseInt(req.count);
        let objs = [];
        objs.push(newTemplate);
        log.info("update coupontemplate MaxCount,coupon new data:" + JSON.stringify(objs))
        app.redis.set("coupon:template:"+req.id,JSON.stringify(objs))
        //将剩余库存数更新至redis
        app.redis.incrby("coupon:counter:"+req.id+":left",req.count);
        result = yield conn.commit()
        return result;
    } catch (e) {
        if (conn) {
            yield conn.rollback();
        }
    } finally {
        if (conn) {
            conn.release();
        }
    }
};
var getAllEnableCouponList = function* (req) {
    var _sql = "select * from sr_coupon_template a  where is_enabled=1 and max_assign_count-IFNULL(send_count,0)>0 ";
    //if (req && req.isoffline && req.isoffline == 1) {
    //    _sql += " and isonline=0";
    //}
    //if (req && req.isrewardchannel && req.isrewardchannel == 1) {
    //    _sql += " and applicable_channel like '%3%'";
    //}
    if (req && req.isvalid && req.isvalid == 1) {
        _sql += " and ((valid_type_code=1 and  valid_endtime>=now()) or valid_type_code=2)";
    }
    if (req.orgids) {
        _sql += " AND orgid in ('" + req.orgids.join(',').replace(/,/g, "\',\'") + "')";
    }
    _sql += " order by a.createdtime desc ;";
    if (req.iscopy == 1) {
        _sql = "select * from sr_coupon_template  order by createdtime desc ;";
    }

    //执行SQL
    return yield rconn.query(_sql);
}
var checkIfRelatedAllShop = function* (couponid) {
    var _sql = "select id ,name from sr_coupon_template where is_enabled=1";
    if (couponid) {
        _sql += " and id='" + couponid + "'";
    }
    //执行SQL
    return yield rconn.query(_sql);
}
var getExportSql = function* (condition, sort, page, typecode) {

    var _sql;
    _sql = typecode == 1 ? getQueryCouponListSql(condition, sort, page, 1) : getCouponInstanceSql(condition, sort, page, 1);

    var exportsql;
    if (typecode == 1) {
        exportsql = "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(2,1,now(),'todo')";
    }
    else {
        exportsql = "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(3,1,now(),'todo')";
    }
    let result = yield wconn.query(exportsql);
    return { result: result, sql: _sql };
}
var getExportList = function* (condition, page, callback) {

    var moduleid = condition.moduleid;
    var _sortAndPage = comm.sortAndPage(null, page);
    var sql;
    if (moduleid == 1) {
        sql = "select *,concat('export_status_',statuscode) as statusvalue from  sr_sys_export where moduleid=2 and createdtime>=DATE_SUB(now(),INTERVAL 7 DAY) order by createdtime desc " + _sortAndPage.page;
    }
    else {
        sql = "select *,concat('export_status_',statuscode) as statusvalue from  sr_sys_export where moduleid=3 and createdtime>=DATE_SUB(now(),INTERVAL 7 DAY) order by createdtime desc " + _sortAndPage.page;
    }
    return yield rconn.query(sql);

}
var getExportCount = function* (condition) {
    var moduleid = condition.moduleid;
    var sql;
    if (moduleid == 1) {
        sql = "select count(1) as totalcount from  sr_sys_export where  moduleid=2 and createdtime>=DATE_SUB(now(),INTERVAL 7 DAY);";
    }
    else {
        sql = "select count(1) as totalcount from  sr_sys_export where  moduleid=3 and createdtime>=DATE_SUB(now(),INTERVAL 7 DAY);";
    }
    return yield rconn.query(sql);
}
//
///**
// *  查询卡券导入历史记录
// * @param condition 查询条件
// * @param sort 排序
// * @param page 分页
// */
var getCouponImportHistoryList = function* (condition, sort, page, callback) {
    var _sql, _condition, _sortAndPage;
    var _tableName = " sr_sys_importhistory as tba\
                                  left join sc_org o on o.innerid=tba.orgid";
    var _fields = " ifnull(o.name,'') as shopname,\
        concat('import_status_',ifnull(tba.statuscode,'')) as statuscode,\
        tba.id,\
        tba.originalname as originalfilename,\
        tba.originalpath as originalpath,\
         tba.starttime as starttime,\
        tba.endtime as endtime,\
        tba.totalcount as totalcount,\
        tba.successcount as successcount,\
        tba.failedcount as failedcount,\
        tba.logpath as logpath,\
        tba.errorpath as errorpath";
    //处理查询条件
    _condition = getCouponImportHistoryWhere(condition);
    //处理排序和分页

    _sortAndPage = comm.sortAndPage(sort, page);
    if (sort && sort.column) {
        if (sort.type) {
            _sortAndPage.sort = 'ORDER BY ' + "tba." + sort.column + ' ' + sort.type;
        }
        else {
            _sortAndPage.sort = 'ORDER BY ' + "tba." + sort.column + ' DESC ';
        }
    }
    _sql = "select " + _fields + " from " + _tableName + " where " +
        _condition + " " + _sortAndPage.sort + _sortAndPage.page + ";";
    return yield rconn.query(_sql);
    //执行SQL

};
function getCouponImportHistoryWhere(condition) {

    var _whereSql = "tba.typecode=2 ";
    if (condition && condition != {}) {
        if (condition.orgid) {
            _whereSql += " and tba.orgid='" + condition.orgid + "'";
        }
        if (condition.statuscodequery) {
            _whereSql += " and tba.statuscode=" + condition.statuscodequery;
        }
        if (condition.name) {
            _whereSql += " and tba.originalname like '" + condition.name + "%' ";
        }
        if (condition.starttimequery) {
            _whereSql += " and DATE_FORMAT(tba.starttime ,'%Y-%m-%d')>='" + condition.starttimequery + "'";
        }
        if (condition.endtimequery) {
            _whereSql += " and  DATE_FORMAT(tba.endtime ,'%Y-%m-%d')<='" + condition.endtimequery + "'";
        }
    }
    return _whereSql;
}
//
///**
// *  查询卡券导入历史总数
// * @param condition 查询条件
// * @param callback 回调函数
// */
var getCouponImportHistoryCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "sr_sys_importhistory as tba  left join sc_org o on o.innerid=tba.orgid";
    //默认值
    _condition = getCouponImportHistoryWhere(condition);
    //处理查询条件
    _sql = " select count(*) as totalcount from " + _tableName + " where " + _condition;
    //执行SQL
    return yield rconn.query(_sql);
};
//
var importCoupon = function* (condition) {
    var sql = "insert into sr_sys_importhistory(orgid,typecode,originalname,originalpath,statuscode,createrid,createdtime)" +
        " value ('" + condition.orgid + "',2,'" + condition.name + "','" + condition.path + "',1,'todo',now())";
    return yield rconn.query(sql);
}
//
//
//var doValidationBeforeUseCoupon = function* (req) {
//    var couponList = req.couponno ? req.couponno.split(',') : null;
//    var couponnos = '';
//    if (couponList != null && couponList.length > 0) {
//        couponnos = couponList.join(",");
//    }
//    var sql = "call srsp_coupon_use_validate('" + couponnos + "'," + req.custid + ",'" + req.shopid + "','" + req.tradeid + "','" + req.tradeamount + "','" + req.tradetime + "',@errorcode); select @errorcode as errorcode;"
//    return yield wconn.query(sql);
//
//
//}
//
//var getCouponRuleList = function * (condition, sort, page) {
//
//    var _sql, _condition, _sortAndPage;
//    var _tableName = "sr_rewards_coupon_rule_list";
//    //定义字段
//    var _fields;
//    //处理查询条件
//    _condition = getCouponRuleListWhere(condition);
//
//    _fields = "id, CONCAT('couponruletype_',typecode) as typecode,name,DATE_FORMAT( rulevalidstarttime ,'%Y-%m-%d %T') as rulevalidstarttime,DATE_FORMAT( rulevalidendtime ,'%Y-%m-%d %T') as rulevalidendtime"
//
//    //处理排序和分页
//    _sortAndPage = comm.sortAndPage(sort, page);
//    //拼接sql
//    _sql = "select " + _fields + " from " + _tableName + " where " +
//        _condition + _sortAndPage.sort + _sortAndPage.page + ";";
//    return yield wconn.query(_sql);
//}
//
//var getCouponRuleCount = function* (condition, sort, page) {
//    var _sql, _condition, _sortAndPage;
//    var _tableName = "sr_rewards_coupon_rule_list";
//    //定义字段
//    var _fields;
//    //处理查询条件
//    _condition = getCouponRuleListWhere(condition);
//
//    _fields = "id,typecode,name,DATE_FORMAT( rulevalidstarttime ,'%Y-%m-%d %T') as rulevalidstarttime,DATE_FORMAT( rulevalidendtime ,'%Y-%m-%d %T') as rulevalidendtime"
//
//    //处理排序和分页
//    _sortAndPage = comm.sortAndPage(sort, page);
//    //拼接sql
//    _sql = "select " + _fields + " from " + _tableName + " where " +
//        _condition + _sortAndPage.sort + _sortAndPage.page + ";";
//    return yield rconn.query(_sql);
//}
//
//function * getCouponRuleListWhere(condition) {
//    var _whereSql = " 1=1 ";
//    if (condition && condition != {}) {
//        if (condition.name) {
//            _whereSql += " and name like '%" + condition.name + "%' ";
//        }
//        if (condition.typecode) {
//            _whereSql += " and typecode=" + condition.typecode + " ";
//        }
//    }
//    return _whereSql;
//}
//
//var getCouponRuleCount = function *(condition) {
//
//    var _sql, _condition;
//    var _tableName = "sr_rewards_coupon_rule_list ";
//    //默认值
//    _condition = getCouponRuleListWhere(condition);
//    //处理查询条件
//    _sql = " select count(*) as count from " + _tableName + " where " + _condition;
//    //执行SQL
//    return yield rconn.query(_sql);
//}
//
//var getCouponRuleDetailById = function *(req) {
//    var ruleid = req.ruleid;
//    var sql = "select id,typecode,name ,DATE_FORMAT( rulevalidstarttime ,'%Y-%m-%d %T') as rulevalidstarttime,DATE_FORMAT(rulevalidendtime ,'%Y-%m-%d %T') as rulevalidendtime from sr_rewards_coupon_rule_list where id=" + ruleid + ";";
//    sql += "select  id ,pointfrom,pointto,rate ,pointdiscount from sr_rewards_coupon_rule where ruleid=" + ruleid + " order by id asc";
//    return rconn.query(sql);
//}
//
//

//var deleteCouponRule = function *(req, callback) {
//
//    var ruleid = req.where.id;
//    var _sql = "delete from sr_rewards_coupon_rule_list where id=" + ruleid + ";";
//    _sql += "delete from sr_rewards_coupon_rule where ruleid= " + ruleid + ";";
//    return _dao(function () {
//        var _self = this;
//        return new Promise(function (resolve, reject) {
//            //开启事务；
//            _self.conn.beginTransaction().then(function () {
//                return _self.conn.query(_sql);
//            }).then(function (result) {
//                _self.conn.commit(function (err) {
//                    if (err) {
//                        _self.conn.rollback();
//                        throw err;
//                    }
//                });
//                var _json = {
//                    errCode: 0,
//                    msgBody: "ok"
//                };
//                resolve(_json)
//            }).catch(function (err) {
//                _self.conn.rollback();
//                reject(err);
//            })
//        })
//    })
//}
//
//var getValidRuleListByType = function *(req, callback) {
//    var typecode = req.ruletypecode;
//    var _sql;
//    _sql = " select id,name  from sr_rewards_coupon_rule_list  where  rulevalidendtime>=now() and typecode=" + typecode;
//    //执行SQL
//    return yield rconn.query(_sql);
//}
//
exports.getCouponList = getCouponList;
exports.getCouponCount = getCouponCount;
exports.getCouponInstanceList = getCouponInstanceList;
exports.getCouponInstanceCount = getCouponInstanceCount;
exports.getCouponDetailById = getCouponDetailById;
exports.getSettlementListById = getSettlementListById;
exports.getPonitRuleById = getPonitRuleById;
exports.getShopListById = getShopListById;
exports.updateCouponStatus = updateCouponStatus;
exports.getCouponHistoryList = getCouponHistoryList;
exports.getCouponHistoryCount = getCouponHistoryCount;
exports.getAllSettlement = getAllSettlement;
exports.getAllShopCount = getAllShopCount;
exports.updateCouponMaxCount = updateCouponMaxCount;
exports.checkCouponExist = checkCouponExist;
exports.checkCouponReserve = checkCouponReserve
exports.getAllEnableCouponList = getAllEnableCouponList;
exports.getAllShopData = getAllShopData;
//exports.getCouponShopCount = getCouponShopCount;
exports.getExportSql = getExportSql;
exports.getExportList = getExportList;
exports.getExportCount = getExportCount;
exports.getCouponImportHistoryList = getCouponImportHistoryList;
exports.getCouponImportHistoryCount = getCouponImportHistoryCount;
exports.importCoupon = importCoupon;
//exports.doValidationBeforeUseCoupon = doValidationBeforeUseCoupon;
//exports.getCouponRuleList = getCouponRuleList;
//exports.getCouponRuleCount = getCouponRuleCount;
//exports.getCouponRuleDetailById = getCouponRuleDetailById;
//exports.updateCouponRule = updateCouponRule;
//exports.deleteCouponRule = deleteCouponRule;
//exports.getValidRuleListByType = getValidRuleListByType;
//


exports.getCouponListByCustIdList = function* (condition, sort, page) {

    var _tableName = "sr_coupon_instance as c\
                             left join sr_coupon_template as temp on temp.id=c.coupon_temp_id\
                             left join sc_org as org on org.innerid=c.orgid\
                             left join sc_code as code on temp.category_code=code.keycode and code.parentid=(select id from sc_code where keyname='coupon_category')\
    left join sc_code as code2 on c.status=code2.keycode and code2.parentid=(select id from sc_code where keyname='CouponUseStatus')";
    //定义字段
    var _fields = "CAST(c.id as CHAR) as id ,temp.name , c.no  as code, CAST(c.coupon_temp_id as CHAR) as templet_id, \
                           temp.category_code  as type,CONCAT('coupon_category_',temp.category_code) as category_value,code.keyvalue as category_name,\
                           temp.limit_value as limit_fee,CONCAT('coupon_sendchannel_',c.send_source_type) as send_channel_value,\
                           DATE_FORMAT(c.send_time ,'%Y-%m-%d %T') as get_time, DATE_FORMAT(c.used_time ,'%Y-%m-%d %T') as used_time ,c.status as is_used,\
                           c.valid_starttime as limit_time_begin,c.valid_endtime as limit_time_end,ifnull(temp.max_discount_amount,0) as limit_max_discount,\
                           temp.coupon_value as face_value,\
                           CAST(c.cust_id as CHAR) as customer_id, temp.image_id as image_url, \
                           c.orgid as org_id, org.name as org_name, \
                           case when DATE_FORMAT(c.valid_endtime ,'%Y-%m-%d')<DATE_FORMAT(now() ,'%Y-%m-%d') then 1  else 0 end AS is_expired,\
                           code2.keyvalue as coupon_status ";
    let _where;
    if (condition) {
        _where = " and c.cust_id=" + condition.custid + " ";
    }
    let _pageAndSort = comm.sortAndPage(sort, page);
    let sql = "select " + _fields + " from " + _tableName + " where 1=1 " + _where + _pageAndSort.sort + _pageAndSort.page;
    return yield rconn.query(sql);
};
exports.getCouponListByCustIdCount = function* (condition) {
    var _sql;
    var _tableName = "sr_coupon_instance as c\
                             left join sr_coupon_template as temp on temp.id=c.coupon_temp_id\
                             left join sc_org as org on org.innerid=c.orgid\
                             left join sc_code as code on temp.category_code=code.keycode and code.parentid=(select id from sc_code where keyname='coupon_category')";
    //定义字段
    //默认值
    let _where;
    if (condition) {
        _where = " and c.cust_id=" + condition.custid + " ";
    }
    //处理查询条件
    _sql = " select count(*) as count from " + _tableName + " where  1=1" + _where;
    //执行SQL
    return yield rconn.query(_sql);
};
exports.cfAccountList = function* () {
    let sql = "SELECT innerid as id,name as value FROM cf_account;";
    return yield rconn.query(sql);
}



var couponTemplateAdd = function* (obj) {
    console.info("add coupon template beginning, data=%s", JSON.stringify(obj));
    let conn = yield app.res.getDBWConnection("sr", "couponTemplateAdd");
    var result;
    try {
        result = yield conn.beginTransaction();
        // 新增礼券模板
        if(obj.coupondata.valid_starttime)
        {
            obj.coupondata.valid_starttime=obj.coupondata.valid_starttime.format("yyyy-MM-dd")+" 00:00:00";
        }
        if(obj.coupondata.valid_endtime)
        {
            obj.coupondata.valid_endtime=obj.coupondata.valid_endtime.format("yyyy-MM-dd")+" 23:59:59";
        }
        let sql = "insert into sr_coupon_template(orgid, `name`, category_code, coupon_value, code_prefix, \
        image_id, detail_rule, valid_type_code, valid_starttime, valid_endtime, valid_days, class_code, \
        applicable_channel, max_assign_count, limit_value, max_discount_amount, settlement_type_code, \
        shortage_handle_code, is_sync_wechat, applicable_scope, send_count, used_count,left_count,is_enabled, \
        createrid, createdtime, modifierid, modifiedtime,isenable_wechat_card,cf_accountid) value ( \
        @orgid@, @name@, @category_code@, @coupon_value@, @code_prefix@, \
        @image_id@, @detail_rule@, @valid_type_code@, @valid_starttime@, @valid_endtime@, @valid_days@, @class_code@, \
        @applicable_channel@, @max_assign_count@, @limit_value@, @max_discount_amount@, @settlement_type_code@, \
        @shortage_handle_code@, @is_sync_wechat@, @applicable_scope@, @send_count@, @used_count@, @max_assign_count@,@is_enabled@, \
        @createrid@, @createdtime@, @modifierid@, @modifiedtime@,@isenable_wechat_card@,@cf_accountid@)";
        obj.coupondata.left_count=obj.coupondata.max_assign_count;
        obj.coupondata.applicable_channel=obj.rule_list.map(function (item) {
            return item.applicable_channel
        }).join();
        if (!obj.coupondata.shortage_handle_code) {
            // 抵用不足处理方式：1依次扣除 2平均扣除
            obj.coupondata.shortage_handle_code = 1;
        }
        if (!obj.coupondata.limit_value) {
            obj.coupondata.limit_value = 0;
        }
        if (!obj.coupondata.settlement_type_code) {
            obj.coupondata.settlement_type_code = 1;
        }
        if (!obj.coupondata.max_discount_amount) {
            obj.coupondata.max_discount_amount = 0;
        }
        if (!obj.coupondata.applicable_scope) {
            obj.coupondata.applicable_scope = 1;
        }
        if (!obj.coupondata.send_count) {
            // 已发放数默认为0
            obj.coupondata.send_count = 0;
        }
        if (!obj.coupondata.used_count) {
            obj.coupondata.used_count = 0;
        }
        if (!obj.coupondata.coupon_value) {
            obj.coupondata.coupon_value = 0;
        }
        if (!obj.coupondata.class_code) {
            obj.coupondata.class_code = 1;
        }
        if (!obj.coupondata.is_enabled) {
            // 启动
            obj.coupondata.is_enabled = 1;
        }
        if (!obj.coupondata.createdtime) {
            obj.coupondata.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
        }
        if (!obj.coupondata.modifierid) {
            obj.coupondata.modifierid = obj.coupondata.createrid;
        }
        if (!obj.coupondata.modifiedtime) {
            obj.coupondata.modifiedtime = obj.coupondata.createdtime;
        }
        if (!obj.coupondata.cf_accountid) {
            // 启动
            obj.coupondata.cf_accountid = '';
        }
        sql = db.makeSQL(sql, obj.coupondata);
        result = yield conn.query(sql);
        // 获取礼券模板ID
        let query_coupon_sql = "select * from sr_coupon_template where `name`=@name@ order by id desc limit 1;";
        query_coupon_sql = db.makeSQL(query_coupon_sql, { name: obj.coupondata.name });
        let result_coupon_template = yield conn.query(query_coupon_sql);
        // 判断是否可以获取到，如果获取不到，则需要回滚，如果获取到，则继续新增礼券模板的规则
        if (result_coupon_template && result_coupon_template.length > 0 && result_coupon_template[0].id) {
            let template_id= result_coupon_template[0].id;
            // 新增礼券模板log数据
            let sql11 = "insert into sr_coupon_template_log(coupon_temp_id, log_type, data, createrid, createdtime) \
            value (@coupon_temp_id@, '礼券新增', NULL, @createrid@, @createdtime@)";
            var coupon_template_log_obj = {};
            coupon_template_log_obj.coupon_temp_id = template_id;
            coupon_template_log_obj.createrid = obj.coupondata.createrid;
            if (!obj.coupondata.createdtime) {
                coupon_template_log_obj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
            } else {
                coupon_template_log_obj.createdtime = obj.coupondata.createdtime;
            }
            sql11 = db.makeSQL(sql11, coupon_template_log_obj);
            result = yield conn.query(sql11);
            // 新增sr_coupon_rule表记录
            if(obj.rule_list&&obj.rule_list.length>0)
            {
                for (var i = 0; i < obj.rule_list.length; i++) {
                    let rule_item_obj = obj.rule_list[i];
                    if (!rule_item_obj.cust_card_type_limit) {
                        // 会员卡类型限制 0 所有 1 普卡 2 银卡 3 金卡  多个已逗号区分
                        rule_item_obj.cust_card_type_limit = "0";
                    }
                    if (!rule_item_obj.is_auto_down) {
                        // 兑换完是否自动下架 1表示下架0表示不下架
                        rule_item_obj.is_auto_down = 0;
                    }
                    if (!rule_item_obj.limit_type) {
                        //  限制类型 0无期限 1 每天 2 每周 3 每月4 每年
                        rule_item_obj.limit_type = 0;
                    }
                    if (!rule_item_obj.limit_num) {
                        // 单个会员领取礼券上限
                        rule_item_obj.limit_num = 0;
                    }
                    if (!rule_item_obj.is_allow_share) {
                        // 是否允许分享 1 是 0否
                        rule_item_obj.is_allow_share = 0;
                    }
                    if (!rule_item_obj.retrievable_starttime) {
                        rule_item_obj.retrievable_starttime = null;
                    }
                    if (!rule_item_obj.retrievable_endtime) {
                        rule_item_obj.retrievable_endtime = null;
                    }
                    if (!rule_item_obj.is_allow_delivery) {
                        rule_item_obj.is_allow_delivery = 0;
                    }
                    rule_item_obj.createrid = obj.coupondata.createrid;
                    rule_item_obj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                    rule_item_obj.coupon_temp_id = template_id;
                    let insert_rule_sql = "insert into sr_coupon_rule(coupon_temp_id, retrievable_starttime, retrievable_endtime, \
                        applicable_channel, cust_card_type_limit, is_auto_down, limit_type, limit_num, is_allow_share, exchange_type,\
                        createrid, createdtime,is_allow_delivery) value ( \
                        @coupon_temp_id@, @retrievable_starttime@, @retrievable_endtime@, \
                        @applicable_channel@, @cust_card_type_limit@, @is_auto_down@, @limit_type@, @limit_num@, @is_allow_share@,@exchange_type@, \
                        @createrid@, @createdtime@,@is_allow_delivery@)";
                    insert_rule_sql = db.makeSQL(insert_rule_sql, rule_item_obj);
                    result = yield conn.query(insert_rule_sql);
                    // 获取礼券规则ID
                    let query_rule_sql = "select * from sr_coupon_rule where coupon_temp_id=@coupon_temp_id@ and applicable_channel=@applicable_channel@ order by id desc limit 1;";
                    query_rule_sql = db.makeSQL(query_rule_sql, rule_item_obj);
                    let query_rule_result = yield conn.query(query_rule_sql);
                    if (query_rule_result && query_rule_result.length > 0) {
                        //新增团购特卖规则数据
                        if (rule_item_obj.applicable_channel == 4 || rule_item_obj.applicable_channel == 5) {
                            let insert_sale_rule_sql = "insert into sr_coupon_sale_rule(coupon_temp_id, rule_id, sale_starttime,sale_endtime, \
                        remind_minutes, createrid, createdtime, modifierid, modifiedtime) value ( \
                        @coupon_temp_id@, @rule_id@, @sale_starttime@,@sale_endtime@, @remind_minutes@,\
                        @createrid@, @createdtime@, null, null)";
                            let sale_rule_obj = {};
                            sale_rule_obj.coupon_temp_id = template_id;
                            sale_rule_obj.rule_id = query_rule_result[0].id;
                            sale_rule_obj.sale_starttime = rule_item_obj.sale_starttime;
                            sale_rule_obj.sale_endtime = rule_item_obj.sale_endtime;
                            sale_rule_obj.remind_minutes = rule_item_obj.remind_minutes;
                            sale_rule_obj.createrid = obj.coupondata.createrid;
                            sale_rule_obj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                            insert_sale_rule_sql = db.makeSQL(insert_sale_rule_sql, sale_rule_obj);
                            result = yield conn.query(insert_sale_rule_sql);
                        }

                        //新增积分兑换详细规则数据
                        let rule_id = query_rule_result[0].id;
                        if (rule_item_obj.point_rule) {
                            for (var j = 0; j < rule_item_obj.point_rule.length; j++) {
                                let point_rule_obj = rule_item_obj.point_rule[j];
                                let insert_point_rule_Sql = "insert into sr_coupon_point_rule(rule_id, point, amount, cust_card_type_limit, \
                                createrid, createdtime, modifierid, modifiedtime) value ( \
                                @rule_id@, @point@, @amount@, @cust_card_type_limit@, \
                                @createrid@, @createdtime@, null, null)";
                                point_rule_obj.rule_id = rule_id;
                                if (!point_rule_obj.point) {
                                    point_rule_obj.point = 0;
                                }
                                if (!point_rule_obj.amount) {
                                    point_rule_obj.amount = 0;
                                }
                                if (!point_rule_obj.cust_card_type_limit) {
                                    point_rule_obj.cust_card_type_limit = 0;
                                }
                                if (!point_rule_obj.createrid) {
                                    point_rule_obj.createrid = result_coupon_template[0].createrid;
                                }
                                if (!point_rule_obj.createdtime) {
                                    point_rule_obj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                                }
                                insert_point_rule_Sql = db.makeSQL(insert_point_rule_Sql, point_rule_obj);
                                result = yield conn.query(insert_point_rule_Sql);
                            }
                        }
                        //免费兑换
                        if (rule_item_obj.applicable_channel == 2) {
                            let point_rule_obj_free = {};
                            let insert_point_rule_Sql = "insert into sr_coupon_point_rule(rule_id, point, amount, cust_card_type_limit, \
                                createrid, createdtime, modifierid, modifiedtime) value ( \
                                @rule_id@, @point@, @amount@, @cust_card_type_limit@, \
                                @createrid@, @createdtime@, null, null)";
                            point_rule_obj_free.rule_id = rule_id;
                            point_rule_obj_free.point = 0;
                            point_rule_obj_free.amount = 0;
                            point_rule_obj_free.cust_card_type_limit = 0;
                            point_rule_obj_free.createrid = result_coupon_template[0].createrid;
                            point_rule_obj_free.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                            insert_point_rule_Sql = db.makeSQL(insert_point_rule_Sql, point_rule_obj_free);
                            result = yield conn.query(insert_point_rule_Sql);
                        }
                    }
                }
            }

            // 判断消息体，如果有结算方，需要新增sr_coupon_settlement_account
            var value;
            if (obj && obj.settlementdata && obj.settlementdata.length > 0) {
                let insert_settlement_sql = "";
                let settlementObj;
                for (var i=0; i<obj.settlementdata.length; i++) {
                    settlementObj = obj.settlementdata[i];
                    insert_settlement_sql = "insert into sr_coupon_settlement_account(coupon_temp_id, sequence_no, settlement_id, \
                    settlement_value, createrid, createdtime, modifierid, modifiedtime) value ( \
                    @coupon_temp_id@, @sequence_no@, @settlement_id@, \
                    @settlement_value@, @createrid@, @createdtime@, null, null)";
                    settlementObj.coupon_temp_id =template_id;
                    if (!settlementObj.sequence_no) {
                        settlementObj.sequence_no = i + 1;  //因为i是从0开始的，所以需要加1
                    }
                    if (!settlementObj.settlement_id) {
                        settlementObj.settlement_id = "settlement_id";
                    }
                    if (!settlementObj.settlement_value) {
                        settlementObj.settlement_value = 100;
                    }
                    if (!settlementObj.createrid) {
                        settlementObj.createrid = result_coupon_template[0].createrid;
                    }
                    if (!settlementObj.createdtime) {
                        settlementObj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                    }
                    if (!settlementObj.modifierid) {
                        settlementObj.modifierid = settlementObj.createrid;
                    }
                    if (!settlementObj.modifiedtime) {
                        settlementObj.modifiedtime = settlementObj.createdtime;
                    }
                    insert_settlement_sql = db.makeSQL(insert_settlement_sql, settlementObj);
                    value = yield conn.query(insert_settlement_sql);
                }
            }
            // 判断消息体，如果有商铺，需要新增sr_coupon_shop
            if (obj && obj.shopdata && obj.shopdata.length > 0) {
                let insert_shop_sql = "";
                let shopObj;
                for (var j=0; j<obj.shopdata.length; j++) {
                    shopObj = obj.shopdata[j];
                    insert_shop_sql = "insert into sr_coupon_shop(coupon_temp_id, shop_id, createrid, \
                    createdtime, modifierid, modifiedtime) value ( \
                    @coupon_temp_id@, @shop_id@, @createrid@, \
                    @createdtime@,null, null)";
                    shopObj.coupon_temp_id = template_id;
                    if (!shopObj.createrid) {
                        shopObj.createrid = result_coupon_template[0].createrid;
                    }
                    if (!shopObj.createdtime) {
                        shopObj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                    }
                    if (!shopObj.modifierid) {
                        shopObj.modifierid = shopObj.createrid;
                    }
                    if (!shopObj.modifiedtime) {
                        shopObj.modifiedtime = shopObj.createdtime;
                    }
                    insert_shop_sql = db.makeSQL(insert_shop_sql, shopObj);
                    value = yield conn.query(insert_shop_sql);
                }
            }
            // 提交事务
            result = yield conn.commit();
            // 存储redis
            console.log('redis save data:'+JSON.stringify(result_coupon_template))
            app.redis.set("coupon:template:" + template_id, JSON.stringify(result_coupon_template));
            console.info("add coupon template success! data=%s", JSON.stringify(obj));
            //将剩余库存，发放数，核销数在redis初始化
            app.redis.set("coupon:counter:"+template_id+":left",obj.coupondata.max_assign_count)
            app.redis.set("coupon:counter:"+template_id+":send",0)
            app.redis.set("coupon:counter:"+template_id+":used",0)
            return template_id;
        } else {
            // 这个error级别日志稳定后可以调整为warn级别
            console.error("when insert coupon template, get the new coupon template id error, data=%s", JSON.stringify(obj));
            // 无法获取到礼券模板ID
            result = yield conn.rollback();
            return false;
        }
    }
    catch (e) {
        console.error("insert coupon template error, err=%s, data=%s", e, JSON.stringify(obj));
        // 无法获取到礼券模板ID
        result = yield conn.rollback();
        return app.err.systemError.msg(e);;
    }
    finally {
        if (conn) {
            conn.release();
        }
    }
};

exports.couponTemplateAdd = couponTemplateAdd;


exports.updateWechatCardStatus=function*(data){
    let sql = "update sr_coupon_template set wechat_card_status=@statuscode@ ,wechat_card_id=@templateid@ where id=@id@";
    sql = db.makeSQL(sql, data);
    let dbResult = yield wconn.query(sql);
    return dbResult;
}

/**
 * 编辑礼券模板
 * @param obj 礼券模板消息体
 * @returns {*} 成功or失败
 */
// var couponTemplateEdit = function* (obj) {
//     console.info("edit coupon template beginning, data=%s", JSON.stringify(obj));
//     let conn = yield app.res.getDBWConnection("sr", "couponTemplateEdit");
//     var result;
//     try {
//         result = yield conn.beginTransaction();
//         // 更新礼券模板
//         let sql = "update sr_coupon_template set ";
//         if (obj.coupondata) {
//             if (obj.coupondata.orgid) {
//                 sql += " orgid=@orgid@, ";
//             }
//             if (obj.coupondata.name) {
//                 sql += " `name`=@name@, ";
//             }
//             if (obj.coupondata.category_code) {
//                 sql += " category_code=@category_code@, ";
//             }
//             if (obj.coupondata.coupon_value) {
//                 sql += " coupon_value=@coupon_value@, ";
//             }
//             if (obj.coupondata.code_prefix) {
//                 sql += " code_prefix=@code_prefix@, ";
//             }
//             if (obj.coupondata.image_id) {
//                 sql += " image_id=@image_id@, ";
//             }
//             if (obj.coupondata.detail_rule) {
//                 sql += " detail_rule=@detail_rule@, ";
//             }
//             if (obj.coupondata.valid_type_code) {
//                 sql += " valid_type_code=@valid_type_code@, ";
//             }
//             if (obj.coupondata.valid_starttime) {
//                 sql += " valid_starttime=@valid_starttime@, ";
//             }
//             if (obj.coupondata.valid_endtime) {
//                 sql += " valid_endtime=@valid_endtime@, ";
//             }
//             if (obj.coupondata.valid_days) {
//                 sql += " valid_days=@valid_days@, ";
//             }
//             if (obj.coupondata.class_code) {
//                 sql += " class_code=@class_code@, ";
//             }
//             if (obj.coupondata.applicable_channel) {
//                 sql += " applicable_channel=@applicable_channel@, ";
//             }
//             if (obj.coupondata.max_assign_count) {
//                 sql += " max_assign_count=@max_assign_count@, ";
//             }
//             if (obj.coupondata.limit_value) {
//                 sql += " limit_value=@limit_value@, ";
//             }
//             if (obj.coupondata.max_discount_amount) {
//                 sql += " max_discount_amount=@max_discount_amount@, ";
//             }
//             if (obj.coupondata.settlement_type_code) {
//                 sql += " settlement_type_code=@settlement_type_code@, ";
//             }
//             if (obj.coupondata.shortage_handle_code) {
//                 sql += " shortage_handle_code=@shortage_handle_code@, ";
//             }
//             if (obj.coupondata.is_sync_wechat) {
//                 sql += " is_sync_wechat=@is_sync_wechat@, ";
//             }
//             if (obj.coupondata.applicable_scope) {
//                 sql += " applicable_scope=@applicable_scope@, ";
//             }
//             if (obj.coupondata.send_count) {
//                 sql += " send_count=@send_count@, ";
//             }
//             if (obj.coupondata.used_count) {
//                 sql += " used_count=@used_count@, ";
//             }
//             if (obj.coupondata.is_enabled) {
//                 sql += " is_enabled=@is_enabled@, ";
//             }
//             if (obj.coupondata.modifierid) {
//                 sql += " modifierid=@modifierid@, ";
//             }
//         }
//         sql += " modifiedtime=now() where id=@id@ ";
//         sql = db.makeSQL(sql, obj.coupondata);
//         console.info('update sr_coupon_template sql=%s', sql);
//         result = yield conn.query(sql);
//         // 获取礼券模板详情
//         let sql0 = "select * from sr_coupon_template where `id`=@id@";
//         sql0 = db.makeSQL(sql0, { id: obj.coupondata.id });
//         var result_coupon_template = yield conn.query(sql0);
//         // 更新礼券模板规则
//         let sql1 = "update sr_coupon_rule set ";
//         if (obj.coupondata) {
//             if (obj.coupondata.retrievable_starttime) {
//                 sql1 += " retrievable_starttime=@retrievable_starttime@, ";
//             }
//             if (obj.coupondata.retrievable_endtime) {
//                 sql1 += " retrievable_endtime=@retrievable_endtime@, ";
//             }
//             if (obj.coupondata.applicable_channel) {
//                 sql1 += " applicable_channel=@applicable_channel@, ";
//             }
//             if (obj.coupondata.is_auto_down) {
//                 sql1 += " is_auto_down=@is_auto_down@, ";
//             }
//             if (obj.coupondata.limit_type) {
//                 sql1 += " limit_type=@limit_type@, ";
//             }
//             if (obj.coupondata.limit_num) {
//                 sql1 += " limit_num=@limit_num@, ";
//             }
//             if (obj.coupondata.is_allow_share) {
//                 sql1  += " is_allow_share=@is_allow_share@, ";
//             }
//             if (obj.coupondata.modifierid) {
//                 sql1 += " modifierid=@modifierid@, ";
//             }
//         }
//         sql1 += " modifiedtime=now() where coupon_temp_id=@id@ ";
//         sql1 = db.makeSQL(sql1, obj.coupondata);
//         console.info('update sr_coupon_rule sql=%s', sql1);
//         result = yield conn.query(sql1);
//         // 更新礼券模板规则积分规则表
//         if (obj.coupondata && obj.coupondata.point_rule && obj.coupondata.point_rule.length > 0) {
//             let sql4 = "";
//             let pointruleObj;
//             for (var n=0; n<obj.coupondata.point_rule.length; n++) {
//                 pointruleObj = obj.coupondata.point_rule[n];
//                 sql4 = "update sr_coupon_point_rule set ";
//                 if (pointruleObj.point) {
//                     sql4 += " point=@point@, ";
//                 }
//                 if (pointruleObj.amount) {
//                     sql4 += " amount=@amount@, ";
//                 }
//                 if (pointruleObj.cust_card_type_limit) {
//                     sql4 += " cust_card_type_limit=@cust_card_type_limit@, ";
//                 }
//                 if (pointruleObj.modifierid) {
//                     sql4 += " modifierid=@modifierid@, ";
//                 }
//                 sql4 += " modifiedtime=now() where id=@id@ ";
//                 sql4 = db.makeSQL(sql4, pointruleObj);
//                 console.info('update sr_coupon_point_rule sql=%s', sql4);
//                 result = yield conn.query(sql4);
//             }
//         }
//         // 判断消息体，如果有结算方，需要更新sr_coupon_settlement_account
//         let sql21 = "delete from sr_coupon_settlement_account where coupon_temp_id=@coupon_temp_id@";
//         sql21 = db.makeSQL(sql21, { coupon_temp_id: obj.coupondata.id });
//         console.info('delete sr_coupon_settlement_account sql=%s', sql21);
//         result = yield conn.query(sql21);
//         // 增加
//         if (obj && obj.settlementdata && obj.settlementdata.length > 0) {
//             let sql2 = "";
//             let settlementObj;
//             for (var i=0; i<obj.settlementdata.length; i++) {
//                 settlementObj = obj.settlementdata[i];
//                 sql2 = "insert into sr_coupon_settlement_account(coupon_temp_id, sequence_no, settlement_id, \
//                 settlement_value, createrid, createdtime, modifierid, modifiedtime) value ( \
//                 @coupon_temp_id@, @sequence_no@, @settlement_id@, \
//                 @settlement_value@, @createrid@, @createdtime@, @modifierid@, @modifiedtime@)";
//                 settlementObj.coupon_temp_id = obj.coupondata.id;
//                 if (!settlementObj.sequence_no) {
//                     settlementObj.sequence_no = i + 1;  //因为i是从0开始的，所以需要加1
//                 }
//                 if (!settlementObj.settlement_id) {
//                     settlementObj.settlement_id = "settlement_id";
//                 }
//                 if (!settlementObj.settlement_value) {
//                     settlementObj.settlement_value = 100;
//                 }
//                 if (!settlementObj.createrid) {
//                     settlementObj.createrid = result_coupon_template[0].createrid;
//                 }
//                 if (!settlementObj.createdtime) {
//                     settlementObj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
//                 }
//                 if (!settlementObj.modifierid) {
//                     settlementObj.modifierid = settlementObj.createrid;
//                 }
//                 if (!settlementObj.modifiedtime) {
//                     settlementObj.modifiedtime = settlementObj.createdtime;
//                 }
//                 // sql2 = "update sr_coupon_settlement_account set ";
//                 // if (settlementObj.sequence_no) {
//                 //     sql2 += " sequence_no=@sequence_no@, ";
//                 // }
//                 // if (settlementObj.settlement_id) {
//                 //     sql2 += " settlement_id=@settlement_id@, ";
//                 // }
//                 // if (settlementObj.settlement_value) {
//                 //     sql2 += " settlement_value=@settlement_value@, ";
//                 // }
//                 // if (settlementObj.modifierid) {
//                 //     sql2 += " modifierid=@modifierid@, ";
//                 // }
//                 // sql2 += " modifiedtime=now() where id=@id@ ";
//                 sql2 = db.makeSQL(sql2, settlementObj);
//                 console.info('update sr_coupon_settlement sql=%s', sql2);
//                 result = yield conn.query(sql2);
//             }
//         }
//         // 判断消息体，如果有商铺，需要更新sr_coupon_shop
//         let sql31 = "delete from sr_coupon_shop where coupon_temp_id=@coupon_temp_id@";
//         sql31 = db.makeSQL(sql31, { coupon_temp_id: obj.coupondata.id });
//         console.info('delete sr_coupon_shop sql=%s', sql31);
//         result = yield conn.query(sql31);
//         // 增加
//         if (obj && obj.shopdata && obj.shopdata.length > 0) {
//             let sql3 = "";
//             let shopObj;
//             for (var j=0; j<obj.shopdata.length; j++) {
//                 shopObj = obj.shopdata[j];
//                 sql3 = "insert into sr_coupon_shop(coupon_temp_id, shop_id, createrid, \
//                 createdtime, modifierid, modifiedtime) value ( \
//                 @coupon_temp_id@, @shop_id@, @createrid@, \
//                 @createdtime@, @modifierid@, @modifiedtime@)";
//                 shopObj.coupon_temp_id = obj.coupondata.id;
//                 if (!shopObj.createrid) {
//                     shopObj.createrid = result_coupon_template[0].createrid;
//                 }
//                 if (!shopObj.createdtime) {
//                     shopObj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
//                 }
//                 if (!shopObj.modifierid) {
//                     shopObj.modifierid = shopObj.createrid;
//                 }
//                 if (!shopObj.modifiedtime) {
//                     shopObj.modifiedtime = shopObj.createdtime;
//                 }
//                 // shopObj.coupon_temp_id = obj.coupondata.id;
//                 // sql3 = "update sr_coupon_shop set ";
//                 // if (shopObj.shop_id) {
//                 //     sql3 += " shop_id=@shop_id@, ";
//                 // }
//                 // if (shopObj.modifierid) {
//                 //     sql3 += " modifierid=@modifierid@, ";
//                 // }
//                 // sql3 += " modifiedtime=now() where coupon_temp_id=@coupon_temp_id@ ";
//                 sql3 = db.makeSQL(sql3, shopObj);
//                 console.info('insert sr_coupon_shop sql=%s', sql3);
//                 result = yield conn.query(sql3);
//             }
//         }
//         // 提交事务
//         result = yield conn.commit();
//         // 更新存储redis
//         app.redis.set("coupon:template:" + obj.coupondata.id, JSON.stringify(result_coupon_template));
//         console.info("edit coupon template success! data=%s", JSON.stringify(obj));
//         return true;
//     }
//     catch (e) {
//         console.error("edit coupon template error, err=%s, data=%s", e, JSON.stringify(obj));
//         result = yield conn.rollback();
//         return false;
//     }
//     finally {
//         if (conn) {
//             conn.release();
//         }
//     }
// };
// exports.couponTemplateEdit = couponTemplateEdit;

var couponTemplateEdit = function* (obj) {
    console.info("edit coupon template beginning, data=%s", JSON.stringify(obj));
    let conn = yield app.res.getDBWConnection("sr", "couponTemplateEdit");
    var result;
    try {
        result = yield conn.beginTransaction();
        // 更新礼券模板
        let sql = "update sr_coupon_template set ";
        if (obj.coupondata) {
            if (obj.coupondata.orgid) {
                sql += " orgid=@orgid@, ";
            }
            if (obj.coupondata.name) {
                sql += " `name`=@name@, ";
            }
            if (obj.coupondata.category_code) {
                sql += " category_code=@category_code@, ";
            }
            if (obj.coupondata.coupon_value) {
                sql += " coupon_value=@coupon_value@, ";
            }
            if (obj.coupondata.code_prefix) {
                sql += " code_prefix=@code_prefix@, ";
            }
            if (obj.coupondata.image_id) {
                sql += " image_id=@image_id@, ";
            }
            if (obj.coupondata.detail_rule) {
                sql += " detail_rule=@detail_rule@, ";
            }
            if (obj.coupondata.valid_type_code) {
                sql += " valid_type_code=@valid_type_code@, ";
            }
            if (obj.coupondata.valid_starttime) {
                obj.coupondata.valid_starttime=obj.coupondata.valid_starttime.format("yyyy-MM-dd")+" 00:00:00";
                sql += " valid_starttime=@valid_starttime@, ";
            }
            if (obj.coupondata.valid_endtime) {
                obj.coupondata.valid_endtime=obj.coupondata.valid_endtime.format("yyyy-MM-dd")+" 23:59:59";
                sql += " valid_endtime=@valid_endtime@, ";
            }
            if (obj.coupondata.valid_days) {
                sql += " valid_days=@valid_days@, ";
            }
            if (obj.coupondata.class_code) {
                sql += " class_code=@class_code@, ";
            }
            obj.coupondata.applicable_channel=obj.rule_list.map(function (item) {
                return item.applicable_channel
            }).join();
            sql+=" applicable_channel=@applicable_channel@, "
            if (obj.coupondata.applicable_channel) {
                sql += " applicable_channel=@applicable_channel@, ";
            }
            if (obj.coupondata.max_assign_count) {
                sql += " max_assign_count=@max_assign_count@, ";
            }
            if (obj.coupondata.limit_value) {
                sql += " limit_value=@limit_value@, ";
            }
            if (obj.coupondata.max_discount_amount) {
                sql += " max_discount_amount=@max_discount_amount@, ";
            }
            if (obj.coupondata.settlement_type_code) {
                sql += " settlement_type_code=@settlement_type_code@, ";
            }
            if (obj.coupondata.shortage_handle_code) {
                sql += " shortage_handle_code=@shortage_handle_code@, ";
            }
            if (obj.coupondata.is_sync_wechat) {
                sql += " is_sync_wechat=@is_sync_wechat@, ";
            }
            if (obj.coupondata.applicable_scope) {
                sql += " applicable_scope=@applicable_scope@, ";
            }
            if (obj.coupondata.send_count) {
                sql += " send_count=@send_count@, ";
            }
            if (obj.coupondata.used_count) {
                sql += " used_count=@used_count@, ";
            }
            if (obj.coupondata.is_enabled) {
                sql += " is_enabled=@is_enabled@, ";
            }
            if (obj.coupondata.modifierid) {
                sql += " modifierid=@modifierid@, ";
            }
        }
        sql += " modifiedtime=now() where id=@id@ ";
        sql = db.makeSQL(sql, obj.coupondata);
        console.info('update sr_coupon_template sql=%s', sql);
        result = yield conn.query(sql);
        // 获取礼券模板详情
        let query_coupon_sql = "select * from sr_coupon_template where `id`=@id@";
        query_coupon_sql = db.makeSQL(query_coupon_sql, { id: obj.coupondata.id });
        let result_coupon_template = yield conn.query(query_coupon_sql);
        // 更新礼券模板规则
        if(obj.rule_list&&obj.rule_list.length>0) {
            for (var i = 0; i < obj.rule_list.length; i++) {
                //更新表sr_coupon_rule
                let rule_item_obj = obj.rule_list[i];
                let query_rule_sql="select * from sr_coupon_rule where id="+rule_item_obj.id+";";
                let query_rule_result = yield conn.query(query_rule_sql);
                if(query_rule_result&&query_rule_result.length>0)
                {
                    //更新
                    let update_rule_sql=" update sr_coupon_rule set ";
                    if(rule_item_obj.retrievable_starttime)
                    {
                        update_rule_sql += " retrievable_starttime=@retrievable_starttime@, ";
                    }
                    if(rule_item_obj.retrievable_endtime)
                    {
                        update_rule_sql += " retrievable_endtime=@retrievable_endtime@, ";
                    }
                    if(rule_item_obj.is_auto_down)
                    {
                        update_rule_sql += " is_auto_down=@is_auto_down@, ";
                    }
                    if(rule_item_obj.cust_card_type_limit)
                    {
                        update_rule_sql += " cust_card_type_limit=@cust_card_type_limit@, ";
                    }
                    if(rule_item_obj.limit_type)
                    {
                        update_rule_sql += " limit_type=@limit_type@, ";
                    }
                    if(rule_item_obj.limit_num)
                    {
                        update_rule_sql += " limit_num=@limit_num@, ";
                    }
                    // if(rule_item_obj.is_allow_delivery||rule_item_obj.is_allow_delivery==0)
                    // {
                    //     update_rule_sql += " is_allow_delivery=@is_allow_delivery@, ";
                    // }
                    if (obj.coupondata.modifierid) {
                        rule_item_obj.modifierid=obj.coupondata.modifierid;
                        update_rule_sql += " modifierid=@modifierid@, ";
                    }
                    update_rule_sql += " modifiedtime=now() where id="+rule_item_obj.id+";";
                    update_rule_sql = db.makeSQL(update_rule_sql, rule_item_obj);
                    console.info('update sr_coupon_rule sql=%s', update_rule_sql);
                    result = yield conn.query(update_rule_sql);
                    //团购特卖渠道，需更新表sr_coupon_sale_rule
                    if(rule_item_obj.applicable_channel==4||rule_item_obj.applicable_channel==5)
                    {
                        let query_sale_rule_sql="select * from sr_coupon_sale_rule where rule_id="+rule_item_obj.id+";";
                        let query_sale_rule_result = yield conn.query(query_sale_rule_sql);
                        if(query_sale_rule_result&&query_sale_rule_result.length>0) {
                            //更新
                            let update_sale_rule_sql = " update sr_coupon_sale_rule set ";
                            if(rule_item_obj.sale_starttime)
                            {
                                update_sale_rule_sql += " sale_starttime=@sale_starttime@, ";
                            }
                            if(rule_item_obj.sale_endtime)
                            {
                                update_sale_rule_sql += " sale_endtime=@sale_endtime@, ";
                            }
                            if(rule_item_obj.remind_minutes)
                            {
                                update_sale_rule_sql += " remind_minutes=@remind_minutes@, ";
                            }
                            if (obj.coupondata.modifierid) {
                                rule_item_obj.modifierid=obj.coupondata.modifierid;
                                update_sale_rule_sql += " modifierid=@modifierid@, ";
                            }
                            update_sale_rule_sql += " modifiedtime=now() where rule_id="+rule_item_obj.id+";";
                            update_sale_rule_sql = db.makeSQL(update_sale_rule_sql, rule_item_obj);
                            console.info('update sr_coupon_sale_rule sql=%s', update_sale_rule_sql);
                            result = yield conn.query(update_sale_rule_sql);
                        }
                    }

                    //更新积分兑奖详情规则数据
                    if(rule_item_obj.point_rule&&rule_item_obj.point_rule.length>0)
                    {
                        for (var k = 0; k < rule_item_obj.point_rule.length; k++) {
                            let point_rule_obj=rule_item_obj.point_rule[k];
                            let query_point_rule_sql="select * from sr_coupon_point_rule where id="+point_rule_obj.id+";";
                            let query_point_rule_result = yield conn.query(query_point_rule_sql);
                            if(query_point_rule_result&&query_point_rule_result.length>0)
                            {
                                //更新
                                let update_point_rule_sql = " update sr_coupon_point_rule set ";
                                if(point_rule_obj.point)
                                {
                                    update_point_rule_sql += " point=@point@, ";
                                }
                                if(point_rule_obj.amount)
                                {
                                    update_point_rule_sql += " amount=@amount@, ";
                                }
                                if (obj.coupondata.modifierid) {
                                    point_rule_obj.modifierid=obj.coupondata.modifierid;
                                    update_point_rule_sql += " modifierid=@modifierid@, ";
                                }
                                update_point_rule_sql += " modifiedtime=now() where id="+point_rule_obj.id+";";
                                update_point_rule_sql = db.makeSQL(update_point_rule_sql, point_rule_obj);
                                console.info('update sr_coupon_point_rule sql=%s', update_point_rule_sql);
                                result = yield conn.query(update_point_rule_sql);
                            }
                            else
                            {
                                //新增
                                let insert_point_rule_Sql  = "insert into sr_coupon_point_rule(rule_id, point, amount, cust_card_type_limit, \
                                createrid, createdtime, modifierid, modifiedtime) value ( \
                                @rule_id@, @point@, @amount@, @cust_card_type_limit@, \
                                @createrid@, @createdtime@, @modifierid@, @modifiedtime@)";
                                point_rule_obj.rule_id=rule_item_obj.id;
                                if (!point_rule_obj.point) {
                                    point_rule_obj.point = 0;
                                }
                                if (!point_rule_obj.amount) {
                                    point_rule_obj.amount = 0;
                                }
                                if (!point_rule_obj.cust_card_type_limit) {
                                    point_rule_obj.cust_card_type_limit = 0;
                                }
                                if (!point_rule_obj.createrid) {
                                    point_rule_obj.createrid = result_coupon_template[0].createrid;
                                }
                                if (!point_rule_obj.createdtime) {
                                    point_rule_obj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                                }
                                insert_point_rule_Sql = db.makeSQL(insert_point_rule_Sql, point_rule_obj);
                                result = yield conn.query(insert_point_rule_Sql);
                            }
                        }

                    }

                }
                else
                {
                    //新增

                }
            }
        }
        // 判断消息体，如果有结算方，需要更新sr_coupon_settlement_account
        let delete_settlement_sql = "delete from sr_coupon_settlement_account where coupon_temp_id=@coupon_temp_id@";
        delete_settlement_sql = db.makeSQL(delete_settlement_sql, { coupon_temp_id: obj.coupondata.id });
        console.info('delete sr_coupon_settlement_account sql=%s', delete_settlement_sql);
        result = yield conn.query(delete_settlement_sql);
        // 增加
        if (obj && obj.settlementdata && obj.settlementdata.length > 0) {
            let sql2 = "";
            let settlementObj;
            for (var i=0; i<obj.settlementdata.length; i++) {
                settlementObj = obj.settlementdata[i];
                sql2 = "insert into sr_coupon_settlement_account(coupon_temp_id, sequence_no, settlement_id, \
                settlement_value, createrid, createdtime, modifierid, modifiedtime) value ( \
                @coupon_temp_id@, @sequence_no@, @settlement_id@, \
                @settlement_value@, @createrid@, @createdtime@, @modifierid@, @modifiedtime@)";
                settlementObj.coupon_temp_id = obj.coupondata.id;
                if (!settlementObj.sequence_no) {
                    settlementObj.sequence_no = i + 1;  //因为i是从0开始的，所以需要加1
                }
                if (!settlementObj.settlement_id) {
                    settlementObj.settlement_id = "settlement_id";
                }
                if (!settlementObj.settlement_value) {
                    settlementObj.settlement_value = 100;
                }
                if (!settlementObj.createrid) {
                    settlementObj.createrid = result_coupon_template[0].createrid;
                }
                if (!settlementObj.createdtime) {
                    settlementObj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                }
                if (!settlementObj.modifierid) {
                    settlementObj.modifierid = settlementObj.createrid;
                }
                if (!settlementObj.modifiedtime) {
                    settlementObj.modifiedtime = settlementObj.createdtime;
                }

                sql2 = db.makeSQL(sql2, settlementObj);
                console.info('update sr_coupon_settlement sql=%s', sql2);
                result = yield conn.query(sql2);
            }
        }
        // 判断消息体，如果有商铺，需要更新sr_coupon_shop
        let sql31 = "delete from sr_coupon_shop where coupon_temp_id=@coupon_temp_id@";
        sql31 = db.makeSQL(sql31, { coupon_temp_id: obj.coupondata.id });
        console.info('delete sr_coupon_shop sql=%s', sql31);
        result = yield conn.query(sql31);
        // 增加
        if (obj && obj.shopdata && obj.shopdata.length > 0) {
            let sql3 = "";
            let shopObj;
            for (var j=0; j<obj.shopdata.length; j++) {
                shopObj = obj.shopdata[j];
                sql3 = "insert into sr_coupon_shop(coupon_temp_id, shop_id, createrid, \
                createdtime, modifierid, modifiedtime) value ( \
                @coupon_temp_id@, @shop_id@, @createrid@, \
                @createdtime@, @modifierid@, @modifiedtime@)";
                shopObj.coupon_temp_id = obj.coupondata.id;
                if (!shopObj.createrid) {
                    shopObj.createrid = result_coupon_template[0].createrid;
                }
                if (!shopObj.createdtime) {
                    shopObj.createdtime = new Date().format('yyyy-MM-dd hh:mm:ss');
                }
                if (!shopObj.modifierid) {
                    shopObj.modifierid = shopObj.createrid;
                }
                if (!shopObj.modifiedtime) {
                    shopObj.modifiedtime = shopObj.createdtime;
                }
                sql3 = db.makeSQL(sql3, shopObj);
                console.info('insert sr_coupon_shop sql=%s', sql3);
                result = yield conn.query(sql3);
            }
        }
        // 提交事务
        result = yield conn.commit();
        // 更新存储redis,无需更新三个count字段
        let redisCouponData=yield app.redis.get("coupon:template:" + obj.coupondata.id);

        if(redisCouponData&&redisCouponData.length>0)
        {
            redisCouponData = eval('(' + redisCouponData + ')');
            redisCouponData = redisCouponData[0];
            console.log('redisCouponData'+JSON.stringify(redisCouponData))
            result_coupon_template[0].send_count=redisCouponData.send_count;
            result_coupon_template[0].left_count=redisCouponData.left_count;
            result_coupon_template[0].used_count=redisCouponData.used_count;
            console.log('result_coupon_template'+JSON.stringify(result_coupon_template))
        }
        app.redis.set("coupon:template:" + obj.coupondata.id, JSON.stringify(result_coupon_template));
        console.info("edit coupon template success! data=%s", JSON.stringify(obj));
        return true;
    }
    catch (e) {
        console.error("edit coupon template error, err=%s, data=%s", e, JSON.stringify(obj));
        result = yield conn.rollback();
        return false;
    }
    finally {
        if (conn) {
            conn.release();
        }
    }
};
exports.couponTemplateEdit = couponTemplateEdit;

/**
 // *  查询订单所有信息(分页)
 // * @param condition 查询条件
 // * @param sort 排序
 // * @param page 分页
 // */
var getCouponOrderReportList = function* (condition, sort, page) {
    var _sql = queryCouponOrderReportListSql(condition, sort, page, 0);
    return yield rconn.query(_sql);
};
exports.getCouponOrderReportList = getCouponOrderReportList;

function queryCouponOrderReportListSql(condition, sort, page, getAll) {
    var _sql, _condition, _sortAndPage;
    var _tableName, _fields;
    if (getAll == 1)//for export
    {
        _tableName = "sr_report_coupon_order `order` \
            left join sc_code as code on order.payment_type=code.keycode and code.parentid=(select id from sc_code where keyname='OrderPaymentType')";
        _fields = "order_no as 交易流水号,third_order_no as 关联订单编号,coupon_name as 订单名称,\
        code.keyvalue as 支付渠道 ,point as 交易积分,amount as 交易金额, \
        case when source_type=1 then '积分商城' when source_type=2 then '团购' else '特卖' end as 订单来源,\
        DATE_FORMAT(created_time,'%Y-%m-%d') as 下单时间,\
        DATE_FORMAT(pay_time,'%Y-%m-%d') as 交易时间,\
        DATE_FORMAT(refund_time,'%Y-%m-%d') as 退款时间";
    }
    else//for search
    {
        _tableName = "sr_report_coupon_order `order` ";
        _fields = "order_id,order_no,third_order_no,coupon_name,payment_type,point,amount,source_type,\
        DATE_FORMAT(created_time,'%Y-%m-%d') as created_time,\
        DATE_FORMAT(pay_time,'%Y-%m-%d') as pay_time,\
        DATE_FORMAT(refund_time,'%Y-%m-%d') as refund_time";
    }
    //处理查询条件
    _condition = getCouponOrderReportWhere(condition);
    //处理排序和分页

    //拼接sql
    if (getAll == 1) {
        _sql = "select " + _fields + " from " + _tableName + " where " +
            _condition + ";";
    }
    else {
        _sortAndPage = comm.sortAndPage(sort, page);

        _sql = "select " + _fields + " from " + _tableName + " where " +
            _condition + _sortAndPage.sort + _sortAndPage.page + ";";
    }

    return _sql;
}

function getCouponOrderReportWhere(condition) {
    var _whereSql = " 1=1 ";
    if (condition && condition != {}) {
        if (condition.start_time) {
            _whereSql += " and  DATE_FORMAT(`order`.pay_time ,'%Y-%m-%d') >='" + condition.start_time + "' ";
        }
        if (condition.end_time) {
            _whereSql += " and DATE_FORMAT(`order`.pay_time ,'%Y-%m-%d')<='" + condition.end_time + "' ";
        }
        if (condition.source_type) {
            _whereSql += " and `order`.source_type=@source_type@";
        }
        if (condition.coupon_name) {

            _whereSql += " and `order`.coupon_name like concat(concat('%', @coupon_name@), '%')";
        }
        if (condition.order_no) {

            _whereSql += " and `order`.order_no like concat(concat('%', @order_no@), '%')";
        }
        _whereSql = db.makeSQL(_whereSql, condition);
    }
    return _whereSql;
}

var getCouponOrderReportCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "sr_report_coupon_order `order`";
    //默认值
    _condition = getCouponOrderReportWhere(condition);
    //处理查询条件
    _sql = " select count(*) as count from " + _tableName + " where " + _condition;
    //执行SQL
    return yield rconn.query(_sql);
}
exports.getCouponOrderReportCount=getCouponOrderReportCount;

var getExportOrderReportSql = function* (condition, sort, page) {

    let _sql= queryCouponOrderReportListSql(condition, sort, page, 1) ;

    let exportsql = "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(40,1,now(),'todo')";

    let result = yield wconn.query(exportsql);
    return { result: result, sql: _sql };
}
exports.getExportOrderReportSql=getExportOrderReportSql;

var getCouponOrderReportStatistic= function* (condition) {
    var _sql, _condition;
    var _tableName = "sr_report_coupon_order `order`";
    //默认值
    _condition = getCouponOrderReportWhere(condition);
    //处理查询条件
    _sql = " select sum(`order`.point) as total_point,sum(`order`.amount) as total_amount from " + _tableName + " where " + _condition;
    //执行SQL
    let result= yield rconn.query(_sql);
    if(result.length>0)
    {
        return {
            total_point:result[0].total_point,
            total_amount:result[0].total_amount
        }
    }
    return {
        total_point:0,
        total_amount:0
    }
}
exports.getCouponOrderReportStatistic=getCouponOrderReportStatistic;



/**
 // *  查询礼券订单所有信息(分页)
 // * @param condition 查询条件
 // * @param sort 排序
 // * @param page 分页
 // */
var getCouponOrderList = function* (condition, sort, page) {
    var _sql = getQueryCouponOrderListSql(condition, sort, page, 0);
    return yield rconn.query(_sql);
};
exports.getCouponOrderList=getCouponOrderList;


var getCouponOrderCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "sr_coupon_order as o\
            left join sr_coupon_instance ci on ci.id=o.coupon_instance_id \
            left join sr_coupon_point_rule pr on pr.id=o.point_rule_id \
            left join sr_coupon_rule r on r.id=pr.rule_id\
            left join sr_coupon_template temp on temp.id=r.coupon_temp_id\
            left join sr_cust_customer cust on cust.id=o.cust_id\
            left join sr_cust_card card on card.custid=cust.id  and is_latest=1 ";
    //默认值
    _condition = getCouponOrderQueryWhere(condition);
    //处理查询条件
    _sql = " select count(*) as count from " + _tableName + " where " + _condition;
    //执行SQL
    return yield rconn.query(_sql);
};
exports.getCouponOrderCount=getCouponOrderCount;


function getQueryCouponOrderListSql(condition, sort, page, getAll) {
    var _sql, _condition, _sortAndPage;
    var _tableName, _fields;
    if (getAll == 1)//for export
    {
        _tableName = "sr_coupon_order as o\
            left join sr_coupon_instance ci on ci.id=o.coupon_instance_id \
            left join sr_coupon_point_rule pr on pr.id=o.point_rule_id \
            left join sr_coupon_rule r on r.id=pr.rule_id\
            left join sr_coupon_template temp on temp.id=r.coupon_temp_id\
            left join sr_cust_customer cust on cust.id=o.cust_id\
            left join sr_cust_card card on card.custid=cust.id and is_latest=1";
        _fields = "o.id as id,\
        temp.name as 订单名称,\
        (case when r.applicable_channel=1 then '积分商城' when r.applicable_channel=4 then '团购' when r.applicable_channel=5 then '特卖' else '其他' end) as 订单来源,\
        o.no as 订单编号,\
        ci.no as 券编号,\
        DATE_FORMAT(o.createdtime,'%Y-%m-%d') as 下单时间 ,\
        (case when o.status=1 then '未支付' when o.status=2 then '已发货' when o.status=3 then '已完成'  when o.status=4 then '已取消'  when o.status=5 then '待发货' else '其他' end ) as 订单状态,\
        CONCAT(cust.fullname,'(',cust.mobile,')') as 会员";
    }
    else//for search
    {
        _tableName = "sr_coupon_order as o\
            left join sr_coupon_order_extend ex on ex.order_id=o.id \
            left join sr_coupon_instance ci on ci.id=o.coupon_instance_id \
            left join sr_coupon_point_rule pr on pr.id=o.point_rule_id \
            left join sr_coupon_rule r on r.id=pr.rule_id\
            left join sr_coupon_template temp on temp.id=r.coupon_temp_id\
            left join sr_cust_customer cust on cust.id=o.cust_id\
            left join sr_cust_card card on card.custid=cust.id and is_latest=1 ";
        _fields = "o.id as id,\
        temp.name as order_name,\
        o.no as order_no,\
        r.applicable_channel as order_source,\
        ci.no as coupon_no,\
        o.status as order_status,\
        DATE_FORMAT(o.createdtime,'%Y-%m-%d') as order_created_date ,\
        cust.fullname as cust_name,\
        cust.mobile as cust_mobile,\
        temp.category_code as category_code,\
        o.payment_type as payment_type,\
        o.point,\
        o.amount,\
        ex.receipt_way";
    }

    //处理查询条件
    _condition = getCouponOrderQueryWhere(condition);
    //处理排序和分页

    //拼接sql
    if (getAll == 1) {
        _sql = "select " + _fields + " from " + _tableName + " where " +
            _condition + ";";
    }
    else {
        _sortAndPage = comm.sortAndPage(sort, page);

        _sql = "select " + _fields + " from " + _tableName + " where " +
            _condition + _sortAndPage.sort + _sortAndPage.page + ";";
    }

    return _sql;
}

function getCouponOrderQueryWhere(condition) {
    var _whereSql = " DATE_FORMAT(o.createdtime,'%Y-%m-%d')>DATE_FORMAT(DATE_ADD(now(),INTERVAL -6 MONTH),'%Y-%m-%d') ";
    if (condition && condition != {}) {
        if (condition.cust_condition) {
            _whereSql += " and (cust.mobile=@cust_condition@ or card.cardno=@cust_condition@ )";
        }
        if (condition.order_name) {
            _whereSql += " and temp.name like '%" + condition.order_name.replace(/'/g, "''") + "%'";
        }
        if (condition.order_no) {
            _whereSql += " and o.no=@order_no@";
        }
        if (condition.order_source) {
            _whereSql += " and r.applicable_channel=@order_source@";
        }
        if (condition.coupon_no) {
            _whereSql += " and ci.no=@coupon_no@ ";
        }
        if (condition.order_status) {
            _whereSql += " and o.status=@order_status@";
        }
        if (condition.order_created_date) {
            _whereSql += " and DATE_FORMAT(o.createdtime,'%Y-%m-%d')=DATE_FORMAT(@order_created_date@,'%Y-%m-%d')";
        }
        _whereSql = db.makeSQL(_whereSql, condition);
    }
    return _whereSql;
}

var getExportOrderSql = function* (condition, sort, page) {

    let _sql= getQueryCouponOrderListSql(condition, sort, page, 1) ;

    let exportsql = "insert into sr_sys_export(moduleid,statuscode,createdtime,createrid) value(41,1,now(),'todo')";

    let result = yield wconn.query(exportsql);
    return { result: result, sql: _sql };
}
exports.getExportOrderSql=getExportOrderSql;


var getOrderDetailById = function* (id) {
    var _sql;
    //处理查询条件
    _sql = " select o.no as order_no,temp.name as order_name , r.applicable_channel as order_source, \
    ci.no as coupon_no,o.status as order_status,o.amount,o.point\
     from sr_coupon_order o \
     left join sr_coupon_instance ci on ci.id=o.coupon_instance_id \
     left join sr_coupon_point_rule pr on pr.id=o.point_rule_id \
     left join sr_coupon_rule r on r.id=pr.rule_id\
     left join sr_coupon_template temp on temp.id=r.coupon_temp_id\
     where o.id= @id@;";
    _sql = db.makeSQL(_sql,{id:id})
    return yield rconn.query(_sql);
};
exports.getOrderDetailById=getOrderDetailById;


var getOrderCustInfoById=function* (id) {
    var _sql;
    //处理查询条件
    _sql = " select cust.fullname as cust_name,concat('cardlevel_',ifnull(card.levelno,''))  as cust_level,cust.mobile,card.cardno as card_no\
      from sr_coupon_order o \
      left join sr_cust_customer cust on cust.id=o.cust_id\
      left join sr_cust_card card on card.custid=cust.id and card.statuscode=1\
      where o.id= @id@;";
    _sql = db.makeSQL(_sql,{id:id})
    return yield rconn.query(_sql);
};
exports.getOrderCustInfoById=getOrderCustInfoById;


var getOrderHistoryById=function*(id)
{
    var _sql;
    //处理查询条件
    _sql = " select h.oper_type_code ,user.name as oper_name,h.remark, DATE_FORMAT(h.createdtime,'%Y-%m-%d') as created_time\
      from sr_coupon_order_history h \
      left join sc_user user on user.innerid=h.createrid\
      where h.order_id= @id@;";
    _sql = db.makeSQL(_sql,{id:id})
    return yield rconn.query(_sql);
}
exports.getOrderHistoryById=getOrderHistoryById;


var getOrderAddressById=function*(id)
{
    var _sql;
    //处理查询条件
    _sql = " select extend.recipient_name ,extend.mobile,extend.detail_address\
      from sr_coupon_order_extend extend \
      where extend.order_id= @id@;";
    _sql = db.makeSQL(_sql,{id:id})
    return yield rconn.query(_sql);
}
exports.getOrderAddressById=getOrderAddressById;


var deliverOrder=function*(data)
{
    let conn = yield app.res.getDBWConnection("sr", "deliverOrder");
    let isBeginTransaction = false;
    var result;
    try {
        let dbResult = yield conn.beginTransaction();
        isBeginTransaction = true;
        if(!data.modifier_id)
        {
            data.modifier_id='';
        }
        if(!data.remark)
        {
            data.remark='';
        }
        var _sql = " update sr_coupon_order_extend set express_company=@express_company@,express_no=@express_no@,modifiedtime=now(),modifierid=@modifier_id@\
      where order_id= @order_id@;";
        _sql += " update sr_coupon_order set status=2,modifiedtime=now(),modifierid=@modifier_id@ where id=@order_id@;";
        _sql += "INSERT into sr_coupon_order_history (order_id,oper_type_code,remark,createrid,createdtime) values(@order_id@,10,@remark@,@modifier_id@,NOW());"
        _sql = db.makeSQL(_sql,data);
        result = yield conn.query(_sql);
        result = yield conn.commit()
        return result;
    } catch (e) {
        if (conn) {
            yield conn.rollback();
            return  app.err.systemError.msg(e);
        }
    } finally {
        if (conn) {
            conn.release();
        }
    }
}
exports.deliverOrder=deliverOrder;


/**
 * 获取订单详情
 * @param  {object} msg   查询条件
 * @return {object}   result   结果
 */
function* getOrderDetail(msg) {
    let where="";
    if (msg.order_id) {
        where += " and id=@order_id@";
    }
    if (msg.order_no) {
        where += " and no=@order_no@";
    }

    let sql = "select order.id,order.no,order.coupon_instance_id,order.status,unix_timestamp(order.createdtime) as created_time ,\
point.id as ruleid,is_allow_share,point.point,point.amount*100 as amount,point.cust_card_type_limit,case when temp.category_code=1 then temp.coupon_value*10 else temp.coupon_value*100 end as coupon_value,\
concat('',temp.id) as tempid,temp.name,temp.image_id as image,case when temp.category_code=1 then 2 when temp.category_code=2 then 1 else temp.category_code end as type,\
temp.orgid as org_id,max_assign_count,send_count as sent_count,left_count as urplus_count,class_code,applicable_scope,temp.valid_type_code,unix_timestamp(temp.valid_starttime) as valid_starttime,unix_timestamp(temp.valid_endtime) as valid_endtime ,valid_days\
    ,cust.id as cust_id,cust.fullname as cust_name,card.cardno as cust_card_no,rule.applicable_channel as applicable_channel,\
    i.no as coupon_no,i.status as coupon_status, unix_timestamp(order.pay_time) as pay_time,unix_timestamp(order.cancel_time) as cancel_time,\
    unix_timestamp(order.complete_time) as complete_time,order.payment_type,order.third_order_no  as third_order_no \
     from sr_coupon_order `order`\
     inner join (select id from sr_coupon_order where 1=1 "+where+") j on j.id=order.id "+
        " left join sr_coupon_point_rule point on point.id = order.point_rule_id\
        left join sr_coupon_rule rule on rule.id = point.rule_id\
        left join sr_coupon_template temp on temp.id = rule.coupon_temp_id\
        left join sr_cust_customer cust on cust.id = order.cust_id\
        left join sr_cust_card card on cust.id = card.custid and card.statuscode=1\
        left join sr_coupon_instance i on i.id = order.coupon_instance_id "
    sql = db.makeSQL(sql, msg);
    let result = yield app.res.getRPoolSync().query(sql);
    let res = [];
    result.forEach(function (item, index) {
        item.rule_info = {};
        item.rule_info.id = item.ruleid;
        delete item.ruleid;
        item.rule_info.is_allow_share = (item.is_allow_share == 1);
        delete item.is_allow_share;
        item.rule_info.point = item.point;
        delete item.point;
        item.rule_info.amount = item.amount;
        delete item.amount;
        item.rule_info.cust_card_type_limit = item.cust_card_type_limit;
        delete item.cust_card_type_limit;
        item.rule_info.applicable_channel = item.applicable_channel;
        delete item.applicable_channel;
        item.rule_info.coupon_temp = {};
        item.rule_info.coupon_temp.id = item.tempid;
        delete item.tempid;
        item.rule_info.coupon_temp.name = item.name;
        delete item.name;
        item.rule_info.coupon_temp.image = item.image;
        delete item.image;
        item.rule_info.coupon_temp.type = item.type;
        delete item.type;
        item.rule_info.coupon_temp.org_id = item.org_id;
        delete item.org_id;
        item.rule_info.coupon_temp.max_assign_count = item.max_assign_count;
        delete item.max_assign_count;
        item.rule_info.coupon_temp.sent_count = item.sent_count;
        delete item.sent_count;
        item.rule_info.coupon_temp.urplus_count = item.urplus_count;
        delete item.urplus_count;
        item.rule_info.coupon_temp.class_code = item.class_code;
        delete item.class_code;
        item.rule_info.coupon_temp.face_value = item.coupon_value;
        delete item.coupon_value;
        item.rule_info.coupon_temp.applicable_scope = item.applicable_scope;
        delete item.applicable_scope;
        if (item.valid_type_code == 1) {
            item.rule_info.coupon_temp.expire = { absolute: { begin_time: item.valid_starttime, end_time: item.valid_endtime } }
        }
        else {
            item.rule_info.coupon_temp.expire = { relative: { day: item.valid_days } }
        }
        delete item.valid_type_code;
        delete item.valid_days;
        delete item.valid_endtime;
        delete item.valid_starttime;
        if(item.coupon_instance_id)
        {
            item.coupon_info = {};
            item.coupon_info.id=item.coupon_instance_id.toString();
            item.coupon_info.template_id=item.rule_info.coupon_temp.id.toString();
            item.coupon_info.code = item.coupon_no;
            delete item.coupon_no;
            item.coupon_info.status = item.coupon_status;
            delete item.coupon_status;
        }
        else
        {
            delete item.coupon_no;
            delete item.coupon_status;
        }

        res.push(item);
    })
    return res[0];
}

exports.getOrderDetail=getOrderDetail;

//获取可用库存
let getLeftCount = function* (temp_id) {
    let left_count=yield app.redis.get("coupon:counter:"+temp_id+":left");
    if(!left_count)
    {
        var key = "coupon:template:" + temp_id;
        var couponTemplete =yield app.redis.get(key);
        couponTemplete = eval('(' + couponTemplete + ')')
        log.info('couponTemplete:'+JSON.stringify(couponTemplete))
        if(couponTemplete&&couponTemplete.length>0)
        {
            left_count= couponTemplete[0].left_count;
        }
    }
    return parseInt(left_count);
}
exports.getLeftCount=getLeftCount;


//锁定可用库存
let lockLeftCount = function* (temp_id) {
    yield app.redis.decr("coupon:counter:"+temp_id+":left");
}
exports.lockLeftCount=lockLeftCount;

//释放可用库存
let releaseLeftCount = function* (temp_id) {
    yield app.redis.incr("coupon:counter:"+temp_id+":left");
}
exports.releaseLeftCount=releaseLeftCount;

//更新最大发放数至redis
function* updateMaxAssginCount(temp_id,count) {
    var key = "coupon:template:" + temp_id;
    var couponTemplete =yield app.redis.get(key);
    couponTemplete = eval('(' + couponTemplete + ')')
    if(couponTemplete&&couponTemplete.length>0)
    {
        couponTemplete[0].max_assign_count= couponTemplete[0].max_assign_count+count;
        app.redis.set(key, JSON.stringify(couponTemplete))
    }
}
exports.updateMaxAssginCount=updateMaxAssginCount;

/**
 * 换货处理
 * @param msg 订单数据 order_id,modifierid,remark,oper_type_code
 * @returns result  结果
 */
function* exchangeGoods(msg)
{
    log.info('exchangeGoods starting...');
    log.debug('input<->msg=%s', JSON.stringify(msg));
    let isBeginTransaction = false;
    let conn = yield app.res.getDBWConnection("exchangeGoods");
    let query_sql = "select coupon_temp_id from sr_coupon_instance where id=( select coupon_instance_id from sr_coupon_order where id=" + msg.order_id + ") ";
    let query_result = yield conn.query(query_sql);
    let coupon_temp_id = 0;
    if (query_result && query_result.length > 0) {
        coupon_temp_id = query_result[0].coupon_temp_id;
        yield this.lockLeftCount(coupon_temp_id);
        yield this.updateMaxAssginCount(coupon_temp_id,-1);

    }
    else
    {
        return app.err.noFound.msg('not find coupon template');
    }
    try {
        let dbResult = yield conn.beginTransaction();
        isBeginTransaction = true;
        // let update_sql=" update sr_coupon_template set max_assign_count=max_assign_count-1,left_count=left_count-1,modifiedtime=now() ";
        // if (msg.modifierid) {
        //     update_sql+=" ,modifierid=@modifierid@ "
        // }
        // update_sql+=" where id="+coupon_temp_id;
        // update_sql = db.makeSQL(update_sql, msg);
        // dbResult = yield conn.query(update_sql);
        //新增历史记录
        let historyDBObject = {};
        let curTime = new Date().format("yyyy-MM-dd hh:mm:ss");
        historyDBObject.order_id = msg.order_id;
        historyDBObject.oper_type_code = msg.oper_type_code;
        historyDBObject.createdtime = curTime;
        historyDBObject.createrid = msg.modifierid ? msg.modifierid : null;
        historyDBObject.remark = msg.remark ? msg.remark : null;
        let insertHistorySql = db.makeSQLInsert('sr_coupon_order_history', historyDBObject);
        log.debug(insertHistorySql)
        dbResult = yield conn.query(insertHistorySql);
        dbResult = yield conn.commit();
        return dbResult;
    }
    catch (err) {
        log.error("exchange goods error", err);
        if (isBeginTransaction && conn) {
            if(coupon_temp_id>0)
            {
                yield this.releaseLeftCount(coupon_temp_id);
                yield this.updateMaxAssginCount(coupon_temp_id,1);
            }
            yield conn.rollback();
        }

    }
    finally {
        if (conn) {
            conn.release();
        }
        log.info('exchangeGoods fishing...');
    }
}
exports.exchangeGoods=exchangeGoods;

/**
 * 礼券作废
 * @param msg 礼券数据
 * @returns result  结果
 */
function* deleteCoupon(msg)
{
    log.info('deleteCoupon starting...');
    log.debug('input<->msg=%s', JSON.stringify(msg));
    let isBeginTransaction = false;
    let conn = yield app.res.getDBWConnection("deleteCoupon");
    try {
        let dbResult = yield conn.beginTransaction();
        isBeginTransaction = true;
        let dbObject = {};
        dbObject.status = 4;//已作废
        let curTime = new Date().format("yyyy-MM-dd hh:mm:ss");
        dbObject.modifiedtime = curTime;
        //更新订单状态
        let updateSql = db.makeSQLUpdate('sr_coupon_instance', dbObject, {id: msg.coupon_instance_id});
        dbResult = yield conn.query(updateSql);
        //新增历史记录
        let historyDBObject = {};
        historyDBObject.instance_id = msg.coupon_instance_id;
        historyDBObject.oper_type_code = "4";
        historyDBObject.cust_id=msg.cust_id;
        historyDBObject.createdtime = curTime;
        historyDBObject.remark = msg.remark ? msg.remark : null;
        let insertHistorySql = db.makeSQLInsert('sr_coupon_history', historyDBObject);
        log.debug(insertHistorySql)
        dbResult = yield conn.query(insertHistorySql);
        dbResult = yield conn.commit();
        return dbResult;
    }
    catch (err) {
        log.error("delete coupon error", err);
        if (isBeginTransaction && conn) {
            yield conn.rollback();
        }
    }
    finally {
        if (conn) {
            conn.release();
        }
    }
}
exports.deleteCoupon=deleteCoupon;


/**
 * 取消订单
 * @param msg 订单数据 order_id,modifierid,remark,oper_type_code
 * @returns result  结果
 */
function* cancelOrder(msg)
{
    log.info('cancelOrder starting...');
    log.debug('input<->msg=%s', JSON.stringify(msg));
    let isBeginTransaction = false;
    let conn = yield app.res.getDBWConnection("cancelOrder");
    let query_sql = "select coupon_temp_id from sr_coupon_rule where id = (select rule_id from sr_coupon_point_rule where id =(select point_rule_id from sr_coupon_order where id=" + msg.order_id + ")) ";
    let query_result = yield conn.query(query_sql);
    let coupon_temp_id = 0;
    if (query_result && query_result.length > 0) {
        coupon_temp_id = query_result[0].coupon_temp_id;
        //当为质量问题退货时，无需释放库存，最大发放数需-1
        if(msg.oper_type_code==7)
        {
            yield this.updateMaxAssginCount(coupon_temp_id,-1);
        }
        else
        {
            log.info(' starting to releaseLeftCount...');
            yield this.releaseLeftCount(coupon_temp_id);
        }
    }
    try {
        let dbResult = yield conn.beginTransaction();
        isBeginTransaction = true;
        let dbObject = {};
        dbObject.status = 4;//已取消
        let curTime = new Date().format("yyyy-MM-dd hh:mm:ss");
        if (msg.modifierid) {
            dbObject.modifierid = msg.modifierid;
        }
        if (msg.third_refund_no) {
            dbObject.third_refund_no = msg.third_refund_no;
            dbObject.refund_time=curTime;
        }

        dbObject.modifiedtime = curTime;
        dbObject.remark=msg.oper_type_code;
        //更新订单状态
        let updateSql = db.makeSQLUpdate('sr_coupon_order', dbObject, {id: msg.order_id});
        dbResult = yield conn.query(updateSql);
        //新增历史记录
        let historyDBObject = {};
        historyDBObject.order_id = msg.order_id;
        historyDBObject.oper_type_code = msg.oper_type_code;
        historyDBObject.createdtime = curTime;
        historyDBObject.createrid = msg.modifierid ? msg.modifierid : null;
        historyDBObject.remark = msg.remark ? msg.remark : null;
        let insertHistorySql = db.makeSQLInsert('sr_coupon_order_history', historyDBObject);
        log.debug(insertHistorySql)
        dbResult = yield conn.query(insertHistorySql);
        dbResult = yield conn.commit();
        return dbResult;
    }
    catch (err) {
        log.error("cancel order error", err);
        if (isBeginTransaction && conn) {
            if(coupon_temp_id>0)
            {
                log.info('lockLeftCount starting...');
                //当为质量问题退货时，最大发放数还原+1
                if(msg.oper_type_code==7)
                {
                    yield this.updateMaxAssginCount(coupon_temp_id,1);
                }
                else
                {
                    yield this.lockLeftCount(coupon_temp_id);
                }
            }
            yield conn.rollback();
        }

    }
    finally {
        if (conn) {
            conn.release();
        }
    }
}
exports.cancelOrder=cancelOrder;

/**
 * 根据订单ID获取相关的礼券信息
 * @param msg 订单id order_id
 * @returns result  结果
 */
function* getCouponInfoByOrderId(id)
{
    try {
        var _sql;
        //处理查询条件
        _sql = " select i.no as coupon_no, o.cust_id\
      from sr_coupon_order o left join sr_coupon_instance i on i.id=o.coupon_instance_id\
      where o.id= @id@;";
        _sql = db.makeSQL(_sql,{id:id})
        let result= yield rconn.query(_sql);
        return result[0];
    }
    catch (err) {
        log.error("getCouponInfoByOrderId error", err);

    }
    finally {
        log.info("getCouponInfoByOrderId finish");
    }

}
exports.getCouponInfoByOrderId=getCouponInfoByOrderId;