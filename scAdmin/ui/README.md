# 前端说明
## 本地启动
1. 启动服务器
	1. `cd Service\main`
	1.`node app` (注意nodejs的版本必须是 [0.10.26 - 0.10.34] 之间的版本)
1. 启动客户端
	1. `cd Web`
	1. 将Web下的文件部署为静态服务器，推荐用[anywhere](https://www.npmjs.com/package/anywhere)
	1. 浏览器中打开`127.0.0.1:port/index.html` 其中port为静态服务器监听的端口 

测试帐号为 帐号：admin@smartac 密码：admin

## 做页面的主要流程
1. 在`Web\项目名称\UI` 下创建一个html文件。html的内容会输出在页面上属性带`ng-view`的元素的下面
1. 在`Web\项目名称\Controllers` 下创建一个js文件。内容形如
```
define([], function() {
    function indexController($scope, $dialogs) {
    	// 逻辑
    });
    return indexController;
});
```
1. 在`Web\项目名称\UI\Resouces\routes.js` 添加类似如下的路由规则
```
$routeProvider.when('/demo', routeConfig.config("../../demo/list/index.html", "../../demo/list/indexController"));
```

可以从 `demo\template` 下拷贝需要的初始化内容。    
我们可以用 mockajax 来模拟 ajax 请求。

## Demo
### 列表页面Demo
Demo主要包括如下内容
* 模拟假数据
* 输出列表
	* 搜索
	* 排序（目前在UI上有问题）
	* 分页
* 下拉框插件的使用
* 点击展开/隐藏更多
* 如何进行站内页面跳转
* 模态框的使用(打开，关闭，数据传递)

查看方式，浏览器中查看`127.0.0.1:port/index.html#/demo` 。    
源码都在`web/demo/list`

### ui Demo
ui元素以及常用组件使用的demo。包括
* 按钮 地址 `127.0.0.1:port/index.html#/ui-button`
* 表单 地址 `127.0.0.1:port/index.html#/ui-form`
* 栅格 地址 `127.0.0.1:port/index.html#/ui-grid`
* 信息弹出框 地址 `127.0.0.1:port/index.html#/ui-message`
* 模态框 地址 `127.0.0.1:port/index.html#/ui-modal`
* 分页 地址 `127.0.0.1:port/index.html#/ui-page`
* 表格 地址 `127.0.0.1:port/index.html#/ui-table`


## 目录结构
* Web
	* setting.js 项目的设置
	* Base: SC的内容
		* Controller： 页面逻辑的JS代码
		* Resouces
			* Images
			* Jscript
			* Language 国际化
				* Ch.json
				* En.json
			* Style
	* Common：公共的内容
		* main.js： require.js的路径的配置，以及加载公共的js。去资源的访问的时间戳也是在这里去。
		* Resouces
			* Jscript： 公共的js，和第三方js，如jquery之类
				* common.js: $ui的定义。$ui上有很多common的方法
			* Plugin： 第三方的插件
	* demo
		* list: 列表页面Demo
		* ui: ui Demo


## 规范
* 文件要根据目录结构，放到对应的文件夹
* 文件夹的名字全小写，文件名，变量名均以驼峰的方式 如`indexController.js`
* 尽可能不要有重复的代码。重复的内容定义成函数。
* 路由规则，由3级路径组成：`项目/子栏目的前缀/当前页面名字`，如 `/sr/member/list`

## 常用方法
* $ui.ajax 对$.ajax的封装，根据传入的moudle来加URL前缀。
* $ui.directTo({url:'...'}) 页面跳转。站内和站外跳转都支持
* $ui.DateRange_init 初始化日期控件
* $ui.datetimepicker 日期控件
* $ui.Choosen_init 初始化下拉框
* 弹出框
	* $ui.alert 信息框
	* $ui.confirm 确定框
	$ui.confirm({
        head: $ui.language.Base.Messages,
        content: tipStr,
        success: function() {
        },
        cancel: function(){
        }
    });
	* $ui.DialogCreate 创建bootstrap风格的模态弹出框
	* $ui.createBlockDialog 模态弹出框


## 一些需要注意的
* 如果发现在搜索条件中用到时间控件，搜索时，时间控件的值总是空的，可用如下方法
```
$ui.datetimepicker({
    wrapper: '.time-input',
    format: 'Y-m-d',
    timepicker: false,
    onChange: function(date, elem){// 值改变时主动主动赋
        var dateStr = moment(date).format('YYYY-MM-DD');
        $scope.searchObj[$(elem).attr('ng-model').split('.')[1]] = dateStr;
        $scope.$apply();
    }
});
```
* JS代码调试: 在需要调试的地方输入 debugger

## 关于国际化/多语言
加载SR的国际化文件，需要在JS中加
```
var moduleName = 'SR';
$ui.writeCookie({ name: 'projectid', value: moduleName });

```

HTML中访问某属性
* {{languageBase.属性}} 公共的一些内容，定义在 `common/resources/language` 下
* {{languageObj.属性}} 当前项目的一些内容，定义在 `当前项目/resources/language` 下

类似的，在js中访问
* $ui.scope.languageBase.属性 公共的一些内容
* $ui.scope.languageObj.属性 当前项目的一些内容

代码多语言
以前是 languageBase.Code[key]，现在这么写 key | codeI18nName
在 js 中这么写 ，$filter('codeI18nName')(key)


## 待做的
现在已经可以做的
* common.js 的 api
* tab切换，上传文件，验证组件的demo
* 模块管理和菜单管理的流程的梳理。目前新建模块后，再新建菜单，并不能找到那新建的模块。（问徐晨或华江）
* 理解PageKey的意义
* 弹出框的封装
* 选择标签的弹出框
	* 标签长度要固定
	* 带分页

需要协商的
* 权限这块。需要和后台协商。

## 框架待改进的地方
* table组件优化
* 分页的优化：试试用一个指令。



## 登录逻辑
进入登录页面，如果能从cookie中拿到用户名和密码，则认为之前勾选了记住密码，则此时，补全账户和密码，勾选记住密码，否则清空账户和密码，取消勾选记住密码。

验证
	* 用户名：非空，长度最少4位，值只能为数字，字母，@和_
	* 密码: 非空，值只能为数字，字母，@和_
通过验证，请求后台
	* 请求内容：提交用户名和密码，密码由md5加密
	* 后台返回： 若成功，在cookie和sessionStorage中存返回的sessionID；若记住密码，在cookie中存用户名和加密后的密码。若失败，则提示错误信息。若服务器出错，如超时，响应解析错误等，则提示登录超时。


## 权限
api地址：http://172.16.0.42/API/admin.htm
头部导航的 shopperConnect 下的，左侧 Nodejs Server > 技术说明 > 权限

## 文件上传逻辑
地址 172.16.0.94:8000

约定
-
* 采用HTTP接口为主
* 所有协议内容采用JSON格式传送
* 所有用到的中文内容采用UTF8方式编码
* HTTP接口同时提供HTTP/HTTPS两种访问方式,使用HTTPS方式访问时需要进行双向认证
* 不支持大于100M的文件

协议定义
-
* 添加资源文件
* 前台Input控件name为upload
> [POST]http://resource/upload?type=1&filename=abc.txt&program_type=sr_admin&public_key=UUID
>	
	参数:
	type:资源类型,1-临时[默认],2永久,3动态
	filename:原始文件名[默认自动]
	program_type*:上传程序类型
	public_key:公钥ID[默认为开放访问]
	回应:
		UUID,文件资源ID

* 更新资源文件
> [POST]http://resource/update?id=UUID
>
	参数:
	id:需要更新的文件资源ID
	回应:
		无内容,参照HTTP状态码

* 删除资源
> [GET]http://resource/delete?id=UUID
>
	参数:
	id:需要更新的文件资源ID
	回应:
		无内容,参照HTTP状态码

* 下载资源文件
> [GET]http://resource/uuid?direct=1
>
	参数:
	direct:直接访问,默认为0,默认方式为回应一个重定向。查看图片也用这



## 迁移到其他项目要注意的
在 main.js 中加入 该项目的routes文件
不要直接覆盖的文件，要比较后进行合并
common/resources/main.js
common/resource/language/Ch.json
common/resource/language/Ch.json
setting.js

需要覆盖的：
* web/base
* web/common
* index.html
* login.html
* setting.js

提交合并时，若有文件被删除，要注意，是不是误删了

# 验证
验证非空的元素上加类名 validate[required]
$("form元素选择器").validationEngine("validate") 验证
$("form元素选择器").validationEngine("hide") 隐藏验证的数据

注意：select组件的验证暂时不支持

## 测试路由
测试模块 key Test
	子类别1 key: Sub1
		1-1 key:aa /test/1-1
		1-2 key:ab /test/1-2
	子类别2 key: Sub2
		2-1 key:ba /test/2-1
	子类别3 key: Sub3


页面刷新没高亮正确

## 文件夹的名字改全小写，代码中需要改的地方
1. html 文件里的 link,script,image 标签的路径，如
```
<link href="这里" rel="stylesheet">
<script src="这里"></script>
<img src="这里">
```

2. style 标签和 CSS 文件中的路径，如
```
.sth{
	background: url(这里);
}
```

3. script 标签和 script 文件中的路径,如
routes.js
```
$routeProvider.when('/menu/add', routeConfig.config(这里, 这里));

```
每个文件的
```
define([这里]...
```






