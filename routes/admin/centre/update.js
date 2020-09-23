const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.put("/:centre_id", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { centre_name, centre_pincode } = req.body;
  if (centre_name && centre_pincode) {
    let update = {
      centre_name: centre_name,
      centre_pincode: centre_pincode
    };
    let sql = `UPDATE centre  SET ?  WHERE centre_id='${req.params.centre_id}'`;
    let query = db.query(sql, update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ msg: "Updates done in centre" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
