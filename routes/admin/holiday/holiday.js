var express = require("express");
var router = express.Router();

var add = require("./add");
router.use("/add", add);

var get = require("./get");
router.use("/get", get);

var getbycentre = require("./getbycentre");
router.use("/getbycentre",getbycentre);

var editbycentre = require("./editbycentre");
router.use("/editbycentre",editbycentre);

module.exports = router;
