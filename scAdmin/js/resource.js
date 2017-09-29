/**
 * Created by colin on 16/5/25.
 */
var sc = require("smartacjs");
var app = sc.app();
var Promise = sc.Promise;
var request = require('request');
var url = require('url');
var scRabbit = sc.RabbitMQ();
var express = require('express');
var _ = sc._;
var db = sc.db();
var path = require('path');
app.webapp = new express();

//定义资源类
function Resource() {
    //1.初始化redis
    this._redisConnection = sc.Redis().createRedisConnect(app.conf.redisUrl.redis0, 'redis');
    this._redisConnection.start();
    app.redis = this._redisConnection;

    //2.初始化数据库
    this._PoolRead = db.createMySQLConnectionPool(app.conf.dbString);
    this._PoolWrite = db.createMySQLConnectionPool(app.conf.dbString);

    //3.初始化mq链接
    this._mqConnection = sc.RabbitMQ().createConnect(app.conf.mqUrl);
    if (!!!this._mqConnection) {
        return false;
    }
    //开启mq
    this._mqConnection.start();
}

// 获取读数据库连接
Resource.prototype.getDBRConnection = function (module, name) {
    return this._PoolRead.getConnection(name);
}
// 获取写数据库连接
Resource.prototype.getDBWConnection = function (module, name) {
    return this._PoolWrite.getConnection(name);
};

// 获取读连接池
Resource.prototype.getRPoolSync = function () {
    return this._PoolRead;
};
// 获取写连接池
Resource.prototype.getWPoolSync = function () {
    return this._PoolWrite;
};

// 获取MQ连接
Resource.prototype.getMQConnectionSync = function () {
    return this._mqConnection;
}

// 获取redis连接
Resource.prototype.getRedisConnectionSync = function () {
    return this._redisConnection;
}

// 导出
var resource = new Resource();
module.exports = resource;

function init() {
    Date.prototype.DateFormat = function(fmt)
    { //author: meizz
        var o = {
            "M+" : this.getMonth()+1,                 //月份
            "d+" : this.getDate(),                    //日
            "h+" : this.getHours(),                   //小时
            "m+" : this.getMinutes(),                 //分
            "s+" : this.getSeconds(),                 //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    }
    ;
    process.nextTick(function () {
        // 初始化httpServer
        var HttpInterface = require('./interface_http');
        var httpInit = new HttpInterface();
        //开启静态路由
        app.webapp.use(express.static(path.join(__dirname, '../ui')));
        httpInit.preInit();
        //使用中间件
        httpInit.useMiddleware();
        app.webapp.listen(app.conf.scAdmin.httpPort, function () {
            console.log('Http is running,port is %s', app.conf.scAdmin.httpPort);
        })
    });


}
init();