
const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/", (request, response) => {
  let query = `SELECT status FROM orders WHERE customer_id='${request.body.customer_id}' AND status='9'`;
  console.log(query);
  db.query(query, (err, res) => {
    if (err != null) return response.status(500).json({ error: err.message, success: false });
    //         console.log(res);

    if (res.length > 0) {
      let callfordelivery = `update orders set status=10 where customer_id='${request.body.customer_id}'`;
      console.log(callfordelivery);
      /*db.query(query, (err, res)=> {
        if(err){
          console.log(err);
          return response.status(500).json({ error: err.message, success: false });
        }
        console.log(res)
        if (res.length > 0)
          return response.status(200).json({ success: true, message: "can call for laundry" });
      })*/
        return response.status(200).json({ success: true, message: "can call for laundry" });
    }
        else {
        return response.status(200).json({ success: true, message: "cannot call for laundry" });
      }
    });
});
module.exports = router;

