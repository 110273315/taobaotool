$(document).ready(function () {
    $('body').css('padding-top', .4 * ($('html').height() - $('.login_layout_wrapper').height()) + 'px')
})

/*
* 登录方法
*/
function login() {
    var username = $.trim($("#username").val());
    var password = $.trim($("#password").val());

    if (username == "" || password == "") {
        $("#J_tips").html("用户名和密码不能为空！").show();
        return false;
    } else {
        if (username.length < 4) {
            $("#J_tips").html("用户名太短！").show();
            return false;
        }
        var regex = /^[0-9A-Za-z@_]+$/;
        if (!regex.test(username)) {
            $("#J_tips").html("用户名不符合规则！").show();
            return false;
        }
    }

    //check密码是否加密,如果没有，则给它md5加密
    if (password != $ui.readCookie("pwd")) {
        password = hex_md5(password);
    }

    $.ajax({
        type: 'POST',
        url: BASEPATH.BASE + "/api/login",
        data: { name: username, password: password},
        dataType: 'json',
        timeout: 5000,
        success: function (data) {
            if (data.errcode === 0) {
                $ui.writeCookie({ name: "sessionid", value: data.msgbody.sessionID });
				$ui.setItem("sessionid", data.msgbody.sessionID);
                window.location.href = "index.html";
                $ui.writeCookie({ name: "user", value: username });
                //如果记住密码,则把密码写入cookie
                if ($("#login_check").is(":checked")) {
                    //$ui.writeCookie({ name: "pwd", value: hex_md5(password) }); //密码md5加密
                    $ui.writeCookie({ name: "pwd", value: password });
                } else {
                    $ui.clearCookie("pwd");
                }
                sessionStorage.removeItem("lastRoute");
                $ui.setProjectId('Base');
                $ui.scope.lan = data.msgbody.user.language ? "En" : "Ch";
                $ui.writeCookie({ name: "language", value: $ui.scope.lan });
            } else {
                $("#J_tips").html("错误的用户名或密码！").show();
            }
        },

        error: function (msg) {
            $("#J_tips").html("登录超时！").show();
        }
    });
}

$(function () {
    // html5、css3兼容性检测
    $ui.checkSupported();

    //读取cookie中的密码和用户名
    var password_cookie = $ui.readCookie("pwd");
    var username_cookie = $ui.readCookie("user");
    if(username_cookie != ""){
        $("#username").val(username_cookie);
    }
    if (password_cookie != "") {
        $("#password").val(password_cookie);
        $("#login_check").prop("checked", true);
    } else {
        $("#password").val("");
        $("#login_check").prop("checked", false);
    };

    //记住密码
    $(".login_check_wrapper").children("span").bind("click", function () {
        if ($("#login_check").is(":checked")) {
            $("#login_check").prop("checked", false);
        } else {
            $("#login_check").prop("checked", true);
        }
    });

    //监听键盘enter事件
    $("#password").keydown(function (event) {
        if (event.keyCode == 13) {
            login();
        }
    });
});
