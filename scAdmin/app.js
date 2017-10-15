/**
 * Created by Simon on 2016/3/14.
 */

var sc = require("smartacjs");
var app = sc.app();
var fs = require('fs');

app.programType = 'sc_admin';
function main() {
    app.err = require('../public/err');
    // 载入资源
    app.res = require('./js/resource');
    // 加载cf_sdk
    // app.cf = require('./js/account_manager.js');
    //载入模板消息
    // app.notify_helper = require('../public/notify_helper')

    // app.notify_helper.init(app.res.getMQConnectionSync(), app.conf.dbString, app.conf.instanceName, app.programType);

    //初始化组织
    // app.org = require('./js/org_manager.js');
    // app.org.init();

}




//sc.numCPUs=;
sc.runMain(main);


