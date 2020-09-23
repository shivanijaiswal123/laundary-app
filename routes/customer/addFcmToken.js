const express = require("express");
const db = require("../db");
const router = express.Router();

router.post('/',(req,res)=>{
    if(req.body.fcmtoken && req.body.customer_id)
    {
      let query=`update customer set fcm_token='${req.body.fcmtoken}' where customer_id='${req.body.customer_id}'`
      db.query(query,(err,result)=>{
            if(err)
            {
            console.log(err);
            res.json({sucess:false,msg:"Internal Server Error"});
            }
            else{
              res.json({success:true,msg:"fcm token updated"});
            }
      });
    }
    else{
      res.json({success:false,msg:"Token or customer_id is missing"});
    }
})
module.exports=router;
