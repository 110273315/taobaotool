// exports.autoroute = {
//     get: {
//         '/api/ueditorServerUrl': ueditor
//     },
//     post: {
//         '/api/ueditorServerUrl': ueditor
//     }
// };
// var fs = require('fs');
// var fse = require('fs-extra');
// var sc = require('smartacjs');
// var app = sc.app();
// var path = require('path');
// var moment = require('moment');
//
// function ueditor(req, res) {
//     console.log('Start call ueditor!!!')
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,X_Requested_With')
//     //ueditor文件存放目录
//     var ueditorPath = sc.formatString("$(CurrentDirectory)js/ueditor");
//     //若不存在该目录，则创建；存在则不用管；
//     fse.mkdirsSync(ueditorPath);
//     console.log('收到的参数req.query：'+JSON.stringify(req.query))
//     if (req.query.action === 'uploadimage') {
//         //原始文件名
//         console.log('action name is uploadimage!!!')
//         var orgName = req.files.upfile.originalFilename;
//         console.log('orgName:'+orgName);
//         //后缀名
//         var extName = orgName.substring(orgName.lastIndexOf('.'), orgName.length);
//         //上传文件名
//         var filename = sc.guid22() + extName;
//         //上传资源服务器
//         console.log('url:'+'http://' + app.conf.scResource.resourceDomain + '/resource/');
//         upload(filename, req.files.upfile.path).then(function (uuid) {
//             console.log('上传成功，得到的uuid:'+uuid);
//             res.json({
//                 'url': 'http://' + app.conf.scResource.resourceDomain + '/resource/' + uuid,
//                 'title': filename,
//                 'original': filename,
//                 'state': 'SUCCESS'
//             });
//             //将文件名变更为uuid+后缀，为了方便获取图片列表，能够和资源服务器上资源对应
//             filename = uuid + extName;
//             //移动文件
//             fse.move(req.files.upfile.path, path.join(ueditorPath, filename), function (err) {
//                 if (err) console.error('ueditor移动文件错误:' + err);
//             })
//         }).catch(function (err) {
//             console.error('upload 失败：'+err);
//         });
//     }
//     //  客户端发起图片列表请求
//     else if (req.query.action === 'listimage') {
//         //遍历资源服务器文件夹
//         var files = fs.readdirSync(ueditorPath);
//         var list = [];
//         files.forEach(function (file) {
//             //资源服务器uuid
//             var uuid = file.substring(0, file.lastIndexOf('.'));
//             var temp = {};
//             temp.url = 'http://' + app.conf.scResource.resourceDomain + '/resource/' + uuid;
//             list.push(temp);
//         })
//         if (req.query.callback) {
//             res.send(req.query.callback + '(' + JSON.stringify({
//                 "state": "SUCCESS",
//                 "list": list,
//                 "start": 1,
//                 "total": list.length
//             }) + ')');
//         } else {
//             res.send('(' + JSON.stringify({
//                 "state": "SUCCESS",
//                 "list": list,
//                 "start": 1,
//                 "total": list.length
//             }) + ')');
//         }
//     }
//     // 客户端发起其它请求
//     else {
//         var configPath = sc.formatString("$(CurrentDirectory)/js/editorConfig.json");
//         var data = fs.readFileSync(configPath);
//         data = data.toString().replace(/UeditorHost/g, '');  //using.setting.control.UeditorHost
//         if (req.query.callback) {
//             res.send(req.query.callback + '(' + data + ')');
//         } else {
//             res.send('(' + data + ')');
//         }
//         //遍历资源服务器文件夹
//         var files = fs.readdirSync(ueditorPath);
//         files.forEach(function (file) {
//             var stat = fs.statSync(path.join(ueditorPath,file));
//             //删除7天前的文件
//             if(moment(stat.ctime).add(7,'d') < new Date()){
//                 fs.unlinkSync(path.join(ueditorPath,file));
//             }
//         })
//     }
// }
//
// /**
//  * 资源上传
//  * @param filename     文件名称
//  * @param filePath     资源目录地址 文件全路径
//  */
// function upload(filename, filePath) {
//     console.log('filename:'+filename);
//     console.log('filePath:'+filePath);
//     return new Promise(function (success, fail) {
//         var http = require('http');
//         var boundaryKey = '----' + new Date().getTime();
//         var options = {
//             host: app.conf.scResource.resourceDomain,
//             method: 'POST',
//             path: '/resource/upload?type=2&filename=' + filename + '&program_type=SSADMIN',//上传服务路径
//             headers: {
//                 'Content-Type': 'multipart/form-data; boundary=' + boundaryKey
//             }
//         };
//
//         console.log('options:'+JSON.stringify(options));
//         var req = http.request(options, function (res) {
//             res.setEncoding('utf8');
//             var uuid = "";
//             res.on('data', function (chunk) {
//                 uuid += chunk;
//             });
//             res.on('end', function () {
//                 success(JSON.parse(uuid).uuid);
//             });
//             res.on('error', function (err) {
//                 console.error('请求失败：'+err);
//             });
//         });
//         req.write(
//             '--' + boundaryKey + '\r\n' +
//             'Content-Disposition: form-data; name="upload"; filename="' + filename + '"\r\n' +
//             'Content-Type: application/octet-stream' + '\r\n\r\n'
//         );
//         //设置100M的缓冲区
//         var fileStream = fs.createReadStream(filePath, { bufferSize: 100 * 1024 * 1024 });
//         fileStream.pipe(req, { end: false });
//         fileStream.on('end', function () {
//             req.end('\r\n--' + boundaryKey + '--');
//         });
//         //监听流的错误事件
//         fileStream.on('error', function (err) {
//             console.error(JSON.stringify({ code: 10, msg: err.message.toString() }));
//         });
//     });
// }