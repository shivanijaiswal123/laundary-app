const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { cloth_type } = req.body;
  if (cloth_type) {
    let post = {
      cloth_type
    };
    let sql = "INSERT INTO cloth_type SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ msg: "Cloth type has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
