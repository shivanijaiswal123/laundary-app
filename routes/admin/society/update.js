const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.put("/:society_id", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { society_name, centre_id } = req.body;
  if (society_name && centre_id) {
    let update = {
      society_name: society_name,
      centre_id: centre_id
    };
    let sql = `UPDATE society SET ?  WHERE society_id='${req.params.society_id}'`;
    let query = db.query(sql, update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ msg: "Updates done in society" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
