const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let sql =
    "SELECT wings.wings_id, wings.wings_name, society.society_id,society.society_name,centre.centre_id,centre.centre_name,centre.centre_pincode from wings JOIN society ON wings.society_id=society.society_id JOIN centre ON society.centre_id=centre.centre_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ wingsget: result });
    }
  });
});

module.exports = router;
