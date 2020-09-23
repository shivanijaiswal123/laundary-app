const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let wings=`SELECT wings_id,wings_name FROM wings WHERE society_id='${request.body.society_id}';`;
    db.query(wings,(err,res)=>
    {
        if (err != null) return response.status(500).json({ error: err.message,success:false });
        if(res.length>0){
       return response.status(200).json({result:res,success:true});
        }
        else{
            return response.json({message:"No Wings Exist Of This Society",success:true});
        }
    });
});
module.exports=router;
