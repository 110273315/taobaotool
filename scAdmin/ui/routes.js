﻿'use strict';

define(['app', 'jscript/utils/route-config'], function (app, routeConfig) {

  return app.config(function ($routeProvider) {
    // common 开始
    $routeProvider.when('/dashboard', routeConfig.config('../../common/ui/dashboard.html', "../../common/controllers/dashboardController"));
    $routeProvider.when('/link', routeConfig.config('../../common/ui/link.html', "../../common/controllers/linkController"));
    $routeProvider.otherwise({ redirectTo: setting.defaultPro });
  });
  //eturn app;
});
