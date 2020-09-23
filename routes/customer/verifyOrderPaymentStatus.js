const express = require("express");
const db = require("../db");
const router = express.Router();
const axios=require("axios");

router.post('/',(req,res)=>{
    let {ORDER_ID,MID,CHECKSUMHASH,customer_id}=req.body;
    axios.post("https://securegw-stage.paytm.in/order/status",{
        ORDER_ID:ORDER_ID,
        MID:MID,
        CHECKSUMHASH:CHECKSUMHASH
    })
    .then((result)=>{
        console.log(result.data);
        if(result.data.STATUS=="TXN_SUCCESS")
        {
            let sqlQuery=`INSERT into transactiontable(transaction_id,customer_id,amount,type,paymentid) VALUES('${result.data.TXNID}','${customer_id}','${result.data.TXNAMOUNT}','Paytm','${result.data.ORDERID}')`
            db.query(sqlQuery,(err,result)=>{
                if(err)
                {
                    console.log(err);
                    return res.status(500).json({success:false,msg:"Payment Done but not logged in database"});
                }
                else{
                    return res.status(200).json({success:true,msg:"Payment Done"});
                }
            })
        }
        else{
            return res.json({success:false,msg:"Payment Not Done"});
        }
    })
    .catch((error)=>{
        console.log(error);
        return res.status(500).json({success:false,msg:"Server Error"});
    })
})
module.exports=router;
