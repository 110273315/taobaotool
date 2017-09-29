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
                    "name": "queue",
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
                                    "type": "QueryQueueDetailRequest",
                                    "name": "req_query_queue_detail",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueDetailResponse",
                                    "name": "res_query_queue_detail",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "GenerateQueueNoRequest",
                                    "name": "req_generate_queue_no",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "GenerateQueueNoResponse",
                                    "name": "res_generate_queue_no",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueInfoRequest",
                                    "name": "req_query_queue_info",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueInfoResponse",
                                    "name": "res_query_queue_info",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "CancelQueueNoRequest",
                                    "name": "req_cancel_queue_no",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "CommonResponse",
                                    "name": "res_cancel_queue_no",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "EventMessageFromThirdpart",
                                    "name": "evt_message_from_thirdpart",
                                    "id": 30
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    30
                                ]
                            }
                        },
                        {
                            "name": "QueryQueueDetailRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "sid",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryQueueDetailResponse",
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
                                    "type": "SellerInfo",
                                    "name": "seller_info",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "QueueInfo",
                                    "name": "queue_info",
                                    "id": 30
                                }
                            ],
                            "messages": [
                                {
                                    "name": "SellerInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "sid",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 21
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "state",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "state_name",
                                            "id": 23
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "notice",
                                            "id": 24
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "avg",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "logo_uuid",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "tlogo_uuid",
                                            "id": 27
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "limit",
                                            "id": 28
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "off",
                                            "id": 29
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "qnotice",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "discount",
                                            "id": 31
                                        }
                                    ]
                                },
                                {
                                    "name": "QueueInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "qname",
                                            "id": 40
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "qattr",
                                            "id": 41
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "type",
                                            "id": 42
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "from",
                                            "id": 43
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "to",
                                            "id": 44
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "wait",
                                            "id": 45
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "waittime",
                                            "id": 46
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GenerateQueueNoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "sid",
                                    "id": 15
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "order_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "type",
                                    "id": 22
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "person_count",
                                    "id": 23
                                }
                            ]
                        },
                        {
                            "name": "GenerateQueueNoResponse",
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
                                    "type": "int32",
                                    "name": "serial_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryQueueInfoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "order_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "serial_id",
                                    "id": 21
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 22
                                }
                            ]
                        },
                        {
                            "name": "QueryQueueInfoResponse",
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
                                    "type": "int32",
                                    "name": "credit",
                                    "id": 11
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
                                            "name": "name",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "sid",
                                            "id": 21
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "orderid",
                                            "id": 22
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "serialid",
                                            "id": 23
                                        },
                                        {
                                            "rule": "required",
                                            "type": "EOrderStatus",
                                            "name": "state",
                                            "id": 24
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "sname",
                                            "id": 26
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "qname",
                                            "id": 27
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "qattr",
                                            "id": 28
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "type",
                                            "id": 29
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "num",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "wait",
                                            "id": 31
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "waittime",
                                            "id": 32
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "nowwait",
                                            "id": 33
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "notice",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "people_num",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "price",
                                            "id": 38
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "exid",
                                            "id": 45
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 50
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CancelQueueNoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "order_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "serial_id",
                                    "id": 21
                                }
                            ]
                        },
                        {
                            "name": "EventMessageFromThirdpart",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "EMsgType",
                                    "name": "msg_type",
                                    "id": 11
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
                            "name": "EMsgType",
                            "values": [
                                {
                                    "name": "MSG_SHOP",
                                    "id": 1
                                },
                                {
                                    "name": "MSG_QUEUE",
                                    "id": 2
                                },
                                {
                                    "name": "MSG_STATUS",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "EOrderStatus",
                            "values": [
                                {
                                    "name": "queue",
                                    "id": 1
                                },
                                {
                                    "name": "success",
                                    "id": 2
                                },
                                {
                                    "name": "fail",
                                    "id": 3
                                },
                                {
                                    "name": "call",
                                    "id": 4
                                },
                                {
                                    "name": "eat",
                                    "id": 5
                                },
                                {
                                    "name": "pass",
                                    "id": 6
                                },
                                {
                                    "name": "cancel",
                                    "id": 7
                                },
                                {
                                    "name": "error",
                                    "id": 8
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();