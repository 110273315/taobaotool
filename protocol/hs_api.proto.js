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
            "name": "hotspot",
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
                            "type": "HeartbeatRequest",
                            "name": "req_heartbeat",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "HeartbeatResponse",
                            "name": "res_heartbeat",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "RegisterTerminalRequest",
                            "name": "req_register_terminal",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "RegisterTerminalResponse",
                            "name": "res_register_terminal",
                            "id": 21
                        },
                        {
                            "rule": "optional",
                            "type": "GetTerminalInfoRequest",
                            "name": "req_get_terminal_info",
                            "id": 22
                        },
                        {
                            "rule": "optional",
                            "type": "GetTerminalInfoResponse",
                            "name": "res_get_terminal_info",
                            "id": 23
                        },
                        {
                            "rule": "optional",
                            "type": "LoginRequest",
                            "name": "req_login",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "LoginResponse",
                            "name": "res_login",
                            "id": 31
                        },
                        {
                            "rule": "optional",
                            "type": "LogoutRequest",
                            "name": "req_logout",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_logout",
                            "id": 41
                        },
                        {
                            "rule": "optional",
                            "type": "ChangePasswordRequest",
                            "name": "req_change_password",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_change_password",
                            "id": 51
                        },
                        {
                            "rule": "optional",
                            "type": "GetWechatQRUrlRequest",
                            "name": "req_get_wechat_qr_url",
                            "id": 52
                        },
                        {
                            "rule": "optional",
                            "type": "GetWechatQRUrlResponse",
                            "name": "res_get_wechat_qr_url",
                            "id": 53
                        },
                        {
                            "rule": "optional",
                            "type": "SetTempDataRequest",
                            "name": "req_set_temp_data",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "SetTempDataResponse",
                            "name": "res_set_temp_data",
                            "id": 61
                        },
                        {
                            "rule": "optional",
                            "type": "GetTempDataRequest",
                            "name": "req_get_temp_data",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "GetTempDataResponse",
                            "name": "res_get_temp_data",
                            "id": 71
                        },
                        {
                            "rule": "optional",
                            "type": "UpdateBoothInfoRequest",
                            "name": "req_update_booth_info",
                            "id": 80
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_update_booth_info",
                            "id": 81
                        },
                        {
                            "rule": "optional",
                            "type": "GetCardInfoRequest",
                            "name": "req_get_card_info",
                            "id": 82
                        },
                        {
                            "rule": "optional",
                            "type": "GetCardInfoResponse",
                            "name": "res_get_card_info",
                            "id": 83
                        },
                        {
                            "rule": "optional",
                            "type": "GetShopBoothListRequest",
                            "name": "req_get_shop_booth_list",
                            "id": 85
                        },
                        {
                            "rule": "optional",
                            "type": "GetShopBoothListResponse",
                            "name": "res_get_shop_booth_list",
                            "id": 86
                        },
                        {
                            "rule": "optional",
                            "type": "GetTenantShopListRequest",
                            "name": "req_get_tenant_shop_list",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "GetTenantShopListResponse",
                            "name": "res_get_tenant_shop_list",
                            "id": 91
                        },
                        {
                            "rule": "optional",
                            "type": "GetInvoiceHistoryRequest",
                            "name": "req_query_invoice_history",
                            "id": 92
                        },
                        {
                            "rule": "optional",
                            "type": "GetInvoiceHistoryResponse",
                            "name": "res_query_invoice_history",
                            "id": 93
                        },
                        {
                            "rule": "optional",
                            "type": "InvoiceRequest",
                            "name": "req_invoice",
                            "id": 94
                        },
                        {
                            "rule": "optional",
                            "type": "InvoiceResponse",
                            "name": "res_invoice",
                            "id": 95
                        },
                        {
                            "rule": "optional",
                            "type": "GetCardUrlRequest",
                            "name": "req_get_card_url",
                            "id": 96
                        },
                        {
                            "rule": "optional",
                            "type": "GetCardUrlResponse",
                            "name": "res_get_card_url",
                            "id": 97
                        },
                        {
                            "rule": "optional",
                            "type": "GetTradeHistoryRequest",
                            "name": "req_get_trade_history",
                            "id": 98
                        },
                        {
                            "rule": "optional",
                            "type": "GetTradeHistoryResponse",
                            "name": "res_get_trade_history",
                            "id": 99
                        },
                        {
                            "rule": "optional",
                            "type": "PaymentRequest",
                            "name": "req_payment",
                            "id": 100
                        },
                        {
                            "rule": "optional",
                            "type": "PaymentResponse",
                            "name": "res_payment",
                            "id": 101
                        },
                        {
                            "rule": "optional",
                            "type": "PaymentCancelRequest",
                            "name": "req_payment_cancel",
                            "id": 110
                        },
                        {
                            "rule": "optional",
                            "type": "PaymentCancelResponse",
                            "name": "res_payment_cancel",
                            "id": 111
                        },
                        {
                            "rule": "optional",
                            "type": "SearchCustomerRequest",
                            "name": "req_search_customer",
                            "id": 120
                        },
                        {
                            "rule": "optional",
                            "type": "SearchCustomerResponse",
                            "name": "res_search_customer",
                            "id": 121
                        },
                        {
                            "rule": "optional",
                            "type": "UpdateTerminalInfoRequest",
                            "name": "req_update_terminal_info",
                            "id": 130
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_update_terminal_info",
                            "id": 131
                        },
                        {
                            "rule": "optional",
                            "type": "BindBoothDeviceRequest",
                            "name": "req_bind_booth_device",
                            "id": 132
                        },
                        {
                            "rule": "optional",
                            "type": "BindBoothDeviceResponse",
                            "name": "res_bind_booth_device",
                            "id": 133
                        },
                        {
                            "rule": "optional",
                            "type": "CreateCardRequest",
                            "name": "req_create_card",
                            "id": 140
                        },
                        {
                            "rule": "optional",
                            "type": "CreateCardResponse",
                            "name": "res_create_card",
                            "id": 141
                        },
                        {
                            "rule": "optional",
                            "type": "ActivateCardRequest",
                            "name": "req_activate_card",
                            "id": 142
                        },
                        {
                            "rule": "optional",
                            "type": "ActivateCardResponse",
                            "name": "res_activate_card",
                            "id": 143
                        },
                        {
                            "rule": "optional",
                            "type": "ChargeBudgetRequest",
                            "name": "req_charge_budget",
                            "id": 150
                        },
                        {
                            "rule": "optional",
                            "type": "ChargeBudgetResponse",
                            "name": "res_charge_budget",
                            "id": 151
                        },
                        {
                            "rule": "optional",
                            "type": "ChargeRequest",
                            "name": "req_charge",
                            "id": 160
                        },
                        {
                            "rule": "optional",
                            "type": "ChargeResponse",
                            "name": "res_charge",
                            "id": 161
                        },
                        {
                            "rule": "optional",
                            "type": "ChargeCancelRequest",
                            "name": "req_cancel_charge",
                            "id": 162
                        },
                        {
                            "rule": "optional",
                            "type": "ChargeCancelResponse",
                            "name": "res_cancel_charge",
                            "id": 163
                        },
                        {
                            "rule": "optional",
                            "type": "RefundBudgetRequest",
                            "name": "req_refund_budget",
                            "id": 170
                        },
                        {
                            "rule": "optional",
                            "type": "RefundBudgetResponse",
                            "name": "res_refund_budget",
                            "id": 171
                        },
                        {
                            "rule": "optional",
                            "type": "RefundRequest",
                            "name": "req_refund",
                            "id": 180
                        },
                        {
                            "rule": "optional",
                            "type": "RefundResponse",
                            "name": "res_refund",
                            "id": 181
                        },
                        {
                            "rule": "optional",
                            "type": "ReplacementCardRequest",
                            "name": "req_replacement_card",
                            "id": 190
                        },
                        {
                            "rule": "optional",
                            "type": "ReplacementCardResponse",
                            "name": "res_replacement_card",
                            "id": 191
                        },
                        {
                            "rule": "optional",
                            "type": "CardLostRequest",
                            "name": "req_card_lost",
                            "id": 200
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_card_lost",
                            "id": 201
                        },
                        {
                            "rule": "optional",
                            "type": "CardRetrieveRequest",
                            "name": "req_card_retrieve",
                            "id": 210
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_card_retrieve",
                            "id": 211
                        },
                        {
                            "rule": "optional",
                            "type": "AddStaffRequest",
                            "name": "req_add_staff",
                            "id": 220
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_add_staff",
                            "id": 230
                        },
                        {
                            "rule": "optional",
                            "type": "UpdateStaffRequest",
                            "name": "req_update_staff",
                            "id": 240
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_update_staff",
                            "id": 241
                        },
                        {
                            "rule": "optional",
                            "type": "QueryStaffListRequest",
                            "name": "req_query_staff_list",
                            "id": 250
                        },
                        {
                            "rule": "optional",
                            "type": "QueryStaffListResponse",
                            "name": "res_query_staff_list",
                            "id": 251
                        },
                        {
                            "rule": "optional",
                            "type": "SendSMSAuthCodeRequest",
                            "name": "req_send_sms_auth_code",
                            "id": 260
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_send_sms_auth_code_request",
                            "id": 261
                        },
                        {
                            "rule": "optional",
                            "type": "VerifySMSAuthCodeRequest",
                            "name": "req_verify_sms_auth_code",
                            "id": 270
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_verify_sms_auth_code_request",
                            "id": 271
                        },
                        {
                            "rule": "optional",
                            "type": "QueryBoothPaymentReportRequest",
                            "name": "req_query_booth_payment_rpt",
                            "id": 275
                        },
                        {
                            "rule": "optional",
                            "type": "QueryBoothPaymentReportResponse",
                            "name": "res_query_booth_payment_rpt",
                            "id": 276
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopReportDayRequest",
                            "name": "req_query_shop_rpt_day",
                            "id": 280
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopReportDayResponse",
                            "name": "res_query_shop_rpt_day",
                            "id": 281
                        },
                        {
                            "rule": "optional",
                            "type": "SetShopRelatedInfoRequest",
                            "name": "req_set_shop_related_info",
                            "id": 285
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_set_shop_related_info",
                            "id": 286
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopRelatedInfoRequest",
                            "name": "req_query_shop_related_info",
                            "id": 290
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopRelatedInfoResponse",
                            "name": "res_query_shop_related_info",
                            "id": 291
                        },
                        {
                            "rule": "optional",
                            "type": "TakeoutQueryOrderRequest",
                            "name": "req_takeout_query_order",
                            "id": 600
                        },
                        {
                            "rule": "optional",
                            "type": "TakeoutQueryOrderResponse",
                            "name": "res_takeout_query_order",
                            "id": 601
                        },
                        {
                            "rule": "optional",
                            "type": "TakeoutAcceptOrderRequest",
                            "name": "req_takeout_accept_order",
                            "id": 610
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_takeout_accept_order",
                            "id": 611
                        },
                        {
                            "rule": "optional",
                            "type": "TakeoutRejectOrderRequest",
                            "name": "req_takeout_reject_order",
                            "id": 620
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_takeout_reject_order",
                            "id": 621
                        },
                        {
                            "rule": "optional",
                            "type": "TakeoutSendOrderRequest",
                            "name": "req_takeout_send_order",
                            "id": 630
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_takeout_send_order",
                            "id": 631
                        },
                        {
                            "rule": "optional",
                            "type": "WXRegisterCustomerReqeust",
                            "name": "req_wx_register_customer",
                            "id": 300
                        },
                        {
                            "rule": "optional",
                            "type": "WXRegisterCustomerResponse",
                            "name": "res_wx_register_customer",
                            "id": 301
                        },
                        {
                            "rule": "optional",
                            "type": "WXQueryCustomerInfoRequest",
                            "name": "req_wx_query_customer_info",
                            "id": 310
                        },
                        {
                            "rule": "optional",
                            "type": "WXQueryCustomerInfoResponse",
                            "name": "res_wx_query_customer_info",
                            "id": 311
                        },
                        {
                            "rule": "optional",
                            "type": "WXUpdateCustomerInfoRequest",
                            "name": "req_wx_update_customer_info",
                            "id": 320
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_wx_update_customer_info",
                            "id": 321
                        },
                        {
                            "rule": "optional",
                            "type": "WXQueryCustomerHistoryRequest",
                            "name": "req_wx_query_customer_history",
                            "id": 330
                        },
                        {
                            "rule": "optional",
                            "type": "WXQueryCustomerHistoryResponse",
                            "name": "res_wx_query_customer_history",
                            "id": 331
                        },
                        {
                            "rule": "optional",
                            "type": "WXChangePasswordRequest",
                            "name": "req_wx_change_password",
                            "id": 340
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_wx_change_password",
                            "id": 341
                        },
                        {
                            "rule": "optional",
                            "type": "WXCardLostRequest",
                            "name": "req_wx_card_lost",
                            "id": 350
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_wx_card_lost",
                            "id": 351
                        },
                        {
                            "rule": "optional",
                            "type": "WXCardRetrieveRequest",
                            "name": "req_wx_card_retrieve",
                            "id": 360
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_wx_card_retrieve",
                            "id": 361
                        },
                        {
                            "rule": "optional",
                            "type": "WXCardBindingRequest",
                            "name": "req_wx_card_binding",
                            "id": 370
                        },
                        {
                            "rule": "optional",
                            "type": "WXCardBindingResponse",
                            "name": "res_wx_card_binding",
                            "id": 371
                        },
                        {
                            "rule": "optional",
                            "type": "WXQueryCardInfoRequest",
                            "name": "req_wx_query_card_info",
                            "id": 380
                        },
                        {
                            "rule": "optional",
                            "type": "WXQueryCardInfoResponse",
                            "name": "res_wx_query_card_info",
                            "id": 381
                        },
                        {
                            "rule": "optional",
                            "type": "WXSelfChargeBudgetRequest",
                            "name": "req_wx_self_charge_budget",
                            "id": 388
                        },
                        {
                            "rule": "optional",
                            "type": "WXSelfChargeBudgetResponse",
                            "name": "res_wx_self_charge_budget",
                            "id": 389
                        },
                        {
                            "rule": "optional",
                            "type": "WXSelfChargeRequest",
                            "name": "req_wx_self_charge",
                            "id": 390
                        },
                        {
                            "rule": "optional",
                            "type": "WXSelfChargeResponse",
                            "name": "res_wx_self_charge",
                            "id": 391
                        },
                        {
                            "rule": "optional",
                            "type": "WXSelfRefundRequest",
                            "name": "req_wx_self_refund",
                            "id": 400
                        },
                        {
                            "rule": "optional",
                            "type": "WXSelfRefundResponse",
                            "name": "res_wx_self_refund",
                            "id": 401
                        },
                        {
                            "rule": "optional",
                            "type": "WXGetUsableChargeActivityRequest",
                            "name": "req_wx_usable_charge_activity",
                            "id": 406
                        },
                        {
                            "rule": "optional",
                            "type": "WXGetUsableChargeActivityResponse",
                            "name": "res_wx_usable_charge_activity",
                            "id": 407
                        },
                        {
                            "rule": "optional",
                            "type": "WXQueryMenuRequest",
                            "name": "req_wx_query_menu",
                            "id": 410
                        },
                        {
                            "rule": "optional",
                            "type": "WXQueryMenuResponse",
                            "name": "res_wx_query_menu",
                            "id": 411
                        },
                        {
                            "rule": "optional",
                            "type": "WXTakeoutQueryOrderRequest",
                            "name": "req_wx_takeout_query_order",
                            "id": 420
                        },
                        {
                            "rule": "optional",
                            "type": "WXTakeoutQueryOrderResponse",
                            "name": "res_wx_takeout_query_order",
                            "id": 421
                        },
                        {
                            "rule": "optional",
                            "type": "WXTakeoutUpdateOrderRequest",
                            "name": "req_wx_takeout_update_order",
                            "id": 430
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_wx_takeout_update_order",
                            "id": 431
                        },
                        {
                            "rule": "optional",
                            "type": "WXTakeoutPaymentOrderRequest",
                            "name": "req_wx_takeout_payment_order",
                            "id": 440
                        },
                        {
                            "rule": "optional",
                            "type": "WXTakeoutPaymentOrderResponse",
                            "name": "res_wx_takeout_payment_order",
                            "id": 441
                        },
                        {
                            "rule": "optional",
                            "type": "WXTakeoutCancelOrderRequest",
                            "name": "req_wx_takeout_cancel_order",
                            "id": 450
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_wx_takeout_cancel_order",
                            "id": 451
                        },
                        {
                            "rule": "optional",
                            "type": "APPLoginRequest",
                            "name": "req_app_login",
                            "id": 510
                        },
                        {
                            "rule": "optional",
                            "type": "APPLoginResponse",
                            "name": "res_app_login",
                            "id": 511
                        },
                        {
                            "rule": "optional",
                            "type": "DisableCustomerRequest",
                            "name": "req_disable_customer",
                            "id": 700
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "res_disable_customer",
                            "id": 701
                        }
                    ],
                    "oneofs": {
                        "content": [
                            2,
                            10,
                            11,
                            20,
                            21,
                            22,
                            23,
                            30,
                            31,
                            40,
                            41,
                            50,
                            51,
                            52,
                            53,
                            60,
                            61,
                            70,
                            71,
                            80,
                            81,
                            82,
                            83,
                            85,
                            86,
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
                            110,
                            111,
                            120,
                            121,
                            130,
                            131,
                            132,
                            133,
                            140,
                            141,
                            142,
                            143,
                            150,
                            151,
                            160,
                            161,
                            162,
                            163,
                            170,
                            171,
                            180,
                            181,
                            190,
                            191,
                            200,
                            201,
                            210,
                            211,
                            220,
                            230,
                            240,
                            241,
                            250,
                            251,
                            260,
                            261,
                            270,
                            271,
                            275,
                            276,
                            280,
                            281,
                            285,
                            286,
                            290,
                            291,
                            600,
                            601,
                            610,
                            611,
                            620,
                            621,
                            630,
                            631,
                            300,
                            301,
                            310,
                            311,
                            320,
                            321,
                            330,
                            331,
                            340,
                            341,
                            350,
                            351,
                            360,
                            361,
                            370,
                            371,
                            380,
                            381,
                            388,
                            389,
                            390,
                            391,
                            400,
                            401,
                            406,
                            407,
                            410,
                            411,
                            420,
                            421,
                            430,
                            431,
                            440,
                            441,
                            450,
                            451,
                            510,
                            511,
                            700,
                            701
                        ]
                    }
                },
                {
                    "name": "NotifyMessage",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "TerminalInfoChangedNotify",
                            "name": "ntf_terminal_info_changed",
                            "id": 20
                        }
                    ],
                    "oneofs": {
                        "content": [
                            20
                        ]
                    }
                },
                {
                    "name": "StaffInfo",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "id",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "EStaffType",
                            "name": "type",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "role_name",
                            "id": 26
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "bind_id",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "user_id",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "nickname",
                            "id": 51
                        },
                        {
                            "rule": "optional",
                            "type": "ELanguageCode",
                            "name": "language",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "profile",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "birthday",
                            "id": 80
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "position",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "mobile",
                            "id": 100
                        },
                        {
                            "rule": "optional",
                            "type": "ESex",
                            "name": "sex",
                            "id": 110
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "email",
                            "id": 120
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "qq",
                            "id": 130
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "weibo",
                            "id": 140
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cf_account_id",
                            "id": 150
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "openid",
                            "id": 151
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_deleted",
                            "id": 170
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_locked",
                            "id": 171
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "creater_id",
                            "id": 180
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "modifier_id",
                            "id": 190
                        },
                        {
                            "rule": "repeated",
                            "type": "KeyValue",
                            "name": "property",
                            "id": 200
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "total_login_time",
                            "id": 210
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "total_payment_amount",
                            "id": 220
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "total_payment_count",
                            "id": 230
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "total_charge",
                            "id": 240
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "total_refund",
                            "id": 250
                        }
                    ]
                },
                {
                    "name": "TerminalInfo",
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
                            "name": "feature_codes",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "model",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "EProgramType",
                            "name": "type",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "program_ver",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "desc",
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
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "booth_id",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "booth_name",
                            "id": 100
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "tenant_name",
                            "id": 110
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "tenant_icon",
                            "id": 120
                        },
                        {
                            "rule": "repeated",
                            "type": "KeyValue",
                            "name": "property",
                            "id": 130
                        }
                    ]
                },
                {
                    "name": "ActivityInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "name",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "EActivityType",
                            "name": "type",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "org_id",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "EActivityStatus",
                            "name": "status",
                            "id": 25
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "valid_time_begin",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "valid_time_end",
                            "id": 35
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "conf",
                            "id": 40
                        }
                    ],
                    "enums": [
                        {
                            "name": "EActivityType",
                            "values": [
                                {
                                    "name": "AT_Charge_Donate",
                                    "id": 1
                                },
                                {
                                    "name": "AT_Payment_Discount",
                                    "id": 2
                                },
                                {
                                    "name": "AT_Payment_Lottery",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "EActivityStatus",
                            "values": [
                                {
                                    "name": "AS_WaitingConfig",
                                    "id": 0
                                },
                                {
                                    "name": "AS_WaitingCheck",
                                    "id": 1
                                },
                                {
                                    "name": "AS_Checked",
                                    "id": 2
                                },
                                {
                                    "name": "AS_Running",
                                    "id": 3
                                },
                                {
                                    "name": "AS_Pause",
                                    "id": 4
                                },
                                {
                                    "name": "AS_Stopped",
                                    "id": 5
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "PayInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "fee",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "SourceInfo",
                            "name": "source",
                            "id": 20
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "coupon_id",
                            "id": 30
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "action_id",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "donate_customer_name",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "donate_reason",
                            "id": 70
                        }
                    ]
                },
                {
                    "name": "SHShopInfo",
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
                            "name": "name",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "abbr",
                            "id": 21
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "org_id",
                            "id": 25
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "takeout_desc",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "takeout_carriage",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "logourl",
                            "id": 45
                        }
                    ]
                },
                {
                    "name": "CustomerInfo",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "sr_id",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "nickname",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "avatar",
                            "id": 40
                        },
                        {
                            "rule": "required",
                            "type": "ECustomerSource",
                            "name": "source",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "orgid",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "ESex",
                            "name": "sex",
                            "id": 110
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "card_id",
                            "id": 250
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "cf_account_id",
                            "id": 120
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "openid",
                            "id": 130
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "unionid",
                            "id": 131
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "birthday",
                            "id": 140
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "mobile",
                            "id": 150
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "mac",
                            "id": 160
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "email",
                            "id": 170
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "address",
                            "id": 180
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "id_card",
                            "id": 190
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "location",
                            "id": 200
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "qq",
                            "id": 210
                        },
                        {
                            "rule": "optional",
                            "type": "ECustomerStatus",
                            "name": "status",
                            "id": 220
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 230
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "attch",
                            "id": 240
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "app_terminal_id",
                            "id": 270
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "car_num",
                            "id": 280
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "last_op_shop_id",
                            "id": 290
                        }
                    ]
                },
                {
                    "name": "SearchCustomerInfo",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "customer_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "card_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "card_physics_id",
                            "id": 11
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
                            "name": "id_card",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "openid",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "unionid",
                            "id": 41
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "card_no",
                            "id": 50
                        }
                    ]
                },
                {
                    "name": "CardInfo",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "physics_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "id",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "ECardType",
                            "name": "type",
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
                            "name": "shop_name",
                            "id": 41
                        },
                        {
                            "rule": "optional",
                            "type": "ECardStatus",
                            "name": "card_status",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "balance",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "deposit",
                            "id": 65
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "customer_id",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "validity_time",
                            "id": 75
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "no",
                            "id": 85
                        }
                    ],
                    "enums": [
                        {
                            "name": "ECardType",
                            "values": [
                                {
                                    "name": "CT_Temp",
                                    "id": 1
                                },
                                {
                                    "name": "CT_Consumer",
                                    "id": 2
                                },
                                {
                                    "name": "CT_Identity",
                                    "id": 3
                                },
                                {
                                    "name": "CT_Init",
                                    "id": 4
                                },
                                {
                                    "name": "CT_Authorize",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "ECardStatus",
                            "values": [
                                {
                                    "name": "CS_Unissued",
                                    "id": 0
                                },
                                {
                                    "name": "CS_Normal",
                                    "id": 1
                                },
                                {
                                    "name": "CS_Lost",
                                    "id": 2
                                },
                                {
                                    "name": "CS_Deleted",
                                    "id": 3
                                },
                                {
                                    "name": "CS_Scrap",
                                    "id": 4
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "BalanceInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "usable",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "account",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "unrefund",
                            "id": 21
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "preferential",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "EnterpriseInfo",
                            "name": "enterprise_info",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "total_invoice",
                            "id": 55
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "total_invoice_balance",
                            "id": 60
                        }
                    ],
                    "messages": [
                        {
                            "name": "EnterpriseInfo",
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
                                    "name": "name",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "balance",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "breakfast",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "lunch",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "supper",
                                    "id": 35
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "midnight_1",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "midnight_2",
                                    "id": 45
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "OperationInfo",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "customer_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
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
                            "id": 21
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "staff_id",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "booth_id",
                            "id": 35
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "terminal_id",
                            "id": 40
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "activity_id",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "op_time",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "EOperationType",
                            "name": "op_type",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "SourceInfo",
                            "name": "op_source",
                            "id": 75
                        },
                        {
                            "rule": "optional",
                            "type": "EPaymentType",
                            "name": "payment_type",
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
                            "type": "int32",
                            "name": "balance",
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
                            "type": "bool",
                            "name": "is_cancel",
                            "id": 120
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "poundage",
                            "id": 130
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "trade_poundage",
                            "id": 140
                        }
                    ]
                },
                {
                    "name": "BoothInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "EBoothType",
                            "name": "type",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_enabled",
                            "id": 25
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 30
                        },
                        {
                            "rule": "repeated",
                            "type": "TerminalInfo",
                            "name": "terminal_info",
                            "id": 65
                        }
                    ],
                    "enums": [
                        {
                            "name": "EBoothType",
                            "values": [
                                {
                                    "name": "BT_Normal",
                                    "id": 1
                                },
                                {
                                    "name": "BT_EnterpriseCash",
                                    "id": 2
                                },
                                {
                                    "name": "BT_EnterpriseTime",
                                    "id": 3
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "HistoryInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "uint64",
                            "name": "time",
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
                            "type": "EOperationType",
                            "name": "operation_type",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "amount",
                            "id": 40
                        },
                        {
                            "rule": "repeated",
                            "type": "SubAccountInfo",
                            "name": "sub_account_info",
                            "id": 50
                        }
                    ],
                    "messages": [
                        {
                            "name": "SubAccountInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "ESubAccountType",
                                    "name": "sub_account_type",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "sub_account_name",
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
                                    "type": "uint32",
                                    "name": "breakfast",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "lunch",
                                    "id": 41
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "supper",
                                    "id": 42
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "midnight_1",
                                    "id": 43
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "midnight_2",
                                    "id": 44
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "balance",
                                    "id": 50
                                }
                            ],
                            "enums": [
                                {
                                    "name": "ESubAccountType",
                                    "values": [
                                        {
                                            "name": "AT_Returnable",
                                            "id": 0
                                        },
                                        {
                                            "name": "AT_CanntReturnable",
                                            "id": 1
                                        },
                                        {
                                            "name": "AT_Preferential",
                                            "id": 2
                                        },
                                        {
                                            "name": "AT_EnterpriseCash",
                                            "id": 3
                                        },
                                        {
                                            "name": "AT_Temp",
                                            "id": 4
                                        },
                                        {
                                            "name": "AT_EnterpriseTime",
                                            "id": 5
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DishesInfo",
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
                            "name": "photo",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 12
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "type_key",
                            "id": 13
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "type_value",
                            "id": 14
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "price",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "description",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_new",
                            "id": 50
                        }
                    ]
                },
                {
                    "name": "TakeoutOrderInfo",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "no",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "CustomerInfo",
                            "name": "customer_info",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "SHShopInfo",
                            "name": "shop_info",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "ETakeoutOrderStatus",
                            "name": "status",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "carriage",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "amount",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "create_time",
                            "id": 80
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "duration",
                            "id": 90
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "addr",
                            "id": 95
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 100
                        },
                        {
                            "rule": "repeated",
                            "type": "DishesOrder",
                            "name": "dishes_order",
                            "id": 110
                        },
                        {
                            "rule": "repeated",
                            "type": "Trace",
                            "name": "trace",
                            "id": 120
                        }
                    ],
                    "messages": [
                        {
                            "name": "DishesOrder",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "DishesInfo",
                                    "name": "dishes_info",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "dishes_count",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "Trace",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "time",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "staff_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "staff_name",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "ETakeoutOrderStatus",
                                    "name": "status",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 40
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "HeartbeatRequest",
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
                            "name": "sync_id",
                            "id": 20
                        },
                        {
                            "rule": "repeated",
                            "type": "PaymentInfo",
                            "name": "payment",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "PaymentInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "request_id",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "timestamp",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "customer_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "card_id",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "amount",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "EPaymentType",
                                    "name": "payment_type",
                                    "id": 50
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "HeartbeatResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "sync_id",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "UpdateBalanceInfo",
                            "name": "balance",
                            "id": 20
                        },
                        {
                            "rule": "repeated",
                            "type": "NotifyMessage",
                            "name": "ntf",
                            "id": 30
                        }
                    ],
                    "messages": [
                        {
                            "name": "UpdateBalanceInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "timestamp",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "customer_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "customer_name",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "card_id",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "balance",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "breakfast",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "lunch",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "supper",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "midnight_1",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "midnight_2",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "status",
                                    "id": 30
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "RegisterTerminalRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "TerminalInfo",
                            "name": "terminal_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "RegisterTerminalResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "terminal_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetTerminalInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "terminal_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetTerminalInfoResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "TerminalInfo",
                            "name": "terminal_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "LoginRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "terminal_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "login_id",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "password",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "openid",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "EProgramType",
                            "name": "login_type",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "program_ver",
                            "id": 60
                        }
                    ]
                },
                {
                    "name": "LoginResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "session_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "heartbeat_interval",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "StaffInfo",
                            "name": "staff_info",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "LogoutRequest",
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
                    "name": "ChangePasswordRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "old_password",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "new_password",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "GetWechatQRUrlRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "timeout",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetWechatQRUrlResponse",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "url",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "SetTempDataRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "key",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "value",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "timeout",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "SetTempDataResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "key",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetTempDataRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "key",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetTempDataResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "value",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "GetTenantShopListRequest",
                    "fields": []
                },
                {
                    "name": "GetTenantShopListResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "SHTenantInfo",
                            "name": "tenant_info",
                            "id": 10
                        }
                    ],
                    "messages": [
                        {
                            "name": "SHTenantInfo",
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
                                    "name": "name",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "abbr",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "photo",
                                    "id": 120
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "desc",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "coordinates",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "telephone",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "latest_activity",
                                    "id": 105
                                },
                                {
                                    "rule": "repeated",
                                    "type": "SHShopInfo",
                                    "name": "shop",
                                    "id": 110
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "PaymentRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "fee",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "request_id",
                            "id": 20
                        },
                        {
                            "rule": "required",
                            "type": "EPaymentType",
                            "name": "payment_type",
                            "id": 25
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "card_id",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "openid",
                            "id": 40
                        }
                    ],
                    "oneofs": {
                        "type": [
                            30,
                            40
                        ]
                    }
                },
                {
                    "name": "PaymentResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "payment_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "fee",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "winning_id",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "attch",
                            "id": 60
                        }
                    ]
                },
                {
                    "name": "PaymentCancelRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "payment_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "request_id",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "PaymentCancelResponse",
                    "fields": []
                },
                {
                    "name": "SearchCustomerRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "SearchCustomerResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "CustomerInfo",
                            "name": "customer_info",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "UpdateTerminalInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "TerminalInfo",
                            "name": "terminal_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "CreateCardRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "PayInfo",
                            "name": "pay_info",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "CreateCardResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "charge_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "ActivateCardRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "card_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "card_physics_id",
                            "id": 11
                        }
                    ]
                },
                {
                    "name": "ActivateCardResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "ChargeBudgetRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "PayInfo",
                            "name": "pay_info",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "ChargeBudgetResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "coupon_id",
                            "id": 30
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "action_id",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "ChargeRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "PayInfo",
                            "name": "pay_info",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "ChargeResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "charge_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "ChargeCancelRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "charge_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "ChargeCancelResponse",
                    "fields": []
                },
                {
                    "name": "RefundBudgetRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "fee",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "enterprise_fee",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_card_refund",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "EPhysicalCardStatus",
                            "name": "physical_card_status",
                            "id": 65
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "check_code",
                            "id": 70
                        }
                    ]
                },
                {
                    "name": "RefundBudgetResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "fee",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "poundage",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "enterprise_fee",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "enterprise_poundage",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 80
                        }
                    ]
                },
                {
                    "name": "RefundRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "fee",
                            "id": 40
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "enterprise_fee",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "staff_id",
                            "id": 51
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "is_card_refund",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "EPhysicalCardStatus",
                            "name": "physical_card_status",
                            "id": 65
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "check_code",
                            "id": 70
                        }
                    ]
                },
                {
                    "name": "RefundResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "refund_id",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "ReplacementCardRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "EPhysicalCardStatus",
                            "name": "physical_card_status",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "ReplacementCardResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "CardLostRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "CardRetrieveRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "AddStaffRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "StaffInfo",
                            "name": "staff_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "UpdateStaffRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "StaffInfo",
                            "name": "staff_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryStaffListRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "QueryStaffListResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "StaffInfo",
                            "name": "staff_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "TerminalInfoChangedNotify",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "TerminalInfo",
                            "name": "info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetTradeHistoryRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "limit_count",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "begin_time",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "EOperationType",
                            "name": "operation_type",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "GetTradeHistoryResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "HistoryInfo",
                            "name": "history_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetCardInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetCardInfoResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryBoothPaymentReportRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "booth_id",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "begin_time",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "end_time",
                            "id": 25
                        },
                        {
                            "rule": "optional",
                            "type": "EMealType",
                            "name": "meal_type",
                            "id": 30
                        }
                    ],
                    "enums": [
                        {
                            "name": "EMealType",
                            "values": [
                                {
                                    "name": "MT_Breakfast",
                                    "id": 1
                                },
                                {
                                    "name": "MT_Lunch",
                                    "id": 2
                                },
                                {
                                    "name": "MT_Supper",
                                    "id": 3
                                },
                                {
                                    "name": "MT_Midnight_1",
                                    "id": 4
                                },
                                {
                                    "name": "MT_Midnight_2",
                                    "id": 5
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "QueryBoothPaymentReportResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "BoothPaymentReportInfo",
                            "name": "booth_payment_rpt_info_list",
                            "id": 5
                        }
                    ],
                    "messages": [
                        {
                            "name": "BoothPaymentReportInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "booth_id",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "booth_name",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "rpt_info_list",
                                    "id": 15
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "QueryShopReportDayRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "begin_time",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "end_time",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QueryShopReportDayResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "ShopReportDayInfo",
                            "name": "day_report_info_list",
                            "id": 5
                        }
                    ],
                    "messages": [
                        {
                            "name": "ShopReportDayInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "dateTime",
                                    "id": 5
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "report_info_list",
                                    "id": 10
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "SetShopRelatedInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "uint64",
                            "name": "record_time",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "KeyValue",
                            "name": "related_info_list",
                            "id": 15
                        }
                    ]
                },
                {
                    "name": "QueryShopRelatedInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "begin_time",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "end_time",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QueryShopRelatedInfoResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "ShopRelatedInfo",
                            "name": "shop_related_info_list",
                            "id": 5
                        }
                    ],
                    "messages": [
                        {
                            "name": "ShopRelatedInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "record_time",
                                    "id": 5
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "related_info_list",
                                    "id": 10
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "WXRegisterCustomerReqeust",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "mobile",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "password",
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
                            "name": "nick_name",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "avatar",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "ESex",
                            "name": "sex",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "location",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "id_card",
                            "id": 80
                        }
                    ]
                },
                {
                    "name": "WXRegisterCustomerResponse",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "CustomerInfo",
                            "name": "customer_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXQueryCustomerInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXQueryCustomerInfoResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "CustomerInfo",
                            "name": "customer_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "WXUpdateCustomerInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "CustomerInfo",
                            "name": "customer_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXQueryCustomerHistoryRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "limit_count",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "begin_time",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "EOperationType",
                            "name": "operation_type",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "WXQueryCustomerHistoryResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "HistoryInfo",
                            "name": "history_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXChangePasswordRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "old_password",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "new_password",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "WXCardLostRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "password",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXCardRetrieveRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "password",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXCardBindingRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "card_id",
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
                    "name": "WXCardBindingResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetInvoiceHistoryRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "limit_count",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "begin_time",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "GetInvoiceHistoryResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "InvoiceInfo",
                            "name": "Invoice_info",
                            "id": 5
                        }
                    ],
                    "messages": [
                        {
                            "name": "InvoiceInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "time",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "staff_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "uint32",
                                    "name": "amount",
                                    "id": 25
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "InvoiceRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "amount",
                            "id": 15
                        }
                    ]
                },
                {
                    "name": "InvoiceResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "invoice_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetCardUrlRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "card_id",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "GetCardUrlResponse",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "card_short_url",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "UpdateBoothInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "BoothInfo",
                            "name": "booth_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "GetShopBoothListRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "GetShopBoothListResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "BoothInfo",
                            "name": "booth_info",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "SendSMSAuthCodeRequest",
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
                    "name": "VerifySMSAuthCodeRequest",
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
                    "name": "BindBoothDeviceRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "booth_id",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "terminal_id",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "BindBoothDeviceResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "terminal_name",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXQueryCardInfoRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "card_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXQueryCardInfoResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "CardInfo",
                            "name": "card_info",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXSelfChargeBudgetRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "PayInfo",
                            "name": "pay_info",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "WXSelfChargeBudgetResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "coupon_id",
                            "id": 30
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "action_id",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "WXSelfChargeRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "trade_no",
                            "id": 15
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "coupon_id",
                            "id": 30
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "action_id",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "WXSelfChargeResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "charge_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "BalanceInfo",
                            "name": "balance_info",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "WXSelfRefundRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "trade_no",
                            "id": 11
                        }
                    ]
                },
                {
                    "name": "WXSelfRefundResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "refund_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "refund_fee",
                            "id": 12
                        },
                        {
                            "rule": "optional",
                            "type": "ERefundStatus",
                            "name": "status",
                            "id": 13
                        }
                    ],
                    "enums": [
                        {
                            "name": "ERefundStatus",
                            "values": [
                                {
                                    "name": "WAIT_REFUND",
                                    "id": 0
                                },
                                {
                                    "name": "REFUND_SUCCESS",
                                    "id": 1
                                },
                                {
                                    "name": "REFUND_ERROR",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "WXGetUsableChargeActivityRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXGetUsableChargeActivityResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "ActivityInfo",
                            "name": "activity_info_list",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "APPLoginRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "APPLoginResponse",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "CustomerInfo",
                            "name": "customer_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "TakeoutQueryOrderRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "TakeoutQueryOrderResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "TakeoutOrderInfo",
                            "name": "takeout_order_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "TakeoutAcceptOrderRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "order_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "TakeoutRejectOrderRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "order_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "TakeoutSendOrderRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "session_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "order_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "WXQueryMenuRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "org_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXQueryMenuResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "DishesInfo",
                            "name": "dishes",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXTakeoutQueryOrderRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "order_id",
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
                    "name": "WXTakeoutQueryOrderResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "TakeoutOrderInfo",
                            "name": "takeout_order_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "WXTakeoutUpdateOrderRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "KeyValue",
                            "name": "dishes",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "WXTakeoutPaymentOrderRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shop_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "WXTakeoutPaymentOrderResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "payment_id",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "serial_number",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "order_id",
                            "id": 15
                        }
                    ]
                },
                {
                    "name": "WXTakeoutCancelOrderRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "openid",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "order_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "remark",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "DisableCustomerRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "SearchCustomerInfo",
                            "name": "search_customer",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "disable",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "api",
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
                                    "type": "QueryCustomerStatusRequest",
                                    "name": "req_query_customer_status",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerStatusResponse",
                                    "name": "res_query_customer_status",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerBalanceRequest",
                                    "name": "req_query_customer_balance",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerBalanceResponse",
                                    "name": "res_query_customer_balance",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerHistoryRequest",
                                    "name": "req_query_customer_history",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryCustomerHistoryResponse",
                                    "name": "res_query_customer_history",
                                    "id": 31
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    2,
                                    10,
                                    11,
                                    20,
                                    21,
                                    30,
                                    31
                                ]
                            }
                        },
                        {
                            "name": "QueryCustomerStatusRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "SearchCustomerInfo",
                                    "name": "search_customer_info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerStatusResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "ECustomerStatus",
                                    "name": "status",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerBalanceRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "SearchCustomerInfo",
                                    "name": "search_customer_info",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerBalanceResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "balance",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerHistoryRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "SearchCustomerInfo",
                                    "name": "search_customer_info",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "time_begin",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "time_end",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "QueryCustomerHistoryResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "OperationInfo",
                                    "name": "op_info",
                                    "id": 10
                                }
                            ]
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "EProgramType",
                    "values": [
                        {
                            "name": "PT_Unknow",
                            "id": 1
                        },
                        {
                            "name": "PT_Casher",
                            "id": 2
                        },
                        {
                            "name": "PT_Service",
                            "id": 3
                        },
                        {
                            "name": "PT_SelfService",
                            "id": 4
                        },
                        {
                            "name": "PT_DashBoard",
                            "id": 5
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
                            "name": "Portal",
                            "id": 2
                        },
                        {
                            "name": "Manual",
                            "id": 3
                        },
                        {
                            "name": "Import",
                            "id": 4
                        },
                        {
                            "name": "APP",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "ESex",
                    "values": [
                        {
                            "name": "Unknow",
                            "id": 0
                        },
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
                    "name": "ECustomerStatus",
                    "values": [
                        {
                            "name": "Invalid",
                            "id": 0
                        },
                        {
                            "name": "Valid",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "EStaffType",
                    "values": [
                        {
                            "name": "Unknow",
                            "id": 0
                        },
                        {
                            "name": "Manager",
                            "id": 1
                        },
                        {
                            "name": "Shop",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "ELanguageCode",
                    "values": [
                        {
                            "name": "Chinese",
                            "id": 0
                        },
                        {
                            "name": "Engish",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "EOperationType",
                    "values": [
                        {
                            "name": "Unknow",
                            "id": 0
                        },
                        {
                            "name": "Payment",
                            "id": 1
                        },
                        {
                            "name": "Replacement",
                            "id": 2
                        },
                        {
                            "name": "CreateCard",
                            "id": 3
                        },
                        {
                            "name": "RefundCard",
                            "id": 4
                        },
                        {
                            "name": "Lost",
                            "id": 5
                        },
                        {
                            "name": "Retrieve",
                            "id": 6
                        },
                        {
                            "name": "DeductDeposit",
                            "id": 7
                        },
                        {
                            "name": "Charge",
                            "id": 11
                        },
                        {
                            "name": "Register",
                            "id": 12
                        },
                        {
                            "name": "Activity",
                            "id": 13
                        },
                        {
                            "name": "Coupon",
                            "id": 14
                        },
                        {
                            "name": "RevokePayment",
                            "id": 15
                        },
                        {
                            "name": "Refund",
                            "id": 21
                        }
                    ]
                },
                {
                    "name": "EPaymentType",
                    "values": [
                        {
                            "name": "PT_Normal",
                            "id": 0
                        },
                        {
                            "name": "PT_Breakfast",
                            "id": 1
                        },
                        {
                            "name": "PT_Lunch",
                            "id": 2
                        },
                        {
                            "name": "PT_Supper",
                            "id": 3
                        },
                        {
                            "name": "PT_Midnight_1",
                            "id": 4
                        },
                        {
                            "name": "PT_Midnight_2",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "ETakeoutOrderStatus",
                    "values": [
                        {
                            "name": "TOS_CREATED",
                            "id": 0
                        },
                        {
                            "name": "TOS_PAYMENT",
                            "id": 1
                        },
                        {
                            "name": "TOS_ACCEPT",
                            "id": 2
                        },
                        {
                            "name": "TOS_SENT",
                            "id": 3
                        },
                        {
                            "name": "TOS_COMPLETE",
                            "id": 4
                        },
                        {
                            "name": "TOS_CANCEL",
                            "id": 5
                        },
                        {
                            "name": "TOS_REJECT",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "EPhysicalCardStatus",
                    "values": [
                        {
                            "name": "PCS_Normal",
                            "id": 0
                        },
                        {
                            "name": "PCS_Damage",
                            "id": 1
                        },
                        {
                            "name": "PCS_Scrap",
                            "id": 2
                        }
                    ]
                }
            ]
        }
    ]
}).build();