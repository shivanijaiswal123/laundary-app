const express = require("express");
const crypto = require("crypto");
const dotenv = require("dotenv");
const db = require("../db");
dotenv.config();
const verifyToken = require("./verifyToken");
var bcrypt = require("bcryptjs");
const router = express.Router();
//This route is to add the user means signup the user with first_name,
//last_name,email,mobile_number , password, address  , gender ,date_of_birth
router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let {
    mobile_no,
    password,
    name,
    address_1,
    address_2,
    city,
    admin_type
  } = req.body;
  if (mobile_no && password) {
    let userexist = `SELECT count(	mobile_no) as count from admin where 	mobile_no='${req.body.mobile_no}'`;
    let userquery = db.query(userexist, (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result[0].count >= 1) {
        return res.json({
          msg: "Mobile no already exists"
        });
      } else {
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {
            let pass = hash;
            let adduserpost = {
              mobile_no: mobile_no,
              password: pass,
              name: name,
              address_1: address_1,
              address_2: address_2,
              city: city,
              admin_type: admin_type
            };
            let sql = "INSERT INTO admin SET ?";

            let query = db.query(sql, adduserpost, (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.status(200).json({ msg: "Admin created Successfully" });
              }
            });
          });
        });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
