'use strict';

define(['angular', 'jscript/utils/route-config', 'text!datagridHTML.html'], function(angular, routeConfig, datagridHTML) {
  return angular.module('myApp', ['ui.bootstrap', 'dialogs', "checklist-model"], function($compileProvider, $controllerProvider) {
    routeConfig.setCompileProvider($compileProvider);
    routeConfig.setControllerProvider($controllerProvider);
  }).directive('ngBlur', ['$parse', function($parse) { //Angular  1.2 �� ��֧�� ngBlur �� ngFocus
    return function(scope, element, attr) {
      var fn = $parse(attr['ngBlur']);
      element.bind('blur', function(event) {
        scope.$apply(function() {
          fn(scope, { $event: event });
        });
      });
    }
  }]).directive('ngFocus', ['$parse', function($parse) {
    return function(scope, element, attr) {
      var fn = $parse(attr['ngFocus']);
      element.bind('focus', function(event) {
        scope.$apply(function() {
          fn(scope, { $event: event });
        });
      });
    }
  }]).directive('ngKeyup', ['$parse', function($parse) {
    return function(scope, element, attr) {
      var fn = $parse(attr['ngKeyup']);
      element.bind('keyup', function(event) {
        scope.$apply(function() {
          fn(scope, { $event: event });
        });
      });
    }
  }]).directive('datagrid', function() {
    var search = function($scope) {
      var config = $scope.config
      var queryObj =  config.queryObj
      // 减少发送不必要的数据。
      queryObj = Object.assign({}, queryObj)
      queryObj.page = Object.assign({}, queryObj.page)
      delete queryObj.page.displayPages
      delete queryObj.page.current
      delete queryObj.page.totalCount
      delete queryObj.page.total
      delete queryObj.page.shouldDisplayPages

      if(config.beforeSend) { // 发送前对数据格式化
        queryObj = config.beforeSend(queryObj)
      }
      // debugger
      $ui.ajax({
        url: config.url,
        type: 'post',
        moudle: config.moudle || 'SR',
        menuKey: config.menuKey,
        data: Object.assign({}, queryObj, {
          querytype: 'count',
        }),
        success: function(data) {
          if (!data.errcode) {
            var start
            var end
            var pager = config.pager
            pager.shouldDisplayPages = []
            pager.totalCount = data.msgbody.TotalCount[0].count
            pager.total = Math.ceil(pager.totalCount / pager.num) // 总共多少页
            pager.current = pager.item

            if (pager.total <= pager.displayPages) {
              start = 1
              end = pager.total
            } else {
              start = pager.current - Math.floor(pager.displayPages / 2)
              if (start < 1) {
                start = 1
              }
              end = start + pager.displayPages - 1
              if (end > pager.total) {
                end = pager.total
                start = end - pager.displayPages + 1
              }
            }
            pager.startCount = (pager.current - 1) * pager.num + 1
            pager.endCount = pager.current * pager.num
            if(pager.endCount > pager.totalCount) {
              pager.endCount = pager.totalCount
            }

            for (var i = start; i <= end; i++) {
              config.pager.shouldDisplayPages.push(i)
            }
            $scope.$$phase || $scope.$apply()
          }
          $scope.isLoading = false
        }
      })

      $ui.ajax({
        url: config.url,
        type: 'post',
        moudle: config.moudle || 'SR',
        menuKey: config.menuKey,
        data: Object.assign({}, queryObj, {
          querytype: 'main',
        }),
        success: function(data) {
          if (!data.errcode) {
            // config.afterSend 对返回的数据做格式化
            $scope.list = config.afterSend ? config.afterSend(data.msgbody) : data.msgbody
            $scope.$$phase || $scope.$apply()
          }
        }
      })
    }
    return {
      template: datagridHTML,
      scope: {
        config: '=config',
      },
      restrict: 'E', // 元素
      replace: true,
      link: function($scope, element, attrs) {
        var config = $scope.config
        $scope.languageBase = $ui.scope.languageBase
        $scope.isLoading = true

        config.queryObj = {
          page: {
            num: 10, // 一页多少条
            item: 1, // item, index,current 都表示第几页。 item和index是后台用，current是前端用
            index: 1,
            current: 1,
            displayPages: 5 // 显示5个页码
          },
          order: { // 一定要，否则获取不到数据
            column: 'o.modifiedtime',
            type: 'desc'
          },
          where: config.querys
        }
        config.pager = config.queryObj.page

        $scope.operClick = function(op, item) {
          if (op.click) {
            op.click(item)
          }
        }
        // 至第某页
        $scope.pageTo = function(to) {
          if(config.pager.current == to || to < 1 || to > $scope.config.pager.total) {
            return
          }
          config.pager.item = to
          config.pager.index = to
          config.pager.current = to
          search($scope, element, attrs)
        }
        config.search = function(isResetPager) {
          console.log('search')
          if(isResetPager) {
            config.pager.item = 1
            config.pager.index = 1
            config.pager.current = 1
          }
          search($scope, element, attrs)
        }
        config.search()
      }
    }
  })
});
