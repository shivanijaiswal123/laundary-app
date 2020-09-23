const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", (req, res) => {
  let { help_id, user_id, helpreply } = req.body;
  if (help_id && user_id && helpreply) {
    let post = {
      help_id: help_id,
      user_id: user_id,
      helpreply: helpreply
    };
    let sql = "INSERT INTO help_reply SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res
          .status(200)
          .json({ success: "true", msg: "Help  Reply has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
