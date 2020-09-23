const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql =
    "SELECT  order_detail.detail_id,customer.customer_name,customer.phone,customer.flat_no,orders.status,orders.picked_date,orders.total_count,society.society_name,wings.wings_name  FROM  order_detail JOIN orders ON order_detail.order_id=orders.order_id	 JOIN customer ON orders.customer_id=customer.customer_id JOIN society ON customer.society_id=society.society_id JOIN wings ON customer.wings_id=wings.wings_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ order_detailget: result });
    }
  });
});

module.exports = router;
