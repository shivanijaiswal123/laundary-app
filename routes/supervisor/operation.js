const express = require("express");
const db = require("../db");
const verifyToken = require("./../admin/verifyToken");
const router = express.Router();
router.post("/",verifyToken,(req,res)=>
{   
    let col_id=req.decoded.admin_id;
    let query=`SELECT orders.order_id,total_count,flat_no,wings_name,society_name,customer_name,timestamp FROM mapping_supervisor 
    INNER JOIN society ON mapping_supervisor.centre_id=society.centre_id 
    INNER JOIN customer ON customer.society_id=society.society_id
    INNER JOIN orders ON orders.customer_id=customer.customer_id
    INNER JOIN time ON time.order_id=orders.order_id
    INNER JOIN wings ON customer.wings_id=wings.wings_id
    WHERE orders.status='${req.body.status}'
    AND admin_id='${col_id}' AND time.status_id='${req.body.status}'`;
    db.query(query,(err,result)=>{
        if (err != null) response.status(500).json({ error: err.message , success: false});
        else{
        if(result.length>0)
        {
            res.json({result:result,message:"successful",success:true});
        }
        else
        res.json({message:"NO CLOTHES NOW",success:false});
        }
    });
});
module.exports=router;
