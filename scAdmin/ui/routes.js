'use strict';

define(['app', 'jscript/utils/route-config'], function (app, routeConfig) {

  return app.config(function ($routeProvider) {
    // common 开始
    $routeProvider.when('/dashboard', routeConfig.config('../../common/ui/dashboard.html', "../../common/controllers/dashboardController"));
    $routeProvider.when('/link', routeConfig.config('../../common/ui/link.html', "../../common/controllers/linkController"));
    $routeProvider.when('/js', routeConfig.config('../../common/ui/js.html', "../../common/controllers/jsController"));
    $routeProvider.when('/php', routeConfig.config('../../common/ui/php.html', "../../common/controllers/phpController"));
    $routeProvider.otherwise({ redirectTo: setting.defaultPro });
  });
  //eturn app;
});
