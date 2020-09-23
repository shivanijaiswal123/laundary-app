const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let outstanding=`SELECT amount AS Outstanding,payment_id,orders.order_id FROM payment
                    INNER JOIN orders ON payment.order_id=orders.order_id
                    WHERE orders.customer_id='${request.body.customer_id}' AND 
                    orders.status='13'`;
    db.query(outstanding,(err,res)=>
    {
        if (err != null) return response.status(500).json({ error: err.message, success:false });
        if(res.length>0)
        return response.status(200).json({result : res,message:"List of Outstanding", success:true});
        else
        return response.json({message:"No Current Outstanding",success:true});
    });
});
module.exports=router;
