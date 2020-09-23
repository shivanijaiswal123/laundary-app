const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");



router.get("/:centre_id", (req, res) => {

  let sql = `SELECT * from holiday where centre_id=${req.params.centre_id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({success:"true",getholidaybycentre:result});
    }
  });
});

module.exports = router;
