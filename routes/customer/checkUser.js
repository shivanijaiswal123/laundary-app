const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{   
    let id=request.body.customer_id;
    let query=`Select * from customer WHERE customer.customer_id='${id}';`;
    db.query(query,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success:false});
        if(res.length>0)
        { return response.status(200).json({message:"User Exists",success:true});}
        else
        return response.json({success:true,message:"User not found"});
    });           
});

module.exports=router;
