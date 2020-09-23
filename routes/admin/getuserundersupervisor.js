const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("./verifyToken");

router.get("/", verifyToken, (req, res) => {
  const admin_id = req.decoded.admin_id;
  let sql = `SELECT customer.customer_id,customer.customer_name FROM customer INNER JOIN society ON customer.society_id=society.society_id INNER JOIN centre ON centre.centre_id=society.centre_id INNER JOIN mapping_supervisor ON mapping_supervisor.centre_id=centre.centre_id WHERE mapping_supervisor.admin_id=${admin_id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ getuser: result });
    }
  });
});

module.exports = router;
