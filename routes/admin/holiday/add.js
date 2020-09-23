const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", verifyToken, (req, res) => {
  let { holiday_date ,centre_id} = req.body;
  if (holiday_date) {
    let post = {
      holiday_date: holiday_date,
      centre_id:centre_id
    };
    let sql = "INSERT INTO holiday SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ msg: "Holiday has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
