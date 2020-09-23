const express = require("express");
const router = express.Router();
const db = require("../../../db");
const verifyToken = require("../../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql =
    "SELECT admin.admin_id,name,mobile_no,address_1,address_2,city,admin_type,society.society_name from mapping_collectionboy INNER JOIN admin ON admin.admin_id=mapping_collectionboy.admin_id INNER JOIN society ON society.society_id=mapping_collectionboy.society_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ getmapping_collectionboy: result });
    }
  });
});

module.exports = router;
