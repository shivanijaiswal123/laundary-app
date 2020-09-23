const express = require("express");
const db = require("../db");
const router = express.Router();

router.post("/", (request, response) => {
  let query = `SELECT * FROM orders WHERE customer_id='${request.body.customer_id}' AND status='9'`;
  console.log(query);
  db.query(query, (err, res) => {
    if(err)
    {
      console.log(err);
      return response.status(500).json({ error: err.message, success: false });
    }
    else if(res.length>0)
    {
       let orderIds=[]
       res.forEach((item)=>{
          orderIds.push(item.order_id);
       })
       let date=new Date();
       let month=date.getMonth()+1;           
       let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
       let timeQuery=`insert into time(order_id,status_id,timestamp) values ?`
       db.query(timeQuery,[res.map(item =>[item.order_id,'10',timestamp])],(err,insertResult) => {
             if(err){
              console.log(err);
              return response.status(500).json({ error: err.message, success: false });
             }
            else{
                if(insertResult.affectedRows>0)
                {
                  let orderUpdateQuery=`update orders set status='10' where order_id IN (${orderIds.toString()})`
                  db.query(orderUpdateQuery,(err,updateResult)=>{
                    if(err){
                      console.log(err);
                      return response.status(500).json({ error: err.message, success: false });
                         }
                    else{
                      if(updateResult.affectedRows>0)
                      {
                            return response.status(200).json({ success: true, message: "Collection Request Placed" });
                      }
                      else{
                         return response.status(500).json({ success: false, message: "Some error occured" });
                      }
                    }
                  })
                }
                else{
                   return response.status(500).json({ success: false, message: "Some error occured" });
                }
            }
       })
    }
    else{
       return response.status(200).json({ success: true, message: "No order to call" });
    }
  })
});
module.exports=router;
