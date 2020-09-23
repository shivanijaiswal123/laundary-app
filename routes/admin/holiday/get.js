const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", (req, res) => {
  let date = req.query.date;
  let sql = `SELECT * from holiday where holiday_date='${date}' and status=1`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        res.json({ success: true, message: "Today is holiday" });
      } else {
        res.json({ success: true, message: "No holiday" });
      }
    }
  });
});

router.get("/all", (req, res) => {

  let sql = `SELECT * from holiday`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({success:"true",result});
    }
  });
});

module.exports = router;
