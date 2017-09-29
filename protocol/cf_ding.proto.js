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
                    "name": "ding",
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
                                    "type": "SingleMessageSendRequest",
                                    "name": "req_single_message_send",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "SingleMessageSendResponse",
                                    "name": "res_single_message_send",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "CompanyMessageSendRequest",
                                    "name": "req_company_message_send",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "CompanyMessageSendResponse",
                                    "name": "res_company_message_send",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "CompanyMessageProgressRequest",
                                    "name": "req_company_message_progress",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "CompanyMessageProgressResponse",
                                    "name": "res_company_message_progress",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "CompanyMessageResultRequest",
                                    "name": "req_company_message_result",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "CompanyMessageResultResponse",
                                    "name": "res_company_message_result",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "ContactsAuthScopesRequest",
                                    "name": "req_contacts_auth_scopes",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "ContactsAuthScopesResponse",
                                    "name": "res_contacts_auth_scopes",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "UserInfoRequest",
                                    "name": "req_user_info_query",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "UserInfoResponse",
                                    "name": "res_user_info_query",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "UserListRequest",
                                    "name": "req_user_list_query",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "UserListResponse",
                                    "name": "res_user_list_query",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentListRequest",
                                    "name": "req_department_list_query",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentListResponse",
                                    "name": "res_department_list_query",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentInfoRequest",
                                    "name": "req_department_info_query",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentInfoResponse",
                                    "name": "res_department_info_query",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentCreateRequest",
                                    "name": "req_department_create",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentCreateResponse",
                                    "name": "res_department_create",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentUpdateRequest",
                                    "name": "req_department_update",
                                    "id": 31
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentUpdateResponse",
                                    "name": "res_department_update",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentDeleteRequest",
                                    "name": "req_department_delete",
                                    "id": 33
                                },
                                {
                                    "rule": "optional",
                                    "type": "DepartmentDeleteResponse",
                                    "name": "res_department_delete",
                                    "id": 34
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetUserInfoByCodeRequest",
                                    "name": "req_get_user_info_by_code",
                                    "id": 35
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetUserInfoByCodeResponse",
                                    "name": "res_get_user_info_by_code",
                                    "id": 36
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCorpUserInfoByCodeRequest",
                                    "name": "req_get_corp_user_info_by_code",
                                    "id": 37
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCorpUserInfoByCodeResponse",
                                    "name": "res_get_corp_user_info_by_code",
                                    "id": 38
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallbackRegisterRequest",
                                    "name": "req_callback_register",
                                    "id": 39
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallbackRegisterResponse",
                                    "name": "res_callback_register",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallbackUpdateRequest",
                                    "name": "req_callback_update",
                                    "id": 41
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallbackUpdateResponse",
                                    "name": "res_callback_update",
                                    "id": 42
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallbackDeleteRequest",
                                    "name": "req_callback_delete",
                                    "id": 43
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallbackDeleteResponse",
                                    "name": "res_callback_delete",
                                    "id": 44
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallbackResultRequest",
                                    "name": "req_callback_result",
                                    "id": 45
                                },
                                {
                                    "rule": "optional",
                                    "type": "CallbackResultResponse",
                                    "name": "res_callback_result",
                                    "id": 46
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryAccessTokenRequest",
                                    "name": "req_query_access_token",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "QueryAccessTokenResponse",
                                    "name": "res_query_access_token",
                                    "id": 71
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetJsapiTicketRequest",
                                    "name": "req_get_jsapi_ticket",
                                    "id": 72
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetJsapiTicketResponse",
                                    "name": "res_get_jsapi_ticket",
                                    "id": 73
                                },
                                {
                                    "rule": "optional",
                                    "type": "EventUpdateToken",
                                    "name": "ntf_update_token",
                                    "id": 76
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetJsapiSignRequest",
                                    "name": "req_get_jsapi_sign",
                                    "id": 77
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetJsapiSignResponse",
                                    "name": "res_get_jsapi_sign",
                                    "id": 78
                                },
                                {
                                    "rule": "optional",
                                    "type": "EventUpdateTokenSNS",
                                    "name": "ntf_update_token_sns",
                                    "id": 79
                                },
                                {
                                    "rule": "optional",
                                    "type": "NotifyMessageFromDing",
                                    "name": "ntf_msg_from_ding",
                                    "id": 90
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
                                    33,
                                    34,
                                    35,
                                    36,
                                    37,
                                    38,
                                    39,
                                    40,
                                    41,
                                    42,
                                    43,
                                    44,
                                    45,
                                    46,
                                    70,
                                    71,
                                    72,
                                    73,
                                    76,
                                    77,
                                    78,
                                    79,
                                    90
                                ]
                            }
                        },
                        {
                            "name": "SingleMessageSendRequest",
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
                            "name": "SingleMessageSendResponse",
                            "fields": []
                        },
                        {
                            "name": "CompanyMessageSendRequest",
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
                            "name": "CompanyMessageSendResponse",
                            "fields": []
                        },
                        {
                            "name": "CompanyMessageProgressRequest",
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
                            "name": "CompanyMessageProgressResponse",
                            "fields": []
                        },
                        {
                            "name": "CompanyMessageResultRequest",
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
                            "name": "CompanyMessageResultResponse",
                            "fields": []
                        },
                        {
                            "name": "ContactsAuthScopesRequest",
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
                            "name": "ContactsAuthScopesResponse",
                            "fields": []
                        },
                        {
                            "name": "UserInfoRequest",
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
                            "name": "UserInfoResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "ding_user_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "device_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_sys",
                                    "id": 30
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ESysLevel",
                                    "name": "sys_level",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "UserListRequest",
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
                            "name": "UserListResponse",
                            "fields": []
                        },
                        {
                            "name": "DepartmentListRequest",
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
                            "name": "DepartmentListResponse",
                            "fields": []
                        },
                        {
                            "name": "DepartmentInfoRequest",
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
                            "name": "DepartmentInfoResponse",
                            "fields": []
                        },
                        {
                            "name": "DepartmentCreateRequest",
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
                            "name": "DepartmentCreateResponse",
                            "fields": []
                        },
                        {
                            "name": "DepartmentUpdateRequest",
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
                            "name": "DepartmentUpdateResponse",
                            "fields": []
                        },
                        {
                            "name": "DepartmentDeleteRequest",
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
                            "name": "DepartmentDeleteResponse",
                            "fields": []
                        },
                        {
                            "name": "GetUserInfoByCodeRequest",
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
                                    "name": "ding_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetUserInfoByCodeResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "UserInfo",
                                    "name": "user_info",
                                    "id": 1
                                }
                            ],
                            "messages": [
                                {
                                    "name": "UserInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "mobile",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "nick",
                                            "id": 11
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "openid",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "union_id",
                                            "id": 13
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "ding_id",
                                            "id": 14
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetCorpUserInfoByCodeRequest",
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
                                    "name": "ding_code",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetCorpUserInfoByCodeResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "ding_user_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "device_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_sys",
                                    "id": 30
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ESysLevel",
                                    "name": "sys_level",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "CallbackRegisterRequest",
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
                            "name": "CallbackRegisterResponse",
                            "fields": []
                        },
                        {
                            "name": "CallbackUpdateRequest",
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
                            "name": "CallbackUpdateResponse",
                            "fields": []
                        },
                        {
                            "name": "CallbackDeleteRequest",
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
                            "name": "CallbackDeleteResponse",
                            "fields": []
                        },
                        {
                            "name": "CallbackResultRequest",
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
                            "name": "CallbackResultResponse",
                            "fields": []
                        },
                        {
                            "name": "QueryAccessTokenRequest",
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
                            "name": "QueryAccessTokenResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "access_token",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "expires_in",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetJsapiTicketRequest",
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
                            "name": "GetJsapiTicketResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "jsapi_ticket",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "expires_in",
                                    "id": 20
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
                                    "name": "expires_in",
                                    "id": 2
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
                            "name": "GetJsapiSignRequest",
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
                            "name": "GetJsapiSignResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "corpId",
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
                        },
                        {
                            "name": "EventUpdateTokenSNS",
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
                            "name": "NotifyMessageFromDing",
                            "fields": [
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
                                    "type": "EEventType",
                                    "name": "event_type",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "content",
                                    "id": 40
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "EMediaType",
                            "values": [
                                {
                                    "name": "TEXT",
                                    "id": 1
                                },
                                {
                                    "name": "IMAGE",
                                    "id": 2
                                },
                                {
                                    "name": "VOICE",
                                    "id": 3
                                },
                                {
                                    "name": "FILE",
                                    "id": 4
                                },
                                {
                                    "name": "LINK",
                                    "id": 5
                                },
                                {
                                    "name": "OA",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "EEventType",
                            "values": [
                                {
                                    "name": "USER_ADD_ORG",
                                    "id": 1
                                },
                                {
                                    "name": "USER_MODIFY_ORG",
                                    "id": 2
                                },
                                {
                                    "name": "USER_LEAVE_ORG",
                                    "id": 3
                                },
                                {
                                    "name": "ORG_ADMIN_ADD",
                                    "id": 4
                                },
                                {
                                    "name": "ORG_ADMIN_REMOVE",
                                    "id": 5
                                },
                                {
                                    "name": "ORG_DEPT_CREATE",
                                    "id": 6
                                },
                                {
                                    "name": "ORG_DEPT_MODIFY",
                                    "id": 7
                                },
                                {
                                    "name": "ORG_DEPT_REMOVE",
                                    "id": 8
                                },
                                {
                                    "name": "ORG_REMOVE",
                                    "id": 9
                                },
                                {
                                    "name": "ORG_CHANGE",
                                    "id": 10
                                },
                                {
                                    "name": "CHAT_ADD_MEMBER",
                                    "id": 11
                                },
                                {
                                    "name": "CHAT_REMOVE_MEMBER",
                                    "id": 12
                                },
                                {
                                    "name": "CHAT_QUIT",
                                    "id": 13
                                },
                                {
                                    "name": "CHAT_UPDATE_OWNER",
                                    "id": 14
                                },
                                {
                                    "name": "CHAT_UPDATE_TITLE",
                                    "id": 15
                                },
                                {
                                    "name": "CHAT_DISBAND",
                                    "id": 16
                                },
                                {
                                    "name": "CHAT_DISBAND_MICROAPP",
                                    "id": 17
                                }
                            ]
                        },
                        {
                            "name": "ESysLevel",
                            "values": [
                                {
                                    "name": "NORMAL_MEMBER",
                                    "id": 0
                                },
                                {
                                    "name": "SUPER_ADMIN",
                                    "id": 1
                                },
                                {
                                    "name": "NORMAL_ADMIN",
                                    "id": 2
                                },
                                {
                                    "name": "BOSS",
                                    "id": 100
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();