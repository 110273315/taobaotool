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
            "name": "sr",
            "fields": [],
            "messages": [
                {
                    "name": "customer",
                    "fields": [],
                    "messages": [
                        {
                            "name": "coupon",
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
                                            "type": "QueryCouponRequest",
                                            "name": "req_query_coupon",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponResponse",
                                            "name": "res_query_coupon",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "LockCouponRequest",
                                            "name": "req_lock_coupon",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "NoBody",
                                            "name": "res_lock_coupon",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "DestroyCouponRequest",
                                            "name": "req_destroy_coupon",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "NoBody",
                                            "name": "res_destroy_coupon",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "GetCouponRequest",
                                            "name": "req_get_coupon",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "GetCouponResponse",
                                            "name": "res_get_coupon",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SendCouponRequest",
                                            "name": "req_send_coupon",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SendCouponResponse",
                                            "name": "res_send_coupon",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ImportCouponRequest",
                                            "name": "req_import_coupon",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ImportCouponResponse",
                                            "name": "res_import_coupon",
                                            "id": 36
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponTypeRequest",
                                            "name": "req_query_coupon_type",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponTypeResponse",
                                            "name": "res_query_coupon_type",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponClassRequest",
                                            "name": "req_query_coupon_class",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponClassResponse",
                                            "name": "res_query_coupon_class",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponTemplateRequest",
                                            "name": "req_query_coupon_template",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCouponTemplateResponse",
                                            "name": "res_query_coupon_template",
                                            "id": 29
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CouponStatusChangedNotify",
                                            "name": "ntf_coupon_status_changed",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CouponTemplateChangedNotify",
                                            "name": "ntf_coupon_template_changed",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "RewardCouponBatchRequest",
                                            "name": "req_reward_coupon_batch",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "NoBody",
                                            "name": "res_reward_coupon_batch",
                                            "id": 35
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CreateOrderRequest",
                                            "name": "req_create_order",
                                            "id": 41
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CreateOrderResponse",
                                            "name": "res_create_order",
                                            "id": 42
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SendCouponValidateRequest",
                                            "name": "req_send_coupon_validate",
                                            "id": 43
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "NoBody",
                                            "name": "res_send_coupon_validate",
                                            "id": 44
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
                                            20,
                                            21,
                                            22,
                                            36,
                                            24,
                                            25,
                                            26,
                                            27,
                                            28,
                                            29,
                                            30,
                                            40,
                                            34,
                                            35,
                                            41,
                                            42,
                                            43,
                                            44
                                        ]
                                    }
                                },
                                {
                                    "name": "CouponTemplateInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "image",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "ECouponType",
                                            "name": "type",
                                            "id": 4
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 6
                                        },
                                        {
                                            "rule": "required",
                                            "type": "ExpireInfo",
                                            "name": "expire",
                                            "id": 7
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "max_assign_count",
                                            "id": 11
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "sent_count",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "urplus_count",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "class_code",
                                            "id": 15
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "shop_id",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "detail_rule",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "limit_fee",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "limit_max_discount",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "face_value",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SettlementOptions",
                                            "name": "so",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EApplicableScopeType",
                                            "name": "applicable_scope",
                                            "id": 80
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wechat_card_id",
                                            "id": 110
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "isenable_wechat_card",
                                            "id": 120
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ECouponTemplateStatus",
                                            "name": "wechat_card_status",
                                            "id": 130
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "code",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "template_id",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "begin_time",
                                            "id": 8
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "end_time",
                                            "id": 9
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "customer_id",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "source_info",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "get_time",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_id",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "third_id",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "used_time",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ECouponStatus",
                                            "name": "status",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "destory_source",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "wechat_card_id",
                                            "id": 27
                                        }
                                    ]
                                },
                                {
                                    "name": "ExpireInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Absolute",
                                            "name": "absolute",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Relative",
                                            "name": "relative",
                                            "id": 2
                                        }
                                    ],
                                    "oneofs": {
                                        "type": [
                                            1,
                                            2
                                        ]
                                    },
                                    "messages": [
                                        {
                                            "name": "Absolute",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "uint64",
                                                    "name": "begin_time",
                                                    "id": 1
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "uint64",
                                                    "name": "end_time",
                                                    "id": 2
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Relative",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "int32",
                                                    "name": "day",
                                                    "id": 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponType",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "ECouponType",
                                            "name": "type",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponClass",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "class",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "SettlementAccountInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "settlement_account_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "value",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "SettlementOptions",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "ELackOfIncentivesOperator",
                                            "name": "loio",
                                            "id": 1
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "SettlementAccountInfo",
                                            "name": "sai",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponCompleteInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "CouponTemplateInfo",
                                            "name": "coupon_template_info",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "CouponInfo",
                                            "name": "coupon_info",
                                            "id": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponOrderInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "no",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint32",
                                            "name": "coupon_instance_id",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EOrderStatus",
                                            "name": "status",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "created_time",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point_rule_id",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint32",
                                            "name": "cust_id",
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
                                            "type": "int32",
                                            "name": "amount",
                                            "id": 90
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 100
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "CustomerSearchCondition",
                                            "name": "customer_condition",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "shop_id",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "fee",
                                            "id": 12
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CouponCompleteInfo",
                                            "name": "ci",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "LockCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "lock_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "lock_timeout",
                                            "id": 11
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "lock_coupon_id",
                                            "id": 12
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "unlock_coupon_id",
                                            "id": 13
                                        }
                                    ]
                                },
                                {
                                    "name": "DestroyCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "lock_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "coupon_id",
                                            "id": 11
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "coupon_no",
                                            "id": 19
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "shop_id",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_no",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CustomerSearchCondition",
                                            "name": "customer_condition",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "staff_id",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EDestoryType",
                                            "name": "destory_type",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "is_customer_check",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "destory_source",
                                            "id": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "GetCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "coupon_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "coupon_code",
                                            "id": 11
                                        }
                                    ],
                                    "oneofs": {
                                        "coupon": [
                                            10,
                                            11
                                        ]
                                    }
                                },
                                {
                                    "name": "GetCouponResponse",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "CouponCompleteInfo",
                                            "name": "ci",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "SendCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "coupon_template_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "customer_id",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "activity_name",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "trade_id",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "quantity",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "third_id",
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
                                            "type": "SourceInfo",
                                            "name": "send_source",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point_rule_id",
                                            "id": 12
                                        }
                                    ]
                                },
                                {
                                    "name": "SendCouponResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CouponInfo",
                                            "name": "coupon_info",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "ImportCouponRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "file",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "coupon_id",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "staff_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "original_file_name",
                                            "id": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "ImportCouponResponse",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "taskid",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponTypeRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "type",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponTypeResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CouponType",
                                            "name": "coupon_type",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponClassRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "class",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponClassResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CouponClass",
                                            "name": "coupon_class",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponTemplateRequest",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "ECouponType",
                                            "name": "type",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "class_code",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "template_id",
                                            "id": 30
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCouponTemplateResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CouponTemplateInfo",
                                            "name": "template",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponStatusChangedNotify",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CouponStatusChangedInfo",
                                            "name": "csci",
                                            "id": 10
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "CouponStatusChangedInfo",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "ECouponStatus",
                                                    "name": "old_status",
                                                    "id": 10
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "ECouponStatus",
                                                    "name": "new_status",
                                                    "id": 20
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "CouponInfo",
                                                    "name": "coupon_info",
                                                    "id": 30
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "CouponTemplateChangedNotify",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CouponTemplateInfo",
                                            "name": "coupon_template_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "RewardCouponBatchRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "custid",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "tradeid",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "sendchannelcode",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "applicablechannelcode",
                                            "id": 4
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "hisuuid",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 6
                                        }
                                    ]
                                },
                                {
                                    "name": "CreateOrderRequest",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "coupon_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "point_rule_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "send_source",
                                            "id": 40
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint32",
                                            "name": "cust_id",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "order_no",
                                            "id": 60
                                        }
                                    ]
                                },
                                {
                                    "name": "CreateOrderResponse",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "CouponOrderInfo",
                                            "name": "coupon_order_info",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "SendCouponValidateRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "coupon_template_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint32",
                                            "name": "cust_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "send_source",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "point_rule_id",
                                            "id": 40
                                        }
                                    ]
                                }
                            ],
                            "enums": [
                                {
                                    "name": "ECouponType",
                                    "values": [
                                        {
                                            "name": "VoucherCoupon",
                                            "id": 1
                                        },
                                        {
                                            "name": "DiscountCoupon",
                                            "id": 2
                                        },
                                        {
                                            "name": "ExchangeCoupon",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "ELackOfIncentivesOperator",
                                    "values": [
                                        {
                                            "name": "Sequence",
                                            "id": 1
                                        },
                                        {
                                            "name": "Scale",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "ECouponStatus",
                                    "values": [
                                        {
                                            "name": "Sent",
                                            "id": 1
                                        },
                                        {
                                            "name": "Used",
                                            "id": 2
                                        },
                                        {
                                            "name": "Expired",
                                            "id": 3
                                        },
                                        {
                                            "name": "Deleted",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "EDestoryType",
                                    "values": [
                                        {
                                            "name": "StoreApp",
                                            "id": 1
                                        },
                                        {
                                            "name": "ServiceApp",
                                            "id": 2
                                        },
                                        {
                                            "name": "ThirdParty",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "EApplicableScopeType",
                                    "values": [
                                        {
                                            "name": "AllShops",
                                            "id": 1
                                        },
                                        {
                                            "name": "SomeShops",
                                            "id": 2
                                        },
                                        {
                                            "name": "Service",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "EOrderStatus",
                                    "values": [
                                        {
                                            "name": "No_Pay",
                                            "id": 1
                                        },
                                        {
                                            "name": "Paid",
                                            "id": 2
                                        },
                                        {
                                            "name": "Completed",
                                            "id": 3
                                        },
                                        {
                                            "name": "Cancelled",
                                            "id": 4
                                        },
                                        {
                                            "name": "Unfilled",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "ECouponTemplateStatus",
                                    "values": [
                                        {
                                            "name": "CARD_STATUS_NOT_VERIFY",
                                            "id": 1
                                        },
                                        {
                                            "name": "CARD_STATUS_VERIFY_FAIL",
                                            "id": 2
                                        },
                                        {
                                            "name": "CARD_STATUS_VERIFY_OK",
                                            "id": 3
                                        },
                                        {
                                            "name": "CARD_STATUS_DELETE",
                                            "id": 4
                                        },
                                        {
                                            "name": "CARD_STATUS_DISPATCH",
                                            "id": 5
                                        },
                                        {
                                            "name": "CARD_STATUS_OTHER",
                                            "id": 6
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