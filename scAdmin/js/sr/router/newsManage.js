'use strict'
let sc = require('smartacjs'),
    path = require('path'),
    fs = require('fs'),
    app = sc.app(),
    config = app.conf,

    rabbit = sc.RabbitMQ(),
    Promise = sc.Promise,
    _=sc._,
    newsManageDAO = require('../dao/newsManageDAO.js'),
    comm = require('../../common/comm.js'),
    resCode = require('../../resCode'),
    log = sc.createNamedLog('sr', 'newsManage'),
    co = require('co');
let conn = sc.RabbitMQ().createConnect(config.mqUrl);
conn.start()
conn.declareExchange("amq.direct", "direct");
let wechatRpcClient = rabbit.createRPCClient(conn, "cf.wechat.rpc");
let wechatPbEncoder = sc.createPBEncoder(path.normalize(sc.formatString("$(CurrentDirectory)../protocol/cf_wechat.proto.js")), "cf.wechat", "Message");

exports.autoroute = {
    post: {
        '/sr/social/newsList/*': processMessage,//统一处理客户模块路由
    }
};
var msgProcesser = {
    '/sr/social/newsList/list': getNewsList,               //图文消息列表
    '/sr/social/newsList/get': getNews,               //获取图文消息明细
    '/sr/social/newsList/add': insertNews, //新增图文消息
    '/sr/social/newsList/edit': updateNews,  //编辑图文消息
    '/sr/social/newsList/delete': deleteNews, //删除图文消息
    '/sr/social/newsList/preview': previewNews //图文消息预览
};

function processMessage(req, res) {
    co(function* () {
        try {
            yield* msgProcesser[req.url](req, res);
        }
        catch (e) {
            res.jsonp(e);
        };
    });
}

function* getNewsList(req,res) {
    var resJson, sort, page, condition;
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req) {
        try{
            if (req.body) {
                condition = req.body.where ? req.body.where : null;
                sort = req.body.order ? req.body.order : null;
                page = req.body.page ? req.body.page : null;
            }
            var  _sort,_page;
            //排序和分页统一封装格式，以便在DAO层调用公用函数
            if (sort) {
                _sort = {column: sort.name, type: sort.type};
            }
            if (page) {
                if(page.num==0){
                    page.num=1
                }
                _page = {index:page.num , num: page.item};
            }
            let resultList = yield* newsManageDAO.getNewsList(condition,_sort, _page);
            let totalCount = yield* newsManageDAO.getNewsCount(condition)

            let result = {resultList: resultList, totalCount: totalCount}
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    }
    else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}

function* getNews(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.body.id) {
        try{
            let resultList = yield* newsManageDAO.getNews(req.body.id);
            let resJson = comm.response(0, resultList);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    } else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }

}

function* insertNews(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.error("insertNews:" +JSON.stringify(req.body));
    if (req.body) {
        try{
            let newsEntity=req.body
            let innerid = sc.guid();
            let filepath = sc.formatString("$(CurrentDirectory)js/sr/router/uploadFiles/weiappNews/") + innerid + ".json";
            let content = newsEntity.datajson1;
            fs.writeFileSync(filepath, content);
            let uuid = yield uploadJson(filepath)
            console.error("Upload json1 file success:" + uuid);
            newsEntity.jsonfileid = uuid;

            //保存第二种json文件
            let filepath2 = sc.formatString("$(CurrentDirectory)js/sr/router/uploadFiles/weiappNews/") + sc.guid() + ".json";
            let content2 = newsEntity.datajson2;
            fs.writeFileSync(filepath2, content2)
            let uuid2 = yield uploadJson(filepath2)
            console.error("Upload json2 file success:" + uuid2);
            newsEntity.jsonfileid2 = uuid2;
            let resultList = yield* newsManageDAO.insertNews(newsEntity)
            fs.unlink(filepath)
            fs.unlink(filepath2)
            let resJson = comm.response(0, resultList);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    } else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}

function* updateNews(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.error("updateNews:" +JSON.stringify(req.body));
    if (req.body) {
        try{
            let newsEntity=req.body
            let innerid = sc.guid();
            let filepath = sc.formatString("$(CurrentDirectory)js/sr/router/uploadFiles/weiappNews/") + innerid + ".json";
            let content = newsEntity.datajson1;
            fs.writeFileSync(filepath, content);
            let uuid = yield uploadJson(filepath)
            console.error("Upload json1 file success:" + uuid);
            newsEntity.jsonfileid = uuid;

            //保存第二种json文件
            let filepath2 = sc.formatString("$(CurrentDirectory)js/sr/router/uploadFiles/weiappNews/") + sc.guid() + ".json";
            let content2 = newsEntity.datajson2;
            fs.writeFileSync(filepath2, content2)
            let uuid2 = yield uploadJson(filepath2)
            console.error("Upload json2 file success:" + uuid2);
            newsEntity.jsonfileid2 = uuid2;
            let resultList = yield* newsManageDAO.updateNews(newsEntity)
            fs.unlink(filepath)
            fs.unlink(filepath2)
            let resJson = comm.response(0, resultList);
            res.jsonp(resJson)
        }catch(e){
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }
    } else {
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}

function uploadJson(filepath) {
    var innerid = sc.guid() + '.json';
    return new Promise(function (resolve, reject) {
        var exec = require('child_process').exec;
        //调用小工具
        console.error(sc.formatString("$(CurrentDirectory)"));
        exec('node ' + sc.formatString("$(CurrentDirectory)../scResource/resClient/resClient.js") + ' upload -s ' +
            app.conf.scResource.resourceHost + ':' + app.conf.scResource.httpPort + ' -F ' + innerid + ' -t permanent -p sr  -P ' + filepath
            , {timeout: 10000}, function (err, msg) {
                if (err) {
                    console.info('res_uploadByUrl_scResource err' + JSON.stringify(err));
                    reject(err)
                } else {
                    if (JSON.parse(msg).code == 0) {
                        console.info('res_uploadByUrl_scResource secuss' + JSON.stringify(msg));
                        resolve(JSON.parse(msg).uuid);
                    } else {
                        console.info('url1:' + JSON.stringify(url));
                        console.info('res_uploadByUrl_scResource fail' + JSON.stringify(msg));
                        reject(msg);
                    }
                }
            })
    })
}


function* deleteNews(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.body && req.body.sessionid) {
        try{
            let result = yield* newsManageDAO.deleteNews(req.body.id)
            let resJson = comm.response(0, result);
            res.jsonp(resJson)
        } catch (e) {
            console.error("系统错误:" + e);
            throw app.err.fail.msg("系统错误:" + e)
        }

    }else{
        console.error("请求不存在:" + JSON.stringify(req.body));
        throw app.err.noExist.msg("请求不存在:" + JSON.stringify(req.body))
    }
}


function* previewNews(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    let resJson = null;
    if (req.body && req.body.sessionid) {
        try{
            let result = yield* newsManageDAO.getOpenid(req.body.mobile,req.body.accountid)
            let openid ="";
            if(result.length>0){
                openid=result[0].openid;
            }
            if (openid.length > 0) {
                let newsResult = yield* newsManageDAO.getNews(req.body.newsid)
                if(newsResult.length>0){
                    let newsModel = newsResult[0][0];
                    let jsonfileid = newsModel.jsonfileid;
                    //验证消息是否完整
                    let isNewsComplete= true;
                    let newsDetails =newsResult[1];
                    newsDetails.forEach(function(detail) {
                        if (detail.title == '' || detail.contents == '' || detail.imageid == '') {
                            isNewsComplete = false;
                        }
                    });
                    if(!isNewsComplete) {
                        log.error("该图文消息不完整，请完善后再预览")
                        resJson = comm.response(-2, "该图文消息不完整，请完善后再预览");
                        res.jsonp(resJson)
                    }
                    var CustomerSearchCondition = [];
                    var CustomerSearch = {};
                    CustomerSearch.cf_account_id = req.body.accountid;
                    CustomerSearch.wechat_open_id = openid;
                    CustomerSearchCondition.push(CustomerSearch);

                    var obj = {
                        header: {
                            sender: "req_group_message_send",
                            sender_type: "sendertype1"
                        },
                        req_group_message_send: {
                            account_id: req.body.accountid,
                            customer_search_condition: CustomerSearchCondition,
                            message_content: {type: "NEWS", resource_id: jsonfileid, content: "preview"}
                        }
                    }

                    let postData = wechatPbEncoder.encode(obj);
                    console.error("发送微信图文预览请求数据:"+JSON.stringify(postData));
                    wechatRpcClient.sendRequest(postData, sc.guid(), 10).then(function (result) {
                        let content = wechatPbEncoder.decode(result.content);
                        log.info("发送微信图文预览返回数据:" + JSON.stringify(content));
                        if (content && content.res_group_message_send.errcode == 0) {
                            resJson = comm.response(0, content);
                            res.jsonp(resJson)
                        } else {
                            resJson = comm.response(content.res_group_message_send.errcode, content.res_group_message_send.errmsg);
                            res.jsonp(resJson)
                        }
                    }).catch(function (err) {
                        resJson = comm.response(-12, "发送微信图文消息预览错误:" + err);
                        res.jsonp(resJson)
                    });
                }
            }else{
                log.error('openid is not exist')
                resJson = comm.response(-1, 'openid is not exist');
                res.jsonp(resJson)
            }
        }catch(e){
            console.error("系统错误:" + e);
            resJson = comm.response(-10, "系统错误:" + e);
            res.jsonp(resJson)
        }
    }else{
        console.error("请求不存在:" + JSON.stringify(req.body));
        resJson = comm.response(-11, "请求不存在:" + JSON.stringify(req.body));
        res.jsonp(resJson)
    }
}