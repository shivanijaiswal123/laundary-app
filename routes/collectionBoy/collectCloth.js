const express = require("express");
const db = require("../db");
const verifyToken = require("./../admin/verifyToken");
const router = express.Router();
router.post("/",verifyToken,(request,response)=>
{
    let query=`UPDATE orders SET total_count='${request.body.total_count}',status='2' 
               WHERE order_id='${request.body.order_id}'`;
    db.query(query,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success: false});
        else{
        if(res.affectedRows>0)
        {   
            let date=new Date();
            let month=date.getMonth()+1;           
            let timestamp=date.getFullYear()+'-'+month+'-'+
            date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            let subquery=`INSERT INTO time (order_id,status_id,timestamp) VALUES ('${request.body.order_id}','2','${timestamp}')`;
            db.query(subquery,(error,result)=>
            {
//                 console.log(subquery);
//                 console.log(result);
                
                if (error != null) return response.status(500).json({ error: error.message , success: false});
                else{return response.json({message:"Order Updated",success:true});}
                
            });
        }
        else{return response.json({message:"No order exist",success:true});}
    }
    });
});
module.exports=router;
