//加载该模块路由
var path = require('path');
var fs = require('fs');
var sc = require('smartacjs');
var app = sc.app();

var allRoutes = [];
var allRoutesInfo = [];
exports.allRoutes = allRoutes;
exports.allRoutesInfo = allRoutesInfo;

//加载路由
exports.loadRoute = function () {
    //项目后端根目录
    var programRoot = sc.formatString('$(CurrentDirectory)js');
    var fileArr = fs.readdirSync(programRoot);
    //遍历该目录
    fileArr.forEach(function (file) {
        var filePath = path.join(programRoot, file);
        var stat = fs.lstatSync(filePath);
        //不是文件夹则直接退出
        if (!stat.isDirectory()) return;
        //如果该级目录下面存在NO标示文件，则无需加载
        if (fs.existsSync(path.join(filePath, 'NO_REQUIRE'))) return;
        //如果模块下面不包含module_main.js，则无需加载
        if (!fs.existsSync(path.join(filePath, 'module_main.js'))) return;
        //加载各个模块下面的module_main.js
        require(path.join(filePath, 'module_main.js'));
    })
};


//各个模块自己传路由路径加载路由
function loadFile(filePath) {
    var routeObj = require(filePath);
    //如果包含autoroute属性，则进行解析
    if (routeObj.autoroute) {
        for (var method in routeObj.autoroute) {
            var routeObject = routeObj.autoroute[method];
            if (!routeObject) {
                break;
            }

            for (var routeRule in routeObject) {
                //func获取得到的就是上面对应各项的处理函数
                var routeUrl = routeObject[routeRule];

                if (routeUrl != undefined) {
                    allRoutes.push(routeRule);
                    if (!routeUrl.middleWare) {
                        allRoutesInfo.push({ method: method, routeRule: routeRule, func: routeUrl });
                    }
                    else {
                        allRoutesInfo.push({
                            method: method,
                            routeRule: routeRule,
                            middleWare: routeUrl.middleWare,
                            func: routeUrl.func
                        });
                    }
                }
            }
        }
    }
}
exports.loadFile = loadFile

function readdir(routesDir) {
    var files = fs.readdirSync(routesDir);

    files.forEach(function (path) {
        //routes目录下的文件路径
        var filePath = routesDir + "/" + path;
        var stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            //递归执行函数
            readdir(filePath);
        } else {
            var pathExtend = require('path');
            if (pathExtend.extname(filePath) == '.js') {
                //加载文件并解析
                loadFile(filePath);
            }
        }
    });
}
exports.readdir = readdir;
