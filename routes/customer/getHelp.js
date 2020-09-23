const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  if(req.body.customer_id){
  let sql =
    `SELECT help.help_id,customerid,customer.customer_name,customer.flat_no,customer.phone,society.society_name,wings.wings_name,	helptype,helpbrief,help_reply.helpreply FROM help INNER JOIN customer ON customer.customer_id=help.customerid INNER JOIN society ON society.society_id=customer.society_id INNER JOIN wings ON wings.wings_id=customer.wings_id LEFT OUTER JOIN help_reply on help.help_id=help_reply.help_id where customerid='${req.body.customer_id}'`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
         res.status(500).json({ success:false,msg:"Some error occured" });
    } else {
      if(result.length>0)
      {
       res.json({ success:true,msg:"List of help records",help: result });
      }
      else{
          res.json({ success:true,msg:"No records found" });
      }
    }
  });
  }
  else{
      res.json({ success:false,msg:"customer id required" });
  }
});

module.exports = router;
