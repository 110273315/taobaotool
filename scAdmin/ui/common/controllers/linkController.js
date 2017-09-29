'use strict';
define([], function() {
	function indexController($scope) {
		//初始化，隐藏菜单等
		setTimeout(function() {
		$('#copyright').hide();
			if ($("#main-wrapper").height() < $("#tab-nav").height())
				$("#main-wrapper").css('min-height', $("#tab-nav").height())
		}, 450);
		$('#bar_hide_btn').click();// 隐藏左侧导航
		//判断是否有此项目权限
		function judge(e, i, a, o) {
			if (o.pro == e.name.toUpperCase())
				return true;
			return false;
		}
		// debugger;
		// //数据源

		$scope.items = [
			[
                {
				name: 'SmartReward',
				img: 'pic_01.png',
				path: './common/resources/images/link/',
				dis: $scope.topmenus.menu.find(judge, {
					pro: 'SR'
				}).length == 0, //是否禁用
				lan: $ui.languageid.toLowerCase(), //多语言
				route: homePageRoute.BASE
			},
                {
				name: 'SmartAccess',
				img: 'pic_02.png',
				path: './common/resources/images/link/',
				dis: $scope.topmenus.menu.find(judge, {
					pro: 'SA'
				}).length == 0,
				lan: $ui.languageid.toLowerCase(),
				route: homePageRoute.BASE
			},
                {
				name: 'SmartVison',
				img: 'pic_03.png',
				path: './common/resources/images/link/',
				dis: $scope.topmenus.menu.find(judge, {
					pro: 'SV'
				}).length == 0,
				lan: $ui.languageid.toLowerCase(),
				route: homePageRoute.BASE
			},
                {
				name: 'SmartPresence',
				img: 'pic_04.png',
				path: './common/resources/images/link/',
				dis: $scope.topmenus.menu.find(judge, {
					pro: 'SP'
				}).length == 0,
				lan: $ui.languageid.toLowerCase(),
				route:homePageRoute.BASE
			},
                {
				name: 'SmartSpace',
				img: 'pic_05.png',
				path: './common/resources/images/link/',
				dis: $scope.topmenus.menu.find(judge, {
					pro: 'SS'
				}).length == 0,
				lan: $ui.languageid.toLowerCase(),
				route: homePageRoute.BASE
			}
            ]
		];
		$scope.directTo = function(u) {
			if (u) {
				if (u == 'base'){
					u = homePageRoute.BASE;
				}
				$ui.directTo({
					url: u
				});
			} else {
				console.error('未配置的路由：' + u);
			}
		}
		// 多语言的控制
		$scope.$watch('lan', function(n, o) {
			if (n != o) {
				var n = n.toLowerCase();
				$.each($scope.items, function(i, t) {
					$.each(t, function(i, m) {
						m.lan = n;
					})
				})
			}
		})
	}
	return indexController;
});