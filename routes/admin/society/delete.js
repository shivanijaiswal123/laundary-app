const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.delete("/:id", verifyToken, (req, res) => {
  let sql = `DELETE FROM society WHERE id='${req.params.id}'`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ msg: "Society Deleted" });
    }
  });
});

module.exports = router;
