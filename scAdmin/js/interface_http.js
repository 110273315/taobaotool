/**
 * 此文件中运行的是所有初始化的操作
 * 请不要将不相关的代码放置其中，此
 * 文件中所有的方法，如果以“”开头
 * 则表示为内部方法，不对外公开，其
 * 他则为外部方法
 * Created by michael on 2014/12/29.
 */
var domain = require('domain'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    multipart = require('connect-multiparty'),
    sc = require('smartacjs'),
    app = sc.app(), 
    _ = sc._,
    promise = require('bluebird'),
    config = sc.app().conf.scAdmin,
    comm = require('./common/comm.js'),
    log;

/**
 * 构造函数
 * 在app.js中实例化此对象，并且将
 * express实例传入此构造函数中，
 * 以便在后续方法中用到此示例
 * @param app express实例
 */
var HttpInit = module.exports = function() {
    this.app = app.webapp;
};

/**
 * 使用中间件操作，此方法内只调用内
 * 部方法，并且以统一的函数对外
 */
HttpInit.prototype.useMiddleware = function() {
    // 初始化第三方中间件
    this.initPlugins();
    // 自定义中间件
    this.initCustMiddleware();
};

/**
 * 预初始化
 * @private
 */
HttpInit.prototype.preInit = function() {
    // 设置环境变量
    // 配置全局http启动端口
    process.env.PORT = config.httpPort;
    this.app.set('port', process.env.PORT);
    //启用日志
    log = sc.createNamedLog(path.join(__dirname,'interface_http.js'));
};

/**
 * 初始化第三方中间件（bodyParser、methodOverride、static）
 * @private
 */
HttpInit.prototype.initPlugins = function() {

    this.app.use(multipart());
    // 解析客户端请求，通常是通过 POST  发送的内容（express4.x
    // 中已经不再集成，如果将express升级到4.x需要安装并手动引入）
    this.app.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb'
    }));
    this.app.use(bodyParser.json({limit: '50mb'}));
    this.app.use(bodyParser.text({
        type: 'text/xml'
    }));
    this.app.use(bodyParser.text());
    // 此中间件可以模拟PUT、DELETE等http操作（express4.x中
    // 已经不再集成，如果将express升级到4.x需要安装并手动引入）
    this.app.use(methodOverride());
};

/**
 * 其他中间件（自定义的中间件）
 * @private
 */
HttpInit.prototype.initCustMiddleware = function() {
    //收集模块和路由
    app.module = require('./module_manager');
    app.module.loadRoute();
    var routes = app.module.allRoutes;
    var allRoutesInfo = app.module.allRoutesInfo;
    
    //如果一个路由都不存在，则抛错
    if(!routes || routes.length == 0) return console.error('a route is required in this application!');
    
    //加载Session
    app.session = require('./session_manager.js');
    // //路由认证
    this.app.use('*',app.session.routeFilter,function(req,res,next){
        //解决跨域问题
        res.setHeader('Access-Control-Allow-Origin','*');
        next();
    })
    
    // 加载路由
    _.each(allRoutesInfo, function (route) {
        if (!route.middleWare) {
            this.app[route.method](route.routeRule, route.func);
        } else {
            this.app[route.method](route.routeRule, route.middleWare, route.func);
        }
    }.bind(this));
    // 所有路由都未匹配（404）
    this.app.get('*', function (req, res, next) {
        res.sendStatus(404);
    });
    this.app.post('*', function (req, res, next) {
        res.sendStatus(404);
    });
};
