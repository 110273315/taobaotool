({
    baseUrl: '../',          //基路径
    name: 'main',            //require的主要文件
    out: '../built.js',      //输出的文件名
    optimize: 'uglify2',     //压缩方式
    uglify2: {
        output: {
            beautify: false  //表明需不需要保留原有格式（不压缩）（true: 不压缩，保留原有的缩进、换行等格式；false: 压缩，去除缩进、换行等格式）
        },
        compress: {
            sequences: false,
            global_defs: {
                DEBUG: false
            }
        },
        warnings: false,     //表明在命令行是否显示警告（true: 显示警告；false: 不显示警告）
        mangle: false        //表明需不需要混淆代码（true: 混淆、替换变量参数名称；false：不混淆、不替换变量参数名称）
    },
    preserveLicenseComments: false,//是否保留模块的 license 注释（true：保留；false：不保留）
    paths: {
        jquery: 'Jscript/jquery.min',
        routeBase: '../../Base/Resources/routes',
        routeSA: '../../SA/Resources/routes',
        routeSS: '../../SS/Resources/routes',
        filters: 'filters',
        filtersBase: '../../Base/Resources/filters',
        filtersSA: '../../SA/Resources/filters',
        filtersSS: '../../SS/Resources/filters',
        text: 'Plugin/require/text',
        angular: 'Plugin/angular/angular',
        common: 'Jscript/common',
        custom: 'Jscript/custom',
        bootstraps: 'Jscript/bootstrap',
        accordion: 'Jscript/accordion.nav',
        angular_check: 'Plugin/angular/angular-checklist-model',
        jqueryUi: 'Jscript/jquery-ui-1.10.1.custom',
        choose: 'Plugin/Chose/chosen.jquery',
        mulitselect: 'Plugin/multiselect/jquery.multiselect',
        data1: 'Plugin/datetimepick/bootstrap-datetimepicker.min',
        data2: 'Plugin/datetimepick/date',
        data3: 'Plugin/datetimepick/daterangepicker',
        fileupload: 'Plugin/uploadfile/bootstrap-fileupload',
        valid: 'Plugin/validation/jquery.validationEngine',
        valid_En: 'Plugin/validation/jquery.validationEngine-en',
        angular_bootstrap_dialog: 'Plugin/angular.modal/angular-bootstrap-dialog',
        angular_dialog: 'Plugin/angular.modal/dialogs.min',
        hotkeys: 'Plugin/jsTree/_lib/jquery.hotkeys',
        jstree: 'Plugin/jsTree/jquery.jstree',
        tree: 'Jscript/tree',
        jquery_qrcode: 'Jscript/jquery.qrcode',
        qrcode: 'Jscript/qrcode',
        jquery_date_new: 'Plugin/datetimepick/jquery.datetimepicker',
        plupload: 'Plugin/plupload/plupload',
        ZeroClipboard: 'Jscript/ZeroClipboard/ZeroClipboard',
        md5: 'Jscript/md5',
        blockUI: 'Jscript/jquery.blockUI',
        highchart: 'Plugin/highcharts/js/highcharts',
        highchart3d: 'Plugin/highcharts/js/highcharts-3d',
        exporting: 'Plugin/highcharts/js/modules/exporting',
        indexController: '../Controllers/indexController'
    },
    shim: {
        'jquery': {
            exports: ['$', 'jQuery']
        },
        'angular': {
            exports: 'angular'
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
        'fileupload': {
            deps: ['jquery']
        },
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
        'custom': {
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
        }
    }
})
