var express = require("express");
var router = express.Router();

var signup = require("./signup");
router.use("/signup", signup);

var get=require("./get");
router.use("/get",get);

var checkUser=require("./checkUser");
router.use("/checkUser",checkUser);

var getOutstanding=require("./getOutstanding");
router.use("/getOutstanding",getOutstanding);

var getPoints=require("./getPoints");
router.use("/getPoints",getPoints);

var getWings=require("./getWings");
router.use("/getWings",getWings);

var getSociety=require("./getSociety");
router.use("/getSociety",getSociety);

var getHistory=require("./getHistory");
router.use("/getHistory",getHistory);

var getStatus=require("./getStatus");
router.use("/getStatus",getStatus);

var getRate=require("./getRate");
router.use("/getRate",getRate);

var updateStatus=require("./updateStatus");
router.use("/updateStatus",updateStatus);

var checkForDelivery=require("./checkForDelivery");
router.use("/checkForDelivery",checkForDelivery);

var callForLaundry=require("./callForLaundry");
router.use("/callForLaundry",callForLaundry);

var callForDelivery=require("./callForDelivery");
router.use("/callForDelivery",callForDelivery);

var payment=require("./payment");
router.use("/payment",payment);

var addStandardTime=require("./addStandardTime");
router.use("/addStandardTime",addStandardTime);

var addFcmToken=require("./addFcmToken");
router.use("/addFcmToken",addFcmToken);

var getoutstandingofuser = require("./getoutstandingofuser");
router.use("/getoutstandingofuser", getoutstandingofuser);

var getHelp=require("./getHelp");
router.use("/getHelp",getHelp);

var generateCheckSum=require("./generateCheckSum");
router.use("/generateCheckSum",generateCheckSum);

var verifyOrderPaymentStatus=require("./verifyOrderPaymentStatus");
router.use("/verifyOrderPaymentStatus",verifyOrderPaymentStatus);

module.exports = router;
