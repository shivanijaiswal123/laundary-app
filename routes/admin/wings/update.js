const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.put("/:wings_id", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { wings_name, society_id } = req.body;
  if (wings_name && society_id) {
    let update = {
      wings_name: wings_name,
      society_id: society_id
    };
    let sql = `UPDATE wings SET ?  WHERE wings_id='${req.params.wings_id}'`;
    let query = db.query(sql, update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ msg: "Updates done in wings" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
