
/**
 * Created by Ryan on 2016/07/06.
 */
'use strict'
var sc = require('smartacjs');
var app = sc.app();

let db = sc.db();
let wPool = app.res.getWPoolSync('sc');
let rPool = app.res.getRPoolSync('sc');
var fs = require('fs');

exports.Export = function* (data) {
    let sql = data.sql;
    let uuid = sc.guid();

    let filename = data.filename + CurentTimeNoBlank() + '.xlsx';
    console.log("生成文件名:"+filename);
    console.error("执行的sql语句："+sql)
    let result = yield rPool.query(sql);
    if (result && result.length > 0) {
        let excel = require('node-xlsxwriter.node');
        let ret = excel.test(filename, result, []);
        let updateResult = yield uploadFile(filename);
        if (typeof updateResult != 'Object') {
            updateResult = JSON.parse(updateResult);
        }
        if (updateResult.code == 0 && updateResult.uuid) {
            sql = "update sr_sys_export set statuscode=2,path='" + updateResult.uuid + "' where id=@id@";
            sql = db.makeSQL(sql, data)
            let result = yield wPool.query(sql);
        }
    }
    else {
        sql = "update sr_sys_export set statuscode=3 where id=@id@";
        sql = db.makeSQL(sql, data)
        let result = yield wPool.query(sql);
    }
}

function CurentTimeNoBlank() {
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //分

    var clock = year + "";

    if (month < 10)
        clock += "0";

    clock += month + "";

    if (day < 10)
        clock += "0";

    clock += day + "";

    if (hh < 10)
        clock += "0";

    clock += hh + "";
    if (mm < 10) clock += '0';
    clock += mm + "";
    if (ss < 10) clock += '0';
    clock += ss;
    return (clock);
}

var uploadFile = function (filepath) {
    return new Promise(function (resolve, reject) {
        var innerid = sc.guid();
        var exec = require('child_process').exec;
        //调用小工具
        exec('node ' + sc.formatString("$(CurrentDirectory)../scResource/resClient/resClient.js") + ' upload -s ' +
            app.conf.scResource.resourceHost + ':' + app.conf.scResource.httpPort + ' -F ' + innerid + ' -t temp -p sr -P ' + filepath
            , { timeout: 10000 }, function (err, msg) {
                 fs.unlinkSync(filepath);
                if (err) {
                    reject(err)
                } else {
                    try {
                        console.log(JSON.stringify(msg));
                        if (JSON.parse(msg).code == 0) {
                            resolve(msg);
                        } else {
                            reject(msg);
                        }
                    }
                    catch (e) {
                        console.error(e.stack);
                        reject(e.stack);
                    }
                }
            })
    })
};