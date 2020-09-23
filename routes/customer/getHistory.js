const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`SELECT orders.order_id,total_count,picked_date,delivery_date,amount,timestamp FROM orders
    INNER JOIN payment ON orders.order_id=payment.order_id
    INNER JOIN time ON orders.order_id=time.order_id
    WHERE orders.status='14' AND orders.customer_id='${request.body.customer_id}' AND time.status_id='14' `;
    db.query(query,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success: false});
        if(res.length>0)
        response.status(200).json({result:res,message:"History exists",success:true});
        else
        response.json({message:"no history",success:true});
        //return the passed order_id for order specific details
        //slice the string of all the data type to display date using inbuilt java functions in all programs
    });
});
module.exports=router;
