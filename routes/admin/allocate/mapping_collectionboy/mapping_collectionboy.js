var express = require("express");
var router = express.Router();

var add = require("./add");
router.use("/add", add);

var update = require("./update");
router.use("/update", update);


var get = require("./get");
router.use("/get", get);

var getmapping_collectionboy = require("./getmapping_collectionboy");
router.use("/getmapping_collectionboy", getmapping_collectionboy);


module.exports = router;
