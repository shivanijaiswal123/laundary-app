const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.put("/:rate_id", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { cloth_type_id, society_id, rate } = req.body;
  if (cloth_type_id && society_id && rate) {
    let update = {
      cloth_type_id: cloth_type_id,
      society_id: society_id,
      rate: rate
    };
    let sql = `UPDATE rate SET ?  WHERE rate_id='${req.params.rate_id}'`;
    let query = db.query(sql, update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ msg: "Updates done in rate" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
