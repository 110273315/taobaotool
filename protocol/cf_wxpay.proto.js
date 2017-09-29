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
                    "name": "wxpay",
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
                                    "type": "WXPayUnifiedOrderRequest",
                                    "name": "req_wxpay_unified_order",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayUnifiedOrderResponse",
                                    "name": "res_wxpay_unified_order",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayCloseOrderRequest",
                                    "name": "req_wxpay_close_order",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayCloseOrderResponse",
                                    "name": "res_wxpay_close_order",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayQueryOrderRequest",
                                    "name": "req_wxpay_query_order",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayQueryOrderResponse",
                                    "name": "res_wxpay_query_order",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayApplyRefundRequest",
                                    "name": "req_wxpay_apply_refund",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayApplyRefundResponse",
                                    "name": "res_wxpay_apply_refund",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayQueryRefundRequest",
                                    "name": "req_wxpay_query_refund",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayQueryRefundResponse",
                                    "name": "res_wxpay_query_refund",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayQueryBillRequest",
                                    "name": "req_wxpay_query_bill",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayQueryBillResponse",
                                    "name": "res_wxpay_query_bill",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayGetSignRequest",
                                    "name": "req_wxpay_get_sign",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayGetSignResponse",
                                    "name": "res_wxpay_get_sign",
                                    "id": 31
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayGetShortUrlRequest",
                                    "name": "req_wxpay_get_shorturl",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayGetShortUrlResponse",
                                    "name": "res_wxpay_get_shorturl",
                                    "id": 41
                                },
                                {
                                    "rule": "optional",
                                    "type": "MicroPayGetOpenIdRequest",
                                    "name": "req_micropay_get_openid",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "MicroPayGetOpenIdResponse",
                                    "name": "res_micropay_get_openid",
                                    "id": 51
                                },
                                {
                                    "rule": "optional",
                                    "type": "MicroPaySubmitPayRequest",
                                    "name": "req_micropay_submit_pay",
                                    "id": 52
                                },
                                {
                                    "rule": "optional",
                                    "type": "MicroPaySubmitPayResponse",
                                    "name": "res_micropay_submit_pay",
                                    "id": 53
                                },
                                {
                                    "rule": "optional",
                                    "type": "NotifyMessageFromWXPay",
                                    "name": "ntf_message_from_wxpay",
                                    "id": 99
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
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    30,
                                    31,
                                    40,
                                    41,
                                    50,
                                    51,
                                    52,
                                    53,
                                    99
                                ]
                            }
                        },
                        {
                            "name": "WXPayUnifiedOrderRequest",
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
                                    "name": "device_info",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "body",
                                    "id": 15
                                },
                                {
                                    "rule": "repeated",
                                    "type": "GoodsDetail",
                                    "name": "goods_detail",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "attach",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "fee_type",
                                    "id": 34
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_fee",
                                    "id": 36
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "spbill_create_ip",
                                    "id": 38
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "time_start",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "time_expire",
                                    "id": 42
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "goods_tag",
                                    "id": 44
                                },
                                {
                                    "rule": "required",
                                    "type": "EPayType",
                                    "name": "pay_type",
                                    "id": 48
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "product_id",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "limit_pay",
                                    "id": 52
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 56
                                }
                            ],
                            "messages": [
                                {
                                    "name": "GoodsDetail",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "goods_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wxpay_goods_id",
                                            "id": 22
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "goods_name",
                                            "id": 24
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "quantity",
                                            "id": 26
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "price",
                                            "id": 28
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "WXPayUnifiedOrderResponse",
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
                                            "name": "device_info",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayType",
                                            "name": "pay_type",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "prepay_id",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "code_url",
                                            "id": 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "WXPayCloseOrderRequest",
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
                                    "name": "trade_no",
                                    "id": 15
                                }
                            ]
                        },
                        {
                            "name": "WXPayCloseOrderResponse",
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
                            "name": "WXPayQueryOrderRequest",
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
                                    "name": "wx_transaction_id",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 15
                                }
                            ]
                        },
                        {
                            "name": "WXPayQueryOrderResponse",
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
                                            "name": "device_info",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "is_subscribe",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayType",
                                            "name": "pay_type",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ETradeState",
                                            "name": "trade_state",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "bank_type",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "total_fee",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "settlement_total_fee",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fee_type",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "cash_fee",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cash_fee_type",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_fee",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_count",
                                            "id": 38
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponInfo",
                                            "name": "coupon_info",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wx_transaction_id",
                                            "id": 48
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "attach",
                                            "id": 52
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "time_end",
                                            "id": 55
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_state_desc",
                                            "id": 58
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "CouponInfo",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "ECouponType",
                                                    "name": "coupon_type",
                                                    "id": 42
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "coupon_id",
                                                    "id": 44
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "coupon_fee",
                                                    "id": 46
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "WXPayApplyRefundRequest",
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
                                    "name": "device_info",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "wx_transaction_id",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 15
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "refund_no",
                                    "id": 18
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_fee",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "refund_fee",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "refund_fee_type",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "op_user_id",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "refund_account",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "WXPayApplyRefundResponse",
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
                                            "name": "device_info",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wx_transaction_id",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refund_no",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wx_refund_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refund_channel",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "refund_fee",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "settlement_refund_fee",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "total_fee",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "settlement_total_fee",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fee_type",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "cash_fee",
                                            "id": 35
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cash_fee_type",
                                            "id": 38
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "cash_refund_fee",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_refund_fee",
                                            "id": 46
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_refund_count",
                                            "id": 48
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponRefundInfo",
                                            "name": "coupon_refund_info",
                                            "id": 50
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "CouponRefundInfo",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "ECouponType",
                                                    "name": "coupon_type",
                                                    "id": 52
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "coupon_refund_id",
                                                    "id": 55
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "coupon_refund_fee",
                                                    "id": 58
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "WXPayQueryRefundRequest",
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
                                    "name": "device_info",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "wx_transaction_id",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "refund_no",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "wx_refund_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "WXPayQueryRefundResponse",
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
                                            "name": "device_info",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wx_transaction_id",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "total_fee",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "settlement_total_fee",
                                            "id": 19
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fee_type",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "cash_fee",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "refund_count",
                                            "id": 25
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "RefundInfo",
                                            "name": "refund_info",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "refund_account",
                                            "id": 60
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "RefundInfo",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "refund_no",
                                                    "id": 30
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "wx_refund_id",
                                                    "id": 32
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "refund_channel",
                                                    "id": 34
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "refund_fee",
                                                    "id": 36
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "settlement_refund_fee",
                                                    "id": 38
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "ECouponType",
                                                    "name": "coupon_type",
                                                    "id": 44
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "coupon_refund_total_fee",
                                                    "id": 46
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "coupon_refund_count",
                                                    "id": 48
                                                },
                                                {
                                                    "rule": "repeated",
                                                    "type": "CouponRefundInfo",
                                                    "name": "coupon_refund_info",
                                                    "id": 50
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "ERefundStatus",
                                                    "name": "refund_status",
                                                    "id": 56
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "refund_recv_accout",
                                                    "id": 58
                                                }
                                            ],
                                            "messages": [
                                                {
                                                    "name": "CouponRefundInfo",
                                                    "fields": [
                                                        {
                                                            "rule": "optional",
                                                            "type": "string",
                                                            "name": "coupon_refund_id",
                                                            "id": 52
                                                        },
                                                        {
                                                            "rule": "optional",
                                                            "type": "int32",
                                                            "name": "coupon_refund_fee",
                                                            "id": 54
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
                            "name": "WXPayQueryBillRequest",
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
                                    "name": "device_info",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "bill_date",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "EBillType",
                                    "name": "bill_type",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "WXPayQueryBillResponse",
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
                                            "name": "content",
                                            "id": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "WXPayGetSignRequest",
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
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "wx_prepay_id",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "product_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "WXPayGetSignResponse",
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
                                            "name": "wx_app_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "mch_id",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "timestamp_str",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "nonce_str",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wx_pay_sign",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "extend_info",
                                            "id": 30
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "WXPayGetShortUrlRequest",
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
                                    "name": "long_url",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "WXPayGetShortUrlResponse",
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
                                            "name": "short_url",
                                            "id": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MicroPayGetOpenIdRequest",
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
                                    "name": "auth_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "MicroPayGetOpenIdResponse",
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
                                            "name": "openid",
                                            "id": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MicroPaySubmitPayRequest",
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
                                    "name": "device_info",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "body",
                                    "id": 15
                                },
                                {
                                    "rule": "repeated",
                                    "type": "GoodsDetail",
                                    "name": "goods_detail",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "attach",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "fee_type",
                                    "id": 34
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_fee",
                                    "id": 36
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "spbill_create_ip",
                                    "id": 38
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "goods_tag",
                                    "id": 44
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "auth_code",
                                    "id": 50
                                }
                            ],
                            "messages": [
                                {
                                    "name": "GoodsDetail",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "goods_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wxpay_goods_id",
                                            "id": 22
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "goods_name",
                                            "id": 24
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "quantity",
                                            "id": 26
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "price",
                                            "id": 28
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MicroPaySubmitPayResponse",
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
                                            "name": "device_info",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "is_subscribe",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EPayType",
                                            "name": "pay_type",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "bank_type",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "total_fee",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "settlement_total_fee",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fee_type",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "cash_fee",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cash_fee_type",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_fee",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wx_transaction_id",
                                            "id": 48
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "attach",
                                            "id": 52
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "time_end",
                                            "id": 55
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "NotifyMessageFromWXPay",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "rpc_name",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "evt_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 6
                                },
                                {
                                    "rule": "required",
                                    "type": "EPayType",
                                    "name": "pay_type",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "content",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "ScanInfo",
                                    "name": "scan_info",
                                    "id": 60
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Result",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "device_info",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "is_subscribe",
                                            "id": 15
                                        },
                                        {
                                            "rule": "required",
                                            "type": "EPayType",
                                            "name": "pay_type",
                                            "id": 17
                                        },
                                        {
                                            "rule": "required",
                                            "type": "ETradeState",
                                            "name": "trade_state",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "bank_type",
                                            "id": 22
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "total_fee",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "settlement_total_fee",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fee_type",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "cash_fee",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "cash_fee_type",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_fee",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_count",
                                            "id": 38
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CouponInfo",
                                            "name": "coupon_info",
                                            "id": 40
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "wx_transaction_id",
                                            "id": 48
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "attach",
                                            "id": 52
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "time_end",
                                            "id": 55
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "CouponInfo",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "ECouponType",
                                                    "name": "coupon_type",
                                                    "id": 42
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "coupon_id",
                                                    "id": 44
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "coupon_fee",
                                                    "id": 46
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "ScanInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 62
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "is_subscribe",
                                            "id": 65
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "product_id",
                                            "id": 68
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "EPayType",
                            "values": [
                                {
                                    "name": "jspay",
                                    "id": 1
                                },
                                {
                                    "name": "micropay",
                                    "id": 2
                                },
                                {
                                    "name": "nativepay",
                                    "id": 3
                                },
                                {
                                    "name": "apppay",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ETradeState",
                            "values": [
                                {
                                    "name": "SUCCESS",
                                    "id": 1
                                },
                                {
                                    "name": "REFUND",
                                    "id": 2
                                },
                                {
                                    "name": "NOTPAY",
                                    "id": 3
                                },
                                {
                                    "name": "CLOSED",
                                    "id": 4
                                },
                                {
                                    "name": "REVOKED",
                                    "id": 5
                                },
                                {
                                    "name": "USERPAYING",
                                    "id": 6
                                },
                                {
                                    "name": "PAYERROR",
                                    "id": 7
                                }
                            ]
                        },
                        {
                            "name": "ECouponType",
                            "values": [
                                {
                                    "name": "CASH",
                                    "id": 1
                                },
                                {
                                    "name": "NO_CASH",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ERefundStatus",
                            "values": [
                                {
                                    "name": "SUCCESS",
                                    "id": 1
                                },
                                {
                                    "name": "FAIL",
                                    "id": 2
                                },
                                {
                                    "name": "PROCESSING",
                                    "id": 3
                                },
                                {
                                    "name": "CHANGE",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "EBillType",
                            "values": [
                                {
                                    "name": "all",
                                    "id": 1
                                },
                                {
                                    "name": "success",
                                    "id": 2
                                },
                                {
                                    "name": "refund",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "EInterfaceType",
                            "values": [
                                {
                                    "name": "unifed_order",
                                    "id": 1
                                },
                                {
                                    "name": "close_order",
                                    "id": 2
                                },
                                {
                                    "name": "query_order",
                                    "id": 3
                                },
                                {
                                    "name": "apply_refund",
                                    "id": 4
                                },
                                {
                                    "name": "query_refund",
                                    "id": 5
                                },
                                {
                                    "name": "long_url_to_short",
                                    "id": 6
                                },
                                {
                                    "name": "authcode_to_openid",
                                    "id": 7
                                },
                                {
                                    "name": "submit_micropay",
                                    "id": 8
                                },
                                {
                                    "name": "download_bill",
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