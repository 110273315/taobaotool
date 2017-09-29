var retMsg = {
    system: {
        ok: {errcode: 0, errmsg: '',msgbody:{}},
        er_route_addr: {errcode: 3001, errmsg: '路由解析异常，请联系管理员'},
        er_route_analyze: {errcode: 3001001, errmsg: '路由地址不正确'},
        er_session_expire: {errcode: 3002, errmsg: 'Session已过期'},
        er_login: {errcode: 3003, errmsg: '用户名密码不正确'},

        er_resetPwd_request: {errcode:3014, errmsg: '重置密码请求失败'},
        er_resetPwd_notExist: {errcode:3015, errmsg: '用户不存在'},
        er_resetPwd_errArg: {errcode:3016, errmsg: '参数不正确'},
        er_resetPwd_emailSend: {errcode:3017, errmsg: '邮件发送失败'},
        er_resetPwd_db: {errcode:3018, errmsg: '操作数据库失败'},
        er_resetPwd: {errcode:3019, errmsg: '重置密码失败'},
        er_resetPwd_expired: {errcode:3020, errmsg: '重置密码请求失效'},

        er_menu_noright: {errcode: 3004, errmsg: '还没有配置菜单权限'},
        er_upload_fail: {errcode: 3005, errmsg: '失败'},
        er_imgtype: {errcode: 3006, errmsg: '图片类型不正确'},
        er_noimg: {errcode: 3007, errmsg: '没有图片'},
        er_imgOverSize: {errcode: 3008, errmsg: '图片过大'},
        er_nofile: {errcode: 3009, errmsg: '没有文件'},
        er_fileOverSize: {errcode: 3010, errmsg: '文件过大'},
        er_filetype: {errcode: 3011, errmsg: '文件类型不正确'},
        er_nofileType: {errcode: 3012, errmsg: '没有传文件类型'},
        er_route_sql: {errcode: 3013, errmsg: '路由地址包含敏感字符'},
        er_fileio_nofile: {errcode: 4001, errmsg: '文件不存在'},
        er_fileio_exception: {errcode: 4002, errmsg: '写文件出错'},
        er_fileinfo_exception: {errcode: 4003, errmsg: '文件操作出错'},
        er_fileinfo_fileexist: {errcode: 4004, errmsg: '文件已存在'},
        er_fileinfo_nodir: {errcode: 4005, errmsg: '文件夹不存在'},
        er_fileinfo_dir_exception: {errcode: 4006, errmsg: '文件夹操作失败'},
        er_twocode_err: {errcode: 4007, errmsg: '二维码图片保存失败'},
        er_power_nopower: {errcode: 5001, errmsg: '无操作权限'},
        er_sms_err: {errcode: 6001, errmsg: '发送短信数量超过限制'},
        failure: {errcode: -1, errmsg: '失败'}
    },
    sc: {
        err_sc: {errcode: 500, errmsg: '操作失败'},
        err_sc_query: {errcode: 501, errmsg: '查询失败'},
        err_sc_add: {errcode: 502, errmsg: '新增失败'},
        err_sc_add_duplicate: {errcode: 5021, errmsg: '新增失败（记录重复）'},
        err_sc_modify: {errcode: 503, errmsg: '修改失败'},
        err_sc_modify_duplicate: {errcode: 5031, errmsg: '修改失败（记录重复）'},
        err_sc_delete: {errcode: 504, errmsg: '删除失败'},
        err_sc_export: {errcode: 505, errmsg: '导出失败'},
        err_sc_import: {errcode: 506, errmsg: '导入失败'}
    }
};

/**
 * 返回Json {errcode:状态，errmsg:消息}
 * @param module 模块
 * @param key 键
 */
var resJson = function (module, key) {
    if (retMsg[module][key]) {
        return retMsg[module][key];
    } else {
        return retMsg['system']['failure'];
    }
}
exports.resJson = resJson;