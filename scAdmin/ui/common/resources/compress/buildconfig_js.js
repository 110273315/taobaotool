({
    baseUrl: '../',          //��·��
    name: 'main',            //require����Ҫ�ļ�
    out: '../built.js',      //������ļ���
    optimize: 'uglify2',     //ѹ����ʽ
    uglify2: {
        output: {
            beautify: false  //�����費��Ҫ����ԭ�и�ʽ����ѹ������true: ��ѹ��������ԭ�е����������еȸ�ʽ��false: ѹ����ȥ�����������еȸ�ʽ��
        },
        compress: {
            sequences: false,
            global_defs: {
                DEBUG: false
            }
        },
        warnings: false,     //�������������Ƿ���ʾ���棨true: ��ʾ���棻false: ����ʾ���棩
        mangle: false        //�����費��Ҫ�������루true: �������滻�����������ƣ�false�������������滻�����������ƣ�
    },
    preserveLicenseComments: false,//�Ƿ���ģ��� license ע�ͣ�true��������false����������
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
