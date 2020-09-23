const express = require("express");
const db = require("../db");
const verifyToken = require("./../admin/verifyToken");
const router = express.Router();
router.post("/",verifyToken,(req,res)=>
{
    let col_id=req.decoded.admin_id;
//     console.log(col_id);
    
    let query=`SELECT orders.order_id,flat_no,wings_name,society_name,timestamp,customer_name
    FROM mapping_collectionboy 
    INNER JOIN society ON mapping_collectionboy.centre_id=society.centre_id 
    INNER JOIN customer ON customer.society_id=society.society_id
    INNER JOIN orders ON orders.customer_id=customer.customer_id
    INNER JOIN time ON time.order_id=orders.order_id
    INNER JOIN wings ON customer.wings_id=wings.wings_id
    WHERE orders.status='17' AND admin_id='${col_id}'AND time.status_id='17'`;
    db.query(query,(err,result)=>{
        if (err != null) return res.status(500).json({ error: err.message , success: false});
        else{
        if(result.length>0)
        {
          return res.json({result:result,success:true});
        }
        else
      return res.json({message:"NO DELIVERIES NOW",success:true});
    }
    });
});
module.exports=router;
//admin_id will come as collection_boy id
