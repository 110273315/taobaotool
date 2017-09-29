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
                    "name": "version",
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
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "id_num",
                    "id": 40
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
            "name": "ErrorResponse",
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
            "name": "NoBody",
            "fields": []
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
                        },
                        {
                            "name": "coupon",
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
                                            "type": "QueryCouponRequest",
                                            "name": "req_query_coupon",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponResponse",
                                            "name": "res_query_coupon",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "LockCouponRequest",
                                            "name": "req_lock_coupon",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "LockCouponResponse",
                                            "name": "res_lock_coupon",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "DestroyCouponRequest",
                                            "name": "req_destroy_coupon",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "DestroyCouponResponse",
                                            "name": "res_destroy_coupon",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "GetCouponRequest",
                                            "name": "req_get_coupon",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "GetCouponResponse",
                                            "name": "res_get_coupon",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCustomerCouponRequest",
                                            "name": "req_query_cust_coupon",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCustomerCouponResponse",
                                            "name": "res_query_cust_coupon",
                                            "id": 19
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "RewardsCouponRequest",
                                            "name": "req_reward_coupon",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "RewardsCouponResponse",
                                            "name": "res_reward_coupon",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ImportCouponRequest",
                                            "name": "req_import_coupon",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ExportCouponRequest",
                                            "name": "req_export_coupon",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponCategoryRequest",
                                            "name": "req_coupon_category",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponCategoryResponse",
                                            "name": "res_coupon_category",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponTypeRequest",
                                            "name": "req_coupon_type",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponTypeResponse",
                                            "name": "res_coupon_type",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponListRequest",
                                            "name": "req_query_coupon_list",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponListResponse",
                                            "name": "res_query_coupon_list",
                                            "id": 29
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "GetCouponTempRequest",
                                            "name": "req_get_coupon_temp",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "GetCouponTempResponse",
                                            "name": "res_get_coupon_temp",
                                            "id": 31
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponInstanceRequest",
                                            "name": "req_query_coupon_instance_list",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponInstanceResponse",
                                            "name": "res_query_coupon_instance_list",
                                            "id": 33
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "RewardCouponBatchRequest",
                                            "name": "req_rewardcouponbatch",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "RewardCouponBatchResponse",
                                            "name": "res_rewardcouponbatch",
                                            "id": 35
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryRewardCouponRequest",
                                            "name": "req_query_reward_coupon",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryRewardCouponResponse",
                                            "name": "res_query_reward_coupon",
                                            "id": 37
                                        }
                                    ],
                                    "oneofs": {
                                        "content": [
                                            10,
                                            11,
                                            12,
                                            13,
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
                                            32,
                                            33,
                                            34,
                                            35,
                                            36,
                                            37
                                        ]
                                    }
                                },
                                {
                                    "name": "QueryRewardCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "custid",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "type",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryRewardCouponResponse",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "errcode",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CouponInfo",
                                            "name": "ci",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "RewardCouponBatchRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "custid",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "tradeid",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "sendchannelcode",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "applicablechannelcode",
                                            "id": 4
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "hisuuid",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 6
                                        }
                                    ]
                                },
                                {
                                    "name": "RewardCouponBatchResponse",
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
                                    "name": "CouponInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "code",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "templet_id",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "CouponType",
                                            "name": "type",
                                            "id": 4
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "limit_count",
                                            "id": 6
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "limit_fee",
                                            "id": 7
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "limit_time_begin",
                                            "id": 8
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "limit_time_end",
                                            "id": 9
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "limit_shop_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "limit_commodity",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "limit_max_discount",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "face_value",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "customer_id",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SettlementOptions",
                                            "name": "so",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "category_value",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "category_name",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "send_channel_value",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "detail_channel_value",
                                            "id": 19
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "get_time",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "used_time",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "is_used",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "org_name",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "calss_code",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "calss_name",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "image_url",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point",
                                            "id": 29
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "is_expired",
                                            "id": 30
                                        }
                                    ]
                                },
                                {
                                    "name": "SettlementAccountInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "settlement_account_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "value",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "SettlementOptions",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "LackOfIncentivesOperator",
                                            "name": "loio",
                                            "id": 1
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "SettlementAccountInfo",
                                            "name": "sai",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "ShopInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "shop_id",
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
                                            "name": "no",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "logo_url",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "industryid_code_key",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "area",
                                            "id": 6
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "CustomerSearchCondition",
                                            "name": "customer_condition",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "shop_id",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "fee",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint64",
                                            "name": "time",
                                            "id": 13
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "device_id",
                                            "id": 14
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponResponse",
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
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponInfo",
                                            "name": "ci",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "LockCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "lock_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "lock_timeout",
                                            "id": 11
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "lock_coupon_id",
                                            "id": 12
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "unlock_coupon_id",
                                            "id": 13
                                        }
                                    ]
                                },
                                {
                                    "name": "LockCouponResponse",
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
                                    "name": "DestroyCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "lock_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "coupon_id",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "shop_id",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CustomerSearchCondition",
                                            "name": "customer_condition",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "verifier_name",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "use_channel_code",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "need_check_cust",
                                            "id": 18
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "coupon_no",
                                            "id": 19
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "need_check_lock",
                                            "id": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "DestroyCouponResponse",
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
                                    "name": "GetCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "coupon_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "coupon_code",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "shop_id",
                                            "id": 12
                                        }
                                    ],
                                    "oneofs": {
                                        "coupon": [
                                            10,
                                            11
                                        ]
                                    }
                                },
                                {
                                    "name": "GetCouponResponse",
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
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CouponInfo",
                                            "name": "ci",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCustomerCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "CustomerSearchCondition",
                                            "name": "customer_condition",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "category_code",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "queryType",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "PageCondition",
                                            "name": "page",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SortCondition",
                                            "name": "sort",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "flag",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_status",
                                            "id": 17
                                        }
                                    ]
                                },
                                {
                                    "name": "SortCondition",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "column",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "type",
                                            "id": 11
                                        }
                                    ]
                                },
                                {
                                    "name": "PageCondition",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "index",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "num",
                                            "id": 13
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCustomerCouponResponse",
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
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponInfo",
                                            "name": "list_coupon_info",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "count",
                                            "id": 11
                                        }
                                    ]
                                },
                                {
                                    "name": "RewardsCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "couponid",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "custid",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "activityname",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "tradeid",
                                            "id": 4
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "quantity",
                                            "id": 5
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "sendchannelcode",
                                            "id": 6
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "detailchannelcode",
                                            "id": 7
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "applicablechannelcode",
                                            "id": 8
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wechatcardid",
                                            "id": 9
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point",
                                            "id": 11
                                        }
                                    ]
                                },
                                {
                                    "name": "RewardsCouponResponse",
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
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "no",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "ImportCouponRequest",
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
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "couponid",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "ExportCouponRequest",
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
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponCategoryRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "code",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponCategory",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "category_code",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "category_name",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponCategoryResponse",
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
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponCategory",
                                            "name": "category",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponTypeRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "code",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponClass",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "type_code",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "type_name",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponTypeResponse",
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
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponClass",
                                            "name": "type",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponListRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "category_code",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "area",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "queryType",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "PageCondition",
                                            "name": "page",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SortCondition",
                                            "name": "sort",
                                            "id": 6
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "class_code",
                                            "id": 7
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "max_points",
                                            "id": 8
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "min_points",
                                            "id": 9
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "key_name",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "applicable_channel",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "has_left",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "custid",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_card_type_limit",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "shop_limit",
                                            "id": 15
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponTempInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "couponid",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "image_url",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "category_code",
                                            "id": 4
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "category_name",
                                            "id": 5
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 6
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "valid_start_time",
                                            "id": 7
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "valid_end_time",
                                            "id": 8
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "valid_days",
                                            "id": 9
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "coupon_value",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "max_assign_count",
                                            "id": 11
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "send_count",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "urplus_count",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "cust_type_id",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "class_code",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "class_name",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point",
                                            "id": 17
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "ShopInfo",
                                            "name": "shop",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "org_name",
                                            "id": 19
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "detail_rule",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "valid_type_code",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_card_type_limit",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "retrievablestrattime",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "retrievableendtime",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "isgeneral",
                                            "id": 25
                                        }
                                    ]
                                },
                                {
                                    "name": "ShopInfoList",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "ShopInfo",
                                            "name": "shop",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponListResponse",
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
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponTempInfo",
                                            "name": "couponTemp",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "count",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "GetCouponTempRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "coupon_id",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "GetCouponTempResponse",
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
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CouponTempInfo",
                                            "name": "couponTemp",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponInstanceRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "no",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "shopid",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "usedtime",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "typecode",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponInstance",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "no",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "usedtime",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fullname",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponInstanceResponse",
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
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponInstance",
                                            "name": "couponinstance",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "couponNum",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "custNum",
                                            "id": 5
                                        }
                                    ]
                                }
                            ],
                            "enums": [
                                {
                                    "name": "CouponType",
                                    "values": [
                                        {
                                            "name": "DiscountCoupon",
                                            "id": 2
                                        },
                                        {
                                            "name": "VoucherCoupon",
                                            "id": 1
                                        },
                                        {
                                            "name": "ExchangeCoupon",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "LackOfIncentivesOperator",
                                    "values": [
                                        {
                                            "name": "Sequence",
                                            "id": 1
                                        },
                                        {
                                            "name": "Scale",
                                            "id": 2
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "app",
            "fields": [],
            "messages": [
                {
                    "name": "service304",
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
                                    "type": "ErrorResponse",
                                    "name": "res_error",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "LoginRequest",
                                    "name": "req_login",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "LoginResponse",
                                    "name": "res_login",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCodeRequest",
                                    "name": "req_query_code_value",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCodeResponse",
                                    "name": "res_query_code_value",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopRequest",
                                    "name": "req_query_shop",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopResponse",
                                    "name": "res_query_shop",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustRequest",
                                    "name": "req_query_cust",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustResponse",
                                    "name": "res_query_cust",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCustRequest",
                                    "name": "req_update_cust",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_update_cust",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "SendValidateCodeRequest",
                                    "name": "req_get_validation_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_get_validation_code",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPointChangeDetailRequest",
                                    "name": "req_query_point_detail",
                                    "id": 114
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPointChangeDetailResponse",
                                    "name": "res_query_point_detail",
                                    "id": 115
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeInvoiceRequest",
                                    "name": "req_query_trade_invoice",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeInvoiceResponse",
                                    "name": "res_query_trade_invoice",
                                    "id": 131
                                },
                                {
                                    "rule": "optional",
                                    "type": "CheckTradeInvoiceRequest",
                                    "name": "req_check_trade_invoice",
                                    "id": 140
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_check_trade_invoice",
                                    "id": 141
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddTradeRequest",
                                    "name": "req_add_trade",
                                    "id": 142
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_trade",
                                    "id": 143
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustCardRequest",
                                    "name": "req_query_cust_card",
                                    "id": 150
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustCardResponse",
                                    "name": "res_query_cust_card",
                                    "id": 151
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddCustCardRequest",
                                    "name": "req_add_cust_card",
                                    "id": 160
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_cust_card",
                                    "id": 161
                                },
                                {
                                    "rule": "optional",
                                    "type": "ChangeCustCardRequest",
                                    "name": "req_change_cust_card",
                                    "id": 170
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_change_cust_card",
                                    "id": 171
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCardStatusRequest",
                                    "name": "req_update_cust_card",
                                    "id": 175
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_update_cust_card",
                                    "id": 176
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryExchangedCouponRequest",
                                    "name": "req_query_cust_coupon",
                                    "id": 116
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryExchangedCouponResponse",
                                    "name": "res_query_cust_coupon",
                                    "id": 117
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponInstanceRequest",
                                    "name": "req_get_coupon_instance",
                                    "id": 200
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponInstanceResponse",
                                    "name": "res_get_coupon_instance",
                                    "id": 210
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponHistoryRequest",
                                    "name": "req_query_coupon_history",
                                    "id": 220
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponHistoryResponse",
                                    "name": "res_query_coupon_history",
                                    "id": 221
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryExchangeableCouponRequest",
                                    "name": "req_query_exchangeable_coupon",
                                    "id": 230
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryExchangeableCouponResponse",
                                    "name": "res_query_exchangeable_coupon",
                                    "id": 240
                                },
                                {
                                    "rule": "optional",
                                    "type": "RewardCouponRequest",
                                    "name": "req_reward_coupon",
                                    "id": 250
                                },
                                {
                                    "rule": "optional",
                                    "type": "RewardCouponResponse",
                                    "name": "res_reward_coupon",
                                    "id": 260
                                },
                                {
                                    "rule": "optional",
                                    "type": "DestroyCouponRequest",
                                    "name": "req_destroy_coupon",
                                    "id": 261
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_destroy_coupon",
                                    "id": 262
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustFeedbackRequest",
                                    "name": "req_query_feedback",
                                    "id": 270
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustFeedbackResponse",
                                    "name": "res_query_feedback",
                                    "id": 280
                                },
                                {
                                    "rule": "optional",
                                    "type": "ReplyFeedbackRequest",
                                    "name": "req_reply_feedback",
                                    "id": 290
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_reply_feedback",
                                    "id": 300
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    20,
                                    21,
                                    28,
                                    29,
                                    30,
                                    40,
                                    114,
                                    115,
                                    130,
                                    131,
                                    140,
                                    141,
                                    142,
                                    143,
                                    150,
                                    151,
                                    160,
                                    161,
                                    170,
                                    171,
                                    175,
                                    176,
                                    116,
                                    117,
                                    200,
                                    210,
                                    220,
                                    221,
                                    230,
                                    240,
                                    250,
                                    260,
                                    261,
                                    262,
                                    270,
                                    280,
                                    290,
                                    300
                                ]
                            }
                        },
                        {
                            "name": "CouponInstance",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "coupon_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "name",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "no",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "category_code",
                                    "id": 41
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "good_type_code",
                                    "id": 42
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECouponStatusType",
                                    "name": "status_code",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "image_url",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "get_time",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "used_time",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 85
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_name",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_no",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "point",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "verifier_name",
                                    "id": 120
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "limit_value",
                                    "id": 140
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "face_value",
                                    "id": 150
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "limit_max_discount",
                                    "id": 160
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "valid_start_time",
                                    "id": 170
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "valid_end_time",
                                    "id": 180
                                }
                            ]
                        },
                        {
                            "name": "LoginRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "userid",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "password",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "LoginResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "sessionid",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "LoginUserInfo",
                                    "name": "user_info",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "LoginUserInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "innerid",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "photo",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "userid",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "ELanguageType",
                                    "name": "language",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 60
                                }
                            ]
                        },
                        {
                            "name": "QueryCodeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "type_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCodeResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "codes",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryShopRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_name",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryShopResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "ShopInfo",
                                    "name": "shops",
                                    "id": 10
                                }
                            ],
                            "messages": [
                                {
                                    "name": "ShopInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "shop_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "shop_name",
                                            "id": 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "QueryCustRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.Customer",
                                    "name": "cust",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECustCardType",
                                    "name": "card_status",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "total_point",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "total_coupon",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "total_exchange",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "UpdateCustRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "verify_code",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "CustBasicInfo",
                                    "name": "cust",
                                    "id": 30
                                }
                            ],
                            "messages": [
                                {
                                    "name": "CustBasicInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "uint32",
                                            "name": "cust_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "mobile",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "nick_name",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "name",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "id_num",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "birthday",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gender_code",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "card_id",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "address",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "car_no",
                                            "id": 80
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "photo",
                                            "id": 90
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SendValidateCodeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "type",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeInvoiceRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "invoice_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "EInvoiceStatusType",
                                    "name": "status_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "EQueryType",
                                    "name": "query_type",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeInvoiceResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "InvoiceInfo",
                                    "name": "result",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ],
                            "messages": [
                                {
                                    "name": "InvoiceInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "uint32",
                                            "name": "invoice_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint32",
                                            "name": "cust_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_name",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_photo",
                                            "id": 35
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_tel",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "invoice_url",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EInvoiceStatusType",
                                            "name": "status",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "created_time",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "shop_id",
                                            "id": 80
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "shop_name",
                                            "id": 90
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 100
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "trade_sum",
                                            "id": 110
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "trade_time",
                                            "id": 120
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "check_desc",
                                            "id": 130
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "check_user",
                                            "id": 140
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "check_time",
                                            "id": 150
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 160
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CheckTradeInvoiceRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "invoice_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "trade_sum",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "trade_time",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "EInvoiceStatusType",
                                    "name": "status",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "check_desc",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "check_user_id",
                                    "id": 80
                                }
                            ]
                        },
                        {
                            "name": "AddTradeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "image_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_no",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "trade_sum",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "trade_time",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "check_user_id",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 90
                                }
                            ]
                        },
                        {
                            "name": "QueryPointChangeDetailRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryPointChangeDetailResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "PointInfo",
                                    "name": "pi",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total",
                                    "id": 20
                                }
                            ],
                            "messages": [
                                {
                                    "name": "PointInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "reason",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "num",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint64",
                                            "name": "time",
                                            "id": 30
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "QueryCustCardRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "EOpeaType",
                                    "name": "type",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustCardResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CustCardHistory",
                                    "name": "result",
                                    "id": 10
                                }
                            ],
                            "messages": [
                                {
                                    "name": "CustCardHistory",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_id",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_name",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "created_time",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EOpeaType",
                                            "name": "type",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "card_no",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "operate_user",
                                            "id": 80
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "card_level",
                                            "id": 90
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "AddCustCardRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "full_name",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "id_num",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "gender_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "birthday",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "email",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "country_code",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "province_code",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "city_code",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "address",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_no",
                                    "id": 110
                                }
                            ]
                        },
                        {
                            "name": "ChangeCustCardRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "new_card_no",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "UpdateCardStatusRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "EOpeaType",
                                    "name": "type",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryExchangedCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "category_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_by_point",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECouponStatusType",
                                    "name": "status_code",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "QueryExchangedCouponResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "sr.customer.coupon.CouponInfo",
                                    "name": "coupon_list",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryExchangeableCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "coupon_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "good_type_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "min_points",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "max_points",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_level",
                                    "id": 60
                                }
                            ]
                        },
                        {
                            "name": "QueryExchangeableCouponResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "sr.customer.coupon.CouponTempInfo",
                                    "name": "coupon",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "RewardCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "coupon_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "RewardCouponResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "no",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "DestroyCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "coupon_no",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "GetCouponInstanceRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "coupon_no",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetCouponInstanceResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CouponInstance",
                                    "name": "coupon_instances",
                                    "id": 100
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponHistoryRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "ECouponHistoryType",
                                    "name": "type_code",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponHistoryResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CouponInstance",
                                    "name": "coupon_instances",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustFeedbackRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "EFeedbackStatusType",
                                    "name": "status_code",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "EQueryType",
                                    "name": "query_type",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueryCustFeedbackResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Feedback",
                                    "name": "feed_back_list",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Feedback",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "uint32",
                                            "name": "id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint32",
                                            "name": "cust_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_mobile",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cust_name",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "image_url",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "EFeedbackTargetType",
                                            "name": "target_code",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "detail",
                                            "id": 50
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint64",
                                            "name": "feed_time",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "reply",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "reply_time",
                                            "id": 80
                                        },
                                        {
                                            "rule": "required",
                                            "type": "EFeedbackStatusType",
                                            "name": "status_code",
                                            "id": 90
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "replyer_id",
                                            "id": 100
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "replyer",
                                            "id": 110
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ReplyFeedbackRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "reply",
                                    "id": 30
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "EOpeaType",
                            "values": [
                                {
                                    "name": "AddCard",
                                    "id": 1
                                },
                                {
                                    "name": "ChangeCard",
                                    "id": 2
                                },
                                {
                                    "name": "FreezeCard",
                                    "id": 3
                                },
                                {
                                    "name": "ReleaseCard",
                                    "id": 4
                                },
                                {
                                    "name": "DeleteCard",
                                    "id": 5
                                },
                                {
                                    "name": "UpdateCard",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "EInvoiceStatusType",
                            "values": [
                                {
                                    "name": "Unchecked",
                                    "id": 0
                                },
                                {
                                    "name": "Approved",
                                    "id": 1
                                },
                                {
                                    "name": "Rejected",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ECouponStatusType",
                            "values": [
                                {
                                    "name": "Assgined",
                                    "id": 1
                                },
                                {
                                    "name": "Used",
                                    "id": 2
                                },
                                {
                                    "name": "Expired",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "ECampaignStatusType",
                            "values": [
                                {
                                    "name": "Underway",
                                    "id": 1
                                },
                                {
                                    "name": "Ended",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ECheckinStatusType",
                            "values": [
                                {
                                    "name": "AlreadyChecked",
                                    "id": 1
                                },
                                {
                                    "name": "Unchecked",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ECouponHistoryType",
                            "values": [
                                {
                                    "name": "UsedHistory",
                                    "id": 1
                                },
                                {
                                    "name": "ExchangedHistory",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EFeedbackStatusType",
                            "values": [
                                {
                                    "name": "Unchecked",
                                    "id": 1
                                },
                                {
                                    "name": "AlreadyChecked",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EFeedbackTargetType",
                            "values": [
                                {
                                    "name": "Market",
                                    "id": 1
                                },
                                {
                                    "name": "Shop",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ELanguageType",
                            "values": [
                                {
                                    "name": "Chinese",
                                    "id": 0
                                },
                                {
                                    "name": "English",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "EQueryType",
                            "values": [
                                {
                                    "name": "Main",
                                    "id": 1
                                },
                                {
                                    "name": "Count",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ECustCardType",
                            "values": [
                                {
                                    "name": "Disable",
                                    "id": 0
                                },
                                {
                                    "name": "Enable",
                                    "id": 1
                                },
                                {
                                    "name": "Delete",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();