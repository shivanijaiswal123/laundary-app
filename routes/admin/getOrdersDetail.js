const express = require("express");
const db = require("../db");
const verifyToken = require("./verifyToken");
const router = express.Router();
router.post("/",verifyToken,(request,response)=>
{
    let query=`SELECT time.timestamp,time.status_id,status.status_desc FROM time
    INNER JOIN status ON time.status_id=status.status_id
    WHERE time.order_id='${request.body.order_id}'`;
    db.query(query,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success: false});
        if(res.length>0)
        {
            return response.json({result:res,success:true});
        }   
        else
        {
            return response.json({msg:"Order Does Not Exist",success:false})
        } 
    });
});
module.exports=router;