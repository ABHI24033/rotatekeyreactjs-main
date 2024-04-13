import React from "react";
// import { useState,useEffect } from "react";

const PaytmButton = () => {
  // const initialize = () => {
  //     let orderId = "Order_" + new Date().getTime();

  //     // Sandbox Credentials
  //     let mid = "MtBEzq94678732942083"; // Merchant ID
  //     let mkey = "nIDnFSEBHw#AoR#e"; // Merchant Key
  //     var paytmParams = {};

  //     paytmParams.body = {
  //       requestType: "Payment",
  //       mid: mid,
  //       websiteName: "WEBSTAGING",
  //       orderId: orderId,
  //       callbackUrl: "https://merchant.com/callback",
  //       txnAmount: {
  //         value: 100,
  //         currency: "INR",
  //       },
  //       userInfo: {
  //         custId: "1001",
  //       },
  //     };

  //     PaytmChecksum.generateSignature(
  //       JSON.stringify(paytmParams.body),
  //       mkey
  //     ).then(function (checksum) {
  //       paytmParams.head = {
  //         signature: checksum,
  //       };

  //       var post_data = JSON.stringify(paytmParams);

  //       var options = {
  //         /* for Staging */
  //         // hostname: "securegw-stage.paytm.in" /* for Production */,

  //         hostname: "securegw.paytm.in",

  //         port: 443,
  //         path: `/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Content-Length": post_data.length,
  //         },
  //       };

  //       var response = "";
  //       var post_req = https.request(options, function (post_res) {
  //         post_res.on("data", function (chunk) {
  //           response += chunk;
  //         });
  //         post_res.on("end", function () {
  //           // res.json({data: JSON.parse(response), orderId: orderId, mid: mid, amount: amount});
  //           setPaymentData({
  //             ...paymentData,
  //             token: JSON.parse(response).body.txnToken,
  //             order: orderId,
  //             mid: mid,
  //             amount: 100,
  //           });
  //         });
  //       });

  //       post_req.write(post_data);
  //       post_req.end();
  //     });
  //   };
  //   const makePayment = () => {
  //     var config = {
  //         "root":"",
  //         "style": {
  //           "bodyBackgroundColor": "#fafafb",
  //           "bodyColor": "",
  //           "themeBackgroundColor": "#0FB8C9",
  //           "themeColor": "#ffffff",
  //           "headerBackgroundColor": "#284055",
  //           "headerColor": "#ffffff",
  //           "errorColor": "",
  //           "successColor": "",
  //           "card": {
  //             "padding": "",
  //             "backgroundColor": ""
  //           }
  //         },
  //         "data": {
  //           "orderId": paymentData.order,
  //           "token": paymentData.token,
  //           "tokenType": "TXN_TOKEN",
  //           "amount": paymentData.amount /* update amount */
  //         },
  //         "payMode": {
  //           "labels": {},
  //           "filter": {
  //             "exclude": []
  //           },
  //           "order": [
  //               "CC",
  //               "DC",
  //               "NB",
  //               "UPI",
  //               "PPBL",
  //               "PPI",
  //               "BALANCE"
  //           ]
  //         },
  //         "website": "WEBSTAGING",
  //         "flow": "DEFAULT",
  //         "merchant": {
  //           "mid": paymentData.mid,
  //           "redirect": false
  //         },
  //         "handler": {
  //           "transactionStatus":
  // function transactionStatus(paymentStatus){
  //           },
  //           "notifyMerchant":
  // function notifyMerchant(eventName,data){
  //           }
  //         }
  //     };

  //     if (window.Paytm && window.Paytm.CheckoutJS) {
  //        window.Paytm.CheckoutJS.init(config).
  // then(function onSuccess() {
  //   window.Paytm.CheckoutJS.invoke();
  // }).catch(function onError(error) {
  // });
  // }}
  // useEffect(() => {
  //     initialize();
  //   }, []);
  return (
    <div>
      hello
      {/* {false ?
       <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"/>
     :<div>
     <h1>qqqqqqqqq</h1>
       < button onClick={makePayment}>Pay Now</button>
       </div>
     } */}
    </div>
  );
};

export default PaytmButton;
