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
                    "name": "app",
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
                                    "type": "PushMessageRequest",
                                    "name": "req_push_message",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "PushMessageResponse",
                                    "name": "res_push_message",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "PushResultRequest",
                                    "name": "req_push_result",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "PushResultResponse",
                                    "name": "res_push_result",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "EventMessageFromAppPush",
                                    "name": "evt_message_from_app_push",
                                    "id": 90
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    10,
                                    11,
                                    12,
                                    13,
                                    90
                                ]
                            }
                        },
                        {
                            "name": "MessageContent",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "EMessageType",
                                    "name": "type",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "content",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "title",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "extras",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "EMessageType",
                                    "values": [
                                        {
                                            "name": "Notification",
                                            "id": 1
                                        },
                                        {
                                            "name": "Information",
                                            "id": 2
                                        },
                                        {
                                            "name": "All",
                                            "id": 9
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "PushMessageRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "EDeviceType",
                                    "name": "device_type",
                                    "id": 20
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CustomerSearchCondition",
                                    "name": "customer_search_condition",
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "MessageContent",
                                    "name": "message_content",
                                    "id": 70
                                }
                            ]
                        },
                        {
                            "name": "PushMessageResponse",
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
                                    "type": "string",
                                    "name": "message_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "PushResultRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "message_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "PushResultResponse",
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
                                    "type": "Result",
                                    "name": "result",
                                    "id": 10
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Result",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "message_id",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "android_received",
                                            "id": 53
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "ios_received",
                                            "id": 55
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "wp_received",
                                            "id": 57
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "EventMessageFromAppPush",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "evt_id",
                                    "id": 9
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "content",
                                    "id": 15
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "EDeviceType",
                            "values": [
                                {
                                    "name": "iOS",
                                    "id": 1
                                },
                                {
                                    "name": "Andriod",
                                    "id": 2
                                },
                                {
                                    "name": "Winphone",
                                    "id": 3
                                },
                                {
                                    "name": "All",
                                    "id": 9
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();