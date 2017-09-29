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
            "name": "QueryCodeResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "KeyValue",
                    "name": "codes",
                    "id": 10
                }
            ]
        },
        {
            "name": "Feedback",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "cust_id",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cust_mobile",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cust_name",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "image_url",
                    "id": 20
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "detail",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "feed_time",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "reply",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "reply_time",
                    "id": 80
                },
                {
                    "rule": "optional",
                    "type": "EFeedbackStatus",
                    "name": "status_code",
                    "id": 90
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "replyer_id",
                    "id": 100
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "replyer",
                    "id": 110
                }
            ]
        },
        {
            "name": "InvoiceInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
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
                    "type": "string",
                    "name": "cust_name",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cust_photo",
                    "id": 35
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cust_mobile",
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
                    "type": "EInvoiceStatusType",
                    "name": "status",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "created_time",
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
                    "name": "trade_no",
                    "id": 100
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "trade_fee",
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
                    "name": "check_user_id",
                    "id": 140
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "check_user",
                    "id": 150
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "check_time",
                    "id": 160
                }
            ]
        },
        {
            "name": "CommentInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
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
                    "type": "string",
                    "name": "cust_name",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "shop_id",
                    "id": 31
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "shop_name",
                    "id": 32
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "photo",
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
                    "rule": "optional",
                    "type": "ECommentStatus",
                    "name": "status_code",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "created_time",
                    "id": 80
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "images",
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
                    "type": "uint64",
                    "name": "reply_time",
                    "id": 110
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "reply_name",
                    "id": 120
                }
            ]
        },
        {
            "name": "QueueDetail",
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
                    "type": "NumberHorizon",
                    "name": "num_rang",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "estimate_time",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "table_num",
                    "id": 70
                }
            ]
        },
        {
            "name": "QueueInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
                    "id": 10
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "cust_id",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cust_name",
                    "id": 12
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "order_id",
                    "id": 15
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
                    "id": 31
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "photo_list",
                    "id": 32
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "number",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "meals_num",
                    "id": 41
                },
                {
                    "rule": "optional",
                    "type": "EQueueStatus",
                    "name": "status_code",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "created_time",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "estimate_time",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "table_num",
                    "id": 80
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "waited_time",
                    "id": 90
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "notice",
                    "id": 100
                },
                {
                    "rule": "optional",
                    "type": "QueueDetail",
                    "name": "queue_detail",
                    "id": 110
                }
            ]
        },
        {
            "name": "UserPraiseInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "uint32",
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
                    "name": "created_time",
                    "id": 40
                }
            ]
        },
        {
            "name": "NumberHorizon",
            "fields": [
                {
                    "rule": "optional",
                    "type": "EValueType",
                    "name": "vt",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "min",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max",
                    "id": 2
                }
            ]
        },
        {
            "name": "CouponOrder",
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
                    "type": "ECouponOrderStatus",
                    "name": "status",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "created_time",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "CouponRule",
                    "name": "rule_info",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "cust_id",
                    "id": 80
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cust_name",
                    "id": 90
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cust_card_no",
                    "id": 100
                }
            ]
        },
        {
            "name": "CouponRule",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "sr.customer.coupon.CouponTemplateInfo",
                    "name": "coupon_temp",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_allow_share",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "point",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "amount",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cust_card_type_limit",
                    "id": 60
                }
            ]
        },
        {
            "name": "CouponOfCustomer",
            "fields": [
                {
                    "rule": "optional",
                    "type": "sr.customer.coupon.CouponCompleteInfo",
                    "name": "coupon_info",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "point",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "amount",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "sr.customer.Customer",
                    "name": "cust_info",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "verifier_name",
                    "id": 50
                }
            ]
        },
        {
            "name": "ShopSettingInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "EShopSettingStatus",
                    "name": "is_queue",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "EShopSettingStatus",
                    "name": "is_reserve",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "EShopSettingStatus",
                    "name": "is_comment",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "thirdparty_shopid",
                    "id": 50
                }
            ]
        },
        {
            "name": "ShopExtendInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "EShopSettingStatus",
                    "name": "is_queue",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "queue_count",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "EShopSettingStatus",
                    "name": "is_reserve",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "reserve_count",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "EShopSettingStatus",
                    "name": "is_comment",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "comment_count",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "star",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "thirdparty_shopid",
                    "id": 80
                }
            ]
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
                        },
                        {
                            "name": "point",
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
                                            "type": "ChangePointRequest",
                                            "name": "req_change_point",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ChangePointResponse",
                                            "name": "res_change_point",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryPointSummaryRequest",
                                            "name": "req_query_point_summary",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryPointSummaryResponse",
                                            "name": "res_query_point_summary",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryPointDetailRequest",
                                            "name": "req_query_point_detail",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryPointDetailResponse",
                                            "name": "res_query_point_detail",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "PointChangedNotify",
                                            "name": "ntf_point_changed",
                                            "id": 70
                                        }
                                    ],
                                    "oneofs": {
                                        "content": [
                                            2,
                                            10,
                                            20,
                                            30,
                                            40,
                                            50,
                                            60,
                                            70
                                        ]
                                    }
                                },
                                {
                                    "name": "PointSummary",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "customer_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "current_value",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "cumulative_value",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "expired_value",
                                            "id": 4
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "used_value",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "PointInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "point_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "customer_id",
                                            "id": 2
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "value",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "valid_value",
                                            "id": 4
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint64",
                                            "name": "get_time",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "psi",
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
                                            "type": "uint64",
                                            "name": "expire_time",
                                            "id": 8
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "operater_name",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "ChangePointRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "CustomerSearchCondition",
                                            "name": "csc",
                                            "id": 1
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "value",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "expire_time",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "psi",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "remark",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "attach",
                                            "id": 6
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "operater_id",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "ChangePointResponse",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "point_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "value",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "valid_value",
                                            "id": 30
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryPointDetailRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "CustomerSearchCondition",
                                            "name": "csc",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "DetailSearchCondition",
                                            "name": "dsc",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryPointDetailResponse",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "PageInfo",
                                            "name": "page_info",
                                            "id": 10
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "PointInfo",
                                            "name": "pi",
                                            "id": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryPointSummaryRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "CustomerSearchCondition",
                                            "name": "csc",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryPointSummaryResponse",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "PointSummary",
                                            "name": "summary",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "PointChangedNotify",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CustomerPointChangeInfo",
                                            "name": "changed_info",
                                            "id": 10
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "CustomerPointChangeInfo",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "customer_id",
                                                    "id": 10
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "SourceInfo",
                                                    "name": "psi",
                                                    "id": 20
                                                },
                                                {
                                                    "rule": "repeated",
                                                    "type": "string",
                                                    "name": "point_id",
                                                    "id": 30
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "value",
                                                    "id": 40
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "int32",
                                                    "name": "valid_value",
                                                    "id": 50
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
        },
        {
            "name": "app",
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
                                    "type": "ErrorResponse",
                                    "name": "res_error",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCodeClientRequest",
                                    "name": "req_query_code_value_client",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCodeResponse",
                                    "name": "res_query_code_value_client",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopClientRequest",
                                    "name": "req_query_shop_client",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopClientResponse",
                                    "name": "res_query_shop_client",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetShopClientRequest",
                                    "name": "req_get_shop_client",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetShopClientResponse",
                                    "name": "res_get_shop_client",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopCommentRequest",
                                    "name": "req_query_shop_comment",
                                    "id": 81
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopCommentResponse",
                                    "name": "res_query_shop_comment",
                                    "id": 82
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPraiseInfoRequest",
                                    "name": "req_query_shop_praise",
                                    "id": 83
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPraiseInfoResponse",
                                    "name": "res_query_shop_praise",
                                    "id": 84
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddPraiseRequest",
                                    "name": "req_add_praise",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_praise",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "CollectShopRequest",
                                    "name": "req_collect_shop",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_collect_shop",
                                    "id": 111
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddCommentRequest",
                                    "name": "req_add_comment",
                                    "id": 112
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_comment",
                                    "id": 113
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueDetailRequest",
                                    "name": "req_query_queue_detail",
                                    "id": 114
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueDetailResponse",
                                    "name": "res_query_queue_detail",
                                    "id": 115
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddQueueRequest",
                                    "name": "req_add_queue",
                                    "id": 116
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddQueueResponse",
                                    "name": "res_add_queue",
                                    "id": 117
                                },
                                {
                                    "rule": "optional",
                                    "type": "CancelQueueRequest",
                                    "name": "req_cancel_queue",
                                    "id": 118
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_cancel_queue",
                                    "id": 119
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddReserveRequest",
                                    "name": "req_add_reserve",
                                    "id": 120
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddReserveResponse",
                                    "name": "res_add_reserve",
                                    "id": 121
                                },
                                {
                                    "rule": "optional",
                                    "type": "CancelReserveRequest",
                                    "name": "req_cancel_reserve",
                                    "id": 122
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_cancel_reserve",
                                    "id": 123
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryReserveTimeRequest",
                                    "name": "req_query_reserve_time",
                                    "id": 124
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryReserveTimeResponse",
                                    "name": "res_query_reserve_time",
                                    "id": 125
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustInvoiceRequest",
                                    "name": "req_query_cust_invoice",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustInvoiceResponse",
                                    "name": "res_query_cust_invoice",
                                    "id": 131
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddInvoiceRequest",
                                    "name": "req_add_invoice",
                                    "id": 132
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_invoice",
                                    "id": 133
                                },
                                {
                                    "rule": "optional",
                                    "type": "CreateFeedbackRequest",
                                    "name": "req_create_feedback",
                                    "id": 200
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_create_feedback",
                                    "id": 210
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustFeedbackRequest",
                                    "name": "req_query_feedback_client",
                                    "id": 220
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustFeedbackResponse",
                                    "name": "res_query_feedback_client",
                                    "id": 230
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryUsualFeedbackRequest",
                                    "name": "req_query_usual_feedback",
                                    "id": 231
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryUsualFeedbackResponse",
                                    "name": "res_query_usual_feedback",
                                    "id": 232
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetFansOpenidRequest",
                                    "name": "req_get_fans_openid",
                                    "id": 235
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetFansOpenidResponse",
                                    "name": "res_get_fans_openid",
                                    "id": 236
                                },
                                {
                                    "rule": "optional",
                                    "type": "RegisterCustomerRequest",
                                    "name": "req_register_customer",
                                    "id": 240
                                },
                                {
                                    "rule": "optional",
                                    "type": "RegisterCustomerResponse",
                                    "name": "res_register_customer",
                                    "id": 241
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCustomerInfoRequest",
                                    "name": "req_get_customer",
                                    "id": 242
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCustomerInfoResponse",
                                    "name": "res_get_customer",
                                    "id": 243
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCustomerRequest",
                                    "name": "req_update_customer",
                                    "id": 244
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_update_customer",
                                    "id": 245
                                },
                                {
                                    "rule": "optional",
                                    "type": "SendValidateCodeClientRequest",
                                    "name": "req_send_validation_code_client",
                                    "id": 246
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_send_validation_code_client",
                                    "id": 247
                                },
                                {
                                    "rule": "optional",
                                    "type": "VefifyValidateCodeClientRequest",
                                    "name": "req_verify_validation_code_client",
                                    "id": 248
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_verify_validation_code_client",
                                    "id": 249
                                },
                                {
                                    "rule": "optional",
                                    "type": "SigninRequest",
                                    "name": "req_cust_signin",
                                    "id": 250
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_cust_signin",
                                    "id": 260
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPointChangeDetailClientRequest",
                                    "name": "req_query_point_detail_client",
                                    "id": 281
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPointChangeDetailResponse",
                                    "name": "res_query_point_detail",
                                    "id": 282
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustQueueRequest",
                                    "name": "req_query_cust_queue",
                                    "id": 290
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustQueueResponse",
                                    "name": "res_query_cust_queue",
                                    "id": 300
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustReserveRequest",
                                    "name": "req_query_cust_reserve",
                                    "id": 301
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustReserveResponse",
                                    "name": "res_query_cust_reserve",
                                    "id": 302
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustCommentRequest",
                                    "name": "req_query_cust_comment",
                                    "id": 310
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustCommentResponse",
                                    "name": "res_query_cust_comment",
                                    "id": 320
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryFavoriteShopRequest",
                                    "name": "req_query_favorite_shop",
                                    "id": 330
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryFavoriteShopResponse",
                                    "name": "res_query_favorite_shop",
                                    "id": 340
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponPointRuleRequest",
                                    "name": "req_query_point_rule",
                                    "id": 350
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponPointRuleResponse",
                                    "name": "res_query_point_rule",
                                    "id": 360
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponPointRuleRequest",
                                    "name": "req_get_point_rule",
                                    "id": 361
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponPointRuleResponse",
                                    "name": "res_get_point_rule",
                                    "id": 362
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponOrderClientRequest",
                                    "name": "req_query_cust_order_client",
                                    "id": 370
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponOrderClientResponse",
                                    "name": "res_query_cust_order_client",
                                    "id": 380
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponOrderClientRequest",
                                    "name": "req_get_coupon_order_client",
                                    "id": 390
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponOrderClientResponse",
                                    "name": "res_get_coupon_order_client",
                                    "id": 400
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustCouponClientRequest",
                                    "name": "req_query_cust_coupon_client",
                                    "id": 410
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustCouponClientResponse",
                                    "name": "res_query_cust_coupon_client",
                                    "id": 420
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponClientRequest",
                                    "name": "req_get_coupon_client",
                                    "id": 430
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponClientResponse",
                                    "name": "res_get_coupon_client",
                                    "id": 440
                                },
                                {
                                    "rule": "optional",
                                    "type": "ExchangeCouponClientRequest",
                                    "name": "req_exchange_coupon_client",
                                    "id": 450
                                },
                                {
                                    "rule": "optional",
                                    "type": "ExchangeCouponClientResponse",
                                    "name": "res_exchange_coupon_client",
                                    "id": 460
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetFreeCouponClientRequest",
                                    "name": "req_get_free_coupon_client",
                                    "id": 470
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetFreeCouponClientResponse",
                                    "name": "res_get_free_coupon_client",
                                    "id": 480
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    10,
                                    20,
                                    50,
                                    60,
                                    70,
                                    80,
                                    81,
                                    82,
                                    83,
                                    84,
                                    90,
                                    100,
                                    110,
                                    111,
                                    112,
                                    113,
                                    114,
                                    115,
                                    116,
                                    117,
                                    118,
                                    119,
                                    120,
                                    121,
                                    122,
                                    123,
                                    124,
                                    125,
                                    130,
                                    131,
                                    132,
                                    133,
                                    200,
                                    210,
                                    220,
                                    230,
                                    231,
                                    232,
                                    235,
                                    236,
                                    240,
                                    241,
                                    242,
                                    243,
                                    244,
                                    245,
                                    246,
                                    247,
                                    248,
                                    249,
                                    250,
                                    260,
                                    281,
                                    282,
                                    290,
                                    300,
                                    301,
                                    302,
                                    310,
                                    320,
                                    330,
                                    340,
                                    350,
                                    360,
                                    361,
                                    362,
                                    370,
                                    380,
                                    390,
                                    400,
                                    410,
                                    420,
                                    430,
                                    440,
                                    450,
                                    460,
                                    470,
                                    480
                                ]
                            }
                        },
                        {
                            "name": "ShopBaseInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "name",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "no",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "industry_name",
                                    "id": 35
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
                                    "name": "area",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "contacts",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "telephone",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "photo_list",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "introduction",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "desc",
                                    "id": 130
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CouponRule",
                                    "name": "coupon_rule",
                                    "id": 140
                                }
                            ]
                        },
                        {
                            "name": "ApplicableShopInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "name",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "no",
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
                                    "name": "industry_name",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "area",
                                    "id": 60
                                }
                            ]
                        },
                        {
                            "name": "ReserveInfo",
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
                                    "name": "shop_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_name",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "logo_url",
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "order_no",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "EReserveStatus",
                                    "name": "status_code",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "created_time",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "meals_time",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "meals_num",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
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
                                    "name": "mobile",
                                    "id": 120
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "photo_list",
                                    "id": 130
                                }
                            ]
                        },
                        {
                            "name": "FavoriteShopInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
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
                                    "type": "string",
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
                                    "name": "photo_list",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "created_time",
                                    "id": 110
                                }
                            ]
                        },
                        {
                            "name": "QueryCodeClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "type_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryShopClientRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_name",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "has_coupon",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "industry_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "sort_name",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "QueryShopClientResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "ShopBaseInfo",
                                    "name": "list",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetShopClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetShopClientResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "ShopBaseInfo",
                                    "name": "base_info",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "ShopExtendInfo",
                                    "name": "extend_info",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryShopCommentRequest",
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
                            "name": "QueryShopCommentResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CommentInfo",
                                    "name": "comment_info",
                                    "id": 10
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
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryPraiseInfoResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "UserPraiseInfo",
                                    "name": "list",
                                    "id": 10
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
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
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
                            "name": "CollectShopRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "EShopCollectAction",
                                    "name": "action",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "AddCommentRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
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
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "images",
                                    "id": 70
                                }
                            ]
                        },
                        {
                            "name": "QueryQueueDetailRequest",
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
                            "name": "QueryQueueDetailResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "QueueDetail",
                                    "name": "result",
                                    "id": 10
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
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "cust_mobile",
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
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "queue_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "CancelQueueRequest",
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
                            "name": "AddReserveRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "reserve_name",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "reserve_mobile",
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
                                    "name": "reserve_time",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 70
                                }
                            ]
                        },
                        {
                            "name": "AddReserveResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "reserve_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "CancelReserveRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "reserve_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryReserveTimeRequest",
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
                                    "name": "meals_num",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryReserveTimeResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "TableRuleInfo",
                                    "name": "rule_info",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "TableRuleInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "TableType",
                                    "name": "table_type",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "RuleTimeInfo",
                                    "name": "times",
                                    "id": 20
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
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "table_name",
                                            "id": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "RuleTimeInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "uint64",
                                            "name": "date",
                                            "id": 10
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "NumberHorizon",
                                            "name": "time_range",
                                            "id": 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "QueryCustInvoiceRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryCustInvoiceResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "InvoiceInfo",
                                    "name": "list",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "AddInvoiceRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "image_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "CreateFeedbackRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "name",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "detail",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "contact_info",
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "QueryCustFeedbackRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "EFeedbackStatus",
                                    "name": "status_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustFeedbackResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Feedback",
                                    "name": "list",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryUsualFeedbackRequest",
                            "fields": []
                        },
                        {
                            "name": "QueryUsualFeedbackResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Feedback",
                                    "name": "list",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetFansOpenidRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "wechat_code",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cf_account_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetFansOpenidResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "open_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "RegisterCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "sr.customer.Customer",
                                    "name": "cust",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "RegisterCustomerResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCustomerInfoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "search_condition",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCustomerInfoResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "sr.customer.Customer",
                                    "name": "cust",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "UpdateCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "sr.customer.Customer",
                                    "name": "cust",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "SendValidateCodeClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "EValidateCodeType",
                                    "name": "type",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "VefifyValidateCodeClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "SigninRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryPointChangeDetailClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryPointChangeDetailResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "current_point",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "sr.customer.point.PointInfo",
                                    "name": "pi",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustQueueRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "EQueryType",
                                    "name": "query_type",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECustQueueStatus",
                                    "name": "status_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "queue_id",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueryCustQueueResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "QueueInfo",
                                    "name": "list",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustReserveRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "EQueryType",
                                    "name": "query_type",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "EMyReserveStatus",
                                    "name": "status_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "reserve_id",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueryCustReserveResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "ReserveInfo",
                                    "name": "list",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustCommentRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "EQueryType",
                                    "name": "query_type",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustCommentResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CommentInfo",
                                    "name": "list",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryFavoriteShopRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryFavoriteShopResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "FavoriteShopInfo",
                                    "name": "list",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponPointRuleRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "coupon_class",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "NumberHorizon",
                                    "name": "num_horizon",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "order_by",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "order_type",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_follow_me",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECouponRuleClass",
                                    "name": "rule_class",
                                    "id": 120
                                },
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.coupon.ECouponType",
                                    "name": "coupon_category",
                                    "id": 130
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponPointRuleResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CouponRule",
                                    "name": "rule",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCouponPointRuleRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "point_rule_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCouponPointRuleResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CouponRule",
                                    "name": "rule",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ApplicableShopInfo",
                                    "name": "shop_info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponOrderClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECouponOrderStatus",
                                    "name": "status",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponOrderClientResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CouponOrder",
                                    "name": "order_info",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCouponOrderClientRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "order_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "order_no",
                                    "id": 11
                                }
                            ],
                            "oneofs": {
                                "order": [
                                    10,
                                    11
                                ]
                            }
                        },
                        {
                            "name": "GetCouponOrderClientResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CouponOrder",
                                    "name": "order_info",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryCustCouponClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.coupon.ECouponStatus",
                                    "name": "coupon_status",
                                    "id": 20
                                },
                                {
                                    "rule": "repeated",
                                    "type": "sr.customer.coupon.ECouponType",
                                    "name": "coupon_category",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryCustCouponClientResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "sr.customer.coupon.CouponCompleteInfo",
                                    "name": "ci",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCouponClientRequest",
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
                            "name": "GetCouponClientResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CouponOfCustomer",
                                    "name": "ci",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ApplicableShopInfo",
                                    "name": "shop_info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "ExchangeCouponClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "point_rule_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "ExchangeCouponClientResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "sr.customer.coupon.CouponInfo",
                                    "name": "ci",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetFreeCouponClientRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "coupon_temp_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetFreeCouponClientResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "sr.customer.coupon.CouponInfo",
                                    "name": "ci",
                                    "id": 10
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "ECustQueueStatus",
                            "values": [
                                {
                                    "name": "Queueing",
                                    "id": 1
                                },
                                {
                                    "name": "Done",
                                    "id": 2
                                },
                                {
                                    "name": "Cancelled",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "EPraiseAction",
                            "values": [
                                {
                                    "name": "Cancel",
                                    "id": 0
                                },
                                {
                                    "name": "Praise",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "EShopCollectAction",
                            "values": [
                                {
                                    "name": "Cancel",
                                    "id": 0
                                },
                                {
                                    "name": "Collect",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "EMyReserveStatus",
                            "values": [
                                {
                                    "name": "InReserveing",
                                    "id": 1
                                },
                                {
                                    "name": "Completed",
                                    "id": 2
                                },
                                {
                                    "name": "Cancelled",
                                    "id": 3
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
            "name": "EQueryType",
            "values": [
                {
                    "name": "Main",
                    "id": 1
                },
                {
                    "name": "Count",
                    "id": 2
                }
            ]
        },
        {
            "name": "EFeedbackStatus",
            "values": [
                {
                    "name": "Unchecked",
                    "id": 1
                },
                {
                    "name": "AlreadyChecked",
                    "id": 2
                }
            ]
        },
        {
            "name": "EIsUsualType",
            "values": [
                {
                    "name": "Yes",
                    "id": 1
                },
                {
                    "name": "No",
                    "id": 0
                }
            ]
        },
        {
            "name": "EInvoiceStatusType",
            "values": [
                {
                    "name": "Unchecked",
                    "id": 0
                },
                {
                    "name": "Approved",
                    "id": 1
                },
                {
                    "name": "Rejected",
                    "id": 2
                }
            ]
        },
        {
            "name": "ECommentStatus",
            "values": [
                {
                    "name": "Unchecked",
                    "id": 0
                },
                {
                    "name": "Approved",
                    "id": 1
                },
                {
                    "name": "Rejected",
                    "id": 2
                },
                {
                    "name": "AlreadyReply",
                    "id": 3
                }
            ]
        },
        {
            "name": "EShopStatus",
            "values": [
                {
                    "name": "Enable",
                    "id": 0
                },
                {
                    "name": "Disable",
                    "id": 1
                }
            ]
        },
        {
            "name": "EMainIndustryStatus",
            "values": [
                {
                    "name": "Main",
                    "id": 1
                },
                {
                    "name": "Vice",
                    "id": 0
                }
            ]
        },
        {
            "name": "EShopSettingStatus",
            "values": [
                {
                    "name": "Yes",
                    "id": 1
                },
                {
                    "name": "No",
                    "id": 0
                }
            ]
        },
        {
            "name": "EValidateCodeType",
            "values": [
                {
                    "name": "Register",
                    "id": 0
                },
                {
                    "name": "ResetPassword",
                    "id": 1
                },
                {
                    "name": "Logion",
                    "id": 2
                },
                {
                    "name": "ModifyMobile",
                    "id": 4
                }
            ]
        },
        {
            "name": "EValueType",
            "values": [
                {
                    "name": "VT_Point",
                    "id": 1
                },
                {
                    "name": "VT_Amount",
                    "id": 2
                }
            ]
        },
        {
            "name": "ECouponOrderStatus",
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
                }
            ]
        },
        {
            "name": "EReserveStatus",
            "values": [
                {
                    "name": "ToBeConfirmed",
                    "id": 0
                },
                {
                    "name": "Confirmed",
                    "id": 1
                },
                {
                    "name": "Arrived",
                    "id": 2
                },
                {
                    "name": "Cancelled",
                    "id": 3
                },
                {
                    "name": "NotCome",
                    "id": 4
                }
            ]
        },
        {
            "name": "EQueueStatus",
            "values": [
                {
                    "name": "Seated",
                    "id": 0
                },
                {
                    "name": "UnSeated",
                    "id": 1
                },
                {
                    "name": "Past",
                    "id": 2
                },
                {
                    "name": "Cancelled",
                    "id": 3
                }
            ]
        },
        {
            "name": "ECouponRuleClass",
            "values": [
                {
                    "name": "Point",
                    "id": 1
                },
                {
                    "name": "Free",
                    "id": 2
                }
            ]
        }
    ]
}).build();