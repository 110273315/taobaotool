# scAdmin-shopperConnect管理后台

### 


## 功能
* 登陆
* 菜单
* 权限
* 代码值
* 数据权限
* 富文本框
* 导出excel
* 分页

## 登陆
- 前端-密码md5,调接口/api/login (scAdmin\js\sc\router\user.js)
- sc_user表验证账号密码  (scAdmin\js\sc\dao\userDAO.js:9)
- 取用户权限 (scAdmin\js\sc\dao\userDAO.js:19)
- 创建用户session(guid22位) (public\sc_session.js:340)
- session值存入redis,默认0库，key值200分钟后redis自动删除



    	【key】session:user:admin  //前缀(session:user:)+用户名
    	【value】pairu_hgspe92xxeknqodw  //sessionid guid22
    	【timeout】12000 //单位秒,默认200分钟,3个半小时  
		
		 ----------

		【key】session:instance:pairu_hgspe92xxeknqodw  //前缀(session:instance:)+sessionid
		【value】sc_user的json
		【timeout】12000 //单位秒,默认200分钟,3个半小时

		 ----------

		【key】session:menu:315265e5-91d0-11e6-ad..  //前缀(session:menu:)+sc_user.innerid
		【value】用户权限集合json
			{
				"innerid": "a1a714c1-a9f9-11e5-84da-005056bbd22e",
				"menukey": "srcardlist",
				"modulekey": "Customer",
				"permission": 201
			},
    		{
        		"innerid": "3f82b9cb-a880-11e5-84da-005056bbd22e",
        		"menukey": "couponlist",
        		"modulekey": "Markting",
        		"permission": 73
    		},
		【timeout】永久,不过期
- 前端拿到接口返回的userinfo和sessionid
- 前端调接口api/base/menu,拿到菜单架构 (scAdmin\js\sc\router\user.js:58)
- 前端调接口base/base/codeall/list,拿到所有代码值集合 (scAdmin\js\sc\router\code.js:49)

## 菜单

- 菜单路由 sc_menu.url
- 路由创建规则:**模块名/菜单名/(子页面名)/操作符**


	`SELECT menukey,menuname,url FROM sc_menu ORDER BY moduleid,sortno`
- scAdmin\ui\routes.js 前端路由页面定义
- 小驼峰命名

## 权限

    			{
    				"innerid": "a1a714c1-a9f9-11e5-84da-005056bbd22e",
    				"menukey": "srcardlist",
    				"modulekey": "Customer",
    				"permission": 201
    			}

- 用户表 sc_user.roleid 用户的角色
- 角色表 sc_role 
- 角色权限表 sc _ role_ define的permission的值，定义规则如下

	    		/*
	    		 * 权限值
	    		 */
	    	var USERLIMITS = {
	    		'ADD': 1,	    // 新增
	    		'EDIT': 2,      // 编辑
	    		'DEL': 4,       // 删除
	    		'LIST': 8,      // 列表
	    		'QUERY': 16,    // 查询
	    		'EXPORT': 64,   // 导出
	    		'PUBLISH': 128  // 发布
	    	}

			1+2+4+8+16+64+128=223


- 菜单表 sc_menu
- 菜单资源表 sc_menuresource	
- 前端按钮权限控制是否显示


> scAdmin\ui\common\resources\jscript\common.js:69

		    /*
		     * 获取页面权限集
		     * @key   {string}页面Key
		     */
		    getLimits: function(key) {
		        var limits = {};
		        var totalvalue = $ui.getTotalValue(key);
		        for (var key in USERLIMITS) {
		            if (totalvalue & USERLIMITS[key]) {
		                limits[key] = true;
		            }
		        }
		        return limits;
		    },  		

					10进制					2进制	
				----------------------------------
				'ADD': 1,	    // 新增		1
	    		'EDIT': 2,      // 编辑		10		
	    		'DEL': 4,       // 删除		100
	    		'LIST': 8,      // 列表		1000	
	    		'QUERY': 16,    // 查询		10000
	    		'EXPORT': 64,   // 导出		1000000
	    		'PUBLISH': 128  // 发布		10000000

					10进制					2进制	
				----------------------------------
					1						001
					2						010
					3						011
					4						100
					5						101
					6						110
					7						111

				----------------------------------
					1+2+4 & 1 >= 1   包含，有权限
					1+2+4 & 2 >= 1   包含，有权限
					1+4 & 2    = 0   不包含，无权限
		
> scAdmin\ui\sr\controllers\customer\listController.js:26

		- //#region 获取页面权限
        $scope.PAGELIMITS = $ui.getLimits("customerlist");		

> scAdmin\ui\sr\ui\customer\list.html:273

		<a class="btn_base btn_em" ng-click="popExport()" 
		ng-show="!!PAGELIMITS.EXPORT" 
		title="{{languageBase.Operate.Export}}">
		<i class="icon_export"></i></a>

## 代码值
    select 
		CONCAT('channelcode_',IFNULL(c.channelcode, '')) AS sourcevalue 
	from 
		sr_cust_customer

## 数据权限


## 富文本框


## 导出excel


## 分页
