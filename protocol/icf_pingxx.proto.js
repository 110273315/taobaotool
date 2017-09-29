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
            "name": "icf",
            "fields": [],
            "messages": [
                {
                    "name": "pingxx",
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
                                    "type": "PayRequest",
                                    "name": "req_pay",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "PayResponse",
                                    "name": "res_pay",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "RefundRequest",
                                    "name": "req_refund",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "RefundResponse",
                                    "name": "res_refund",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryRequest",
                                    "name": "req_query",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryResponse",
                                    "name": "res_query",
                                    "id": 23
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    16,
                                    17,
                                    20,
                                    21,
                                    22,
                                    23
                                ]
                            }
                        },
                        {
                            "name": "PayRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "app_id",
                                    "id": 5
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
                                    "name": "trade_no",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_amount",
                                    "id": 22
                                },
                                {
                                    "rule": "required",
                                    "type": "EPayWay",
                                    "name": "pay_way",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "currency",
                                    "id": 28
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "client_ip",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "subject",
                                    "id": 32
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "body",
                                    "id": 36
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "extras",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "PayResponse",
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
                                    "type": "Result",
                                    "name": "result",
                                    "id": 3
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Result",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "pingxx_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "created_time",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "is_paid",
                                            "id": 14
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "is_refunded",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "application_id",
                                            "id": 18
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "total_amount",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "settle_amount",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "body",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "extra",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "time_paid",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "time_expire",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "time_settle",
                                            "id": 34
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refunds",
                                            "id": 38
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "refund_amount",
                                            "id": 40
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "credential",
                                            "id": 42
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "description",
                                            "id": 44
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "RefundRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "app_id",
                                    "id": 5
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
                                    "name": "pingxx_id",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "refund_amount",
                                    "id": 14
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "description",
                                    "id": 16
                                }
                            ]
                        },
                        {
                            "name": "RefundResponse",
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
                                    "type": "Result",
                                    "name": "result",
                                    "id": 3
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Result",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "refund_pingxx_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "pingxx_refund_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "refund_amount",
                                            "id": 14
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "status",
                                            "id": 16
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "created_time",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "succeed_time",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "description",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "pingxx_id",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "third_trade_no",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refund_source",
                                            "id": 38
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "QueryRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "app_id",
                                    "id": 5
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
                                    "name": "pingxx_id",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "refund_pingxx_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryResponse",
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
                                    "type": "Charge",
                                    "name": "charge",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Refund",
                                    "name": "refund",
                                    "id": 4
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Charge",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "pingxx_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "created_time",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "is_paid",
                                            "id": 14
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "is_refunded",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "application_id",
                                            "id": 18
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "total_amount",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "settle_amount",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "body",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "extra",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "time_paid",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "time_expire",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "time_settle",
                                            "id": 34
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refunds",
                                            "id": 38
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "refund_amount",
                                            "id": 40
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "credential",
                                            "id": 42
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "description",
                                            "id": 44
                                        }
                                    ]
                                },
                                {
                                    "name": "Refund",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "refund_pingxx_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "pingxx_refund_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "refund_amount",
                                            "id": 14
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "status",
                                            "id": 16
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "created_time",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "succeed_time",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "description",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "pingxx_id",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "third_trade_no",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refund_source",
                                            "id": 38
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "EPayWay",
                            "values": [
                                {
                                    "name": "alipay",
                                    "id": 1
                                },
                                {
                                    "name": "alipay_wap",
                                    "id": 2
                                },
                                {
                                    "name": "alipay_pc_direct",
                                    "id": 3
                                },
                                {
                                    "name": "alipay_qr",
                                    "id": 4
                                },
                                {
                                    "name": "bfb",
                                    "id": 5
                                },
                                {
                                    "name": "bfb_wap",
                                    "id": 6
                                },
                                {
                                    "name": "wx",
                                    "id": 7
                                },
                                {
                                    "name": "wx_pub",
                                    "id": 8
                                },
                                {
                                    "name": "wx_pub_qr",
                                    "id": 9
                                },
                                {
                                    "name": "wx_wap",
                                    "id": 10
                                },
                                {
                                    "name": "wx_lite",
                                    "id": 11
                                },
                                {
                                    "name": "yeepay_wap",
                                    "id": 12
                                },
                                {
                                    "name": "jdpay_wap",
                                    "id": 13
                                },
                                {
                                    "name": "fqlpay_wap",
                                    "id": 14
                                },
                                {
                                    "name": "qgbc_wap",
                                    "id": 15
                                },
                                {
                                    "name": "qpay",
                                    "id": 16
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();