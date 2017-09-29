/**
 * Created by Ryan on 2016/07/06.
 * 客户数据库操作层
 */
'use strict';
let sc = require('smartacjs'),
    app = sc.app(),
    _ = sc._,
    db = sc.db(),
    comm = require('../../common/comm.js'),
    rPool = app.res.getRPoolSync('sc'),
    wPool = app.res.getWPoolSync('sc');
let log = sc.createNamedLog('scAdmin', 'customerDao');
let SCError = app.err.SCError;
const CARDNO_CHARS_NUMBER = ['0','1','2','3','4','5','6','7','8','9'];
const CARDNO_CHARS_LETTER = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

/*
 * 根据客户id,获取客户详细信息
 * */
exports.custSearch = function* (data) {
    let sql = "select c.*,qrcode.scenes_name,c.emailaddress as email ,ifnull(p.currenttotalnum,0) as currenttotalnum,concat('gender_',ifnull(c.gendercode,'')) as sextext,duetime,concat('cardlevel_',ifnull(cc.levelno,'')) as cardlevel,o.name as shopname,cc.cardno,cc.statuscode,t.typecode from sr_cust_customer c" +
        " left join sr_point_main p on p.custid = c.id" +
        " left join sc_org o on o.innerid=c.orgid " +
        " left join (select custid,group_concat(scenes_name) as scenes_name from sr_cust_union a left join sc_qrcode b on a.accountid=b.account_id and a.qrcodesource=b.scenes_id where scenes_name is not null group by custid) qrcode on qrcode.custid=c.id " +
        " left join sr_cust_card cc on cc.custid = c.id and cc.is_latest = 1" +
        " left join (select custid, group_concat(typecode) as typecode from sr_cust_type where isdelete=0  group by custid) t on t.custid=c.id " +
        " where c.id =@id@";
    sql = db.makeSQL(sql, data);
    let result = yield rPool.query(sql);
    return result;
};


/*
 * 通过会员卡号或手机号查询会员信息
 * @param condition
 * add  by snow on 2016/3/29
 * */
exports.custSearchByCardnoOrNumber = function* (condition) {

    var sql = " select c.id,c.fullname,c.mobile,c.idnum,ifnull(p.currenttotalnum,0) as currenttotalnum,ifnull(p.cumulativenum,0) as cumulativenum,cc.cardno from sr_cust_customer c" +
        " left join sr_point_main p on p.custid = c.id" +
        " left join sr_cust_card cc on cc.custid = c.id and cc.statuscode = 1 and cc.is_latest=1" +
        " where 1 =1 ";
    //会员卡号
    if (condition.cardno) {
        sql += " and (cc.cardno =@cardno@)";
    }
    //会员手机
    if (condition.mobile) {
        sql += " and (c.mobile =@mobile@)";
    }
    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    return result;
}

/*
 * 根据会员卡主键id,获取会员卡详细信息
 * */
exports.getCardById = function* (data) {
    var sql = "select * from sr_cust_card where id =@id@ ";
    sql = db.makeSQL(sql, data);
    let result = yield rPool.query(sql);
    return result;
}

/*
 * 根据客户id,获取客户所有会员卡
 * */
exports.getCustCard = function* (condition) {
    var sql = "";
    if (condition.querytype == "main") {
        let _sortAndPage = comm.sortAndPage(condition.order, condition.page);
        sql = "select cc.id,cardno, c.fullname,c.mobile,concat('cardstatus_',ifnull(cc.statuscode,''))  as statuscode, concat('cardlevel_',ifnull(cc.levelno,''))  as cardlevel,date_format(issuetime,'%Y-%m-%d') as issuetime,date_format(duetime,'%Y-%m-%d') as duetime, ( case WHEN duetime is null THEN '0' WHEN duetime < now() THEN '1' else '0' end) as is_expired  " +
            " from sr_cust_card cc" +
            " left join sr_cust_customer c on c.id=cc.custid " +
            " where cc.custid=@custid@ " + _sortAndPage.sort;
    }
    else {
        sql = "select count(1) as totalcount  from sr_cust_card where custid=@custid@";
    }
    sql = db.makeSQL(sql, condition.where);
    let result = yield rPool.query(sql);
    return result;
};

exports.getChatList = function* (condition) {
    let sql = "";
    let where = "";
    let tradewhere = "";
    if (condition.where) {
        if (condition.where.custid) {
            where += " and a.custid=@custid@";
        }
    }
    if (condition.querytype == "main") {
        let _sortAndPage = comm.sortAndPage(condition.order, condition.page);
        sql = "select a.*,c.fullname,date_format(messagetime,'%Y-%m-%d %T') as messagetime from sr_multicustservice_message a " +
            "left join sr_cust_customer c on c.id = a.custid where 1=1 " + where + " " + _sortAndPage.sort + " " + _sortAndPage.page;
    }
    else {
        sql = "select count(1) as totalcount from sr_multicustservice_message a" +
            " where 1=1 " + where;
    }
    sql = db.makeSQL(sql, condition.where);
    let result = yield rPool.query(sql);
    return result;
}

exports.getPrebuildCardsHistoryList = function* (condition) {
    let sql = "";
    if (condition.querytype == "main") {
        let _sortAndPage = comm.sortAndPage(condition.order, condition.page);
        sql = "select * from sr_cust_card_perbuild " + _sortAndPage.sort + " " + _sortAndPage.page;
    } else {
        sql = "select count(1) as totalcount from sr_cust_card_perbuild; ";
    }
    let result = yield rPool.query(sql);
    return result;
}

/*
 * 获取会员卡列表
 * */
exports.getCardList = function* (condition) {
    let sql = "";
    let where = getCardListWhereSql(condition);

    if (condition.querytype == "main") {
        let _sortAndPage = comm.sortAndPage(condition.order, condition.page);
        sql = "select a.id, cardno, fullname,idnum,totaltradeamount,cumulativenum,currenttotalnum,concat('cardstatus_',ifnull(a.statuscode,''))  as statuscode,concat('cardlevel_',ifnull(a.levelno,''))  as cardlevel," +
            " date_format(issuetime,'%Y-%m-%d') as issuetime,date_format(duetime,'%Y-%m-%d') as duetime, date_format(duetime,'%Y-%m-%d %H:%i:%s') as original_duetime, ( case WHEN a.duetime is null THEN '0' WHEN a.duetime < now() THEN '1' else '0' end) as is_expired " +
            " from sr_cust_card a " +
            " inner join " +
            " (select a.id from " +
            "    sr_cust_card a  " +
            "    left join sr_cust_customer c on c.id=a.custid  " +
            "    left join sr_point_main d on d.custid=a.custid " +
            "    where 1=1 " + where + " " + _sortAndPage.sort + " " + _sortAndPage.page +
            " ) b on a.id=b.id " +
            " left join sr_cust_customer c on c.id = a.custid " +
            " left join sr_point_main d on d.custid=a.custid";
    } else {
        if (where) {
            sql = "select count(1) as totalcount " +
                " from sr_cust_card a " +
                " left join sr_cust_customer c on c.id=a.custid" +
                " left join sr_point_main d on d.custid=a.custid" +
                " where 1=1 " + where;
        } else {
            sql = "select count(a.id)+b.totalnum as totalcount " +
                " from sr_cust_card a, sr_sys_precounter b " +
                " where b.table_name='pagelist_custcard' and a.createdtime>concat(curdate(),' 00:22:00')";
        }

    }

    sql = db.makeSQL(sql, condition.where)
    let result = yield rPool.query(sql);
    return result;
};

/**
 * 导出会员卡
 * @param condition
 * @returns {{sql: string, insertId: (*|Array|string|Number)}}
 */
exports.getCardListExportSql = function* (condition) {
    // 拿到cardlevel
    let cardLevelResults = yield rPool.query("select * from sc_code where keyname like '%cardlevel_%';");
    let cardLevels = {};
    for (let i in cardLevelResults) {
        cardLevels[cardLevelResults[i].keycode] = cardLevelResults[i];
    }

    // card status
    let cardStatusResults = yield rPool.query("select * from sc_code where keyname like '%cardstatus_%';");
    let cardStatuss = {};
    for (let i in cardStatusResults) {
        cardStatuss[cardStatusResults[i].keycode] = cardStatusResults[i];
    }

    let sql = "";
    let where = getCardListWhereSql(condition);

        sql = "select a.cardno as 会员卡号, fullname as 会员名, " +
            " (case WHEN a.levelno = 1 THEN '"+ cardLevels[1].keyvalue +"' WHEN a.levelno = 2 THEN '"+ cardLevels[2].keyvalue +"' WHEN a.levelno = 3 THEN '"+ cardLevels[3].keyvalue +"' else '' end)  as 卡等级, " +
            " totaltradeamount as 交易总金额, cumulativenum as 总积分, currenttotalnum as 可用积分, " +
            " date_format(a.issuetime,'%Y-%m-%d') as 开卡时间, date_format(a.duetime,'%Y-%m-%d') as 过期时间, " +
            " (case WHEN a.statuscode = 0 THEN '"+ cardStatuss[0].keyvalue +"' WHEN a.statuscode = 1 THEN '"+ cardStatuss[1].keyvalue +"' WHEN a.statuscode = 2 THEN '"+ cardStatuss[2].keyvalue +"' WHEN a.statuscode = 3 THEN '"+ cardStatuss[3].keyvalue +"' else '' end) as 状态, " +
            " (case WHEN a.statuscode = 3 and a.valid_type_code = 0 THEN '永久有效' WHEN a.statuscode = 3 and a.valid_type_code = 1 THEN '固定时间' WHEN a.statuscode = 3 and a.valid_type_code = 2 THEN '固定时长' else '' end) as 有效期类型, " +
            " (case WHEN a.statuscode = 3 THEN date_format(a.valid_endtime,'%Y-%m-%d') else '' end)  as 有效时间, " +
            " (case WHEN a.statuscode = 3 THEN a.valid_days_after_activation else '' end)  as 有效时长（天）, " +
            " (case WHEN a.statuscode = 3 and a.activation_type = 1 THEN '激活码' WHEN a.statuscode = 3 and a.activation_type = 2 THEN '手机' else '' end) as 激活类型, " +
            " (case WHEN a.statuscode = 3 THEN a.activation_code else '' end)  as 激活码, " +
            " (case WHEN a.statuscode = 3 THEN a.matched_mobile else '' end)  as 激活手机 " +
            " from sr_cust_card a " +
            " inner join " +
            " (select a.id from " +
            "    sr_cust_card a  " +
            "    left join sr_cust_customer c on c.id=a.custid  " +
            "    left join sr_point_main d on d.custid=a.custid " +
            "    where 1=1 " + where + " order by a.id desc " +
            " ) b on a.id=b.id " +
            " left join sr_cust_customer c on c.id = a.custid " +
            " left join sr_point_main d on d.custid=a.custid";

    sql = db.makeSQL(sql, condition.where);

    let exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(50,1,now(),'" + condition.where.userid + "')";
    let result = yield wPool.query(exportsql);
    let res = { sql: sql, insertId: result.insertId };
    return res;
}

function getCardListWhereSql (condition) {
    let where = ""
    let tradewhere = "";

    if (condition.where) {
        // 会员卡号
        if (condition.where.cardno) {
            where += " and cardno=@cardno@ ";
        }
        // 卡等级
        if (condition.where.cardlevelnos) {
            where += " and levelno in ('" + condition.where.cardlevelnos.join(',').replace(/,/g, "\',\'") + "')";
        }
        // 卡到期时间
        if (condition.where.cardduetimeoption) {
            // 有效期时间
            if (condition.where.cardduetimeoption.toString() === "1") {
                //有效期（begin）
                if (condition.where.validitybegintime) {
                    condition.where.validitybegintime += " 00:00:00";
                    where += " and duetime>=@validitybegintime@";
                }
                //有效期（end）
                if (condition.where.validityendtime) {
                    condition.where.validityendtime += " 23:59:59";
                    where += " and duetime<=@validityendtime@";
                }
            } else if (condition.where.cardduetimeoption.toString() === "2") {
                where += " and duetime is null ";
            } else if (condition.where.cardduetimeoption.toString() === "3") {
                // 3 表示不限
            }
        }
        //开卡时间（begin）
        if (condition.where.cardissuetimebegin) {
            condition.where.cardissuetimebegin += " 00:00:00";
            where += " and issuetime>=@cardissuetimebegin@";
        }
        //开卡时间（end）
        if (condition.where.cardissuetimeend) {
            condition.where.cardissuetimeend += " 23:59:59";
            where += " and issuetime<=@cardissuetimeend@";
        }
        // 因为custid不再是必须的，所以如果有需要关联org的需求时，那些没有custid的也需要显示出来
        if (condition.where.orgids) {
            where += " and (c.orgid in ('" + condition.where.orgids.join(',').replace(/,/g, "\',\'") + "') or (a.custid is null)) ";
        }
        //会员名
        if (condition.where.custname) {
            where += " and (fullname like concat(@custname@,'%') or reverse_fullname like concat(reverse(@custname@) ,'%'))";
        }
        //会员ID
        if (condition.where.custid) {
            where += " and a.custid =@custid@";
        }
        //证件号
        if (condition.where.idnum) {
            where += " and idnum=@idnum@";
        }
        //消费金额(begin)
        if (condition.where.tradebeginamount) {
            where += " and totaltradeamount>=@tradebeginamount@";
        }
        //消费金额(end)
        if (condition.where.tradeendamount) {
            where += " and totaltradeamount<=@tradeendamount@";
        }
        //会员电话号码
        if (condition.where.Mobile) {
            where += " and mobile=@Mobile@";
        }
        //可用积分范围(begin)
        if (condition.where.pointbegin) {
            where += " and d.currenttotalnum >=@pointbegin@";
        }
        //可用积分范围（end）
        if (condition.where.pointend) {
            where += " and d.currenttotalnum <=@pointend@";
        }
        //总积分范围(begin)
        if (condition.where.totalpointbegin) {
            where += " and d.cumulativenum >=@totalpointbegin@";
        }
        //总积分范围（end）
        if (condition.where.totalpointend) {
            where += " and d.cumulativenum <=@totalpointend@";
        }
        //交易时间（begin）
        if (condition.where.tradebegintime) {
            condition.where.tradebegintime += " 00:00:00";
            tradewhere += " and tradetime>=@tradebegintime@";
        }
        //交易时间（end）
        if (condition.where.tradeendtime) {
            condition.where.tradeendtime += " 23:59:59";
            tradewhere += " and tradetime<=@tradeendtime@";
        }
        //状态
        if (condition.where.statuscode) {
            where += " and a.statuscode=@statuscode@";
        }
        if (tradewhere != "") {
            where += " and a.custid in (select custid from sr_cust_trade where 1=1 " + tradewhere + ") ";
        }
    }

    return where;
}

/*
 * 批量冻结会员卡
 * */
exports.frozenCustCard = function* (condition) {
    let cardlist = "";
    cardlist = condition.cardids.join(',');
    var sql = "update sr_cust_card set statuscode=0 where id in (" + cardlist + ") and statuscode=1";
    let result = yield wPool.query(sql);
    return result;
}

/*
 * 批量启用会员卡
 * */
exports.enableCustCard = function* (condition) {
    let cardlist = "";
    cardlist = condition.cardids.join(',');
    var sql = "update sr_cust_card set statuscode=1 where id in (" + cardlist + ") and statuscode=0";
    let result = yield wPool.query(sql);
    return result;
}


/**
 * 修改卡的状态
 *
 * 这个可以被其他地方重用，修改务必谨慎，加上了transaction
 *
 * @param condition 传入对象{id:卡id, statuscode: 卡状态, operator_id: 操作用户id}
 * @returns 返回对象{errcode: 错误代码, errmsg: 错误信息}  错误代码： 0 成功，-1 异常，>0 各种其他错误
 */
exports.editCardStatus = function* (condition) {
    let conn = yield app.res.getDBWConnection('sr', "editCardStatus");
    let isBeginTransaction = false;
    try {
        yield conn.beginTransaction();
        isBeginTransaction = true;

        // 更新会员卡表
        let sql = "update sr_cust_card set statuscode=@statuscode@, modifierid = @operator_id@, modifiedtime = now() where id=@id@";
        sql = db.makeSQL(sql, condition);
        yield conn.query(sql);

        // 插入会员卡记录表
        if (condition.statuscode == 0) {
            condition.type = 3;
        } else if (condition.statuscode == 1) {
            condition.type = 4;
        } else if (condition.statuscode == 2) {
            condition.type = 5;
        }
        let logsql = "insert into sr_cust_card_history select null,id,@type@,now(),@operator_id@,levelno from sr_cust_card where id=@id@";
        logsql = db.makeSQL(logsql, condition);
        yield conn.query(logsql);

        // 提交
        yield conn.commit();

        return {errcode:0};
    }catch (e) {
        log.error("editCardStatus:", e);
        if (isBeginTransaction && conn) {
            conn.rollback();
        }
        return { errcode: -1, errmsg: "数据库操作异常"};
    } finally {
        if (conn) {
            conn.release();
        }
    }
}


exports.getExportSql = function* (condition) {

    var _sql, _condition, _sortAndPage;
    var _fields = "ifnull(card.cardno,'') as 会员卡号,\
        ifnull(c.fullname,'') as 姓名,\
        ifnull(c.mobile,'') as 手机号";
    if (condition.exportsetting.sexcode.checked && condition.exportsetting.sexcode.checked != "false") {
        _fields += ",sex.keyvalue  as 性别";
    }
    if (condition.exportsetting.channelcode.checked && condition.exportsetting.channelcode.checked != "false") {
        _fields += ",source.keyvalue as 注册渠道";
    }
    if (condition.exportsetting.shop.checked && condition.exportsetting.shop.checked != "false") {
        _fields += ",ifnull(s.name,'') as 门店名称";
    }
    if (condition.exportsetting.point.checked && condition.exportsetting.point.checked != "false") {
        _fields += ",p.currenttotalnum as 可用积分";
    }
    if (condition.exportsetting.tradeinfo.checked && condition.exportsetting.tradeinfo.checked != "false") {
        _fields += ",c.totaltradeamount as 消费总金额";
    }
    if (condition.exportsetting.tradetime.checked && condition.exportsetting.tradetime.checked != "false") {
        _fields += ", c.tradetimes as 消费次数";
    }
    if (condition.exportsetting.lasttrade.checked && condition.exportsetting.lasttrade.checked != "false") {
        _fields += ", date_format(c.lasttradetime,'%Y-%m-%d %T')  as 最后交易时间";
    }
    if (condition.exportsetting.idnum.checked && condition.exportsetting.idnum.checked != "false") {
        _fields += ",c.idnum as 证件号";
    }
    if (condition.exportsetting.birthday.checked && condition.exportsetting.birthday.checked != "false") {
        _fields += ",DATE_FORMAT(c.birthday,'%Y.%m.%d')  as 生日";
    }
    if (condition.exportsetting.email.checked && condition.exportsetting.email.checked != "false") {
        _fields += ",c.emailaddress as 邮箱";
    }
    if (condition.exportsetting.address.checked && condition.exportsetting.address.checked != "false") {
        _fields += ",c.address as 地址";
    }
    if (condition.exportsetting.createdon.checked && condition.exportsetting.createdon.checked != "false") {
        _fields += ",date_format(c.createdtime,'%Y-%m-%d %T') as 创建时间";
    }
    //处理查询条件
    _condition = getCustQueryWhere(condition);
    //定义表
    var _tableName = "sr_cust_customer as c " +
        "inner join (select id from sr_cust_customer  c where  " + _condition + ") as c1 on c.id=c1.id\
        left join sc_org s on c.orgid = s.innerid\
        left join sr_cust_card card on c.id = card.custid and card.statuscode = 1 \
        left join sc_code sex on sex.keycode=c.gendercode and sex.keyname like 'gender_%' \
        left join sr_point_main p on p.custid=c.id\
        left join sc_code source on source.keycode=c.channelcode and source. keyname like 'channelcode_%' ";

    //拼接sql
    _sql = "select " + _fields + " from " + _tableName + ";";

    var exportsql = "insert into sr_sys_export(moduleid, statuscode,createdtime,createrid) value(1,1,now(),'" + _condition.userid + "')";

    let result = yield wPool.query(exportsql);
    let res = { sql: _sql, insertId: result.insertId };
    return res;
}

/**
 *  查询会员所有信息(分页)
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 */
exports.getCustList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;

    //定义字段
    let _fields = "card.id as cardid,\
         ifnull(card.cardno,'') as cardno,\
        card.levelno,\
        c.photo,\
       c.countrycode,\
       c.citycode,\
       c.provincecode,\
        ifnull(c.totaltradeamount,0) as totaltradeamount,\
        ifnull(c.tradetimes,0) as tradetimes,\
        DATE_FORMAT(c.lasttradetime,'%Y.%m.%d') as tradedate,\
        DATE_FORMAT(c.lasttradetime,'%H:%i') as tradetime,\
        c.isattention,\
        c.openid,\
        ifnull(c.fullname,'') as fullname,\
        ifnull(c.mobile,'') as mobile,\
        concat('gender_', ifnull(c.gendercode, ''))  as gendervalue,\
        concat('channelcode_', ifnull(c.channelcode, '')) as sourcevalue,\
        ifnull(s.name,'') as shopname,\
        c.createdtime,\
        ifnull(c.id,'') as id,\
        t.typecode,\
        c.address,\
        c.emailaddress,\
        DATE_FORMAT(c.birthday,'%Y.%m.%d')  as birthday,\
        c.idnum,\
        concat('idnumtype_', c.idtypecode)  as idtypecode,\
        p.currenttotalnum,\
        (card.statuscode) as statuscode, \
        ( case WHEN card.duetime is null THEN '0' WHEN card.duetime < now() THEN '1' else '0' end) as is_expired ";
    //处理查询条件
    _condition = getCustQueryWhere(condition);
    //处理排序和分页

    _sortAndPage = comm.sortAndPage(sort, page);

    //定义表
    let _tableName = "sr_cust_customer as c " +
        "inner join (select id from sr_cust_customer  c where  " + _condition + ' ' + _sortAndPage.sort + ' ' + _sortAndPage.page + ") as c1 on c.id=c1.id\
        left join sc_org s on c.orgid = s.innerid\
       left join sr_point_main p on p.custid=c.id\
        left join sr_cust_card card on c.id = card.custid and card.is_latest = 1 \
       left join (select custid, group_concat(typecode) as typecode from sr_cust_type where isdelete=0  group by custid) t on t.custid=c.id ";

    //拼接sql
    _sql = "select " + _fields + " from " + _tableName + " " + _sortAndPage.sort;
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
 *  查询会员总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
exports.getCustCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "sr_cust_customer as c \
        left join sc_org s on c.orgid = s.innerid \
        left join sr_cust_card card on c.id = card.custid and card.is_latest = 1 ";
    //默认值
    _condition = getCustQueryWhere(condition);
    //处理查询条件
    if (_condition == " 1=1 ") {
        _sql = "select count(a.id)+b.totalnum as totalcount  from sr_cust_customer a, sr_sys_precounter b where b.table_name='pagelist_customer' and a.createdtime>concat(curdate(),' 00:20:00')";
    }
    else {
        _sql = " select count(*) as totalcount from " + _tableName + " where " + _condition;
    }
    //执行SQL
    _sql = db.makeSQL(_sql, condition)
    let result = yield rPool.query(_sql);
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

function getCustQueryWhere(condition) {
    var _whereSql = " 1=1 ";
    if (condition && condition != {}) {
        if (condition.fullname) {
            _whereSql += " and (c.fullname like concat(@fullname@,'%') or reverse_fullname like concat(reverse(@fullname@) ,'%'))";
        }
        if (condition.mobile) {
            _whereSql += " and c.mobile=@mobile@";
        }
        if (condition.sourcecode) {
            _whereSql += " and c.channelcode=@sourcecode@";
        }
        if (condition.typecode) {
            _whereSql += " and  c.id in (select custid from sr_cust_type where typecode=@typecode@ and isdelete=0)";
        }
        if (condition.tradestarttimes) {
            _whereSql += " and c.tradetimes>=@tradestarttimes@";
        }
        if (condition.tradeendtimes) {
            _whereSql += " and c.tradetimes<=@tradeendtimes@";
        }
        if (condition.startamount) {
            _whereSql += " and c.totaltradeamount>=@startamount@";
        }
        if (condition.endamount) {
            _whereSql += " and c.totaltradeamount<=@endamount@";
        }
        if (condition.tradbegintime && condition.tradendtime) {
            condition.tradbegintime += " 00:00:00";
            condition.tradendtime += " 23:59:59";
            _whereSql += " and c.id in (select custid from sr_cust_trade where tradetime >=@tradbegintime@ and tradetime <=@tradendtime@)";
        }
        else {
            if (condition.tradbegintime) {
                condition.tradbegintime += " 00:00:00";
                _whereSql += " and c.id in (select custid from sr_cust_trade where tradetime >=@tradbegintime@)";
            }
            if (condition.tradendtime) {
                condition.tradendtime += " 23:59:59";
                _whereSql += " and c.id in (select custid from sr_cust_trade where tradetime <=@tradendtime@)";
            }
        }


        if (condition.gendercode) {
            _whereSql += " and c.gendercode=@gendercode@";
        }
        if (condition.statuscode != "") {
            if (condition.statuscode == 1) {
                _whereSql += " and c.id in (select custid from sr_cust_card where is_latest=1 and statuscode=1)";
            } else if (condition.statuscode == 2) {
                _whereSql += " and c.id in (select custid from sr_cust_card where is_latest=1 and statuscode=2)";
            }
            else if (!isNaN(condition.statuscode) && condition.statuscode == 0) {
                _whereSql += " and c.id in (select custid from sr_cust_card where is_latest=1 and statuscode=0)";
            }
        }

        if (condition.tags) {
            if (typeof (condition.tags) == "string") {
                condition.tags = condition.tags.split(",");
            }
            _whereSql += " and c.id in (select custid from sr_tag_cust where tagid in (" + condition.tags.join(',') + "))";
        }
        if (condition.citycode) {
            _whereSql += " and c.citycode=@citycode@";
        }
        if (condition.countrycode) {
            _whereSql += " and c.countrycode=@countrycode@";
        }
        if (condition.provincecode) {
            _whereSql += " and c.provincecode=@provincecode@";
        }
        if (condition.idnum) {
            _whereSql += " and idnum=@idnum@";
        }
        if (condition.cardno) {
            _whereSql += " and c.id in (select custid from sr_cust_card where is_latest=1 and cardno=@cardno@)";
        }
        if (condition.levelno) {
            _whereSql += " and c.id in (select custid from sr_cust_card where is_latest=1 and  levelno =@levelno@)";
        }
        if (condition.orgid) {
            _whereSql += " and c.orgid=@orgid@";
        }
        else if (condition.orgids) {
            _whereSql += " and c.orgid in ('" + condition.orgids.join(',').replace(/,/g, "\',\'") + "')";
        }
        if (condition.agemin && !isNaN(condition.agemin)) {
            _whereSql += " and c.birthday<=DATE_SUB(now(),INTERVAL " + condition.agemin + " YEAR )";
        }
        if (condition.agemax && !isNaN(condition.agemax)) {
            _whereSql += " and c.birthday>=DATE_SUB(now(),INTERVAL " + condition.agemax + " YEAR )";
        }
    }
    return _whereSql;
}


/**
 *  查询会员导入历史记录
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 */
exports.getCustImportHistoryList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;
    let _tableName = " sr_sys_importhistory as tba\
                                  left join sc_org o on o.innerid=tba.orgid";
    let _fields = " ifnull(o.name,'') as shopname,\
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
    _condition = getCustImportHistoryWhere(condition);
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
    _sql = "select " + _fields + " from " + _tableName + " where tba.typecode=1 " +
        _condition + " " + _sortAndPage.sort + " " + _sortAndPage.page + ";";
    //执行SQL
    _sql = db.makeSQL(_sql, condition)
    let result = yield rPool.query(_sql);
    return result;
};

/**
 *  查询会员导入历史记录
 * @param condition 查询条件
 * @param sort 排序
 * @param page 分页
 */
exports.getCustCardImportHistoryList = function* (condition, sort, page) {
    let _sql, _condition, _sortAndPage;
    let _tableName = " sr_sys_importhistory as tba\
                                  left join sc_org o on o.innerid=tba.orgid";
    let _fields = " ifnull(o.name,'') as shopname,\
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
    _condition = getCustImportHistoryWhere(condition);
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
    _sql = "select " + _fields + " from " + _tableName + " where tba.typecode=9 " +
        _condition + " " + _sortAndPage.sort + " " + _sortAndPage.page + ";";
    //执行SQL
    _sql = db.makeSQL(_sql, condition)
    let result = yield rPool.query(_sql);
    return result;
};

function getCustImportHistoryWhere(condition) {
    var _whereSql = "";
    if (condition && condition != {}) {
        if (condition.orgid) {
            _whereSql += " and tba.orgid=@orgid@";
        }
        if (condition.statuscode) {
            _whereSql += " and tba.statuscode=@statuscode@";
        }
        if (condition.originalfilename) {
            _whereSql += " and tba.originalname like concat('%',@originalfilename@,'%')";
        }
        if (condition.starttime) {
            condition.starttime += " 00:00:00";
            _whereSql += " and tba.starttime>=@starttime@";
        }
        if (condition.endtime) {
            condition.endtime += " 23:59:59";
            _whereSql += " and tba.endtime<=@endtime@";
        }
    }
    return _whereSql;
}

/**
 *  查询会员导入历史总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
exports.getCustImportHistoryCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "sr_sys_importhistory as tba  left join sc_org o on o.innerid=tba.orgid";
    //默认值
    _condition = getCustImportHistoryWhere(condition);
    //处理查询条件
    _sql = " select count(*) as totalcount from " + _tableName + " where tba.typecode=1 " + _condition;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    return result;
};

/**
 *  查询会员卡导入历史总数
 * @param condition 查询条件
 * @param callback 回调函数
 */
exports.getCustCardImportHistoryCount = function* (condition) {
    var _sql, _condition;
    var _tableName = "sr_sys_importhistory as tba  left join sc_org o on o.innerid=tba.orgid";
    //默认值
    _condition = getCustImportHistoryWhere(condition);
    //处理查询条件
    _sql = " select count(*) as totalcount from " + _tableName + " where tba.typecode=9 " + _condition;
    //执行SQL
    _sql = db.makeSQL(_sql, condition);
    let result = yield rPool.query(_sql);
    return result;
};


exports.getCardTempById=function*(id){
    let sql="select * from sr_cust_card c left join sr_cust_wechatcard_template t on t.templateid=c.card_temp_id where c.id=@id@";
    sql=db.makeSQL(sql,{id:id});
    let result=yield rPool.query(sql);
    return result;
}

exports.getValueByKeyName = function* (keyname) {
    let sql = "select keyvalue from sc_code where keyname=@keyname@";
    sql = db.makeSQL(sql, { keyname: keyname });
    return yield rPool.query(sql);
};


/**
 *  会员卡发放
 * @param req 会员卡信息
 * @param callback
 */
exports.addCustCard = function* (req) {
    req.remark = req.remark ? req.remark : null;
    req.duetime = req.duetime ? req.duetime + " 23:59:59" : null;

    // 先检查卡号是否存在
    let cardNoSql = "select * from sr_cust_card where cardno = @cardno@";
    cardNoSql = db.makeSQL(cardNoSql, req);
    let cardNoResult = yield rPool.query(cardNoSql);
    if (cardNoResult && cardNoResult.length > 0) {
        return new app.err.SCError(2, "此卡号已存在");
    }

    // 先找到老卡
    let oldCard;
    // 只可能有一张卡
    let oldCardSql = "select * from sr_cust_card where custid= @custid@ and is_latest=1; ";
    oldCardSql = db.makeSQL(oldCardSql, req);
    let oldCardResult = yield rPool.query(oldCardSql);
    if (oldCardResult && oldCardResult.length !=0) {
        if (oldCardResult.length > 1) {
            return new app.err.SCError(5004, "会员卡状态异常");
        } else {
            oldCard = oldCardResult[0];
            log.info("Got old card: " + JSON.stringify(oldCard));
        }
    }

    let conn = yield app.res.getDBWConnection('sr', "addCustCard");
    let isBeginTransaction = false;
    try {
        yield conn.beginTransaction();
        isBeginTransaction = true;

        // 把当前的卡作废
        if (oldCard) {
            let updateSql = "update sr_cust_card set statuscode=2, is_latest=0, modifierid = @createrid@, modifiedtime = now() where id = @id@";
            updateSql = db.makeSQL(updateSql, {id: oldCard.id, createrid: req.createrid});
            yield conn.query(updateSql);

            // 插入历史纪录表
            let logsql = "insert into sr_cust_card_history   select null,@cardid@,5,now(),@createrid@,levelno from sr_cust_card where id=@cardid@";
            logsql = db.makeSQL(logsql, {cardid: oldCard.id, createrid: req.createrid});
            yield conn.query(logsql);
        }

        // 插入新卡
        let insertSql = "insert into sr_cust_card (custid,cardno,statuscode,levelno,issuetime,duetime,remark,createrid,createdtime,modifierid,modifiedtime,is_latest) " +
            "values(@custid@,@cardno@,1,@levelno@,now(),@duetime@,@remark@,@createrid@,now(),@createrid@,now(),1)";
        insertSql = db.makeSQL(insertSql, req);
        let dbResult = yield conn.query(insertSql);

        // 去掉预生成卡号里面的号码
        let deleteCardNoSql = "delete from sr_cust_prebuilt_cardno where cardno=@cardno@";
        deleteCardNoSql = db.makeSQL(deleteCardNoSql, req);
        yield conn.query(deleteCardNoSql);

        // 插入历史纪录表
        let logsql = "insert into sr_cust_card_history values (null,@cardid@,2,now(),@createrid@,@levelno@)";
        logsql = db.makeSQL(logsql, {cardid: dbResult.insertId, createrid: req.createrid,levelno:req.levelno});
        yield conn.query(logsql);

        // 提交
        yield conn.commit();

        // 返回结果，如果有老卡返回老卡carno
        let returnObject = {errcode: 0};
        if (oldCard) {
            returnObject.oldCardId = oldCard.id;
        }
        return returnObject;
    }catch (e) {
        log.error("新增会员卡失败:", e);
        if (isBeginTransaction && conn) {
            conn.rollback();
        }
        return { errcode: -1, errmsg: "数据库操作异常"};
    } finally {
        if (conn) {
            conn.release();
        }
    }
};

/**
 *  激活预生成会员卡
 * @param req 会员卡信息
 * @param callback
 */
exports.activateCustCard = function* (req) {
    // 先检查预生成会员卡
    let newCard;
    let cardNoSql = "select * from sr_cust_card where cardno = @cardno@ and statuscode = 3";
    cardNoSql = db.makeSQL(cardNoSql, req);
    let cardNoResult = yield rPool.query(cardNoSql);
    if (!cardNoResult || cardNoResult.length === 0) {
        return new app.err.SCError(5001, "预生成会员卡没有找到");
    } else {
        newCard = cardNoResult[0];
    }

    // 验证激活码
    if (newCard.activation_type === 1) {
        if (!req.activation_code || req.activation_code.toString() !== newCard.activation_code) {
            return new app.err.SCError(5002, "验证码不匹配");
        }
    }

    // 验证手机
    if (newCard.activation_type === 2) {
        let customer;
        let customerSql = "select * from sr_cust_customer where id = @custid@; ";
        customerSql = db.makeSQL(customerSql, req);
        let customerResult = yield rPool.query(customerSql);
        if (!customerResult || customerResult.length === 0) {
            return new app.err.SCError(5003, "找不到该会员");
        } else {
            customer = customerResult[0];
            if (!customer.mobile || customer.mobile !== newCard.matched_mobile ) {
                return new app.err.SCError(5004, "会员手机号码与预生成卡不匹配");
            }
        }
    }

    // 先找到老卡
    let oldCard;
    // 只可能有一张卡
    let oldCardSql = "select * from sr_cust_card where custid= @custid@ and is_latest=1; ";
    oldCardSql = db.makeSQL(oldCardSql, req);
    let oldCardResult = yield rPool.query(oldCardSql);
    if (oldCardResult && oldCardResult.length !=0) {
        if (oldCardResult.length > 1) {
            return new app.err.SCError(5004, "会员卡状态异常");
        } else {
            oldCard = oldCardResult[0];
            log.info("Got old card: " + JSON.stringify(oldCard));
        }
    }

    let conn = yield app.res.getDBWConnection('sr', "activateCustCard");
    let isBeginTransaction = false;
    try {
        yield conn.beginTransaction();
        isBeginTransaction = true;

        // 把当前的卡作废
        if (oldCard) {
            let updateSql = "update sr_cust_card set statuscode=2, is_latest=0, modifierid = @createrid@, modifiedtime = now() where id = @id@";
            updateSql = db.makeSQL(updateSql, {id: oldCard.id, createrid: req.createrid});
            yield conn.query(updateSql);

            // 插入历史纪录表
            let logsql = "insert into sr_cust_card_history select null,id,5,now(),@createrid@,levelno from sr_cust_card where id=@cardid@";
            logsql = db.makeSQL(logsql, {cardid: oldCard.id, createrid: req.createrid});
            yield conn.query(logsql);
        }

        // 绑定新卡
        let bindSql;
        if (newCard.valid_type_code === 0 ){
            bindSql = "update sr_cust_card set custid=@custid@,duetime=null,issuetime=now(),statuscode=1, is_latest = 1, modifierid = @createrid@, modifiedtime = now() where cardno=@cardno@";
        } else if (newCard.valid_type_code === 1) {
            bindSql = "update sr_cust_card set custid=@custid@,duetime=valid_endtime,issuetime=now(),statuscode=1, is_latest = 1, modifierid = @createrid@, modifiedtime = now() where cardno=@cardno@";
        } else if (newCard.valid_type_code === 2) {
            bindSql = "update sr_cust_card set custid=@custid@,duetime=date_add(now(),interval valid_days_after_activation day),issuetime=now(),statuscode=1, is_latest = 1, modifierid = @createrid@, modifiedtime = now() where cardno=@cardno@";
        }
        bindSql = db.makeSQL(bindSql, req);
        yield conn.query(bindSql);

        // 插入历史纪录表
        let logsql = "insert into sr_cust_card_history select null,@cardid@,2,now(),@createrid@,levelno from sr_cust_card where id=@cardid@ ";
        logsql = db.makeSQL(logsql, {cardid: newCard.id, createrid: req.createrid});
        yield conn.query(logsql);

        // 提交
        yield conn.commit();

        // 返回结果，如果有老卡返回老卡carno
        let returnObject = {errcode: 0};
        if (oldCard) {
            returnObject.oldCardId = oldCard.id;
        }
        return returnObject;
    }catch (e) {
        log.error("激活预生成会员卡失败:", e);
        if (isBeginTransaction && conn) {
            conn.rollback();
        }
        return { errcode: -1, errmsg: "数据库操作异常"};
    } finally {
        if (conn) {
            conn.release();
        }
    }
};

/**
 *  修改会员卡
 * @param req 会员卡信息
 */
exports.updateCustCard = function* (data) {
    let id = data.id
    let levelno = data.levelno;
    let duetime = data.duetime ? data.duetime + " 23:59:59" : null;
    let remark = data.remark;
    let modifierid = data.modifierid;

    // 待激活卡选项
    let valid_type_code = data.valid_type_code;
    let valid_endtime = data.valid_endtime ? data.valid_endtime + " 23:59:59" : null;
    let valid_days_after_activation = data.valid_days_after_activation;
    let activation_type = data.activation_type;
    let activation_code = data.activation_code;
    let matched_mobile = data.matched_mobile;

    // 先找到原来的卡信息
    let oldCardSql = "select * from sr_cust_card where id = @id@";
    oldCardSql = db.makeSQL(oldCardSql, {id: id});
    let oldCardResult = yield rPool.query(oldCardSql);
    let oldCard = oldCardResult[0];
    log.info("Got old card: "+ JSON.stringify(oldCard));

    // 疯狂验证
    if (oldCard.statuscode.toString() !== "3") {
        // duetime
        if (duetime) {
            if (new Date(duetime).getTime() <= new Date().getTime()) {
                return {errcode: 1, errmsg: "过期时间必须大于当前时间"};
            }
        }
    } else {
        // valid type code
        if (!valid_type_code) {
            return new app.err.SCError(1, "请选择卡到期类型");
        } else {
            valid_type_code = parseInt(valid_type_code);
            if (valid_type_code.toString() === "NaN" || valid_type_code < 0 || valid_type_code > 2){
                return {errcode: 1, errmsg: "卡到期类型无效"};
            }
        }

        // valid end time
        if (valid_type_code === 0) {
            valid_endtime = null;
        } else if (valid_type_code === 1) {
            if (!valid_endtime) {
                return new app.err.SCError(1, "过期时间为空");
            } else {
                try {
                    let endTime = new Date(valid_endtime);
                    if (endTime.getTime() <= new Date().getTime()) {
                        return new app.err.SCError(1, "过期时间已过期");
                    }
                } catch (e) {
                    return new app.err.SCError(1, "过期时间格式不正确");
                }
            }
        } else if (valid_type_code === 2) {
            valid_endtime = null;
        }

        // valid days
        if (valid_type_code === 0) {
            valid_days_after_activation = null;
        } else if (valid_type_code === 1) {
            valid_days_after_activation = null;
        } else if (valid_type_code === 2) {
            if (!valid_days_after_activation) {
                return new app.err.SCError(1, "自激活起有效天数为空");
            } else {
                valid_days_after_activation = parseInt(valid_days_after_activation);
                if (valid_days_after_activation.toString() === "NaN" || valid_days_after_activation > 36500) {
                    return new app.err.SCError(1, "自激活起有效天数不正确或者无效");
                }
            }
        }

        // activation type
        if (activation_type === null) {
            return new app.err.SCError(1, "激活类型为空");
        } else {
            activation_type = parseInt(activation_type);
            if (activation_type.toString() === "NaN" || activation_type < 0 || activation_type > 2) {
                return new app.err.SCError(1, "激活类型不正确");
            }
        }

        // matched mobile
        if (activation_type === 0) {
            matched_mobile = null;
        } else if (activation_type === 1) {
            matched_mobile = null;
        } else if (activation_type === 2) {
            if (!matched_mobile) {
                return new app.err.SCError(1, "手机号码为空");
            } else {
                matched_mobile = parseInt(matched_mobile);
                if (matched_mobile.toString() === "NaN") {
                    return new app.err.SCError(1, "手机号码非法字符");
                } else if (matched_mobile.toString().length !== 11) {
                    return new app.err.SCError(1, "手机号码位数不正确");
                }
            }
        }

        // activation code
        if (activation_type === 0) {
            activation_code = null;
        } else if (activation_type === 1) {
            if (!activation_code) {
                return new app.err.SCError(1, "激活码为空");
            } else {
                activation_code = activation_code.toUpperCase();
                if (!activation_code.match(/^[0-9A-Z]{6}$/g)) {
                    return new app.err.SCError(1, "激活码必须是六位数字字母组合");
                }
            }
        } else if (activation_type === 2) {
            activation_code = null;
        }
    }

    let valueObject = {};
    valueObject.id = id
    valueObject.levelno = levelno;
    valueObject.duetime = duetime;
    valueObject.remark = remark;
    valueObject.modifierid = modifierid;

    // 待激活卡选项
    valueObject.valid_type_code = valid_type_code;
    valueObject.valid_endtime = valid_endtime;
    valueObject.valid_days_after_activation = valid_days_after_activation;
    valueObject.activation_type = activation_type;
    valueObject.activation_code = activation_code;
    valueObject.matched_mobile = matched_mobile;

    let conn;
    let isBeginTransaction = false;
    try {
        conn = yield app.res.getDBWConnection("sr", "updateCustCard");
        yield conn.beginTransaction();
        isBeginTransaction = true;

        // 更新会员卡信息
        if (oldCard.statuscode.toString() !== "3") {
            let updateSql = "update sr_cust_card set " +
                " levelno=@levelno@," +
                " duetime=@duetime@," +
                " remark=@remark@," +
                " modifierid=@modifierid@," +
                " modifiedtime=now() " +
                " where id=@id@";
            updateSql = db.makeSQL(updateSql, valueObject);
            yield conn.query(updateSql);

            // 如果之前是禁用的，现在延长时间使之在有效期内了，那么就启用
            if (oldCard.statuscode.toString() === "0") {
                if (!valueObject.duetime || new Date(valueObject.duetime).getTime() > new Date().getTime()) {
                    let enableCardSql = "update sr_cust_card set statuscode=1, modifierid = @modifierid@, modifiedtime = now() where id=@id@";
                    enableCardSql = db.makeSQL(enableCardSql, valueObject);
                    yield conn.query(enableCardSql);
                    log.info("The card id is enabled: " + valueObject.id);
                }
            }
        }
        // 更新待激活卡
        else if (oldCard.statuscode.toString() === "3") {
            let updateSql = "update sr_cust_card " +
                " set levelno=@levelno@, remark=@remark@, modifiedtime=now() ,modifierid=@modifierid@ ";
            let setSql = "";

            // valid type code
            if (typeof valueObject.valid_type_code === "number"
                || (typeof valueObject.valid_type_code === "string" && valueObject.valid_type_code.length > 0)) {
                if (valueObject.valid_type_code.toString() === "0") {
                    setSql += " ,valid_type_code = @valid_type_code@, valid_endtime = null, valid_days_after_activation = null ";
                } else if (valueObject.valid_type_code.toString() === "1") {
                    setSql += " ,valid_type_code = @valid_type_code@, valid_endtime = @valid_endtime@, valid_days_after_activation = null ";
                } else if (valueObject.valid_type_code.toString() === "2") {
                    setSql += " ,valid_type_code = @valid_type_code@, valid_endtime = null , valid_days_after_activation = @valid_days_after_activation@ ";
                }
            }

            // activation type
            if (typeof valueObject.activation_type === "number"
                || (typeof valueObject.activation_type === "string" && valueObject.activation_type.length > 0)) {
                if (valueObject.activation_type.toString() === "0") {
                    setSql += " ,activation_type = @activation_type@, activation_code = null, matched_mobile = null ";
                } else if (valueObject.activation_type.toString() === "1") {
                    setSql += " ,activation_type = @activation_type@, activation_code = @activation_code@, matched_mobile = null ";
                } else if (valueObject.activation_type.toString() === "2") {
                    setSql += " ,activation_type = @activation_type@, activation_code = null , matched_mobile = @matched_mobile@ ";
                }
            }

            updateSql += setSql + " where id=@id@; ";
            updateSql = db.makeSQL(updateSql, valueObject);
            yield conn.query(updateSql);
        }

        // 插入会员卡历史记录表
        let logsql = "insert into sr_cust_card_history values select null,@id@,7,now(),@modifierid@,levelno from sr_cust_card where id=@id@ ";
        logsql = db.makeSQL(logsql, valueObject);
        yield conn.query(logsql);

        // 提交
        yield conn.commit();
        log.info("updateCustCard committed...");

        // 返回
        let returnObject = {errcode: 0};
        return returnObject;
    } catch (e) {
        log.error("更新会员卡失败:", e.message);
        if (conn && isBeginTransaction) {
            conn.rollback();
        }
        if (e instanceof app.err.SCError) {
            return e;
        } else {
            return {errcode: -1, errmsg: "未知错误"};
        }
    } finally {
        if (conn) {
            conn.release();
        }
    }
};

/**
 * 生成待激活会员卡
 *
 * @param req
 */
exports.generatePrebuildCard = function* (prebuildId, modifierId) {
    // 拿到prebuild记录
    var prebuildSql = "select * from sr_cust_card_perbuild where id =@id@; ";
    prebuildSql = db.makeSQL(prebuildSql, {id:prebuildId});
    let prebuildResult = yield rPool.query(prebuildSql);
    let prebuild;
    if (prebuildResult && prebuildResult.length > 0) {
        prebuild = prebuildResult[0];
        if (prebuild.operation_status !== 0) {
            return new SCError(2, "这条预生成卡表记录操作状态异常");
        }
    } else {
        return new SCError(1,"没有找到预生成卡表记录");
    }

    // 更新prebuild表原始记录，表示进行中
    var onGoingPrebuildSql = "update sr_cust_card_perbuild set operation_status = 1, modifiedtime = now(), modifierid = @modifierid@ where id =@id@; ";
    onGoingPrebuildSql = db.makeSQL(onGoingPrebuildSql, {id:prebuildId, modifierid: modifierId});
    yield wPool.query(onGoingPrebuildSql);

    // 记录成功和失败数量
    let successCount = 0;
    let failCount = 0;
    // 存放每一条生成记录的错误信息
    let errorMessages = [];

    // 确定一共要生成多少卡
    let totalCount = 0;
    if (prebuild.count_type ===1) {
        totalCount =1;
    } else if (prebuild.count_type === 2) {
        totalCount = prebuild.totalnum;
    }

    // 上一次生成的卡号中间字符,只是给批量生成的时候顺序产生用的
    let cardNoMiddleLast = prebuild.batch_start_cardno;

    // 根据要生成的总数开始循环生成会员卡
    for (let i = 0; i < totalCount; i++) {
        log.info("Start to generate card index: " + i);

        // 生成的每张卡号
        let cardNo;

        // 根据要求生成每一张卡
        let conn;
        let isBeginTransaction = false;
        try {
            conn = yield app.res.getDBWConnection("sr", "generatePrebuildCard");
            yield conn.beginTransaction();
            isBeginTransaction = true;

            // 卡号是否重复
            let isDuplicateCardNo = true;

            // 这个循环就是为了循环生成卡号直到不重复的出现
            let loopIndex = -1;
            do {
                loopIndex++;
                cardNo = "";

                // 避免出现的字符
                let symbols_to_avoid;
                if (prebuild.avoid_symbols) {
                    symbols_to_avoid = prebuild.avoid_symbols.split(",");
                }

                // 允许出现的字符组合
                let charSet;
                if (prebuild.cardno_char_type === 1) {
                    charSet = [].concat(CARDNO_CHARS_NUMBER);
                } else if (prebuild.cardno_char_type === 2) {
                    charSet = [].concat(CARDNO_CHARS_LETTER);
                } else if (prebuild.cardno_char_type === 3) {
                    charSet = [].concat(CARDNO_CHARS_NUMBER).concat(CARDNO_CHARS_LETTER);
                } else {
                    // Can not be here
                }

                // 生成卡号中间的组合
                let cardNoMiddle;
                // 单张会员卡
                if (prebuild.count_type === 1) {
                    // 自己录入
                    if (prebuild.single_cardno_type === 1) {
                        cardNoMiddle = prebuild.single_cardno;
                    }
                    // 随机生成
                    else if (prebuild.single_cardno_type === 2) {
                        cardNoMiddle = generateRandomChars(prebuild.length, charSet, symbols_to_avoid);
                    }
                }
                // 批量生成
                else if (prebuild.count_type === 2) {
                    // 顺序
                    if (prebuild.batch_cardno_type === 1) {
                        // 如果是第一张卡的第一次，那么就用起始号码，否则的话按顺序生成
                        if (i === 0 && loopIndex === 0) {
                            cardNoMiddle = cardNoMiddleLast;
                        } else {
                            cardNoMiddle = getNextWithLastChars(cardNoMiddleLast, charSet, symbols_to_avoid);
                        }
                        cardNoMiddleLast = cardNoMiddle;
                        if (cardNoMiddle.length !== prebuild.length) {
                            throw {
                                errcode: 3,
                                errmsg: "生成卡号" + cardNoMiddle + "位数不符合" + prebuild.length + "位"
                            };
                        }
                    }
                    // 随机生成
                    else if (prebuild.batch_cardno_type === 2) {
                        cardNoMiddle = generateRandomChars(prebuild.length, charSet, symbols_to_avoid);
                    }
                }
                log.info("CardNoMiddle generated: " + cardNoMiddle);

                // 添加卡号前后缀
                cardNo = cardNoMiddle;
                if (prebuild.prefix) {
                    cardNo = prebuild.prefix + cardNo;
                }
                if (prebuild.suffix) {
                    cardNo = cardNo + prebuild.suffix;
                }
                log.info("Cardno generated: "+cardNo);

                // 完整的卡号已经生成，看是否重复
                let findCardNoSql = "select * from sr_cust_card where cardno = @cardno@";
                findCardNoSql = db.makeSQL(findCardNoSql, {cardno: cardNo});
                let cardNoResult = yield rPool.query(findCardNoSql);
                if (cardNoResult && cardNoResult.length > 0) {
                    isDuplicateCardNo = true;
                } else {
                    isDuplicateCardNo = false;
                }
                log.info("isDuplicateCardNo: " + isDuplicateCardNo);

                // 判断是否需要继续生成
                if (!isDuplicateCardNo) {
                    break;
                } else {
                    // 如果只是一次生成并且自己录入的，那么报错
                    if (prebuild.count_type === 1 && prebuild.single_cardno_type === 1) {
                        throw {errcode: 4, errmsg: "此卡号已存在"};
                    }
                    // 其他情况，让系统继续生成直到不重复
                    else {
                        continue;
                    }
                }

            } while (true);

            // 是否需要激活码
            let activation_code = null;
            if (prebuild.activation_type === 1) {
                activation_code = generateRandomChars(6, [].concat(CARDNO_CHARS_LETTER).concat(CARDNO_CHARS_NUMBER));
            }

            // 是否用手机激活
            let matched_mobile = null;
            if (prebuild.activation_type === 2) {
                matched_mobile = prebuild.matched_mobile;
            }

            // 插入sr cust card表
            let insertSql = "insert into sr_cust_card (perbuild_id, cardno,levelno,statuscode,createrid,createdtime,is_latest,valid_type_code, valid_endtime, valid_days_after_activation, activation_type, matched_mobile,activation_code) " +
                "values(@perbuild_id@, @cardno@,@levelno@,3,@createrid@,now(),0,@valid_type_code@, @valid_endtime@, @valid_days_after_activation@, @activation_type@,@matched_mobile@, @activation_code@)";
            insertSql = db.makeSQL(insertSql,
                {
                    perbuild_id: prebuildId,
                    cardno: cardNo,
                    levelno: prebuild.levelno,
                    createrid: modifierId,
                    valid_type_code: prebuild.valid_type_code,
                    valid_endtime : prebuild.valid_endtime,
                    valid_days_after_activation: prebuild.valid_days,
                    activation_type: prebuild.activation_type,
                    matched_mobile: matched_mobile,
                    activation_code: activation_code
                });
            yield conn.query(insertSql);

            // 把卡号从卡号库存中去掉
            let deleteCardNoSql = "delete from sr_cust_prebuilt_cardno where cardno=@cardno@";
            deleteCardNoSql = db.makeSQL(deleteCardNoSql, {cardno: cardNo});
            yield conn.query(deleteCardNoSql);

            // 提交
            yield conn.commit();

            // 成功累加
            successCount++;
            log.info("Card generation success for index: " + i);
        } catch (e) {
            log.info("Card generation fail for index: " + i);
            let errorMessage;

            if (e.errmsg) {
                errorMessage = e.errmsg;
            } else {
                errorMessage = e.message;
            }
            log.info("Card generation fail message: " + errorMessage);

            if (conn && isBeginTransaction) {
                conn.rollback();
            }

            // 放入错误信息数组
            errorMessages.push({index:(i + 1), errmsg:errorMessage});

            // 失败累加
            failCount++;
            log.info("Card generation fail for index: " + i + ", message: " + errorMessage);
        } finally {
            if (conn) {
                conn.release();
            }
        }
    }
    // 操作结果统计
    let operation_result = {
        successCount:successCount,
        failCount:failCount,
        errorMessages: errorMessages
    };

    // 更新prebuild表记录结果
    let endPrebuildSql = "update sr_cust_card_perbuild set operation_result = @operation_result@,operation_status = 2, modifiedtime = now(), modifierid = @modifierid@ where id =@id@; ";
    endPrebuildSql = db.makeSQL(endPrebuildSql, {operation_result: JSON.stringify(operation_result), id:prebuildId, modifierid: modifierId});
    yield wPool.query(endPrebuildSql);

    // 返回结果
    return {errcode: 0, errmsg: "", msgbody: "成功数量: " + successCount + ", 失败数量: " + failCount};
}

/**
 * 按顺序获取下一个字符串
 *
 * 这里有一个算法，需要注意
 *
 * 比如传入一个字符串'ADE'，它所允许的字符串集合是['A','C','D','E']，注意没有'B'，那么这个字符串按顺序的下一个应该是'AEA',再下一个是'AEC'，
 *
 * @param chars 传入的字符串'ADE'
 * @param charSet 字符串允许的字符集合['A','C','D','E'], 不能超过36个字符
 * @param avoid_symbols 避免出现的字符
 *
 */
function getNextWithLastChars(chars, charSet, avoid_symbols) {
    let lastChars = chars;
    let charSetStandard = [].concat(CARDNO_CHARS_NUMBER).concat(CARDNO_CHARS_LETTER).slice(0, charSet.length);

    do {
        lastChars = charAtIndexPlusOne(lastChars, lastChars.length -1, charSet);
        if (!findCharsInArray(lastChars, avoid_symbols)) {
            break;
        }

    } while (true);

    return lastChars;
}

/**
 * 在字符串里面找到字符数组里面的字符，找到返回true，否则false
 * @param chars
 * @param charArray
 * @returns {boolean}
 */
function findCharsInArray(chars, charArray) {
    let isFound = false;
    if (charArray && charArray.length > 0) {
        let charsNow = chars.split("");
        for (let outter  = 0; outter < charsNow.length; outter++) {
            for (let inner = 0; inner < charArray.length; inner++) {
                if (charsNow[outter] === charArray[inner]) {
                    isFound = true;
                    break;
                }
            }
            if (isFound) {
                break;
            }
        }
    }

    return isFound;
}

/**
 * 递归按顺序获得接下来的一个字符串
 *
 * AAA -> AAB
 *
 * AZZ -> BAA
 *
 * ZZZ -> AAAA
 *
 * 999 -> 0000
 *
 * @param aString 传入的字符串
 * @param index 第一个开始的位数，一般是最后一位
 * @param charSet 永续的字符串结合
 * @returns {*}
 */
function charAtIndexPlusOne(aString, index, charSet) {
    if (index < 0) {
        return charSet[0] + aString;
    } else {
        let charsArray = aString.split("");
        let theCharAtIndex = charsArray[index];
        let oldIndex = charSet.indexOf(theCharAtIndex);
        let newIndex = oldIndex + 1;
        let needGoForward = false;
        if (newIndex >= charSet.length) {
            newIndex = 0;
            needGoForward = true;
        }
        charsArray[index] = charSet[newIndex];
        let newString = charsArray.join("");
        if (needGoForward) {
            return charAtIndexPlusOne(newString, index - 1, charSet);
        } else {
            return newString;
        }
    }
}


/**
 * 将传入的字符串中的每个字符替换为对应的新的字符集合
 *
 * @param charsOld
 * @param charSetOld
 * @param charSetNew
 * @returns {string}
 */
function getMatchedChars(charsOld, charSetOld, charSetNew){
    if (!charsOld) {
        return "";
    }else {
        let returnValue = "";

        // 分解字符串为字符数组
        let charsOldArray = charsOld.split("");

        // 给每个字符找到对应的新字符
        for (let index in charsOldArray) {
            // 旧字符
            let char = charsOldArray[index];

            // 新字符
            let newChar = charSetNew[charSetOld.indexOf(char)];

            returnValue += newChar;
        }

        return returnValue;
    }
}


/**
 * 随机组合出字符串
 * @param n 字符串有几位
 * @param avoid_symbols 避免出现的字符数组
 * @returns {string}
 */
function generateRandomChars(n, char_set, avoid_symbols) {
    let res = "";
    for(let i = 0; i < n ; i ++) {
        let char;
        do {
            // 随机一个字符
            let id = Math.floor(Math.random() * char_set.length);
            char = char_set[id];

            // 是否在避免出现字符数组里面
            if (avoid_symbols && avoid_symbols.length > 0) {
                let isFound = false;
                for (let index in avoid_symbols) {
                    if (char === avoid_symbols[index]){
                        isFound = true;
                    }
                }
                if (!isFound) {
                    break;
                }
            } else {
                break;
            }
        } while (true);

        res += char;
    }
    return res;
}

/**
 * 添加到prebuild
 * @param data
 */
exports.addPrebuild = function*(data, operatorId) {
    // 获得参数
    let length = data.length;
    let cardno_char_type = data.cardno_char_type;
    let prefix = data.prefix;
    let suffix = data.suffix;
    let totalnum = data.totalnum;
    let levelno = data.levelno;
    let activation_type = data.activation_type;
    let matched_mobile = data.matched_mobile;
    let batch_start_cardno = data.batch_start_cardno;
    let batch_cardno_type = data.batch_cardno_type;
    let single_cardno = data.single_cardno;
    let single_cardno_type = data.single_cardno_type;
    let count_type = data.count_type;
    let avoid_symbols = data.avoid_symbols;
    let valid_type_code = data.valid_type_code;
    let valid_endtime = data.valid_endtime;
    let valid_days = data.valid_days;

    // 疯狂验证，注意验证顺序，有些字段必须先验证，因为前后有依赖关系，不然后面的字段没法判断 A tough but right decision!
    // count type
    if (!count_type) {
        return new app.err.SCError(1, "请选择单张还是批量");
    } else {
        count_type = parseInt(count_type);
        if (count_type === NaN) {
            return new app.err.SCError(1, "请选择单张或批量");
        } else if (count_type < 1 || count_type > 2){
            return new app.err.SCError(1, "请选择单张或批量");
        }
    }

    // single cardno type
    if (count_type === 1) {
        if (!single_cardno_type) {
            return new app.err.SCError(1, "请选择自己输入或随机生成");
        } else {
            single_cardno_type = parseInt(single_cardno_type);
            if (single_cardno_type.toString() === "NaN") {
                return new app.err.SCError(1, "请选择自己输入或随机生成");
            } else if (single_cardno_type < 1 || single_cardno_type > 2){
                return new app.err.SCError(1, "请选择自己输入或随机生成");
            }
        }
    }

    // single cardno
    if (single_cardno_type === 1) {
        if (single_cardno) {
            if (!single_cardno.match(/^[0-9a-zA-Z]{8,20}$/g)) {
                return new app.err.SCError(1, "卡号必须是数字和字母组合，最少8位且不超过20位");
            } else {
                single_cardno = single_cardno.toUpperCase();
            }
        } else {
            return new app.err.SCError(1, "请手动输入卡号");
        }
    }

    // totalnum
    if (count_type ===1) {
        totalnum =1;
    } else if (count_type === 2) {
        if (!totalnum) {
            return new app.err.SCError(1, "请输入会员卡张数");
        }else {
            totalnum = parseInt(totalnum);
            if (totalnum.toString() === "NaN" || totalnum < 0 || totalnum > 1000) {
                return new app.err.SCError(1, "会员卡张数最多1000张");
            }
        }
    }

    // batch cardno type
    if (count_type === 2) {
        if (!batch_cardno_type) {
            return new app.err.SCError(1, "请选择随机生成或顺序生成");
        } else {
            batch_cardno_type = parseInt(batch_cardno_type);
            if (batch_cardno_type.toString() === "NaN" || batch_cardno_type < 1 || batch_cardno_type > 2){
                return new app.err.SCError(1, "请选择随机生成或顺序生成");
            }
        }
    }

    // batch start cardno
    if (count_type === 2 && batch_cardno_type === 1) {
        if (batch_start_cardno) {
            if (!batch_start_cardno.match(/^[0-9a-zA-Z]{8,20}$/g)) {
                return new app.err.SCError(1, "起始卡号必须是数字和字母组合，最少8位且不超过20位");
            } else {
                batch_start_cardno = batch_start_cardno.toUpperCase();
            }
        } else {
            return new app.err.SCError(1, "请输入起始卡号");
        }
    }

    // prefix
    if (prefix) {
        if (!prefix.match(/^[0-9a-zA-Z]{0,10}$/g)) {
            return new app.err.SCError(1, "首标识符必须是数字和字母组合，且不超过10位");
        } else {
            prefix = prefix.toUpperCase()
        }
    }

    // suffix
    if (suffix) {
        if (!suffix.match(/^[0-9a-zA-Z]{0,10}$/g)) {
            return new app.err.SCError(1, "尾标识符必须是数字和字母组合，且不超过10位");
        } else {
            suffix = suffix.toUpperCase();
        }
    }

    // length
    if (count_type ===1) {
        if (single_cardno_type === 1) {
            length = single_cardno.length;
        } else if (single_cardno_type === 2) {
            if (!length) {
                length = 8;
            } else {
                length = parseInt(length);
                if (length.toString() === "NaN" || length < 8 || length > 20) {
                    return new app.err.SCError(1, "卡号长度只能在8-20位之间");
                }
            }
        }
    } else if (count_type === 2) {
        if (batch_cardno_type ===1) {
            if (!length) {
                length = batch_start_cardno.length;
            } else {
                length = parseInt(length);
                if (length.toString() === "NaN" || length < 8 || length > 20 || length !== batch_start_cardno.length){
                    return new app.err.SCError(1, "卡号长度只能在8-20位之间，并且和起始卡号长度一致");
                }
            }
        } else if (batch_cardno_type === 2) {
            if (!length) {
                length = 8;
            } else {
                length = parseInt(length);
                if (length.toString() === "NaN" || length < 8 || length > 20){
                    return new app.err.SCError(1, "卡号长度只能在8-20位之间");
                }
            }
        }
    }

    // cardno char type
    if ((count_type ===1 && single_cardno_type === 2) || count_type === 2) {
        if (!cardno_char_type) {
            return new app.err.SCError(1, "请选择卡号字符类型");
        }else {
            cardno_char_type = parseInt(cardno_char_type);
            if (cardno_char_type.toString() === "NaN" || cardno_char_type < 1 || cardno_char_type > 3) {
                return new app.err.SCError(1, "卡号字符类型无效");
            } else {
                // 起始卡号如果存在必须验证
                if (count_type === 2 && batch_cardno_type === 1) {
                    // 数字
                    if (cardno_char_type === 1) {
                        if (!batch_start_cardno.match(/^[0-9]{8,20}$/g)) {
                            return new app.err.SCError(1, "起始卡号和卡号字符类型不符合");
                        }
                    }
                    // 字母
                    else if (cardno_char_type === 2) {
                        if (!batch_start_cardno.match(/^[a-zA-Z]{8,20}$/g)) {
                            return new app.err.SCError(1, "起始卡号和卡号字符类型不符合");
                        }
                    }
                    // 数字 + 字母
                    else if (cardno_char_type === 3) {
                        if (!batch_start_cardno.match(/^[0-9a-zA-Z]{8,20}$/g)) {
                            return new app.err.SCError(1, "起始卡号和卡号字符类型不符合");
                        }
                    }
                }
            }
        }
    }

     // avoid symbols
    if ((count_type ===1 && single_cardno_type === 2) || count_type === 2) {
        if (avoid_symbols) {
            if (!avoid_symbols.match(/^[0-9a-zA-Z](,[0-9a-zA-Z]){0,2}$/g)) {
                return new app.err.SCError(1, "避免出现的数字或字母错误");
            } else {
                avoid_symbols = avoid_symbols.toUpperCase();

                // 如果给出顺序生成卡号的起始卡号 必须验证
                if (count_type === 2 && batch_cardno_type === 1) {
                    if (findCharsInArray(batch_start_cardno, avoid_symbols.split(","))) {
                        return new app.err.SCError(1, "起始卡号含有避免出现的字符");
                    }
                }
            }
        }
    }

    // levelno
    if (!levelno) {
        return new app.err.SCError(1, "请选择会员卡等级");
    } else {
        levelno = parseInt(levelno);
        if (levelno.toString() === "NaN" || levelno < 1 || levelno > 3){
            return new app.err.SCError(1, "会员卡等级无效");
        }
    }

    // valid type code
    if (!valid_type_code) {
        return new app.err.SCError(1, "请选择卡到期类型");
    } else {
        valid_type_code = parseInt(valid_type_code);
        if (valid_type_code.toString() === "NaN" || valid_type_code < 0 || valid_type_code > 2){
            return new app.err.SCError(1, "卡到期类型无效");
        }
    }

    // valid end time
    if (valid_type_code === 0) {
        valid_endtime = null;
    } else if (valid_type_code === 1) {
        if (!valid_endtime) {
            return new app.err.SCError(1, "过期时间为空");
        } else {
            try {
                let endTime = new Date(valid_endtime);
                if (endTime.getTime() <= new Date().getTime()) {
                    return new app.err.SCError(1, "过期时间已过期");
                }
            } catch (e) {
                return new app.err.SCError(1, "过期时间格式不正确");
            }
        }
    } else if (valid_type_code === 2) {
        valid_endtime = null;
    }

    // valid days
    if (valid_type_code === 0) {
        valid_days = null;
    } else if (valid_type_code === 1) {
        valid_days = null;
    } else if (valid_type_code === 2) {
        if (!valid_days) {
            return new app.err.SCError(1, "自激活起有效天数为空");
        } else {
            valid_days = parseInt(valid_days);
            if (valid_days.toString() === "NaN" || valid_days > 36500) {
                return new app.err.SCError(1, "自激活起有效天数不正确或者无效");
            }
        }
    }

    // activation type
    if (activation_type === null) {
        return new app.err.SCError(1, "激活类型为空");
    } else {
        activation_type = parseInt(activation_type);
        if (activation_type.toString() === "NaN" || activation_type < 0 || activation_type > 2) {
            return new app.err.SCError(1, "激活类型不正确");
        }
    }

    // matched mobile
    if (activation_type === 0) {
        matched_mobile = null;
    } else if (activation_type === 1) {
        matched_mobile = null;
    } else if (activation_type === 2) {
        if (matched_mobile === null) {
            return new app.err.SCError(1, "手机号码为空");
        } else {
            matched_mobile = parseInt(matched_mobile);
            if (matched_mobile.toString() === "NaN") {
                return new app.err.SCError(1, "手机号码非法字符");
            } else if (matched_mobile.toString().length !== 11) {
                return new app.err.SCError(1, "手机号码位数不正确");
            }
        }
    }

    let valueObject = {};
    valueObject.length = length;
    valueObject.cardno_char_type = cardno_char_type;
    valueObject.prefix = prefix;
    valueObject.suffix = suffix;
    valueObject.totalnum = totalnum;
    valueObject.levelno = levelno;
    valueObject.activation_type = activation_type;
    valueObject.matched_mobile = matched_mobile;
    valueObject.batch_start_cardno = batch_start_cardno;
    valueObject.batch_cardno_type = batch_cardno_type;
    valueObject.single_cardno = single_cardno;
    valueObject.single_cardno_type = single_cardno_type;
    valueObject.count_type = count_type;
    valueObject.avoid_symbols = avoid_symbols;
    valueObject.valid_type_code = valid_type_code;
    valueObject.valid_endtime = valid_endtime;
    valueObject.valid_days = valid_days;
    valueObject.createrid = operatorId;

    var sql = "insert into sr_cust_card_perbuild " +
        " (`length`,`cardno_char_type`,`prefix`,`suffix`,`totalnum`,`levelno`,`activation_type`,`matched_mobile`, `batch_start_cardno`,`batch_cardno_type`, " +
        " `single_cardno`,`single_cardno_type`,`count_type`,`avoid_symbols`,`valid_type_code`,`valid_endtime`,`valid_days`, " +
        " `createrid`,`createdtime`,`operation_result`,`operation_status`,`modifierid`,`modifiedtime`) " +
        " values " +
        " (@length@,@cardno_char_type@,@prefix@,@suffix@,@totalnum@,@levelno@,@activation_type@,@matched_mobile@, @batch_start_cardno@,@batch_cardno_type@, " +
        " @single_cardno@,@single_cardno_type@,@count_type@,@avoid_symbols@,@valid_type_code@,@valid_endtime@,@valid_days@, " +
        " @createrid@,now(),'',0,'',null) ";
    sql = db.makeSQL(sql, valueObject);
    let result = yield wPool.query(sql);
    log.info("insert prebuild result: " + JSON.stringify(result));

    return {errcode: 0, id: result.insertId};
}


exports.getCustAction = function* (condition) {
    var sql = "select concat('customeraction_',typecode) as typecode,remark,DATE_FORMAT(actiontime,'%Y-%m-%d') as date, DATE_FORMAT(actiontime,'%H:%i') as time , totalnum as count  from  sr_cust_action where date_add(actiontime, INTERVAL 7 DAY) >= now() and custid=@custid@ order by actiontime desc";
    sql = db.makeSQL(sql, condition);
    let result = yield rPool.query(sql);
    if (result) {
        var newresult = [];
        var times = [];
        var date = '';
        result.forEach(function (item, index) {
            if (date != item.date) {
                if (date !== '') {
                    newresult.push({ datetime: date, times: times });
                }
                date = item.date;
                times = [];
            }
            times.push({ time: item.time, scoresource: item.typecode, score: item.remark, count: item.count });
        });
        newresult.push({ datetime: date, times: times });
        return { data: newresult };
    }
    else {
        return null;
    }
};

exports.getExportList = function* (condition, page) {
    var _sortAndPage = comm.sortAndPage(null, page);
    var sql = "select *,concat('export_status_',statuscode) as statusvalue from  sr_sys_export where moduleid=@moduleid@ and createdtime>=DATE_SUB(now(),INTERVAL 7 DAY) order by createdtime desc " + _sortAndPage.page;
    sql = db.makeSQL(sql, condition);
    return yield rPool.query(sql);
};

exports.getExportCount = function* (condition) {
    var sql = "select count(1) as totalcount from  sr_sys_export where moduleid=@moduleid@ and createdtime>=DATE_SUB(now(),INTERVAL 7 DAY)";
    sql = db.makeSQL(sql, condition);
    return yield rPool.query(sql);
};

exports.checkIsCustomer = function* (customerid) {
    var sql = "select count(1) as count from sr_cust_type where typecode=2 and isdelete=0 and custid=@custid@";
    sql = db.makeSQL(sql, { custid: customerid.customerid });
    let dbResult = yield rPool.query(sql);
    return dbResult;
};

exports.getCustomerCouponList = function* (data) {
    let sql = "select count(1) as count,date_format(send_time,'%Y-%m') as gettime from sr_coupon_instance where cust_id=@custid@ and send_time>date_sub(now(),interval 6 month ) group by date_format(send_time,'%Y-%m');";
    sql += "select count(1) as count ,date_format(used_time,'%Y-%m') as usedtime from sr_coupon_instance where cust_id=@custid@ and used_time>date_sub(now(),interval 6 month ) group by date_format(used_time,'%Y-%m');";
    sql = db.makeSQL(sql, data);
    let dbResult = yield rPool.query(sql);
    return dbResult;
};

exports.updateWechatCard = function* (data) {
    let sql = "";
    if (data.isenable == 'true') {
        data.isenable = 1;
    }
    else {
        data.isenable = 0;
    }
    if (!!!data.id) {
        sql = "insert into sr_cust_wechatcard_template (accountid,cardname,logo,remind,phone,remark,statuscode,createdtime,isenable,brand_name) values(@accountid@,@cardname@,@logo@,@remind@,@phone@,@remark@,1,now(),@isenable@,@brand_name@)";
    } else {
        sql = "update sr_cust_wechatcard_template set cardname=@cardname@,logo=@logo@,remind=@remind@,phone=@phone@,remark=@remark@,statuscode=1,isenable=@isenable@,brand_name=@brand_name@ where id=@id@";
    }
    sql = db.makeSQL(sql, data);
    let dbResult = yield wPool.query(sql);
    return dbResult;
};

exports.updateWechatCardStatus = function* (data) {
    let sql = "update sr_cust_wechatcard_template set statuscode=@statuscode@ ,templateid=@templateid@ where id=@id@";
    sql = db.makeSQL(sql, data);
    let dbResult = yield wPool.query(sql);
    return dbResult;
};

exports.queryWechatCardByAccountId = function* (data) {
    let sql = "select * from  sr_cust_wechatcard_template where accountid=@accountid@";
    sql = db.makeSQL(sql, data);
    let dbResult = yield rPool.query(sql);
    return dbResult;
};

exports.getAccountidAndNoByCardid = function* (data) {
    let sql = "select a.*,b.accountid from sr_cust_card a left join sr_cust_wechatcard_template b on a.card_temp_id=b.templateid where a.id=@id@";
    sql = db.makeSQL(sql, data);
    let dbResult = yield rPool.query(sql);
    return dbResult;
};

exports.rewardLog = function* (msg) {
    let sql = "insert into sr_rewards_log(third_id,cust_id,source_type,source_id,reward_type,status,reward_time,err_code,err_msg)" +
        " value (@thirdid@,@custid@,@sendchannelcode@,null,@reward_type@,@status@,now(),@err_code@,@err_msg@);";
    sql = db.makeSQL(sql, msg);
    return yield wPool.query(sql);
};

