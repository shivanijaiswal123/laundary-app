const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.put("/:cloth_type_id", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { cloth_type } = req.body;
  if (cloth_type) {
    let update = {
      cloth_type: cloth_type
    };
    let sql = `UPDATE cloth_type SET ?  WHERE cloth_type_id='${req.params.cloth_type_id}'`;
    let query = db.query(sql, update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ msg: "Updates done in cloth type" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
