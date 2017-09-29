## 升级到 4.0要注意和修改的
1. 所有多语言在目录 language下。 对于项目里的多语言，写法由 {{languageObj.xx}} 改成 {{languageObj.项目名.xx}}。
  需要修改的：
    1. 项目多语言放在 language/project.语言.json。
    2. {{languageObj.xx}} 改成 {{languageObj.项目名.xx}}
2. 路由都放在 routes.js
3. 用到的代码表地方。
  ```
    $scope.customertype.push({
        id: item.keycode,
        // value: $scope.languageBase.Code[item.keyname] 以前的写法
        value: $ui.getCodeName(item) // 现在的写法
    });
  ```
4. 每个页面头部（页面名，面包屑）改成如下的结构
```
<div class="page-nav-header clearfix">
    <h3 class="page-nav-header__name pull-left">当前页面名称</h3>
    <div class="crumbs pull-right">
        <a class="crumbs__parent">父页面名称</a>
        <span class="crumbs__current">当前页面名称</span>
    </div>
</div>
```