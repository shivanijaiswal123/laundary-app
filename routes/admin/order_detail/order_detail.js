var express = require("express");
var router = express.Router();

var add = require("./add");
router.use("/add", add);

var get = require("./get");
router.use("/get", get);

var update = require("./update");
router.use("/update", update);

var deletesociety = require("./delete");
router.use("/delete", deletesociety);

var order_det = require("./order_det");
router.use("/order_det", order_det);

module.exports = router;
