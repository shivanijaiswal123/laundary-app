var express = require("express");
var router = express.Router();

var add = require("./add");
router.use("/add", add);

var get = require("./get");
router.use("/get", get);

var update = require("./update");
router.use("/update", update);

var deletecentre = require("./delete");
router.use("/delete", deletecentre);

module.exports = router;
