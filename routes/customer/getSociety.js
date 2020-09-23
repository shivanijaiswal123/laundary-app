const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let society=`SELECT society_id,society_name FROM society`;
    db.query(society,(err,res)=>
    {
        if (err != null) return response.status(500).json({ error: err.message, success:false});
        if(res.length>0){
        return response.status(200).json({result:res,success:true});
        }
        else{
            return response.json({message:"Society Doesn't Exist",success:true});
        }
    });

});
router.get("/",(request,response)=>
{
    let society=`SELECT society_id,society_name FROM society`;
    db.query(society,(err,res)=>
    {
        if (err != null) return response.status(500).json({ error: err.message, success:false});
        if(res.length>0){
        return response.status(200).json({result:res,success:true});
        }
        else{
            return response.json({message:"Society Doesn't Exist",success:true});
        }
    });

});
module.exports=router;
