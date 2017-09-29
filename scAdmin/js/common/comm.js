/**
 SC公用函数类库，此处放置的函数相对独立，不涉及到
 任何业务的部分，只是单纯的算法的实现

 Update Note：
 2015/3/20 ：Created by michael

 @module libs
 */

/**
 * comm对象
 * @class comm 系统函数
 * @constructor
 */

var sc = require('smartacjs'),
    crypto = require('crypto'),
    Xml2js = require('xml2js'),
    xmlParser = new Xml2js.Parser(),
    fs = require('fs'),
    path = require('path'),
    util = require('util'),
    _ = sc._,
    config = sc.app().conf.scAdmin,
    resCode = require('../resCode.js'),
    app = sc.app();



// 初始化编解码器
var protoFile = path.normalize(sc.formatString("$(CurrentDirectory)../protocol/sc_system.proto.js"));
pbEncoder = sc.createPBEncoder(protoFile, "system", "Message");

function _toResponseJson(errCode, errMsg, msgBody) {
    return {
        errcode: errCode,
        errmsg: errMsg,
        msgbody: msgBody
    };
}

/**
 * 生成一个从x1到x2的随机整数
 * @method radRangeNumber
 * @param  {int} x1 随机整数的最小值
 * @param  {int} x2 随机整数的对大值
 * @returns {number} 生成好的随机整数
 */
var radRangeNumber = function (x1, x2) {
    if (typeof x1 != 'number' && typeof x2 != 'number') {
        throw new TypeError('x1 and x2 must be int!');
    }
    if (x1 >= x2) {
        throw 'x2 must be greater than x1';
    }

    x1 = Math.min(x1, x2);
    x2 = Math.max(x1, x2);

    return x1 + Math.floor(Math.random() * (x2 - x1 + 1));
};

/**
 * 生成UUID
 * @method  uuid_v4
 */
var uuid_v4 = function () {
    return sc.guid();
};

/**
 * MD5加密（异步）
 * @method md5
 * @param {String} data 加密数据
 * @param {function} callback 回调函数
 **/
var md5 = function (data, callback) {
    nextTick(null, crypto.createHash('md5').update(data).digest('hex'), callback);
};

/**
 * MD5加密（同步）
 * @method md5Sync
 * @param {String} data 加密数据
 **/
var md5Sync = function (data) {
    return crypto.createHash('md5').update(data).digest('hex');
};

/**
 * 公用回调函数
 */
var nextTick = function () {
    if (!arguments || arguments.length < 0 || typeof arguments[arguments.length - 1] != 'function') {
        throw 'The callback function is required!';
    }

    var args = [].slice.call(arguments);
    var fn = args.pop();
    process.nextTick(function () {
        fn.apply(this, args);
    }.bind(this));
};

/**
 * xml转换成json
 * @method xml2json
 * @param {String} xml xml字符串
 * @param {function} callback 回调函数
 */
var xml2json = function (xml, callback) {
    callback = callback ? callback : function () { };
    xmlParser.parseString(xml, function (err, result) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, result);
    });
};

/**
 * 克隆对象
 * @method clone
 * @param {String} obj xml字符串
 * @param {function} callback 回调函数
 */
var clone = util.deprecate(function (obj) {
    //Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;
    //Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    //Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    //Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("无法克隆：" + obj);
}, '此方法将被废弃，请使用underscore的extend方法。');

/**
 * 封装响应客户端object
 * @method response
 * @param {Number} status 状态码
 * @param {String} errMsg 错误消息
 * @param {Object} bodyMsg 响应内容
 * @return {Object} 拼装好的object
 */
var response = function ( /*[status[, errMsg [, bodyMsg]]]*/) {
    var status,
        errMsg,
        bodyMsg;

    // 无参数，默认ok
    if (arguments === undefined || arguments === {} || arguments === null || ('length' in arguments && arguments.length === 0)) {
        return resCode.resJson('system', 'ok');
    }

    // 只有一个参数的情况
    else if ('length' in arguments) {

        // 一个参数
        if (arguments.length === 1) {

            // 错误消息
            if (typeof arguments[0] === 'string') {
                status = -1;
                errMsg = arguments[0];
                bodyMsg = {};

                return _toResponseJson(status, errMsg, bodyMsg);
            }

            // 正常响应
            else if (arguments[0] !== undefined) {
                status = 0;
                errMsg = '';
                bodyMsg = arguments[0];

                return _toResponseJson(status, errMsg, bodyMsg);
            }

            // 抛出错误
            throw new Error('type error!');
        }

        // 两个参数
        else if (arguments.length === 2) {

            // 错误消息
            if (typeof arguments[1] === 'string') {
                status = arguments[0];
                errMsg = arguments[1];
                bodyMsg = {};

                return _toResponseJson(status, errMsg, bodyMsg);
            }

            // 正常响应
            else if (typeof arguments[1] !== undefined) {
                status = arguments[0];
                errMsg = '';
                bodyMsg = arguments[1];

                return _toResponseJson(status, errMsg, bodyMsg);
            }

            // 抛出错误
            throw new Error('type error!');
        }

        // 三个及三个以上参数
        else if (arguments.length > 2) {
            status = arguments[0];
            errMsg = arguments[1];
            bodyMsg = arguments[2];

            return _toResponseJson(status, errMsg, bodyMsg);
        }

        // 抛出错误
        throw new Error('args error!');
    }

    // 抛出错误
    throw new Error('args error!');
}

/**
 * 统一错误信息
 * @param msg 错误消息
 * @returns {{message: *}}
 */
var error = function (msg) {
    return {
        message: msg
    };
}

/**
 * 分页时，处理排序和分页
 * @method sortAndPage
 * @param {json} sort 排序
 * @param {json} page 分页
 * @returns {string} 返回拼装成对应的SQL
 */
var sortAndPage = function (sort, page) {
    var sp = {
        sort: ' ORDER BY modifiedtime DESC ',
        page: ' LIMIT 0,' + config.defaultPageSize
    };

    //处理排序
    if (sort && sort.column) {
        if (sort.type) {
            sp.sort = 'ORDER BY ' + sort.column + ' ' + sort.type;
        } else {
            sp.sort = 'ORDER BY ' + sort.column + ' DESC ';
        }
    }

    //处理分页
    if (page && page.num && page.index) {
        sp.page = ' LIMIT ' + (page.num * page.index - page.num) + ',' + page.num;
    }

    return sp;
}

/**
 * 压缩包(只能压缩文件夹)
 * @method zip
 * @param {string} folder 压缩文件夹路径（绝对）
 * @param {string} zipname 压缩包路径（带zip后缀）（绝对）
 * @param {function} callback 回调
 */
var zip = function (folder, zipname, callback) {
    callback = callback ? callback : function () { };
    var zip = new easyzip.EasyZip();
    //添加压缩文件夹
    zip.zipFolder(folder, function (err) {
        if (err) return callback("Folder is not find", null);
        //压缩文件
        zip.writeToFile(zipname, function (err) {
            if (err) return callback(err, null);
            callback(null, 'ok');
        });
    });
}

/**
 * 解压缩包
 * @method unzip
 * @param {string} zipPath 压缩包路径（绝对）
 * @param {string}  unzipPath 解压路径（绝对）
 * @param {function} callback 回调
 */
var unzip = function (zipPath, unzipPath, callback) {
    callback = callback ? callback : function () { };
    //判断是否存在压缩包
    fs.exists(zipPath, function (exists) {
        if (!exists) return callback('zipPath is not esists', null);
        //以流的方式进行解压缩
        var unzipExtractor = unzips.Extract({
            path: unzipPath
        });
        //添加错误监听事件
        unzipExtractor.on('error', function (err) {
            callback(err, null);
        });
        //添加完成监听事件
        unzipExtractor.on('finish', function () {
            callback(null, 'ok');
        });
        fs.createReadStream(zipPath)
            .on('error', function (err) {
                callback(err, null);
            })
            .pipe(unzipExtractor);
    })
}

/**
 * 图片等比压缩（单个）
 * @method imageCompression
 * @param {string} imagePath 图片地址（绝对）
 * @param {int} width 宽度
 * @param {string} targetPath 目标地址（绝对）
 * @param {function} callback 回调
 */
var imageCompression = function (imagePath, width, targetPath, callback) {
    callback = callback ? callback : function () { };
    try {
        //加载图片
        images(imagePath)
            .size(width)
            .save(targetPath);
        callback(null, 'ok');
    } catch (e) {
        callback(e, null);
    }
}

/**
 * 压缩图片质量(批量)
 * @method imageByQuality
 * @param {string} imagesPath 图片压缩根目录(绝对)
 * @param {string} targetPath 图片压缩后根目录(绝对)
 * @param {function} callback 回调
 */
var imageByQuality = function (imagesPath, targetPath, callback) {
    callback = callback ? callback : function () { };
    new Imagemin()
        .src(path.join(imagesPath, '/*.{gif,jpg,png,svg}'))
        .dest(targetPath)
        .use(Imagemin.gifsicle({
            interlaced: true
        }))
        .use(Imagemin.jpegtran({
            progressive: true
        }))
        .use(Imagemin.optipng({
            optimizationLevel: 3
        }))
        .use(Imagemin.svgo())
        .run(function (err, files) {
            if (err) return callback(err, null);
            callback(null, 'ok');
        });
}

/**
 * 深度创建文件夹
 * @method mkdirsSync
 * @param {string} path 文件夹路径
 * @returns {boolean} true成功 false失败
 */
var mkdirsSync = function (path) {
    var exist;

    exist = fs.existsSync(path);
    if (exist) return exist;

    var ps = path.split('/'),
        len = ps.length,
        i = 1,
        tmp;
    while (i++ < len) {
        tmp = ps.slice(0, i).join('/');
        if (!fs.existsSync(tmp)) {
            fs.mkdirSync(tmp, 777);
        }
    }
    return true;
}

/**
 * 剔除undefined值，返回空值
 * @method utrim
 * @param {object} content 需要检测的对象
 */
var utrim = function (content) {
    return (content == undefined ? "" : content);
}

/**
 * 替换指定key
 * @param {Object} obj
 * @param {Object} kv
 */
var renameKey = function (obj, kv) {
    return _.extend(_.omit(obj, _.keys(kv)),
        _.reduce(kv,
            function (result, v, k) {
                result[v] = obj[k];

                return result;
            }, {}
        )
    );
}

/**
 * 检查对象的对应key所对应的value是否为空
 * @param obj 检查对象
 * @param key 检查key
 * @returns {boolean} true不为空 false为空
 */
var checkEmpty = function (obj, key) {
    if (key in obj) {
        return !_.isEmpty(obj[key].toString());
    }

    return false;
}

/**
 * 判断对象是否包含对应key
 * @param {Object} obj 目标对象
 * @param {Array} keys 指定key
 * @param {Boolean} bl true或default表示所有都包含，false表示所有都不包含
 * @param {Function} extend 额外的判断
 */
var hasKeys = function (obj, keys, bl, extend) {
    if (!_.isObject(obj) || (!_.isString(keys) && !_.isArray(keys))) {
        return undefined;
    } else if (_.isObject(obj) && _.isString(keys)) {
        keys = [keys];
    }

    extend = _.isFunction(_.last(arguments)) ? _.last(arguments) : function () {
        return true
    };

    if (bl === false) {
        return _.reduce(keys, function (result, _key) {
            return result && !_.has(obj, _key);
        }, true);
    } else {
        return _.reduce(keys, function (result, _key) {
            return result && _.has(obj, _key) && extend.apply(null, [obj, _key]);
        }, true);
    }
}

/**
 * 判断对象是否不包含对应key
 * @param {Object} obj 目标对象
 * @param {Array} keys 指定key
 */
var noKeys = function (obj, keys) {
    return hasKeys(obj, keys, false);
}

/**
 * 发送基础数据变化消息
 */
var publishMsg = function (data) {
    var mqConn = app.res.getMQConnectionSync();
    //定义交换器
    mqConn.declareExchange('sc.system', 'fanout');
    var header = {
        sender: app.conf.instanceName,
        sender_type: app.programType
    };
    var obj = {};
    obj.header = header;
    obj.ntf_basedata_changed = data;
    mqConn.publishMessage("sc.system", "", pbEncoder.encode(obj));
}

exports.publishMsg = publishMsg;
exports.radRangeNumber = radRangeNumber;
exports.uuid = uuid_v4;
exports.md5 = md5;
exports.nextTick = nextTick;
exports.xml2json = xml2json;
exports.clone = clone;
exports.response = response;
exports.error = error;
exports.zip = zip;
exports.unzip = unzip;
exports.imageCompression = imageCompression;
exports.sortAndPage = sortAndPage;
exports.imageByQuality = imageByQuality;
exports.mkdirsSync = mkdirsSync;
exports.md5Sync = md5Sync;
exports.utrim = utrim;
exports.renameKey = renameKey;
exports.checkEmpty = checkEmpty;
exports.hasKeys = hasKeys;
exports.noKeys = noKeys;