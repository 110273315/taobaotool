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
                            "name": "tag",
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
                                            "type": "QueryTagGroupRequest",
                                            "name": "req_query_tag_group",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryTagGroupResponse",
                                            "name": "res_query_tag_group",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "UpdateTagGroupRequest",
                                            "name": "req_update_tag_group",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "UpdateTagGroupResponse",
                                            "name": "res_update_tag_group",
                                            "id": 21
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryTagRequest",
                                            "name": "req_query_tag",
                                            "id": 30
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryTagResponse",
                                            "name": "res_query_tag",
                                            "id": 31
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "UpdateTagRequest",
                                            "name": "req_update_tag",
                                            "id": 40
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "UpdateTagResponse",
                                            "name": "res_update_tag",
                                            "id": 41
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCustomerTagRequest",
                                            "name": "req_query_customer_tag",
                                            "id": 50
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCustomerTagResponse",
                                            "name": "res_query_customer_tag",
                                            "id": 51
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCustomerByTagRequest",
                                            "name": "req_query_customer_by_tag",
                                            "id": 60
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "QueryCustomerByTagResponse",
                                            "name": "res_query_customer_by_tag",
                                            "id": 61
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "UpdateCustomerTagsRequest",
                                            "name": "req_update_cust_tag",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "NoBody",
                                            "name": "res_update_cust_tag",
                                            "id": 71
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "TagChangedNotify",
                                            "name": "tag_changed_notify",
                                            "id": 80
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "TagGroupChangedNotify",
                                            "name": "tag_group_changed_notify",
                                            "id": 90
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "CustomerTagChangedNotify",
                                            "name": "customer_tag_changed_notify",
                                            "id": 100
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
                                            40,
                                            41,
                                            50,
                                            51,
                                            60,
                                            61,
                                            70,
                                            71,
                                            80,
                                            90,
                                            100
                                        ]
                                    }
                                },
                                {
                                    "name": "TagGroupInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
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
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "source_info",
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
                                            "type": "bool",
                                            "name": "is_enabled",
                                            "id": 6
                                        }
                                    ]
                                },
                                {
                                    "name": "TagInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
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
                                            "rule": "optional",
                                            "type": "SourceInfo",
                                            "name": "source_info",
                                            "id": 3
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 4
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "tag_group_id",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "is_enabled",
                                            "id": 6
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "KeyValue",
                                            "name": "attr",
                                            "id": 8
                                        }
                                    ]
                                },
                                {
                                    "name": "CustomerTagInfo",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "customer_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "tag_id",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryTagGroupRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "tag_group_id",
                                            "id": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryTagGroupResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "TagGroupInfo",
                                            "name": "tag_group_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "UpdateTagGroupRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "TagGroupInfo",
                                            "name": "tag_group_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "UpdateTagGroupResponse",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "TagGroupInfo",
                                            "name": "tag_group_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryTagRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "org_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "tag_id",
                                            "id": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryTagResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "TagInfo",
                                            "name": "tag_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "UpdateTagRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "TagInfo",
                                            "name": "tag_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "UpdateTagResponse",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "TagInfo",
                                            "name": "tag_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCustomerTagRequest",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CustomerSearchCondition",
                                            "name": "csc",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCustomerTagResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "CustomerTagInfo",
                                            "name": "customer_tag",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCustomerByTagRequest",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "tag_id",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "QueryCustomerByTagResponse",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "customer_id",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "UpdateCustomerTagsRequest",
                                    "fields": [
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "customer_id",
                                            "id": 1
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "add_tag_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "remove_tag_id",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "ETagChannel",
                                            "name": "tag_channel",
                                            "id": 12
                                        }
                                    ]
                                },
                                {
                                    "name": "TagChangedNotify",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "TagInfo",
                                            "name": "tag_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "TagGroupChangedNotify",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "TagGroupInfo",
                                            "name": "tag_group_info",
                                            "id": 10
                                        }
                                    ]
                                },
                                {
                                    "name": "CustomerTagChangedNotify",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "UpdateCustomerTagsRequest",
                                            "name": "customer_tag_changed",
                                            "id": 10
                                        }
                                    ]
                                }
                            ],
                            "enums": [
                                {
                                    "name": "ETagChannel",
                                    "values": [
                                        {
                                            "name": "SR",
                                            "id": 1
                                        },
                                        {
                                            "name": "CMS",
                                            "id": 2
                                        },
                                        {
                                            "name": "App",
                                            "id": 3
                                        },
                                        {
                                            "name": "Other",
                                            "id": 4
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