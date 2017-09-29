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
                    "name": "alipay",
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
                                    "type": "AlipayWebPayRequest",
                                    "name": "req_alipay_web_pay",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "AlipayWebPayResponse",
                                    "name": "res_alipay_web_pay",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "AlipayQueryRequest",
                                    "name": "req_alipay_query",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "AlipayQueryResponse",
                                    "name": "res_alipay_query",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetAuthTokenRequest",
                                    "name": "req_get_auth_token",
                                    "id": 91
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetAuthTokenResponse",
                                    "name": "res_get_auth_token",
                                    "id": 92
                                },
                                {
                                    "rule": "optional",
                                    "type": "EventUpdateToken",
                                    "name": "evt_update_token",
                                    "id": 93
                                },
                                {
                                    "rule": "optional",
                                    "type": "NotifyMessageFromAlipay",
                                    "name": "ntf_message_from_alipay",
                                    "id": 200
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    11,
                                    12,
                                    13,
                                    14,
                                    91,
                                    92,
                                    93,
                                    200
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
                            "name": "MqInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "exchange_name",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "EExchangeType",
                                    "name": "exchange_type",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "route_key",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "AlipayWebPayRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "EPayType",
                                    "name": "pay_type",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "return_url",
                                    "id": 13
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "out_trade_no",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_amount",
                                    "id": 23
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "subject",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "body",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "GoodsDetail",
                                    "name": "goods_detail",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "passback_params",
                                    "id": 35
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "auth_token",
                                    "id": 40
                                }
                            ],
                            "messages": [
                                {
                                    "name": "GoodsDetail",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "show_url",
                                            "id": 28
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "AlipayWebPayResponse",
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
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "url",
                                            "id": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "AlipayQueryRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "EPayType",
                                    "name": "pay_type",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_trade_query",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "out_trade_no",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "out_request_no",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "AlipayQueryResponse",
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
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "out_trade_no",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "buyer_logon_id",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ETradeStatus",
                                            "name": "trade_status",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "total_amount",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "receipt_amount",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "buyer_pay_amount",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point_amount",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "invoice_amount",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "send_pay_date",
                                            "id": 19
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "store_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "terminal_id",
                                            "id": 21
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "TradeFundBill",
                                            "name": "fund_bill_list",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "store_name",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "buyer_user_id",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "out_request_no",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refund_reason",
                                            "id": 35
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refund_amount",
                                            "id": 36
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "TradeFundBill",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "EFundChannel",
                                                    "name": "fund_channel",
                                                    "id": 23
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "amount",
                                                    "id": 24
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "real_amount",
                                                    "id": 25
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "EFundType",
                                                    "name": "fund_type",
                                                    "id": 26
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetAuthTokenRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 13
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "app_name",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetAuthTokenResponse",
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
                                    "name": "auth_token",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "MqInfo",
                                    "name": "mq_info",
                                    "id": 9
                                }
                            ]
                        },
                        {
                            "name": "EventUpdateToken",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "TokenInfo",
                                    "name": "info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "NotifyMessageFromAlipay",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 6
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
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "out_trade_no",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "out_biz_no",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "buyer_id",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "seller_id",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ETradeStatus",
                                            "name": "trade_status",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "total_amount",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "receipt_amount",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "invoice_amount",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "buyer_pay_amount",
                                            "id": 19
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point_amount",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "refund_fee",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "subject",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "body",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gmt_create",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gmt_payment",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gmt_refund",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gmt_close",
                                            "id": 27
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "TradeFundBill",
                                            "name": "fund_bill_list",
                                            "id": 28
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "TradeVoucherDetail",
                                            "name": "voucher_detail_list",
                                            "id": 33
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "passback_params",
                                            "id": 40
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "TradeFundBill",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "EFundChannel",
                                                    "name": "fund_channel",
                                                    "id": 29
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "amount",
                                                    "id": 30
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "real_amount",
                                                    "id": 31
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "EFundType",
                                                    "name": "fund_type",
                                                    "id": 32
                                                }
                                            ]
                                        },
                                        {
                                            "name": "TradeVoucherDetail",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "name",
                                                    "id": 34
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "type",
                                                    "id": 35
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "amount",
                                                    "id": 36
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "merchant_contribute",
                                                    "id": 37
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "other_contribute",
                                                    "id": 38
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "memo",
                                                    "id": 39
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "EExchangeType",
                            "values": [
                                {
                                    "name": "direct",
                                    "id": 1
                                },
                                {
                                    "name": "topic",
                                    "id": 2
                                },
                                {
                                    "name": "fanout",
                                    "id": 3
                                },
                                {
                                    "name": "headers",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "EPayType",
                            "values": [
                                {
                                    "name": "web",
                                    "id": 1
                                },
                                {
                                    "name": "wap",
                                    "id": 2
                                },
                                {
                                    "name": "face",
                                    "id": 3
                                },
                                {
                                    "name": "app",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ETradeStatus",
                            "values": [
                                {
                                    "name": "WAIT_BUYER_PAY",
                                    "id": 1
                                },
                                {
                                    "name": "TRADE_CLOSED",
                                    "id": 2
                                },
                                {
                                    "name": "TRADE_SUCCESS",
                                    "id": 3
                                },
                                {
                                    "name": "TRADE_FINISHED",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "EProductCode",
                            "values": [
                                {
                                    "name": "FAST_INSTANT_TRADE_PAY",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "EFundChannel",
                            "values": [
                                {
                                    "name": "ALIPAYACCOUNT",
                                    "id": 1
                                },
                                {
                                    "name": "COUPON",
                                    "id": 2
                                },
                                {
                                    "name": "POINT",
                                    "id": 3
                                },
                                {
                                    "name": "DISCOUNT",
                                    "id": 4
                                },
                                {
                                    "name": "PCARD",
                                    "id": 5
                                },
                                {
                                    "name": "MCARD",
                                    "id": 6
                                },
                                {
                                    "name": "MDISCOUNT",
                                    "id": 7
                                },
                                {
                                    "name": "MCOUPON",
                                    "id": 8
                                },
                                {
                                    "name": "PCREDIT",
                                    "id": 9
                                },
                                {
                                    "name": "FINANCEACCOUNT",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "EFundType",
                            "values": [
                                {
                                    "name": "DEBIT_CARD",
                                    "id": 1
                                },
                                {
                                    "name": "CREDIT_CARD",
                                    "id": 2
                                },
                                {
                                    "name": "MIXED_CARD",
                                    "id": 3
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();