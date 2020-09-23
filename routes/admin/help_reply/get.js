const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/:help_id", (req, res) => {
  let sql =
    `SELECT help_id,user_id,helpreply,customer.customer_name,customer.flat_no,society.society_name,wings.wings_name FROM help_reply JOIN customer ON customer.customer_id=help_reply.user_id JOIN society ON customer.society_id=society.society_id JOIN wings ON wings.wings_id=customer.wings_id where help_id=${req.params.help_id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ helpget: result });
    }
  });
});

module.exports = router;
