const express = require("express");
const db = require("../db");
const verifyToken = require("./../admin/verifyToken");
const router = express.Router();

router.get("/",verifyToken,(req,res)=>{
  let date = new Date();
  let timeValue=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
  let getStandardTimeQuery=`select customer_name,phone,society_name,wings_name,flat_no,customer.customer_id as'customer_id', time_to from customer 
  inner join customer_prefrence on customer.customer_id=customer_prefrence.customer_id 
  inner join society on customer.society_id=society.society_id 
  inner join wings on customer.wings_id=wings.wings_id 
  where customer_prefrence.time_to>='${timeValue}' and society.society_id in (select society_id from mapping_collectionboy where admin_id='${req.decoded.admin_id}')`
  
  console.log(getStandardTimeQuery);
  db.query(getStandardTimeQuery,(err,standardTimeResult)=>{
    console.log(err);
    console.log(standardTimeResult);
    if(err)
    {
      console.log(err);
      return res.status(500).json({ error: err.message , success: false});
    }
     else if(standardTimeResult.length>0)
      {
        return res.status(200).json({ success: true, message: "List of Customers",result:standardTimeResult });
      }
      else{
          return res.status(200).json({ success: true, message: "No customer at this time" });
      }
  })
})
module.exports=router;
