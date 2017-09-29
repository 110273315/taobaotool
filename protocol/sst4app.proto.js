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
            "name": "sst",
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
                            "type": "QueryShopListRequest",
                            "name": "req_query_shop_list",
                            "id": 101
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopListResponse",
                            "name": "res_query_shop_list",
                            "id": 102
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopInfoRequest",
                            "name": "req_query_shop_info",
                            "id": 103
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopInfoResponse",
                            "name": "res_query_shop_info",
                            "id": 104
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopExtendInfoRequest",
                            "name": "req_query_shop_extend_info",
                            "id": 105
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopExtendInfoResponse",
                            "name": "res_query_shop_extend_info",
                            "id": 106
                        },
                        {
                            "rule": "optional",
                            "type": "QueryQueueTypeRequest",
                            "name": "req_query_queue_type",
                            "id": 201
                        },
                        {
                            "rule": "optional",
                            "type": "QueryQueueTypeResponse",
                            "name": "res_query_queue_type",
                            "id": 202
                        },
                        {
                            "rule": "optional",
                            "type": "AddQueueRequest",
                            "name": "req_add_queue",
                            "id": 203
                        },
                        {
                            "rule": "optional",
                            "type": "AddQueueResponse",
                            "name": "res_add_queue",
                            "id": 204
                        },
                        {
                            "rule": "optional",
                            "type": "QueryUserQueueInfoRequest",
                            "name": "req_query_user_queue_info",
                            "id": 205
                        },
                        {
                            "rule": "optional",
                            "type": "QueryUserQueueInfoResponse",
                            "name": "res_query_user_queue_info",
                            "id": 206
                        },
                        {
                            "rule": "optional",
                            "type": "CancelUserQueueRequest",
                            "name": "req_cancel_user_queue",
                            "id": 207
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_cancel_user_queue",
                            "id": 208
                        },
                        {
                            "rule": "optional",
                            "type": "AddBookRequest",
                            "name": "req_add_book",
                            "id": 301
                        },
                        {
                            "rule": "optional",
                            "type": "AddBookResponse",
                            "name": "res_add_book",
                            "id": 302
                        },
                        {
                            "rule": "optional",
                            "type": "QueryUserBookInfoRequest",
                            "name": "req_query_user_book_info",
                            "id": 303
                        },
                        {
                            "rule": "optional",
                            "type": "QueryUserBookInfoResponse",
                            "name": "res_query_user_book_info",
                            "id": 304
                        },
                        {
                            "rule": "optional",
                            "type": "CancelUserBookRequest",
                            "name": "req_cancel_user_book",
                            "id": 305
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_cancel_user_book",
                            "id": 306
                        },
                        {
                            "rule": "optional",
                            "type": "QueryBookTimeRequest",
                            "name": "req_query_book_time",
                            "id": 307
                        },
                        {
                            "rule": "optional",
                            "type": "QueryBookTimeResponse",
                            "name": "res_query_book_time",
                            "id": 308
                        },
                        {
                            "rule": "optional",
                            "type": "AddCommentRequest",
                            "name": "req_add_comment",
                            "id": 401
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_add_comment",
                            "id": 402
                        },
                        {
                            "rule": "optional",
                            "type": "AddPraiseRequest",
                            "name": "req_add_praise",
                            "id": 403
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_add_praise",
                            "id": 404
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCommentInfoRequest",
                            "name": "req_query_shop_comment_info",
                            "id": 405
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCommentInfoResponse",
                            "name": "res_query_shop_comment_info",
                            "id": 406
                        },
                        {
                            "rule": "optional",
                            "type": "QueryPraiseInfoRequest",
                            "name": "req_query_shop_praise_info",
                            "id": 407
                        },
                        {
                            "rule": "optional",
                            "type": "QueryPraiseInfoResponse",
                            "name": "res_query_shop_praise_info",
                            "id": 408
                        },
                        {
                            "rule": "optional",
                            "type": "CollectShopRequest",
                            "name": "req_collect_shop",
                            "id": 501
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_collect_shop",
                            "id": 502
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCollectShopRequest",
                            "name": "req_query_collect_shop",
                            "id": 503
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCollectShopResponse",
                            "name": "res_query_collect_shop",
                            "id": 504
                        },
                        {
                            "rule": "optional",
                            "type": "BindWechatRequest",
                            "name": "req_bind_wechat",
                            "id": 601
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_bind_wechat",
                            "id": 602
                        }
                    ],
                    "oneofs": {
                        "content": [
                            101,
                            102,
                            103,
                            104,
                            105,
                            106,
                            201,
                            202,
                            203,
                            204,
                            205,
                            206,
                            207,
                            208,
                            301,
                            302,
                            303,
                            304,
                            305,
                            306,
                            307,
                            308,
                            401,
                            402,
                            403,
                            404,
                            405,
                            406,
                            407,
                            408,
                            501,
                            502,
                            503,
                            504,
                            601,
                            602
                        ]
                    }
                },
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
                            "name": "shop_no",
                            "id": 20
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "shop_name",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "logo_id",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "org_id",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "org_name",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "industry_id",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "industry_name",
                            "id": 80
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "industry_specific_id",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "industry_specific_name",
                            "id": 100
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "area",
                            "id": 110
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "contacts",
                            "id": 120
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "telephone",
                            "id": 130
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "mobile",
                            "id": 140
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "desc",
                            "id": 150
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "photolist",
                            "id": 160
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "introduction",
                            "id": 170
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_queue",
                            "id": 180
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_book",
                            "id": 190
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_comment",
                            "id": 200
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "thirdparty_shopid",
                            "id": 210
                        }
                    ]
                },
                {
                    "name": "QueueType",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "queue_name",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "queue_attr",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "min",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "max",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "wait_people",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "wait_time",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "wait",
                            "id": 70
                        }
                    ]
                },
                {
                    "name": "QueryShopListRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "industry_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "floor_id",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_name",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "QueryShopListResponse",
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
                            "type": "ShopInfo",
                            "name": "shop_info",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "QueryShopInfoRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryShopInfoResponse",
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
                            "type": "ShopInfo",
                            "name": "result",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "QueryShopExtendInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "shop_id",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "QueryShopExtendInfoResponse",
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
                            "type": "ShopExtendInfo",
                            "name": "shop_extend_info",
                            "id": 3
                        }
                    ],
                    "messages": [
                        {
                            "name": "ShopExtendInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "is_queue",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "queue_count",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "is_book",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "book_count",
                                    "id": 4
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "is_comment",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "comment_count",
                                    "id": 6
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "QueryQueueTypeRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryQueueTypeResponse",
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
                            "type": "QueueType",
                            "name": "result",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "AddQueueRequest",
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
                            "name": "cust_id",
                            "id": 20
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "cust_name",
                            "id": 30
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "cust_tel",
                            "id": 40
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "meals_num",
                            "id": 50
                        }
                    ]
                },
                {
                    "name": "AddQueueResponse",
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
                            "name": "queue_id",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "QueryUserQueueInfoRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cust_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "EQueryQueueStatus",
                            "name": "queue_status",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "queue_id",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "QueryUserQueueInfoResponse",
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
                            "type": "UserQueueInfo",
                            "name": "result",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "UserQueueInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "queue_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "order_id",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_name",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "logo_id",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "EQueueStatus",
                                    "name": "queue_state",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "queue_status_name",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "queue_num",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "now_wait",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "notice",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "meals_num",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "tel",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "createdtime",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueueType",
                                    "name": "queue_type",
                                    "id": 14
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "CancelUserQueueRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "order_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "AddBookRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cust_id",
                            "id": 20
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "cust_name",
                            "id": 30
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "cust_tel",
                            "id": 40
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "meals_num",
                            "id": 50
                        },
                        {
                            "rule": "required",
                            "type": "uint64",
                            "name": "book_time",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "description",
                            "id": 70
                        }
                    ]
                },
                {
                    "name": "AddBookResponse",
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
                            "name": "book_id",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "QueryUserBookInfoRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cust_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "EQueryBookStatus",
                            "name": "status_code",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "book_id",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "QueryUserBookInfoResponse",
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
                            "type": "UserBookInfo",
                            "name": "result",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "UserBookInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "book_id",
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
                                    "name": "shop_name",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "logo_id",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "order_id",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "book_time",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "meals_num",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "description",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "EBookStatus",
                                    "name": "status_code",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "createdtime",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_name",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "tel",
                                    "id": 120
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "CancelUserBookRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "book_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryBookTimeRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "shop_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "meals_num",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "QueryBookTimeResponse",
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
                            "type": "TimesInfo",
                            "name": "times_info",
                            "id": 3
                        }
                    ],
                    "messages": [
                        {
                            "name": "TimesInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "TableType",
                                    "name": "table_type",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "TimeInfo",
                                    "name": "times",
                                    "id": 4
                                }
                            ],
                            "messages": [
                                {
                                    "name": "TableType",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "table_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "table_name",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "TimeInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "day",
                                            "id": 10
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "TimeRange",
                                            "name": "time_range",
                                            "id": 20
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "TimeRange",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "begin",
                                                    "id": 101
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "end",
                                                    "id": 102
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
                    "name": "AddCommentRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cust_id",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "cust_name",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cust_photo",
                            "id": 30
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "shop_id",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "star",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "content",
                            "id": 60
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "images",
                            "id": 70
                        }
                    ]
                },
                {
                    "name": "AddPraiseRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "int32",
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
                            "id": 40
                        },
                        {
                            "rule": "required",
                            "type": "EPraiseAction",
                            "name": "action",
                            "id": 50
                        }
                    ]
                },
                {
                    "name": "QueryCommentInfoRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cust_id",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QueryCommentInfoResponse",
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
                            "type": "UserCommentInfo",
                            "name": "result",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "UserCommentInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_name",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_photo",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "star",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "content",
                                    "id": 50
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "images",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "createdtime",
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
                                    "name": "floor_name",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "code_name",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECommentStatus",
                                    "name": "comment_status",
                                    "id": 120
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "block",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "reply",
                                    "id": 140
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "QueryPraiseInfoRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cust_id",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QueryPraiseInfoResponse",
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
                            "type": "UserPraiseInfo",
                            "name": "result",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "UserPraiseInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_name",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_photo",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "createdtime",
                                    "id": 40
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "CollectShopRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cust_id",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "shop_id",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "ECollectAction",
                            "name": "action",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "QueryCollectShopRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cust_id",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QueryCollectShopResponse",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "errcode",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "errmsg",
                            "id": 20
                        },
                        {
                            "rule": "repeated",
                            "type": "CollectShopInfo",
                            "name": "result",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "CollectShopInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "collect_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
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
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "shop_id",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_name",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "logo_url",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "industry_name",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "area",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "photolist",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "createdtime",
                                    "id": 110
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "BindWechatRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 10
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "EQueryQueueStatus",
                    "values": [
                        {
                            "name": "Queue",
                            "id": 101
                        },
                        {
                            "name": "Complete",
                            "id": 102
                        },
                        {
                            "name": "Cancel",
                            "id": 103
                        }
                    ]
                },
                {
                    "name": "EQueueStatus",
                    "values": [
                        {
                            "name": "Unknow",
                            "id": 0
                        },
                        {
                            "name": "TakeNumber",
                            "id": 1
                        },
                        {
                            "name": "Waiting",
                            "id": 2
                        },
                        {
                            "name": "Success",
                            "id": 3
                        },
                        {
                            "name": "CallNumber",
                            "id": 4
                        },
                        {
                            "name": "Eat",
                            "id": 5
                        },
                        {
                            "name": "Pass",
                            "id": 6
                        },
                        {
                            "name": "Cancel",
                            "id": 7
                        },
                        {
                            "name": "Fail",
                            "id": 11
                        }
                    ]
                },
                {
                    "name": "EQueryBookStatus",
                    "values": [
                        {
                            "name": "Book",
                            "id": 101
                        },
                        {
                            "name": "Complete",
                            "id": 102
                        },
                        {
                            "name": "Cancel",
                            "id": 103
                        }
                    ]
                },
                {
                    "name": "EBookStatus",
                    "values": [
                        {
                            "name": "WaitCheck",
                            "id": 0
                        },
                        {
                            "name": "Having",
                            "id": 1
                        },
                        {
                            "name": "Success",
                            "id": 2
                        },
                        {
                            "name": "Cancel",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "ECollectAction",
                    "values": [
                        {
                            "name": "UndoCollect",
                            "id": 0
                        },
                        {
                            "name": "DoCollect",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "EPraiseAction",
                    "values": [
                        {
                            "name": "UndoPraise",
                            "id": 0
                        },
                        {
                            "name": "DoPraise",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "ECommentStatus",
                    "values": [
                        {
                            "name": "WaitCheck",
                            "id": 0
                        },
                        {
                            "name": "Audit",
                            "id": 1
                        },
                        {
                            "name": "Fail",
                            "id": 2
                        },
                        {
                            "name": "Reply",
                            "id": 3
                        }
                    ]
                }
            ]
        }
    ]
}).build();