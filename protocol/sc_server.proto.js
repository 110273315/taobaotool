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
            "name": "sc",
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
                            "type": "QueryOrgReqeust",
                            "name": "req_query_org",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "QueryOrgResponse",
                            "name": "res_query_org",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "QueryFenceRequest",
                            "name": "req_query_fence",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "QueryFenceResponse",
                            "name": "res_query_fence",
                            "id": 21
                        },
                        {
                            "rule": "optional",
                            "type": "QureyStaffRequest",
                            "name": "req_query_staff",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "QureyStaffResponse",
                            "name": "res_query_staff",
                            "id": 41
                        },
                        {
                            "rule": "optional",
                            "type": "AddStaffRequest",
                            "name": "req_add_staff",
                            "id": 42
                        },
                        {
                            "rule": "optional",
                            "type": "AddStaffResponse",
                            "name": "res_add_staff",
                            "id": 43
                        },
                        {
                            "rule": "optional",
                            "type": "UpdateStaffRequest",
                            "name": "req_update_staff",
                            "id": 44
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_update_staff",
                            "id": 45
                        },
                        {
                            "rule": "optional",
                            "type": "RemoveStaffRequest",
                            "name": "req_remove_staff",
                            "id": 46
                        },
                        {
                            "rule": "optional",
                            "type": "CommonResponse",
                            "name": "res_remove_staff",
                            "id": 47
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopRequest",
                            "name": "req_query_shop",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "QueryShopResponse",
                            "name": "res_query_shop",
                            "id": 51
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCodeTableRequest",
                            "name": "req_query_code_table",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "QueryCodeTableResponse",
                            "name": "res_query_code_table",
                            "id": 61
                        },
                        {
                            "rule": "optional",
                            "type": "NoBody",
                            "name": "req_query_system_status_overview",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "QuerySystemStatusOverviewResponse",
                            "name": "res_query_system_status_overview",
                            "id": 71
                        }
                    ],
                    "oneofs": {
                        "content": [
                            2,
                            10,
                            11,
                            20,
                            21,
                            40,
                            41,
                            42,
                            43,
                            44,
                            45,
                            46,
                            47,
                            50,
                            51,
                            60,
                            61,
                            70,
                            71
                        ]
                    }
                },
                {
                    "name": "OrgInfo",
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
                            "name": "parent_id",
                            "id": 20
                        },
                        {
                            "rule": "required",
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
                            "name": "order_index",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "EOrgClass",
                            "name": "class",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "address",
                            "id": 70
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "floor",
                            "id": 80
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
                            "name": "staff_id",
                            "id": 110
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
                            "name": "creater_id",
                            "id": 140
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "modifier_id",
                            "id": 150
                        },
                        {
                            "rule": "repeated",
                            "type": "KeyValue",
                            "name": "property",
                            "id": 160
                        },
                        {
                            "rule": "repeated",
                            "type": "OrgInfo",
                            "name": "sub",
                            "id": 200
                        }
                    ]
                },
                {
                    "name": "FenceInfo",
                    "fields": [
                        {
                            "rule": "optional",
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
                            "name": "photo",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "desc",
                            "id": 40
                        },
                        {
                            "rule": "repeated",
                            "type": "FenceInfo",
                            "name": "parent_fence",
                            "id": 50
                        },
                        {
                            "rule": "repeated",
                            "type": "FenceInfo",
                            "name": "sub_fence",
                            "id": 60
                        },
                        {
                            "rule": "repeated",
                            "type": "OrgInfo",
                            "name": "sub_org",
                            "id": 70
                        },
                        {
                            "rule": "repeated",
                            "type": "KeyValue",
                            "name": "property",
                            "id": 80
                        }
                    ]
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
                            "type": "string",
                            "name": "facebook",
                            "id": 160
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_deleted",
                            "id": 170
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
                        }
                    ]
                },
                {
                    "name": "ShopInfo",
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
                            "name": "no",
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
                            "name": "logo",
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
                            "id": 100
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "photolist",
                            "id": 110
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "introduction",
                            "id": 120
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_deleted",
                            "id": 130
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "desc",
                            "id": 140
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "creater_id",
                            "id": 150
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "modifier_id",
                            "id": 160
                        },
                        {
                            "rule": "repeated",
                            "type": "KeyValue",
                            "name": "property",
                            "id": 170
                        }
                    ]
                },
                {
                    "name": "StaffSearchCondition",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "login_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "email",
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
                            "name": "cf_account_id",
                            "id": 50
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "openid",
                            "id": 51
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "unionid",
                            "id": 52
                        }
                    ]
                },
                {
                    "name": "QueryOrgReqeust",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "org_id",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_include_sub",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QueryOrgResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "OrgInfo",
                            "name": "org_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryFenceRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "org_id",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "fence_id",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_include_sub",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "QueryFenceResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "FenceInfo",
                            "name": "fence_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QureyStaffRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "StaffSearchCondition",
                            "name": "staff_search",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "staff_password",
                            "id": 20
                        }
                    ]
                },
                {
                    "name": "QureyStaffResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "StaffInfo",
                            "name": "staff_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "AddStaffRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "StaffInfo",
                            "name": "staff_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "AddStaffResponse",
                    "fields": [
                        {
                            "rule": "optional",
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
                            "type": "StaffInfo",
                            "name": "staff_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "RemoveStaffRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "staff_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryShopRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "org_id",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryShopResponse",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "ShopInfo",
                            "name": "shop_info",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryCodeTableRequest",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "key_name",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "QueryCodeTableResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "CodeTable",
                            "name": "code_table",
                            "id": 10
                        }
                    ],
                    "messages": [
                        {
                            "name": "CodeTable",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "key",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "code",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "value",
                                    "id": 30
                                },
                                {
                                    "rule": "repeated",
                                    "type": "CodeTable",
                                    "name": "sub",
                                    "id": 40
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NotifyBaseDataChanged",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "EChangeType",
                            "name": "change_type",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "OrgInfo",
                            "name": "org",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "FenceInfo",
                            "name": "fence",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "StaffInfo",
                            "name": "staff",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "ShopInfo",
                            "name": "shop",
                            "id": 50
                        }
                    ],
                    "oneofs": {
                        "content": [
                            20,
                            30,
                            40,
                            50
                        ]
                    },
                    "enums": [
                        {
                            "name": "EChangeType",
                            "values": [
                                {
                                    "name": "Add",
                                    "id": 1
                                },
                                {
                                    "name": "Update",
                                    "id": 2
                                },
                                {
                                    "name": "Delete",
                                    "id": 3
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "QuerySystemStatusOverviewResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "total_server_count",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "total_service_count",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "total_instance_count",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "total_process_count",
                            "id": 40
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "total_error_count",
                            "id": 50
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "error_list",
                            "id": 60
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "update_time",
                            "id": 70
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "EOrgClass",
                    "values": [
                        {
                            "name": "Tenant",
                            "id": 1
                        },
                        {
                            "name": "Region",
                            "id": 2
                        },
                        {
                            "name": "Site",
                            "id": 3
                        },
                        {
                            "name": "Floor",
                            "id": 4
                        },
                        {
                            "name": "Area",
                            "id": 5
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
                }
            ]
        }
    ]
}).build();