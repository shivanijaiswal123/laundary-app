var express = require("express");
var router = express.Router();

// var deliveryList = require("./deliveryList");
// router.use("/deliveryList", deliveryList);

var operation = require("./operation");
router.use("/operation", operation);


module.exports= router;
