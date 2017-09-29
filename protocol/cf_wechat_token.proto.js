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
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ding_user_id",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ding_union_id",
                    "id": 51
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
            "name": "cf",
            "fields": [],
            "messages": [
                {
                    "name": "wechat",
                    "fields": [],
                    "messages": [
                        {
                            "name": "token",
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
                                            "type": "CommonResponse",
                                            "name": "res_error",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "GetTokenRequest",
                                            "name": "req_get_token",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "GetTokenResponse",
                                            "name": "res_get_token",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "UpdateTokenRequest",
                                            "name": "req_update_token",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "UpdateTokenNotify",
                                            "name": "evt_update_token",
                                            "id": 12
                                        }
                                    ],
                                    "oneofs": {
                                        "content": [
                                            2,
                                            10,
                                            11,
                                            20,
                                            12
                                        ]
                                    }
                                },
                                {
                                    "name": "TokenInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "token",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "timeout",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "GetTokenRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "account_id",
                                            "id": 13
                                        }
                                    ]
                                },
                                {
                                    "name": "GetTokenResponse",
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
                                            "type": "TokenInfo",
                                            "name": "access_token",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "TokenInfo",
                                            "name": "jssdk_ticket",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "TokenInfo",
                                            "name": "api_ticket",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "UpdateTokenRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "account_id",
                                            "id": 13
                                        },
                                        {
                                            "rule": "required",
                                            "type": "TokenInfo",
                                            "name": "access_token",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "UpdateTokenNotify",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "account_id",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "TokenInfo",
                                            "name": "access_token",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "TokenInfo",
                                            "name": "jssdk_ticket",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "TokenInfo",
                                            "name": "api_ticket",
                                            "id": 5
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();