const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql =
    "SELECT society.society_id,society.society_name,centre.centre_id,centre_name,centre_pincode from society JOIN centre ON society.centre_id=centre.centre_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ societyget: result });
    }
  });
});

module.exports = router;
