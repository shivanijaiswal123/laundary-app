const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("./verifyToken");

router.get("/", verifyToken, (req, res) => {
  let admin_id = req.decoded.admin_id;

  let sql = `SELECT customer.customer_id,customer.customer_name from customer INNER JOIN mapping_collectionboy ON mapping_collectionboy.society_id=customer.society_id  WHERE admin_id=${admin_id} `;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ getsocietyUsers: result });
    }
  });
});

module.exports = router;
