const express = require("express");
const db = require("../db");
const verifyToken = require("./verifyToken");
const router = express.Router();
router.get("/",verifyToken,(request,response)=>
{
    let query=`SELECT customer_name,phone,orders.order_id,orders.status,status.status_desc,orders.total_count,orders.picked_date,society_name,centre_name
    FROM orders INNER JOIN customer ON orders.customer_id=customer.customer_id
    INNER JOIN society ON customer.society_id=society.society_id
    INNER JOIN centre ON society.centre_id=centre.centre_id  JOIN status ON status.status_id=orders.status 
    ORDER BY orders.order_id`;
    db.query(query,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success: false});
        if(res.length>0)
        {
            return response.json({result:res,success:true});
        }   
        else
        return response.json({msg:"no orders ",success:true});  
    });
});
module.exports=router;
