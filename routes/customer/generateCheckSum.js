const express = require("express");
const db = require("../db");
const router = express.Router();
const paytm_checksum=require("../paytm/checksum")
const paytm_config=require("../paytm/paytm_config").paytm_config
require('dotenv').config();
console.log(process.env.MID)
router.post("/",(req,res)=>{
    let {ORDER_ID,CUST_ID,TXN_AMOUNT,MOBILE_NO}=req.body;
    let CALLBACK_URL="https://pguat.paytm.com/paytmchecksum/paytmCallback.jsp";
    let MID=paytm_config.MID;
    let WEBSITE=paytm_config.WEBSITE;
    let CHANNEL_ID=paytm_config.CHANNEL_ID;
    let INDUSTRY_TYPE_ID=paytm_config.INDUSTRY_TYPE_ID;
    let MERCHANT_KEY=paytm_config.MERCHANT_KEY;
    let paramArray={};
    paramArray['MID']=MID;
    paramArray['ORDER_ID']=ORDER_ID;
    paramArray['CUST_ID']=CUST_ID;
    paramArray['INDUSTRY_TYPE_ID']=INDUSTRY_TYPE_ID;
    paramArray['CHANNEL_ID']=CHANNEL_ID;
    paramArray['TXN_AMOUNT']=TXN_AMOUNT;
    paramArray['WEBSITE']=WEBSITE;
    paramArray['CALLBACK_URL']=CALLBACK_URL
    paramArray['MOBILE_NO']=MOBILE_NO
    console.log(paramArray);
    paytm_checksum.genchecksum(paramArray,MERCHANT_KEY,(err,checksum)=>{
            if(err)
            {
                console.log(err);
                res.status(500).json({success:false,msg:"Some Problem in checksum generation"})
            }
            else
            {
              console.log("Checksum",checksum);
              res.json({success:true,checksum_val:checksum})
            }
    })
})
module.exports=router;  