const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let bulkclothtype = req.body.bulkclothtype;
  let clothtype = Object.keys(req.body.bulkclothtype[0]);
  let values = bulkclothtype.map(obj => clothtype.map(type => obj[type]));

  if (values.length > 0) {
    let sql = `INSERT INTO rate (${clothtype.join(",")}) values ?`;
    let query = db.query(sql, [values], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ msg: "Rate has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
