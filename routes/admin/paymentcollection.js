const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("./verifyToken");
router.post("/", verifyToken, (req, res) => {
  let { customer_id, amount, type } = req.body;
  if (customer_id && amount && type) {
    let post = {
      customer_id: customer_id,
      amount: amount,
      type: type
    };
    let sql = "INSERT INTO transactiontable SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res
          .status(200)
          .json({ success: "true", msg: "Transaction has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
