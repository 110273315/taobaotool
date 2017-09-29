/* http://github.com/mindmup/bootstrap-wysiwyg */
/* global jQuery, $, FileReader */
/* jslint browser:true */
var editLinkid;
var editImageType;
var editFileID;
var editUploadImage;
(function ($) {
    'use strict';
    var readFileIntoDataUrl = function (fileInfo) {
        var loader = $.Deferred(),
			fReader = new FileReader();
        fReader.onload = function (e) {
            loader.resolve(e.target.result);
        };
        fReader.onerror = loader.reject;
        fReader.onprogress = loader.notify;
        fReader.readAsDataURL(fileInfo);
        return loader.promise();
    };

    $.fn.cleanHtml = function () {
        var html = $(this).html();
        return html && html.replace(/(<br>|\s|<div><br><\/div>|&nbsp;)*$/, '');
    };
    $.fn.wysiwyg = function (userOptions) {
        var editor = this,
			selectedRange,
			options,
			toolbarBtnSelector,
			execCommand = function (commandWithArgs, valueArg) {
			    var commandArr = commandWithArgs.split(' '),
					command = commandArr.shift(),
					args = commandArr.join(' ') + (valueArg || '');
			    if (editUploadImage == "1") {
			        document.execCommand(command, 0, args);
			    }
			    else {
			        document.execCommand(command, 0, args);
			    }
			},
			bindHotkeys = function (hotKeys) {
			    $.each(hotKeys, function (hotkey, command) {
			        editor.keydown(hotkey, function (e) {
			            if (editor.attr('contenteditable') && editor.is(':visible')) {
			                e.preventDefault();
			                e.stopPropagation();
			                execCommand(command);
			            }
			        }).keyup(hotkey, function (e) {
			            if (editor.attr('contenteditable') && editor.is(':visible')) {
			                e.preventDefault();
			                e.stopPropagation();
			            }
			        });
			    });
			},
			getCurrentRange = function () {

			    var sel = window.getSelection();
			    if (sel.getRangeAt && sel.rangeCount) {
			        return sel.getRangeAt(0);
			    }
			},
			saveSelection = function () {
			    selectedRange = getCurrentRange();
			},
			restoreSelection = function () {
			    var selection = window.getSelection();

			    if (selectedRange) {
			        try {
			            selection.removeAllRanges();
			        } catch (ex) {
			            document.body.createTextRange().select();
			            document.selection.empty();
			        }

			        selection.addRange(selectedRange);
			    }
			},
			insertFiles = function (files) {

			    editor.focus();
			    execCommand('insertimage', $ui.getImg(EditUploadImage(files)));

			},
			markSelection = function (input, color) {
			    restoreSelection();
			    if (document.queryCommandSupported('hiliteColor')) {
			        document.execCommand('hiliteColor', 0, color || 'transparent');
			    }
			    saveSelection();
			    input.data(options.selectionMarker, color);
			},
			bindToolbar = function (toolbar, options) {
			    toolbar.find(toolbarBtnSelector).click(function () {
			        restoreSelection();
			        editor.focus();
			        execCommand($(this).data(options.commandRole));
			        saveSelection();
			    });
			    toolbar.find('[data-toggle=dropdown]').click(restoreSelection);

			    toolbar.find('input[type=text][data-' + options.commandRole + ']').on('webkitspeechchange change', function () {
			        var newValue = this.value;
			        this.value = '';
			        restoreSelection();
			        if (newValue) {
			            editor.focus();
			            execCommand($(this).data(options.commandRole), newValue);
			        }
			        saveSelection();
			    }).on('focus', function () {
			        var input = $(this);
			        if (!input.data(options.selectionMarker)) {
			            markSelection(input, options.selectionColor);
			            input.focus();
			        }
			    }).on('blur', function () {
			        var input = $(this);
			        if (input.data(options.selectionMarker)) {
			            markSelection(input, false);
			        }
			    });
			    toolbar.find('input[type=file][data-' + options.commandRole + ']').change(function () {
			        restoreSelection();
			        if (this.type === 'file' && this.files && this.files.length > 0) {
			            insertFiles(this.files);
			        }
			        saveSelection();
			        this.value = '';
			    });
			},
			initFileDrops = function () {
			    editor.on('dragenter dragover', false)
				    .on('drop', function (e) {
					    var dataTransfer = e.originalEvent.dataTransfer;
					    e.stopPropagation();
					    e.preventDefault();
					    if (dataTransfer && dataTransfer.files && dataTransfer.files.length > 0) {
					        insertFiles(dataTransfer.files);
					    }
				    });
			};
        options = $.extend({}, $.fn.wysiwyg.defaults, userOptions);
        toolbarBtnSelector = 'a[data-' + options.commandRole + '],button[data-' + options.commandRole + '],input[type=button][data-' + options.commandRole + ']';

        bindHotkeys(options.hotKeys);
        if (options.dragAndDropImages) {
            initFileDrops();
        }

        bindToolbar($(options.toolbarSelector), options);
        editor.attr('contenteditable', true)
        .on('mouseup keyup mouseout', function () {
            saveSelection();
        });
        $(window).bind('touchend', function (e) {
            var isInside = (editor.is(e.target) || editor.has(e.target).length > 0),
				currentRange = getCurrentRange(),
				clear = currentRange && (currentRange.startContainer === currentRange.endContainer && currentRange.startOffset === currentRange.endOffset);
            if (!clear || isInside) {
                saveSelection();
            }
        });
        return this;
    };
    $.fn.wysiwyg.defaults = {
        hotKeys: {
            'ctrl+b meta+b': 'bold',
            'ctrl+i meta+i': 'italic',
            'ctrl+u meta+u': 'underline',
            'ctrl+z meta+z': 'undo',
            'ctrl+y meta+y meta+shift+z': 'redo',
            'ctrl+l meta+l': 'justifyleft',
            'ctrl+r meta+r': 'justifyright',
            'ctrl+e meta+e': 'justifycenter',
            'ctrl+j meta+j': 'justifyfull',
            'shift+tab': 'outdent',
            'tab': 'indent'
        },
        toolbarSelector: '[data-role=editor-toolbar]',
        commandRole: 'edit',
        activeToolbarClass: 'btn-info',
        selectionMarker: 'edit-focus-marker',
        selectionColor: 'darkgrey',
        dragAndDropImages: true,
        fileUploadError: function (reason, detail) { console.log("File upload error", reason, detail); }
    };

} (window.jQuery));

/* editorID     编辑器ID
 * toolsID      工具栏ID
 * fileID       文件ID
 */
function uploadEdit(editorID, toolsID, fileID) {
    fileID = "fileImages";
    defailtsCss(fileID, toolsID, editorID);
    function initToolbarBootstrapBindings() {
        var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
             'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
             'Times New Roman', 'Verdana'],
             fontTarget = $('[title=Font]').siblings('.dropdown-menu');
        $.each(fonts, function (idx, fontName) {
            fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
        });
        $('a[title]').tooltip({ container: 'body' });
        $('.dropdown-menu input').click(function () { return false; })
            .change(function () { $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle'); })
        .keydown('esc', function () { this.value = ''; $(this).change(); });

        $('[data-role=magic-overlay]').each(function () {
            var overlay = $(this), target = $(overlay.data('target'));
            overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(25).height(28);
        });
    };
    function showErrorAlert(reason, detail) {
        var msg = '';
        if (reason === 'unsupported-file-type') { msg = "Unsupported format " + detail; }
        else {
            console.log("error uploading file", reason, detail);
        }
        $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
         '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
    };
    initToolbarBootstrapBindings();
    $('#' + editorID + '').wysiwyg({ toolbarSelector: '[data-role=' + editorID + '-toolbar]' });

    var consoleTimeout;
    $(".minicolors").minicolors({
        control: $(this).attr('data-control') || 'hue',
        defaultValue: $(this).attr('data-default-value') || '',
        inline: $(this).hasClass('inline'),
        letterCase: $(this).hasClass('uppercase') ? 'uppercase' : 'lowercase',
        opacity: $(this).hasClass('opacity'),
        position: $(this).attr('data-position') || 'default',
        styles: $(this).attr('data-style') || '',
        swatchPosition: $(this).attr('data-swatch-position') || 'left',
        textfield: !$(this).hasClass('no-textfield'),
        theme: $(this).attr('data-theme') || 'default',
        change: function (hex, opacity) {
            // Generate text to show in console
            text = hex ? hex : 'transparent';
            if (opacity) text += ', ' + opacity;
            text += ' / ' + $(this).minicolors('rgbaString');
            // Show text in console; disappear after a few seconds
            $('#console').text(text).addClass('busy');
            clearTimeout(consoleTimeout);
            consoleTimeout = setTimeout(function () {
                $('#console').removeClass('busy');
            }, 3000);

            var c = $(this).val();
            var selection;
			if (window.getSelection){
                selection = window.getSelection();
            } else if (document.getSelection){
                selection = document.getSelection();
            } else if (document.selection){
                selection = document.selection.createRange().text;
            }
            $("#" + editorID + "").focus();
            document.execCommand('ForeColor', 0, c);

        }
    });

}
function defailtsCss(fileID, MenuID, editorID) {
    var edithtml = "<div class='btn-toolbar' data-role='" + editorID + "-toolbar' data-target='#" + editorID + "'>" +
        "<div class='btn-group'>" +
            "<a class='btnNew dropdown-toggle EditFont3' data-toggle='dropdown' title='Font'><i class='icon-font'></i></a>" +
            "<ul class='dropdown-menu'></ul>" +
        "</div>" +
        "<div class='btn-group'>" +
            "<a class='btnNew dropdown-toggle EditFont3' style='padding:0;border:none' data-toggle='dropdown' title=''><input class='minicolors' data-default-value='#f5f5f5' type='text' style='display:none'></a>" +
        "</div>" +
        "<div class='btn-group'>" +
            "<a class='btnNew dropdown-toggle EditFont3' data-toggle='dropdown' title='Font Size'><i class='icon-text-height'></i></a>" +
           " <ul class='dropdown-menu'>" +
                "<li><a data-edit='fontSize 5'><font size='5'>Huge</font></a></li>" +
                "<li><a data-edit='fontSize 3'><font size='3'>Normal</font></a></li>" +
                "<li><a data-edit='fontSize 1'><font size='1'>Small</font></a></li>" +
            "</ul>" +
        "</div>" +
        "<div class='btn-group'>" +
            "<a class='btnNew EditFont3' data-edit='bold' title='Bold (Ctrl/Cmd+B)'><i class='icon-bold'></i></a>" +
            "<a class='btnNew EditFont3' data-edit='italic' title='Italic (Ctrl/Cmd+I)'><i class='icon-italic'></i></a>" +
            "<a class='btnNew EditFont3' data-edit='strikethrough' title='Strikethrough'><i class='icon-strikethrough'></i></a>" +
            "<a class='btnNew EditFont3' data-edit='underline' title='Underline (Ctrl/Cmd+U)'><i class='icon-underline'></i></a>" +
        "</div>" +
        "<div class='btn-group'>" +
//            "<a class='btnNew EditFont3' data-edit='insertunorderedlist' title='Bullet list'><i class='icon-list-ul'></i></a> " +
//            " <a class='btnNew EditFont3' data-edit='insertorderedlist' title='Number list'><i class='icon-list-ol'></i></a> " +
            "<a class='btnNew EditFont3' data-edit='outdent' title='Reduce indent (Shift+Tab)'><i class='icon-indent-left'></i></a> " +
            " <a class='btnNew EditFont3' data-edit='indent' title='Indent (Tab)'><i class='icon-indent-right'></i></a> " +
        " </div> " +
         "<div class='btn-group'> " +
            " <a class='btnNew EditFont3' data-edit='justifyleft' title='Align Left (Ctrl/Cmd+L)'><i class='icon-align-left'></i></a> " +
            "<a class='btnNew EditFont3' data-edit='justifycenter' title='Center (Ctrl/Cmd+E)'><i class='icon-align-center'></i></a> " +
            "<a class='btnNew EditFont3' data-edit='justifyright' title='Align Right (Ctrl/Cmd+R)'><i class='icon-align-right'></i></a> " +
            " <a class='btnNew EditFont3' data-edit='justifyfull' title='Justify (Ctrl/Cmd+J)'><i class='icon-align-justify'></i></a> " +
        " </div> " +
         "<div class='btn-group'> " +
             "<a class='btnNew  EditFont3' data-toggle='dropdown' title='Hyperlink'><i class='icon-link'></i></a> " +
             "<a class='EditFont3 btnNew' data-edit='unlink' title='Remove Hyperlink'><i class='icon-cut'></i></a> " +
        " <div class='dropdown-menu'> " +
            " <input class='span2' placeholder='URL' type='text' data-edit='createLink' style='min-width:100px;vertical-align:top'/> " +
            "  <button class='btnNew' type='button'>Add</button> " +
         "</div> " +
        " <div class='btn-group'> " +
            " <a class='btnNew EditFont3' title='Insert picture' id='" + fileID + "1'><i class='icon-picture'></i></a> " +
            " <input type='file' id='" + fileID + "' data-role='magic-overlay' data-target='#" + fileID + "1' data-edit='insertImage'  style='style='width:25px;height:28px' /> " +
         "</div> " +
     "</div>"
    $(edithtml).insertAfter('#' + MenuID + '');
}

var linkType = {
    'CustImportFiles': 'CIF',
    'TradeImportFiles': 'TIF',
    'Social_Files': 'SF',
    'Rewards_CouponBackGround': 'RC',
    'Rewards_QRCode': 'RQ',
    'Rewards_BarCode': 'RB',
    'Campaign_Files': 'CF',
    'Campaign_Email': 'CE',
    'Campaign_Facebook': 'CFB',
    'Campaign_Weibo': 'CW',
    'Campaign_Wechat': 'CWT',
    'Base_Files': 'BF'
};

//上传图片
function EditUploadImage(files) {
    return $ui.fileupload({
        fileId: "fileImages",
        type: FILETYPE.IMAGE,
        moudle: 'BASE'
    });
    return false;
}

function jsNewGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}
