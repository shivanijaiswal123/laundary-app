const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    //take amount of the last completed order (completion specified by putting end date in db)
    let points=`SELECT amount as Amount,orders.order_id FROM payment
                INNER JOIN orders ON orders.order_id=payment.order_id 
                WHERE orders.customer_id='${request.body.customer_id}'
                AND orders.status='14'`;
    db.query(points,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message, success:false });
//         console.log(res);
        if(res.length>0){
        let total=0;
        res.forEach(element => {
            total=element.Amount+total;
        });
        let points=Math.floor((total)*0.10);
        let date=new Date();
        let month=date.getMonth()+1;           
        let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        let subquery=`INSERT INTO time(order_id,status_id,timestamp) VALUES ?`;
        db.query(subquery,[res.map(item => [item.order_id,'16',timestamp])],(error,result)=>{
                if (error != null) return response.status(500).json({ error: error.message , success: false});
//                 console.log(subquery);
                // response.json({message:"success"});
                let subquery2=`UPDATE orders SET status='16' WHERE order_id IN (`;
                for(i=0;i<res.length;i++)
                {
                    if(i==res.length-1)
                    {
                        subquery2=subquery2+res[i].order_id+')';
                    }
                    else
                    subquery2=subquery2+res[i].order_id+',';
                }
                db.query(subquery2,(error2,result2)=>{
                    if (error2 != null) return response.status(500).json({ error: error2.message , success: false});
//                     console.log(subquery2);                  
                        return   response.json({message:"status updated",points:points});
                })  ; 
            })  ;
        
        }

    else{
       return response.json({message:"No previous payment done",success:true})
    }
        // response.status(200).json({result:points,success:true});
    });
});
module.exports=router;
