/**
 * Created by Simon on 2016/5/3.
 */
var sc = require('smartacjs');
var app = sc.app();

//加载自己模块的路由
app.module.readdir(sc.formatString('$(CurrentDirectory)js/sr/router'));