const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.post("/", verifyToken, (req, res) => {
  let { society_id, discount } = req.body;
  if (society_id && discount >-1) {
    let post = {
      society_id: society_id,
      discount: discount
    };
    let sql = "INSERT INTO discount SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res
          .status(200)
          .json({ success: "true", msg: "Discount has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});
router.get("/:society_id", verifyToken, (req, res) => {
  let society_id = req.params.society_id;
  let sql = `Select society_id,discount FROM discount where society_id=${society_id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: "true", discountget: result });
    }
  });
});

router.put("/", verifyToken, (req, res) => {
  let { society_id, discount } = req.body;
  if (society_id && discount> -1) {
    let update = {
      discount: discount
    };
    let sql = `UPDATE   discount  SET ?  WHERE society_id='${society_id}'`;
    let query = db.query(sql, update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ success: "true", msg: "Updates done in Discount" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
