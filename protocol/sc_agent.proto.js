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
                        }
                    ],
                    "oneofs": {
                        "content": [
                            2
                        ]
                    }
                },
                {
                    "name": "BasedataChangedNotify",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "abstract",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "DataChanged",
                            "name": "detail",
                            "id": 20
                        }
                    ],
                    "messages": [
                        {
                            "name": "DataChanged",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "EOP",
                                    "name": "op",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "table_name",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "innerid",
                                    "id": 30
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "param",
                                    "id": 40
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "EOP",
                            "values": [
                                {
                                    "name": "Insert",
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
                    "name": "ConfigChangedNotify",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "ETargetType",
                            "name": "target_type",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "instance_name",
                            "id": 20
                        },
                        {
                            "rule": "repeated",
                            "type": "KeyValue",
                            "name": "param",
                            "id": 30
                        }
                    ],
                    "enums": [
                        {
                            "name": "ETargetType",
                            "values": [
                                {
                                    "name": "SubSystem",
                                    "id": 1
                                },
                                {
                                    "name": "Program",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "SystemStatusNotify",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "EStatus",
                            "name": "status",
                            "id": 10
                        }
                    ],
                    "enums": [
                        {
                            "name": "EStatus",
                            "values": [
                                {
                                    "name": "Init",
                                    "id": 1
                                },
                                {
                                    "name": "Running",
                                    "id": 2
                                },
                                {
                                    "name": "Closed",
                                    "id": 3
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Ping",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "instance_name",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "replay",
                            "id": 20
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "tick",
                            "id": 30
                        }
                    ]
                },
                {
                    "name": "Pong",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "tick",
                            "id": 30
                        }
                    ]
                }
            ]
        }
    ]
}).build();