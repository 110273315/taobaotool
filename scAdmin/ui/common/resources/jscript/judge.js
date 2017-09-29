//判断是否是从首页进入
document.addEventListener("DOMContentLoaded", function () {
    if (typeof jQuery == 'undefined') {
      debugger
      window.location.href = "../../../login.html";
    }
}, false);