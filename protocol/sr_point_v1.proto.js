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
                    "name": "invoke_id",
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
            "name": "sr",
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
                                    "type": "ReceiptPointRequest",
                                    "name": "req_receipt_point",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "ReceiptPointResponse",
                                    "name": "res_receipt_point",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "DisbursedPointRequest",
                                    "name": "req_disburse_point",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "DisbursedPointResponse",
                                    "name": "res_disburse_point",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustMainPointRequest",
                                    "name": "req_custpoint_main",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustMainPointResponse",
                                    "name": "res_custpoint_main",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustDetailPointRequest",
                                    "name": "req_custpoint_detail",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustDetailPointResponse",
                                    "name": "res_custpoint_detail",
                                    "id": 17
                                }
                            ],
                            "oneofs": {
                                "content": [
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17
                                ]
                            }
                        },
                        {
                            "name": "ReceiptPointRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "addednum",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "availablenum",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "gettime",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "duetime",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "channelcode",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sourceid",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "statuscode",
                                    "id": 9
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "typeid",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "tradeid",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "tradeamount",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "rewardid",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "hisuuid",
                                    "id": 15
                                }
                            ]
                        },
                        {
                            "name": "CustDetailPointRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "begindate",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "enddate",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ordername",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "num",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "item",
                                    "id": 6
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "querytype",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "ordertype",
                                    "id": 8
                                }
                            ]
                        },
                        {
                            "name": "CustDetailPointResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "PointInfo",
                                    "name": "pi",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "countnum",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "PointInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "pointnum",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "currenttotalnum",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "gettime",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "channelcode",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "typeid",
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
                                    "type": "string",
                                    "name": "channelname",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "typename",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "duetime",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "ReceiptPointResponse",
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
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "DisbursedPointRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "disbursednum",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "channelcode",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "sourceid",
                                    "id": 4
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "typeid",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 6
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "isenable",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "couponid",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "disbursedtime",
                                    "id": 9
                                }
                            ]
                        },
                        {
                            "name": "DisbursedPointResponse",
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
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "CustMainPointRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "mobile",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "cardno",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "CustMainPointResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "currenttotalnum",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "cumulativenum",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "expirednum",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "usednum",
                                    "id": 4
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "custid",
                                    "id": 5
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();