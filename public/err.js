/**
 * Created by Simon on 2016/3/16.
 */

var util = require('util')
/**
 * 通用错误定义0-99
 */
function SCError(code,msg)
{
//	Error.captureStackTrace(this)
	this.errcode=code;
	this.errmsg=msg;
}
util.inherits(SCError, Error);
SCError.prototype.toString=function()
{
	return "errcode="+this.errcode+",message='"+this.errmsg+"'";
}
SCError.prototype.setObject=function(obj)
{
	obj.errcode=this.errcode;
	obj.errmsg=this.errmsg;
}
SCError.prototype.msg=function()
{
	var msg=require('smartacjs').formatArgs(Array.prototype.slice.call(arguments));
	return new SCError(this.errcode,msg);
}

var err={};
// 导出错误对象
err.SCError=SCError;
// 成功
err.success=new SCError(0,null);
// 通用失败
err.fail=new SCError(1,"fail");
// 参数无效
err.invalidParameter=new SCError(2,"invalid parameter");
// 不支持
err.noSupport=new SCError(3,"no support");
// 不存在
err.noExist=new SCError(4,"no exist");
// 超时
err.timeout=new SCError(5,"timeout");
// 繁忙
err.busy=new SCError(6,"busy");
// 缺少参数
err.missParameter=new SCError(7,"miss parameter");
// 系统错误(通用错误)
err.systemError=new SCError(8,"system error");
// 密码错误
err.invalidPassword=new SCError(9,"invalid password");
// 编码失败
err.encodeFailed=new SCError(10,"encode failed");
// 数据库操作失败
err.dbOpertationFailed=new SCError(11,"db error");
// 已占用
err.occupied=new SCError(12,"occupied");
// session不存在
err.noSession = new SCError(13,'cannot find session');
//没有找到
err.noFound = new SCError(14, "no found");
//已经存在
err.isExisted = new SCError(15, "is existed");
//已经锁定
err.isLocked = new SCError(16, "staff is locked");
//已经过期
err.isExpired = new SCError(17, "is expired");
//无效的账户
err.invalidUser = new SCError(18, "invalid user");
//无权限
err.noPermission = new SCError(19, "no permission");
// 无菜单键值
err.noMenukey = new SCError(20, "no menu key");
/**
 * http错误定义
 */
err.http={};
err.http.success=new SCError(200,"");
err.http.invalidParameter=new SCError(400,"invalid parameter");
err.http.formatError=new SCError(400,"format error");
err.http.noFound=new SCError(404,"cann't found");
err.http.invalidAppIdOrSecret=new SCError(400,"invalid appid or secret");
err.http.systemError=new SCError(500,"system error");
err.http.missingArgument=new SCError(400,"missing argument");
err.http.accessReject=new SCError(401,"access reject");
err.http.tooBig=new SCError(400,"data too big");
err.http.convertFail=new SCError(400,"convert fail");
err.http.timeout=new SCError(504,"rpc timeout");

/**
 * 通用方法定义
 */

// 导出错误
module.exports=err;

/**
 * 程序错误100-499
 */

// HotSpot 荷特宝10000~
err.hs={};
err.hs.form={};
err.hs.form.beyondLimit=new SCError(20000,"超出最大限制");
err.hs.form.alreadyCheck=new SCError(20001,"该表单已审核");
err.hs.form.invalidInDate=new SCError(20002,"无效的入库日期");
err.hs.form.alreadyDay=new SCError(20003,"当天已日结，不允许新增或提交新的表单");
err.hs.form.invalidOutDate=new SCError(20004,"无效的出库日期");
err.hs.form.beyondStockLimit=new SCError(20005,"超出库存数量");
err.hs.form.invalidGetCostCenter=new SCError(20006,"领用成本中心必须为主、副成本中心");
err.hs.form.arriveDateNotValid=new SCError(20008,"无效的预计到货日期，核价单生效后才可做该周的采购");
err.hs.form.costCenterDisabled = new SCError(20009, "成本中心已被禁用");
err.hs.form.notApprovedInquiryCheck=new SCError(20010,"预计入库日期对应周的核价单还未做完");
/**
 * Terminal相关API操作错误10000-10049
 */
err.hs.terminal={};
err.hs.terminal.terminalRegistered=new SCError(10000, "terminal has been registered");
err.hs.terminal.invalidProperty=new SCError(10001, "invalid property");
err.hs.terminal.invalidType=new SCError(10002, "invalid terminal type");
err.hs.terminal.terminalOverLimit = new SCError(10003, "the number of terminals over limit");
err.hs.terminal.terminalNotFound=new SCError(10004, "terminal can not be found");
err.hs.terminal.terminalHasBound = new SCError(10005, "terminal has been bound");
err.hs.terminal.terminalNotBound = new SCError(10006, 'terminal has not been bound');
err.hs.terminal.noExistSyncId = new SCError(10007, 'no exist sync id');
err.hs.terminal.terminalNotBelongToShop = new SCError(10008, 'terminal not belong to shop');
/**
 * Enterprise相关API操作错误10050-10099
 */
err.hs.enterprise={};
err.hs.enterprise.invalidProperty=new SCError(10050, "invalid property");
err.hs.enterprise.invalidPayType=new SCError(10051, "invalid payment type");
err.hs.enterprise.invalidProtoType=new SCError(10052, "invalid protocol type");
err.hs.enterprise.invalidProtocolSettlementType = new SCError(10053, 'invalid protocol settlement type');

/**
 * customer相关API操作错误10100-10200
 */
err.hs.customer = {};
err.hs.customer.invalidCustomerStatus = new SCError(10100, "invalid customer status");
err.hs.customer.customerBound  = new SCError(10101, "customer has bound card before");
err.hs.customer.customerUnBound  = new SCError(10102, "customer has not bound card before");
/**
 * sub_account相关API操作错误10201-10300
 */
err.hs.subAccount = {};
err.hs.subAccount.invalidPayFee = new SCError(10201, "invalid payment fee");
err.hs.subAccount.invalidPaymentID = new SCError(10202, "invalid payment id");
err.hs.subAccount.invalidPayment = new SCError(10203, "invalid payment");
err.hs.subAccount.invalidCheckCode = new SCError(10204, 'invalid check code');
err.hs.subAccount.invalidRequestID = new SCError(10205, 'invalid request id');
err.hs.subAccount.sendCouponFailed = new SCError(10206, 'failed to send coupon');
err.hs.subAccount.sendPointFailed = new SCError(10207, 'failed to send point');

err.hs.subAccount.insufficientBalance  = new SCError(10210, "balance is insufficient");
err.hs.subAccount.noAllowedCanclePay = new SCError(10214, "no allowed to cancle pay");
err.hs.subAccount.noAllowedCancleCharge = new SCError(10215, "no allowed to charge pay");
err.hs.subAccount.noAllowedRefundPay =  new SCError(10216, "no allowed to refund pay");
err.hs.subAccount.noAllowedInvoice = new SCError(10217, "no allowed to invoice");
err.hs.subAccount.noAllowedRepeatedDonate = new SCError(10218, "no allowed to repeated donate");
err.hs.subAccount.noAllowedOneSettlementActivities = new SCError(10219, 'no allowed to use activities which belong to the same settlement account');
err.hs.subAccount.noSupportedCouponType = new SCError(10220, 'no supported coupon type');
err.hs.subAccount.noAllowedUseMultFullCoupon = new SCError(10221, 'no allowed to use multiple full coupon');
err.hs.subAccount.noAllowedUseMultTypeCoupon = new SCError(10222, 'no allowed to use multiple type coupon');
err.hs.subAccount.noAllowedUseActivityAndCoupon = new SCError(10223, 'no allowed to use activity and coupon at a time');
err.hs.subAccount.noAllowedRevokePay = new SCError(10224, 'no allowed to revoke pay');
err.hs.subAccount.noAllowedRefundCard = new SCError(10225, 'no allowed to refund card');

err.hs.subAccount.invalidCharge = new SCError(10227, "invalid charge");
err.hs.subAccount.invalidRefundFee = new SCError(10228, "invalid refund fee");
err.hs.subAccount.invalidSubAccountStatus = new SCError(10229, "invalid sub account status");
err.hs.subAccount.invalidChangeID = new SCError(10230, "invalid change id");
err.hs.subAccount.DestoryCouponFailed = new SCError(10231, 'fail to destory coupon');
err.hs.subAccount.noSyncAllPayment = new SCError(10232, 'no synchronize all payment');

/**
 * card相关API操作错误10301-10349
 */
err.hs.card = {};
err.hs.card.invalidCardStatus = new SCError(10301, "invalid card status");
err.hs.card.invalidCardType = new SCError(10302, "invalid card type");
err.hs.card.invalidCardId = new SCError(10303, "invalid card id");
err.hs.card.depositNotEnough = new SCError(10304, "deposit is not enough");
err.hs.card.alreadyLostOrRetrieve = new SCError(10305, "no need to change the card status, the status is lost or retrieve already");
err.hs.card.invalidCardPhysicsId = new SCError(10306, 'invalid card physics id');
err.hs.card.notBelongToShopOrTenant = new SCError(10307, 'the card_no not be belong to the shop or tenant');
/**
 * staff相关API操作错误10350-10400
 */
err.hs.staff = {};
err.hs.staff.staffExisted = new SCError(10351, "staff is existed");
/**
 * booth相关API操作错误10401-10450
 */
err.hs.booth = {};
err.hs.booth.boothClosed = new SCError(10401, "booth has been closed");
/**
 * takeout相关API操作错误10451-10500
 */
err.hs.takeout = {};
err.hs.takeout.invalidTakeoutStatus = new SCError(10451, 'invalid takeout status');
err.hs.takeout.noAllowedCancel = new SCError(10452, 'no allowed to cancel');
err.hs.takeout.noAllowedAccept = new SCError(10453, 'no allowed to accetp');
err.hs.takeout.noAllowedSend = new SCError(10454, 'no allowed to send');
err.hs.takeout.noAllowedReject = new SCError(10455, 'no allowed to reject');
// srserver相关API操作错误
err.sr = {};


/**
 * 会员信息
 */
err.sr.customer = {};
err.sr.customer.notFindFans = new SCError(2000, "cannot find the fans info by openid and accountid in system");
err.sr.customer.duplicateOpenid = new SCError(2001, "openid is already exists in system");
err.sr.customer.duplicateMobileOrIdNum= new SCError(2002, "mobile or id num already exists in system");
err.sr.customer.duplicateCardNo= new SCError(2003, "card no already exists in system");
err.sr.customer.cannotChangeFreezedCard= new SCError(2004, "freezed card cannot be changed");
err.sr.customer.cardAlreadyDeleted= new SCError(2005, "card already be deleted");
err.sr.customer.noCardStatusChange= new SCError(2006, "card status is not be changed");
err.sr.customer.noReleatedCard=new SCError(2007, "no matched card");
err.sr.customer.mobileInfoNotMatched=new SCError(2008, "the information of card's mobile is not matched");
err.sr.customer.codeInfoNotMatched=new SCError(2011, "the information of card's activation code is not matched");
err.sr.customer.incorrectCardInfo=new SCError(2009, "incorrect card info");
err.sr.customer.alreadyExpired=new SCError(2010, "The card is already expired");
/**
 * 礼券信息
 */
err.sr.coupon = {};
err.sr.coupon.couponTemplateNotExist = new SCError(2050, "coupon template doesnot exist");
err.sr.coupon.couponLowStock = new SCError(2051, "coupon is low stock");
err.sr.coupon.invalidCoupon = new SCError(2052, "coupon is not in valid period");
err.sr.coupon.disableCoupon = new SCError(2053, "coupon is disabled");
err.sr.coupon.beyondSendLimit = new SCError(2054, "beyond the send limit count");
err.sr.coupon.notAcceptCardLimit = new SCError(2055, "not accept card type limit");
err.sr.coupon.couponInstanceNotExist = new SCError(2056, "cannot find the coupon in system by coupon no or instance id");
err.sr.coupon.alreadyUsed = new SCError(2057, "coupon is already used.");
err.sr.coupon.couponNoRequired = new SCError(2058, "coupon no is required");
err.sr.coupon.notBelongToCustomer = new SCError(2059, "coupon doesnot belong to the customer");
err.sr.coupon.alreadyLocked = new SCError(2060, "coupon has been locked by other");
err.sr.coupon.invalidSaleCoupon = new SCError(2061, "sale coupon is not in valid period");
err.sr.coupon.notAllowUseForShop = new SCError(2062, "the coupon is not allow used in this shop");
err.sr.coupon.prebuildInstanceNoNotExist = new SCError(2063, "cannot find the coupon's prebuild instance no");



// scAPPServer相关API操作错误
err.as = {};

/**
 * 用户登录--相关API操作错误1001~1050
 */
err.as.session = {};
err.as.session.notFind = new SCError(1002, "cannot find the staff in system");
err.as.session.createSessionError = new SCError(1003, "create session error");
err.as.session.nameAndPasswordRequired = new SCError(1004, "both user name and password are required");


/**
 * 会员信息--相关API操作错误1051~1100
 */
err.as.customer = {};
err.as.customer.notExist = new SCError(1051, "customer does not exist");
err.as.customer.notFind = new SCError(1052, "cannot find any customer by condition");
err.as.customer.validCodeError = new SCError(1053, "invalid code");
err.as.customer.duplicateMobile = new SCError(1054, "duplicate mobile in system");
err.as.customer.duplicateIdNum = new SCError(1055, "duplicate id num in system");
err.as.customer.getCustCouponCountError = new SCError(1056, "get total coupon count for customer error ");
err.as.customer.validCodeIsRequired= new SCError(1057, "valid code is required");
err.as.customer.updateCustomerError= new SCError(1058, "update customer error");
err.as.customer.sendValidCodeError= new SCError(1059, "send validation code failed");
err.as.customer.notFindPointMain= new SCError(1060, "cannot find any point data");

/**
 * 会员卡--相关API操作错误1101~1150
 */
err.as.customerCard = {};
err.as.customerCard.notExist = new SCError(1101, "cannot find any customer by this card no");
err.as.customerCard.notFind = new SCError(1102, "cannot find any card");
err.as.customerCard.cardNoRequired = new SCError(1103, "card no is required");
err.as.customerCard.invalidCard = new SCError(1104, "card is invalid");
/**
 * 礼券--相关API操作错误1151~1200
 */
err.as.coupon = {};
err.as.coupon.notExist = new SCError(1151, "coupon template doesnot exist");
err.as.coupon.noUsedHistory = new SCError(1152, "no coupon used history");
err.as.coupon.sendCouponError = new SCError(1153, "send coupon error");
err.as.coupon.noCouponOrderBeAdded = new SCError(1154, "no coupon order be added");
err.as.coupon.noPointRule = new SCError(1155, "cannot find any point rule");

err.as.coupon.couponLowStock = new SCError(1157, "coupon is low stock");
err.as.coupon.invalidCoupon = new SCError(1158, "coupon is not in valid period");
err.as.coupon.disableCoupon = new SCError(1159, "coupon is disabled");
err.as.coupon.beyondSendLimit = new SCError(1160, "beyond the send limit count");
err.as.coupon.notAcceptCardLimit = new SCError(1161, "not accept card type limit");
err.as.coupon.notApplyForService = new SCError(1162, "can not be used in service app");
err.as.coupon.couponNoNotExist = new SCError(1163, "coupon no doesnot exist");
err.as.coupon.alreadyUsed = new SCError(1164, "coupon is already used.");
err.as.coupon.couponNoRequired = new SCError(1165, "coupon no is required");
err.as.coupon.notEnoughPoint = new SCError(1166, "customer doesnot have enough point to exchange the coupon.");
err.as.coupon.notApplyForStore = new SCError(1167, "can not be used in store app");
err.as.coupon.deletCouponFaild = new SCError(1168, "delete coupon faild");

/**
 * 积分兑换--相关API操作错误1201~1250
 */
err.as.point = {};



/**
 * 问题处理--相关API操作错误1251~1300
 */
err.as.feedback = {};
err.as.feedback.notExist = new SCError(1251, "feedback doesnot exist");
err.as.feedback.noFeedbackBeReplied = new SCError(1252, "no feedback was be replied successfully");
err.as.feedback.addFeedbackError = new SCError(1253, "add feedback failed");


/**
 * 自助积分--相关API操作错误1301~1350
 */
err.as.invoice = {};
err.as.invoice.notExist = new SCError(1301, "invoice doesnot exist");
err.as.invoice.nothingToDo = new SCError(1302, " no need to do anything");
err.as.invoice.noInvoiceBeChecked = new SCError(1303, "no invoice was be checked successfully");
err.as.invoice.noInvoiceBeAdded = new SCError(1304, "no invoice was be added successfully");
err.as.invoice.addTradeError = new SCError(1305, "add trade info error");
err.as.invoice.tradeNoIsExists= new SCError(1306, "trade no already exists");

/**
 * 公共方法--相关API操作错误1351~1400
 */
err.as.common = {};
err.as.common.notExist = new SCError(1351, "code doesnot exist");
err.as.common.noShopExist = new SCError(1352, "cannot find shop data");
err.as.common.noRowsAffected = new SCError(1353, "no rows be affected");



/**
 * 积分兑换规则--相关API操作错误1451~1450
 */
err.as.rule = {};
err.as.rule.notExist = new SCError(1451, "rule doesnot exist");
err.as.rule.payFaild = new SCError(1452, "pay coupon faild");
err.as.rule.notAllowRefund = new SCError(1453, "Order not allow to refund");
err.as.rule.refundFaild = new SCError(1454, "refund coupon faild");
err.as.rule.cancelOrderFaild = new SCError(1455, "cancel order faild");
err.as.rule.invalidSaleCoupon = new SCError(1456, "sale coupon is not in valid period");
err.as.rule.WXQueryOrderFaild = new SCError(1457, "wxpay query order faild ");
err.as.rule.invalidOrderStatus = new SCError(1458, "Order status is invalid, not allow to pay ");
/**
 * webapp商铺--相关API操作错误1500~1550
 */
err.as.shop = {};
err.as.shop.idRequired = new SCError(1500, "shop id is required");
err.as.shop.notExist = new SCError(1501, "shop doesnot exist");
err.as.shop.extendNotExist = new SCError(1502, "extend data doesnot exist");
err.as.shop.custidRequired = new SCError(1503, "cust id is required");
err.as.shop.shopAlreadyCollect = new SCError(1504, "shop is already collected");
err.as.shop.collectShopError = new SCError(1505, "collect shop error");
err.as.shop.queryQueueDetailError = new SCError(1506, "call cfqueue to get queue detail failed");
err.as.shop.addQueueError = new SCError(1507, "add queue failed");
err.as.shop.queueNotExist = new SCError(1508, "queue doesnot exists");
err.as.shop.cancelQueueError = new SCError(1509, "cancel queue failed");
err.as.shop.queueAlreadySeated = new SCError(1510, "already seated");
err.as.shop.queueAlreadyCancelled = new SCError(1511, "already cancelled");
err.as.shop.queryTableRuleError = new SCError(1512, "query table rule data failed");
err.as.shop.notAvailableTable = new SCError(1513, "this shop does not have the available table for such meals num.");
err.as.shop.notAcceptReserve = new SCError(1514, "this shop is not accepted to reserve");
err.as.shop.notAcceptReserveWithTime = new SCError(1515, "this time period does not accept to reserve");
err.as.shop.noFreeTable = new SCError(1516, "there is no free table in this time period");
err.as.shop.duplicateReserve = new SCError(1517, "duplicate reserve");
err.as.shop.addReserveError = new SCError(1518, "add reserve failed");
err.as.shop.reserveInAdvanceForHour = new SCError(1519, "Must be reserved X hours in advance");
err.as.shop.reserveInAdvanceForDay= new SCError(1520, "Must be reserved X days in advance");
err.as.shop.reserveNotExist = new SCError(1521, "reserve data not exist");
err.as.shop.reserveAleadyCancelled = new SCError(1522, "reserve already cancelled");
err.as.shop.notCancelledForSeatedReserve = new SCError(1523, "reserve cannot be cancelled because already seated");
err.as.shop.cancelReserveError = new SCError(1524, "cancel reserve failed");
err.as.shop.notAcceptComment = new SCError(1525, "this shop is not accepted to add comment");
err.as.shop.addCommentError = new SCError(1526, "add comment failed");
err.as.shop.addPraiseError = new SCError(1527, "add praise failed");
err.as.shop.alreadyPraised= new SCError(1528, "shop is already praised by this customer");
err.as.shop.notAcceptQueue = new SCError(1529, "this shop is not accepted to queue");
err.as.shop.updateQueueError = new SCError(1530, "update queue failed");
err.as.shop.noNeedQueueError = new SCError(1531, "The shop does not need to queue to take the number currently");
/**
 * webapp商铺--相关API操作错误1551~1600
 */
err.as.campaign = {};
err.as.campaign.alreadysign=new SCError(1551,"already sign!");
err.as.campaign.reachMaximum=new SCError(1552,"reach the maximum value!");
err.as.campaign.noEnougnPoint=new SCError(1553,"no enough point!");
err.as.campaign.personNumError=new SCError(1554,"too many persons!");
err.as.campaign.singTimeError=new SCError(1555,"out of date!");
err.as.campaign.customerLevelNotMatch=new SCError(1556,"customer level not match!");
err.as.campaign.noAccessCheckin=new SCError(1557,"no Access to check in!");

err.as.campaign.notStart=new SCError(1600,"Not to arrive the sign start time!");
err.as.campaign.alreadyEnd=new SCError(1601,"The sign of deadline passed! ");
err.as.campaign.beyondTotalLimitNumCount=new SCError(1602,"Already beyond the campaign's total limit person num!");
err.as.campaign.beyondLimitSessionNumCount=new SCError(1603,"Already beyond the campaign's limit session num of each person!");
err.as.campaign.beyondEachLimitNumCount=new SCError(1604,"Already beyond the campaign's limit num of each person!");
err.as.campaign.noAccessCancel=new SCError(1605,"Not allow to cancel!");
err.as.campaign.beyondLimitCancelNumCount=new SCError(1606,"Already beyond the campaign's limit cancel num!");
err.as.campaign.checkinCodeNotExist=new SCError(1607,"The checkin code is not exist!");
err.as.campaign.statusNotAllowCancel=new SCError(1608,"Not allow to cancel for current sign status!");
/**
 * 奖赏引擎签到规则--相关API操作错误1560~1600
 */
err.sr.reward = {};
err.sr.reward.alreadysign = new SCError(1560, "already sign!");