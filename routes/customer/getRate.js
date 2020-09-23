const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`SELECT cloth_type,rate,discount 
               FROM rate INNER JOIN cloth_type
               ON rate.cloth_type_id=cloth_type.cloth_type_id LEFT OUTER JOIN discount on rate.society_id=discount.society_id
               WHERE rate.society_id in (select society_id from customer where customer_id='${request.body.customer_id}')`;
    db.query(query,(err,res)=>{
        if (err)
        {
            return response.status(500).json({ error: err.message, success: false });
        }
        else{
         if(res.length>0){return response.status(200).json({result:res,message:"Rate For Your Society", success: true});}
        else {
            return response.json({success:true,message:"Rate Not Updated For Your Society"});
        }
        }
    });
});
module.exports=router;
