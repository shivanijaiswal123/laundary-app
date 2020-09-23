const express = require("express");
const db = require("../db");
const verifyToken = require("./verifyToken");
const router = express.Router();
router.post("/", verifyToken, (req, res) => {
  let col_id = req.decoded.admin_id;
  let date = new Date();
  let month = date.getMonth() + 1;
  let timestamp =
    date.getFullYear() +
    "-" +
    month +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  let sqlquery = `Update orders  set status="${req.body.status}" where order_id IN (${req.body.order_id});INSERT INTO time(order_id,status_id,timestamp) values ?`;

  db.query(
    sqlquery,
    [req.body.order_id.map(item => [item, req.body.status, timestamp])],
    (err, result) => {
      if (err != null) {
        console.log(err);
        res.status(500).json({ msg: err.message, success: false });
      } else {
        res.json({ msg: "Updated Status", success: true });
      }
    }
  );
});
module.exports = router;
