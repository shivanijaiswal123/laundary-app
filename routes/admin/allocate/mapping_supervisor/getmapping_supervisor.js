const express = require("express");
const router = express.Router();
const db = require("../../../db");
const verifyToken = require("../../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql =
    "SELECT admin.admin_id,name,mobile_no,address_1,address_2,city,admin_type,centre.centre_name,centre_pincode from mapping_supervisor INNER JOIN admin ON admin.admin_id=mapping_supervisor.admin_id INNER JOIN centre ON centre.centre_id=mapping_supervisor.centre_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ getmapping_supervisor: result });
    }
  });
});

module.exports = router;
