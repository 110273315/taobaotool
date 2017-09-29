/* plupload
 * author: Aries
 * date: 2014-06-04
 * version: 0.1
 * @param[id]                   容器id
 * @param[oploadSuccess]        上传成功回调方法
 * @param[deleteFile]           单个删除回调方法
 * @param[deleteAllFile]        全部删除回调方法
 * @param[willSave]             资源是否存数据库
 * @param[fileType]             上传文件类型（IMAGE或者FILE）
 */
function plupload(id, oploadSuccess, deleteFile, deleteAllFile, willSave, fileType) {
    var _this = $("#" + id);
    // 上传控件body拼接
    var upload_content = 
        '<div class="plupload_wrapper plupload_scroll">' +
            '<div id="uploader_container" class="plupload_container">' +
                '<div class="plupload">' +
                    '<div class="plupload_content">' +
                        '<div class="plupload_filelist_header">' +
                            '<div class="plupload_file_name"><span class="fl_name">' + $ui.language.fileUpload.FileName + '</span></div>' +
                            '<div class="plupload_file_action"><a href="javascript:void(0)" class="plupload_all_files_clear" style="display:none"></a></div>' +
                            '<div class="plupload_file_size"><span class="fl_size">' + $ui.language.fileUpload.Size + '</span></div>' +
                            '<div class="plupload_clearer">&nbsp;</div>' +
                        '</div>' +
                        '<ul id="uploader_filelist" class="plupload_filelist">' +
                        '</ul>' +
                        '<div class="plupload_filelist_footer">' +
                            '<div class="plupload_file_name">' +
                                '<div class="plupload_buttons">' +
                                    '<a href="javascript:void(0)" class="plupload_button plupload_add">' + $ui.language.fileUpload.AddFile + '</a>' +
                                    '<a id="fl_start" href="javascript:void(0)" class="plupload_button plupload_start plupload_disabled">' + $ui.language.fileUpload.Upload + '</a>' +
                                    '<span class="plupload_upload_status"></span>' +
                                '</div>' +
                            '</div>' +
                            '<div class="plupload_file_action"></div>' +
                            '<div class="plupload_file_size">' +
                                '<span class="plupload_total_file_size"></span>' +
                            '</div>' +
                            '<div class="plupload_clearer">&nbsp;</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="upload_input"><input type="file" class="plupload_field" multiple="multiple" accept="image/gif, image/jpeg, image/png, image/bmp, image/x-icon, image/svg+xml"/></div>' +
                '</div>' +
            '</div>' +
        '</div>';
    _this.append(upload_content);                       
    
    var add_button = _this.find("a.plupload_add"),                      // 添加按钮
        start_button = _this.find("a.plupload_start"),                  // 开始按钮
        delete_button = _this.find("a.plupload_all_files_clear"),       // 删除按钮
        file_filed_container = _this.find("div.upload_input"),          // 文件域container
        file_field = _this.find("input.plupload_field"),                // 文件域
        list_container = _this.find("ul.plupload_filelist"),            // 列表容器
        file_size = _this.find("span.fl_size"),                         // 文件大小
        file_name = _this.find("span.fl_name"),                         // 文件名
        file_total_size = _this.find("span.plupload_total_file_size"),  // 文件总大小
        upload_status = _this.find("span.plupload_upload_status"),      // 上传成功文字
        upload_success_index = 0;                                       // 上传成功状态

    var fl_list = new Array();                                          // 存放文件的数组

    // 添加文件事件绑定
    add_button.on("click", function () {
        // 清空上传状态    
        upload_status.html("");
        file_field.click();
        // 如果已经上传了文件，则把之前添加的文件清空
        if (upload_success_index > 0) {
            fl_list = [];
            // 清空文件容器
            list_container.html('');
            // 隐藏全部删除按钮
            delete_button.hide();
        }
    });

    // 文件域改变事件绑定
    file_field.on("change", fileFieldChange);

    // 开始上传事件绑定
    start_button.on("click", function () {
        if ($(this).hasClass("plupload_disabled")) {
            return false;
        }
        var upload_result;
        //调用后台存库
        if(willSave){
            upload_result = $ui.fileupload({
                type: fileType,
                mulit: true,
                will_save: willSave,
                moudle: 'BASE',
                useStaticRoute: true,
                data: fl_list
            });
        }else{
            // 调用后台接口
            upload_result = $ui.fileupload({
                type: fileType,
                mulit: true,
                moudle: 'BASE',
                useStaticRoute: true,
                data: fl_list
            });
        }
        // 上传成功
        if (upload_result.length > 0 && fl_list.length > 0) {
            upload_status.html("");
            start_button.addClass("plupload_disabled");
            upload_status.html($ui.language.fileUpload.UploadSuccess).show("normal");

            upload_success_index++;
            // 成功回调
            if (oploadSuccess) {
                oploadSuccess(upload_result);
            }
        }
    });
    // 删除事件绑定
    list_container.on("click", "a.plupload_file_delete", function () {
        var curr_name = $(this).attr("name");
        fl_list.removeValue(curr_name, "file");
        $(this).parent().parent().remove();

        // 清空上传状态
        upload_status.html("");

        // 重新计算文件总的大小
        var total_size = 0;
        for (var n = 0; n < fl_list.length; n++) {
            total_size += parseInt(fl_list[n].size / 1024);
        }
        file_total_size.html(total_size + '&nbsp;kb').show();

        if (fl_list.length == 0) {
            // 隐藏全部删除按钮
            delete_button.hide();

            // 清空文件size
            file_total_size.html("");

            // 隐藏文件大小
            //file_size.html("");

            // 隐藏文件名
            //file_name.html("");

            // 禁用开始按钮
            start_button.addClass("plupload_disabled");
        }
        
        // 回调
        if (deleteFile) {
            deleteFile(curr_name);
        }
    });
    // 全部删除事件绑定
    delete_button.on("click", function () {
        // 清空文件列表
        list_container.empty();
        fl_list = [];
        $(this).hide();

        // 清空文件域
        file_filed_container.find("input").remove();
        file_field = null;
        file_filed_container.html('<input type="file" class="plupload_field" multiple="multiple" />');
        file_field = _this.find("input.plupload_field");

        file_field.on("change", fileFieldChange);

        // 清空上传状态
        upload_status.html("");

        // 清空文件size
        file_total_size.html("");

        // 隐藏文件大小
        //file_size.html("");

        // 隐藏文件名
        //file_name.html("");

        // 禁用开始按钮
        start_button.addClass("plupload_disabled");

        // 回调
        if (deleteAllFile) {
            deleteAllFile();
        }
    });

    // 文件域改变方法
    function fileFieldChange() {
        // 获取选择的文件
        var _list = $("input[class='plupload_field']").prop('files');

        if (_list.length == 0) {
            return;
        }

        for (var k = 0; k < _list.length; k++) {
            fl_list.push(_list[k]);
        }
        if (fl_list.length > 0 && _list.length > 0) {
            start_button.removeClass("plupload_disabled");
        }

        // 文件列表拼接
        var fl_info = "";
        for (var i = 0, len = _list.length; i < len; i++) {
            fl_info +=
                '<li class="plupload_delete">' +
				'<div class="plupload_file_name"><span>' + _list[i].name + '</span></div>' +
				'<div class="plupload_file_action"><a href="javascript:void(0)" class="plupload_file_delete" name="' + _list[i].name + '"></a></div>' +
				'<div class="plupload_file_size">' + parseInt(_list[i].size / 1024) + '&nbsp;kb</div>' +
				'<div class="plupload_clearer">&nbsp;</div></li>';
        }
        list_container.append(fl_info);

        if (fl_list.length > 0) {
            // 显示全部删除按钮
            delete_button.show("slow");

            // 显示文件大小
            file_size.html($ui.language.fileUpload.Size);

            // 显示文件名
            file_name.html($ui.language.fileUpload.FileName);
        }

        // 计算文件总的大小
        var total_size = 0;
        for (var n = 0; n < fl_list.length; n++) {
            total_size += parseInt(fl_list[n].size / 1024);
        }
        file_total_size.html(total_size + '&nbsp;kb').show();

        //清空input:file中的值
        $("input[class='plupload_field']").val("");
    }
}
