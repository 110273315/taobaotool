/*
*UI Framework公共类库
* @autor         lidongliang
* @date          2014-03-21
*/
var $tree = {
    //对象数据集
    objData: {},
    //引用对象
    scope: {},
    //状态对象
    bool: {},
    //初始化
    init: function (obj, callback) {
        setTimeout(function () {
            obj.isTiling ? $tree.jsTreeTile_init(obj, callback) : $tree.jsTreeInit_init(obj, callback);
        }, 0);
    },
    /* *
     * jsTree初始化公共方法
     * */
    jsTreeInit_init: function (obj, callback) {
        //定义变量并赋值
        var arrData = [],
            //是否多选
            plugins = ["themes", "types", "ui", "json_data", "crrm", "hotkeys"].concat(obj.isCheckbox || false ? ["checkbox"] : []);

        //初始化赋值
        $tree.objData[obj.id] = obj;

        //初始化
        function init() {
            //初始化展开,取消自定义展开
            obj.expand = obj.isExpandAll ? [] : obj.expand;
            //重组结构
            $tree.jsTreeDataCallback(obj, obj.pid || 0, arrData);

            //初始化树
            $("#" + obj.id).jstree({
                "json_data": {
                    "data": arrData
                },
                "types": {
                    "max_depth": -2,
                    "max_children": -2,
                    "valid_children": ["folder"],
                    "types": {
                        // The default type
                        "default": {
                            "valid_children": "all",
                            "check_node": true,
                            "uncheck_node": true
                        },
                        "file": {
                            "valid_children": "none",
                            "check_node": true,
                            "uncheck_node": true
                        },
                        "folder": {
                            "valid_children": "file",
                            "check_node": true,
                            "uncheck_node": true
                        }
                    }
                },
                "plugins": plugins,
                "core": {
                    "animation": 100,
                    "initially_open": obj.expand || []
                },
                // set a theme
                "themes": {
                    "theme": "proton",
                    "dots": obj.isDots == undefined ? true : obj.isDots,
                    "icons": obj.icon || obj.defaultIcon ? true : false
                }
            });

            //默认选择
            $.each(obj.selected || [], function (i, n) {
                //自动选中
                setTimeout(function () {
                    if (n.toString().length) {
                        $.jstree._focused()[obj.isCheckbox || false ? "check_node" : "select_node"]("#" + (obj.marking || '') + n);
                    }
                }, 0);
                //是否启用权限
                if (obj.operate && obj.operate.permissions && obj.operate.permissions.isEnable) {
                    //功能权限选中
                    if (obj.totalValue && obj.totalValue.length == obj.selected.length) {
                        //循环赋权限
                        $.each(obj.data || [], function (j, m) {
                            //是否为选中的
                            if (m.id && n == m.id) {
                                //是否存在功能权限值
                                m.value = m.value ? m.value.split(',') : [];
                                //循环功能
                                $.each(m.value || [], function (k, o) {
                                    //是否有该权限
                                    if ((o & obj.totalValue[i]) == o) {
                                        //赋值权限
                                        setTimeout(function () {
                                            $('#' + (obj.marking || '') + n + ' .checkbox').filter("[value='" + o + "']").prop('checked', true);
                                        }, 0);
                                    }
                                });
                            }

                        });
                    }
                }
            });
            //定义树多选状态变量
            $tree.bool[obj.id] = {};
            $tree.bool[obj.id][obj.id] = true;
            //是否启用权限
            if (obj.operate && obj.operate.permissions && obj.operate.permissions.isEnable || (obj.isRegisterState || false)) {
                setTimeout(function () {
                    //默认选择状态
                    if (obj.isCheckbox) {
                        //初始化状态
                        $.each(obj.data || [], function (l, t) {
                            if (t.id.toString().length) {
                                $tree.bool[obj.id][(obj.marking || '') + t.id] = $.jstree._focused()[obj.isCheckbox || false ? "is_checked" : "is_selected"](obj.isCheckbox || false ? ("#" + (obj.marking || '') + t.id) : "[name='" + (obj.marking || '') + t.id + "']");
                            }
                        });
                    }
                }, 0);
            }
            setTimeout(function () {
                $('#' + obj.id).find(".jstree-checkbox").attr('style', $tree.sizeStyle(obj.id, obj.styleValue || 0).checkStyle);
                $('#' + obj.id).find(".jstree-icon").attr('style', $tree.sizeStyle(obj.id, obj.styleValue || 0).checkStyle);
                if (obj.operate && (obj.operate.isDisplay || false)) {
                    $('#' + obj.id).find(".Jurisdiction").hide();
                }
            });
            //回调
            callback ? callback() : null;
        }

        //初始化数据源
        if (obj.url) {
            //根据Url获取数据源
            $ui.ajax({
                //url
                url: obj.url,
                //参数
                data: obj.params,
                type: 'get',
                success: function (data) {
                    //是否存在返回值
                    if (data.msgbody && data.msgbody.power && data.msgbody.power.length) {
                        //赋值
                        obj.data = obj.data ? obj.data.concat(data.msgbody.power ? data.msgbody.power : []) : data.msgbody.power ? data.msgbody.power : [];
                        obj.selected = data.msgbody.selected ? obj.selected ? obj.selected.concat(data.selected['selected'].split(',')) : data.msgbody.selected['selected'].split(',') : obj.selected;
                        if (data.msgbody.selected) {
                            $tree.objData[obj.id]['objsetting'] = [data.msgbody.selected['IsCheck'], data.msgbody.selected['IsPublish']];
                        }
                        //是否启用权限
                        if (obj.operate && obj.operate.permissions && obj.operate.permissions.isEnable) {
                            obj.totalValue = data.msgbody.selected ? data.msgbody.selected['value'] ? data.msgbody.selected['value'].split(',') : null : null;
                            // console.log('总共拿到value值：' + obj.totalValue.length + '条'); // 54
                            // console.log('总共拿到id值：' + data.msgbody.selected.selected.split(',').length + '条'); // 28

                        }
                        //初始化
                        init();
                    } else {
                        $ui.alert({ msg: $ui.language.Base.initFailed, type: 'error', close: true });
                    }
                },
                moudle: obj.moudle || 'BASE'
            });
        } else {
            //初始化
            init();
        }
    },
    /* *
     * jsTree平铺树初始化公共方法
     * */
    jsTreeTile_init: function (obj, callback) {
        //生成平铺树
        setTimeout(function () {
            //是否存在控件
            if (obj.id) {
                //初始化赋值
                $tree.objData[obj.id] = obj;
                //样式
                var objCss = {};
                for (var name in (obj.stateStyle || {})) {
                    objCss[name] = "";
                }
                //树主样式添加
                $('#' + obj.id)
                    //添加样式
                    .addClass('jstree jstree-focused jstree-proton')
                    //添加主菜单
                    .append('<ul id="' + obj.id + 'Ul" class="jstree-no-icons">' +
                                '<li id="' + obj.id + 'Li" class="jstree-last jstree-open jstree-unchecked" style="margin-left: 18px">' +
                                    '<ins style="margin-left: 3px;" onclick="$(\'#' + obj.id + 'Li\').is(\'.jstree-closed\')?$(\'#' + obj.id + 'Li\').attr(\'class\',\'jstree-last jstree-open jstree-unchecked\'):$(\'#' + obj.id + 'Li\').attr(\'class\',\'jstree-last jstree-closed jstree-unchecked\')"></ins>' +
                                    '<a id="all_" href="javascript:void(0);" style="height: 34px; padding: 3px 5px 3px;' + (obj.aStyle || '') + '" >&nbsp;<ins id="' + obj.id + 'InsALL" class="jstree-checkbox jstree-left" value="0" aria-selected="true" style="margin-top: 9px;background-position: -37px -19px;" onclick="$(this).attr(\'aria-selected\',$(this).attr(\'aria-selected\') == \'true\'?false:true);$(this).attr(\'style\',$(this).attr(\'aria-selected\') == \'true\'?\'background-position: -37px -19px;margin-top: 9px;\':\'margin-top: 9px;\');$(\'#' + obj.id + 'UlAll .jstree-checkbox\').attr(\'aria-selected\',$(this).attr(\'aria-selected\') == \'true\'?true:false);$(\'#' + obj.id + 'UlAll .jstree-checkbox\').attr(\'style\',$(this).attr(\'aria-selected\') == \'true\'?\'background-position: -37px -19px;margin-top: 9px;\':\'margin-top: 9px;\');">&nbsp;</ins>&nbsp;' +
                                         obj.title +
                                    '</a>' +
                                    '<ul id="' + obj.id + 'UlAll" class="jstree-no-icons" style="margin-left: -18px;"><ul>' +
                                '<li>' +
                            '</ul>');
                $('#' + obj.id + 'Li a').mouseover(function () {
                    $(this).addClass('jstree-clicked')
                           .css(obj.stateStyle || {});
                }).mouseout(function () {
                    $(this).not('[stateStyle="true"]')
                           .removeClass('jstree-clicked')
                           .css(objCss);
                }).click(function () {
                    $('#' + obj.id + ' a').removeAttr('stateStyle')
                                          .removeClass('jstree-clicked')
                                          .css(objCss);
                    $(this).attr('stateStyle', true)
                           .addClass('jstree-clicked')
                           .css(obj.stateStyle || {});
                });
                //初始化
                function init() {
                    //定义节点行id
                    var id = 0;
                    var selectStyle = '';
                    //生成节点元素
                    $.each(obj.data || [], function (i, n) {
                        //选择样式
                        if (n.selected) {
                            selectStyle = 'margin-top: 9px;background-position: -37px -19px;';
                        } else {
                            selectStyle = 'margin-top: 9px;';
                            //取消选中
                            $('#' + obj.id + 'InsALL').attr('aria-selected', false).attr('style', selectStyle);
                        }
                        //每行显示几个
                        if (i % (obj.column || 8) == 0) {
                            //添加树节点
                            $("#" + obj.id + "UlAll").append('<li id="' + obj.id + i + '" class="jstree-last jstree-closed jstree-unchecked" style="margin-left: 18px">' +
                                '<ins class="jstree-undefined"></ins>' +
                                '<a href="javascript:void(0);" style="font-family: Arial, Helvetica, sans-serif;width:80px;height: 34px; padding: 3px 5px 3px;' + (obj.aStyle || '') + '" >&nbsp;' +
                                    '<ins id="' + n.id + '" class="jstree-checkbox" aria-selected="' + (n.selected || false) + '" value="' + (n.value || 0) + '" style="margin-left: -2px;' + selectStyle + '" onclick="' +
                                    '$(this).attr(\'aria-selected\',$(this).attr(\'aria-selected\')==\'true\'?false:true);' +
                                    '$(this).attr(\'style\',$(this).attr(\'aria-selected\')==\'true\'?\'background-position: -37px -19px;margin-top: 9px;\':\'margin-top: 9px;\');' +
                                    '$(\'#' + obj.id + 'InsALL\').attr(\'aria-selected\',$(\'#' + obj.id + 'UlAll .jstree-checkbox\').size() == $(\'#' + obj.id + 'UlAll .jstree-checkbox\').filter(\'[aria-selected=\\\'true\\\']\').size()?true:false);' +
                                    '$(\'#' + obj.id + 'InsALL\').attr(\'style\',$(\'#' + obj.id + 'UlAll .jstree-checkbox\').size() == $(\'#' + obj.id + 'UlAll .jstree-checkbox\').filter(\'[aria-selected=\\\'true\\\']\').size()?\'background-position: -37px -19px;margin-top: 9px;\':\'margin-top: 9px;\');' +
                                    '">&nbsp;</ins>&nbsp;' +
                                    n.text || '' +
                                '</a>' +
                            '</li>');
                            //重置id
                            id = i;
                        } else {
                            $("#" + obj.id + id).append('<a href="javascript:void(0);" style="font-family: Arial, Helvetica, sans-serif;width:80px;height: 34px; padding: 3px 5px 3px;' + (obj.aStyle || '') + '">&nbsp;' +
                                '<ins id="' + n.id + '" class="jstree-checkbox" aria-selected="' + (n.selected || false) + '" value="' + (n.value || 0) + '" style="margin-left: -2px;' + selectStyle + '" onclick="' +
                                '$(this).attr(\'aria-selected\',$(this).attr(\'aria-selected\')==\'true\'?false:true);' +
                                '$(this).attr(\'style\',$(this).attr(\'aria-selected\')==\'true\'?\'background-position: -37px -19px;margin-top: 9px;\':\'margin-top: 9px;\');' +
                                '$(\'#' + obj.id + 'InsALL\').attr(\'aria-selected\',$(\'#' + obj.id + 'UlAll .jstree-checkbox\').size() == $(\'#' + obj.id + 'UlAll .jstree-checkbox\').filter(\'[aria-selected=\\\'true\\\']\').size()?true:false);' +
                                '$(\'#' + obj.id + 'InsALL\').attr(\'style\',$(\'#' + obj.id + 'UlAll .jstree-checkbox\').size() == $(\'#' + obj.id + 'UlAll .jstree-checkbox\').filter(\'[aria-selected=\\\'true\\\']\').size()?\'background-position: -37px -19px;margin-top: 9px;\':\'margin-top: 9px;\');' +
                                '">&nbsp;</ins>&nbsp;' +
                                n.text || '' +
                            '</a>');
                        }
                        $('#' + n.id).parents("a").eq(0).mouseover(function () {
                            $(this).addClass('jstree-clicked')
                                   .css(obj.stateStyle || {});
                        }).mouseout(function () {
                            $(this).not('[stateStyle="true"]')
                                   .removeClass('jstree-clicked')
                                   .css(objCss);
                        }).click(function () {
                            $('#' + obj.id + ' a').removeAttr('stateStyle')
                                                  .removeClass('jstree-clicked')
                                                  .css(objCss);
                            $(this).attr('stateStyle', true)
                                   .addClass('jstree-clicked')
                                   .css(obj.stateStyle || {});
                        });
                    });
                }
                //初始化数据源
                if (obj.url) {
                    //根据Url获取数据源
                    $ui.ajax({
                        //url
                        url: obj.url,
                        //参数
                        data: obj.params,
                        type: 'get',
                        async: false,
                        success: function (data) {
                            //是否存在返回值
                            if (data.status == 200) {
                                //赋值
                                obj.data = obj.data ? obj.data.concat(data.msgbody) : data.msgbody;
                                obj.data = obj.data ? obj.data : [];
                                $.each(obj.data, function (i, n) {
                                    obj.data[i]['selected'] = $tree.select(n.id, data.selected, false);
                                });
                                init();
                            } else {
                                $ui.alert({ msg: $ui.language.Base.initFailed, type: 'error', close: true });
                            }
                        },
                        moudle: obj.moudle || 'BASE'
                    });
                } else {
                    obj.data = obj.data ? obj.data : [];
                    init();
                }
                //删除空节点
                $('#' + obj.id).find('ul li').not('[id]').remove();
                //去选中
                if (!$("#" + obj.id + "UlAll").find('li').size()) {
                    //取消选中
                    $('#' + obj.id + 'InsALL').attr('aria-selected', false).attr('style', 'margin-top: 9px;');
                }
                //回调
                callback ? callback() : null;
            }
        }, 0);
    },
    //选中
    select: function (id, arrData, bl) {
        if (arrData && arrData['selected']) {
            //遍历
            $.each(arrData['selected'].split(',') || [], function (i, n) {
                if (n == id) {
                    bl = true;
                }
            });
        }
        return bl;
    },
    /* *
     * jsTree回调方法
     * */
    jsTreeCallback: function (id, data, callback) {
        //执行方法
        if (typeof callback != 'undefined' && callback instanceof Function) {
            //返回值
            setTimeout(function () {
                data['treeid'] = id;
                data['isLastNode'] = $('#' + id).find("#" + ($tree.objData[id].marking || '') + data.id + " ul").size() ? false : true;
                //颜色样式控制
                $('#' + id + " a").filter('.jstree-clicked').removeClass('jstree-clicked');
                $('#' + id).find("[name='" + ($tree.objData[id].marking || '') + data.id + "']").addClass('jstree-clicked');
                var obj = {};
                for (var name in ($tree.objData[id].stateStyle || {})) {
                    obj[name] = "";
                }
                $('#' + id + " a").css(obj);
                $('#' + id).find("[name='" + ($tree.objData[id].marking || '') + data.id + "']").css($tree.objData[id].stateStyle || {});
                callback(data, $.jstree._focused()[$tree.objData[id].isCheckbox || false ? "is_checked" : "is_selected"]($tree.objData[id].isCheckbox || false ? "#" + ($tree.objData[id].marking || '') + data.id : "[name='" + ($tree.objData[id].marking || '') + data.id + "']"), $("[key='" + ($tree.objData[id].marking || '') + data.id + "']").filter("[value='" + data.value + "']").find('input'));
            }, 0);
        }
    },
    /* *
     * jsTree双击回调方法
     * */
    jsTreedbCallback: function (id, data, callback) {
        //执行方法
        if (typeof callback != 'undefined' && callback instanceof Function) {
            //返回值
            setTimeout(function () {
                data['treeid'] = id;
                data['isLastNode'] = $('#' + id).find("#" + ($tree.objData[id].marking || '') + data.id + " ul").size() ? false : true;
                callback(data, $.jstree._focused()[$tree.objData[id].isCheckbox || false ? "is_checked" : "is_selected"]($tree.objData[id].isCheckbox || false ? "#" + ($tree.objData[id].marking || '') + data.id : "[name='" + ($tree.objData[id].marking || '') + data.id + "']"));
            }, 0);
        }
    },
    /* *
     * jsTree鼠标悬停回调方法
     * */
    jsTreeOverCallback: function (id, data, callback) {
        //颜色样式控制
        $('#' + id).find("[name='" + ($tree.objData[id].marking || '') + data.id + "']").css($tree.objData[id].stateStyle || {});
        if ($tree.objData[id].operate && ($tree.objData[id].operate.isDisplay || false)) {
            $('#' + id).find("#" + data.id + " .Jurisdiction").show();
        }
        //执行方法
        if (typeof callback != 'undefined' && callback instanceof Function) {
            //返回值
            setTimeout(function () {
                data['treeid'] = id;
                data['isLastNode'] = $('#' + id).find("#" + ($tree.objData[id].marking || '') + data.id + " ul").size() ? false : true;
                callback(data, $.jstree._focused()[$tree.objData[id].isCheckbox || false ? "is_checked" : "is_selected"]($tree.objData[id].isCheckbox || false ? "#" + ($tree.objData[id].marking || '') + data.id : "[name='" + ($tree.objData[id].marking || '') + data.id + "']"));
            }, 0);
        }
    },
    /* *
     * jsTree鼠标离开回调方法
     * */
    jsTreeOutCallback: function (id, data, callback) {
        //颜色样式控制
        var obj = {};
        for (var name in ($tree.objData[id].stateStyle || {})) {
            obj[name] = "";
        }
        $('#' + id).find("[name='" + ($tree.objData[id].marking || '') + data.id + "']").not(".jstree-clicked").css(obj);
        if ($tree.objData[id].operate && ($tree.objData[id].operate.isDisplay || false)) {
            $('#' + id).find("#" + data.id + " .Jurisdiction").hide();
        }
        //执行方法
        if (typeof callback != 'undefined' && callback instanceof Function) {
            //返回值
            setTimeout(function () {
                data['treeid'] = id;
                data['isLastNode'] = $('#' + id).find("#" + ($tree.objData[id].marking || '') + data.id + " ul").size() ? false : true;
                callback(data, $.jstree._focused()[$tree.objData[id].isCheckbox || false ? "is_checked" : "is_selected"]($tree.objData[id].isCheckbox || false ? "#" + ($tree.objData[id].marking || '') + data.id : "[name='" + ($tree.objData[id].marking || '') + data.id + "']"));
            }, 0);
        }
    },
    /* *
     * jsTree获取选择的值
     * */
    getSelectd: function (id, callback, isTiling) {
        //初始化空
        var result = isTiling ? {} : [];

        //平铺取值
        if (isTiling) {
            result['id'] = [];
            result['value'] = [];
            //遍历组装返回值
            $.each($("#" + id).find(".jstree-checkbox").filter("[aria-selected='true']"), function (i, n) {
                if ($("#" + n.id).attr('value') != 0) {
                    result['id'].push(n.id);
                    result['value'].push($("#" + n.id).attr('value'));
                }
            });
        } else {
            //遍历组装返回值
            $.each($("#" + id).find($tree.objData[id].isCheckbox || false ? "li" : "a").filter($tree.objData[id].isCheckbox || false ? '.jstree-checked' : '.jstree-clicked'), function (i, n) {
                result.push($(n).attr($tree.objData[id].isCheckbox || false ? "id" : "name").replace(($tree.objData[id].marking || ''), ""));
            });
        }

        //返回选择结果
        callback(result);
    },
    /* *
     * jsTree获得中间状态
     * */
    getMediacySelectd: function (id) {
        //初始化
        var result = [];
        //遍历组装返回值
        $.each(($("#" + id).find("li").filter('.jstree-undetermined') || []), function (i, n) {
            result.push($(n).attr("id").replace(($tree.objData[id].marking || ''), ""));
        });
        return result;
    },
    /* *
     * jsTree修改选择的属性
     * */
    setAttribute: function (id, obj, callback) {
        //循环修改属性
        for (var name in obj || {}) {
            //执行修改属性
            $tree.objData[id][name] = obj[name];
        }
        //数据集
        $tree.init($tree.objData[id], callback);
    },
    /* *
     * jsTree多语言
     * */
    getLanguage: function (language, obj) {
        //返回值
        var arr = [];
        //循环语言对象
        $.each(obj.split(','), function (i, n) {
            if (language) {
                //循环语言包
                $.each(language, function (j, m) {
                    if (!arr[i]) {
                        if ($ui.languageObj.sc[m]) {
                            arr[i] = $ui.languageObj.sc[m][n];
                        }
                        if (!arr[i] && $ui.language[m]) {
                            arr[i] = $ui.language[m][n];
                        }
                    }
                });
            }
            arr[i] = arr[i] ? arr[i] : n;
        });
        return arr;
    },
    /* *
     * jsTree递归循环
     * */
    jsTreeDataCallback: function (obj, pid, arrData) {
        //循环
        $.each(obj.data, function (i, n) {
            //判断是否该上级
            if (n['pid'] == pid) {
                //重组展开
                if (obj.isExpandAll) {
                    //添加展开id
                    obj.expand.push((obj.marking || '') + n['id']);
                }

                arrData[i] = {},
                arrData[i]['data'] = {
                    'title': ($ui.readCookie('language') == 'Ch' ? n.name : n.enname) || (n['text'] ? $tree.getLanguage(obj.language, n['text'])[0] : n['text']),
                    'dataObj': { data: n, value: n['value'] ? n['value'].toString().split(',') : n['value'], key: n['keyss'] ? $tree.getLanguage(obj.language, n['keyss']) : n['keyss'] },
                    'icon': n['icon'] || obj.icon,
                    'attr': {
                        'onClick': '$tree.jsTreeCallback("' + obj.id + '",{"id":"' + n['id'] + '","text":"' + n['text'] + '","pid":"' + n['pid'] + '","title":"' + n['title'] + '","param":\'' + JSON.stringify(n['param']) + '\'},' + obj.click + ')',
                        'ondblclick': '$tree.jsTreedbCallback("' + obj.id + '",{"id":"' + n['id'] + '","text":"' + n['text'] + '","pid":"' + n['pid'] + '","title":"' + n['title'] + '","param":\'' + JSON.stringify(n['param']) + '\'},' + obj.dbClick + ')',
                        'onmouseover': '$tree.jsTreeOverCallback("' + obj.id + '",{"id":"' + n['id'] + '","text":"' + n['text'] + '","pid":"' + n['pid'] + '","title":"' + n['title'] + '","param":\'' + JSON.stringify(n['param']) + '\'},' + obj.mouseover + ')',
                        'onmouseout': '$tree.jsTreeOutCallback("' + obj.id + '",{"id":"' + n['id'] + '","text":"' + n['text'] + '","pid":"' + n['pid'] + '","title":"' + n['title'] + '","param":\'' + JSON.stringify(n['param']) + '\'},' + obj.mouseout + ')',
                        'name': (obj.marking || '') + n['id'],
                        'title': n['title'] || '',
                        'href': n['url'] || '#',
                        'style': $tree.sizeStyle(obj.id, obj.styleValue || 0).aStyle
                    },
                    'operate': obj.operate,
                    'treeControl': obj.id
                },
                arrData[i]['attr'] = {
                    "rel": obj.defaultIcon || "default",
                    "id": (obj.marking || '') + n['id'],
                    "style": $tree.sizeStyle(obj.id, obj.styleValue || 0).liStyle,
                    'type': n['type'] || ''
                },
                arrData[i]['children'] = [];
                //执行自身
                $tree.jsTreeDataCallback(obj, n['id'], arrData[i]['children']);
            }
        });
    },
    /* *
     * jsTree大小样式
     * */
    sizeStyle: function (id, size) {
        //选择样式
        switch (size) {
            //1倍
            case 1:
                return { aStyle: 'font-family: Arial, Helvetica, sans-serif;height:18px;padding:0px 3px 0px;font-size: 12px;line-height: 18px;vertical-align: top;margin-top: 10px;' + ($tree.objData[id].aStyle || ''), liStyle: 'margin-left: 21px;*margin-top: -3px;margin-top: -3px;', checkStyle: 'line-height: 16px;' };
            default:
                return { aStyle: 'font-family: Arial, Helvetica, sans-serif;height:34px;line-height: 34px;padding:3px 5px 3px;top:-2px;' + ($tree.objData[id].aStyle || ''), liStyle: 'margin-left: 21px;', checkStyle: 'line-height: 16px;' };
        }
    },
    /* *
     * jsTree控件生成
     * */
    createControl: function (obj, operate) {
        var html = "";
        switch (operate) {
            case 'permissions':
                html = "<div key='" + obj.data.id + "' value='" + obj.value + "' class='Jurisdiction'>"
                     + "<input  class=\"checkbox\" type=\"checkbox\" style=\"*margin-top:-1px;margin-top:-1px;\" value=\"" + obj.value + "\" onclick=\"$tree.jsTreeCallback(\'" + obj.id + "\',{id:\'" + obj.data['id'] + "\',text:\'" + obj.data['text'] + "\',pid:\'" + obj.data['pid'] + "\',title:\'" + obj.data['title'] + "\',param:\'" + JSON.stringify(obj.data['param']) + "\',value:\'" + obj.value + "\'}," + $tree.objData[obj.id].operate[operate].click + ")\">&nbsp;" + obj.text;
                + "<div>";
                break;
            case 'btn':
                html = "<div key='" + obj.data.id + "' value='" + obj.value + "' class='Jurisdiction'>"
                     + "<a class='btn' style='height: 14px;line-height: 14px;width:14px;padding: 1px 1px 2px 3px;top: 50%;margin-top: -4px;' onclick=\"$tree.jsTreeCallback(\'" + obj.id + "\',{id:\'" + obj.data['id'] + "\',text:\'" + obj.data['text'] + "\',pid:\'" + obj.data['pid'] + "\',title:\'" + obj.data['title'] + "\',param:\'" + JSON.stringify(obj.data['param']) + "\',value:\'" + obj.value + "\'}," + $tree.objData[obj.id].operate[obj.key].click + ");\" title='" + $tree.getLanguage($tree.objData[obj.id].language, obj.key) + "'><i class='" + obj.icon + "'></i></a>"
                     + "<div>";
                break;
        }
        return html;
    },
    /* *
     * jsTree获取控件值
     * */
    getValue: function (obj) {
        //是否存在
        if (obj) {
            //定义
            var arrValue = "", arrId = "";
            var totalNum = 0;
            //循环选择的参数 (index, value)
            $.each(obj || [], function (i, n) {
                // debugger;
                //是否存在
                if ($('[key="' + n + '"]').find(".checkbox") && $('#' + n).attr('type') == 2) {
                    //定义值 value 为权限的值的和
                    var value = 0;
                    //循环控件
                    $.each($('[key="' + n + '"]').find(".checkbox"), function (j, m) {
                        //求和 某个权限
                        if(m.checked){
                            value = value + parseInt(m.value);
                        }
                    });
                    if (n != 0) {
                        // 算出来的值的信息
                        // console.log('%s, id: %s, 权限值: %s', $.trim($('#' + n).find('.jstree-icon').next().text()).substr(0, 6), n, value );

                        //重组结构 干嘛不用数组 + join来做捏。。。 最后reverse即可。。。
                        if (i != 0) {
                            arrValue = value + "," + arrValue;
                            arrId = n + "," + arrId;
                        } else {
                            arrValue = value;
                            arrId = n;
                        }
                        totalNum++;
                    }
                }
            });
            console.log('总共插入：' + totalNum + '条');
            //重组结构
            obj = { id: arrId, value: arrValue, type: 1 };
        }
        //返回值
        return obj;
    }
}