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
                    "type": "string",
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
                    "rule": "optional",
                    "type": "string",
                    "name": "mobile",
                    "id": 13
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
                    "type": "EMWBYDStatus",
                    "name": "mwbyd_status",
                    "id": 51
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
                    "type": "uint32",
                    "name": "min",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint32",
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
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "pay_time",
                    "id": 110
                },
                {
                    "rule": "optional",
                    "type": "EPaymentType",
                    "name": "payment_type",
                    "id": 120
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "cancel_time",
                    "id": 130
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "complete_time",
                    "id": 140
                },
                {
                    "rule": "optional",
                    "type": "sr.customer.coupon.CouponInfo",
                    "name": "coupon_info",
                    "id": 150
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "third_order_no",
                    "id": 160
                },
                {
                    "rule": "optional",
                    "type": "EOrderPaySource",
                    "name": "pay_source",
                    "id": 170
                }
            ]
        },
        {
            "name": "OrderExtendInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "order_id",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "EOrderReceiptWay",
                    "name": "receipt_way",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "recipient_name",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mobile",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "postcode",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "detail_address",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "express_company",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "express_no",
                    "id": 70
                }
            ]
        },
        {
            "name": "CouponOrderBase",
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
                    "type": "ECouponOrderStatus",
                    "name": "status",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "cust_id",
                    "id": 40
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
                },
                {
                    "rule": "optional",
                    "type": "EApplicableChannel",
                    "name": "applicable_channel",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_allow_delivery",
                    "id": 80
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
            "name": "CouponSaleRule",
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
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "sale_start_time",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "sale_end_time",
                    "id": 80
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_reserved",
                    "id": 100
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "remind_minutes",
                    "id": 110
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_allow_delivery",
                    "id": 120
                }
            ]
        },
        {
            "name": "CouponOrderHistory",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "order_id",
                    "id": 10
                },
                {
                    "rule": "required",
                    "type": "ECouponOrderOpeateType",
                    "name": "oper_type_code",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "opeater_id",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "opeater_name",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "remark",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "opeater_time",
                    "id": 60
                }
            ]
        },
        {
            "name": "WXPaymentInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "EPayType",
                    "name": "pay_type",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "body",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "client_ip_address",
                    "id": 40
                }
            ]
        },
        {
            "name": "WXPayUnifiedOrderInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "EPayType",
                    "name": "pay_type",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "prepay_id",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "code_url",
                    "id": 30
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
                    "rule": "optional",
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
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "advance_time",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "advance_day",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "acceptance",
                    "id": 50
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
                                    "type": "DeleteCustomerRequest",
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
                                },
                                {
                                    "rule": "optional",
                                    "type": "ReleaseCustomerRequest",
                                    "name": "req_release_customer",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_release_customer",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "ImportCardRequest",
                                    "name": "req_import_card",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "ImportCardResponse",
                                    "name": "res_import_card",
                                    "id": 31
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerCardStatusRequest",
                                    "name": "req_query_card_status",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerCardStatusResponse",
                                    "name": "res_query_card_status",
                                    "id": 33
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
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32,
                                    33
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
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "wechat_card_id",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "register_time",
                                    "id": 33
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "isattention",
                                    "id": 34
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
                            "name": "DeleteCustomerRequest",
                            "fields": []
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
                            "name": "ImportCardRequest",
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
                            "name": "ImportCardResponse",
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
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "code",
                                    "id": 7
                                }
                            ]
                        },
                        {
                            "name": "ReleaseCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "cc",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "EReleaseType",
                                    "name": "release_type",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "staff_id",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerCardStatusRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "card_id",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerCardStatusResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_id",
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
                                    "type": "ECustomerStatus",
                                    "name": "status",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "EBindCardType",
                                    "name": "bind_type",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
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
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "selffield1",
                                            "id": 11
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
                                    "name": "Invalid",
                                    "id": 0
                                },
                                {
                                    "name": "Valid",
                                    "id": 1
                                },
                                {
                                    "name": "Deleted",
                                    "id": 2
                                },
                                {
                                    "name": "Inactive",
                                    "id": 3
                                },
                                {
                                    "name": "OverDue",
                                    "id": 4
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
                                },
                                {
                                    "name": "Wechat_release",
                                    "id": 8
                                },
                                {
                                    "name": "Bind",
                                    "id": 9
                                }
                            ]
                        },
                        {
                            "name": "EReleaseType",
                            "values": [
                                {
                                    "name": "Release_Wechat",
                                    "id": 1
                                },
                                {
                                    "name": "Release_Mobile",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EBindCardType",
                            "values": [
                                {
                                    "name": "Bind_All",
                                    "id": 0
                                },
                                {
                                    "name": "Bind_By_Code",
                                    "id": 1
                                },
                                {
                                    "name": "Bind_By_Mobile",
                                    "id": 2
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
                    "name": "service",
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
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCodeRequest",
                                    "name": "req_query_code_value",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCodeResponse",
                                    "name": "res_query_code_value",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "LoginRequest",
                                    "name": "req_login",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "LoginResponse",
                                    "name": "res_login",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopRequest",
                                    "name": "req_query_shop",
                                    "id": 51
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopResponse",
                                    "name": "res_query_shop",
                                    "id": 52
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetShopRequest",
                                    "name": "req_get_shop",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetShopResponse",
                                    "name": "res_get_shop",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "ModifyShopRequest",
                                    "name": "req_modify_shop",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_modify_shop",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustRequest",
                                    "name": "req_query_cust",
                                    "id": 91
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustResponse",
                                    "name": "res_query_cust",
                                    "id": 92
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCustRequest",
                                    "name": "req_update_cust",
                                    "id": 93
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_update_cust",
                                    "id": 94
                                },
                                {
                                    "rule": "optional",
                                    "type": "SendValidateCodeRequest",
                                    "name": "req_send_validation_code",
                                    "id": 95
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_send_validation_code",
                                    "id": 96
                                },
                                {
                                    "rule": "optional",
                                    "type": "VefiryValidateCodeRequest",
                                    "name": "req_verify_validation_code",
                                    "id": 97
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_verify_validation_code",
                                    "id": 98
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPointChangeDetailRequest",
                                    "name": "req_query_point_detail",
                                    "id": 99
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPointChangeDetailResponse",
                                    "name": "res_query_point_detail",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "ReleaseCustomerRequest",
                                    "name": "req_release_customer",
                                    "id": 101
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_release_customer",
                                    "id": 102
                                },
                                {
                                    "rule": "optional",
                                    "type": "VerifyClientManuallySuccessRequest",
                                    "name": "req_set_manual_verification_result",
                                    "id": 103
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_set_manual_verification_result",
                                    "id": 104
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCardExpiredDateRequest",
                                    "name": "req_update_card_expired_date",
                                    "id": 105
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_update_card_expired_date",
                                    "id": 106
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCustCardRequest",
                                    "name": "req_get_cust_card",
                                    "id": 107
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCustCardResponse",
                                    "name": "res_get_cust_card",
                                    "id": 108
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustInfoHistoryRequest",
                                    "name": "req_query_cust_history",
                                    "id": 109
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustInfoHistoryResponse",
                                    "name": "res_query_cust_history",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustCardRequest",
                                    "name": "req_query_cust_card",
                                    "id": 140
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustCardResponse",
                                    "name": "res_query_cust_card",
                                    "id": 150
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddCustCardRequest",
                                    "name": "req_add_cust_card",
                                    "id": 160
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_cust_card",
                                    "id": 170
                                },
                                {
                                    "rule": "optional",
                                    "type": "ChangeCustCardRequest",
                                    "name": "req_change_cust_card",
                                    "id": 180
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_change_cust_card",
                                    "id": 190
                                },
                                {
                                    "rule": "optional",
                                    "type": "UpdateCardStatusRequest",
                                    "name": "req_update_cust_card",
                                    "id": 200
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_update_cust_card",
                                    "id": 210
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeInvoiceRequest",
                                    "name": "req_query_trade_invoice",
                                    "id": 220
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeInvoiceResponse",
                                    "name": "res_query_trade_invoice",
                                    "id": 230
                                },
                                {
                                    "rule": "optional",
                                    "type": "CheckTradeInvoiceRequest",
                                    "name": "req_check_trade_invoice",
                                    "id": 240
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_check_trade_invoice",
                                    "id": 250
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddTradeRequest",
                                    "name": "req_add_trade",
                                    "id": 260
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_trade",
                                    "id": 270
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryFeedbackRequest",
                                    "name": "req_query_feedback",
                                    "id": 280
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryFeedbackResponse",
                                    "name": "res_query_feedback",
                                    "id": 290
                                },
                                {
                                    "rule": "optional",
                                    "type": "ReplyFeedbackRequest",
                                    "name": "req_reply_feedback",
                                    "id": 300
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_reply_feedback",
                                    "id": 310
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopSummaryRequest",
                                    "name": "req_query_shop_summary",
                                    "id": 340
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryShopSummaryResponse",
                                    "name": "res_query_shop_summary",
                                    "id": 350
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueReportRequest",
                                    "name": "req_query_queue_report",
                                    "id": 360
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueReportResponse",
                                    "name": "res_query_queue_report",
                                    "id": 370
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryReserveReportRequest",
                                    "name": "req_query_reserve_report",
                                    "id": 380
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryReserveReportResponse",
                                    "name": "res_query_reserve_report",
                                    "id": 390
                                },
                                {
                                    "rule": "optional",
                                    "type": "BusinessSettingRequest",
                                    "name": "req_set_business",
                                    "id": 400
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_set_business",
                                    "id": 410
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCommentRequest",
                                    "name": "req_query_comment",
                                    "id": 420
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCommentResponse",
                                    "name": "res_query_comment",
                                    "id": 430
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPraiseRequest",
                                    "name": "req_query_praise",
                                    "id": 431
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryPraiseResponse",
                                    "name": "res_query_praise",
                                    "id": 432
                                },
                                {
                                    "rule": "optional",
                                    "type": "ReplyCommentRequest",
                                    "name": "req_reply_comment",
                                    "id": 440
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_reply_comment",
                                    "id": 450
                                },
                                {
                                    "rule": "optional",
                                    "type": "VerifyCommentRequest",
                                    "name": "req_verify_comment",
                                    "id": 460
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_verify_comment",
                                    "id": 470
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueRequest",
                                    "name": "req_query_queue",
                                    "id": 480
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryQueueResponse",
                                    "name": "res_query_queue",
                                    "id": 490
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryReserveRequest",
                                    "name": "req_query_reserve",
                                    "id": 500
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryReserveResponse",
                                    "name": "res_query_reserve",
                                    "id": 510
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddReserveRequest",
                                    "name": "req_add_reserve",
                                    "id": 511
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_reserve",
                                    "id": 512
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryApplicableTimeRequest",
                                    "name": "req_query_applicable_time",
                                    "id": 513
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryApplicableTimeResponse",
                                    "name": "res_query_applicable_time",
                                    "id": 514
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryApplicableRuleRequest",
                                    "name": "req_query_applicable_rule",
                                    "id": 515
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryApplicableRuleResponse",
                                    "name": "res_query_applicable_rule",
                                    "id": 516
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetReserveDetailRequest",
                                    "name": "req_get_reserve_detail",
                                    "id": 517
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetReserveDetailResponse",
                                    "name": "res_get_reserve_detail",
                                    "id": 518
                                },
                                {
                                    "rule": "optional",
                                    "type": "ModifyReserveRequest",
                                    "name": "req_modify_reserve",
                                    "id": 520
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_modify_reserve",
                                    "id": 530
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeRequest",
                                    "name": "req_query_trade",
                                    "id": 531
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryTradeResponse",
                                    "name": "res_query_trade",
                                    "id": 532
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponRuleRequest",
                                    "name": "req_query_coupon_rule",
                                    "id": 550
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponRuleResponse",
                                    "name": "res_query_coupon_rule",
                                    "id": 560
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponOrderRequest",
                                    "name": "req_query_cust_order",
                                    "id": 570
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponOrderResponse",
                                    "name": "res_query_cust_order",
                                    "id": 580
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponOrderRequest",
                                    "name": "req_get_coupon_order",
                                    "id": 590
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponOrderResponse",
                                    "name": "res_get_coupon_order",
                                    "id": 600
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponRequest",
                                    "name": "req_query_coupon",
                                    "id": 610
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponResponse",
                                    "name": "res_query_coupon",
                                    "id": 620
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponRequest",
                                    "name": "req_get_coupon",
                                    "id": 630
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponResponse",
                                    "name": "res_get_coupon",
                                    "id": 640
                                },
                                {
                                    "rule": "optional",
                                    "type": "SendCouponRequest",
                                    "name": "req_send_coupon",
                                    "id": 650
                                },
                                {
                                    "rule": "optional",
                                    "type": "SendCouponResponse",
                                    "name": "res_send_coupon",
                                    "id": 660
                                },
                                {
                                    "rule": "optional",
                                    "type": "DestroyCouponRequest",
                                    "name": "req_destroy_coupon",
                                    "id": 670
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_destroy_coupon",
                                    "id": 680
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponHistoryRequest",
                                    "name": "req_query_coupon_history",
                                    "id": 690
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCouponHistoryResponse",
                                    "name": "res_query_coupon_history",
                                    "id": 700
                                },
                                {
                                    "rule": "optional",
                                    "type": "CancelOrderRequest",
                                    "name": "req_cancel_order",
                                    "id": 770
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_cancel_order",
                                    "id": 780
                                },
                                {
                                    "rule": "optional",
                                    "type": "RefundOrderRequest",
                                    "name": "req_refund_order",
                                    "id": 790
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_refund_order",
                                    "id": 800
                                },
                                {
                                    "rule": "optional",
                                    "type": "ExchangeCouponRequest",
                                    "name": "req_exchange_coupon",
                                    "id": 810
                                },
                                {
                                    "rule": "optional",
                                    "type": "ExchangeCouponResponse",
                                    "name": "res_exchange_coupon",
                                    "id": 820
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryOrderHistoryRequest",
                                    "name": "req_query_order_history",
                                    "id": 830
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryOrderHistoryResponse",
                                    "name": "res_query_order_history",
                                    "id": 840
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetPreOrderNoRequest",
                                    "name": "req_get_pre_order_no",
                                    "id": 850
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetPreOrderNoResponse",
                                    "name": "res_get_pre_order_no",
                                    "id": 860
                                },
                                {
                                    "rule": "optional",
                                    "type": "PayOrderRequest",
                                    "name": "req_pay_order",
                                    "id": 870
                                },
                                {
                                    "rule": "optional",
                                    "type": "PayOrderResponse",
                                    "name": "res_pay_order",
                                    "id": 880
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    10,
                                    20,
                                    30,
                                    40,
                                    50,
                                    51,
                                    52,
                                    60,
                                    70,
                                    80,
                                    90,
                                    91,
                                    92,
                                    93,
                                    94,
                                    95,
                                    96,
                                    97,
                                    98,
                                    99,
                                    100,
                                    101,
                                    102,
                                    103,
                                    104,
                                    105,
                                    106,
                                    107,
                                    108,
                                    109,
                                    110,
                                    140,
                                    150,
                                    160,
                                    170,
                                    180,
                                    190,
                                    200,
                                    210,
                                    220,
                                    230,
                                    240,
                                    250,
                                    260,
                                    270,
                                    280,
                                    290,
                                    300,
                                    310,
                                    340,
                                    350,
                                    360,
                                    370,
                                    380,
                                    390,
                                    400,
                                    410,
                                    420,
                                    430,
                                    431,
                                    432,
                                    440,
                                    450,
                                    460,
                                    470,
                                    480,
                                    490,
                                    500,
                                    510,
                                    511,
                                    512,
                                    513,
                                    514,
                                    515,
                                    516,
                                    517,
                                    518,
                                    520,
                                    530,
                                    531,
                                    532,
                                    550,
                                    560,
                                    570,
                                    580,
                                    590,
                                    600,
                                    610,
                                    620,
                                    630,
                                    640,
                                    650,
                                    660,
                                    670,
                                    680,
                                    690,
                                    700,
                                    770,
                                    780,
                                    790,
                                    800,
                                    810,
                                    820,
                                    830,
                                    840,
                                    850,
                                    860,
                                    870,
                                    880
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
                                },
                                {
                                    "rule": "optional",
                                    "type": "ELanguageType",
                                    "name": "language",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_name",
                                    "id": 80
                                }
                            ]
                        },
                        {
                            "name": "CustCardHistory",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_name",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.EModifyCardType",
                                    "name": "type",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_no",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "card_level",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "operater_name",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "operater_time",
                                    "id": 90
                                }
                            ]
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
                                    "type": "string",
                                    "name": "industry_key_name",
                                    "id": 140
                                },
                                {
                                    "rule": "optional",
                                    "type": "ShopExtendInfo",
                                    "name": "extend_info",
                                    "id": 150
                                }
                            ]
                        },
                        {
                            "name": "CustomerExtend",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECustCardType",
                                    "name": "card_status",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "total_point",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "total_coupon",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "expired_date",
                                    "id": 60
                                }
                            ]
                        },
                        {
                            "name": "Statistics",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "queue_info",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "reserve_info",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "comment_info",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "praise_info",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueueBasic",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "table_type",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "count_info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GrowingInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "date",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "number",
                                    "id": 20
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
                                    "name": "cust_mobile",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "meals_num",
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
                                    "name": "meals_time",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_photo",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "table_rule_id",
                                    "id": 100
                                }
                            ]
                        },
                        {
                            "name": "TradeInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "trade_no",
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
                                    "type": "string",
                                    "name": "cust_name",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "trade_fee",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "ETradeType",
                                    "name": "trade_type",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "trade_time",
                                    "id": 60
                                }
                            ]
                        },
                        {
                            "name": "CustOperationHistory",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "operater_time",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "operater_name",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryCodeRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "type_code",
                                    "id": 20
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
                                },
                                {
                                    "rule": "required",
                                    "type": "EAccountType",
                                    "name": "account_type",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "LoginResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "LoginUserInfo",
                                    "name": "user_info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryShopRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_name",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryShopResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "ShopInfo",
                                    "name": "list",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetShopRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetShopResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "ShopInfo",
                                    "name": "shop",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "ModifyShopRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "logo_url",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "contacts",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "telephone",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 90
                                },
                                {
                                    "rule": "repeated",
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
                                    "type": "ShopExtendInfo",
                                    "name": "extend_info",
                                    "id": 120
                                }
                            ]
                        },
                        {
                            "name": "QueryCustRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.Customer",
                                    "name": "cust",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerExtend",
                                    "name": "cust_extend",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "ReleaseCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "cc",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "EReleaseType",
                                    "name": "release_type",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "UpdateCustRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.Customer",
                                    "name": "cust",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "SendValidateCodeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "EValidateCodeType",
                                    "name": "type",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "VefiryValidateCodeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "VerifyClientManuallySuccessRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "state",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "UpdateCardExpiredDateRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "ECardValidType",
                                    "name": "valid_type_code",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "expired_date",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "GetCustCardRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "cust_card_no",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCustCardResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CustCardInfo",
                                    "name": "card",
                                    "id": 10
                                }
                            ],
                            "messages": [
                                {
                                    "name": "CustCardInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "uint32",
                                            "name": "cust_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ECustCardType",
                                            "name": "status_code",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "level_no",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "duetime",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ECardValidType",
                                            "name": "valid_type_code",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "valid_endtime",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "valid_days_after_activation",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ECardActivationType",
                                            "name": "activation_type",
                                            "id": 80
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "matched_mobile",
                                            "id": 90
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "activation_code",
                                            "id": 100
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "QueryCustInfoHistoryRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                            "name": "QueryCustInfoHistoryResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CustOperationHistory",
                                    "name": "history_info",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryPointChangeDetailRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                            "name": "QueryCustCardRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                            "name": "QueryCustCardResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CustCardHistory",
                                    "name": "result",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "AddCustCardRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.Customer",
                                    "name": "cust",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "activation_code",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "ChangeCustCardRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "string",
                                    "name": "new_card_no",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "activation_code",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "UpdateCardStatusRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "sr.customer.EModifyCardType",
                                    "name": "type",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeInvoiceRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "invoice_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "EInvoiceStatusType",
                                    "name": "status_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "EQueryType",
                                    "name": "query_type",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeInvoiceResponse",
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
                            "name": "CheckTradeInvoiceRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "InvoiceInfo",
                                    "name": "invoice",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "AddTradeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "image_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_condition",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "trade_no",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "trade_fee",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "trade_time",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
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
                                    "type": "string",
                                    "name": "remark",
                                    "id": 90
                                }
                            ]
                        },
                        {
                            "name": "QueryFeedbackRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "EFeedbackStatus",
                                    "name": "status_code",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "EQueryType",
                                    "name": "query_type",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueryFeedbackResponse",
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
                            "name": "ReplyFeedbackRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "reply",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryShopSummaryRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryShopSummaryResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Statistics",
                                    "name": "statistics",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "QueueBasic",
                                    "name": "queue_statistics",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryQueueReportRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "TimeHorizon",
                                    "name": "time_horizon",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryQueueReportResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "GrowingInfo",
                                    "name": "list",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryReserveReportRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "TimeHorizon",
                                    "name": "time_horizon",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryReserveReportResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "GrowingInfo",
                                    "name": "list",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "BusinessSettingRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "EShopBusinessType",
                                    "name": "type_code",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "EShopSettingStatus",
                                    "name": "status_code",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueryCommentRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "TimeHorizon",
                                    "name": "time_horizon",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECommentStatus",
                                    "name": "status_code",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "PageInfo",
                                    "name": "page",
                                    "id": 70
                                }
                            ]
                        },
                        {
                            "name": "QueryCommentResponse",
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
                            "name": "QueryPraiseRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "TimeHorizon",
                                    "name": "time_horizon",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "PageInfo",
                                    "name": "page",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "QueryPraiseResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "UserPraiseInfo",
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
                            "name": "ReplyCommentRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "comment_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "content",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "VerifyCommentRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "comment_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "ECommentStatus",
                                    "name": "status_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "reply",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueryQueueRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "TimeHorizon",
                                    "name": "time_horizon",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "EQueueStatus",
                                    "name": "status_code",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_name",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_mobile",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "PageInfo",
                                    "name": "page",
                                    "id": 70
                                }
                            ]
                        },
                        {
                            "name": "QueryQueueResponse",
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
                            "name": "QueryReserveRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "EReserveStatus",
                                    "name": "status_code",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "TimeHorizon",
                                    "name": "create_time_horizon",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "TimeHorizon",
                                    "name": "reserve_time_horizon",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "PageInfo",
                                    "name": "page",
                                    "id": 90
                                }
                            ]
                        },
                        {
                            "name": "QueryReserveResponse",
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
                            "name": "AddReserveRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "name": "mobile",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "table_rule_id",
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
                                    "name": "meals_time",
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
                            "name": "QueryApplicableTimeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryApplicableTimeResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "RuleTimeInfo",
                                    "name": "times",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryApplicableRuleRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "reserve_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "meals_time",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryApplicableRuleResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "TableType",
                                    "name": "table_type",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetReserveDetailRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "reserve_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetReserveDetailResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "ReserveInfo",
                                    "name": "reserve_info",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "ModifyReserveRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "EReserveStatus",
                                    "name": "status_code",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "table_rule_id",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "meals_num",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "meals_time",
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
                            "name": "QueryTradeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "name": "condition_name",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "TimeHorizon",
                                    "name": "time_rang",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "NumberHorizon",
                                    "name": "amount_rang",
                                    "id": 50
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "PageInfo",
                                    "name": "page",
                                    "id": 70
                                }
                            ]
                        },
                        {
                            "name": "QueryTradeResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "TradeInfo",
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
                            "name": "PageInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "page_size",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "page_index",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponRuleRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "point_rule_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "NumberHorizon",
                                    "name": "num_horizon",
                                    "id": 40
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "cust_card_type",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "coupon_class",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECouponRuleClass",
                                    "name": "rule_class",
                                    "id": 120
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponRuleResponse",
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
                            "name": "QueryCouponOrderRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "ECouponOrderStatus",
                                    "name": "status",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponOrderResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CouponOrder",
                                    "name": "order_info",
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
                            "name": "GetCouponOrderRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "order_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "order_no",
                                    "id": 21
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    20,
                                    21
                                ]
                            }
                        },
                        {
                            "name": "GetCouponOrderResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CouponOrder",
                                    "name": "order_info",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "OrderExtendInfo",
                                    "name": "order_extend_info",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "sr.customer.coupon.ECouponStatus",
                                    "name": "coupon_status",
                                    "id": 30
                                },
                                {
                                    "rule": "repeated",
                                    "type": "sr.customer.coupon.ECouponType",
                                    "name": "coupon_category",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CouponOfCustomer",
                                    "name": "ci",
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
                            "name": "GetCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "coupon_instance_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "coupon_code",
                                    "id": 30
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    20,
                                    30
                                ]
                            }
                        },
                        {
                            "name": "GetCouponResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CouponOfCustomer",
                                    "name": "ci",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponOrderBase",
                                    "name": "order_info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "SendCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "int32",
                                    "name": "point_rule_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "SendCouponResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "sr.customer.coupon.CouponInfo",
                                    "name": "coupon_info",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "DestroyCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "coupon_no",
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
                                    "type": "uint32",
                                    "name": "cust_id",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponHistoryRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "ECouponHistoryType",
                                    "name": "history_type",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "condition_name",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "no",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "used_time",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_mobile",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cust_name",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "PageInfo",
                                    "name": "page",
                                    "id": 90
                                }
                            ]
                        },
                        {
                            "name": "QueryCouponHistoryResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CouponOfCustomer",
                                    "name": "history",
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
                            "name": "CancelOrderRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "order_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "RefundOrderRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "order_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "ERefundType",
                                    "name": "refund_type",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "ExchangeCouponRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "int32",
                                    "name": "point_rule_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "third_order_no",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "EOrderPaymentType",
                                    "name": "payment_type",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "ExchangeCouponResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.coupon.CouponInfo",
                                    "name": "coupon_info",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.coupon.CouponOrderInfo",
                                    "name": "coupon_order_info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryOrderHistoryRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "order_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryOrderHistoryResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CouponOrderHistory",
                                    "name": "order_history",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetPreOrderNoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "int32",
                                    "name": "point_rule_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "GetPreOrderNoResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "order_no",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "PayOrderRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "session_id",
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
                                    "type": "int32",
                                    "name": "order_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPaymentInfo",
                                    "name": "pay_info",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "PayOrderResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "sr.customer.coupon.CouponInfo",
                                    "name": "ci",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "WXPayUnifiedOrderInfo",
                                    "name": "wx_order_info",
                                    "id": 20
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "ELanguageType",
                            "values": [
                                {
                                    "name": "Chinese",
                                    "id": 0
                                },
                                {
                                    "name": "English",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "ECustCardType",
                            "values": [
                                {
                                    "name": "Disable",
                                    "id": 0
                                },
                                {
                                    "name": "Enable",
                                    "id": 1
                                },
                                {
                                    "name": "Deleted",
                                    "id": 2
                                },
                                {
                                    "name": "Unactive",
                                    "id": 3
                                }
                            ]
                        },
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
                            "name": "EAccountType",
                            "values": [
                                {
                                    "name": "Admin",
                                    "id": 1
                                },
                                {
                                    "name": "Shop",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EShopBusinessType",
                            "values": [
                                {
                                    "name": "CanQueue",
                                    "id": 1
                                },
                                {
                                    "name": "CanReserve",
                                    "id": 2
                                },
                                {
                                    "name": "CanComment",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "EUsableType",
                            "values": [
                                {
                                    "name": "Enable",
                                    "id": 1
                                },
                                {
                                    "name": "Disable",
                                    "id": 0
                                }
                            ]
                        },
                        {
                            "name": "EReleaseType",
                            "values": [
                                {
                                    "name": "Release_Wechat",
                                    "id": 1
                                },
                                {
                                    "name": "Release_Mobile",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EPayType",
                            "values": [
                                {
                                    "name": "WeChat",
                                    "id": 1
                                },
                                {
                                    "name": "Ali",
                                    "id": 2
                                },
                                {
                                    "name": "Addition",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "ETradeType",
                            "values": [
                                {
                                    "name": "Normal",
                                    "id": 1
                                },
                                {
                                    "name": "Refund",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ECouponHistoryType",
                            "values": [
                                {
                                    "name": "UsedHistory",
                                    "id": 1
                                },
                                {
                                    "name": "ExchangedHistory",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ECardValidType",
                            "values": [
                                {
                                    "name": "Forever",
                                    "id": 0
                                },
                                {
                                    "name": "DefaultDate",
                                    "id": 1
                                },
                                {
                                    "name": "DefaultDuration",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ECardActivationType",
                            "values": [
                                {
                                    "name": "None",
                                    "id": 0
                                },
                                {
                                    "name": "Code",
                                    "id": 1
                                },
                                {
                                    "name": "Mobile",
                                    "id": 2
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
                },
                {
                    "name": "Unfilled",
                    "id": 5
                }
            ]
        },
        {
            "name": "EOrderPaymentType",
            "values": [
                {
                    "name": "WeChat",
                    "id": 1
                },
                {
                    "name": "Ali",
                    "id": 2
                },
                {
                    "name": "Cash",
                    "id": 3
                },
                {
                    "name": "Other",
                    "id": 10
                }
            ]
        },
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
        },
        {
            "name": "EPaymentType",
            "values": [
                {
                    "name": "Wechat",
                    "id": 1
                },
                {
                    "name": "Ali",
                    "id": 2
                },
                {
                    "name": "Cash",
                    "id": 3
                },
                {
                    "name": "Other",
                    "id": 4
                }
            ]
        },
        {
            "name": "EApplicableChannel",
            "values": [
                {
                    "name": "Point",
                    "id": 1
                },
                {
                    "name": "Free",
                    "id": 2
                },
                {
                    "name": "Game",
                    "id": 3
                },
                {
                    "name": "GroupPurchase",
                    "id": 4
                },
                {
                    "name": "Sale",
                    "id": 5
                }
            ]
        },
        {
            "name": "ECouponOrderOpeateType",
            "values": [
                {
                    "name": "Create",
                    "id": 1
                },
                {
                    "name": "Pay",
                    "id": 2
                },
                {
                    "name": "Complete",
                    "id": 3
                },
                {
                    "name": "AutoCancelWithUnpay",
                    "id": 4
                },
                {
                    "name": "ManualCancelWithUnpay",
                    "id": 5
                },
                {
                    "name": "RefundUnusedCoupon",
                    "id": 6
                },
                {
                    "name": "RefundByQualityProblem",
                    "id": 7
                },
                {
                    "name": "RefundWithNoReason",
                    "id": 8
                },
                {
                    "name": "ExchangeGoods",
                    "id": 9
                }
            ]
        },
        {
            "name": "ERefundType",
            "values": [
                {
                    "name": "RefundUnusedCoupon",
                    "id": 1
                },
                {
                    "name": "RefundByQualityProblem",
                    "id": 2
                },
                {
                    "name": "RefundWithNoReason",
                    "id": 3
                },
                {
                    "name": "ExchangeGoods",
                    "id": 4
                }
            ]
        },
        {
            "name": "EOrderReceiptWay",
            "values": [
                {
                    "name": "ReceiveInService",
                    "id": 1
                },
                {
                    "name": "HomeDelivery",
                    "id": 2
                }
            ]
        },
        {
            "name": "EOrderPaySource",
            "values": [
                {
                    "name": "webapp",
                    "id": 1
                },
                {
                    "name": "service",
                    "id": 2
                }
            ]
        },
        {
            "name": "EMWBYDStatus",
            "values": [
                {
                    "name": "queue",
                    "id": 1
                },
                {
                    "name": "success",
                    "id": 2
                },
                {
                    "name": "fail",
                    "id": 3
                },
                {
                    "name": "call",
                    "id": 4
                },
                {
                    "name": "eat",
                    "id": 5
                },
                {
                    "name": "pass",
                    "id": 6
                },
                {
                    "name": "cancel",
                    "id": 7
                },
                {
                    "name": "error",
                    "id": 8
                }
            ]
        }
    ]
}).build();