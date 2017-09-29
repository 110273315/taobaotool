(function ($) {
    $.fn.validationEngineLanguage = function () {
    };
    $.validationEngineLanguage = {
        newLang: function () {
            $.validationEngineLanguage.allRules = {
                "En": {
                    "required": { // Add your regex rules here, you can take telephone as an example
                        "regex": "none",
                        "alertText": "* This field is required",
                        "alertTextCheckboxMultiple": "* Please select an option",
                        "alertTextCheckboxe": "* This checkbox is required",
                        "alertTextDateRange": "* Both date range fields are required"
                    },
                    "requiredInFunction": {
                        "func": function (field, rules, i, options) {
                            return (field.val() == "test") ? true : false;
                        },
                        "alertText": "* Field must equal test"
                    },
                    "dateRange": {
                        "regex": "none",
                        "alertText": "* Invalid ",
                        "alertText2": "Date Range"
                    },
                    "dateTimeRange": {
                        "regex": "none",
                        "alertText": "* Invalid ",
                        "alertText2": "Date Time Range"
                    },
                    "minSize": {
                        "regex": "none",
                        "alertText": "* Minimum ",
                        "alertText2": " characters required"
                    },
                    "maxSize": {
                        "regex": "none",
                        "alertText": "* Maximum ",
                        "alertText2": " characters allowed"
                    },
                    "groupRequired": {
                        "regex": "none",
                        "alertText": "* You must fill one of the following fields"
                    },
                    "min": {
                        "regex": "none",
                        "alertText": "* Minimum value is "
                    },
                    "max": {
                        "regex": "none",
                        "alertText": "* Maximum value is "
                    },
                    "past": {
                        "regex": "none",
                        "alertText": "* Date prior to "
                    },
                    "future": {
                        "regex": "none",
                        "alertText": "* Date past "
                    },
                    "maxCheckbox": {
                        "regex": "none",
                        "alertText": "* Maximum ",
                        "alertText2": " options allowed"
                    },
                    "minCheckbox": {
                        "regex": "none",
                        "alertText": "* Please select ",
                        "alertText2": " options"
                    },
                    "equals": {
                        "regex": "none",
                        "alertText": "* Fields do not match"
                    },
                    "creditCard": {
                        "regex": "none",
                        "alertText": "* Invalid credit card number"
                    },
                    "phone": {
                        "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                        "alertText": "* Invalid phone number"
                    },
                    "mobile": {
                        "regex": /^1[3|4|5|8][0-9]\d{8}$/,
                        "alertText": "* Invalid mobile number"
                    },
                    "email": {
                        // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                        "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        "alertText": "* Invalid email address"
                    },
                    "integer": {
                        "regex": /^[\-\+]?\d+$/,
                        "alertText": "* Not a valid integer"
                    },
                    "number": {
                        // Number, including positive, negative, and floating decimal. credit: orefalo
                        "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                        "alertText": "* Invalid floating decimal number"
                    },
                    "date": {
                        //	Check if date is valid by leap year
                        "func": function (field) {
                            var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
                            var match = pattern.exec(field.val());
                            if (match == null)
                                return false;

                            var year = match[1];
                            var month = match[2] * 1;
                            var day = match[3] * 1;
                            var date = new Date(year, month - 1, day); // because months starts from 0.

                            return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
                        },
                        "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                    },
                    "dateTime": {
                        "regex": /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
                        "alertText": "* Invalid date, must be in yyyy-mm-dd hh:mm:ss format"
                    },
                    "time": {
                        "regex": /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/,
                        "alertText": "* Invalid time, must be in hh:mm:ss format"
                    },
                    "_time": {
                        "regex": /^(([1-9]{1})|([0-1][0-9])|([1-2][0-3])):([0-5][0-9])$/,
                        "alertText": "* Invalid time, must be in hh:mm format"
                    },
                    "ipv4": {
                        "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                        "alertText": "* Invalid IP address"
                    },
                    "url": {
                        "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                        "alertText": "* Invalid URL"
                    },
                    "onlyNumberSp": {
                        "regex": /^[0-9\ ]+$/,
                        "alertText": "* Numbers only"
                    },
                    "onlyLetterSp": {
                        "regex": /^[a-zA-Z\ \']+$/,
                        "alertText": "* Letters only"
                    },
                    "onlyLetterNumber": {
                        "regex": /^[0-9a-zA-Z]+$/,
                        "alertText": "* No special characters allowed"
                    },
                    // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                    "ajaxUserCall": {
                        "url": "ajaxValidateFieldUser",
                        // you may want to pass extra data on the ajax call
                        "extraData": "name=eric",
                        "alertText": "* This user is already taken",
                        "alertTextLoad": "* Validating, please wait"
                    },
                    "ajaxUserCallPhp": {
                        "url": "phpajax/ajaxValidateFieldUser.php",
                        // you may want to pass extra data on the ajax call
                        "extraData": "name=eric",
                        // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                        "alertTextOk": "* This username is available",
                        "alertText": "* This user is already taken",
                        "alertTextLoad": "* Validating, please wait"
                    },
                    "ajaxNameCall": {
                        // remote json service location
                        "url": "ajaxValidateFieldName",
                        // error
                        "alertText": "* This name is already taken",
                        // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                        "alertTextOk": "* This name is available",
                        // speaks by itself
                        "alertTextLoad": "* Validating, please wait"
                    },
                    "ajaxNameCallPhp": {
                        // remote json service location
                        "url": "phpajax/ajaxValidateFieldName.php",
                        // error
                        "alertText": "* This name is already taken",
                        // speaks by itself
                        "alertTextLoad": "* Validating, please wait"
                    },
                    "validate2fields": {
                        "alertText": "* Please input HELLO"
                    },
                    //tls warning:homegrown not fielded 
                    "dateFormat": {
                        "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                        "alertText": "* Invalid Date"
                    },
                    //tls warning:homegrown not fielded 
                    "dateTimeFormat": {
                        "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                        "alertText": "* Invalid Date or Date Format",
                        "alertText2": "Expected Format: ",
                        "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ",
                        "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
                    },
                    "mac": {
                        "regex": /([A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2})|([A-Fa-f\d]{2}-[A-Fa-f\d]{2}-[A-Fa-f\d]{2}-[A-Fa-f\d]{2}-[A-Fa-f\d]{2}-[A-Fa-f\d]{2})/,
                        "alertText": "Invalid MAC"
                    },
                    "chinaIdLoose": {
                        "regex": /^(\d{18}|\d{15}|\d{17}[xX])$/,
                        "alertText": "* 无效的身份证号码"
                    },
                    "loginName": {
                        "regex": /^[0-9a-zA-Z_]+$/,
                        "alertText": "* No special characters allowed"
                    },
                    "floatNumber": {
                        "regex": /^(\d+)(.\d+)?$/,
                        "alertText": " Must be positive float number"
                    }
                },
                "Ch":
                    {
                        "required": { // Add your regex rules here, you can take telephone as an example
                            "regex": "none",
                            "alertText": "* 此处不可空白",
                            "alertTextCheckboxMultiple": "* 请选择一个项目",
                            "alertTextCheckboxe": "* 您必须钩选此栏",
                            "alertTextDateRange": "* 日期范围不可空白"
                        },
                        "requiredInFunction": {
                            "func": function (field, rules, i, options) {
                                return (field.val() == "test") ? true : false;
                            },
                            "alertText": "* Field must equal test"
                        },
                        "dateRange": {
                            "regex": "none",
                            "alertText": "* 无效的 ",
                            "alertText2": " 日期范围"
                        },
                        "dateTimeRange": {
                            "regex": "none",
                            "alertText": "* 无效的 ",
                            "alertText2": " 时间范围"
                        },
                        "minSize": {
                            "regex": "none",
                            "alertText": "* 最少 ",
                            "alertText2": " 个字符"
                        },
                        "maxSize": {
                            "regex": "none",
                            "alertText": "* 最多 ",
                            "alertText2": " 个字符"
                        },
                        "groupRequired": {
                            "regex": "none",
                            "alertText": "* 你必需选填其中一个栏位"
                        },
                        "min": {
                            "regex": "none",
                            "alertText": "* 最小值為 "
                        },
                        "max": {
                            "regex": "none",
                            "alertText": "* 最大值为 "
                        },
                        "past": {
                            "regex": "none",
                            "alertText": "* 日期必需早于 "
                        },
                        "future": {
                            "regex": "none",
                            "alertText": "* 日期必需晚于 "
                        },
                        "maxCheckbox": {
                            "regex": "none",
                            "alertText": "* 最多选取 ",
                            "alertText2": " 个项目"
                        },
                        "minCheckbox": {
                            "regex": "none",
                            "alertText": "* 请选择 ",
                            "alertText2": " 个项目"
                        },
                        "equals": {
                            "regex": "none",
                            "alertText": "* 请输入与上面相同的密码"
                        },
                        "creditCard": {
                            "regex": "none",
                            "alertText": "* 无效的信用卡号码"
                        },
                        "phone": {
                            // credit: jquery.h5validate.js / orefalo
                            "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                            "alertText": "* 无效的电话号码"
                        },
                        "mobile": {
                            "regex": /^1[3|4|5|8][0-9]\d{8}$/,
                            "alertText": "* 无效的手机号码"
                        },
                        "email": {
                            // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                            "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                            "alertText": "* 邮件地址无效"
                        },
                        "integer": {
                            "regex": /^[\-\+]?\d+$/,
                            "alertText": "* 不是有效的整数"
                        },
                        "number": {
                            // Number, including positive, negative, and floating decimal. credit: orefalo
                            "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                            "alertText": "* 无效的数字"
                        },
                        "date": {
                            "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                            "alertText": "* 无效的日期，格式必需为 YYYY-MM-DD"
                        },
                        "dateTime": {
                            "regex": /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
                            "alertText": "* 无效的日期格式，格式必须为yyyy-mm-dd hh:mm:ss"
                        },
                        "time": {
                            "regex": /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/,
                            "alertText": "* 无效的时间格式，格式必需为 hh:mm:ss"
                        },
                        "_time": {
                            "regex": /^(([1-9]{1})|([0-1][0-9])|([1-2][0-3])):([0-5][0-9])$/,
                            "alertText": "* 无效的时间格式，格式必需为 hh:mm"
                        },
                        "mac": {
                            "regex": /([A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2})|([A-Fa-f\d]{2}-[A-Fa-f\d]{2}-[A-Fa-f\d]{2}-[A-Fa-f\d]{2}-[A-Fa-f\d]{2}-[A-Fa-f\d]{2})/,
                            "alertText": "无效MAC地址,格式必需为 XX-XX-XX-XX-XX-XX或XX:XX:XX:XX:XX:XX"
                        },
                        "ipv4": {
                            "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                            "alertText": "* 无效的 IP 地址"
                        },
                        "ipv4sect": {
                            "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}((([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))|(((([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[/])(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))))$/,
                            "alertText": "* 无效的 IP 地址段"
                        },
                        "url": {
                            "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                            "alertText": "* Invalid URL"
                        },
                        "onlyNumberSp": {
                            "regex": /^[0-9\ ]+$/,
                            "alertText": "* 只能填数字"
                        },
                        "onlyLetterSp": {
                            "regex": /^[a-zA-Z\ \']+$/,
                            "alertText": "* 只接受英文字母大小写"
                        },
                        "onlyLetterNumber": {
                            "regex": /^[0-9a-zA-Z]+$/,
                            "alertText": "* 不接受特殊字符"
                        },
                        // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                        "ajaxUserCall": {
                            "url": "ajaxValidateFieldUser",
                            // you may want to pass extra data on the ajax call
                            "extraData": "name=eric",
                            "alertText": "* 此名称已被其他人使用",
                            "alertTextLoad": "* 正在确认名称是否有其他人使用，请稍等。"
                        },
                        "ajaxUserCallPhp": {
                            "url": "phpajax/ajaxValidateFieldUser.php",
                            // you may want to pass extra data on the ajax call
                            "extraData": "name=eric",
                            // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                            "alertTextOk": "* 此帐号名称可以使用",
                            "alertText": "* 此名称已被其他人使用",
                            "alertTextLoad": "* 正在确认帐号名称是否有其他人使用，请稍等。"
                        },
                        "ajaxNameCall": {
                            // remote json service location
                            "url": "ajaxValidateFieldName",
                            // error
                            "alertText": "* 此名称可以使用",
                            // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                            "alertTextOk": "* 此名称已被其他人使用",
                            // speaks by itself
                            "alertTextLoad": "* 正在确认名称是否有其他人使用，请稍等。"
                        },
                        "ajaxNameCallPhp": {
                            // remote json service location
                            "url": "phpajax/ajaxValidateFieldName.php",
                            // error
                            "alertText": "* 此名称已被其他人使用",
                            // speaks by itself
                            "alertTextLoad": "* 正在确认名称是否有其他人使用，请稍等。"
                        },
                        "validate2fields": {
                            "alertText": "* 请输入 HELLO"
                        },
                        //tls warning:homegrown not fielded 
                        "dateFormat": {
                            "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                            "alertText": "* 无效的日期格式"
                        },
                        //tls warning:homegrown not fielded 
                        "dateTimeFormat": {
                            "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                            "alertText": "* 无效的日期或时间格式",
                            "alertText2": "可接受的格式： ",
                            "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM 或 ",
                            "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
                        },
                        "chinaIdLoose": {
                            "regex": /^(\d{18}|\d{15}|\d{17}[xX])$/,
                            "alertText": "* 无效的身份证号码"
                        },
                        "loginName": {
                            "regex": /^[0-9a-zA-Z_]+$/,
                            "alertText": "* 只接受字母数字下划线"
                        },
                        "floatNumber": {
                            "regex": /^(\d+)(.\d+)?$/,
                            "alertText": "* 只接受正浮点数"
                        },
                        "shopNO": {
                            "regex": /^([a-zA-Z0-9]){1,5}$/,
                            "alertText": "* 商铺编号只能为五位数的字母或者数字"
                        }
                    }
            }


        }
    };

    $.validationEngineLanguage.newLang();

})(jQuery);
