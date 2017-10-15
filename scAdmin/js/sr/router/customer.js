/**
 * Created by Administrator on 2015/11/23.
 */
'use strict'
var sc = require('smartacjs'),
    Promise = sc.Promise,
    app = sc.app(),
    Rabbit = sc.RabbitMQ();
var co = require('co');
var path = require('path');
var comm = require('../../common/comm.js');
var config = app.conf;
var custDAO = require('../dao/customerDAO.js');
var exportDAO = require('../dao/common.js')
var fs = require('fs');
// var conn = app.res.getMQConnectionSync();
// conn.declareExchange("amq.direct", "direct");
// var rpcClient = Rabbit.createRPCClient(conn, "sr.customer.rpc");
// var rpcCouponClient = Rabbit.createRPCClient(conn, "sr.customer.coupon.rpc");
// var rpcCFClient = Rabbit.createRPCClient(conn, "cf.wechat.rpc");
// var pbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer.proto.js")), "sr.customer", "Message");
// var pbCouponEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sr_customer_coupon.proto.js")), "sr.customer.coupon", "Message");
// var pbCFEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wechat.proto.js")), "cf.wechat", "Message");
let log = sc.createNamedLog('scAdmin', 'customer');

exports.autoroute = {
    post: {
        // 查询客户信息
        '/sr/customer/customerlist/query': processMessage, //会员查询
        '/sr/customer/customerlist/add': processMessage, //新增会员
        '/sr/customer/customerlist/edit': processMessage,//更新会员
        '/sr/customer/customerlist/card/list': processMessage, //获取会员会员卡
        '/sr/customer/srcardlist/list': processMessage,   //所有会员卡列表
        '/sr/customer/srcardlist/frozen/edit': processMessage, //会员卡冻结
        '/sr/customer/srcardlist/enable/edit': processMessage, //会员卡启用
        '/sr/customer/srcardlist/status/edit': processMessage, //会员卡状态修改
        '/sr/customer/srcardlist/statusbatch/edit': processMessage, //会员卡状态批量修改
        '/sr/customer/srcardlist/prebuild/add': processMessage, //会员卡通过prebuild批量添加
        '/sr/customer/srcardlist/prebuild/list': processMessage, //会员卡通过prebuild批量添加的历史纪录
        '/sr/customer/customerlist/list': processMessage,               //会员列表
        '/sr/customer/customerlist/import/list': processMessage,     //系统导入历史
        '/sr/customer/cardlist/import/list': processMessage,     //会员卡导入历史
        '/sr/customer/customerlist/import/add': processMessage,     //系统导入历史
        '/sr/customer/srcardlist/import/add': processMessage,     //会员卡导入
        '/sr/customer/customerlist/status/edit': processMessage,   //更新会员状态
        '/sr/customer/customerlist/card/add': processMessage,         //新增会员卡
        '/sr/customer/customerlist/cardactivation/add': processMessage,   //激活会员卡
        '/sr/customer/customerlist/card/edit': processMessage,     //修改会员卡
        '/sr/customer/customerlist/card/query': processMessage, //会员卡详情
        '/sr/customer/customerlist/action/list': processMessage, //会员活动历史
        '/sr/customer/customerlist/export/list': processMessage, //导出历史
        '/sr/customer/customerlist/check/query': processMessage, //判断是否是会员
        '/sr/customer/card/report/query': processMessage, //会员卡明细报表
        '/sr/customer/card/report/list': processMessage, //会员卡开卡报表
        '/sr/customer/customerlist/columnsetting/list': processMessage, //读取会员列配置文件
        '/sr/customer/customerlist/columnsetting/edit': processMessage, //配置会员列配置文件
        '/sr/customer/customerlist/MobileOrCard/query': processMessage, //通过会员卡号或手机号查询会员信息  add  by snow on 2016/3/29
        '/sr/customer/customerlist/coupon/add': processMessage,//添加用户的优惠券
        '/sr/customer/customerlist/coupon/list': processMessage, //会员详细页,礼券报表
        '/sr/customer/srcardlist/wechatcard/edit': processMessage,//微信会员卡模版编辑
        '/sr/customer/srcardlist/wechatcard/query': processMessage, //微信会员卡模版查询
        '/sr/customer/srcardlist/wechatcard/status/query': processMessage, //微信会员卡模版查询
        '/sr/customer/customerlist/chat/list': processMessage, //多客服消息查询
        '/sr/customer/customerlist/release/edit': processMessage, //会员解绑
    }
};


var msgProcesser = {
    // 查询客户信息
    '/sr/customer/customerlist/query': CustSearch, //会员查询
    '/sr/customer/customerlist/add': CustAdd, //新增会员
    '/sr/customer/customerlist/edit': CustUpdate,//更新会员
    '/sr/customer/customerlist/card/list': GetCustCard, //获取会员会员卡
    '/sr/customer/srcardlist/list': GetCardList,   //所有会员卡列表
    '/sr/customer/srcardlist/frozen/edit': FrozenCustCard, //批量会员卡冻结
    '/sr/customer/srcardlist/enable/edit': EnbaleCustCard, //批量会员卡启用
    '/sr/customer/srcardlist/status/edit': EditCardStatus, //会员卡状态修改
    '/sr/customer/srcardlist/statusbatch/edit': EditCardStatusBatch, //会员卡状态批量修改
    '/sr/customer/srcardlist/prebuild/add': addPrebuildCards, //会员卡通过prebuild批量添加
    '/sr/customer/srcardlist/prebuild/list': getPrebuildCardsHistory, //会员卡通过prebuild批量添加的历史纪录
    '/sr/customer/customerlist/list': getCustList,               //会员列表
    '/sr/customer/customerlist/import/list': getCustImportHistoryList,     //系统导入历史
    '/sr/customer/cardlist/import/list': getCustCardImportHistoryList,     //会员卡导入历史
    '/sr/customer/customerlist/import/add': addCustImport,     //系统导入历史
    '/sr/customer/srcardlist/import/add': addCustCardImport,     //会员卡导入
    '/sr/customer/customerlist/status/edit': updateCustStatus,   //更新会员状态
    '/sr/customer/customerlist/card/add': addCustCard,         //新增会员卡
    '/sr/customer/customerlist/cardactivation/add': activateCustCard,   //激活会员卡
    '/sr/customer/customerlist/card/edit': updateCustCard,     //修改会员卡
    '/sr/customer/customerlist/card/query': GetCardById, //会员卡详情
    '/sr/customer/customerlist/action/list': getCustAction, //会员活动历史
    '/sr/customer/customerlist/export/list': getExportList, //导出历史
    '/sr/customer/customerlist/check/query': checkIsCustomer, //判断是否是会员
    '/sr/customer/customerlist/columnsetting/list': getColumnSetting, //读取会员列配置文件
    '/sr/customer/customerlist/columnsetting/edit': setColumnSetting, //配置会员列配置文件
    '/sr/customer/customerlist/MobileOrCard/query': custSearchByCardnoOrNumber, //通过会员卡号或手机号查询会员信息  add  by snow on 2016/3/29
    '/sr/customer/customerlist/coupon/add': addCustCoupon,//添加用户的优惠券
    '/sr/customer/customerlist/coupon/list': getCustomerCouponList,//最近7天会员礼券情况
    '/sr/customer/srcardlist/wechatcard/edit': updateWechatCard,//微信会员卡模版编辑
    '/sr/customer/srcardlist/wechatcard/query': querywechatcard, //微信会员卡模版查询
    '/sr/customer/srcardlist/wechatcard/status/query': querywechatcardstatus, //微信会员卡模版查询
    '/sr/customer/customerlist/chat/list': GetChatList, //多客服消息查询
    '/sr/customer/customerlist/release/edit': releaseCustomer //会员微信解绑
};



function processMessage(req, res) {
    co(function* () {
        try {
            yield* msgProcesser[req.url](req, res);
        }
        catch (e) {
            var resJson = {};
            if (e instanceof app.err.SCError) {
                // 逻辑错误
                console.error("%s error!%s", req.url, e);
                resJson = comm.response(e.errcode, e.errmsg);
            }
            else {
                // 发送系统错误
                console.error("%s crash!err=%s", req.url, e);
                resJson = comm.response(-1, e);
            }
            res.jsonp(resJson);
        };
    });
}

function* getColumnSetting(req, res) {
    var resJson = {};
    if (req.body.type == 1) {
        fs.readFile('./js/sr/dao/customer.json', 'utf8', function (err, data) {
            if (err) throw err;
            resJson = comm.response(0, JSON.parse(data));
            res.jsonp(resJson);
        });
    }
    else {
        fs.readFile('./js/sr/dao/customerexport.json', 'utf8', function (err, data) {
            if (err) throw err;
            resJson = comm.response(0, JSON.parse(data));
            res.jsonp(resJson);
        });
    }


}

function* setColumnSetting(req, res) {
    var resJson = {};
    var result = {};
    if (req.body.type == 1) {
        fs.writeFile('./js/sr/dao/customer.json', JSON.stringify(req.body.data).replace(/"true"/g, "true").replace(/"false"/g, "false"), { encoding: 'utf-8' }, function (err) {
            console.log(err);
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        });
    }
    else {
        fs.writeFile('./js/sr/dao/customerexport.json', JSON.stringify(req.body.data).replace(/"true"/g, "true").replace(/"false"/g, "false"), { encoding: 'utf-8' }, function (err) {
            console.log(err);
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        });
    }

}

function* getCustomerCouponList(req, res) {
    let data = { custid: req.body.custid };
    let result = yield* custDAO.getCustomerCouponList(data)
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

/*
 * 通过会员卡号或手机号查询会员信息
 * @param req
 * @param res
 * add  by snow on 2016/3/29
 * */
function* custSearchByCardnoOrNumber(req, res) {
    let result = yield* custDAO.custSearchByCardnoOrNumber(req.body);
    let resJson = {};
    if (result && result.length > 0) {
        resJson = comm.response(0, result);
    }
    else {
        resJson = {
            errmsg: '找不到会员信息'
        };
    }
    res.jsonp(resJson);
}


function* GetCardById(req, res) {
    log.info("in GetCardById...");
    let result = yield* custDAO.getCardById(req.body);
    var resJson = {};
    if (result && result.length > 0) {
        resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        console.error("找不到会员卡:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("找不到会员卡");
    }

}

function* checkIsCustomer(req, res) {
    let result = yield* custDAO.checkIsCustomer(req.body);
    var resJson = {};
    if (result && result.length > 0) {
        resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }

}

function* CustSearch(req, res) {
    let result = yield* custDAO.custSearch(req.body);
    if (result && result.length > 0) {
        let resJson = comm.response(0, result);
        res.jsonp(resJson)
    }
    else {
        console.error("找不到客户:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("找不到客户:" + JSON.stringify(req.body))
    }
}

function* addCustImport(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    var obj = {
        "header": {
            "sender": "1",
            "sender_type": "sc_admin"
        },
        "req_import_customer": {
            "file": req.body.path,
            "staff_id": req.userinfo.data.innerid,
            "original_file_name": req.body.name
        }
    };
    let postData = pbEncoder.encode(obj);
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pbEncoder.decode(result.content);
    var resJson = {};
    if (content && content.res_import_customer && content.res_import_customer.taskid) {
        resJson = comm.response(0, result);
    }
    else {
        resJson = comm.response(-1, result);
    }
    res.jsonp(resJson);
}

/**
 * 批量导入会员卡
 * @param req
 * @param res
 */
function* addCustCardImport(req, res) {
    log.info("in addCustCardImport");
    res.setHeader('Access-Control-Allow-Origin', '*');

    var obj = {
        "header": {
            "sender": "1",
            "sender_type": "sc_admin"
        },
        "req_import_card": {
            "file": req.body.path,
            "staff_id": req.userinfo.data.innerid,
            "original_file_name": req.body.name
        }
    };
    let postData = pbEncoder.encode(obj);
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pbEncoder.decode(result.content);
    var resJson = {};
    if (content && content.res_import_card && content.res_import_card.taskid) {
        resJson = comm.response(0, result);
    }
    else {
        resJson = comm.response(-1, result);
    }
    res.jsonp(resJson);
}

function* CustAdd(req, res) {
    var customer = req.body.customer;
    if (customer.gendercode) {
        if (customer.gendercode == '0') {
            customer.gendercode = null;
        }
        else {
            customer.gendercode = parseInt(customer.gendercode);
        }
    }
    else {
        customer.gendercode = null;
    }

    var obj = {
        "header": {
            "sender": "1",
            "sender_type": "sc_admin"
        },
        "req_create_customer": {
            "stuff_id": customer.createrid,
            "ci": {
                "name": customer.fullname,
                "source": 2,
                "orgid": customer.orgid,
                "country": customer.countrycode,
                "province": customer.provincecode,
                "city": customer.citycode,
                "sex": customer.gendercode ? parseInt(customer.gendercode) : null,
                "birthday": customer.birthday == '' ? null : customer.birthday,
                "mobile": customer.mobile,
                "email": customer.email,
                "address": customer.address,
                "id_type": customer.idtypecode ? parseInt(customer.idtypecode) : null,
                "id_num": customer.idnum,
                "qq": customer.qq
            }
        }
    };
    let postData = pbEncoder.encode(obj);
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pbEncoder.decode(result.content);
    let resJson = {};
    if (content.res_error) {
        console.warn(JSON.stringify(content.res_error));
        if (content.res_error.errcode == 2002) {
            resJson = comm.response(-1, '手机或证件号重复');
        }
        else {
            resJson = comm.response(-1, content.res_error.errmsg);
        }

    }
    else {
        resJson = comm.response(0, content.res_create_customer);
        console.log("会员创建完毕,开始发放电子会员卡,会员id:" + content.res_create_customer.cust_id);
        var cardobj = {
            "header": {
                "sender": "1",
                "sender_type": "sc_admin"
            },
            "req_update_customer_card": {
                "cc": { id: content.res_create_customer.cust_id },
                "source_info": {
                    "source_id": customer.createrid
                },
                type: 1
            }
        };
        let cardData = pbEncoder.encode(cardobj);
        let cardresult = yield rpcClient.sendRequest(cardData, sc.guid(), 10);
        let cardcontent = pbEncoder.decode(cardresult.content);
        console.log("会员卡创建结果:" + JSON.stringify(cardcontent));

    }
    res.jsonp(resJson);
}



function* CustUpdate(req, res) {
    var customer = req.body.customer;
    if (customer.gendercode) {
        if (customer.gendercode == '0') {
            customer.gendercode = null;
        }
        else {
            customer.gendercode = parseInt(customer.gendercode);
        }
    }
    else {
        customer.gendercode = null;
    }

    var obj = {
        "header": {
            "sender": "1",
            "sender_type": "sc_admin"
        },
        "req_update_customer": {
            "stuff_id": customer.createrid,
            "ci": {
                "id": customer.id,
                "name": customer.fullname,
                "source": 2,
                "orgid": customer.orgid,
                "country": customer.countrycode,
                "province": customer.provincecode,
                "city": customer.citycode,
                "sex": customer.gendercode ? parseInt(customer.gendercode) : null,
                "birthday": customer.birthday,
                "mobile": customer.mobile,
                "email": customer.email,
                "address": customer.address,
                "id_type": customer.idtypecode ? parseInt(customer.idtypecode) : null,
                "id_num": customer.idnum,
                "qq": customer.qq
            }
        }
    };
    let postData = pbEncoder.encode(obj);
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pbEncoder.decode(result.content);
    let resJson = {};
    if (content.res_error) {
        resJson = comm.response(-1, content.res_error.errmsg);
    }
    else {
        resJson = comm.response(0, null);
    }
    res.jsonp(resJson);
}

function* releaseCustomer(req, res) {
    var obj = {
        "header": {
            "sender": "1",
            "sender_type": app.programType
        },
        "req_release_customer": {
            "staff_id": req.body.staff_id,
            "cc": {
                "id": req.body.id.toString(),
            },
            release_type: 1
        }
    };
    let postData = pbEncoder.encode(obj);
    let result = yield rpcClient.sendRequest(postData, sc.guid(), 10);
    let content = pbEncoder.decode(result.content);
    let resJson = {};
    if (content.res_error) {
        resJson = comm.response(-1, content.res_error.errmsg);
    }
    else {
        resJson = comm.response(0, null);
    }
    res.jsonp(resJson);
}

/*
 * 依据会员ID查询会员卡信�?
 * Create by Eason
 * */
function* GetCustCard(req, res) {
    let result = yield* custDAO.getCustCard(req.body)
    if (req.body.querytype == "main") {
        result = { data: result };
    }
    else {
        result = { TotalCount: [{ count: result[0].totalcount }] };
    }
    let resJson = comm.response(0, result);
    res.jsonp(resJson);
}

function* GetChatList(req, res) {
    if (req && req.body) {
        let result = yield* custDAO.getChatList(req.body);
        if (req.body.querytype == "main") {
            result = { data: result };
        }
        else {
            result = { TotalCount: [{ count: result[0].totalcount }] };
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

function* getPrebuildCardsHistory(req, res) {
    if (req && req.body) {
        let result = yield* custDAO.getPrebuildCardsHistoryList(req.body);
        if (req.body.querytype == "main") {
            result = { data: result };
        }
        else {
            result = { TotalCount: [{ count: result[0].totalcount }] };
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/**
 * 会员卡模块列表
 *
 * @param req
 * @param res
 * @constructor
 */
function* GetCardList(req, res) {
    log.info("in GetCardList...");
    let operatorId = req.userinfo.data.innerid;
    let orgids = req.userinfo.getSubOrgList();
    req.body.where = req.body.where ? req.body.where : {};
    req.body.where.orgids = orgids ? orgids : [];
    if (!req.body.where.userid) {
        req.body.where.userid = operatorId;
    }
    if (req && req.body) {
        let result = yield* custDAO.getCardList(req.body);
        if (req.body.querytype == "main") {
            result = { data: result };
        } else if (req.body.querytype == "count"){
            result = { TotalCount: [{ count: result[0].totalcount }] };
        } else {
            result = yield* custDAO.getCardListExportSql(req.body);
            if (result && result.insertId > 0 && result.sql) {
                let data = {};
                data.sql = result.sql;
                data.id = result.insertId;
                data.filename = "CustCardInfo";
                yield* exportDAO.Export(data);
            }else {
                throw app.err.systemError.msg("导出错误");
            }
        }

        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/**
 * 停用
 *
 * @param req
 * @param res
 * @constructor
 */
function* FrozenCustCard(req, res) {
    let result = yield* custDAO.frozenCustCard(req.body);
    var resJson = {};
    if (result) {
        resJson = comm.response(0, result.msg);
    }
    else {
        resJson = comm.response(-1, result.msg);
    }

    res.jsonp(resJson);
}

/**
 * 停用
 *
 * @param req
 * @param res
 * @constructor
 */
function* EnbaleCustCard(req, res) {
    let result = yield* custDAO.enbaleCustCard(req.body);
    var resJson = {};
    if (result) {
        resJson = comm.response(0, result.msg);
    }
    else {
        resJson = comm.response(-1, result.msg);
    }

    res.jsonp(resJson);
}

/**
 * 批量修改会员卡状态
 * 
 * 统一到一个API，之前批量启用EnableCustCard和禁用FrozenCustCard是分开的，已经不用了
 *
 * @param req
 * @param res
 * @constructor
 */
function* EditCardStatusBatch(req, res) {
    log.info("in EditCardStatusBatch...");
    // 获取操作人id
    let operatorId = req.userinfo.data.innerid;
    let statusCode = req.body.statuscode.toString();
    let cardIds = req.body.cardids;
    let successCount = 0;
    let failCount = 0;
    log.info("Got params, cardIds:" + JSON.stringify(cardIds)+", statuscode: " + statusCode);

    // 循环操作每一个cardid
    for (let index in cardIds) {
        log.info("Start edit card status for index: " + index);
        // 准备参数
        let cardId = cardIds[index];
        let parameter = {id:cardId, statuscode: statusCode, operator_id: operatorId};

        // 先获取之前的老卡状态
        let oldCardResult = yield* custDAO.getCardById({id:cardId});
        if (oldCardResult && oldCardResult.length > 0) {
            let oldCard = oldCardResult[0];
            let oldCardStatus = oldCardResult[0].statuscode;
            // 冻结
            if (statusCode === "0") {
                if (oldCardStatus === 1) {
                    // this is okay
                } else {
                    failCount++;
                    continue;
                }
            }
            // 激活
            else if (statusCode === "1") {
                // 想要激活的话 要么 之前的卡 是永久有效或者还没有过期
                if (oldCardStatus === 0 && (!oldCard.duetime || oldCard.duetime.getTime() > new Date().getTime())) {
                    // this is okay
                } else {
                    failCount++;
                    continue;
                }
            }
            // 作废
            else if (statusCode === "2") {
                if (oldCardStatus === 0 || oldCardStatus === 1 || oldCardStatus === 3) {
                    // this is okay
                } else {
                    failCount++;
                    continue;
                }
            } else {
                failCount++;
                continue;
            }
        } else {
            failCount++;
            continue;
        }

        // 修改卡状态
        let result = yield* custDAO.editCardStatus(parameter);
        log.info("Edit Card Status for index: " + index + ", result: " + JSON.stringify(result));

        if (result && result.errcode == 0) {
            successCount++;

            // 需求同步微信卡包
            if (statusCode === "2") {
                // 卡作废
                let res = yield* custDAO.getAccountidAndNoByCardid(parameter);
                if (res && res.length > 0 && res[0].card_temp_id) {
                    log.info("Start to call cf wechat req_coupon_unavailable...");
                    var obj = {
                        "header": {
                            "sender": "1",
                            "sender_type": "sc_admin"
                        },
                        "req_coupon_unavailable": {
                            "account_id": res[0].accountid,
                            "coupon_id": res[0].cardno.toUpperCase(),
                            "coupon_template_id": res[0].card_temp_id
                        }
                    };
                    let postData = pbCFEncoder.encode(obj);
                    yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
                    log.info("Call to cf wechat req_coupon_unavailable end...");
                }
            }
        } else {
            failCount++;
        }
    }

    // 返回操作信息
    let returnObject = {errcode: 0, errmsg: "成功：" + successCount + ", 失败： " + failCount};

    res.jsonp(returnObject);
}

/**
 * 根据页面生成规则，批量待激活会员卡
 * 
 * @param req
 * @param res
 */
function* addPrebuildCards(req, res) {
    log.info("in addPrebuildCards...");
    let operatorId = req.userinfo.data.innerid;
    
    // 添加到prebuild表
    let prebuildResult =  yield* custDAO.addPrebuild(req.body, operatorId);
    log.info("prebuildResult: " + JSON.stringify(prebuildResult));
    if (prebuildResult.errcode != 0 ) {
        res.jsonp(prebuildResult);
        return;
    }

    // 根据prebuild记录生成待激活卡
    let prebuildCardsResult = yield* custDAO.generatePrebuildCard(prebuildResult.id, operatorId);
    res.jsonp(prebuildCardsResult);
}

/**
 * scAdmin那部分很多修改会员或者会员卡状态的地方都在用这个方法，修改务必谨慎
 *
 * @param req
 * @param res
 * @constructor
 */
function* EditCardStatus(req, res) {
    log.info("in EditCardStatus...");
    // 获取操作人id
    req.body.operator_id = req.userinfo.data.innerid;

    // 修改卡状态
    let result = yield* custDAO.editCardStatus(req.body);
    log.info("Edit Card Status result: " + JSON.stringify(result));
    
    if (result && result.errcode == 0) {
        // 需求同步微信卡包
        if (req.body.statuscode == 2) {
            // 卡作废
            let res = yield* custDAO.getAccountidAndNoByCardid(req.body);
            if (res && res.length > 0 && res[0].card_temp_id) {
                var obj = {
                    "header": {
                        "sender": "1",
                        "sender_type": "sc_admin"
                    },
                    "req_coupon_unavailable": {
                        "account_id": res[0].accountid,
                        "coupon_id": res[0].cardno.toUpperCase(),
                        "coupon_template_id": res[0].card_temp_id
                    }
                };
                let postData = pbCFEncoder.encode(obj);
                yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
            }
        }
    }

    res.jsonp(result);
}



/**
 *  查询会员所有信息(分页)
 * @param req 查询条件
 * @param res
 */
function* getCustList(req, res) {
    var resJson;
    var sort, page, condition, querytype;
    if (req) {
        console.error('req.query' + JSON.stringify(req.url))
        if (req.body) {
            let orgids = req.userinfo.getSubOrgList();
            condition = req.body.where ? req.body.where : null;
            condition.orgids = orgids ? orgids : [];
            sort = req.body.order ? req.body.order : null;
            page = req.body.page ? req.body.page : null;
            querytype = req.body.querytype ? req.body.querytype : (req.query.querytype ? req.query.querytype : null);
        }
        let result;
        if (querytype == 'main') {
            result = yield* custDAO.getCustList(condition, sort, page);
        }
        else if (querytype == 'count') {
            result = yield* custDAO.getCustCount(condition);
        }
        else {

            result = yield* custDAO.getExportSql(condition);
            if (result && result.insertId > 0 && result.sql) {
                let data = {};
                data.sql = result.sql;
                data.id = result.insertId;
                data.filename = "CustomerInfo";
                yield* exportDAO.Export(data);
            }
            else {
                throw app.err.systemError.msg("导出错误");
            }

        }
        resJson = comm.response(0, result);
        console.log(resJson);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}



/**
 *  查询会员导入历史
 * @param req 查询条件
 * @param res
 */
function* getCustImportHistoryList(req, res) {
    var sort, page, condition, querytype;
    var resJson = {};
    if (req && req.body) {
        condition = req.body.where ? req.body.where : null;
        sort = req.body.order ? req.body.order : null;
        page = req.body.page ? req.body.page : null;
        querytype = req.body.querytype ? req.body.querytype : null;
        let result = {};
        if (querytype == "main") {
            result = yield* custDAO.getCustImportHistoryList(condition, sort, page);
            if (result) {
                result = { data: result };
            }
        }
        else {
            result = yield* custDAO.getCustImportHistoryCount(condition);
            if (result && 'length' in result && result.length > 0) {
                result = { TotalCount: [{ count: result[0].totalcount }] };
            }
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/**
 *  查询会员卡导入历史
 * @param req 查询条件
 * @param res
 */
function* getCustCardImportHistoryList(req, res) {
    var sort, page, condition, querytype;
    var resJson = {};
    if (req && req.body) {
        condition = req.body.where ? req.body.where : null;
        sort = req.body.order ? req.body.order : null;
        page = req.body.page ? req.body.page : null;
        querytype = req.body.querytype ? req.body.querytype : null;
        let result = {};
        if (querytype == "main") {
            result = yield* custDAO.getCustCardImportHistoryList(condition, sort, page);
            if (result) {
                result = { data: result };
            }
        }
        else {
            result = yield* custDAO.getCustCardImportHistoryCount(condition);
            if (result && 'length' in result && result.length > 0) {
                result = { TotalCount: [{ count: result[0].totalcount }] };
            }
        }
        let resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/**
 *  修改会员状态
 * @param req 会员信息
 * @param res
 */
function* updateCustStatus(req, res) {
    var resJson = {};
    if (req && req.body) {
        let result = yield* custDAO.updateCustStatus(req.body);
        if (result) {
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        else {
            throw app.err.systemError.msg("异常错误");
        }
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

/**
 *  会员卡发放
 *  
 * @param req 会员卡信息
 * @param res
 */
function* addCustCard(req, res) {
    log.info("in addCustCard...");
    var resJson = {};
    let result = yield* custDAO.addCustCard(req.body.card);
    log.info("Add cust card result: " + JSON.stringify(result));
    if (result.errcode == 0) {
        res.jsonp(result);
        
        // 如果之前有oldCardId，那么作废掉之后需要同步微信卡券
        if (result.oldCardId) {
            // 卡作废
            let res = yield* custDAO.getAccountidAndNoByCardid({id:result.oldCardId});
            if (res && res.length > 0 && res[0].card_temp_id) {
                let obj = {
                    "header": {
                        "sender": "1",
                        "sender_type": "sc_admin"
                    },
                    "req_coupon_unavailable": {
                        "account_id": res[0].accountid,
                        "coupon_id": res[0].cardno.toUpperCase(),
                        "coupon_template_id": res[0].card_temp_id
                    }
                };
                let postData = pbCFEncoder.encode(obj);
                yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
            }
        }
    } else {
        res.jsonp(result);
    }
}

/**
 * 激活预生成的会员卡
 *
 * @param req 会员卡信息
 * @param res
 */
function* activateCustCard(req, res) {
    log.info("in activateCustCard...");
    var resJson = {};
    let result = yield* custDAO.activateCustCard(req.body);
    log.info("Activate cust card result: " + JSON.stringify(result));
    if (result.errcode == 0) {
        res.jsonp(result);

        // 如果之前有oldCardId，那么作废掉之后需要同步微信卡券
        if (result.oldCardId) {
            // 卡作废
            let res = yield* custDAO.getAccountidAndNoByCardid({id:result.oldCardId});
            if (res && res.length > 0 && res[0].card_temp_id) {
                let obj = {
                    "header": {
                        "sender": "1",
                        "sender_type": "sc_admin"
                    },
                    "req_coupon_unavailable": {
                        "account_id": res[0].accountid,
                        "coupon_id": res[0].cardno.toUpperCase(),
                        "coupon_template_id": res[0].card_temp_id
                    }
                };
                let postData = pbCFEncoder.encode(obj);
                yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
            }
        }
    } else {
        res.jsonp(result);
    }
}

/**
 *  修改会员卡
 *
 * @param req 查询条件
 * @param res
 */
function* updateCustCard(req, res) {
    // 更新会员卡信息
    let updateResult = yield* custDAO.updateCustCard(req.body.card);
    log.info("updateResult value: "+ JSON.stringify(updateResult));
    if (updateResult.errcode == 0) {
        res.jsonp(updateResult);

        //同步微信卡包，这里是同步微信等级
        let result = yield* custDAO.getCardTempById(req.body.card.id);
        if (result && result.length > 0 && result[0].card_temp_id) {
            let cardLevel = yield* custDAO.getValueByKeyName('cardlevel_' + result[0].levelno);
            let obj = {
                "header": {
                    "sender": "1",
                    "sender_type": "sc_admin"
                }
            };
            obj.req_member_info_update = {};
            obj.req_member_info_update.account_id = result[0].accountid;
            obj.req_member_info_update.coupon_id = result[0].cardno.toUpperCase();
            obj.req_member_info_update.coupon_template_id = result[0].card_temp_id;
            obj.req_member_info_update.custom_field = [{field: cardLevel[0].keyvalue}];
            let postData = pbCFEncoder.encode(obj);
            log.info("Calling cf wechat req_member_info_update: " + JSON.stringify(obj));
            yield rpcCFClient.sendRequest(postData, sc.guid(), 10);

            // 如果卡号换掉了，那么更新微信卡包
            // 卡号不能换了现在
            // if (updateResult.cardInfo) {
            //     let cardNoObject = {
            //         header: {
            //             "sender": "1",
            //             "sender_type": "sc_admin"
            //         },
            //         req_update_coupon_id: {
            //             account_id: result[0].accountid,
            //             coupon_template_id: result[0].card_temp_id,
            //             coupon_id: updateResult.cardInfo.oldCardNo.toString(),
            //             new_coupon_id : updateResult.cardInfo.newCardNo.toString()
            //         }
            //     };
            //     let cardNoEncoded = pbCFEncoder.encode(cardNoObject);
            //     log.info("Calling cf wechat req_update_coupon_id: " + JSON.stringify(cardNoObject));
            //     yield rpcCFClient.sendRequest(cardNoEncoded, sc.guid(), 10);
            // }
        }
    } else {
        res.jsonp(updateResult);
    }
}

function* getCustAction(req, res) {
    var resJson = {};
    if (req && req.body) {
        let result = yield* custDAO.getCustAction(req.body)
        resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

function* getExportList(req, res) {
    var page, condition, querytype;
    var resJson = {};
    if (req) {
        if (req.body) {
            condition = req.body.where ? req.body.where : null;
            page = req.body.page ? req.body.page : null;
            querytype = req.body.querytype ? req.body.querytype : null;
        }
        let result;
        if (querytype == "count") {
            result = yield* custDAO.getExportCount(condition);
            result = { TotalCount: [{ count: result[0].totalcount }] };
        }
        else {
            result = yield* custDAO.getExportList(condition, page);
            result = { data: result };
        }
        result = comm.response(0, result);
        res.jsonp(result);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}


function* addCustCoupon(req, res) {
    console.error(JSON.stringify(req.body));
    var rewards = req.body.rewards;
    let sendnum = 0;
    let successnum = 0;
    let resJson = {};
    for (let i = 0; i < rewards.length; i++) {
        let each = rewards[i]
        for (let k = 0; k < parseInt(each.num); k++) {
            sendnum += 1
            let rescode = yield doSendCoupon(rewards[i], req.body);
            if (rescode instanceof Array && rescode.length > 0) {
                successnum += 1
            }
        }
    }

    if (sendnum == successnum) {
        resJson = comm.response(0, "发放成功！");
    } else {
        resJson = comm.response(1, "礼券发放失败,请查看错误列表!");
    }
    res.jsonp(resJson);
    if (successnum > 0) {
        //如果发放成功礼券数量大于0则发放模板消息
        if (app.notify_helper.isInited) {
            yield* app.notify_helper.sendTemplateNotify('systemsendcoupon', req.body.id,
                [{
                    key: 'title',
                    value: '您好，恭喜您获得礼券。'
                }, {
                    key: 'sendnum',
                    value: successnum.toString() + "张"
                }, {
                    key: 'sendtime',
                    value: new Date().format("yyyy-MM-dd hh:mm:ss")
                }, {
                    key: 'remark',
                    value: "请到会员中心查看礼券。"
                }])
            // {
            //     key: 'url',
            //         value: 'http://......'
            // }
        }
    }

}

function doSendCoupon(coupon, cust, param) {
    return new Promise(function (resolve, reject) {
        var obj = {
            "header": {
                "sender": "req_send_coupon",
                "sender_type": "sc_admin"
            },
            "req_send_coupon": {
                "coupon_template_id": coupon.couponid.toString(),
                "customer_id": cust.id.toString(),
                "send_source": {
                    "source_type": "4",
                    "source_id": "管理员推送"
                }
            }
        };
        console.info("send coupon request data:" + JSON.stringify(obj))
        var postData = pbCouponEncoder.encode(obj);
        rpcCouponClient.sendRequest(postData, sc.guid(), 10).then(function (result) {
            var content = pbCouponEncoder.decode(result.content)
            console.info("send coupon response data:" + JSON.stringify(content.res_send_coupon.coupon_info))
            resolve(content.res_send_coupon.coupon_info)
        }).catch(function (e) {
            console.error("send coupon fail:" + e)
            resolve(e)
        });
    });
}

function* updateWechatCard(req, res) {
    var resJson = {};
    if (req && req.body) {
        console.log("收到卡包信息:" + JSON.stringify(req.body));
        var result = yield* custDAO.updateWechatCard(req.body);
        if (result && result.affectedRows > 0) {
            if (req.body.isenable) {
                let id;
                if (result.insertId > 0) {
                    id = result.insertId;
                }
                else {
                    id = req.body.id;
                }
                //通知微信

                var obj = {}

                if (req.body.templateid) {
                    obj = {
                        "header": {
                            "sender": "1",
                            "sender_type": "sc_admin"
                        },
                        "req_member_card_info_update": {
                            "account_id": req.body.accountid,
                            coupon_template_id: req.body.templateid,
                            "basic_info": {
                                "logo_uuid": req.body.logo,
                                "title": req.body.cardname,
                                "notice": req.body.remind,
                                "description": req.body.remark,
                                "type": 3,
                            },
                            "extend_info": {
                                "service_phone": req.body.phone,
                                //"get_limit": 1,
                                "promotion_url_name": "会员中心",
                                "promotion_url": config.scAdmin.memberCenterUrl
                            },
                            "message_member_card": {
                                "auto_activate": true,
                                "supply_bonus": true,
                                "supply_balance": false,
                                custom_field: [{ name_type: 1, field_url: config.scAdmin.memberCenterUrl }, { name_type: 2, field_url: config.scAdmin.memberCenterUrl }],
                                member_card_discount: 0
                            },

                        }
                    };
                }
                else {
                    obj = {
                        "header": {
                            "sender": "1",
                            "sender_type": "sc_admin"
                        },
                        "req_coupon_template_create": {
                            "account_id": req.body.accountid,

                            "coupon_type": 6,
                            "basic_info": {
                                "logo_uuid": req.body.logo,
                                "code_type": 3,
                                "brand_name": req.body.brand_name,
                                "title": req.body.cardname,
                                "color": "Color010",
                                "notice": req.body.remind,
                                "description": req.body.remark,
                                "quantity": 100000000,
                                "type": 3,
                            },
                            "extend_info": {
                                "service_phone": req.body.phone,
                                "use_custom_code": true,
                                //"get_limit": 1,
                                "promotion_url_name": "会员中心",
                                "promotion_url": config.scAdmin.memberCenterUrl
                            },
                            "message_member_card": {
                                "auto_activate": true,
                                "prerogative": req.body.remark,
                                "supply_bonus": true,
                                "supply_balance": false,
                                "balance_url": config.scAdmin.memberCenterUrl,
                                custom_field: [{ name_type: 1, field_url: config.scAdmin.memberCenterUrl }, { name_type: 2, field_url: config.scAdmin.memberCenterUrl }]
                            }
                        }
                    };
                }
                let postData = pbCFEncoder.encode(obj);
                result = yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
                let content = pbCFEncoder.decode(result.content);
                if (content && content.res_coupon_template_create && content.res_coupon_template_create.errcode == 0 && content.res_coupon_template_create.coupon_template_id) {
                    result = yield* custDAO.updateWechatCardStatus({ id: id, statuscode: 1, templateid: content.res_coupon_template_create.coupon_template_id });
                    resJson = comm.response(0, 'OK');
                    res.jsonp(resJson);
                }
                else if (content && content.res_member_card_info_update && content.res_member_card_info_update.errcode === 0) {
                    if (content.res_member_card_info_update.result.send_check) {
                        result = yield* custDAO.updateWechatCardStatus({ id: id, statuscode: 1, templateid: req.body.templateid });
                    }
                    resJson = comm.response(0, 'OK');
                    res.jsonp(resJson);
                }
                else {
                    throw app.err.systemError.msg("微信同步失败");
                }
            }
            else {
                resJson = comm.response(0, 'ok');
                res.jsonp(resJson);
            }
        }
        else {
            throw app.err.systemError.msg("保存失败");
        }
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

function* querywechatcard(req, res) {
    var resJson = {};
    if (req && req.body) {
        let result = yield* custDAO.queryWechatCardByAccountId(req.body)
        resJson = comm.response(0, result);
        res.jsonp(resJson);
    }
    else {
        throw app.err.systemError.msg("无参数");
    }
}

function* querywechatcardstatus(req, res) {
    var resJson = {};
    if (req && req.body && req.body.templateid) {
        var obj = {
            "header": {
                "sender": "1",
                "sender_type": "sc_admin"
            },
            "req_coupon_template_query": {
                "account_id": req.body.accountid,
                "coupon_template_id": req.body.templateid
            }
        };
        let postData = pbCFEncoder.encode(obj);
        let result = yield rpcCFClient.sendRequest(postData, sc.guid(), 10);
        result = pbCFEncoder.decode(result.content);
        if (result && result.res_coupon_template_query && result.res_coupon_template_query.errcode === 0) {
            yield custDAO.updateWechatCardStatus({ id: req.body.id, templateid: req.body.templateid, statuscode: result.res_coupon_template_query.result.status })
            resJson = comm.response(0, result);
            res.jsonp(resJson);
        }
        else {
            resJson = comm.response(-1, '查询审核状态失败');
            res.jsonp(resJson);
        }



    }
    else {
        throw app.err.systemError.msg("无微信模版信息");
    }
}