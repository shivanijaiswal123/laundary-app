const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
let params=request.body;
let post = {
            customer_id : params.customer_id,
            customer_name : params.customer_name,
            society_id : params.society_id,
            wings_id : params.wings_id,
            flat_no : params.flat_no,
            phone : params.phone
           };
            let sql = "INSERT INTO customer SET ?";
            let query = db.query(sql, post, (err, result) => {
              if (err) {
             return  response.json({success:false, error:err.message});
              } else {
               return response.status(200).json({ msg: "Customer has been added", success:true });
              }
            });

});
module.exports=router;
