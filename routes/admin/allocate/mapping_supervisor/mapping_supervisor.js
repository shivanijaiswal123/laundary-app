var express = require("express");
var router = express.Router();

var add = require("./add");
router.use("/add", add);

var update = require("./update");
router.use("/update", update);

var get = require("./get");
router.use("/get", get);

var getmapping_supervisor = require("./getmapping_supervisor");
router.use("/getmapping_supervisor", getmapping_supervisor);

module.exports = router;
