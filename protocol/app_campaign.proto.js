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
            "name": "app",
            "fields": [],
            "messages": [
                {
                    "name": "campaign",
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
                                    "type": "GetCampaignInfoRequest",
                                    "name": "req_get_campaign_info",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCampaignInfoResponse",
                                    "name": "res_get_campaign_info",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "CampaignSignRequest",
                                    "name": "req_campaign_sign",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_campaign_sign",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "CampaignSignCancelRequest",
                                    "name": "req_campaign_sign_cancel",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_campaign_sign_cancel",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "CampaignSignCheckRequest",
                                    "name": "req_campaign_sign_check",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_campaign_sign_check",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "CampaignCheckinRequest",
                                    "name": "req_campaign_checkin",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_campaign_checkin",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCampaignSignDataRequest",
                                    "name": "req_get_campaign_sign_data",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCampaignSignDataResponse",
                                    "name": "res_get_campaign_sign_data",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetSignFormRequest",
                                    "name": "req_get_sign_form",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetSignFormResponse",
                                    "name": "res_get_sign_form",
                                    "id": 23
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetSignInfoRequest",
                                    "name": "req_get_sign_info",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetSignInfoResponse",
                                    "name": "res_get_sign_info",
                                    "id": 25
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCampaignSeasonsInfoRequest",
                                    "name": "req_get_campaign_seasons_info",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCampaignSeasonsInfoResponse",
                                    "name": "res_get_campaign_seasons_info",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddCampaignOpenRecordRequest",
                                    "name": "req_add_campaign_open_record",
                                    "id": 28
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_campaign_open_record",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "AddCampaignTransferRecordRequest",
                                    "name": "req_add_campaign_transfer_record",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "NoBody",
                                    "name": "res_add_campaign_transfer_record",
                                    "id": 31
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCheckinSignSeasonsRequest",
                                    "name": "req_get_checkin_sign_seasons",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "GetCheckinSignSeasonsResponse",
                                    "name": "res_get_checkin_sign_seasons",
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
                            "name": "CampaignInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "EScope",
                                    "name": "campaign_scope",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "shop_ids",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "start_time",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "end_time",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "display_start_time",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "display_end_time",
                                    "id": 8
                                },
                                {
                                    "rule": "repeated",
                                    "type": "EDisplayChannel",
                                    "name": "display_channel",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "image_uuid",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "EAlertRule",
                                    "name": "alert_rule",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_days",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_hours",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_minutes",
                                    "id": 15
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "categorys",
                                    "id": 16
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "tags",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_only_member",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_match_level",
                                    "id": 19
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "member_level",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "custom_display",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "custom_display_address",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_need_sign",
                                    "id": 24
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_service_allow_checkin",
                                    "id": 26
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_shop_allow_checkin",
                                    "id": 27
                                },
                                {
                                    "rule": "optional",
                                    "type": "EContentType",
                                    "name": "content_type",
                                    "id": 29
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "content",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sort",
                                    "id": 31
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_top",
                                    "id": 32
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_enabled",
                                    "id": 33
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_deleted",
                                    "id": 34
                                },
                                {
                                    "rule": "optional",
                                    "type": "SignSettingInfo",
                                    "name": "sign_info",
                                    "id": 35
                                }
                            ]
                        },
                        {
                            "name": "SeasonsSettingInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "seasons_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "start_time",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "end_time",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "seasons_name",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sequence",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 60
                                }
                            ]
                        },
                        {
                            "name": "SeasonsRuleInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "seasons_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "seasons_name",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sequence",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "date",
                                    "id": 30
                                },
                                {
                                    "rule": "repeated",
                                    "type": "SeasonsTimeInfo",
                                    "name": "times",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "SeasonsTimeInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "seasons_id",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "begin_time",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "end_time",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "is_signed",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "seasons_limit_nums",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sign_nums",
                                    "id": 80
                                }
                            ]
                        },
                        {
                            "name": "SignSettingInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "EBeginTimeType",
                                    "name": "begin_time_type",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "EEndTimeType",
                                    "name": "end_time_type",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "begin_time",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "end_time",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_begin_hours",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_begin_minutes",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_begin_days",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "pre_begin_time",
                                    "id": 90
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_end_hours",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_end_minutes",
                                    "id": 110
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_end_days",
                                    "id": 120
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "pre_end_time",
                                    "id": 130
                                },
                                {
                                    "rule": "optional",
                                    "type": "ESignLimitType",
                                    "name": "sign_limit_type",
                                    "id": 140
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sign_limit_count",
                                    "id": 150
                                },
                                {
                                    "rule": "optional",
                                    "type": "ESignLimitType",
                                    "name": "each_limit_type",
                                    "id": 160
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "each_limit_count",
                                    "id": 170
                                },
                                {
                                    "rule": "optional",
                                    "type": "EEachSeasonType",
                                    "name": "each_season_type",
                                    "id": 180
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "each_season_count",
                                    "id": 190
                                },
                                {
                                    "rule": "optional",
                                    "type": "ELastCancelTimeType",
                                    "name": "last_cancel_type",
                                    "id": 200
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "last_cancel_time",
                                    "id": 210
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_cancel_hours",
                                    "id": 220
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_cancel_minutes",
                                    "id": 230
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pre_cancel_days",
                                    "id": 240
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "pre_cancel_time",
                                    "id": 250
                                },
                                {
                                    "rule": "optional",
                                    "type": "ECancelNumType",
                                    "name": "cancel_num_type",
                                    "id": 260
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "cancel_num",
                                    "id": 270
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "checkin_url",
                                    "id": 280
                                },
                                {
                                    "rule": "optional",
                                    "type": "ETagActionType",
                                    "name": "tag_action_type",
                                    "id": 290
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "tag_name",
                                    "id": 300
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_direct_confirm",
                                    "id": 320
                                },
                                {
                                    "rule": "optional",
                                    "type": "ESignRuleType",
                                    "name": "rule_type",
                                    "id": 330
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "point_rule",
                                    "id": 340
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "sign_marked_word",
                                    "id": 350
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "checkin_authority",
                                    "id": 360
                                },
                                {
                                    "rule": "repeated",
                                    "type": "SignMetadata",
                                    "name": "sign_metadata",
                                    "id": 370
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "tip",
                                    "id": 380
                                }
                            ]
                        },
                        {
                            "name": "SignMetadata",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "key",
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
                                    "type": "ESignFieldType",
                                    "name": "type",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_must",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "font_color",
                                    "id": 5
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "options",
                                    "id": 6
                                }
                            ]
                        },
                        {
                            "name": "SignSeasonInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "season_date",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "seasons_time_id",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "CustomerInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "level",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "phone",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "CheckinSignInfo",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "ESignStatus",
                                    "name": "status",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "person_num",
                                    "id": 20
                                },
                                {
                                    "rule": "repeated",
                                    "type": "SignSeasonsInfo",
                                    "name": "season_info",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "CheckinSeasonsInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "season_date",
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
                                    "type": "uint64",
                                    "name": "end_time",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "total_num",
                                    "id": 50
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "checkin_num",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "limit_count",
                                    "id": 70
                                }
                            ]
                        },
                        {
                            "name": "SignSeasonsInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "season_date",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "begin_time",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "uint64",
                                    "name": "end_time",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "remark",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "GetCampaignInfoRequest",
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
                                    "name": "shop_id",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "is_online",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "EScope",
                                    "name": "campaign_scope",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "cust_id",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "EDisplayChannel",
                                    "name": "display_channel",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "start_time",
                                    "id": 61
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "end_time",
                                    "id": 62
                                },
                                {
                                    "rule": "optional",
                                    "type": "PageInfo",
                                    "name": "page",
                                    "id": 70
                                }
                            ]
                        },
                        {
                            "name": "GetCampaignInfoResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "CampaignInfo",
                                    "name": "campaign_info",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "total_count",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "CampaignSignRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "SignSeasonInfo",
                                    "name": "seasons",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "ESourceType",
                                    "name": "source_type",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "cust_id",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "customer",
                                    "id": 20
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "phone",
                                    "id": 30
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "name",
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "person_num",
                                    "id": 50
                                },
                                {
                                    "rule": "repeated",
                                    "type": "KeyValue",
                                    "name": "params",
                                    "id": 60
                                }
                            ]
                        },
                        {
                            "name": "CampaignSignCancelRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "customer",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "phone",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "checkin_code",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "CampaignSignCheckRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "ESignStatus",
                                    "name": "status",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "customer",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "phone",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "checkin_code",
                                    "id": 50
                                }
                            ]
                        },
                        {
                            "name": "CampaignCheckinRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "customer",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "phone",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 40
                                },
                                {
                                    "rule": "required",
                                    "type": "ECheckinSource",
                                    "name": "checkin_source",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "checkin_code",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "season_date",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "seasons_time_id",
                                    "id": 80
                                }
                            ]
                        },
                        {
                            "name": "GetCampaignSignDataRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "season_date",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "seasons_time_id",
                                    "id": 30
                                }
                            ]
                        },
                        {
                            "name": "GetCampaignSignDataResponse",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "sign_person_num",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "checkin_person_num",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetSignFormRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetSignFormResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "SignMetadata",
                                    "name": "sign_metadata",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "GetSignInfoRequest",
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
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "seasons_time_id",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "customer",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "phone",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 40
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "checkin_code",
                                    "id": 50
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "cust_id",
                                    "id": 60
                                },
                                {
                                    "rule": "optional",
                                    "type": "ESignStatus",
                                    "name": "status",
                                    "id": 70
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "shop_id",
                                    "id": 80
                                },
                                {
                                    "rule": "optional",
                                    "type": "PageInfo",
                                    "name": "page",
                                    "id": 90
                                }
                            ]
                        },
                        {
                            "name": "GetSignInfoResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "SignInfo",
                                    "name": "sign_info",
                                    "id": 1
                                }
                            ],
                            "messages": [
                                {
                                    "name": "SignInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "campaign_id",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "campaign_name",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "campaign_image_uuid",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "EScope",
                                            "name": "campaign_scope",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "start_time",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "end_time",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "custom_display_address",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "customer",
                                            "id": 20
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "image_uuid",
                                            "id": 25
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "phone",
                                            "id": 30
                                        },
                                        {
                                            "rule": "required",
                                            "type": "string",
                                            "name": "name",
                                            "id": 40
                                        },
                                        {
                                            "rule": "required",
                                            "type": "int32",
                                            "name": "person_num",
                                            "id": 50
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "KeyValue",
                                            "name": "params",
                                            "id": 60
                                        },
                                        {
                                            "rule": "required",
                                            "type": "ESignStatus",
                                            "name": "status",
                                            "id": 70
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "checkin_code",
                                            "id": 75
                                        },
                                        {
                                            "rule": "required",
                                            "type": "uint64",
                                            "name": "time",
                                            "id": 80
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "SeasonsRuleInfo",
                                            "name": "seasons",
                                            "id": 90
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetCampaignSeasonsInfoRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "cust_id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "seasons_id",
                                    "id": 20
                                }
                            ]
                        },
                        {
                            "name": "GetCampaignSeasonsInfoResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "SeasonsRuleInfo",
                                    "name": "seasons",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "AddCampaignOpenRecordRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "ESourceType",
                                    "name": "source_type",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "cust_id",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "customer",
                                    "id": 13
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "phone",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "terminal_brand",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "terminal_os",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "terminal_browser",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "relation_cust_id",
                                    "id": 18
                                }
                            ]
                        },
                        {
                            "name": "AddCampaignTransferRecordRequest",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "ESourceType",
                                    "name": "source_type",
                                    "id": 11
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "cust_id",
                                    "id": 12
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "customer",
                                    "id": 13
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "phone",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "terminal_brand",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "terminal_os",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "terminal_browser",
                                    "id": 17
                                }
                            ]
                        },
                        {
                            "name": "GetCheckinSignSeasonsRequest",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "session_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "campaign_id",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "checkin_code",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "season_date",
                                    "id": 30
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "checkin_seasons_time_id",
                                    "id": 40
                                }
                            ]
                        },
                        {
                            "name": "GetCheckinSignSeasonsResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CustomerInfo",
                                    "name": "cust_info",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "CheckinSeasonsInfo",
                                    "name": "seasons_info",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "CheckinSignInfo",
                                    "name": "sign_info",
                                    "id": 30
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "EDisplayChannel",
                            "values": [
                                {
                                    "name": "webapp",
                                    "id": 1
                                },
                                {
                                    "name": "app",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EScope",
                            "values": [
                                {
                                    "name": "all_shops",
                                    "id": 2
                                },
                                {
                                    "name": "some_shops",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "ETagActionType",
                            "values": [
                                {
                                    "name": "no_tag",
                                    "id": 1
                                },
                                {
                                    "name": "when_sign",
                                    "id": 2
                                },
                                {
                                    "name": "when_confirm",
                                    "id": 3
                                },
                                {
                                    "name": "when_checkin",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ESignRuleType",
                            "values": [
                                {
                                    "name": "avoid_point",
                                    "id": 1
                                },
                                {
                                    "name": "accord_times",
                                    "id": 2
                                },
                                {
                                    "name": "accord_persons",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "ESignFieldType",
                            "values": [
                                {
                                    "name": "text",
                                    "id": 1
                                },
                                {
                                    "name": "radio_button",
                                    "id": 2
                                },
                                {
                                    "name": "checkbox",
                                    "id": 3
                                },
                                {
                                    "name": "date",
                                    "id": 4
                                },
                                {
                                    "name": "number",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "EContentType",
                            "values": [
                                {
                                    "name": "custom_content",
                                    "id": 1
                                },
                                {
                                    "name": "outside_link",
                                    "id": 2
                                },
                                {
                                    "name": "question_research",
                                    "id": 3
                                },
                                {
                                    "name": "template_model",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ESourceType",
                            "values": [
                                {
                                    "name": "wechat",
                                    "id": 1
                                },
                                {
                                    "name": "navive_app",
                                    "id": 2
                                },
                                {
                                    "name": "service_app",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "ESignStatus",
                            "values": [
                                {
                                    "name": "applied",
                                    "id": 0
                                },
                                {
                                    "name": "confirmed",
                                    "id": 1
                                },
                                {
                                    "name": "cancelled",
                                    "id": 2
                                },
                                {
                                    "name": "rejected",
                                    "id": 3
                                },
                                {
                                    "name": "checked",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "EAlertRule",
                            "values": [
                                {
                                    "name": "no_alert",
                                    "id": 0
                                },
                                {
                                    "name": "all_signed",
                                    "id": 1
                                },
                                {
                                    "name": "all_member",
                                    "id": 2
                                },
                                {
                                    "name": "all_people",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "ECheckinSource",
                            "values": [
                                {
                                    "name": "checkin_service_app",
                                    "id": 1
                                },
                                {
                                    "name": "checkin_shop_app",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EBeginTimeType",
                            "values": [
                                {
                                    "name": "regular",
                                    "id": 1
                                },
                                {
                                    "name": "time_before",
                                    "id": 2
                                },
                                {
                                    "name": "date_before",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "EEndTimeType",
                            "values": [
                                {
                                    "name": "regular",
                                    "id": 1
                                },
                                {
                                    "name": "time_before",
                                    "id": 2
                                },
                                {
                                    "name": "time_after",
                                    "id": 3
                                },
                                {
                                    "name": "date_before",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ESignLimitType",
                            "values": [
                                {
                                    "name": "none",
                                    "id": 0
                                },
                                {
                                    "name": "each",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "EEachSeasonType",
                            "values": [
                                {
                                    "name": "none",
                                    "id": 0
                                },
                                {
                                    "name": "each",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "ELastCancelTimeType",
                            "values": [
                                {
                                    "name": "regular",
                                    "id": 1
                                },
                                {
                                    "name": "time_before",
                                    "id": 2
                                },
                                {
                                    "name": "time_after",
                                    "id": 3
                                },
                                {
                                    "name": "date_before",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "ECancelNumType",
                            "values": [
                                {
                                    "name": "between_campaign",
                                    "id": 1
                                },
                                {
                                    "name": "current_date",
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