const express = require("express");
const router = express.Router();
const db = require("../../../db");
const verifyToken = require("../../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql =
    "SELECT mapping_collectionboy.admin_id,mapping_collectionboy.society_id,mapping_collectionboy.date_from,mapping_collectionboy.date_to,admin.mobile_no,admin.name,admin.address_1,admin.address_2,admin.city,admin.admin_type,society.society_name FROM mapping_collectionboy JOIN admin ON mapping_collectionboy.admin_id=admin.admin_id JOIN society ON  mapping_collectionboy.society_id=society.society_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ mappingsupervisorget: result });
    }
  });
});

module.exports = router;
