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
        }
    ]
}).build();