const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.put("/", verifyToken, (req, res) => {
  
  let {  holiday_id,holiday_date,centre_id} = req.body
  if (holiday_date) {
    let update = {
      holiday_date:holiday_date
    };
    let sql = `UPDATE holiday  SET ?  WHERE centre_id=${centre_id} and holiday_id=${holiday_id}`;
    let query = db.query(sql, update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ msg: "Update done in holiday" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
