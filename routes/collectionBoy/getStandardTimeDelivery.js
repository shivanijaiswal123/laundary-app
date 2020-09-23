const express = require("express");
const db = require("../db");
const verifyToken = require("./../admin/verifyToken");
const router = express.Router()

router.get("/",verifyToken,(req,res)=>{

let date = new Date();
let timeValue=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

let query=`select orders.order_id,orders.customer_id as 'customer_id',orders.total_count as 'count',orders.status as 'status',timestamp,customer_name,phone,flat_no,society_name,wings_name,time_to from orders 
inner join customer on orders.customer_id=customer.customer_id 
inner join time on time.order_id=orders.order_id 
inner join society on customer.society_id=society.society_id 
inner join wings on customer.wings_id=wings.wings_id 
inner join customer_prefrence on customer.customer_id=customer_prefrence.customer_id  
where orders.status='10' and time.status_id='10' and 
customer_prefrence.time_to>='${timeValue}' and 
customer_prefrence.time_from<='${timeValue}' and  
society.society_id in (select society_id from mapping_collectionboy where admin_id='${req.decoded.admin_id}')`;
db.query(query,(err,result)=>{
    if(err)
    {
      console.log(err);
      return res.status(500).json({ error: err.message , success: false});
    }
    else{
      if(result.length>0)
      {
        return res.status(200).json({ success: true, message: "List of Customers",result:result });
      }
      else{
          return res.status(200).json({ success: true, message: "No customer at this time" });
      }
    }
  })

})
module.exports=router;
