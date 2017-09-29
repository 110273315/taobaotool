'use strict';

function indexController($scope, $http, $location, $filter, $route, $dialogs) {
  //登出
  $scope.logout = function() {
      $ui.clearCookie("sessionid");
      sessionStorage.clear();
      window.location.href = "login.html";
    }
    // 如果没登录，则直接跳登录页
  // if (!$ui.isLogin()) {
  //   $scope.logout()
  //   return;
  // }
  // html5、css3兼容性检测
  $ui.checkSupported();
  $ui.ui_location = $location;
  $ui.scope = $scope;
  $scope.proj = {};
  $scope.master = {};
  $scope.paging = {
    pageSize: 10
  };
  $scope.staffinnerid = '';
  $(document).on('click', '.login-info__summary', function() {
    $(this).closest(".login-info").toggleClass("login-info--unfold")
  })
  // 头部工具栏目的操作
  $('.tool_wrapper').hover(function() {
    $(this).find('dd').slideDown('fast')
  }, function() {
    $(this).find('dd').slideUp('fast')
  })
  $('.tool_wrapper').on('click', 'dd', function() {
    $(this).hide()
  })
    //首页
  if (!$ui.getItem("lastRoute")) {
    //页面默认跳转页
    $ui.directTo({
      url: setting.defaultPro,
      key: ''
    });
  }
  //页面跳转
  $scope.directTo = function(url, key, menuUrl) {
    $ui.directTo({
      url: url,
      key: key,
      menuUrl: menuUrl // 用来定位左侧的菜单
    });
  };
  //视图页面加载完成之后触发的事件
  $scope.$on('$viewContentLoaded', function() {
    // 显示页面各部分
    $("#main-wrapper").css('display', 'block');
    $("#leftbarApp").show();
    $("#copyright").show();
    // $('.page-nav-header').width($("#main-wrapper").width() - 40)
    // 关闭遮罩
    $ui.closeMask();
    //form的validate初始化
    $ui.formValidate();
    // 重计算左侧菜单栏的高度
    $ui.resizeLeftMenuHeight();
    var currProjectId = $ui.getProjectId();
    $ui.setProjectId(currProjectId);
    // $scope.$$phase || $scope.$apply();
  });
  //控制分页输入框格式
  $('body').delegate('input.pagetext[type=number]', 'keydown', function(e) {
    switch (true) { //键值
      case e.which >= 48 && e.which <= 57: //0~9
      case e.which >= 96 && e.which <= 105: //0~9
      case e.which == 46: //delete
      case e.which == 8: //backspace
      case e.which == 37: //向左
      case e.which == 39: //向右
        break;
      case e.which == 13: //enter
        $(this).next().click();
        break;
      default:
        e.preventDefault();
    }
  });
}
