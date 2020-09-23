const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", (req, res) => {
  let { customerid, helpbrief } = req.body;
  if ((customerid, helpbrief)) {
    let post = {
      customerid: customerid,
      helpbrief: helpbrief
    };
    let sql = "INSERT INTO help SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ success: "true", msg: "Help has been added" });
      }
    });
  } else {
    res.json({ success: true, msg: "All fields are required" });
  }
});

module.exports = router;
