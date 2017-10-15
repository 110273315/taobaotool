'use strict';

require.config({
    waitSeconds: 60,// 超时时间,单位是秒
    paths: {
        jquery: 'jscript/jquery.min',
        routes: '../../routes',
        filters: 'filters',
        text: 'plugin/require/text',
        angular: 'plugin/angular/angular.min',
        common: 'jscript/common',
        common_version5: 'jscript/common_version5',
        bootstraps: 'jscript/bootstrap',
        accordion: 'jscript/accordion.nav',
        angular_check: 'plugin/angular/angular-checklist-model',
        jqueryUi: 'jscript/jquery-ui-1.10.1.custom.min',
        choose: 'plugin/chose/chosen.jquery',
        mulitselect: 'plugin/multiselect/jquery.multiselect',
        data1: 'plugin/datetimepick/bootstrap-datetimepicker.min',
        data2: 'plugin/datetimepick/date',
        data3: 'plugin/datetimepick/daterangepicker',
        superSlide: 'jscript/jquery.SuperSlide.2.1.1',
        valid: 'plugin/validation/jquery.validationEngine',
        valid_En: 'plugin/validation/jquery.validationEngine-en',
        angular_bootstrap_dialog: 'plugin/angular.modal/angular-bootstrap-dialog.min',
        angular_dialog: 'plugin/angular.modal/dialogs.min',
        hotkeys: 'plugin/jsTree/_lib/jquery.hotkeys',
        jstree: 'plugin/jsTree/jquery.jstree.min',
        tree: 'jscript/tree',
        jquery_qrcode: 'jscript/jquery.qrcode',
        qrcode: 'jscript/qrcode',
        jquery_date_new: 'plugin/datetimepick/jquery.datetimepicker',
        plupload: 'plugin/plupload/plupload',
        ZeroClipboard: 'jscript/zeroClipboard/ZeroClipboard',
        md5: 'jscript/md5',
        blockUI: 'jscript/jquery.blockUI',
        highchart: 'plugin/highcharts/js/highcharts',
        highchart3d: 'plugin/highcharts/js/highcharts-3d',
        exporting: 'plugin/highcharts/js/modules/exporting',
        indexController: '../controllers/indexController',
        moment: 'jscript/moment.min',
        underscore:'plugin/underscore/underscore-min',
        ueditor: 'plugin/uedit/ueditor.all',
        ueditorConfig: 'plugin/uedit/ueditor.config',
        UE: 'jscript/uedit' ,// 封装过的 uedit
        ztreePlus:'plugin/ztree/jquery.ztree.all-3.5.min',
        ztree:'plugin/ztree/ztree',
        datagridHTML: '../ui/datagrid'
    },
    shim: {
        'jquery': {
            exports: ['$', 'jQuery']
        },
        'angular': {
            exports: 'angular',
            deps:['jquery']
        },
        'bootstraps': {
            deps: ['jquery']
        },
        'jquery_qrcode': {
            deps: ['jquery']
        },
        'data1': {
            deps: ['jquery']
        },
        //'fileupload': {
        //    deps: ['jquery']
        //},
        'hotkeys': {
            deps: ['jquery']
        },
        'data2': {
            deps: ['jquery']
        },
        'data3': {
            deps: ['jquery']
        },
        'jquery_date_new': {
            deps: ['jquery']
        },
        'choose': {
            deps: ['jquery']
        },
        'valid': {
            deps: ['jquery']
        },
        'valid_En': {
            deps: ['jquery']
        },
        'jqueryUi': {
            deps: ['jquery']
        },
        'mulitselect': {
            deps: ['jquery', 'jqueryUi']
        },
        'accordion': {
            deps: ['jquery']
        },
        'angular_bootstrap_dialog': {
            deps: ['angular']
        },
        'angular_dialog': {
            deps: ['angular']
        },
        'angular_check': {
            deps: ['angular']
        },
        'common': {
            deps: ['jquery']
        },
        'common_version5': {
            deps: ['jquery']
        },
        'superSlide': {
            deps: ['jquery']
        },
        'jstree': {
            deps: ['jquery']
        },
        'tree': {
            deps: ['jquery', 'jstree']
        },
        'highchart': {
            deps: ['jquery']
        },
        'highchart3d': {
            deps: ['highchart']
        },
        'exporting': {
            deps: ['highchart']
        },
        'underscore':{
            exports: ['_', 'underscore']
        },
        'ztreePlus':{
            deps: ['jquery']
        },
        'ztree':{
            deps: ['jquery','ztreePlus']
        }
    },
    priority: [
        'angular'
    ],
    map: { // 配置插件
        '*': {
            'css': 'jscript/require-css', // 加载css插件
            'text': 'jscript/require-text', // 加载css插件
        }
    },
    urlArgs:'v=' + (new Date()).getTime() //'v=' + (new Date()).getTime()
});
require([
    'jquery',
    'angular',
    'text',
    'app',
    'routes',
    'filters',
    'common',
    'common_version5',
    'bootstraps',
    'accordion',
    'angular_check',
    'jqueryUi',
    'choose',
    'mulitselect',
    'data1',
    'data2',
    'data3',
    'superSlide',
    'valid',
    'valid_En',
    'angular_bootstrap_dialog',
    'angular_dialog',
    'hotkeys',
    'jstree',
    'tree',
    'jquery_qrcode',
    'qrcode',
    'jquery_date_new',
    'plupload',
    'ZeroClipboard',
    'md5',
    'blockUI',
    'highchart',
    'highchart3d',
    'exporting',
    'indexController',
    'ztree'
], function ($, angular) {
    //This function will be called when all the dependencies
    //listed above are loaded. Note that this function could
    //be called before the page is loaded.
    //This callback is optional.

    //    $(document).ready(function () {
    //打开遮罩
    $ui.openMask();

    angular.bootstrap(document, ['myApp']);

    //当窗口大小改变时
    $(window).resize(function () {
        //遮罩层自适应
        if ($("body").hasClass("body_mask")) {
            $("#divMask").css({ "height": $(window).height() });
            $("#imgLoading").css({ "top": ($("#divMask").height() / 2 - $("#imgLoading").height() / 2) + "px", "left": ($("#divMask").width() / 2 - $("#imgLoading").width() / 2) + "px" });
        }

        //模态窗口自适应
        $('[role="dialog"].modal').each(function (i, e) {
            $(e).css({ 'left': ($(window).width() / 2 - $(e).width() / 2) + "px" });
        });
    });
    //    });
});
