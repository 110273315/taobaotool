/* ===========================================================
 * bootstrap-fileupload.js j2
 * http://jasny.github.com/bootstrap/javascript.html#fileupload
 * ===========================================================
 * Copyright 2012 Jasny BV, Netherlands.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function ($) {

    "use strict"; // jshint ;_

    /* FILEUPLOAD PUBLIC CLASS DEFINITION
     * ================================= */

    var Fileupload = function (element, options) {
        this.$element = $(element)
        this.type = this.$element.data('uploadtype') || (this.$element.find('.thumbnail').length > 0 ? "image" : "file")

        this.$input = this.$element.find(':file')
        if (this.$input.length === 0) return

        this.name = this.$input.attr('name') || options.name

        this.$hidden = this.$element.find('input[type=hidden]')
        if (this.$hidden.length === 0) {
            this.$hidden = $('<input type="hidden" />')
            this.$element.prepend(this.$hidden)
        }

        this.$preview = this.$element.find('.fileupload-preview')
        if (!this.$element.hasClass('fileupload-exists')) {
            if (this.$preview.width() < 100) {
                this.$preview.html('<a href="javascript:" class="delsmall" data-dismiss="fileupload"></a>');
            }
            else {
                this.$preview.html('<a href="javascript:" class="dellarge" data-dismiss="fileupload"></a>');
            }
        }
        var height = this.$preview.css('height')
        if (this.$preview.css('display') != 'inline' && height != '0px' && height != 'none') this.$preview.css('line-height', height)

        this.original = {
            'exists': this.$element.hasClass('fileupload-exists'),
            'preview': this.$preview.html(),
            'hiddenVal': this.$hidden.val()
        }

        this.$remove = this.$element.find('[data-dismiss="fileupload"]')
        this.$element.find('[data-trigger="fileupload"]').on('click.fileupload', $.proxy(this.trigger, this))

        this.listen()
    }

    Fileupload.prototype = {

        listen: function () {
            this.$input.on('change.fileupload', $.proxy(this.change, this))
            $(this.$input[0].form).on('reset.fileupload', $.proxy(this.reset, this))
            if (this.$remove) {
                if (!this.$element.hasClass('fileupload-exists'))
                    //this.clear();
                this.$remove.on('click.fileupload', $.proxy(this.clear, this))
            }
        },
        change: function (e, invoked) {
            if (invoked === 'clear') return;

            var file = e.target.files !== undefined ? e.target.files[0] : (e.target.value ? { name: e.target.value.replace(/^.+\\/, '') } : null)

            if (!file) {
                this.clear()
                return
            }

            this.$hidden.val('')
            this.$hidden.attr('name', '')
            this.$input.attr('name', this.name)

            //是否是图片
            var isImage = this.type === "image" && this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match('image.*') : file.name.match('\\.(gif|png|jpe?g)$')) && typeof FileReader !== "undefined";

            //是图片，就显示图片
            if (isImage) {
                //#region 文件大小验证
                /*
                 * 新增文件大小验证
                 * 2015-01-22
                 * Felix.liu
                 */
                if (FILESIZE && FILESIZE.IMAGE && FILESIZE.IMAGE > 0 && file.size > FILESIZE.IMAGE) {
                    return;
                }
                //#endregion

                var reader = new FileReader()
                var preview = this.$preview
                var element = this.$element

                reader.onload = function (e) {
                    preview.prepend('<img src="' + e.target.result + '" ' + (preview.css('max-height') != 'none' ? 'style="max-height: ' + preview.css('max-height') + ';"' : '') + ' />')
                    element.addClass('fileupload-exists').removeClass('fileupload-new')
                }

                reader.readAsDataURL(file)
            }
            else {//不是图片就显示文件名
                if (this.$preview.children('span').length > 0) {
                    this.$preview.children('span').html(file.name);
                }
                else {
                    this.$preview.prepend("<span>" + file.name + "</span>");
                }
                //this.$preview.text(file.name)
                this.$element.addClass('fileupload-exists').removeClass('fileupload-new')
            }
        },

        clear: function (e) {
            this.$hidden.val('')
            this.$hidden.attr('name', this.name)
            this.$input.attr('name', '')

            //ie8+ doesn't support changing the value of input with type=file so clone instead
            if (navigator.userAgent.match(/msie/i)) {
                var inputClone = this.$input.clone(true);
                this.$input.after(inputClone); 
                this.$input.remove();
                this.$input = inputClone;
            } else {
                this.$input.val('')
            }

            //this.$preview.html('');
            $(this.$preview).parent().find('span').html(''); //文件上传文字清除
            this.$preview.find('img').remove();
            this.$element.addClass('fileupload-new').removeClass('fileupload-exists')

            if (e) {
                this.$input.trigger('change', ['clear'])
                e.preventDefault()
            }
        },

        reset: function (e) {
            this.clear();

            this.$hidden.val(this.original.hiddenVal)
            this.$preview.html(this.original.preview)

            if (this.original.exists) this.$element.addClass('fileupload-exists').removeClass('fileupload-new')
            else this.$element.addClass('fileupload-new').removeClass('fileupload-exists')
        },

        trigger: function (e) {
            this.$input.trigger('click')
            e.preventDefault()
        }
    }


    /* FILEUPLOAD PLUGIN DEFINITION
     * =========================== */

    $.fn.fileupload = function (options) {
        return this.each(function () {
            var $this = $(this)
            , data = $this.data('fileupload')
            if (!data) $this.data('fileupload', (data = new Fileupload(this, options)))
            if (typeof options == 'string') data[options]()
        })
    }

    $.fn.fileupload.Constructor = Fileupload


    /* FILEUPLOAD DATA-API
     * ================== */

    $(document).on('click.fileupload.data-api', '[data-provides="fileupload"]', function (e) {
        var $this = $(this)
        if ($this.data('fileupload')) return
        $this.fileupload($this.data())

        var $target = $(e.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');
        if ($target.length > 0) {
            $target.trigger('click.fileupload')
            e.preventDefault()
        }
    })
}(window.jQuery);

$(document).ready(function () {
    $(".fileupload-preview").bind('mouseover', function () {
        $(this).find('a').css("display", "block");
    }).bind("mouseout", function () {
        $(this).find('a').css("display", "none");
    });
    $(".fileupload-preview a[data-dismiss='fileupload']").bind('mouseover', function () {
        $(this).css("display", "block");
    }).bind("mouseout", function () {
        $(this).css("display", "none");
    })
})

function changeClass(obj) {
    $(obj).parent().parent().removeClass('fileupload-exists').addClass('fileupload-new')
}
$.fn.extend({
    /*
     * 为input:file控件写入图片
     * @val             {string}  后台的相对路径或者使用静态路由时的文件名
     * @useStaticRoute  {bool}    是否使用静态路由（新）【使用静态路由则在返回的地址中不包含后台文件的相对路径】
     */
    writeImg: function (val, useStaticRoute) {
        var imgsrc = "";
        if (val != undefined && val != null && val != '') {
            if (val.indexOf("http://") < 0) {
                if (!useStaticRoute)
                    imgsrc = BASEPATH.BASE + "/base/download?path=" + val;
                else
                    imgsrc = BASEPATH.BASE + "/" + val;
            }
            else {
                imgsrc = val;
            }
            var $preview = $(this).parent().parent().parent().find('.fileupload-preview')
            $preview.parent().prepend("<input type=\"hidden\" value=\"" + val + "\" name>");
            if ($preview.width() < 100) {
                $preview.html('<a href="javascript:;" class="delsmall" data-dismiss="fileupload" onclick="changeClass(this)"></a>');
            }
            else {
                $preview.html('<a href="javascript:;" class="dellarge" data-dismiss="fileupload" onclick="changeClass(this)"></a>');
            }
            var height = $preview.css('height')
            if ($preview.css('display') != 'inline' && height != '0px' && height != 'none') $preview.css('line-height', height)
            $preview.prepend('<img src="' + imgsrc + '" ' + ($preview.css('max-height') != 'none' ? 'style="max-height: ' + $preview.css('max-height') + ';"' : '') + ' />')
            $preview.parent().addClass('fileupload-exists').removeClass('fileupload-new')

            $(".fileupload-preview").bind('mouseover', function () {
                $(this).find('a').css("display", "block");
            }).bind("mouseout", function () {
                $(this).find('a').css("display", "none");
            });
            $(".fileupload-preview a[data-dismiss='fileupload']").bind('mouseover', function () {
                $(this).css("display", "block");
            }).bind("mouseout", function () {
                $(this).css("display", "none");
            })
        }
        else {
            var $preview = $(this).parent().parent().parent().find('.fileupload-preview');
            $preview.find('a[data-dismiss="fileupload"]').click();
        }
    },
    showError: function (msg) {
        $(this).parent().parent().validationEngine("showPrompt", msg, "error", false, true);
    },
    hideError: function () {
        $(this).parent().parent().validationEngine("hide");
    }
})