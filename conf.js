/**
 * Copyright © 2017 Leguang Inc. All rights reserved.
 * Created by Simon on 2015/11/6.
 * Modified by Kay on 2017/6/2. for merge
 */
var sc = require("smartacjs");
// redis连接地址，online modify
// var redis = "redis://:@127.0.0.1:6379";
// rabbitMQ的连接地址，amqp://user:password@172.16.0.54/vhost，online modify
// var mq = "amqp://guest:guest@172.16.0.81:5672";

module.exports=
{
    // 通用配置
    // mqUrl: mq,
    // 日志级别设定，分trace|debug|info|warn|error|none这些级别，online modify
    logLevel: 'trace',
    // 数据库连接串，online modify，mysql://172.16.0.131/sc_v40?user=sruser&password=srpasswd&port=3306&multipleStatements=true&insecureAuth=true&connectionLimit=20&charset=utf8mb4
    dbString: 'mysql://127.0.0.1/taobaotool?user=root&password=344895&port=3306&multipleStatements=true&insecureAuth=true&connectionLimit=20&charset=utf8mb4',
    // Redis地址
    // redisUrl: {
    //     redis0: redis + '/0', //0库
    //     redis1: redis + '/1', //1库
    //     redis8: redis + '/8', //8库
    //     redis9: redis + '/9' //9库
    // },
    // 会话相关，配置提到这里，scAdmin、商户平台、服务台公用session配置
    session: {
        // online modify
        kick: false,             // 会话是否强踢
        timeout: 200*60,         // 会话超时时间(单位是秒 200*60 表示200分钟后超时)
        strong_timeout: 30,      // 会话强壮连接时间(秒)
        heartbeat_interval: 20,  // 会话心跳间隔
        cacheCount: 1000         // 会话缓冲数量
    },
    scAdmin: {
        // HTTP端口
        httpPort: 18910,
        // 最大文件限制
        maxHttpRequestSize: 1024 * 1024,
        // 默认最大分页
        defaultPageSize: 10,
        // 特殊路由设定
        routes: {
            // 除了api打头的路由之外的特殊路由，不需要走权限控制的
            specialRoutes: [
                '/base/base/codeall/list'
            ]
        },
        // 支付商户，online modify
        account: {
            wxpay: "WXPAY5FASG-DGW423A-34TGGWGG53D09"
        },
        // 会员中心短地址，online modify
        memberCenterUrl: 'http://w.url.cn/s/A0709Oz'
    },
    scResource: {
        // 资源服务器内网IP地址，online modify
        resourceHost: '172.16.0.146',
        // 资源服务器HTTP端口
        httpPort: '8000',
        // 资源服务器所在服务器的外网域名，不要带上http://和https://，online modify
        resourceDomain: 'scqa.smartac.co',
        // 资源服务器下载路径
        resourceCurrPath: 'resource',
        // 传输文件大小限制
        maxFileSize: 100 * 1024 * 1024,
        // 存储本机是的存放路径，online modify
        localFilePath: "E:\\workspace\\nodejs\\scResource\\public",  //'/smartac/data/resource_date/public/'
        // 图片尺寸
        size: {
            small: 120,
            medium: 360,
            large: 840
        },
        // 存储媒介相关参数，online modify
        storage: {
            // 存储器类型，local本地/aliyun阿里云OSS，online modify
            type: 'local',
            // 如果type是aliyun，则需要配置以下参数
            domain: 'oss-cn-shanghai.aliyuncs.com',
            resourcePath: 'http://{0}.oss-cn-shanghai.aliyuncs.com/{1}',
            endpoint: 'http://oss-cn-shanghai.aliyuncs.com',
            accessKeyId: '5gqmRRbkqv6q6yso',
            secretAccessKey: 'ePpaDeG0hWyfD1X7fhjWeyCOAReYwt',
            bucket: 'leguang', // 资源库名称
            apiVersion: '2013-10-15',
            downFromRemote: true// 访问时,是否将远端文件下载到本地
        }
    }
};
