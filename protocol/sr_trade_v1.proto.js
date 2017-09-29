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
                    "name": "trade",
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
                                    "type": "AddSimpleTradeRecordRequest",
                                    "name": "req_addsimplerecord_trade",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddSimpleTradeRecordResponse",
                                    "name": "res_addsimplerecord_trade",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeMainListRequest",
                                    "name": "req_querymainlist_trade",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeMainListResponse",
                                    "name": "res_querymainlist_trade",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeDetailListRequest",
                                    "name": "req_querydetaillist_trade",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeDetailListResponse",
                                    "name": "res_querydetaillist_trade",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddTradeInvoiceRequest",
                                    "name": "req_addtradeinvoice_trade",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddTradeInvoiceResponse",
                                    "name": "res_addtradeinvoice_trade",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeInvoiceRequest",
                                    "name": "req_querytradeinvoice_trade",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeInvoiceResponse",
                                    "name": "res_querytradeinvoice_trade",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "BindInvoiceToTradeRequest",
                                    "name": "req_bindtrade_trade",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "BindInvoiceToTradeResponse",
                                    "name": "res_bindtrade_trade",
                                    "id": 13
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13
                                ]
                            }
                        },
                        {
                            "name": "BindInvoiceToTradeResponse",
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
                            "name": "BindInvoiceToTradeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "tradeid",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "apptradeid",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "statuscode",
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
                                    "name": "checkid",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeInvoiceRequest",
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
                                    "name": "begintime",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "endtime",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "querytype",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "num",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "item",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ordername",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ordertype",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "statuscode",
                                    "id": 9
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeInvoiceResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "TradeInvoiceInfo",
                                    "name": "tl",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "countnum",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "errcode",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "errmsg",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "AddTradeInvoiceRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "TradeInvoiceInfo",
                                    "name": "tii",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "AddTradeInvoiceResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 3
                                },
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
                            "name": "TradeInvoiceInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "id",
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
                                    "type": "int32",
                                    "name": "statuscode",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "sourceid",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "tradeid",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "checkid",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "checktime",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "createdtime",
                                    "id": 9
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeDetailListRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "tradeid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ordername",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "num",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "item",
                                    "id": 4
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "querytype",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ordertype",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeDetailListResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "TradeDetail",
                                    "name": "tl",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "countnum",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeMainListResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "TradeMain",
                                    "name": "tm",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "countnum",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "TradeMain",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "orgid",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "orgname",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shopid",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shopname",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 6
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "tradeno",
                                    "id": 7
                                },
                                {
                                    "rule": "required",
                                    "type": "double",
                                    "name": "tradeamount",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "tradetime",
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
                                    "type": "double",
                                    "name": "originalamount",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "createrid",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "createdtime",
                                    "id": 13
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "typeid",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "cumulativeamount",
                                    "id": 15
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeMainListRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "begintime",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "endtime",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ordername",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "num",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "item",
                                    "id": 6
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "querytype",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ordertype",
                                    "id": 8
                                }
                            ]
                        },
                        {
                            "name": "AddSimpleTradeRecordRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "orgid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shopid",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "tradeno",
                                    "id": 4
                                },
                                {
                                    "rule": "required",
                                    "type": "double",
                                    "name": "tradeamount",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "tradetime",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "originalamount",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "createrid",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "createdtime",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "TradeDetail",
                                    "name": "td",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "typeid",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "cumulativeamount",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "TradeDetail",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "tradeid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "detailno",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "num",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "price",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "amount",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "discount",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "couponno",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "goodsno",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "goodsname",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "goodsremark",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 12
                                }
                            ]
                        },
                        {
                            "name": "AddSimpleTradeRecordResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "errcode",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "errmsg",
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