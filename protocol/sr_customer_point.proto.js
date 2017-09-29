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
                    ]
                }
            ]
        }
    ]
}).build();