/*
 *UI Framework公共类库
 * @autor         lidongliang
 * @date          2014-03-21
 */
var $ui = {
    method: '',
    language: {}, // 基本多语言配置信息
    languageObj: {}, // 各大模块多语言配置信息
    ui_location: {}, // angular中的$location
    pageSize: 10, // 列表每页数据条数
    languageid: 'Ch',
    paging: {},
    user: {}, // 存储用户信息
    limits: [], // 存储用户权限
    alertHandles: [], // 存储使用提示信息中settimeout的句柄
    scope: {}, //index页面的作用域
    isLogin: function(argument) {
        return $ui.getItem('sessionid') && (!$ui.user || !$ui.user.innerid);
    },
    /*
     * 当前是哪个项目
     */
    getProjectId: function(url) {
        var projectId = 'SC';
        var tempProjectId = url!== undefined ? url.replace('/', '').substr(0, 2) : location.hash.replace('#/', '').substr(0, 2);
        if (tempProjectId && homePageRoute[tempProjectId.toUpperCase()]) {
            projectId = tempProjectId.toUpperCase(); // SC,SS,SA,SP...
        }
        return projectId;
    },
    /*
    * 设置项目
    */
    setProjectId: function (projectId) {
        if(projectId.toLowerCase() !== 'common'){
            $ui.scope.project_name = projectId;
            this.writeCookie({
                name: "projectid",
                value: projectId
            });
        }
    },
    /*
     * 获取页面权限值
     * @key   {string}页面Key
     */
    getTotalValue: function(key) {
        // debugger;
        if ($ui.limits) { // $ui.limits 存所有页面的权限的数组
            for (var i = 0; i < $ui.limits.length; i++) {
                if ($ui.limits[i].menukey == key) {
                    // console.info('find key:' + key + ';' +  $ui.limits[i].permission);
                    return $ui.limits[i].permission;
                }
            }
        }
        // console.error('not find:' + key);
        return 0; // 找不到的话，表示没有权限
    },
    /*
     * 获取页面权限集
     * @key   {string}页面Key
     */
    getLimits: function(key) {
        var limits = {};
        var totalvalue = $ui.getTotalValue(key);
        for (var key in USERLIMITS) {
            if (totalvalue & USERLIMITS[key]) {
                limits[key] = true;
            }
        }
        return limits;
    },
    /*
     * 替换数组中空字符
     * @obj   {obj}数组
     */
    arrayReplace: function(obj) {
        var vals = obj;
        try {
            $.each(vals, function(i, v) {
                if (v === "" || v === undefined) {
                    vals[i] = null;
                }
            })
            return vals;
        } catch (e) {
            return obj;
        }
    },
    /*
     * 模块tab初始化
     * @obj     {string} 操作对象
     * @index    {int}  要显示的tab序列号
     * @ismenu   {bool} 是否是菜单项
     */
    initTab: function(obj, index, ismenu) {
        setTimeout(function() {

            if (index != undefined && index >= 0 && index < $(obj).find('li').length) index = index;
            else index = 0;
            $(obj).find('li:eq(' + index + ') a').tab('show');
            $(obj).find('a').click(function(e) {
                e.preventDefault();
                $(this).tab('show');

                //获取一级模块（BASE、SS、SA）
                var _href = $(this).attr('href').toUpperCase().substr(1);
                // debugger;
                //根据配置文件中配置的模块加载模块的路由
                for (var key in homePageRoute) {
                    if (key == _href) {
                        $ui.directTo({
                            url: homePageRoute[key],
                            key: ''
                        });
                        break;
                    }
                }
            })
            if (ismenu) initmenu();
        }, 0);
    },
    /*
     * 菜单tab切换
     */
    inverseTab: function(obj, index) {
        var _this = $(obj);
        if (index < 0) {
            setTimeout(function() {
                _this.children('.tab-nav').each(function() {
                    if ($(this).hasClass('active')) {
                        var _id = $(this).attr('id');
                        $("#tab-content").find('div.tab-pane').each(function() {
                            if ($(this).attr('id') == _id) {
                                $("#tab-content").find("div.tab-pane").removeClass('active');
                                $(this).addClass('active');
                            }
                        })
                    }
                });
            }, 0);
        } else {
            _this.children('.tab-nav').each(function() {
                if ($(this).children('li').length > 1) {
                    $(this).children('li').unbind('click');
                    $(this).children('li').bind('click', function() {
                        if (!$(this).hasClass('active')) {
                            $(this).parent().children('li').removeClass('active');
                            $(this).addClass('active');
                            var _id = $(this).attr('id');
                            $('div.tab-child').each(function() {
                                if ($(this).attr('id') == _id) {
                                    $(this).parent().children('.tab-child').removeClass('active');
                                    $(this).addClass('active');
                                }
                            })
                        }
                    })
                }
            });
        }
    },
    /*
     * 生成Guid
     */
    newGuid: function() {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                guid += "-";
        }
        return guid;
    },
    /*
     * 操作提示框
     * @msg         {string} 提示信息.
     * @type        {string} 提示框类型(warning,error,success,info).
     * @close       {bool} 是否需要关闭按钮(true ,false)
     * @options  {msg:"",type:"",colse:"",callback: }
     */
    alert: function(options) {
        var alertmain = $(".alert");
        alertmain.html("");
        if (options.close != undefined && options.close == true) {
            alertmain.append("<button type=\"button\" class=\"close\">&times;</button>");
        }
        if (options.type == undefined || options.type == "") {
            options.type = "warning";
        }
        switch (options.type) {
            case "warning":
                alertmain.append(String.format("<i class=\"icon-exclamation-sign\"></i>{0}", options.msg));
                alertmain.attr("class", "alert-warning alert");
                break;
            case "error":
                alertmain.append(String.format("<i class=\"icon-minus-sign\"></i>{0}", options.msg));
                alertmain.attr("class", "alert-error alert");
                break;
            case "success":
                alertmain.append(String.format("<i class=\"icon-ok-sign\"></i>{0}", options.msg));
                alertmain.attr("class", "alert-success alert");
                break;
            case "info":
                alertmain.append(String.format("<i class=\"icon-info-sign\"></i>{0}", options.msg));
                alertmain.attr("class", "alert-info alert");
                break;
        }
        $('.alert .close').bind('click', function() {
            alertmain.fadeOut();
            $.each($ui.alertHandles, function(i, obj) {
                clearTimeout(obj.handle);
                if (obj.options.callback) {
                    obj.options.callback();
                }
            });
            $ui.alertHandles = [];

        })
        alertmain.fadeIn();
        var handle = setTimeout(function() {
            if ($ui.alertHandles.length == 1) {
                alertmain.fadeOut();
            }
            var obj = $ui.alertHandles.shift();
            if (obj.options.callback) {
                obj.options.callback();
            }

        }, 3000);
        $ui.alertHandles.push({
            handle: handle,
            options: options
        });
    },
    /*
     * 确认框
     * @head           {string} 标题
     * @content        {string} 内容
     * @callback1      {string} 确认回调函数
     * @callback2      {string} 取消回调函数
     * @options        {head:"",content:"",success:function(){},cancel:function(){}}
     */
    confirm: function(options) {
        var obj = $("#myConfirm");
        obj.attr('tabindex', '-1');
        obj.attr('role', 'dialog');
        obj.attr('aria-labelledby', 'myModalLabel');
        obj.attr('aria-hidden', 'true');
        obj.css('width', '300px');
        obj.css('margin-left', '-150px');
        var strcontent;
        strcontent = '<div class="modal-header"><button type="button" class="close confirm" aria-hidden="true">x</button><h3 id="myModalLabel">{0}</h3></div><div class="modal-body" ><p><img src="./common/resources/images/question.jpg"><span class="modal-detail">{1}<span></p></div><div class="modal-footer"><a class="btn_base btn_pro btn_em confirmSure"><i class="icon_save"></i><span>{2}</span></a><a class="btn_base btn_pro confirm"><i class="icon_cancel"></i><span>{3}</span></a></div>';
        if (!options.content) {
            options.content = $ui.language.Base.IsDelete;
        }
        strcontent = String.format(strcontent, options.head, options.content, $ui.language.Operate.Confirm, $ui.language.Operate.Cancel);
        obj.html(strcontent);
        $('.confirmSure').bind('click', function() {
            if (options.success) options.success();
            obj.modal('hide');
        });
        $('.confirm').bind('click', function() {
            if (options.cancel) options.cancel();
            obj.modal('hide');
        });
        obj.modal('toggle');
        options.init && options.init();
    },
    /*
     * 对话框
     * @url            {string} 页面地址
     * @head           {string} 标题
     * @width          {int} 宽
     * @height         {int} 高
     * @name           {string} modal id
     * @callback       {string} 函数
     * options         {url:"",head:"",width:400,height:300,id:"",callback:function(){}}
     */
    dialog: function(options) {
        var obj = $('#' + options.id);
        if (obj.length <= 0)
            $('body').append("<div id='" + options.id + "' class='modal hide fade'></div>");
        obj = $('#' + options.id)
        obj.attr('tabindex', '-1');
        obj.attr('role', 'dialog');
        obj.attr('aria-labelledby', 'myModalLabel');
        obj.attr('aria-hidden', 'true');
        obj.css('width', options.width + 'px');
        obj.css('margin-left', (0 - options.width / 2) + "px");
        var strcontent;
        strcontent = "<div class=\"modal-header\"><button id=\"colse_{2}\" type=\"button\" class=\"close\" aria-hidden=\"true\">x</button><h3 id=\"myModalLabel\">{0}</h3></div><div class=\"modal-body\" style=\"max-height:{1}px;background:#ccc\"></div>";
        strcontent = String.format(strcontent, options.head, options.height, options.id);
        obj.html(strcontent);
        obj.modal({
            backdrop: 'static',
            remote: options.url
        }).on('hidden', function() {
            obj.removeData('modal');
            document.body.parentNode.style.overflow = "auto";
        }).on('shown', function() {
            document.body.parentNode.style.overflow = "hidden";
        });
        if (options.callback != undefined && options.callback != null && options.callback != "") {
            $('#colse_' + options.id).bind('click', function() {
                obj.modal('hide');
                options.callback()
            });
        }
    },
    /*
     * 设置SessionStorage
     * @key      关键字
     * @value    值
     */
    setItem: function(key, value) {
        sessionStorage.setItem(key, value)
    },
    /*
     * 获取SessionStorage
     * @key      关键字
     */
    getItem: function(key) {
        return sessionStorage.getItem(key)
    },
    /*
     * 写入缓存
     * @name              {string} 名称
     * @value             {string} 值
     * @options  {name:"",value:""}
     */
    writeCookie: function(options) {
        var date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 3600 * 1000);
        var cookie = options.name + "=" + options.value + ";path =/;expires = " + date;
        document.cookie = cookie;
    },
    /*
     * 获取缓存
     * @name              {string} 名称
     */
    readCookie: function(name) {
        var key = name;
        var str = document.cookie.split(";");
        for (var i = 0; i < str.length; i++) {
            var str2 = str[i].split("=");
            if (i != 0) key = ' ' + name; //除第一个Cookie外，其它要在前面加上空格 .
            if (str2[0] == key) {
                return str2[1];
            }
        }
        return '';
    },
    /*
     * 清除缓存
     * @name              {string} 名称
     */
    clearCookie: function(name) {
        var dt = new Date();
        var value = this.readCookie(name);
        if (value != '') {
            dt.setTime(dt.getTime() - 2 * 24 * 3600 * 1000);
            var cookie2 = name + "= " + value + ";path=/;expires = " + dt;
            document.cookie = cookie2;
        }
    },
    /*
     * json对象转字符串形式
     */
    jsonArray2str: function(jsonArray) {
        var JsonArrayString = "[";
        for (var i = 0; i < jsonArray.length; i++) {
            JsonArrayString = JsonArrayString + this.json2str(jsonArray[i]) + ",";
        }
        JsonArrayString = JsonArrayString.substring(0, JsonArrayString.length - 1) + "]";
        return JsonArrayString;
    },
    json2str: function(o) {
        var arr = [];
        for (var i in o) arr.push("'" + i + "':" + this.fmt(o[i]));
        return '{' + arr.join(',') + '}';
    },
    fmt: function(s) {
        if (typeof s == 'object' && s != null) return this.json2str(s);
        return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
    },
    str2jsonArray: function(obj) {
        if (obj) {
            eval("var theJsonValue = " + obj);
            return theJsonValue;
        }
    },
    /*
     * ajax提交
     * @type        {string} 类型 init:get
     * @url         {string} 地址
     * @async       {bool} 异步 init:true
     * @data        {string} 参数
     * @success     {obj} 回调
     * @error       {obj} 回调
     * @moudle     {string}项目名称
     * @timeout     {int}超时时间（ms）
     * @menuKey  可选，页面key，验证权限用，默认为当前菜单的menuKey
     * @options     {type:"",url:"",data:"",async:"",success:function(){},error:function(){},moudle:""}
     */
    ajax: function(options) {
        var r;
        //        var sessionidval = this.readCookie('sessionid');
        var sessionidval = this.getItem('sessionid');
        if (!options.data)
            options.data = {}
        options.data["sessionid"] = sessionidval.toLocaleLowerCase();
        var languid = this.readCookie("language");
        options.data["languageid"] = languid == "" ? this.languageid : languid;
        // 在点击菜单时，设置 menukey，如果好似刷新进来的话，就取 $('.bondi-blue-on') 的值
        options.data.menuKey = options.menuKey || window.menuKey || $('.page__item--current').filter(':visible').data('menu-key');//'MenuManagement'
        try {
            var timeout = 20000;
            if (!!options.timeout) {
                timeout = options.timeout;
            }
            // console.log(BASEPATH[options.moudle] + '--' + options.url);
            $.ajax({
                type: options.type ? options.type : "get",
                url: BASEPATH[options.moudle] + options.url,
                //data: options.data ? { param: options.data, sessionid: sessionidval} : { param: "", sessionid: sessionidval },
                data: options.data,
                timeout: timeout,
                async: options.async == undefined ? true : options.async,
                datatype: "jsonp",
                contentType: options.contentType,
                beforeSend: function() {
                    if($.isFunction(options.beforeSend)) options.beforeSend();
                },
                success: function(data) {
                    var isOldVision = data.Status !== undefined;
                    var status;
                    if(!isOldVision){
                        status = data.errcode;
                    } else {
                        status = data.Status;
                    }


                    var statusDetail;

                    switch (status) {
                        case 3002:
                            // if(isOldVision){
                            //     debugger;
                            // }

                            $ui.clearCookie("sessionid");
                            sessionStorage.clear();
                            //alert("3002 | sessionStorage.clear(); | common.js:579");
                            window.location.href = "login.html";
                            break;
                        case 0:
                        case 200:
                            if((status === 0 && !isOldVision) || (status === 200 && isOldVision)){
                                if ($.isFunction(options.success)) {
                                    options.success(data);
                                }
                            }
                            break;
                        default:
                            var showError = options.showError === undefined ? true : false; // 出错时，是否显示错误信息。默认为true
                            if (showError) {
                                var errmsg = $ui.scope.languageBase.Error[status] || $ui.scope.languageBase.Error[-1];
                                // debugger;
                                $ui.alert({
                                    msg: errmsg,
                                    // msg: errmsg + ":" + BASEPATH[options.moudle] + options.url,
                                    type: "error",
                                    close: true
                                });
                            }
                            r = null;
                            if ($.isFunction(options.error)) {
                                options.error(data);
                            }
                    }
                },
                error: function(e) {
                    r = null;
                    if ($.isFunction(options.error)) {
                        options.error(false, e);
                    }
                },

            });
            return r;
        } catch (e) {
            r = null;
        }
    },
    /*
     * 文件上传
     * @fileSelector          {string}       上传控件选择器
     * @type            {string}       上传文件类型
     * @moudle          {string}       模块名称
     * @useStaticRoute  {bool}         是否使用静态路由（新）【使用静态路由则在返回的地址中不包含后台文件的相对路径】
     * @data            {}             文件流
     * options          {json          {fileSelector:'', type:FILETYPE.IMAGE, moudle:'BASE'}
     * obj              {HtmlElement}  上传控件本身（如果参数fileId存在，则无效）
     * will_save        {boolean}      是否存数据库
     * pathsep          {boolean}      上传的文件保存路径区分(true:放在web端，但web和service必须在同一服务器上)
     */
    fileupload: function(options) {
        var formdata = new FormData();
        var fileObj = null;
        var maxSizeErrorStr = ''; //超过最大大小后的错误文本
        var returnVal = false;
        var uuid;
        if (options.fileSelector) {
            fileObj = $(options.fileSelector)[0].files;
        } else if (options.obj) {
            fileObj = options.obj.files;
        }
        //debugger
        var MaxSize = 0;
        if (fileObj.length > 0) {
            var extension = '';
            var file = fileObj[0];

            //获取文件扩展名
            if (file.name != '' && file.name.indexOf('.') > -1) {
                extension = file.name.substr(file.name.indexOf('.') + 1);
            }
            //文件类型校验
            if (options.type == FILETYPE.IMAGE && FILEMIME.IMAGE.indexOf(file.type) == -1) {
                $ui.alert({
                    msg: $ui.language.Base.ImageTypeError,
                    type: 'error',
                    close: true
                });
                return false;
            } else if (options.type == FILETYPE.FILE && FILEMIME.FILE.indexOf(file.type) == -1 && !FILEEXTENTIONS.FILE.indexOf(extension)) {
                $ui.alert({
                    msg: $ui.language.Base.FileTypeError,
                    type: 'error',
                    close: true
                });
                return false;
            }else if (options.type == FILETYPE.AUDIO && FILEMIME.AUDIO.indexOf(file.type) == -1) {
                if(extension!="amr") {
                    //debugger
                    $ui.alert({
                        msg: $ui.language.Base.FileTypeError,
                        type: 'error',
                        close: true
                    });
                    return false;
                }
            }else if (options.type == FILETYPE.VIDEO && FILEMIME.VIDEO.indexOf(file.type) == -1) {
                if(extension!="rm"&&extension!="rmvb"&&extension!="flv") {
                    $ui.alert({
                        msg: $ui.language.Base.FileTypeError,
                        type: 'error',
                        close: true
                    });
                    return false;
                }
            }
            //文件大小验证
            if (file.size) {
                if (options.type == FILETYPE.IMAGE && file.size > FILESIZE.IMAGE) {
                    maxSizeErrorStr = String.format($ui.language.Base['MaxSizeImage'], FILESIZE.IMAGE / 1024 / 1024);
                } else if (options.type == FILETYPE.FILE && file.size > FILESIZE.FILE) {
                    maxSizeErrorStr = String.format($ui.language.Base['SingleMaxSize'], FILESIZE.FILE / 1024 / 1024);
                } else if (options.type == FILETYPE.AUDIO && file.size > FILESIZE.AUDIO) {
                    maxSizeErrorStr = String.format($ui.language.Base['SingleMaxSize'], FILESIZE.AUDIO / 1024 / 1024);
                } else if (options.type == FILETYPE.VIDEO && file.size > FILESIZE.VIDEO) {
                    maxSizeErrorStr = String.format($ui.language.Base['SingleMaxSize'], FILESIZE.VIDEO / 1024 / 1024);
                }
                MaxSize += file.size;
            }
            if (maxSizeErrorStr == '' && MaxSize > FILESIZE.TOTALFILE) {
                maxSizeErrorStr = String.format($ui.language.Base['MaxSizeFile'], FILESIZE.TOTALFILE / 1024 / 1024);
            }
            if (maxSizeErrorStr != '') {
                $ui.alert({
                    msg: maxSizeErrorStr,
                    type: 'error',
                    close: false
                });
                return '';
            }

            var ft = options.type ? options.type : FILETYPE.IMAGE;
            ft = options.useStaticRoute ? FILETYPE.FILE : ft; //如果使用静态路由，则全部为“FILETYPE.FILE”
            var fm = options.moudle ? options.moudle : 'BASE';
            formdata.append('upload', file);
            $.ajax({// 文件名用时间戳，目地是为了避免文件名中因为存在空格等特殊字符而造成的上传失败
                url: baseSetting.fileUploadPath + '/upload?type=2&filename=' + (new Date()).valueOf() + '.' + extension + '&program_type=' + fm, //上传服务路径,
                data: formdata,
                type: "post",
                cache: false,
                async: false,
                processData: false,
                contentType: false,
                success: function(data) {
                    var code = data.code;
                    if (code == "3002") {
                        debugger
                        alert("3002 | sessionStorage.clear(); | common.js:731");
                        window.location.href = "login.html";
                    } else if (code == "3010") {
                        $ui.alert({
                            msg: String.format($ui.language.Base.SingleMaxSize, FILESIZE.FILE / 1024 / 1024),
                            type: 'error',
                            close: false
                        });
                    } else if (code === 0) {
                        uuid = data.uuid;
                        returnVal = {
                            uuid: data.uuid,
                            path: baseSetting.fileUploadPath + '/' + uuid
                        };
                    } else {
                        $ui.alert({
                            msg: $ui.language.fileUpload.UploadFailed + '[' + data.msgbody + ']',
                            type: 'error',
                            close: false
                        });
                    }
                },
                error: function() {}
            });
        }

        if (uuid) {
            var $fileuploadWrap = $(options.fileSelector).closest('[data-provides="fileupload"]');
            var $preview = $fileuploadWrap.find('.thumbnail');
            var $text = $preview.find('.upload-text');


            var isImage = typeof fileObj[0].type !== "undefined" ? fileObj[0].type.match('image.*') : fileObj[0].name.match('\\.(gif|png|jpe?g)$');

            //如果是图片，就显示图片（base64转码）
            if (isImage) {
                var reader = new FileReader();
                $text.remove();
                reader.onload = function(e) {
                    // 如果从后台拿的不是立马有的。。。 baseSetting.fileUploadPath + '/resource/' + uuid;
                    $preview.css('background-image', 'url(' + e.target.result + ')');
                }
                reader.readAsDataURL(fileObj[0]);
            }
            //不是图片则显示文件名
            else {
                $text.text(fileObj[0].name);
            }

        }
        return returnVal;
    },
    /*
     * 多文件上传
     * container_id        {string}      容器id
     * upload_success      {function}    上传成功回调方法
     * delete_callback     {function}    单个删除回调方法
     * deleteall_callback  {function}    全部删除回调方法
     * will_save           {boolean}     是否存数据库
     * file_type           {string}      上传文件类型(IMAGE或者FILE)
     */
    plUpload: function(options) {
        if (options.container_id != '') {
            plupload(options.container_id, options.upload_success, options.delete_callback, options.deleteall_callback, options.will_save, options.file_type);
        }
    },
    /*
     * fileupload图片赋值
     * @wrapSelector     {string}       上传控件的选择器
     * @uuid             {string}       图片的uuid
     * @obj              {HtmlElement}  上传控件本身（如果参数id存在，则无效）
     * @module           {string}       模块名称
     * @useStaticRoute   {bool}         是否使用静态路由（新）【使用静态路由则在返回的地址中不包含后台文件的相对路径】
     */
    imgload: function(options) {
        if( options.wrapSelector){
            if (options.uuid || options.imgsrc) {
                var src = options.imgsrc || $ui.getResourceLocation(options.uuid);
                $(options.wrapSelector)
                    .css('background-image', 'url(' + src + ')')
                    .find('.upload-text')
                    .hide();// 用remove 会导致 upload-text 里的内容因为多语言的关系而报错。
            }else{
                $(options.wrapSelector)
                    .css('background-image', '')
                    .find('.upload-text')
                    .show();
            }
        }

    },
    /*
     * 获取之前上传资源的路径
     */
    getResourceLocation: function(uuid) {
        return baseSetting.fileUploadPath + '/' + uuid;
    },
    /*
     * checkbox全选操作
     * @id            {string} 全选checkbox Id
     * @area           {string}外部包含元素id
     */
    chkAll: function(id, area) {
        $("#" + id).bind("click", function() {
            if ($(this).attr("checked") == "checked") {
                $("#" + area + " input[type=checkbox]").attr("checked", true);
            } else {
                $("#" + area + " input[type=checkbox]").attr("checked", false);
            }
        });
        $("#" + area + " input[type=checkbox][id!=" + id + "]").bind("click", function() {
            if ($(this).attr("checked") != "checked") {
                $("#" + id).attr("checked", false);
            } else {
                if ($("#" + area + " input[type=checkbox][id!=" + id + "]").attr("checked") == "checked") {
                    $("#" + id).attr("checked", true);
                }
            }
        });
    },
    /*
     * current  {int}当前页
     * total    {int}总页数
     * option   {current:1,total:10}
     */
    paging: function(options) {
        var a = [];
        if (options.current == 1) {
            a.push({
                "name": "Page_first",
                "page": 1,
                "disabled": true,
                "class": ""
            });
            a.push({
                "name": "Page_prev",
                "page": 1,
                "disabled": true,
                "class": ""
            });
        } else {
            a.push({
                "name": "Page_first",
                "page": 1,
                "disabled": false,
                "class": ""
            });
            a.push({
                "name": "Page_prev",
                "page": (options.current - 1),
                "disabled": false,
                "class": ""
            });
        }

        if (options.total <= 5) {
            //TODO
            for (var i = 1; i <= options.total; i++) {
                if (i == options.current) {
                    a.push({
                        "name": i,
                        "page": i,
                        "disabled": true,
                        "class": "active"
                    });
                } else {
                    a.push({
                        "name": i,
                        "page": i,
                        "disabled": false,
                        "class": ""
                    });
                }
            }
        } else {
            var t = options.total - options.current;
            if (t <= 2 && t > 0) {
                for (var i = options.total - 4; i <= options.total; i++) {
                    if (i == options.current) {
                        a.push({
                            "name": i,
                            "page": i,
                            "disabled": true,
                            "class": "active"
                        });
                    } else {
                        a.push({
                            "name": i,
                            "page": i,
                            "disabled": false,
                            "class": ""
                        });
                    }
                }
            } else if (t == 0) {
                for (var i = options.total - 4; i <= options.total; i++) {
                    if (i == options.current) {
                        a.push({
                            "name": i,
                            "page": i,
                            "disabled": true,
                            "class": "active"
                        });
                    } else {
                        a.push({
                            "name": i,
                            "page": i,
                            "disabled": false,
                            "class": ""
                        });
                    }
                }
            } else {
                //TODO
                if (options.current <= 2) {
                    for (var i = 1; i <= 5; i++) {
                        if (i == options.current) {
                            a.push({
                                "name": i,
                                "page": i,
                                "disabled": true,
                                "class": "active"
                            });
                        } else {
                            a.push({
                                "name": i,
                                "page": i,
                                "disabled": false,
                                "class": ""
                            });
                        }
                    }
                } else {
                    for (var i = options.current - 2; i <= options.current + 2; i++) {
                        if (i == options.current) {
                            a.push({
                                "name": i,
                                "page": i,
                                "disabled": true,
                                "class": "active"
                            });
                        } else {
                            a.push({
                                "name": i,
                                "page": i,
                                "disabled": false,
                                "class": ""
                            });
                        }
                    }
                }
            }
        }

        if (options.current == options.total) {
            a.push({
                "name": "Page_next",
                "page": options.total,
                "disabled": true,
                "class": ""
            });
            a.push({
                "name": "Page_last",
                "page": options.total,
                "disabled": true,
                "class": ""
            });
        } else {
            a.push({
                "name": "Page_next",
                "page": (options.current + 1),
                "disabled": false,
                "class": ""
            });
            a.push({
                "name": "Page_last",
                "page": options.total,
                "disabled": false,
                "class": ""
            });
        }
        return a;
    },
    /*
     * 跳转页面
     * 外部地址：完整的URL，例如"http://www.baidu.com/"
     * 内部地址：路由地址，例如"#/sa/codetype/edit/86/"
     * url      {string} 跳转路径
     * isover   {bool} 是否跨模块
     * key      {string} 该页面标识key值
     * options  {url:"",isover:true,key:""}
     */
    directTo: function(options) {
        //完整路径（外部的URL，例如"http://www.baidu.com"，使用window.location.href跳转）
        if (options.url.indexOf("http") >= 0) {
            window.location.href = options.url;
        }
        //内部路由地址，采用$location.path()来跳转，目的：为了解决IE上报错的问题
        else {
            //新页面
            var newUrl = options.url.charAt(0) == "#" ? options.url.substring(1) : options.url;
            newUrl += newUrl.charAt(newUrl.length - 1) == "/" ? "" : "/";
            //当前页面
            var curUrl = $ui.ui_location.url();
            curUrl += curUrl.charAt(curUrl.length - 1) == "/" ? "" : "/";
            //如果是当前页
            if (newUrl == curUrl) {
                // window.location.reload();
                // $ui.ui_location.path(newUrl);
                return;
            }

            //加载语言包、改变面包屑、定位项目及菜单
            // var isRedirect = this.loadLanguageChangeBreadcrumbLocateMenu(options.menuUrl || newUrl, options.isFormMenu);
            // if(isRedirect){// 如果重向的，loadLanguageChangeBreadcrumbLocateMenu 会做重定向
            //     return;
            // }
            //打开遮罩
            $ui.openMask();
            //隐藏视图页和copyright
            // $("#main-wrapper").hide();
            // $("#copyright").hide();

            //上本次的路由地址记录到缓存中，供下次刷新时用（可以直接定位到菜单）
            var _tempNewUrl = newUrl.charAt(newUrl.length - 1) == "/" ? newUrl.substr(0, newUrl.length - 1) : newUrl;
            // var fatherModuleList = $ui.scope.urlFatherModule[_tempNewUrl.replace(/\//g, '_')];
            /* 只记录列表菜单的路由,这样，即使进入详情页，也知道高亮哪个 */
            // if (options.isSetLastRoute){
            //   $ui.setItem("lastRoute", _tempNewUrl);
            // } else if (_tempNewUrl.indexOf('/staffEdit/') > -1 || fatherModuleList && fatherModuleList.length > 0 && fatherModuleList[0].name) {
                $ui.setItem("lastRoute", _tempNewUrl);
            // }

            //判断是否从引导页进入，如是，显示左边菜单
            if (curUrl == '/link/')
                $('#bar_show_btn').click();
            //清除DOM中多余的日期控件
            $('body').find('.xdsoft_datetimepicker, .daterangepicker').remove();
            //跟随日期控件，必须取消该事件，否则在resize时会报错
            $(window).off('resize.xdsoft');

            //100毫秒后进行页面跳转，让遮罩在100毫秒内动起来
            setTimeout(function() {
                //页面跳转
                $ui.ui_location.path(newUrl).replace();
                $ui.scope.$apply();
            }, 100);
        }
    },
    /*
     * 切割路由
     * obj      {obj} $location
     */
    params: function(obj) {
        var param = [];
        try {
            param = obj.path().split('/');
            if (param[0] == "")
                param.shift();
            return param;
        } catch (e) {
            return param;
        }
    },
    /*
     * 初始化日期控件
     * obj       {string}    标识（#selectid,.select）
     * value     {string}    默认值
     * position  {string}    控件位置(left, right)
     */
    DateRange_init: function(obj, value, position) {
        if (!!$(obj).attr("data-name") && $(obj).attr("data-name") == "valid") {
            $(obj).css("border-left-color", "red")
                .css("border-left-style", "solid")
                .css("border-left-width", "3px")
        }
        if (value != undefined && value != null && value != '') {
            $(obj).val(value);
        }
        // 获取多语言配置信息
        var ranges = new Object();
        ranges[$ui.language.Base.Today] = ['today', 'today'];
        ranges[$ui.language.Base.Yesterday] = ['yesterday', 'yesterday'];
        ranges[$ui.language.Base.LastSevenDays] = [Date.today().add({
            days: -6
        }), 'today'];
        ranges[$ui.language.Base.LastThirtyDays] = [Date.today().add({
            days: -29
        }), 'today'];
        ranges[$ui.language.Base.ThisMonth] = [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()];
        ranges[$ui.language.Base.LastMonth] = [Date.today().moveToFirstDayOfMonth().add({
            months: -1
        }), Date.today().moveToFirstDayOfMonth().add({
            days: -1
        })];

        $(obj).daterangepicker({
            ranges: ranges,
            separator: ' to ',
            opens: position ? position : 'right',
            format: 'yyyy-MM-dd',
            locale: {
                applyLabel: $ui.language.Base.Apply,
                clearLabel: $ui.language.Base.Clear,
                fromLabel: $ui.language.Base.From,
                toLabel: $ui.language.Base.To,
                customRangeLabel: $ui.language.Base.CustomRange
            }
        });
    },
    /*
     * 初始化选择框
     * obj      {string} 标识（#selectid,.select）
     * clear    {bool} 是否有清除按钮 默认true(仅限单选)
     * multi    {bool} 是否多选框 默认false
     * options   {obj:'.select',clear:true,multi:false,required:styleName}
     */
    Choosen_init: function(options) {
        var option = {
            allow_single_deselect: true,
            required: options.required,
            search_contains: true// 在文字中匹配
        };
        if (options.clear != undefined && options.clear == false)
            option = {};
        setTimeout(function() {
            if (options.multi) {
                var isvalidtext = false;
                if (!!$(options.obj).attr("data-name") && $(options.obj).attr("data-name") == "valid") {
                    isvalidtext = true;
                }
                $(options.obj).multiselect({
                    noneSelectedText: $ui.language.Base.PleaseChoose,
                    checkAllText: $ui.language.Base.ChooseAll,
                    uncheckAllText: $ui.language.Base.ChooseClear,
                    selectedText: $ui.language.Base.ChooseSelected,
                    isvalid: isvalidtext
                });
            } else {
                $(options.obj).chosen(option);
            }

            //必填项时，加的样式
            $(options.obj).each(function(i, v) {
                if ($(v).attr("data-name") != "valid") {
                    return true;
                }
                //多选
                if ($(v).attr("multiple") == "multiple") {
                    if (!$(v).next("button").hasClass("requireValid")) {
                        $(v).next("button").addClass("requireValid");
                    }
                }
                //单选
                else {
                    if (!$(v).next("div").find("a").hasClass("requireValid")) {
                        $(v).next("div").find("a").addClass("requireValid");
                    }
                }
            });
        }, 0);
    },
    /*
     * 刷新选择框
     * obj      {string} 标识（#selectid,.select）
     * multi          {bool} 是否多选框 默认false
     * options        {obj:'',multi:false}
     */
    Choosen_refresh: function(options) {
        setTimeout(function() {
            if (options.multi) {
                $(options.obj).multiselect('option', 'noneSelectedText', $ui.language.Base.PleaseChoose);
                $(options.obj).multiselect('option', 'checkAllText', $ui.language.Base.ChooseAll);
                $(options.obj).multiselect('option', 'uncheckAllText', $ui.language.Base.ChooseClear);
                $(options.obj).multiselect('option', 'selectedText', $ui.language.Base.ChooseSelected);
                $(options.obj).multiselect('refresh');
            } else
                $(options.obj).trigger("liszt:updated");
        }, 0);
    },
    /*
    * 下拉框的封装
    * 初始化 .select($el, options)
    * 更新 .select($el)
    */
    select: function($el, options){
        $el = $($el)
        if($el.length === 0) {
            console.error('没找到下拉框$el')
            return
        }
        options = Object.assign({
            obj: $el,
            multi: $el.prop('multiple'),
            clear: true,
        }, options)

        if(!$el.data('has-init')) {
            this.Choosen_init(options)
            $el.data('has-init', true)
        } else {
            this.Choosen_refresh(options)
        }
    },
    /*
     * 模拟对话框
     * obj               $dialogs(必填)
     * Template          {string} 页面地址
     * Controller        {string} 控制器名称
     * width             {int} 弹框宽度
     * title             {string} 弹框名称
     * data              {}传入参数
     * callback          {}回调方法
     * options           {obj: $dialogs,Template:'',Controller:'',width:1000,title:'',data:{},callback:function(){}}
     */
    DialogCreate: function(options) {
        //为防止连续的（短时间内）调用该方法出现遮罩层在页面的上层的问题
        if ($ui.getItem("lastClickDialogTime") && new Date() - new Date($ui.getItem("lastClickDialogTime")) < 500) {
            return;
        }

        var dlg = null;
        options.data['languageBase'] = this.language;
        options.data['languageObj'] = this.languageObj;
        options.data['getDesc'] = function(value, module) {
            return $ui.language.CodeLanguage[value] || $ui.languageObj.sc.CodeLanguage[value] || value
        };
        dlg = options.obj.create(options.Template, options.Controller, options.title, options.width, '', options.data, {
            key: false,
            back: 'static'
        });
        if (options.callback) {
            dlg.result.then(options.callback);
        }

        //记录上次调用该方法完成的时间
        $ui.setItem("lastClickDialogTime", new Date());
    },
    /*
     * 容器折叠控制
     * isfolded              {boolean}是否折叠
     * fold_wrapper          {}    可折叠的容器（id或class）
     * options               {isfolded:true,fold_wrapper:''}
     */
    FoldControl: function(options) {
        if (options.isfolded) {
            $(options.fold_wrapper).unbind("click").bind("click", function() {
                //折叠
                if (!$(this).hasClass("view_folded")) {
                    $(this).addClass("view_folded");
                    $(this).next().slideUp();
                    $(this).children("a").children("i").css({
                        "-webkit-transform": "rotate(-90deg)",
                        "transition": "all 0.4s ease 0"
                    });
                    //展开
                } else {
                    $(this).removeClass("view_folded");
                    $(this).next().slideDown();
                    $(this).children("a").children("i").css({
                        "-webkit-transform": "rotate(0deg)",
                        "transition": "all 0.4s ease 0"
                    });
                }
            });
        }
    },
    /*
     * 更多搜索条件
     * condition_more_btn        {string，必须}      更多搜索条件（id或class）
     * condition_more_wrapper    {string，必须}      更多搜索条件容器（id或class）
     * lan                       {object，必须}      多语言
     */
    ConditionMoreCtrl: function(options) {
        if (options.lan && options.condition_more_btn && options.condition_more_wrapper) {
            //注册事件
            $(options.condition_more_btn).off("click");
            $(options.condition_more_btn).on("click", function() {
                if ($(this).hasClass("condition_folded")) {
                    // $(options.condition_more_wrapper).slideUp(); //会有跳动的问题。。。
                    $(options.condition_more_wrapper).fadeOut();
                    $(this).removeClass("condition_folded");
                    $(this).html(options.lan.Base.ConditionMore);
                } else {
                    // $(options.condition_more_wrapper).slideDown(); //会有跳动的问题。。。
                    $(options.condition_more_wrapper).fadeIn();
                    $(this).addClass("condition_folded");
                    $(this).html(options.lan.Base.ConditionLess);
                }
            });

            //更新（初始化）当前的语言
            setTimeout(function() {
                $(options.condition_more_btn).html(options.lan.Base[$(options.condition_more_btn).hasClass("condition_folded") ? 'ConditionLess' : 'ConditionMore']);
            }, 0);
        }
    },
    /*
     * 打开遮罩
     */
    openMask: function() {
        $("body").addClass("body_mask");
        $("#divMask").css({
            "top": $(window).scrollTop(),
            "left": $(window).scrollLeft(),
            "height": $(window).height(),
            "display": "block"
        });
        $("#imgLoading").css({
            "top": ($(window).scrollTop() + $("#divMask").height() / 2 - $("#imgLoading").height() / 2) + "px",
            "left": ($(window).scrollLeft() + $("#divMask").width() / 2 - $("#imgLoading").width() / 2) + "px",
            "display": "block"
        });
    },
    /*
     * 关闭遮罩
     */
    closeMask: function() {
        $("body").removeClass("body_mask");
        $("#divMask").css("display", "none");
        $("#imgLoading").css("display", "none");
    },

    /*
     * 获取时间范围选择控件的起始和结束日期
     * @dateRangeText   {string}   时间范围选择控件的value值
     * @return          {object}   返回一个json，start属性代表开始时间，end代表结束时间
     */
    getDateRangeDates: function(dateRangeText) {
        var date = {
            "start": "",
            "end": ""
        };
        var ds = dateRangeText.split(" to ");
        if (ds == null || ds == "" || ds.length == 0)
            return date;
        else if (ds[0].trim() == "" && ds[1].trim() != "")
            date.end = ds[1].trim();
        else if (ds[0].trim() != "" && ds[1].trim() == "")
            date.start = ds[0].trim();
        else if (ds[0].trim() != "" && ds[1].trim() != "") {
            date.start = ds[0].trim();
            date.end = ds[1].trim();
        }
        return date;
    },
    /*
     * 获取图片地址
     * @val             {string}       需要转换的路径
     * @moudel          {string}       模块
     * @useStaticRoute  {bool}         是否使用静态路由（新）【使用静态路由则在返回的地址中不包含后台文件的相对路径】
     */
    getImg: function(val, moudel, useStaticRoute) {
        if (val != undefined && val != '') {
            if (val.indexOf("http://") >= 0)
                return val;
            return (moudel ? BASEPATH[moudel] : BASEPATH.BASE) + (useStaticRoute ? "/" : '/base/download?path=') + val;
        } else
            return null;
    },
    /*
     * 过滤输入域的特殊符号
     * 单引号、双引号、竖杠、尖角号、下划线、百分号、反斜杠(写4个)，必须过滤
     * @str1      {string}     正在检测的字符
     * @str2      {string}     自定义需要过滤的字符（可选）
     * @text      {string}     自定义提示语前称（可选）
     */
    illegalChar: function(str1, str2, text) {

        var pattern = new RegExp("['\"<>|%\\\\]");
        var new_pattern = "['\"<>|\\\\";
        if (str2 != undefined && str2 != null && str2 != '') {
            for (var i = 0, len = str2.length; i < len; i++) {
                var s = str2.substr(i, 1);
                new_pattern += s;
            }
            pattern = new RegExp(new_pattern + "]");
        }
        if (str1 != undefined && str1 != null && str1 != '') {
            if (pattern.test(str1)) {
                    debugger;
                if (!text)
                    $ui.alert({
                        msg: $ui.language.Base.IllegalChar,
                        type: 'error',
                        close: true
                    });
                else
                    $ui.alert({
                        msg: String.format($ui.language.Base.IllegalChar_1, text),
                        type: 'error',
                        close: true
                    });
                return false;
            }
        }
        return true;
    },
    /*
     * 校验当前页面所有的input
     * @id    {string}   jquery选择器，例如：“#abc”、“.space”、“[name='abc']”（可选）
     * @ill   {string}   自定义的需要检测的字符（可选）
     * @text  {string}   自定义提示语前称（可选）
     */
    validateInput: function(ill, id, text) {
        var arr = [],
            flag = 0;
        if (id) {
            arr.push($(id).val());
        } else {
            $("input:not([type=file],.ignore-valid)").each(function() {
                arr.push($(this).val());
            });
            $("textarea:not('.editor')").each(function() {
                arr.push($(this).val());
            });
        }
        for (var i = 0; i < arr.length; i++) {
            if (!$ui.illegalChar(arr[i], ill, text)) {
                flag++;
            }
        }
        return flag;
    },
    /*
     * 日期控件公共方法
     * wrapper       {string}    容器(id或者class)
     * lang          {string}    语言
     * datepicker    {boolean}   是否带选择日期功能
     * timepicker    {boolean}   是否带选择时间功能
     * secondpicker  {boolead}   是否带选择秒功能
     * format        {string}    格式化{'H:i' 'Y-m-d'}
     * clear         {boolean}   是否带清空按钮
     * onChange      {function}  change回调方法
     * minDate       {string}    最小日期
     * maxDate       {string}    最大日期
     * onShow        {function}  预呈现回调 lucas.zong
     * options       {wrapper:'',lang:'',datepicker:'',timepicker:'',secondpicker:'',format:'',clear:'',onChange:function,onShow:function}
     */
    datetimepicker: function(options) {
        var current_lang = this.readCookie("language");
        if (options.wrapper != undefined && options.wrapper != null && options.wrapper != '') {
            $(options.wrapper).jq_datetimepicker({
                lang: options.lang ? options.lang : current_lang.toLowerCase(),
                datepicker: !options.datepicker && options.datepicker != undefined ? false : true,
                secondpicker: !options.secondpicker && options.secondpicker != undefined ? false : true,
                timepicker: !options.timepicker && options.timepicker != undefined ? false : true,
                clear: !options.clear ? false : true,
                format: options.format == '' ? 'Y-m-d H:i:s' : options.format,
                formatTime: options.formatTime == '' ? 'H:i:s' : options.formatTime,
                onChangeDateTime: options.onChange,
                minDate: options.minDate,
                maxDate: options.maxDate,
                onShow:options.onShow?options.onShow:function () { }
            });
        }
    },
    /*
     * 检测是否支持html5、CSS3
     */
    checkSupported: function() {
        var obj = document.getElementById("checkCss3");
        if (window.getComputedStyle)
            var stat = window.getComputedStyle(obj, null).getPropertyValue("display");
        else if (obj.currentStyle)
            var stat = obj.currentStyle.display;
        var css3 = (stat == "block");
        if (typeof(Worker) == "undefined" || !css3) {
            var content =
                '<div class="support_wrapper">' + '<p class="support_img"><img alt="" src="common/resources/images/not_support.jpg"/ ></p>' + '<p>您当前浏览器，不支持html5、CSS3，请升级您的浏览器。' + '推荐使用<a target="_blank" href="http://ie.microsoft.com/">ie（10以上版本）</a>' + '<a target="_blank" href="http://www.firefox.com.cn/">火狐（FireFox）</a>' + '<a target="_blank" href="http://www.google.cn/chrome/">谷歌（Chrome）</a>...等浏览器最新版。</p></div>';
            $ui.createBlockDialog(content, 0, true, function() {});
        }
    },
    /*
     * 提示信息对话框
     * @content  {string}    提示信息内容
     * @timeout  {number}    延时
     * @modal    {boolean}   是否模态
     * @callback {function}  回调方法
     */
    createBlockDialog: function(content, timeout, modal, callback) {
        var _left, _top;
        _left = ($(window).width() - 400) / 2;
        _top = ($(window).height() - 200) / 2 + 'px';

        $.blockUI({
            message: content,
            fadeIn: 200,
            fadeOut: 200,
            focusInput: false,
            timeout: timeout ? timeout : 0,
            showOverlay: true,
            css: {
                top: _top,
                left: _left,
                width: '400px',
                height: '200px',
                border: 'none',
                'border-radius': '10px'
            },
            cb: callback
        });

    },
    /*
     * 每个页面的validate初始化
     */
    formValidate: function() {
        //添加列表页form验证
        if ($('form.form-list-search').length > 0) {
            $('form.form-list-search').validationEngine();
        }
        //添加新增页、编辑页form验证
        if ($('form.form-horizontal').length > 0) {
            $('form.form-horizontal').validationEngine();
        }
    },
    /**
     * js截取字符串，中英文都能用
     * @param  str  {string}  需要截取的字符串
     * @param  len  {int}     需要截取的长度
     */
    cutstr: function(str, len) {
        len = len || 9999;
        var str_length = 0;
        var str_len = 0;
        var str_cut = "";
        var a = "";
        if (str)
            str_len = str.length;
        else
            return str;
        for (var i = 0; i < str_len; i++) {
            a = str.charAt(i);
            str_length++;
            if (escape(a).length > 4) {
                //中文字符的长度经编码之后大于4
                str_length++;
            }

            if (str_length > len) {
                str_cut = str_cut.concat("...");
                return str_cut;
            }
            str_cut = str_cut.concat(a);
        }
        return str;
    },
    /*
     * 列表页管理。包含功能有：查询、分页、排序、删除、新增、编辑、预览（查看）、复制（拷贝）
     * 查询条件的ng-model可以写"searchObj.XXX"，也可以写"页面key.XXX"
     */
    listPageManage: {
        _validateIdArr:null,
        _scope: null,
        _pageKey: null,
        _module: null,
        _searchUrl: null,
        _deleteUrl: null,
        _onBeforeSearch: null,
        _onAfterSearch: null,
        _onBeforePaging: null,
        _onAfterPaging: null,
        _onBeforeSort: null,
        _onAfterSort: null,
        _onBeforeDelete: null,
        _onAfterDelete: null,
        _onAdd: null,
        _onEdit: null,
        _onView: null,
        _onCopy: null,
        /*
         * 初始化列表页面（所有参数必须传）
         * option.validateIdArr {Array} 验证表单id数组 （特殊字符）
         * options.scope            {object}     作用域
         * optinos.pageKey          {string}     用于缓存查询条件的key
         * options.module           {string}     模块名称，例：“SS”、“BASE”、“SA”
         * options.pageInLoadData   {string}     页面进入（初始化）时加载数据，true：加载；false：不加载
         * options.searchUrl        {string}     查询列表数据的接口地址
         * options.deleteUrl        {string}     删除数据的接口地址
         * options.searchList       {array}      所有查询条件，例：['TemplateName', 'TemplateType', 'PageType']
         * options.orderList        {array}      所有排序字段，例：['DeviceType', 'PageType', 'ModifiedTime']
         * options.defaultOrder     {object}     默认的排序方式，例: { 'orderName': 'ModifiedTime', 'orderType': 'desc' }
         * options.onInitialize     {function}   初始化时执行的方法（如果返回false，则终止初始化）
         * options.onBeforeSearch   {function}   查询之前执行的方法（如果返回false，则终止查询）
         * options.onAfterSearch    {function}   查询之后执行的方法
         * options.onBeforePaging   {function}   分页之前执行的方法（如果返回false，则终止分页）
         * options.onAfterPaging    {function}   分页之后执行的方法
         * options.onBeforeSort     {function}   排序之前执行的方法（如果返回false，则终止排序）
         * options.onAfterSort      {function}   排序之后执行的方法
         * options.onBeforeDelete   {function}   删除之前执行的方法
         * options.onAfterDelete    {function}   删除之后执行的方法
         * options.onEdit           {function}   在编辑的时候执行的方法
         * options.onView           {function}   在查看的时候执行的方法
         * options.onCopy           {function}   在复制的时候执行的方法
         */
        initialize: function(options) {
            this._menuKey=options.menuKey;
            this._validateIdArr=options.validateIdArr;
            this._scope = options.scope;
            this._pageKey = options.pageKey;
            this._module = options.module;
            this._searchUrl = options.searchUrl;
            this._deleteUrl = options.deleteUrl;
            this._onBeforeSearch = options.onBeforeSearch;
            this._onAfterSearch = options.onAfterSearch;
            this._onBeforePaging = options.onBeforePaging;
            this._onAfterPaging = options.onAfterPaging;
            this._onBeforeSort = options.onBeforeSort;
            this._onAfterSort = options.onAfterSort;
            this._onBeforeDelete = options.onBeforeDelete;
            this._onAfterDelete = options.onAfterDelete;
            this._onAdd = options.onAdd;
            this._onEdit = options.onEdit;
            this._onView = options.onView;
            this._onCopy = options.onCopy;
            this._type = options.type;

            //查询条件对象
            this._scope.searchObj = new Object();
            for (var i = 0; i < options.searchList.length; i++) {
                this._scope.searchObj[options.searchList[i]] = "";
            }
            this._scope[this._pageKey] = this._scope.searchObj; //查询条件的ng-model可以写"searchObj.XXX"，也可以写"页面key.XXX"
            //默认排序
            this._scope.defaultOrder = options.defaultOrder;
            //排序字段对象
            this._scope.orderClass = new Object();
            for (var i = 0; i < options.orderList.length; i++) {
                this._scope.orderClass[options.orderList[i]] = "";
            }
            //记录和加载上一次（缓存）的查询条件
            if (!this._scope.master[this._pageKey]) {
                this._scope.master[this._pageKey] = this._scope.searchObj;
            } else {
                this._scope[this._pageKey] = this._scope.searchObj = this._scope.master[this._pageKey];
            }

            //加载上一次（缓存）的分页对象
            if (!this._scope.paging[this._pageKey]) {
                this._scope.paging[this._pageKey] = {
                    pageIndex: 1,
                    pageRows: 0,
                    pageNum: 0
                };
            }

            //在$scope中公开的方法
            this._scope.search = this._scope.searchList = function(obj) { //查询
                $ui.listPageManage.searchListData(obj);
            };
            this._scope.searchSorting = this._scope.sortList = function(col, order) { //排序
                $ui.listPageManage.sortListData(col, order);
            };
            this._scope.searchPaging = this._scope.pageList = function(num) { //分页
                $ui.listPageManage.pageListData(num);
            };
            this._scope.delete = this._scope.deleteData = function(d_data) { //删除
                $ui.listPageManage.deleteData(d_data);
            };
            this._scope.add = this._scope.addData = function(d_data) { //新增
                $ui.listPageManage.addData(d_data);
            };
            this._scope.edit = this._scope.editData = function(d_data) { //编辑
                $ui.listPageManage.editData(d_data);
            };
            this._scope.copy = this._scope.copyData = function(d_data) { //复制、拷贝
                $ui.listPageManage.copyData(d_data);
            };
            this._scope.view = this._scope.viewData = function(d_data) { //预览、查看
                $ui.listPageManage.viewData(d_data);
            };

            //初始化自定义的方法（如果返回false，则终止初始化）
            if (options.onInitialize) {
                var result = options.onInitialize();
                //返回了false，则终止查询
                if (result === false) {
                    return;
                }
            }

            //是否立即查询数据
            if (options.pageInLoadData) {
                this.searchListData({
                    pageIndex: this._scope.paging[this._pageKey].pageIndex //继续上次的分页信息 (此段加上是因为：1. 当点击导出按钮后，在点关闭回到页面时，所请求的列表分页就从1开始，这是错误的 2.导出列表页面会一直轮询，当点击第二页或其他页，出现又从第一页请求，这是错误的)
                });
            }
        },
        /*
         * 查询列表页数据
         * obj.pageIndex  {int}      分页索引（1、2、3、4、5……）
         * obj.orderName  {string}   排序名称（$scope.orderClass中的键）
         * obj.orderType  {string}   排序类型（asc：升序；desc：降序）
         * callback       {function} 回调函数
         */
        search: function(obj, callback) {
            //在ajax回调函数中用到
            var _scope = this._scope;
            var _pageKey = this._pageKey;

            //权限校验
            // if (!_scope.PAGELIMITS.LIST) {
            //     $ui.alert({ msg: $ui.language.Base.OperationFaild, type: 'error', close: true });
            //     return false;
            // }
            //搜索条件校验
            if(this._validateIdArr){
                for(var i=0;i<this._validateIdArr.length;i++){
                    var val=$(this._validateIdArr[i]).val();
                    if (!$ui.illegalChar(val, null, null)) {
                        return false;
                    }
                }
            }else{
                if ($ui.validateInput() > 0) {
                    return false;
                }
            }


            //条件缓存
            _scope.master[this._pageKey] = angular.copy(_scope.searchObj);
            //分页缓存
            _scope.paging[this._pageKey].pageIndex = obj && obj.pageIndex ? obj.pageIndex : 1;
            //当前排序
            _scope.orderName = obj && obj.orderName ? obj.orderName : _scope.defaultOrder.orderName;
            _scope.orderType = obj && obj.orderType ? obj.orderType : _scope.defaultOrder.orderType;

            //where条件
            var _whereObj = _scope.searchObj;
            //分页条件
            var _pageObj = {
                num:  _scope.paging.pageSize,
                index: _scope.paging[this._pageKey].pageIndex,
                item:_scope.paging[this._pageKey].pageIndex

            };
            //排序条件
            var _orderObj = _scope.orderName && _scope.orderType ? {
                column: _scope.orderName,
                type: _scope.orderType
            } : {};
            if (setting && setting.isDebug) {
                console.info(this._searchUrl);
                console.info(JSON.stringify({
                    where: _whereObj,
                    page: _pageObj,
                    order: _orderObj
                }));
            }
            
            //数据访问 sr的特殊处理, sst和sr一样处理
            if ($ui.sr && $ui.sr.ajax && (location.hash.indexOf('/sr') !== -1 || location.hash.indexOf('/sst') !== -1)) {
                $ui.sr.ajax({
                    url: this._searchUrl,
                    menuKey:this._menuKey,
                    data: {
                        where: _whereObj,
                        page: _pageObj,
                        order: _orderObj,
                        querytype: 'main'
                    },
                    type: 'post',
                    //contentType:'application/json',
                    async: true,
                    success: function(data) {
                        _scope.isLoading = false;
                        if (data.errcode == 0 || data.status == 200) {
                            //数据绑定
                            _scope.data = data.msgbody;
                            for (var key in _scope.orderClass) {
                                _scope.orderClass[key] = key.toLowerCase() == _scope.orderName.toLowerCase() ? ('_' + _scope.orderType.toLowerCase()) : "";
                            }
                            //回调函数
                            if (callback) {
                                callback(data);
                            }
                            _scope.$apply();
                        }
                    },
                    beforeSend: function(){
                        _scope.isLoading = true;
                    },
                    error:function(){
                        _scope.isLoading=false;
                        _scope.$apply();
                    },
                    moudle: this._module
                });
                $ui.sr.ajax({
                    url: this._searchUrl,
                    menuKey:this._menuKey,
                    data: {
                        where: _whereObj,
                        page: _pageObj,
                        order: _orderObj,
                        querytype: 'count'
                    },
                    // contentType:'application/json',
                    async: true,
                    success: function(data) {

                        if (data.errcode == 0 || data.status == 200) {
                            _scope.TotalCount = data.msgbody.TotalCount[0].count;
                            //数据绑定
                            // _scope.data = data.msgBody;
                            _scope.paging[_pageKey].totalCount = data.msgbody.TotalCount[0].count;
                            _scope.paging[_pageKey].pageIndex = _scope.paging[_pageKey].pageIndex;
                            _scope.paging[_pageKey].pageNum = Math.ceil((data.msgbody.TotalCount[0].count) / _scope.paging.pageSize);
                            _scope.paging[_pageKey].pageRows = (data.msgbody.TotalCount[0].count) % _scope.paging.pageSize;
                            //分页对象
                            _scope.page = $ui.paging({
                                current: _scope.paging[_pageKey].pageIndex,
                                total: _scope.paging[_pageKey].pageNum
                            });
                            //回调函数
                            //if (callback) {
                            //callback(data);
                            //}
                            _scope.$apply();
                        }
                    },
                    moudle: this._module
                });
            } else {
                $ui.ajax({
                    url: this._searchUrl,
                    data: {
                        where: _whereObj,
                        page: _pageObj,
                        order: _orderObj
                    },
                    type: this._type,
                    async: true,
                    success: function(data) {
                        if (data.errcode === 0) {
                            //数据绑定
                            _scope.data = data.msgbody;
                            _scope.paging[_pageKey].pageIndex = _scope.paging[_pageKey].pageIndex;
                            _scope.paging[_pageKey].pageNum = Math.ceil((data.msgbody.TotalCount)[0].count / _scope.paging.pageSize);
                            _scope.paging[_pageKey].pageRows = (data.msgbody.TotalCount)[0].count % _scope.paging.pageSize;
                            // debugger;
                            //分页对象
                            _scope.page = $ui.paging({
                                current: _scope.paging[_pageKey].pageIndex,
                                total: _scope.paging[_pageKey].pageNum
                            });
                            //排序样式
                            // debugger;
                            for (var key in _scope.orderClass) {
                                _scope.orderClass[key] = key.toLowerCase() == _scope.orderName.toLowerCase() ? ('_' + _scope.orderType.toLowerCase()) : "";
                            }

                            //回调函数
                            if (callback) {
                                callback(data);
                            }
                            _scope.$apply();
                        }
                    },
                    moudle: this._module
                });
            }
        },
        /*
         * 查询列表页数据
         * obj.pageIndex  {int}     分页索引（1、2、3、4、5……）
         * obj.orderName  {string}  排序名称（$scope.orderClass中的键）
         * obj.orderType  {string}  排序类型（asc：升序；desc：降序）
         */
        searchListData: function(obj) {
            //查询之前做的方法（如果返回false，则终止查询）
            if (this._onBeforeSearch) {
                var result = this._onBeforeSearch();
                //返回了false，则终止查询
                if (!result && typeof result == "boolean") {
                    return;
                }
            }

            //查询数据
            this.search(obj, this._onAfterSearch);
        },
        /*
         * 分页查询数据
         * num  {int}  分页索引（1、2、3、4、5……）
         */
        pageListData: function(num) {
            //分页之前做的方法（如果返回false，则终止分页）
            if (this._onBeforePaging) {
                var result = this._onBeforePaging();
                //返回了false，则终止分页
                if (!result && typeof result == "boolean") {
                    return;
                }
            }

            //分页初始化
            if (num > this._scope.paging[this._pageKey].pageNum)
                return false;

            //查询数据
            this.search({
                pageIndex: num,
                orderName: this._scope.orderName,
                orderType: this._scope.orderType
            }, this._onAfterPaging);
        },
        /*
         * 排序查询数据
         * col    {string}  排序名称（$scope.orderClass中的键）
         * order  {string}  排序类型（asc：升序；desc：降序）
         */
        sortListData: function(col, order) {
            //排序之前做的方法（如果返回false，则终止排序）
            if (this._onBeforeSort) {
                var result = this._onBeforeSort();
                //返回了false，则终止排序
                if (!result && typeof result == "boolean") {
                    return;
                }
            }

            //查询数据
            this.search({
                orderName: col,
                orderType: order
            }, this._onAfterSort);
        },
        /*
         * 删除数据
         * d_data  {string、int、object}  删除时传递的参数
         */
        deleteData: function(d_data) {
            //在ajax回调函数中用到
            var _scope = this._scope;
            var _pageKey = this._pageKey;
            var _deleteUrl = this._deleteUrl;
            var _onAfterDelete = this._onAfterDelete;

            if (!this._scope.PAGELIMITS.DEL) {
                $ui.alert({
                    msg: $ui.language.Base.OperationFaild,
                    type: 'error',
                    close: true
                });
                return false;
            }

            //封装的方法，用于做beforeDelete方法的参数。
            //每个页面上可自行修改该参数中的内容，最终需要用到where和prompt两个属性（已有默认值）。
            var _befDelData = {
                'where': {},
                'oriData': d_data,
                'prompt': $ui.language.Base.IsDelete
            };
            //为_befDelData.where赋值
            if (typeof d_data == "string" || typeof d_data == "number") {
                _befDelData.where.id = d_data;
            } else if (typeof d_data == "object") {
                for (var key in d_data) {
                    _befDelData.where[key] = d_data[key];
                }
            }

            //删除之前做的方法（如果返回false，则终止删除）
            if (this._onBeforeDelete) {
                var result = this._onBeforeDelete(_befDelData);
                //返回了false，则终止查询
                if (!result && typeof result == "boolean") {
                    return;
                }
            }

            //弹出确认提示框
            var self=this;
            $ui.confirm({
                head: $ui.language.Base.Messages,
                content: _befDelData.prompt,
                success: function() {
                    $ui.ajax({
                        url: _deleteUrl,
                        data: {
                            where: _befDelData.where
                        },
                        type: 'post',
                        success: function(data) {
                            if (data.errcode == 0) {
                                //获取删除的当前页
                                _scope.paging[_pageKey].pageIndex = _scope.paging[_pageKey].pageRows == 1 && _scope.paging[_pageKey].pageIndex != 1 && _scope.paging[_pageKey].pageNum == _scope.paging[_pageKey].pageIndex ? _scope.paging[_pageKey].pageIndex - 1 : _scope.paging[_pageKey].pageIndex;
                                $ui.alert({
                                    msg: $ui.language.Base.DeleteSuccess,
                                    type: 'success',
                                    close: true
                                });

                                //回调函数
                                if (_onAfterDelete) {
                                    _onAfterDelete(data);
                                }
                                _scope.$apply();
                            } else {
                                $ui.alert({
                                    msg: $ui.language.Base.DeleteFailed,
                                    type: 'error',
                                    close: true
                                });
                            }
                        },
                        moudle: self._module
                    });
                }
            });
        },
        /*
         * 新增数据
         * d_data  {string、int、object}  编辑数据时传递的参数
         */
        addData: function(d_data) {
            if (!this._scope.PAGELIMITS.ADD) {
                $ui.alert({
                    msg: $ui.language.Base.OperationFaild,
                    type: 'error',
                    close: true
                });
                return false;
            }

            //调用新增数据的方法
            if (this._onAdd) {
                this._onAdd(d_data);
            }
        },
        /*
         * 编辑数据
         * d_data  {string、int、object}  编辑数据时传递的参数
         */
        editData: function(d_data) {
            if (!this._scope.PAGELIMITS.EDIT) {
                $ui.alert({
                    msg: $ui.language.Base.OperationFaild,
                    type: 'error',
                    close: true
                });
                return false;
            }

            //调用编辑数据的方法
            if (this._onEdit) {
                this._onEdit(d_data);
            }
        },
        /*
         * 预览（查看）数据
         * d_data  {string、int、object}  预览（查看）数据时传递的参数
         */
        viewData: function(d_data) {
            //调用预览（查看）数据的方法
            if (this._onView) {
                this._onView(d_data);
            }
        },
        /*
         * 复制（拷贝）数据
         * d_data  {string、int、object}  复制（拷贝）数据时传递的参数
         */
        copyData: function(d_data) {
            if (!this._scope.PAGELIMITS.ADD) {
                $ui.alert({
                    msg: $ui.language.Base.OperationFaild,
                    type: 'error',
                    close: true
                });
                return false;
            }

            //调用复制（拷贝）数据的方法
            if (this._onCopy) {
                this._onCopy(d_data);
            }
        }
    }
};

/***************String扩展方法****************************/

/*
 * String.format.
 */
String.format = function() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
};


/*
 * String 转换为 JSON
 */
String.prototype.toJson = function() {
    var str = this;
    str = str.replace(/\r\n/g, "<br>&nbsp;&nbsp;");
    str = str.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    var json = eval("(" + str + ")");
    return json;
};

/*
 * String.trim().
 */
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/*
 * String.sub().字符串截取(汉字占两位)
 */
String.prototype.sub = function(n) {
    var r = /[^\x00-\xff]/g;
    if (this.replace(r, "mm").length <= n)
        return this
    var m = Math.floor(n / 2);
    for (var i = m; i < this.length; i++) {
        if (this.substr(0, i).replace(r, "mm").length >= n) {
            return this.substr(0, i) + "…"
        }
    }
    return this
};

/* *
 * 数组去重
 * */
Array.prototype.unique = function() {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
};


/*
 * Array.indexOf().返回元素所在数组的下标
 */
Array.prototype.indexOf = function(e, type) {
    for (var i = 0; i < this.length; i++) {
        if (!!type && type == "file") {
            if (this[i].name == e) {
                return i;
            }
        } else {
            if (this[i] == e) {
                return i;
            }
        }
    }
    return -1;
};

/*
 * Array.removeByName().溢出数据中某个元素
 */
Array.prototype.removeValue = function(e, type) {
    var index = this.indexOf(e, type);
    if (index > -1) {
        this.splice(index, 1);
    }
};

/*
 * Array.find().扩展数组的find方法
 * func      {function}    自定义判断的函数，有四个参数；
 *                       参数1：当前元素；
 *                       参数2：当前元素的下标；
 *                       参数3：整个数组；
 *                       参数4：自定义的参数对象
 * paramObj  {object}    自定义的参数对象
 */
Array.prototype.find = function(func, paramObj) {
    var temp = [];
    for (var i = 0; i < this.length; i++) {
        if (func(this[i], i, this, paramObj)) {
            temp[temp.length] = this[i];
        }
    }
    return temp;
}

/*
 * JS格式化日期输出
 * @format {string}  例如“yyyy-MM-dd hh:mm:ss”
 **/
Date.prototype.format = function(format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};


/*
 * 根据项目名称获取项目接口地址
 * @name      {string}      项目名称
 */
function retreal(name) {
    var href = window.location.href;
    for (var i = 0; i < baseSetting.base_outpath.length; i++) {
        if (href.indexOf(baseSetting.base_outpath[i]) >= 0) {
            return baseSetting.defpath.outpath[name];
        }
    }
    return baseSetting.defpath.inpath[name];
}

/*
 *项目接口调用地址对象
 */
var BASEPATH = {
    'SA': retreal('SA'),
    'BASE': retreal('BASE'),
    'SS': retreal('SS'),
    'SR': retreal('SR'),
    'SP': retreal('SP'),
    'SSK': retreal('SSK'),
    'SShake': retreal('SShake'),
    'SST': retreal('SST'),
    'SCServer': retreal('SCServer')
};

function changeClass(obj) {
    var element = $(obj).parent().parent();
    var preview = element.find('.fileupload-preview');
    preview.children('img').remove();
    preview.children('span').remove();
    element.find('input[type=file]').val('').change();
    element.removeClass('fileupload-exists').addClass('fileupload-new');
}

$.fn.extend({
    /*
     * 为input:file控件写入图片
     * @val             {string}  后台的相对路径或者使用静态路由时的文件名
     * @useStaticRoute  {bool}    是否使用静态路由（新）【使用静态路由则在返回的地址中不包含后台文件的相对路径】
     */
    writeImg: function(val, useStaticRoute) {
        var imgsrc = "",
            module = $(this).attr('data-module'),
            basePath;
        basePath = module ? BASEPATH[module] : BASEPATH.BASE;
        if (val != undefined && val != null && val != '') {
            if (val.indexOf("http://") < 0) {
                if (!useStaticRoute)
                    imgsrc = basePath + "/base/download?path=" + val;
                else
                    imgsrc = basePath + "/" + val;
            } else {
                imgsrc = val;
            }
            var $preview = $(this).parent().parent().parent().find('.fileupload-preview')
            $preview.parent().prepend("<input type=\"hidden\" value=\"" + val + "\" name>");
            if ($preview.width() < 100) {
                $preview.html('<a href="javascript:;" class="delsmall" data-dismiss="fileupload" onclick="changeClass(this)"></a>');
            } else {
                $preview.html('<a href="javascript:;" class="dellarge" data-dismiss="fileupload" onclick="changeClass(this)"></a>');
            }
            var height = $preview.css('height')
            if ($preview.css('display') != 'inline' && height != '0px' && height != 'none') $preview.css('line-height', height)
            $preview.prepend('<img src="' + imgsrc + '" ' + ($preview.css('max-height') != 'none' ? 'style="max-height: ' + $preview.css('max-height') + ';"' : '') + ' />')
            $preview.parent().addClass('fileupload-exists').removeClass('fileupload-new')

            $(".fileupload-preview").bind('mouseover', function() {
                $(this).find('a').css("display", "block");
            }).bind("mouseout", function() {
                $(this).find('a').css("display", "none");
            });
        } else {
            var $preview = $(this).parent().parent().parent().find('.fileupload-preview');
            $preview.find('a[data-dismiss="fileupload"]').click();
        }
    },
    showError: function(msg) {
        $(this).parent().parent().validationEngine("showPrompt", msg, "error", false, true);
    },
    hideError: function() {
        $(this).parent().parent().validationEngine("hide");
    }
});
