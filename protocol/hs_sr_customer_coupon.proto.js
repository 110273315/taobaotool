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
                                    "type": "QueryCustomerRequest",
                                    "name": "req_query_customer",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerResponse",
                                    "name": "res_query_customer",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryBatchCustomerRequest",
                                    "name": "req_query_customer_batch",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryBatchCustomerResponse",
                                    "name": "res_query_customer_batch",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCustomerRequest",
                                    "name": "req_update_customer",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_update_customer",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerRequest",
                                    "name": "req_delete_customer",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_delete_customer",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "CreateCustomerRequest",
                                    "name": "req_create_customer",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "CreateCustomerResponse",
                                    "name": "res_create_customer",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "ImportCustomerRequest",
                                    "name": "req_import_customer",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "ImportCustomerResponse",
                                    "name": "res_import_customer",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCustomerNotify",
                                    "name": "ntf_create_customer",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCustomerNotify",
                                    "name": "ntf_update_customer",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCustomerNotify",
                                    "name": "ntf_remove_customer",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerBehaviourNotify",
                                    "name": "ntf_customer_behaviour",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCustomerCardRequest",
                                    "name": "req_update_customer_card",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_update_customer_card",
                                    "id": 27
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
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27
                                ]
                            }
                        },
                        {
                            "name": "Customer",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "nickname",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "avatar",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECustomerSource",
                                    "name": "source",
                                    "id": 5
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ECustomerType",
                                    "name": "type",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "orgid",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "country",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "province",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "city",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "area",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "ESex",
                                    "name": "sex",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_id",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_type",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cf_account_id",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "openid",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "birthday",
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
                                    "name": "mac",
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
                                    "name": "address",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "EIdentityType",
                                    "name": "id_type",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "id_num",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "qq",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECustomerStatus",
                                    "name": "status",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "attach",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "app_device_id",
                                    "id": 27
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
                                    "name": "unionid",
                                    "id": 30
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "union_info",
                                    "id": 31
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "cc",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Customer",
                                    "name": "list_customer",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryBatchCustomerRequest",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CustomerSearchCondition",
                                    "name": "cc",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryBatchCustomerResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CustomerList",
                                    "name": "list_customer_list",
                                    "id": 10
                                }
                            ],
                            "messages": [
                                {
                                    "name": "CustomerList",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "Customer",
                                            "name": "list_customer",
                                            "id": 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CreateCustomerRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "stuff_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "Customer",
                                    "name": "ci",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "CreateCustomerResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "cust_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "UpdateCustomerRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "stuff_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "Customer",
                                    "name": "ci",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "ImportCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "file",
                                    "id": 2
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
                            "name": "ImportCustomerResponse",
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
                            "name": "UpdateCustomerNotify",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Customer",
                                    "name": "customer",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "CustomerBehaviourNotify",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "cc",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "SourceInfo",
                                    "name": "source_info",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "behaviour_time",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "number",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "UpdateCustomerCardRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "cc",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "SourceInfo",
                                    "name": "source_info",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "EModifyCardType",
                                    "name": "type",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_id",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "card_type",
                                    "id": 5
                                }
                            ]
                        },
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
                                            "type": "NoBody",
                                            "name": "res_create_order",
                                            "id": 42
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
                                            42
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
                                            "name": "org_name",
                                            "id": 110
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
                                            "rule": "required",
                                            "type": "string",
                                            "name": "coupon_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
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
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "ESex",
                            "values": [
                                {
                                    "name": "Male",
                                    "id": 1
                                },
                                {
                                    "name": "Female",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EIdentityType",
                            "values": [
                                {
                                    "name": "IdentityCard",
                                    "id": 1
                                },
                                {
                                    "name": "Passport",
                                    "id": 2
                                },
                                {
                                    "name": "Driving",
                                    "id": 3
                                },
                                {
                                    "name": "Officers",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ECustomerStatus",
                            "values": [
                                {
                                    "name": "Valid",
                                    "id": 1
                                },
                                {
                                    "name": "Invalid",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ECustomerSource",
                            "values": [
                                {
                                    "name": "Wechat",
                                    "id": 1
                                },
                                {
                                    "name": "Manual",
                                    "id": 2
                                },
                                {
                                    "name": "Import",
                                    "id": 3
                                },
                                {
                                    "name": "App",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ECustomerType",
                            "values": [
                                {
                                    "name": "CT_Fans",
                                    "id": 1
                                },
                                {
                                    "name": "CT_Member",
                                    "id": 2
                                },
                                {
                                    "name": "CT_Customer",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "EBehaviourChannelCode",
                            "values": [
                                {
                                    "name": "Behaviour_Wechat",
                                    "id": 1
                                },
                                {
                                    "name": "Behaviour_Wifi",
                                    "id": 2
                                },
                                {
                                    "name": "Behaviour_SPay",
                                    "id": 3
                                },
                                {
                                    "name": "Behaviour_WebApp",
                                    "id": 4
                                },
                                {
                                    "name": "Behaviour_Kiosk",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "EModifyCardType",
                            "values": [
                                {
                                    "name": "Add",
                                    "id": 1
                                },
                                {
                                    "name": "Change",
                                    "id": 2
                                },
                                {
                                    "name": "Freeze",
                                    "id": 3
                                },
                                {
                                    "name": "Release",
                                    "id": 4
                                },
                                {
                                    "name": "Delete",
                                    "id": 5
                                },
                                {
                                    "name": "Upgrade",
                                    "id": 6
                                },
                                {
                                    "name": "Degrade",
                                    "id": 7
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();