$(document).ready(function () {
    $('body').css('padding-top', .4 * ($('html').height() - $('.reset_layout_wrapper').height()) + 'px')
})

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

/*
 *按钮事件
 */
function buttonClicked() {
    $("#newPassword").attr("disabled", 'true')
    $("#confirmPassword").attr("disabled", 'true')
    $("#opreate_btn").attr('disabled', 'true')
    resetPassword()
    $("#newPassword").removeAttr("disabled")
    $("#confirmPassword").removeAttr("disabled")
    $("#opreate_btn").removeAttr('disabled')
}


/*
* 忘记密码
*/
function resetPassword() {
    var newPassword = $.trim($("#newPassword").val());
    var confirmPassword =  $.trim($("#confirmPassword").val());
    if (newPassword != confirmPassword) {
        $("#J_tips").html("输入的密码不一致！").css('visibility', 'visible');
        return false;
    }
    if (newPassword.length < 5 || newPassword.length > 16) {
        $("#J_tips").html("输入的密码长度太短！").css('visibility', 'visible');
        return false;
    }

    $.ajax({
        type: 'POST',
        url: BASEPATH.BASE + "/api/resetPassword",
        data: {innerid: resetInnerId, token: resetToken, password: hex_md5(newPassword)},
        dataType: 'json',
        timeout: 5000,
        success: function (data) {
            if (data.errcode === 0) {
                $("#input_block").css('visibility', 'hidden');
                $("#J_tips").css('visibility', 'hidden');
                $("#operate_icon").css("backgroundImage", "url('/common/resources/images/login/reset_success.png')");
                if (platform == "ServiceApp") {
                    $("#operate_title").html("重置密码成功，请打开服务台app进行登录。");
                    $("#opreate_btn").css('visibility', 'hidden');
                } else {
                    $("#operate_title").html("重置密码成功");
                    $("#opreate_btn").html("请登录").attr('onclick', '').click(function () {
                        window.location.assign(BASEPATH.BASE + "/login.html")
                    })
                }
            } else {
                $("#J_tips").html("密码修改失败").css('visibility', 'visible');
            }
        },

        error: function (msg) {
            $("#J_tips").html("登录超时！").css('visibility', 'visible');
        }
    });
}

$(function () {
    // html5、css3兼容性检测
    $ui.checkSupported();

    var url = window.location.href
    resetToken = GetQueryString("token")
    resetInnerId = GetQueryString("innerid")
    platform = GetQueryString("platform")

    if (resetToken == null || resetInnerId == null) {
        $("#J_tips").html("缺少参数").show();
        alert("您不是从密码重置邮件跳转到本页的，请按照'忘记密码'-'邮件'-'重置密码'流程进行操作。")
        window.location.assign(BASEPATH.BASE + "/login.html")
    }

    //监听键盘enter事件
    $("#reset_email").keydown(function (event) {
        if (event.keyCode == 13) {
            resetPassword();
        }
    });
});
