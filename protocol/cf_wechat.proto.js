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
                    "name": "wechat",
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
                                    "type": "GroupMessageSendRequest",
                                    "name": "req_group_message_send",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "GroupMessageSendResponse",
                                    "name": "res_group_message_send",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "TemplateMessageSendRequest",
                                    "name": "req_template_message_send",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "TemplateMessageSendResponse",
                                    "name": "res_template_message_send",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetTemplateIdLongRequest",
                                    "name": "req_get_template_id_long",
                                    "id": 160
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetTemplateIdLongResponse",
                                    "name": "res_get_template_id_long",
                                    "id": 161
                                },
                                {
                                    "rule": "optional",
                                    "type": "MenuResetRequest",
                                    "name": "req_menu_reset",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "MenuResetResponse",
                                    "name": "res_menu_reset",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "UserInfoRequest",
                                    "name": "req_userinfo_query",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "UserInfoResponse",
                                    "name": "res_userinfo_query",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetOpenidByCodeRequest",
                                    "name": "req_get_openid_by_code",
                                    "id": 190
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetOpenidByCodeResponse",
                                    "name": "res_get_openid_by_code",
                                    "id": 191
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCustInfoByCodeRequest",
                                    "name": "req_get_cust_info_by_code",
                                    "id": 192
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCustInfoByCodeResponse",
                                    "name": "res_get_cust_info_by_code",
                                    "id": 193
                                },
                                {
                                    "rule": "optional",
                                    "type": "SyncUserInfoRequest",
                                    "name": "req_userinfo_sync",
                                    "id": 219
                                },
                                {
                                    "rule": "optional",
                                    "type": "SyncUserInfoResponse",
                                    "name": "res_userinfo_sync",
                                    "id": 220
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerServiceChatRecordRequest",
                                    "name": "req_customer_service_chat_record",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerServiceChatRecordResponse",
                                    "name": "res_customer_service_chat_record",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "GenerateQrCodeRequest",
                                    "name": "req_generate_qrcode",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "GenerateQrCodeResponse",
                                    "name": "res_generate_qrcode",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "GenerateShortUrlRequest",
                                    "name": "req_generate_short_url",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "GenerateShortUrlResponse",
                                    "name": "res_generate_short_url",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateCreateRequest",
                                    "name": "req_coupon_template_create",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateCreateResponse",
                                    "name": "res_coupon_template_create",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponColorListRequest",
                                    "name": "req_get_coupon_color_list",
                                    "id": 290
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponColorListResponse",
                                    "name": "res_get_coupon_color_list",
                                    "id": 291
                                },
                                {
                                    "rule": "optional",
                                    "type": "ImportCouponCodeRequest",
                                    "name": "req_import_coupon_code",
                                    "id": 300
                                },
                                {
                                    "rule": "optional",
                                    "type": "ImportCouponCodeResponse",
                                    "name": "res_import_coupon_code",
                                    "id": 301
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponImportedCountRequest",
                                    "name": "req_get_coupon_imported_count",
                                    "id": 302
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponImportedCountResponse",
                                    "name": "res_get_coupon_imported_count",
                                    "id": 303
                                },
                                {
                                    "rule": "optional",
                                    "type": "CheckCouponImportingRequest",
                                    "name": "req_check_coupon_importing",
                                    "id": 304
                                },
                                {
                                    "rule": "optional",
                                    "type": "CheckCouponImportingResponse",
                                    "name": "res_check_coupon_importing",
                                    "id": 305
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateQueryRequest",
                                    "name": "req_coupon_template_query",
                                    "id": 306
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateQueryResponse",
                                    "name": "res_coupon_template_query",
                                    "id": 307
                                },
                                {
                                    "rule": "optional",
                                    "type": "MemberCardInterfaceActiveRequest",
                                    "name": "req_member_card_interface_active",
                                    "id": 326
                                },
                                {
                                    "rule": "optional",
                                    "type": "MemberCardInterfaceActiveResponse",
                                    "name": "res_member_card_interface_active",
                                    "id": 327
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateGenerateQrCodeRequest",
                                    "name": "req_coupon_template_generate_qrcode",
                                    "id": 33
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateGenerateQrCodeResponse",
                                    "name": "res_coupon_template_generate_qrcode",
                                    "id": 34
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponMemberCardActivateFormRequest",
                                    "name": "req_member_card_activate_form",
                                    "id": 341
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponMemberCardActivateFormResponse",
                                    "name": "res_member_card_activate_form",
                                    "id": 342
                                },
                                {
                                    "rule": "optional",
                                    "type": "MemberCardUserInfoRequest",
                                    "name": "req_member_card_user_info",
                                    "id": 343
                                },
                                {
                                    "rule": "optional",
                                    "type": "MemberCardUserInfoResponse",
                                    "name": "res_member_card_user_info",
                                    "id": 344
                                },
                                {
                                    "rule": "optional",
                                    "type": "MemberCardInfoUpdateRequest",
                                    "name": "req_member_card_info_update",
                                    "id": 345
                                },
                                {
                                    "rule": "optional",
                                    "type": "MemberCardInfoUpdateResponse",
                                    "name": "res_member_card_info_update",
                                    "id": 346
                                },
                                {
                                    "rule": "optional",
                                    "type": "MemberInfoUpdateRequest",
                                    "name": "req_member_info_update",
                                    "id": 347
                                },
                                {
                                    "rule": "optional",
                                    "type": "MemberInfoUpdateResponse",
                                    "name": "res_member_info_update",
                                    "id": 348
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponIdUpdateRequest",
                                    "name": "req_update_coupon_id",
                                    "id": 349
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponIdUpdateResponse",
                                    "name": "res_update_coupon_id",
                                    "id": 350
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponConsumeRequest",
                                    "name": "req_coupon_consume",
                                    "id": 37
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponConsumeResponse",
                                    "name": "res_coupon_consume",
                                    "id": 38
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponDecryptRequest",
                                    "name": "req_coupon_decrypt",
                                    "id": 380
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponDecryptResponse",
                                    "name": "res_coupon_decrypt",
                                    "id": 381
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponListByCustomerRequest",
                                    "name": "req_coupon_list_by_customer",
                                    "id": 39
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponListByCustomerResponse",
                                    "name": "res_coupon_list_by_customer",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateStockUpdateRequest",
                                    "name": "req_coupon_template_stock_update",
                                    "id": 43
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateStockUpdateResponse",
                                    "name": "res_coupon_template_stock_update",
                                    "id": 44
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateDeleteRequest",
                                    "name": "req_coupon_template_delete",
                                    "id": 45
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponTemplateDeleteResponse",
                                    "name": "res_coupon_template_delete",
                                    "id": 46
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponUnavailableRequest",
                                    "name": "req_coupon_unavailable",
                                    "id": 47
                                },
                                {
                                    "rule": "optional",
                                    "type": "CouponUnavailableResponse",
                                    "name": "res_coupon_unavailable",
                                    "id": 48
                                },
                                {
                                    "rule": "optional",
                                    "type": "BeaconsApplyIdRequest",
                                    "name": "req_beacons_apply_id",
                                    "id": 49
                                },
                                {
                                    "rule": "optional",
                                    "type": "BeaconsApplyIdResponse",
                                    "name": "res_beacons_apply_id",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "BeaconsDeviceListRequest",
                                    "name": "req_beacons_device_list",
                                    "id": 61
                                },
                                {
                                    "rule": "optional",
                                    "type": "BeaconsDeviceListResponse",
                                    "name": "res_beacons_device_list",
                                    "id": 62
                                },
                                {
                                    "rule": "optional",
                                    "type": "BeaconShakeInfoRequest",
                                    "name": "req_beacon_shake_info",
                                    "id": 65
                                },
                                {
                                    "rule": "optional",
                                    "type": "BeaconShakeInfoResponse",
                                    "name": "res_beacon_shake_info",
                                    "id": 66
                                },
                                {
                                    "rule": "optional",
                                    "type": "FansInfoRequest",
                                    "name": "req_open_fansinfo_query",
                                    "id": 85
                                },
                                {
                                    "rule": "optional",
                                    "type": "FansInfoResponse",
                                    "name": "res_open_fansinfo_query",
                                    "id": 86
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetAccessTokenRequest",
                                    "name": "req_get_access_token",
                                    "id": 91
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetAccessTokenResponse",
                                    "name": "res_get_access_token",
                                    "id": 92
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryAccessTokenRequest",
                                    "name": "req_query_access_token",
                                    "id": 921
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryAccessTokenResponse",
                                    "name": "res_query_access_token",
                                    "id": 922
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetJssdkTicketRequest",
                                    "name": "req_get_jssdk_ticket",
                                    "id": 93
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetJssdkTicketResponse",
                                    "name": "res_get_jssdk_ticket",
                                    "id": 94
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetApiTicketRequest",
                                    "name": "req_get_api_ticket",
                                    "id": 95
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetApiTicketResponse",
                                    "name": "res_get_api_ticket",
                                    "id": 96
                                },
                                {
                                    "rule": "optional",
                                    "type": "EventUpdateToken",
                                    "name": "evt_update_token",
                                    "id": 97
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetJssdkSignRequest",
                                    "name": "req_get_jssdk_sign",
                                    "id": 98
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetJssdkSignResponse",
                                    "name": "res_get_jssdk_sign",
                                    "id": 99
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponApiSignRequest",
                                    "name": "req_get_coupon_api_sign",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCouponApiSignResponse",
                                    "name": "res_get_coupon_api_sign",
                                    "id": 101
                                },
                                {
                                    "rule": "optional",
                                    "type": "EventMessageFromWechat",
                                    "name": "evt_message_from_wechat",
                                    "id": 201
                                },
                                {
                                    "rule": "optional",
                                    "type": "FeedbackRequest",
                                    "name": "req_feedback_message",
                                    "id": 202
                                },
                                {
                                    "rule": "optional",
                                    "type": "FeedbackResponse",
                                    "name": "res_feedback_message",
                                    "id": 203
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    13,
                                    14,
                                    15,
                                    16,
                                    160,
                                    161,
                                    17,
                                    18,
                                    19,
                                    20,
                                    190,
                                    191,
                                    192,
                                    193,
                                    219,
                                    220,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    290,
                                    291,
                                    300,
                                    301,
                                    302,
                                    303,
                                    304,
                                    305,
                                    306,
                                    307,
                                    326,
                                    327,
                                    33,
                                    34,
                                    341,
                                    342,
                                    343,
                                    344,
                                    345,
                                    346,
                                    347,
                                    348,
                                    349,
                                    350,
                                    37,
                                    38,
                                    380,
                                    381,
                                    39,
                                    40,
                                    43,
                                    44,
                                    45,
                                    46,
                                    47,
                                    48,
                                    49,
                                    50,
                                    61,
                                    62,
                                    65,
                                    66,
                                    85,
                                    86,
                                    91,
                                    92,
                                    921,
                                    922,
                                    93,
                                    94,
                                    95,
                                    96,
                                    97,
                                    98,
                                    99,
                                    100,
                                    101,
                                    201,
                                    202,
                                    203
                                ]
                            }
                        },
                        {
                            "name": "MessageContent",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "EMediaType",
                                    "name": "type",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "resource_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "content",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "BeaconSearchCondition",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "device_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "DeviceUUID",
                                    "name": "device_uuid",
                                    "id": 11
                                }
                            ],
                            "messages": [
                                {
                                    "name": "DeviceUUID",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "uuid",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "major",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "minor",
                                            "id": 22
                                        }
                                    ]
                                }
                            ]
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
                            "name": "GroupMessageSendRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CustomerSearchCondition",
                                    "name": "customer_search_condition",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "group_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "MessageContent",
                                    "name": "message_content",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_record",
                                    "id": 15
                                }
                            ]
                        },
                        {
                            "name": "GroupMessageSendResponse",
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
                                    "name": "msg_id",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "TemplateMessageSendRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "customer_search_condition",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "template_id",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "url",
                                    "id": 17
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Content",
                                    "name": "content",
                                    "id": 18
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Content",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "key",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "value",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "color",
                                            "id": 22
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "TemplateMessageSendResponse",
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
                            "name": "GetTemplateIdLongRequest",
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
                                    "name": "template_id_short",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetTemplateIdLongResponse",
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
                                    "name": "template_id_long",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "MenuResetRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Button",
                                    "name": "button",
                                    "id": 19
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Button",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "button_type",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "button_name",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "button_key",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "button_url",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "button_image_uuid",
                                            "id": 24
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "Button",
                                            "name": "sub_button",
                                            "id": 25
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MenuResetResponse",
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
                            "name": "UserInfoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CustomerSearchCondition",
                                    "name": "customer_search_condition",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "ELanguage",
                                    "name": "language",
                                    "id": 12
                                }
                            ]
                        },
                        {
                            "name": "UserInfoResponse",
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
                                    "type": "UserInfo",
                                    "name": "result",
                                    "id": 3
                                }
                            ],
                            "messages": [
                                {
                                    "name": "UserInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "wxerrcode",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "WxResult",
                                            "name": "wxresult",
                                            "id": 11
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "WxResult",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "bool",
                                                    "name": "subscribe",
                                                    "id": 20
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "openid",
                                                    "id": 21
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "nickname",
                                                    "id": 22
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "sex",
                                                    "id": 23
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "country",
                                                    "id": 25
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "province",
                                                    "id": 26
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "city",
                                                    "id": 24
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "avatar_uuid",
                                                    "id": 28
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "uint64",
                                                    "name": "subscribe_time",
                                                    "id": 29
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "union_id",
                                                    "id": 30
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "remark",
                                                    "id": 31
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "group_id",
                                                    "id": 32
                                                },
                                                {
                                                    "rule": "repeated",
                                                    "type": "int32",
                                                    "name": "tagid_list",
                                                    "id": 33
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SyncUserInfoRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomerSearchCondition",
                                    "name": "customer_search_condition",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "ELanguage",
                                    "name": "language",
                                    "id": 12
                                }
                            ]
                        },
                        {
                            "name": "GetOpenidByCodeRequest",
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
                                    "name": "wechat_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetOpenidByCodeResponse",
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
                                    "name": "openid",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "token",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetCustInfoByCodeRequest",
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
                                    "name": "wechat_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetCustInfoByCodeResponse",
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
                                    "type": "UserInfo",
                                    "name": "result",
                                    "id": 3
                                }
                            ],
                            "messages": [
                                {
                                    "name": "UserInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "wxerrcode",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "WxResult",
                                            "name": "wxresult",
                                            "id": 11
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "WxResult",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "bool",
                                                    "name": "subscribe",
                                                    "id": 20
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "openid",
                                                    "id": 21
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "nickname",
                                                    "id": 22
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "sex",
                                                    "id": 23
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "country",
                                                    "id": 25
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "province",
                                                    "id": 26
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "city",
                                                    "id": 24
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "avatar_uuid",
                                                    "id": 28
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "union_id",
                                                    "id": 30
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SyncUserInfoResponse",
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
                                    "type": "string",
                                    "name": "openid_list",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "next_openid",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "CustomerServiceChatRecordRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "start_time",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "end_time",
                                    "id": 12
                                }
                            ]
                        },
                        {
                            "name": "CustomerServiceChatRecordResponse",
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
                                    "type": "RecordList",
                                    "name": "result",
                                    "id": 11
                                }
                            ],
                            "messages": [
                                {
                                    "name": "RecordList",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 21
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "type",
                                            "id": 22
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "text",
                                            "id": 23
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint64",
                                            "name": "time",
                                            "id": 24
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "worker",
                                            "id": 25
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GenerateQrCodeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "EStoreType",
                                    "name": "store_type",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "expire_seconds",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "scene_id",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "scene_str",
                                    "id": 14
                                }
                            ],
                            "oneofs": {
                                "scene": [
                                    13,
                                    14
                                ]
                            }
                        },
                        {
                            "name": "GenerateQrCodeResponse",
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
                                    "name": "qrcode_url",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ticket_url",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "GenerateShortUrlRequest",
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
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "GenerateShortUrlResponse",
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
                                    "name": "short_url",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "CouponTemplateCreateRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "ECouponType",
                                    "name": "coupon_type",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "BasicInfo",
                                    "name": "basic_info",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "ExtendInfo",
                                    "name": "extend_info",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "AdvancedInfo",
                                    "name": "advanced_info",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "MGroupon",
                                    "name": "message_groupon",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "MCash",
                                    "name": "message_cash",
                                    "id": 131
                                },
                                {
                                    "rule": "optional",
                                    "type": "MDiscount",
                                    "name": "message_discount",
                                    "id": 132
                                },
                                {
                                    "rule": "optional",
                                    "type": "MGift",
                                    "name": "message_gift",
                                    "id": 133
                                },
                                {
                                    "rule": "optional",
                                    "type": "MGeneralCoupon",
                                    "name": "message_general_coupon",
                                    "id": 134
                                },
                                {
                                    "rule": "optional",
                                    "type": "MMemberCard",
                                    "name": "message_member_card",
                                    "id": 135
                                }
                            ],
                            "messages": [
                                {
                                    "name": "BasicInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "logo_uuid",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "ECouponCodeType",
                                            "name": "code_type",
                                            "id": 21
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "brand_name",
                                            "id": 22
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "title",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "sub_title",
                                            "id": 24
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "color",
                                            "id": 25
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "notice",
                                            "id": 26
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "description",
                                            "id": 27
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "quantity",
                                            "id": 28
                                        },
                                        {
                                            "rule": "required",
                                            "type": "ECouponDateType",
                                            "name": "type",
                                            "id": 29
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "begin_timestamp",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "end_timestamp",
                                            "id": 31
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "fixed_term",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "fixed_begin_term",
                                            "id": 33
                                        }
                                    ],
                                    "enums": [
                                        {
                                            "name": "ECouponDateType",
                                            "values": [
                                                {
                                                    "name": "DATE_TYPE_FIX_TIME_RANGE",
                                                    "id": 1
                                                },
                                                {
                                                    "name": "DATE_TYPE_FIX_TERM",
                                                    "id": 2
                                                },
                                                {
                                                    "name": "DATE_TYPE_PERMANENT",
                                                    "id": 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "ExtendInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "use_custom_code",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "bind_customer",
                                            "id": 51
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "service_phone",
                                            "id": 52
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "int32",
                                            "name": "shop_ids",
                                            "id": 53
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "source",
                                            "id": 54
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "custom_url_name",
                                            "id": 55
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "center_title",
                                            "id": 56
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "center_sub_title",
                                            "id": 57
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "center_url",
                                            "id": 58
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "custom_url",
                                            "id": 59
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "custom_url_sub_title",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "promotion_url_name",
                                            "id": 61
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "promotion_url",
                                            "id": 62
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "promotion_url_sub_title",
                                            "id": 63
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "get_limit",
                                            "id": 64
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "can_share",
                                            "id": 65
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "can_give_friend",
                                            "id": 66
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "need_push_on_view",
                                            "id": 67
                                        }
                                    ]
                                },
                                {
                                    "name": "AdvancedInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "accept_category",
                                            "id": 101
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "reject_category",
                                            "id": 102
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "least_cost",
                                            "id": 103
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "object_use_for",
                                            "id": 104
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "can_use_with_other_discount",
                                            "id": 105
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "abstract",
                                            "id": 106
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "icon_uuid_list",
                                            "id": 107
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "TextImageList",
                                            "name": "text_image_list",
                                            "id": 108
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "EBusinessServiceType",
                                            "name": "business_service_type",
                                            "id": 111
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "TimeLimit",
                                            "name": "time_limit",
                                            "id": 112
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "TextImageList",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "image_uuid",
                                                    "id": 109
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "text",
                                                    "id": 110
                                                }
                                            ]
                                        },
                                        {
                                            "name": "TimeLimit",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "ECouponDayType",
                                                    "name": "type",
                                                    "id": 113
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "begin_hour",
                                                    "id": 114
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "begin_minute",
                                                    "id": 115
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "end_hour",
                                                    "id": 116
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "end_minute",
                                                    "id": 117
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "MGroupon",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "deal_detail",
                                            "id": 14
                                        }
                                    ]
                                },
                                {
                                    "name": "MCash",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "least_cost",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "reduce_cost",
                                            "id": 16
                                        }
                                    ]
                                },
                                {
                                    "name": "MDiscount",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "discount",
                                            "id": 17
                                        }
                                    ]
                                },
                                {
                                    "name": "MGift",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gift",
                                            "id": 18
                                        }
                                    ]
                                },
                                {
                                    "name": "MGeneralCoupon",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "default_detail",
                                            "id": 19
                                        }
                                    ]
                                },
                                {
                                    "name": "MMemberCard",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "background_pic_uuid",
                                            "id": 136
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "prerogative",
                                            "id": 137
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "auto_activate",
                                            "id": 138
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "wx_activate",
                                            "id": 139
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "supply_bonus",
                                            "id": 140
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "bonus_url",
                                            "id": 141
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "supply_balance",
                                            "id": 142
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "balance_url",
                                            "id": 143
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CustomField",
                                            "name": "custom_field",
                                            "id": 144
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "bonus_cleared",
                                            "id": 147
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "bonus_rules",
                                            "id": 148
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "balance_rules",
                                            "id": 149
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "activate_url",
                                            "id": 150
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CustomCell",
                                            "name": "custom_cell",
                                            "id": 151
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "BonusRule",
                                            "name": "bonus_rule",
                                            "id": 155
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "member_card_discount",
                                            "id": 164
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "CustomField",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "EMemberCardType",
                                                    "name": "name_type",
                                                    "id": 145
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "field_url",
                                                    "id": 146
                                                }
                                            ]
                                        },
                                        {
                                            "name": "CustomCell",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "name",
                                                    "id": 152
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "tips",
                                                    "id": 153
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "cell_url",
                                                    "id": 154
                                                }
                                            ]
                                        },
                                        {
                                            "name": "BonusRule",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "cost_money_unit",
                                                    "id": 156
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "increase_bonus",
                                                    "id": 157
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "max_increase_bonus",
                                                    "id": 158
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "init_increase_bonus",
                                                    "id": 159
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "cost_bonus_unit",
                                                    "id": 160
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "reduce_money",
                                                    "id": 161
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "least_money_to_use_bonus",
                                                    "id": 162
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "max_reduce_bonus",
                                                    "id": 163
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CouponTemplateCreateResponse",
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
                                    "name": "coupon_template_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCouponColorListRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetCouponColorListResponse",
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
                                    "type": "Colors",
                                    "name": "colors",
                                    "id": 10
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Colors",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "value",
                                            "id": 30
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ImportCouponCodeRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 20
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "coupon_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "ImportCouponCodeResponse",
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
                                    "name": "succ_code",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "fail_code",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "duplicate_code",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "GetCouponImportedCountRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetCouponImportedCountResponse",
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
                                    "name": "count",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "CheckCouponImportingRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 20
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "coupon_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "CheckCouponImportingResponse",
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
                                    "type": "string",
                                    "name": "exist_coupon_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "not_exist_coupon_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "CouponTemplateQueryRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "CouponTemplateQueryResponse",
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
                                            "rule": "required",
                                            "type": "ECouponTemplateStatus",
                                            "name": "status",
                                            "id": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MemberCardInterfaceActiveRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "coupon_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "membership_number",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "background_pic_uuid",
                                    "id": 42
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "activate_begin_time",
                                    "id": 44
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "activate_end_time",
                                    "id": 46
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "init_bonus",
                                    "id": 48
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "init_bonus_record",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "init_balance",
                                    "id": 52
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "init_custom_field_value",
                                    "id": 60
                                }
                            ]
                        },
                        {
                            "name": "MemberCardInterfaceActiveResponse",
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
                            "name": "CouponTemplateGenerateQrCodeRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Coupon",
                                    "name": "coupon",
                                    "id": 12
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Coupon",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "coupon_id",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "coupon_template_id",
                                            "id": 31
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CustomerSearchCondition",
                                            "name": "customer_search_condition",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "expire_seconds",
                                            "id": 33
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "is_unique_code",
                                            "id": 34
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "outer_id",
                                            "id": 35
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CouponTemplateGenerateQrCodeResponse",
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
                                    "name": "qrcode_url",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "CouponMemberCardActivateFormRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "ServiceStatement",
                                    "name": "service_statement",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "BindOldCard",
                                    "name": "bind_old_card",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "RequiredForm",
                                    "name": "required_form",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "OptionalForm",
                                    "name": "optional_form",
                                    "id": 5
                                }
                            ],
                            "messages": [
                                {
                                    "name": "ServiceStatement",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "name",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "url",
                                            "id": 21
                                        }
                                    ]
                                },
                                {
                                    "name": "BindOldCard",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "name",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "url",
                                            "id": 31
                                        }
                                    ]
                                },
                                {
                                    "name": "RequiredForm",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "EMemberCardCommonFieldType",
                                            "name": "common_field_id_list",
                                            "id": 40
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "RichFieldList",
                                            "name": "rich_field_list",
                                            "id": 41
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "RichFieldList",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "EFormFieldType",
                                                    "name": "type",
                                                    "id": 42
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "name",
                                                    "id": 43
                                                },
                                                {
                                                    "rule": "repeated",
                                                    "type": "string",
                                                    "name": "values",
                                                    "id": 44
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "OptionalForm",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "EMemberCardCommonFieldType",
                                            "name": "common_field_id_list",
                                            "id": 50
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "custom_field_list",
                                            "id": 51
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CouponMemberCardActivateFormResponse",
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
                            "name": "MemberCardUserInfoRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "coupon_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "MemberCardUserInfoResponse",
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
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "nickname",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "membership_number",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "bonus",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "balance",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "sex",
                                            "id": 15
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "FieldList",
                                            "name": "common_field_list",
                                            "id": 16
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "FieldList",
                                            "name": "custom_field_list",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ECouponStatus",
                                            "name": "user_card_status",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "has_active",
                                            "id": 19
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "FieldList",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "name",
                                                    "id": 40
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "value",
                                                    "id": 41
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MemberCardInfoUpdateRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "BasicInfo",
                                    "name": "basic_info",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "ExtendInfo",
                                    "name": "extend_info",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "MGroupon",
                                    "name": "message_groupon",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "MCash",
                                    "name": "message_cash",
                                    "id": 131
                                },
                                {
                                    "rule": "optional",
                                    "type": "MDiscount",
                                    "name": "message_discount",
                                    "id": 132
                                },
                                {
                                    "rule": "optional",
                                    "type": "MGift",
                                    "name": "message_gift",
                                    "id": 133
                                },
                                {
                                    "rule": "optional",
                                    "type": "MGeneralCoupon",
                                    "name": "message_general_coupon",
                                    "id": 134
                                },
                                {
                                    "rule": "optional",
                                    "type": "MMemberCard",
                                    "name": "message_member_card",
                                    "id": 135
                                }
                            ],
                            "messages": [
                                {
                                    "name": "BasicInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "logo_uuid",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ECouponCodeType",
                                            "name": "code_type",
                                            "id": 21
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "title",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "sub_title",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "color",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "notice",
                                            "id": 26
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "description",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ECouponDateType",
                                            "name": "type",
                                            "id": 29
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "begin_timestamp",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "end_timestamp",
                                            "id": 31
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "fixed_term",
                                            "id": 32
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "fixed_begin_term",
                                            "id": 33
                                        }
                                    ],
                                    "enums": [
                                        {
                                            "name": "ECouponDateType",
                                            "values": [
                                                {
                                                    "name": "DATE_TYPE_FIX_TIME_RANGE",
                                                    "id": 1
                                                },
                                                {
                                                    "name": "DATE_TYPE_FIX_TERM",
                                                    "id": 2
                                                },
                                                {
                                                    "name": "DATE_TYPE_PERMANENT",
                                                    "id": 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "ExtendInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "bind_customer",
                                            "id": 51
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "service_phone",
                                            "id": 52
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "int32",
                                            "name": "shop_ids",
                                            "id": 53
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "source",
                                            "id": 54
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "custom_url_name",
                                            "id": 55
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "center_title",
                                            "id": 56
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "center_sub_title",
                                            "id": 57
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "center_url",
                                            "id": 58
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "custom_url",
                                            "id": 59
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "custom_url_sub_title",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "promotion_url_name",
                                            "id": 61
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "promotion_url",
                                            "id": 62
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "promotion_url_sub_title",
                                            "id": 63
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "get_limit",
                                            "id": 64
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "can_share",
                                            "id": 65
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "can_give_friend",
                                            "id": 66
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "need_push_on_view",
                                            "id": 67
                                        }
                                    ]
                                },
                                {
                                    "name": "MGroupon",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "deal_detail",
                                            "id": 14
                                        }
                                    ]
                                },
                                {
                                    "name": "MCash",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "least_cost",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "reduce_cost",
                                            "id": 16
                                        }
                                    ]
                                },
                                {
                                    "name": "MDiscount",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "discount",
                                            "id": 17
                                        }
                                    ]
                                },
                                {
                                    "name": "MGift",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gift",
                                            "id": 18
                                        }
                                    ]
                                },
                                {
                                    "name": "MGeneralCoupon",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "default_detail",
                                            "id": 19
                                        }
                                    ]
                                },
                                {
                                    "name": "MMemberCard",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "background_pic_uuid",
                                            "id": 136
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "prerogative",
                                            "id": 137
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "auto_activate",
                                            "id": 138
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "wx_activate",
                                            "id": 139
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "supply_bonus",
                                            "id": 140
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "bonus_url",
                                            "id": 141
                                        },
                                        {
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "supply_balance",
                                            "id": 142
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "CustomField",
                                            "name": "custom_field",
                                            "id": 144
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "bonus_cleared",
                                            "id": 147
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "bonus_rules",
                                            "id": 148
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "balance_rules",
                                            "id": 149
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "activate_url",
                                            "id": 150
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CustomCell",
                                            "name": "custom_cell",
                                            "id": 151
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "BonusRule",
                                            "name": "bonus_rule",
                                            "id": 155
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "member_card_discount",
                                            "id": 164
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "CustomField",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "EMemberCardType",
                                                    "name": "name_type",
                                                    "id": 145
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "field_url",
                                                    "id": 146
                                                }
                                            ]
                                        },
                                        {
                                            "name": "CustomCell",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "name",
                                                    "id": 152
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "tips",
                                                    "id": 153
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "cell_url",
                                                    "id": 154
                                                }
                                            ]
                                        },
                                        {
                                            "name": "BonusRule",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "cost_money_unit",
                                                    "id": 156
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "increase_bonus",
                                                    "id": 157
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "max_increase_bonus",
                                                    "id": 158
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "init_increase_bonus",
                                                    "id": 159
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "cost_bonus_unit",
                                                    "id": 160
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "reduce_money",
                                                    "id": 161
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "least_money_to_use_bonus",
                                                    "id": 162
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "max_reduce_bonus",
                                                    "id": 163
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MemberCardInfoUpdateResponse",
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
                                            "rule": "required",
                                            "type": "bool",
                                            "name": "send_check",
                                            "id": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MemberInfoUpdateRequest",
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
                                    "name": "coupon_id",
                                    "id": 15
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "coupon_template_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "background_pic_uuid",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "bonus",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "add_bonus",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "record_bonus",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "balance",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "add_balance",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "record_balance",
                                    "id": 34
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CustomField",
                                    "name": "custom_field",
                                    "id": 36
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_notify_bonus",
                                    "id": 38
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_notify_balance",
                                    "id": 40
                                }
                            ],
                            "messages": [
                                {
                                    "name": "CustomField",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "field",
                                            "id": 98
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "is_notify_custom_field",
                                            "id": 99
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MemberInfoUpdateResponse",
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
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "result_bonus",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "result_balance",
                                            "id": 12
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CouponIdUpdateRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "coupon_id",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "new_coupon_id",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "CouponIdUpdateResponse",
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
                            "name": "CouponConsumeRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "coupon_id",
                                    "id": 12
                                }
                            ]
                        },
                        {
                            "name": "CouponConsumeResponse",
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
                                    "type": "CustomerSearchCondition",
                                    "name": "customer_search_condition",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "coupon_template_id",
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "CouponDecryptRequest",
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
                                    "name": "encrypt_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "CouponDecryptResponse",
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
                                    "name": "coupon_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "CouponListByCustomerRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "customer_search_condition",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "coupon_template_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "CouponListByCustomerResponse",
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
                                            "rule": "required",
                                            "type": "CouponList",
                                            "name": "coupon_list",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "has_share_card",
                                            "id": 50
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "CouponList",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "coupon_id",
                                                    "id": 20
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "coupon_template_id",
                                                    "id": 21
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CouponTemplateStockUpdateRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "change_value",
                                    "id": 12
                                }
                            ]
                        },
                        {
                            "name": "CouponTemplateStockUpdateResponse",
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
                            "name": "CouponTemplateDeleteRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "CouponTemplateDeleteResponse",
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
                            "name": "CouponUnavailableRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "coupon_id",
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "CouponUnavailableResponse",
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
                            "name": "BeaconsApplyIdRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "quantity",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "apply_reason",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "comment",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "shop_id",
                                    "id": 14
                                }
                            ]
                        },
                        {
                            "name": "BeaconsApplyIdResponse",
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
                                    "name": "apply_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "EApplyStatus",
                                    "name": "apply_status",
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "BeaconsDeviceListRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "QueryType",
                                    "name": "query_type",
                                    "id": 11
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ByDeviceIdentifiers",
                                    "name": "by_device_identifiers",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "ByPageQuery",
                                    "name": "by_page_query",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "ByApplyId",
                                    "name": "by_apply_id",
                                    "id": 14
                                }
                            ],
                            "messages": [
                                {
                                    "name": "ByDeviceIdentifiers",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "device_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "device_uuid",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "device_major",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "device_minor",
                                            "id": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "ByPageQuery",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "begin",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "count",
                                            "id": 21
                                        }
                                    ]
                                },
                                {
                                    "name": "ByApplyId",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "apply_id",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "begin",
                                            "id": 21
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "count",
                                            "id": 22
                                        }
                                    ]
                                }
                            ],
                            "enums": [
                                {
                                    "name": "QueryType",
                                    "values": [
                                        {
                                            "name": "BY_DEVICE_ID",
                                            "id": 1
                                        },
                                        {
                                            "name": "BY_PAGE_NUM",
                                            "id": 2
                                        },
                                        {
                                            "name": "BY_APPLY_ID",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "BeaconsDeviceListResponse",
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
                                            "type": "Devices",
                                            "name": "devices",
                                            "id": 10
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "total_count",
                                            "id": 11
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "Devices",
                                            "fields": [
                                                {
                                                    "rule": "required",
                                                    "type": "int32",
                                                    "name": "device_id",
                                                    "id": 20
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "device_uuid",
                                                    "id": 21
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "int32",
                                                    "name": "device_major",
                                                    "id": 22
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "int32",
                                                    "name": "device_minor",
                                                    "id": 23
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "bool",
                                                    "name": "status",
                                                    "id": 24
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "uint64",
                                                    "name": "last_active_time",
                                                    "id": 25
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "shop_id",
                                                    "id": 26
                                                },
                                                {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "name": "comment",
                                                    "id": 27
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "BeaconShakeInfoRequest",
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
                                    "name": "shake_ticket",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_need_shop",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "BeaconShakeInfoResponse",
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
                                            "rule": "required",
                                            "type": "double",
                                            "name": "device_distance",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "device_uuid",
                                            "id": 21
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "device_major",
                                            "id": 22
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "device_minor",
                                            "id": 23
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 24
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "page_id",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "shop_id",
                                            "id": 26
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "FansInfoRequest",
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
                                    "name": "app_id",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "CustomerSearchCondition",
                                    "name": "customer_search_condition",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "ELanguage",
                                    "name": "language",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "FansInfoResponse",
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
                                    "type": "FansInfo",
                                    "name": "result",
                                    "id": 3
                                }
                            ],
                            "messages": [
                                {
                                    "name": "FansInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "nickname",
                                            "id": 22
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "sex",
                                            "id": 23
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "language",
                                            "id": 24
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "country",
                                            "id": 25
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "province",
                                            "id": 26
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "city",
                                            "id": 27
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "avatar_uuid",
                                            "id": 28
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "union_id",
                                            "id": 30
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetAccessTokenRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "GetAccessTokenResponse",
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
                                    "name": "access_token",
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
                            "name": "QueryAccessTokenRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "QueryAccessTokenResponse",
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
                                    "name": "access_token",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "expires_in",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetJssdkTicketRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "GetJssdkTicketResponse",
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
                                    "name": "jssdk_ticket",
                                    "id": 4
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
                            "name": "GetApiTicketRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "GetApiTicketResponse",
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
                                    "name": "api_ticket",
                                    "id": 5
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
                            "name": "GetJssdkSignRequest",
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
                                    "name": "url",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetJssdkSignResponse",
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
                                    "id": 10
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Result",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "appid",
                                            "id": 15
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "sign",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "nonce_str",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "timestamp",
                                            "id": 40
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetCouponApiSignRequest",
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
                                    "name": "coupon_template_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "coupon_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "wechat_open_id",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "GetCouponApiSignResponse",
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
                                    "id": 10
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Result",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "sign",
                                            "id": 20
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "nonce_str",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint64",
                                            "name": "timestamp",
                                            "id": 40
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "EventMessageFromWechat",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "rpc_name",
                                    "id": 8
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "evt_id",
                                    "id": 9
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "EMsgType",
                                    "name": "msg_type",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "EEventType",
                                    "name": "event_type",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "content",
                                    "id": 15
                                }
                            ]
                        },
                        {
                            "name": "FeedbackRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "evt_id",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "MessageContent",
                                    "name": "message_content",
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "FeedbackResponse",
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
                        }
                    ],
                    "enums": [
                        {
                            "name": "EMediaType",
                            "values": [
                                {
                                    "name": "NEWS",
                                    "id": 1
                                },
                                {
                                    "name": "TEXT",
                                    "id": 2
                                },
                                {
                                    "name": "VOICE",
                                    "id": 3
                                },
                                {
                                    "name": "MUSIC",
                                    "id": 4
                                },
                                {
                                    "name": "IMAGE",
                                    "id": 5
                                },
                                {
                                    "name": "VIDEO",
                                    "id": 6
                                },
                                {
                                    "name": "THUMB",
                                    "id": 7
                                },
                                {
                                    "name": "WXCARD",
                                    "id": 8
                                },
                                {
                                    "name": "MPNEWS",
                                    "id": 9
                                },
                                {
                                    "name": "SERVICE",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "EMsgType",
                            "values": [
                                {
                                    "name": "MSG_TEXT",
                                    "id": 1
                                },
                                {
                                    "name": "MSG_IMAGE",
                                    "id": 2
                                },
                                {
                                    "name": "MSG_VOICE",
                                    "id": 3
                                },
                                {
                                    "name": "MSG_VIDEO",
                                    "id": 4
                                },
                                {
                                    "name": "MSG_SHORTVIDEO",
                                    "id": 5
                                },
                                {
                                    "name": "MSG_LOCATION",
                                    "id": 6
                                },
                                {
                                    "name": "MSG_LINK",
                                    "id": 7
                                },
                                {
                                    "name": "MSG_EVENT",
                                    "id": 8
                                },
                                {
                                    "name": "MSG_NEWS",
                                    "id": 9
                                },
                                {
                                    "name": "MSG_MUSIC",
                                    "id": 10
                                },
                                {
                                    "name": "MSG_BEACON",
                                    "id": 11
                                },
                                {
                                    "name": "MSG_RESOURCE",
                                    "id": 12
                                }
                            ]
                        },
                        {
                            "name": "EEventType",
                            "values": [
                                {
                                    "name": "SUBSCRIBE",
                                    "id": 1
                                },
                                {
                                    "name": "UNSUBSCRIBE",
                                    "id": 2
                                },
                                {
                                    "name": "QRSCAN",
                                    "id": 3
                                },
                                {
                                    "name": "LOCATION",
                                    "id": 4
                                },
                                {
                                    "name": "CLICK",
                                    "id": 5
                                },
                                {
                                    "name": "VIEW",
                                    "id": 6
                                },
                                {
                                    "name": "SCANCODE_PUSH",
                                    "id": 7
                                },
                                {
                                    "name": "SCANCODE_WAITMSG",
                                    "id": 8
                                },
                                {
                                    "name": "PIC_SYSPHOTO",
                                    "id": 9
                                },
                                {
                                    "name": "PIC_PHOTO_OR_ALBUM",
                                    "id": 10
                                },
                                {
                                    "name": "PIC_WEIXIN",
                                    "id": 11
                                },
                                {
                                    "name": "LOCATION_SELECT",
                                    "id": 12
                                },
                                {
                                    "name": "MASSSENDJOBFINISH",
                                    "id": 13
                                },
                                {
                                    "name": "TEMPLATESENDJOBFINISH",
                                    "id": 14
                                },
                                {
                                    "name": "CARD_PASS_CHECK",
                                    "id": 15
                                },
                                {
                                    "name": "CARD_NOT_PASS_CHECK",
                                    "id": 16
                                },
                                {
                                    "name": "USER_GET_CARD",
                                    "id": 17
                                },
                                {
                                    "name": "USER_DEL_CARD",
                                    "id": 18
                                },
                                {
                                    "name": "USER_CONSUME_CARD",
                                    "id": 19
                                },
                                {
                                    "name": "USER_PAY_FROM_PAY_CELL",
                                    "id": 20
                                },
                                {
                                    "name": "USER_VIEW_CARD",
                                    "id": 21
                                },
                                {
                                    "name": "USER_ENTER_SESSION_FROM_CARD",
                                    "id": 22
                                },
                                {
                                    "name": "UPDATE_MEMBER_CARD",
                                    "id": 23
                                },
                                {
                                    "name": "CARD_SKU_REMIND",
                                    "id": 24
                                },
                                {
                                    "name": "POI_CHECK_NOTIFY",
                                    "id": 25
                                },
                                {
                                    "name": "SHAKEAROUNDUSERSHAKE",
                                    "id": 26
                                },
                                {
                                    "name": "SHAKEAROUNDLOTTERYBIND",
                                    "id": 27
                                },
                                {
                                    "name": "WIFICONNECTED",
                                    "id": 28
                                },
                                {
                                    "name": "QUALIFICATION_VERIFY_SUCCESS",
                                    "id": 29
                                },
                                {
                                    "name": "QUALIFICATION_VERIFY_FAIL",
                                    "id": 30
                                },
                                {
                                    "name": "NAMING_VERIFY_SUCCESS",
                                    "id": 31
                                },
                                {
                                    "name": "NAMING_VERIFY_FAIL",
                                    "id": 32
                                },
                                {
                                    "name": "ANNUAL_RENEW",
                                    "id": 33
                                },
                                {
                                    "name": "VERIFY_EXPIRED",
                                    "id": 34
                                },
                                {
                                    "name": "CARD_PAY_ORDER",
                                    "id": 35
                                },
                                {
                                    "name": "SUBMIT_MEMBERCARD_USER_INFO",
                                    "id": 36
                                },
                                {
                                    "name": "USER_GIFTING_CARD",
                                    "id": 37
                                }
                            ]
                        },
                        {
                            "name": "EStoreType",
                            "values": [
                                {
                                    "name": "TEMPORARY",
                                    "id": 1
                                },
                                {
                                    "name": "PERMANENT",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ELanguage",
                            "values": [
                                {
                                    "name": "EN",
                                    "id": 1
                                },
                                {
                                    "name": "CN",
                                    "id": 2
                                },
                                {
                                    "name": "TW",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "ECouponType",
                            "values": [
                                {
                                    "name": "GROUPON",
                                    "id": 1
                                },
                                {
                                    "name": "CASH",
                                    "id": 2
                                },
                                {
                                    "name": "DISCOUNT",
                                    "id": 3
                                },
                                {
                                    "name": "GIFT",
                                    "id": 4
                                },
                                {
                                    "name": "GENERAL_COUPON",
                                    "id": 5
                                },
                                {
                                    "name": "MEMBER_CARD",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "ECouponCodeType",
                            "values": [
                                {
                                    "name": "CODE_TYPE_TEXT",
                                    "id": 1
                                },
                                {
                                    "name": "CODE_TYPE_BARCODE",
                                    "id": 2
                                },
                                {
                                    "name": "CODE_TYPE_QRCODE",
                                    "id": 3
                                },
                                {
                                    "name": "CODE_TYPE_ONLY_QRCODE",
                                    "id": 4
                                },
                                {
                                    "name": "CODE_TYPE_ONLY_BARCODE",
                                    "id": 5
                                },
                                {
                                    "name": "CODE_TYPE_NONE",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "ECouponStatus",
                            "values": [
                                {
                                    "name": "NORMAL",
                                    "id": 1
                                },
                                {
                                    "name": "CONSUMED",
                                    "id": 2
                                },
                                {
                                    "name": "EXPIRE",
                                    "id": 3
                                },
                                {
                                    "name": "GIFTING",
                                    "id": 4
                                },
                                {
                                    "name": "GIFT_TIMEOUT",
                                    "id": 5
                                },
                                {
                                    "name": "DELETED",
                                    "id": 6
                                },
                                {
                                    "name": "UNAVAILABLE",
                                    "id": 7
                                },
                                {
                                    "name": "INVALID_SERIAL_CODE",
                                    "id": 8
                                },
                                {
                                    "name": "GIFT_SUCC",
                                    "id": 9
                                }
                            ]
                        },
                        {
                            "name": "EApplyStatus",
                            "values": [
                                {
                                    "name": "FAILURE",
                                    "id": 0
                                },
                                {
                                    "name": "CHECKING",
                                    "id": 1
                                },
                                {
                                    "name": "SUCCESS",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ETokenType",
                            "values": [
                                {
                                    "name": "ACCESS_TOKEN",
                                    "id": 1
                                },
                                {
                                    "name": "JSSDK_TICKET",
                                    "id": 2
                                },
                                {
                                    "name": "API_TICKET",
                                    "id": 3
                                }
                            ]
                        },
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
                            "name": "EBusinessServiceType",
                            "values": [
                                {
                                    "name": "BIZ_SERVICE_DELIVER",
                                    "id": 1
                                },
                                {
                                    "name": "BIZ_SERVICE_FREE_PARK",
                                    "id": 2
                                },
                                {
                                    "name": "BIZ_SERVICE_WITH_PET",
                                    "id": 3
                                },
                                {
                                    "name": "BIZ_SERVICE_FREE_WIFI",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ECouponDayType",
                            "values": [
                                {
                                    "name": "MONDAY",
                                    "id": 1
                                },
                                {
                                    "name": "TUESDAY",
                                    "id": 2
                                },
                                {
                                    "name": "WEDNESDAY",
                                    "id": 3
                                },
                                {
                                    "name": "THURSDAY",
                                    "id": 4
                                },
                                {
                                    "name": "FRIDAY",
                                    "id": 5
                                },
                                {
                                    "name": "SATURDAY",
                                    "id": 6
                                },
                                {
                                    "name": "SUNDAY",
                                    "id": 7
                                },
                                {
                                    "name": "HOLIDAY",
                                    "id": 8
                                }
                            ]
                        },
                        {
                            "name": "EMemberCardType",
                            "values": [
                                {
                                    "name": "FIELD_NAME_TYPE_LEVEL",
                                    "id": 1
                                },
                                {
                                    "name": "FIELD_NAME_TYPE_COUPON",
                                    "id": 2
                                },
                                {
                                    "name": "FIELD_NAME_TYPE_STAMP",
                                    "id": 3
                                },
                                {
                                    "name": "FIELD_NAME_TYPE_DISCOUNT",
                                    "id": 4
                                },
                                {
                                    "name": "FIELD_NAME_TYPE_ACHIEVEMEN",
                                    "id": 5
                                },
                                {
                                    "name": "FIELD_NAME_TYPE_MILEAGE",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "EMemberCardCommonFieldType",
                            "values": [
                                {
                                    "name": "USER_FORM_INFO_FLAG_MOBILE",
                                    "id": 1
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_SEX",
                                    "id": 2
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_NAME",
                                    "id": 3
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_BIRTHDAY",
                                    "id": 4
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_IDCARD",
                                    "id": 5
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_EMAIL",
                                    "id": 6
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_LOCATION",
                                    "id": 7
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_EDUCATION_BACKGRO",
                                    "id": 8
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_CAREER",
                                    "id": 9
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_INDUSTRY",
                                    "id": 10
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_INCOME",
                                    "id": 11
                                },
                                {
                                    "name": "USER_FORM_INFO_FLAG_HABIT",
                                    "id": 12
                                }
                            ]
                        },
                        {
                            "name": "EFormFieldType",
                            "values": [
                                {
                                    "name": "FORM_FIELD_RADIO",
                                    "id": 1
                                },
                                {
                                    "name": "FORM_FIELD_SELECT",
                                    "id": 2
                                },
                                {
                                    "name": "FORM_FIELD_CHECK_BOX",
                                    "id": 3
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
}).build();