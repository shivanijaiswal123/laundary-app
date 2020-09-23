const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql =
    "SELECT rate.rate_id,cloth_type.cloth_type_id,cloth_type.cloth_type,society.society_name,rate.society_id,rate.rate FROM rate JOIN cloth_type ON rate.cloth_type_id=cloth_type.cloth_type_id JOIN society ON rate.society_id=society.society_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ rateget: result });
    }
  });
});

module.exports = router;
