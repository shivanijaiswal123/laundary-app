const express = require("express");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const db = require("../db");

dotenv.config();
const router = express.Router();
//This is used to login the supervisor with mobile and password
router.post("/", (req, res) => {
  let { mobile_no, password } = req.body;
  if (mobile_no && password) {
    let sql = `SELECT admin_id,password,admin_type from admin where mobile_no='${mobile_no}'`;
    db.query(sql, function(error, result, fields) {
      if (error) {
        console.log(error);
        return res.json({
          status: false,
          message: "there was some error with query"
        });
      }
      if (result.length > 0) {
        if (result[0].admin_id > 0 && result[0].admin_type=='collection_boy') {
          bcrypt.compare(password, result[0].password, function(err, res1) {
            // res === true
            if (res1) {
              const token = jwt.sign(
                {
                  admin_id: result[0].admin_id
                },
                "TOKENSECRETFORADMIN"
              );
              res.header("auth-token", token).json({ tokenkey: token });
            } else {
              res.json({ msg: "Wrong password" });
            }
          });
          //Create and assign  a token
        } else {
          res.json({ msg: "mobile no  doesnot exist" });
        }
      }
    });
  } else {
    res.json({ msg: "Enter all fields" });
  }
});

module.exports = router;
