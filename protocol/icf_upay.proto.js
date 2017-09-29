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
                    "name": "upay",
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
                                    "type": "TerminalActivateRequest",
                                    "name": "req_terminal_activate",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "TerminalActivateResponse",
                                    "name": "res_terminal_activate",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "PrecreateRequest",
                                    "name": "req_precreate",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "PrecreateResponse",
                                    "name": "res_precreate",
                                    "id": 15
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
                                    "type": "CancelRequest",
                                    "name": "req_cancel",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "CancelResponse",
                                    "name": "res_cancel",
                                    "id": 19
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
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallWechatCashierRequest",
                                    "name": "req_call_wechat_cashier",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallWechatCashierResponse",
                                    "name": "res_call_wechat_cashier",
                                    "id": 41
                                },
                                {
                                    "rule": "optional",
                                    "type": "NotifyMessageFromUpay",
                                    "name": "ntf_message_from_upay",
                                    "id": 99
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
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
                                    40,
                                    41,
                                    99
                                ]
                            }
                        },
                        {
                            "name": "TerminalActivateRequest",
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
                                    "name": "code",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "device_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "TerminalActivateResponse",
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
                                            "name": "terminal_id",
                                            "id": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "PrecreateRequest",
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
                                    "name": "terminal_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 22
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "total_amount",
                                    "id": 24
                                },
                                {
                                    "rule": "required",
                                    "type": "EPayWay",
                                    "name": "pay_way",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "EPayWay",
                                    "name": "sub_pay_way",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "payer_uid",
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
                                    "name": "operator",
                                    "id": 34
                                }
                            ]
                        },
                        {
                            "name": "PrecreateResponse",
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
                                            "name": "upay_trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
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
                                            "name": "order_status",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayWay",
                                            "name": "pay_way",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayWay",
                                            "name": "sub_pay_way",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "qr_code",
                                            "id": 24
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "total_amount",
                                            "id": 26
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "net_amount",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "operator",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wap_pay_request",
                                            "id": 36
                                        }
                                    ]
                                }
                            ]
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
                                    "name": "terminal_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 22
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "total_amount",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "EPayWay",
                                    "name": "pay_way",
                                    "id": 26
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "dynamic_id",
                                    "id": 28
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "subject",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "operator",
                                    "id": 32
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
                                            "name": "upay_trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
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
                                            "name": "order_status",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayWay",
                                            "name": "pay_way",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayWay",
                                            "name": "sub_pay_way",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "payer_uid",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "payer_login",
                                            "id": 26
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "total_amount",
                                            "id": 28
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "net_amount",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "finish_time",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "channel_finish_time",
                                            "id": 36
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "operator",
                                            "id": 38
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CancelRequest",
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
                                    "name": "terminal_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "upay_trade_no",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECancelType",
                                    "name": "type",
                                    "id": 26
                                }
                            ]
                        },
                        {
                            "name": "CancelResponse",
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
                                            "name": "upay_trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
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
                                            "name": "order_status",
                                            "id": 18
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "total_amount",
                                            "id": 28
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "net_amount",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "finish_time",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "channel_finish_time",
                                            "id": 36
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "operator",
                                            "id": 38
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
                                    "name": "terminal_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "upay_trade_no",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "refund_no",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "refund_request_no",
                                    "id": 34
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "operator",
                                    "id": 38
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "refund_amount",
                                    "id": 40
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
                                            "name": "upay_trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
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
                                            "name": "order_status",
                                            "id": 18
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "total_amount",
                                            "id": 28
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "net_amount",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "finish_time",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "channel_finish_time",
                                            "id": 36
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "operator",
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
                                    "name": "terminal_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "upay_trade_no",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 24
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
                                            "name": "upay_trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
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
                                            "name": "order_status",
                                            "id": 18
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "total_amount",
                                            "id": 28
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "net_amount",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "finish_time",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "channel_finish_time",
                                            "id": 36
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "operator",
                                            "id": 38
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CallWechatCashierRequest",
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
                                    "name": "terminal_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 24
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "total_amount",
                                    "id": 26
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "subject",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "EPayWay",
                                    "name": "pay_way",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "operator",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "notify_url",
                                    "id": 46
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "return_url",
                                    "id": 48
                                }
                            ]
                        },
                        {
                            "name": "CallWechatCashierResponse",
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
                                            "name": "upay_trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
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
                                            "name": "total_amount",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 32
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "operator",
                                            "id": 38
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "NotifyMessageFromUpay",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 6
                                },
                                {
                                    "rule": "required",
                                    "type": "EPayWay",
                                    "name": "pay_way",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "content",
                                    "id": 8
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Result",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "terminal_id",
                                            "id": 6
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "upay_trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "third_trade_no",
                                            "id": 14
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "status",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "order_status",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayWay",
                                            "name": "pay_way",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayWay",
                                            "name": "sub_pay_way",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "payer_uid",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "payer_login",
                                            "id": 26
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "total_amount",
                                            "id": 28
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "net_amount",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "finish_time",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "channel_finish_time",
                                            "id": 36
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "operator",
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
                                    "name": "wxpay",
                                    "id": 3
                                },
                                {
                                    "name": "baifubao",
                                    "id": 4
                                },
                                {
                                    "name": "jdpay",
                                    "id": 5
                                },
                                {
                                    "name": "tenpay",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "ECancelType",
                            "values": [
                                {
                                    "name": "automatic",
                                    "id": 1
                                },
                                {
                                    "name": "manual",
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