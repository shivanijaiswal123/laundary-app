const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`SELECT total_count AS count,status,picked_date,status_desc,timestamp
               FROM orders INNER JOIN time ON orders.order_id=time.order_id
               INNER JOIN status ON time.status_id=status.status_id
               WHERE orders.customer_id='${request.body.customer_id}' AND NOT orders.status='14' AND time.status_id=orders.status ORDER BY orders.order_id desc`
    db.query(query,(err,res)=>
    {
        if (err != null) {console.log(err);return response.status(500).json({ error: err.message,success:false });}
        if(res.length>0){
         return response.status(200).json({result:res,message:"Orders exist",success:true});   
        }
        else{
            return response.json({message:"No Ongoing Order",success:true});
        }
        
    });

    });
module.exports=router;
