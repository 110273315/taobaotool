'use strict';

define(['app', 'jscript/utils/route-config'], function (app) {

    return app.filter('sortFilter', function () {
        return function (input) {
            if (input.toUpperCase() == 'ASC')
                return "DESC";
            else
                return "ASC";
        }
    }).filter('cutStringFilter', function () {
        return function (str, len) {
            if (!str) return str;
            len = len || 9999;
            var str_length = 0;
            var str_len = 0;
            var str_cut = "";
            var a = "";
            str_len = str.length;
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
            //如果给定字符串小于指定长度，则返回源字符串；  
            //if (str_length <= len) {
            return str;
            //}
        }
    }).filter('formatDateTime', function () {
        /*
        *用于格式化日期控件（yyyy-MM-dd hh:mm:ss）
        *@type  {string} 值为d or t ,d：yyyy-MM-dd 只显示日期；t:hh:mm:ss 只显示时间
        *return 格式化的值，如无法格式化，返回原值
        */
        return function (str, type) {
            try {
                var val = str.replace(/-/g, '/');
                var data = new Date(val);
                var reg = 'yyyy-MM-dd hh:mm:ss';
                if (!!type && type == 'd') {
                    reg = 'yyyy-MM-dd';
                } else if (!!type && type == 't') {
                    reg = 'hh:mm:ss';
                }
                return data.format(reg);
            }
            catch (e) {
                return str;
            }
        }
    }).filter("getIs3LevelMenu", function () {
        /*query为false的时候，表示不包含三级结构的菜单；为true，表示只包含三级结构的菜单*/
        return function (e, query) {
            var filterArray = [];
            angular.forEach(e, function (menu) {
                //不包含三级结构的菜单
                if (!query && (!menu.children || menu.children.length <= 0)) {
                    filterArray.push(menu);
                }

                //只包含三级结构的菜单
                if (query && menu.children && menu.children.length > 0) {
                    filterArray.push(menu);
                }
            });
            return filterArray;
        }
    }).filter('getModuleMenuList', function () {
        /*得到模块或者菜单*/
        return function (shortCutMenuList, moduleKey) {
            shortCutMenuList = shortCutMenuList || [];
            moduleKey = moduleKey || "";

            var list = [];
            angular.forEach(shortCutMenuList, function (obj, index) {
                if (obj.pkey == moduleKey) {
                    list.push(obj);
                }
            });

            return list;
        }
    }).filter('joinOption', function () {
        return function (item) {
            return item.path + item.lan + (item.dis ? '/dis/' : '/') + item.img;
        }
    }).filter('displayStartORStop', function() {
        return function(input, idx) {
            if (idx == 'class') {
                if (input == '0') {
                    return 'iconStop';
                };
                return 'iconStart';
            };
            if (idx == 'icon') {
                if (input == '0') {
                    return 'stop';
                };
                return 'start';
            };
            if (idx == 'lan') {
                if (input == '0') {
                    return 'Stop';
                };
                return 'Start';
            };
            return;
        }
    }).filter('menui18nName', function () {
        return function (item) {
            return $ui.readCookie('language') === 'En' ? item.enname : item.chname;
        }
    }).filter('codeI18nName', function () {
        return function (key) {
            if(!key) {
                return ''
            }
            var lan = $ui.readCookie('language').toLowerCase()
            if($ui.codesI18n[key]) {
                return $ui.codesI18n[key][lan]
            } else {
                console.warn('未知代码key：' + key)
                return ''
            }
        }
    }).filter('imageLoad', function () {
        return function (uuid) {
            if (/http:\/\//g.test(uuid)) {
                return uuid;
            } else {
                return $ui.getResourceLocation(uuid);
            }
        }
    });

    return app;
});