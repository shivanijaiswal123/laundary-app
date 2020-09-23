var express = require("express");
var router = express.Router();

// var add = require("./add");
// router.use("/add", add);

var get = require("./get");
router.use("/get", get);

var getOrders = require("./getOrders");
router.use("/getOrders", getOrders);

var getOrdersDetail = require("./getOrdersDetail");
router.use("/getOrdersDetail", getOrdersDetail);

var signup = require("./signup");
router.use("/signup", signup);

var login = require("./login");
router.use("/login", login);

var centre = require("./centre/centre");
router.use("/centre", centre);

var society = require("./society/society");
router.use("/society", society);

var wings = require("./wings/wings");
router.use("/wings", wings);

var mapping_supervisor = require("./allocate/mapping_supervisor/mapping_supervisor");
router.use("/mapping_supervisor", mapping_supervisor);

var mapping_collectionboy = require("./allocate/mapping_collectionboy/mapping_collectionboy");
router.use("/mapping_collectionboy", mapping_collectionboy);

var rate = require("./rate/rate");
router.use("/rate", rate);

var cloth_type = require("./cloth_type/cloth_type");
router.use("/cloth_type", cloth_type);

var order_detail = require("./order_detail/order_detail");
router.use("/order_detail", order_detail);

var help = require("./help/help");
router.use("/help", help);

var help_reply = require("./help_reply/help_reply");
router.use("/help_reply", help_reply);



var holiday = require("./holiday/holiday");
router.use("/holiday", holiday);

var updateoperations = require("./updateoperations");
router.use("/updateoperations", updateoperations);

var getSocietyUser = require("./getSocietyUser");
router.use("/getSocietyUser", getSocietyUser);

var paymentcollection = require("./paymentcollection");
router.use("/paymentcollection", paymentcollection);

var getuserundersupervisor = require("./getuserundersupervisor");
router.use("/getuserundersupervisor", getuserundersupervisor);

var getCustomers = require("./getCustomers");
router.use("/getCustomers", getCustomers);

module.exports = router;