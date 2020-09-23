const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{   //SELECT time_from,time_to from customer_prefrence where customer_id='${id}'
    let id=request.body.customer_id;
    let query=`SELECT customer_name,society_name AS society,wings_name AS wing, flat_no , phone,prefered_time
               FROM customer 
               INNER JOIN society ON customer.society_id=society.society_id 
               INNER JOIN wings ON wings.wings_id=customer.wings_id
               WHERE customer.customer_id='${id}';SELECT time_from,time_to from customer_prefrence where customer_id='${id}'`;
    db.query(query,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success:false});
//         console.log(res);
       
        if(res.length>0)
        { return response.status(200).json({result:res[0],prefered_time_value:res[1][0],success:true});}
        else
        return response.json({success:true,message:"customer not found"});
    });           
});
    module.exports=router;
