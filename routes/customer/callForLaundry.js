const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{

    let checkQuery=`SELECT order_id FROM orders WHERE status IN('0','1') AND customer_id='${request.body.customer_id}'`;
    db.query(checkQuery,(error,result)=>{
        if(error) return response.status(500).json({ error: error.message , success: false});
        else{
//             console.log(result);
            
            if(result.length>0)
            {
                return response.json({message:"Order Already Exists. Wait For Sometime",success:false});
            }
            else{
                let query=`INSERT INTO orders(customer_id) VALUES ('${request.body.customer_id}') ;`;
                // to initiate the order table
                db.query(query,(err,res)=>{
                    if (err) return response.status(500).json({ error: err.message , success: false});
                    // console.log(res);
                    if(res.affectedRows>0)
                    {
                    let date=new Date();
                    let month=date.getMonth()+1;
                    let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                    let subquery=`INSERT INTO time(order_id,status_id,timestamp) VALUES
                                  ('${res.insertId}','0','${timestamp}')  `;
                                   console.log(subquery);
                                  
                    db.query(subquery,(error2,result2)=>{
                        if (error2 != null) return response.status(500).json({ error: error2.message , success: false});
                        return response.json({success:true,message:"order created successfully"});
                    })    
                }
                else{
                    return response.json({message : "Order Not Created",success:false});
                }
                });
                
            }
        }

    })
   
});
module.exports=router;
