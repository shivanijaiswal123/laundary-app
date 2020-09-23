const express = require("express");
const db = require("../db");
const router = express.Router();
var FCM = require('fcm-node');
let serverKey='AAAA0JIM71c:APA91bGlEVsB1bvakGMD2N-kNYKPskdmb95JvziKuwyWMg0SZNvZ-JhXC3TOVe7EyrdAvgh8IO6RE2eAMm4KCwHF-KdxcJ-Lv8sBmH8H4BwdnwFHczQJfzRa9OVFLnLZ_uM7UX_EhZMS'
var fcm = new FCM(serverKey);
router.post("/",(request,response)=>
{   let notification;
    let statusval=request.body.status;
    if(statusval==1 || statusval==19)
    {
        notification={
            title:'Order Accepted',
            body:'Your Order Has Been Accepted By Collection Boy'
        }
    }
    else if(statusval==9)
      {
          notification={
            title:'Order reached to collection center',
            body:'Your Order reached to collection center and ready to be delivered'
        }  
      }
    else if(statusval==11)
      {
         notification={
            title:'Request Accepted',
            body:'Your Delivery request is accepted,soon be delivered by collection boy'
        } 
      }
    else if(statusval==12)
      {
         notification={
            title:'Order Delivered',
            body:'Your Order was delivered successfully'
        } 
      }
    
    let status=`UPDATE orders
    SET status = '${request.body.status}'
    WHERE
    order_id='${request.body.order_id}';`;
    db.query(status,(err,res)=>{
        if (err != null) return response.status(500).json({ error: err.message , success: false});
        let date=new Date();
        let month=date.getMonth()+1;           
        let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        let subquery=`INSERT INTO time(order_id,status_id,timestamp) VALUES
                      ('${request.body.order_id}','${request.body.status}','${timestamp}')  `;
                    //   console.log(subquery); 
        db.query(subquery,(error,result)=>{
            if (error) return response.status(500).json({ error: error.message , success: false});
            else{
                let getTokenQuery=`select fcm_token from customer where customer_id IN (select customer_id from orders where order_id='${request.body.order_id}') AND fcm_token IS NOT NULL`;
                db.query(getTokenQuery,(err,result2)=>{
                    console.log(getTokenQuery);
                       if(result2.length>0)
                       {
                        let message={
                            to:result2[0].fcm_token,
                            notification: notification
                        };
                           fcm.send(message,(err,responseVal)=>{
                            if(err)
                            {
                              console.log(err);
                              return response.json({success:true,message:"timestamp recorded"});
                            }
                            else{
                              console.log(responseVal);
                               return response.json({success:true,message:"timestamp recorded"});
                            }
                          })
                       }
                    else{
                        return response.json({success:true,message:"timestamp recorded"});
                    }
                })
            }
            
        })
  });
});
module.exports=router;
