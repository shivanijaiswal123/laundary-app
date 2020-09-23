const express = require("express");
const db = require("../db");
const verifyToken = require("./../admin/verifyToken");
const router = express.Router();

router.post("/",verifyToken,(req,res)=>{

    let date=new Date();
    let month=date.getMonth()+1;
    let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    let orderUpdateQuery=`update orders set status='12' where order_id='${req.body.order_id}';
    INSERT into time(order_id,status_id,timestamp) values('${req.body.order_id}','12','${timestamp}');`
    
    db.query(orderUpdateQuery,(err,result)=>{
       if(err)
      {
      console.log(err);
      return res.status(500).json({ error: err.message , success: false});
      }
      else{
        return res.status(200).json({ success: true, message: "Order delivered"});
      }
    });

})
module.exports=router;
