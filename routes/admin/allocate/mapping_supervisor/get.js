const express = require("express");
const router = express.Router();
const db = require("../../../db");
const verifyToken = require("../../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql =
    "SELECT mapping_supervisor.map_sup_id,mapping_supervisor.admin_id,admin.mobile_no,admin.name,admin.address_1,address_2,admin.city,admin.admin_type,mapping_supervisor.date_from,mapping_supervisor.date_to,centre.centre_name,centre_pincode from mapping_supervisor JOIN admin ON mapping_supervisor.admin_id=admin.admin_id JOIN centre ON mapping_supervisor.centre_id=centre.centre_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ mappingsupervisorget: result });
    }
  });
});

module.exports = router;
