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
                            "type": "LoginRequest",
                            "name": "req_login",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "LoginResponse",
                            "name": "res_login",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopListRequest",
                            "name": "req_query_shop_list",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopListResponse",
                            "name": "res_query_shop_list",
                            "id": 21
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCustAddressRequest",
                            "name": "req_query_cust_address",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCustAddressResponse",
                            "name": "res_query_cust_address",
                            "id": 31
                        },
                        {
                            "rule": "optional",
                            "type": "AddCustAddressRequest",
                            "name": "req_add_cust_address",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_add_cust_address",
                            "id": 41
                        },
                        {
                            "rule": "optional",
                            "type": "UpdateCustAddressRequest",
                            "name": "req_update_cust_address",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_update_cust_address",
                            "id": 51
                        },
                        {
                            "rule": "optional",
                            "type": "DeleteCustAddressRequest",
                            "name": "req_delete_cust_address",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_delete_cust_address",
                            "id": 61
                        },
                        {
                            "rule": "optional",
                            "type": "AddCustQuestionRequest",
                            "name": "req_add_cust_question",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_add_cust_question",
                            "id": 91
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCustQuestionRequest",
                            "name": "req_query_cust_question",
                            "id": 100
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCustQuestionResponse",
                            "name": "res_query_cust_question",
                            "id": 101
                        },
                        {
                            "rule": "optional",
                            "type": "AddQuestionReplyRequest",
                            "name": "req_add_question_reply",
                            "id": 110
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_add_question_reply",
                            "id": 111
                        },
                        {
                            "rule": "optional",
                            "type": "AddTradeInvoiceRequest",
                            "name": "req_add_trade_invoice",
                            "id": 120
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_add_trade_invoice",
                            "id": 121
                        },
                        {
                            "rule": "optional",
                            "type": "QueryTradeInvoiceRequest",
                            "name": "req_query_trade_invoice",
                            "id": 130
                        },
                        {
                            "rule": "optional",
                            "type": "QueryTradeInvoiceResponse",
                            "name": "res_query_trade_invoice",
                            "id": 131
                        },
                        {
                            "rule": "optional",
                            "type": "CheckTradeInvoiceRequest",
                            "name": "req_check_trade_invoice",
                            "id": 140
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_check_trade_invoice",
                            "id": 141
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCustCardRequest",
                            "name": "req_query_cust_card",
                            "id": 150
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCustCardResponse",
                            "name": "res_query_cust_card",
                            "id": 151
                        },
                        {
                            "rule": "optional",
                            "type": "AddCustCardRequest",
                            "name": "req_add_cust_card",
                            "id": 160
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_add_cust_card",
                            "id": 161
                        },
                        {
                            "rule": "optional",
                            "type": "ChangeCustCardRequest",
                            "name": "req_change_cust_card",
                            "id": 170
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_change_cust_card",
                            "id": 171
                        },
                        {
                            "rule": "optional",
                            "type": "CancelCustCardRequest",
                            "name": "req_cancel_cust_card",
                            "id": 180
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_cancel_cust_card",
                            "id": 181
                        }
                    ],
                    "oneofs": {
                        "content": [
                            10,
                            11,
                            20,
                            21,
                            30,
                            31,
                            40,
                            41,
                            50,
                            51,
                            60,
                            61,
                            90,
                            91,
                            100,
                            101,
                            110,
                            111,
                            120,
                            121,
                            130,
                            131,
                            140,
                            141,
                            150,
                            151,
                            160,
                            161,
                            170,
                            171,
                            180,
                            181
                        ]
                    }
                },
                {
                    "name": "LoginUserInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "innerid",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "photo",
                            "id": 20
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "userid",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "AddressInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "address_id",
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
                            "name": "receiver",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "address_detail",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "postcode",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "contact_phone",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "country",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "province",
                            "id": 80
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "city",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "district",
                            "id": 100
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 110
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "createdtime",
                            "id": 120
                        }
                    ]
                },
                {
                    "name": "LoginRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "userid",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "password",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "LoginResponse",
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
                            "name": "sessionid",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "LoginUserInfo",
                            "name": "userinfo",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "QueryShopListRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "org_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "industry_id",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "industry_specific_id",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_name",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "max_coupon_count",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "max_activity_count",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "max_comment_count",
                            "id": 80
                        },
                        {
                            "rule": "optional",
                            "type": "Page",
                            "name": "page",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "Sort",
                            "name": "sort",
                            "id": 100
                        }
                    ],
                    "messages": [
                        {
                            "name": "Page",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "index",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "num",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "Sort",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "EShopSortType",
                                    "name": "sorttype",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "type",
                                    "id": 20
                                }
                            ]
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
                            "name": "result",
                            "id": 30
                        }
                    ],
                    "messages": [
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
                                    "name": "logo_url",
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
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CouponInfo",
                                    "name": "coupons",
                                    "id": 220
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ActivityInfo",
                                    "name": "activitys",
                                    "id": 230
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CommentInfo",
                                    "name": "comments",
                                    "id": 240
                                }
                            ],
                            "messages": [
                                {
                                    "name": "CouponInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "coupon_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "coupon_name",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "category_code",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "category_name",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "class_code",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "class_name",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "imageurl",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point",
                                            "id": 80
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "coupon_value",
                                            "id": 90
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "urplus_count",
                                            "id": 100
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "max_assign_count",
                                            "id": 110
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "valid_days",
                                            "id": 120
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "valid_start_time",
                                            "id": 130
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "valid_end_time",
                                            "id": 140
                                        }
                                    ]
                                },
                                {
                                    "name": "ActivityInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "activity_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "activity_name",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "valid_start_time",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "valid_end_time",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "image_url",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "detail_url",
                                            "id": 60
                                        }
                                    ]
                                },
                                {
                                    "name": "CommentInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "comment_id",
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
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "createdtime",
                                            "id": 80
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "QueryCustAddressRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cust_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryCustAddressResponse",
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
                            "type": "AddressInfo",
                            "name": "result",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "AddCustAddressRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "AddressInfo",
                            "name": "address_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "UpdateCustAddressRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "AddressInfo",
                            "name": "address_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "DeleteCustAddressRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "address_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "AddCustQuestionRequest",
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
                            "name": "question_name",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "question_detail",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "contact_Info",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "QueryCustQuestionRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "custid",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "status_code",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_open",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "QueryCustQuestionResponse",
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
                            "type": "QuestionInfo",
                            "name": "result",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "QuestionInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "question_id",
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
                                    "name": "question_name",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "question_detail",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "contact_info",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "status_code",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "createdtime",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "is_open",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "reply",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "reply_user",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "reply_time",
                                    "id": 120
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "AddQuestionReplyRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "question_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_open",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "reply",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "reply_user_id",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "AddTradeInvoiceRequest",
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
                            "name": "image_id",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QueryTradeInvoiceRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "custid",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "begintime",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "endtime",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "status_code",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "QueryTradeInvoiceResponse",
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
                            "type": "InvoiceInfo",
                            "name": "result",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "InvoiceInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "invoice_id",
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
                                    "name": "cust_tel",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "invoice_url",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "status_code",
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
                                    "type": "int32",
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
                                    "name": "trade_no",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "trade_sum",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "trade_time",
                                    "id": 120
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "check_desc",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "check_user",
                                    "id": 140
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "check_time",
                                    "id": 150
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "CheckTradeInvoiceRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "invoice_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "shop_id",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "trade_no",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "trade_sum",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "trade_time",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "status_code",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "check_desc",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "check_user_id",
                            "id": 80
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "check_time",
                            "id": 90
                        }
                    ]
                },
                {
                    "name": "QueryCustCardRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "custid",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "EOpeaType",
                            "name": "type",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QueryCustCardResponse",
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
                            "type": "CustCardHistory",
                            "name": "result",
                            "id": 10
                        }
                    ],
                    "messages": [
                        {
                            "name": "CustCardHistory",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "custid",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "custname",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "createdtime",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "EOpeaType",
                                    "name": "type",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cardno",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "operate_user",
                                    "id": 80
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "AddCustCardRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "fullname",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "idnum",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "gendercode",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "birthday",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "mobile",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "email",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "countrycode",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "provincecode",
                            "id": 80
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "citycode",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "address",
                            "id": 100
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cardno",
                            "id": 110
                        }
                    ]
                },
                {
                    "name": "ChangeCustCardRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "custid",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "old_cardno",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "new_cardno",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "CancelCustCardRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "custid",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cardno",
                            "id": 20
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "EShopSortType",
                    "values": [
                        {
                            "name": "ShopName",
                            "id": 1
                        },
                        {
                            "name": "Comment",
                            "id": 2
                        },
                        {
                            "name": "Praise",
                            "id": 3
                        },
                        {
                            "name": "Collect",
                            "id": 4
                        },
                        {
                            "name": "Queue",
                            "id": 5
                        },
                        {
                            "name": "Book",
                            "id": 6
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
                    "name": "EOpeaType",
                    "values": [
                        {
                            "name": "AddCard",
                            "id": 0
                        },
                        {
                            "name": "ChangeCard",
                            "id": 1
                        },
                        {
                            "name": "MendCard",
                            "id": 2
                        },
                        {
                            "name": "CancelCard",
                            "id": 3
                        }
                    ]
                }
            ]
        }
    ]
}).build();