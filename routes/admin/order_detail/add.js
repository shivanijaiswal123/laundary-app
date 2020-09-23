const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  
  let date=new Date();
                  let month=date.getMonth()+1;
                    let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
  // let { order_id, cloth_type_id, count } = req.body;
  // if (order_id && cloth_type_id && count) {
    //     let post = {
    //       order_id: order_id,
    //       cloth_type_id: cloth_type_id,
    //       count: count
    //     };
    //     let sql = "INSERT INTO order_detail SET ?";
    //     let query = db.query(sql, post, (err, result) => {
  let post = `INSERT into order_detail(order_id,cloth_type_id,count) values ?`
  db.query(post, [req.body.items.map(item => [req.body.order_id, item.cloth_type_id, item.count])], (err, postResult) => {
    if (err) {
      console.log(err);
      res.status(200).json({ msg: "no detail has been added" })
    }
    else {
      if (postResult.affectedRows > 0) {
        let orderQuery = `update orders set status=6 where order_id='${req.body.order_id}' `
        let timequery = `insert into time(order_id,status_id,timestamp) values(${req.body.order_id},6,"${timestamp}")`
        let paymentQuery=`insert into payment(customer_id,amount,order_id) values((select customer_id from orders where order_id=${req.body.order_id}),'${req.body.amount}','${req.body.order_id}')`
        db.query(orderQuery,(error,orderQueryResult)=>{
            if(error){
              console.log(error);
              return res.status(500).json({ msg: "Some server error" })
            }
            else{
              db.query(timequery,(error,resultTimeQuery)=>{
                 if(error)
                 {
                   console.log(error);
                   return res.status(500).json({ msg: "Some server error" })
                 }
                 else{
                   db.query(paymentQuery,(err,paymentInsertResult)=>{
                    if(err)
                    {
                      return res.status(500).json({success:false,msg:"Internal Server Error"})
                    }
                     else{
                         res.status(200).json({ msg: "order detail has been added" });
                     }
                   })
                 } 
              })
            }
        })
        
      }
      else{
        res.status(200).json({ msg: "no detail has been added" })
      }
    }
  })
});

module.exports = router;


