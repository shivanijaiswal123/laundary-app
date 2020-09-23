const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`INSERT INTO transaction(payment_id,transaction_id) VALUES ?`;
    db.query(query,[request.body.transactions.map(item => [item.payment_id,request.body.transaction_id]) ],(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success: false});
        if(res.affectedRows>0)
        {
            let date=new Date();
            let month=date.getMonth()+1;           
            let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            let subquery=`INSERT INTO time(order_id,status_id,timestamp) VALUES ?`;
            if(request.body.msg=='success'){
                db.query(subquery,[request.body.transactions.map(item => [item.order_id,'14',timestamp])],(error,result)=>{
                    if (error != null) return response.status(500).json({ error: error.message , success: false});
                    return response.json({message:"success"});        
                })  ;
            }
            else{
                db.query(subquery,[request.body.transactions.map(item => [item.order_id,'18',timestamp])],(error3,result)=>{
                    if (error3 != null) return response.status(500).json({ error: error3.message , success: false});
       
                    let subquery2=`UPDATE orders SET status='18' WHERE order_id IN (`;
                    for(i=0;i<request.body.transactions.length;i++)
                    {
                        if(i==request.body.transactions.length-1)
                        {
                            subquery2=subquery2+request.body.transactions[i].order_id+')';
                        }
                        else
                        subquery2=subquery2+request.body.transactions[i].order_id+',';
                    }
                    db.query(subquery2,(error2,result2)=>{
                        if (error2 != null) return response.status(500).json({ error2: error2.message , success: false});
//                         console.log(subquery2);
                        response.json({message:"status updated",res: result2});
                    })  ; 
                })  ;
            }     
        }
    });
});
module.exports=router;
//transaction table entry
//tid entry in time table
//transaction id if returned change status in time table
