$(document).ready(function () {
    $('body').css('padding-top', .4 * ($('html').height() - $('.reset_layout_wrapper').height()) + 'px')
})

/*
*按钮事件
 */
function buttonClicked() {
    $("#account_email").attr("disabled", 'true')
    $("#opreate_btn").attr('disabled', 'true')
    forgotPassword()
    $("#account_email").removeAttr("disabled")
    $("#opreate_btn").removeAttr('disabled')
}
/*
* 忘记密码
*/
function forgotPassword() {

    var email = $.trim($("#account_email").val());
    if (email == "") {
        $("#J_tips").html("邮箱地址不能为空！").css('visibility', 'visible');
        return false;
    } else {
        var emailRegExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (!emailRegExp.test(email)) {
            $("#J_tips").html("不是合法的邮箱地址！").css('visibility', 'visible');
            return false;
        }
    }

    $.ajax({
        type: 'POST',
        url: BASEPATH.BASE + "/api/forgotPassword",
        data: { email: email, platform: "scAdmin"},
        dataType: 'json',
        timeout: 5000,
        success: function (data) {
            if (data.errcode === 0) {
                $("#operate_desc").html("重置密码的邮件已发往你" + email + "邮箱，请登录邮箱进行查看，进行下一步的操作。").show();
                $("#account_email").css('visibility', 'hidden');
                $("#J_tips").css('visibility', 'hidden');
                $("#opreate_btn").html("请登录").attr('onclick','').click(function () {
                    jumpToEmailPortal(email)
                })
            } else if (data.errmsg) {
                $("#J_tips").html(data.errmsg).css('visibility', 'visible');
            } else {
                $("#J_tips").html("重置密码请求失败").css('visibility', 'visible');
            }
        },
        error: function (msg) {
            $("#J_tips").html("登录超时！").css('visibility', 'visible');
        }
    });
}

function jumpToEmailPortal(email) {
    var emailPortal
    var emailElements = email.split("@");
    switch (emailElements[1]) {
        case 'qq.com':
        case 'vip.qq.com':
        case 'foxmail.com':
            emailPortal = 'http://mail.qq.com';
            break;
        case '163.com':
        case '126.com':
        case 'yeah.net':
            emailPortal = 'http://mail.163.com';
            break;
        case '139.com':
            emailPortal = 'http://mail.10086.cn';
            break;
        case 'wo.com.cn':
            emailPortal = 'http://mail.wo.com.cn';
            break;
        case '189.cn':
            emailPortal = 'http://webmail18.189.cn/webmail';
            break;
        case 'sohu.com':
            emailPortal = 'http://mail.sohu.com';
            break;
        case '2008.sina.com':
            emailPortal = 'http://mail.2008.sina.com.cn';
            break;
        case 'vip.sina.com':
        case 'sina.cn':
        case 'sina.com':
            emailPortal = 'http://mail.sina.com.cn';
            break;
        case 'yahoo.com.cn':
        case 'yahoo.cn':
        case 'ymail.com':
        case 'rocketmail.com':
            emailPortal = 'http://mail.cn.yahoo.com';
            break;
        case 'gmail.com':
            emailPortal = 'http://mail.google.com';
            break;
        case 'hotmail.com':
        case 'live.cn':
        case 'msn.com':
        case 'passport.com':
        case 'live.com':
            emailPortal = 'http://hotmail.msn.com';
            break;
        case 'tom.com':
        case 'vip.tom.com':
            emailPortal = 'http://mail.tom.com';
            break;
        default:
            emailPortal = 'http://mail.' + emailurl[1];
            break;
    }
    window.location.assign(emailPortal)
}

$(function () {
    // html5、css3兼容性检测
    $ui.checkSupported();

    //监听键盘enter事件
    $("#reset_email").keydown(function (event) {
        if (event.keyCode == 13) {
            forgotPassword();
        }
    });
});
