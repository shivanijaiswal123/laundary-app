var express = require("express");
var router = express.Router();

var callsForCollection = require("./callsForCollection");
router.use("/callsForCollection", callsForCollection);

var callsForDelivery = require("./callsForDelivery");
router.use("/callsForDelivery", callsForDelivery);

var callsForDelivery = require("./callsForDelivery");
router.use("/callsForDelivery", callsForDelivery);

var common30 = require("./common30");
router.use("/common30", common30);

var collectCloth=require("./collectCloth");
router.use("/collectCloth", collectCloth);

var common30supervisor = require("./common30supervisor");
router.use("/common30supervisor", common30supervisor);

var login=require("./login");
router.use("/login", login);

var getStandardTime= require("./getStandardTime");
router.use("/getStandardTime",getStandardTime);

var getStandardTimeDelivery= require("./getStandardTimeDelivery");
router.use("/getStandardTimeDelivery",getStandardTimeDelivery);

var addStandardTimeOrder=require("./addStandardTimeOrder");
router.use("/addStandardTimeOrder",addStandardTimeOrder);

var standardOrderDelivered=require("./standardOrderDelivered");
router.use("/standardOrderDelivered",standardOrderDelivered);

var addFcmToken=require("./addFcmToken");
router.use("/addFcmToken",addFcmToken);

module.exports=router;
