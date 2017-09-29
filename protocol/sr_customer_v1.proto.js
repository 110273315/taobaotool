module.exports = require("protobufjs").newBuilder({})['import']({
    "package": null,
    "messages": [
        {
            "name": "Header",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "sender",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "sender_type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "invoke_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "CustomerSearchCondition",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "id",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cf_account_id",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wechat_open_id",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wechat_union_id",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wechat_code",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "code",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ali_id",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mobile",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "device_mac",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "email",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "app_device_id",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "card_id",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "car_num",
                    "id": 28
                }
            ]
        },
        {
            "name": "TimeHorizon",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "time_begin",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "time_end",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "hour_begin",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "hour_end",
                    "id": 4
                }
            ]
        },
        {
            "name": "CommonResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "errcode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "errmsg",
                    "id": 2
                }
            ]
        },
        {
            "name": "DetailSearchCondition",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "time_begin",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "time_end",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "order_by",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "order_type",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "page_size",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "page_index",
                    "id": 6
                }
            ]
        },
        {
            "name": "PageInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "page_index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "page_count",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "item_count",
                    "id": 3
                }
            ]
        },
        {
            "name": "KeyValue",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "key",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "value",
                    "id": 20
                }
            ]
        },
        {
            "name": "SourceInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "source_type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "source_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "sr",
            "fields": [],
            "messages": [
                {
                    "name": "customer",
                    "fields": [],
                    "messages": [
                        {
                            "name": "Message",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "Header",
                                    "name": "header",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerInfoRequest",
                                    "name": "req_customer_info",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerInfoResponse",
                                    "name": "res_customer_info",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddCustomerInfoRequest",
                                    "name": "req_customer_info_add",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddCustomerInfoResponse",
                                    "name": "res_customer_info_add",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "EditCustomerInfoRequest",
                                    "name": "req_customer_info_edit",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "EditCustomerInfoResponse",
                                    "name": "res_customer_info_edit",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "ImportCustomerRequest",
                                    "name": "req_import_customer",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "ExportCustomerRequest",
                                    "name": "req_export_customer",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "ValidateCodeRequest",
                                    "name": "req_validationcode_get",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "APICommonResponse",
                                    "name": "res_openapi_common",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "ChangePasswordRequest",
                                    "name": "req_changepassword",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerValidateRequest",
                                    "name": "req_customervalidate",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerLoginRequest",
                                    "name": "req_customer_login",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerRegisterRequest",
                                    "name": "req_customer_register",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerApiUpdateRequest",
                                    "name": "req_customer_update",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerRedisRequest",
                                    "name": "req_customer_redis",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerRedisResponse",
                                    "name": "res_customer_redis",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerCollectShopRequest",
                                    "name": "req_customer_collectshop",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "SearchCollectShopReuqest",
                                    "name": "req_customer_getcollectshop",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "SearchCollectShopResponse",
                                    "name": "res_customer_getcollectshop",
                                    "id": 31
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddCustomerActionRequest",
                                    "name": "req_customer_action_add",
                                    "id": 32
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    10,
                                    11,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32
                                ]
                            }
                        },
                        {
                            "name": "SearchCollectShopReuqest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shopid",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "SearchCollectShopResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "code",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ShopInfo",
                                    "name": "content",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ShopInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shopid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "logourl",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "collectdate",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "area",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "industrycode",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "CustomerCollectShopRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shopid",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "type",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "CustomerInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "channelcode",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "Channel",
                                    "name": "channel",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "RedisCustomer",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "customerid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "photo",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "gendercode",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "provincecode",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "createdtime",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "fullname",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "nickname",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "citycode",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "countrycode",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "isattention",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "accountid",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "Customer",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "customerid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cardno",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "fullname",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "channelcode",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "typecode",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "orgid",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "levelid",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "countrycode",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "provincecode",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "citycode",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "gendercode",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "birthday",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "email",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "address",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "idtypecode",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "idnum",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "qq",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "statuscode",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "photo",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "notes",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "totaltradeamount",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "tradetimes",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "cumulativenum",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "currenttotalnum",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "nickname",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "accountid",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "carno",
                                    "id": 29
                                }
                            ]
                        },
                        {
                            "name": "Channel",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "validatecode",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "password",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "orgid",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "accountid",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mac",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "idtypecode",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "idnum",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "carno",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "deviceid",
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "APIConditions",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "password",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mac",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "customerid",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "custcardno",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "wechatcode",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "accountid",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "idnum",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "deviceid",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "CustomerRegisterRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "CustomerInfo",
                                    "name": "customer",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "ValidateCodeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "type",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "CustomerApiUpdateRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "Customer",
                                    "name": "customer",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "ChangePasswordRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "customerid",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "newpassword",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "CustomerValidateRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "validatecode",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "typecode",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "deviceid",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "CustomerLoginRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "APIConditions",
                                    "name": "condition",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "APICommonResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "code",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "content",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "CustomerRedisRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "APIConditions",
                                    "name": "conditions",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "CustomerRedisResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "code",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "content",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "RedisCustomer",
                                    "name": "members",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerInfoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "APIConditions",
                                    "name": "conditions",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerInfoResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "code",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "content",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Customer",
                                    "name": "members",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "AddCustomerInfoRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "fullname",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "sourcecode",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "typecode",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "orgid",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "countrycode",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "provincecode",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "citycode",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sexcode",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "birthday",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mac",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "email",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "address",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "idtypecode",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "idnum",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "qq",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "nickname",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "statuscode",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "photo",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "recinfo",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "campinfo",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "createrid",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "createdtime",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "modifiedtime",
                                    "id": 31
                                }
                            ]
                        },
                        {
                            "name": "AddCustomerInfoResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "errcode",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "errmsg",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EditCustomerInfoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "innerid",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "fullname",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "sourcecode",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "typecode",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "orgid",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "countrycode",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "provincecode",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "citycode",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sexcode",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "birthday",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mac",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "email",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "address",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "idtypecode",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "idnum",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "qq",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "nickname",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "statuscode",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "photo",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "recinfo",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "campinfo",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "createrid",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "createdtime",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "modifiedtime",
                                    "id": 31
                                }
                            ]
                        },
                        {
                            "name": "EditCustomerInfoResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "errcode",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "errmsg",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ImportCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "path",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ExportCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "sql",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "moduleid",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "filename",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "AddCustomerActionRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "customerid",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "typecode",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "actiondate",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 4
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();