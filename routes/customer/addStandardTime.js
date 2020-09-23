const express = require("express");
const db = require("../db");
const router = express.Router();

router.post("/",(req,res)=>{
  let addStandardQuery=`insert into customer_prefrence(customer_id,time_from,time_to) values('${req.body.customer_id}','${req.body.time_from}','${req.body.time_to}');update customer set prefered_time=1 where customer_id='${req.body.customer_id}'`
  
  db.query(addStandardQuery,(err,resultAddStandard)=>{
    if(err)
    {
      console.log(err);
      return res.status(500).json({ error: err.message , success: false});
    }
     else{
      if(resultAddStandard[0].affectedRows>0)
      {
        return res.status(200).json({ success: true, message: "Standard Time Added" });
      }
      else{
          return res.status(200).json({ success: true, message: "Some Error" });
      }
    }
  })
})
module.exports=router;
