const express = require("express");
const db = require("../db");
const verifyToken = require("./../admin/verifyToken");
const router = express.Router();

router.post("/",verifyToken,(req,res)=>{
let orderQuery=`INSERT into orders(customer_id,total_count,status) values('${req.body.customer_id}','${req.body.count}','2')`
db.query(orderQuery,(err,result)=>{
  if (err)
  {return response.status(500).json({ error: err.message , success: false});}
   if(result.affectedRows>0)
  {
    let date=new Date();
    let month=date.getMonth()+1;
    let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    let timeQuery=`INSERT into time(order_id,status_id,timestamp) values('${result.insertId}','2','${timestamp}')`
    db.query(timeQuery,(err,finalResult)=>{
           if (err)
           {return response.status(500).json({ error: err.message , success: false});}
          return res.json({success:true,message:"order created successfully"});
    })
  }
  else{
      return res.json({message : "Order Not Created",success:false});
   }
})

})
module.exports=router;
