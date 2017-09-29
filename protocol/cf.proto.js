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
                            "type": "SendTextRequest",
                            "name": "req_send_text",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "SendTextResponse",
                            "name": "res_send_text",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "SMSSendAuthCodeRequest",
                            "name": "req_sms_send_auth_code",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_sms_send_auth_code",
                            "id": 21
                        },
                        {
                            "rule": "optional",
                            "type": "SMSCheckAuthCodeRequest",
                            "name": "req_sms_check_auth_code",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_sms_check_auth_code",
                            "id": 31
                        },
                        {
                            "rule": "optional",
                            "type": "SendEmailRequest",
                            "name": "req_send_email",
                            "id": 35
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_send_email",
                            "id": 36
                        },
                        {
                            "rule": "optional",
                            "type": "RecvTextNotify",
                            "name": "recv_text_notify",
                            "id": 12
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
                            31,
                            35,
                            36,
                            12
                        ]
                    }
                },
                {
                    "name": "SendTextRequest",
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
                            "rule": "required",
                            "type": "string",
                            "name": "content",
                            "id": 12
                        }
                    ]
                },
                {
                    "name": "SendTextResponse",
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
                            "type": "int32",
                            "name": "result",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "SMSSendAuthCodeRequest",
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
                            "rule": "optional",
                            "type": "int32",
                            "name": "auth_code_digit",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "sms_template",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "valid_time",
                            "id": 40
                        }
                    ]
                },
                {
                    "name": "SMSCheckAuthCodeRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "auth_key",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "SendEmailRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "account_id",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "email",
                            "id": 12
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "cc_email",
                            "id": 14
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "bcc_email",
                            "id": 16
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "subject",
                            "id": 18
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "content",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "html",
                            "id": 22
                        },
                        {
                            "rule": "repeated",
                            "type": "Attachment",
                            "name": "attachments",
                            "id": 25
                        }
                    ],
                    "messages": [
                        {
                            "name": "Attachment",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "filename",
                                    "id": 60
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "uuid",
                                    "id": 63
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cid",
                                    "id": 66
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "RecvTextNotify",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "account_id",
                            "id": 11
                        },
                        {
                            "rule": "required",
                            "type": "CustomerSearchCondition",
                            "name": "customer_search_condition",
                            "id": 12
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "content",
                            "id": 13
                        }
                    ]
                }
            ]
        }
    ]
}).build();