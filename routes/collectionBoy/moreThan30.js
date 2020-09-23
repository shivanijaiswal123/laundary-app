const express = require("express");
const db = require("../db");
const verifyToken = require("./../admin/verifyToken");
const router = express.Router();
router.post("/",verifyToken,(request,response)=>
{
    let query=`SELECT orders.order_id,flat_no,wings_name,society_name,timestamp,customer_name
    FROM mapping_collectionboy 
    INNER JOIN society ON mapping_collectionboy.centre_id=society.centre_id 
    INNER JOIN customer ON customer.society_id=society.society_id
    INNER JOIN orders ON orders.customer_id=customer.customer_id
    INNER JOIN time ON time.order_id=orders.order_id
    INNER JOIN wings ON customer.wings_id=wings.wings_id
    WHERE orders.status='15' AND admin_id='${col_id}'`;
    db.query(query,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success: false});
        if(result.length>0)
        {
            return res.json({result:result,success:true});
        }
        else
        return res.json({message:"NO ORDERS NOW",success:false});
    });
});
module.exports=router;
//admin_id will come as collection_boy id
