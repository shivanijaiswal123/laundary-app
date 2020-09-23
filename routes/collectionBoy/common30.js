const express = require("express");
const db = require("../db");
const verifyToken = require("../admin/verifyToken");
const router = express.Router();
router.post("/",verifyToken,(req,res)=>
{
    console.log("status",req.body);
    let col_id=req.decoded.admin_id;
    console.log("col_id",col_id);
   /* let query=`SELECT orders.order_id,flat_no,wings_name,society_name,total_count,timestamp,customer_name
    FROM mapping_collectionboy 
    INNER JOIN society ON mapping_collectionboy.centre_id=society.centre_id 
    INNER JOIN customer ON customer.society_id=society.society_id
    INNER JOIN orders ON orders.customer_id=customer.customer_id
    INNER JOIN time ON time.order_id=orders.order_id
    INNER JOIN wings ON customer.wings_id=wings.wings_id
    WHERE orders.status='${req.body.status}' 
    AND admin_id='${col_id}'`;*/
    let query;
    /*if(req.body.status=='2'){
         query=`SELECT orders.order_id,flat_no,wings_name,society_name,total_count,timestamp,customer_name     FROM mapping_supervisor      
    INNER JOIN society ON mapping_supervisor.centre_id=society.centre_id  
    INNER JOIN customer ON customer.society_id=society.society_id     
    INNER JOIN orders ON orders.customer_id=customer.customer_id     
    INNER JOIN time ON time.order_id=orders.order_id     
    INNER JOIN wings ON customer.wings_id=wings.wings_id WHERE time.status_id='${req.body.status}' 
    AND admin_id='${col_id}' and orders.status='${req.body.status}'`
    }
    else{*/
    query=`SELECT orders.order_id,flat_no,wings_name,society_name,total_count,timestamp,customer_name,time.status_id
    FROM mapping_collectionboy 
    INNER JOIN society ON mapping_collectionboy.society_id=society.society_id 
    INNER JOIN customer ON customer.society_id=society.society_id
    INNER JOIN orders ON orders.customer_id=customer.customer_id
    INNER JOIN time ON time.order_id=orders.order_id
    INNER JOIN wings ON customer.wings_id=wings.wings_id
    WHERE orders.status='${req.body.status}' 
    AND admin_id='${col_id}' AND time.status_id='${req.body.status}'`
    //}
  
   
    db.query(query,(err,result)=>{
        if (err != null) return res.status(500).json({ error: err.message , success: false});
        else{
        if(result.length>0)
        {
            console.log(result);
            return res.json({result:result,success:true});
        }
        else
        return res.json({message:"NO ORDERS NOW",success:false});
    }
    });
});
module.exports=router;
//admin_id will come as collection_boy id
