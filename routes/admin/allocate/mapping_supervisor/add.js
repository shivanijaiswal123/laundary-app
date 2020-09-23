const express = require("express");
const router = express.Router();
const db = require("../../../db");
const verifyToken = require("../../verifyToken");
router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { admin_id, centre_id} = req.body;
  if (admin_id && centre_id) {
    let post = {
      admin_id: admin_id,
      centre_id: centre_id
    };
    let sql = "INSERT INTO mapping_supervisor SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ msg: "Mapping supervisor has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
