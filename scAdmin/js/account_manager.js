/**
 * Created by Kay on 2016/6/21
 */
'use strict'
var sc = require('smartacjs');
var app = sc.app();
var Promise = sc.Promise;
var db = sc.db();
var co = require('co');
var log = sc.createNamedLog('AM');
var cf = require("./../../public/cf_sdk");
var g_account = new Array();
var rconn = app.res.getRPoolSync('sc');


//通过ID获取账户
var getAccountByID = function (id) {
    return g_account[id];
};
exports.getAccountByID = getAccountByID;

//创建微信账户
var WechatAccount = null;
function createWechatAccount(id) {
    WechatAccount = cf.createWeChatAccount(id);
    return WechatAccount;
}

//创建短信账户
var SMSAccount = null;
function createSMSAccount(id) {
    SMSAccount = cf.createSMSAccount(id);
    return SMSAccount;
}

//创建邮件账户
var EmailAccount = null;
function createEmailAccount(id) {
    EmailAccount = cf.createEmailAccount(id);
    return EmailAccount;
}

// 创建APP推送账户
var APPAccount = null;
function createAPPAccount(id) {
    APPAccount = cf.createAPPAccount(id);
    return APPAccount;
}

//加载账户
exports.reloadAccount = function* () {
    try {
        var sql = 'select * from cf_account where enabled=1 and function_mask like "1%"';
        var accountList = yield rconn.query(sql, 'findAccount');
        log.info("get account list success: %s", JSON.stringify(accountList));
        accountList.forEach(function (accountInfo) {
            var accountObj;
            switch (accountInfo.method_code) {
                case 1:
                    accountObj = createWechatAccount(accountInfo.innerid);
                    break;
                case 2:
                    accountObj = createSMSAccount(accountInfo.innerid);
                    break;
                case 3:
                    accountObj = createEmailAccount(accountInfo.innerid);
                    break;
                case 5:
                    accountObj = createAPPAccount(accountInfo.innerid);
                    break;
                default:
                    break;
            }
            if (accountObj) {
                g_account[accountInfo.innerid] = accountObj;
                if (accountInfo.method_code == 1) {
                    accountObj.on('message', function (msg) {
                        //调到事件业务处理部分
                    })
                }
            }
            else {
                log.error('create account fail: %s', JSON.stringify(accountInfo));
            }
        })
    } catch (err) {
        log.error('load account error: %s', err);
    }
};

//初始化方法
function* init() {
    cf.init(app.res.getMQConnectionSync(), app.conf.instanceName, app.programType);
    log.info('init and reload account!');
    yield* exports.reloadAccount();
}


function makeCustomerSearchCondition(customerId, openId, code, mobile, email, deviceId) {
    return cf.makeCustomerSearchCondition(customerId, openId, code, mobile, email, deviceId);
}
exports.makeCustomerSearchCondition = makeCustomerSearchCondition;

//开始
if (!co(init())) {
    module.exports = null;
} else {
    log.info("reload account success, account number is: %s", g_account.length);
}
