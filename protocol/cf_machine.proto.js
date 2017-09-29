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
                    "name": "machine",
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
                                    "type": "GetGoodsDetailRequest",
                                    "name": "req_get_goods_detail",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetGoodsDetailResponse",
                                    "name": "res_get_goods_detail",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "StatusChangeRequest",
                                    "name": "req_status_change",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "StatusChangeResponse",
                                    "name": "res_status_change",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "OrderRequest",
                                    "name": "req_order",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "OrderResponse",
                                    "name": "res_order",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetMachineStockRequest",
                                    "name": "req_get_machine_stock",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetMachineStockResponse",
                                    "name": "res_get_machine_stock",
                                    "id": 18
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
                                    18
                                ]
                            }
                        },
                        {
                            "name": "GetGoodsDetailRequest",
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
                                    "name": "wechat_account_id",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "machine_code",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "machine_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "GetGoodsDetailResponse",
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
                                            "rule": "repeated",
                                            "type": "GoodsInfo",
                                            "name": "goods_list",
                                            "id": 10
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "GoodsInfo",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "id",
                                                    "id": 20
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "name",
                                                    "id": 30
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "StatusChangeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "bool",
                                    "name": "is_subscribe",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "wechat_account_id",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "machine_code",
                                    "id": 18
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "StatusChangeResponse",
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
                            "name": "OrderRequest",
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
                                    "name": "wechat_account_id",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "machine_code",
                                    "id": 18
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "machine_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "goods_id",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "OrderResponse",
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
                            "name": "GetMachineStockRequest",
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
                                    "name": "wechat_account_id",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "machine_code",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "machine_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "GetMachineStockResponse",
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
                                            "rule": "repeated",
                                            "type": "StockInfo",
                                            "name": "stock_info",
                                            "id": 10
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "StockInfo",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "id",
                                                    "id": 20
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "name",
                                                    "id": 30
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "int32",
                                                    "name": "stock",
                                                    "id": 40
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
        }
    ]
}).build();