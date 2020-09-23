const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql = "SELECT  cloth_type_id,	cloth_type FROM cloth_type";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ cloth_typeget: result });
    }
  });
});

module.exports = router;
