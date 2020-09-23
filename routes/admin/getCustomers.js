const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("./verifyToken");

router.get('/',verifyToken,(req,res)=>{
    let query=`select customer_id,customer_name,phone,flat_no,wings_name,society_name from customer inner join society on customer.society_id = society.society_id inner join wings on customer.wings_id = wings.wings_id;`
    db.query(query,(err,result)=>{
        if(err)
        {
          console.log(err);
          return res.status(500).json({success:false,msg:"Server error"});
        }
        
        if(result.length>0)
        {
          return res.status(200).json({success:true,result:result});
        }
        else{
          return res.status(200).json({success:true,msg:"No Customers Found"});
        }
    });
});
module.exports=router;
