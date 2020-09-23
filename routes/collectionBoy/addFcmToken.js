const express = require("express");
const db = require("../db");
const verifyToken = require("../admin/verifyToken");
const router = express.Router();

router.post('/',verifyToken,(req,res)=>{
    if(req.body.fcmtoken)
    {
      let query=`update admin set fcm_token='${req.body.fcmtoken}' where admin_id='${req.decoded.admin_id}'`
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
