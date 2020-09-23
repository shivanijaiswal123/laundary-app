var express = require("express");
var router = express.Router();

var add = require("./add");
router.use("/add", add);

var get = require("./get");
router.use("/get", get);

module.exports = router;
