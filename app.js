require('dotenv').config();
const express = require('express');
//const bodyParser = require("body-parser");


const app = express();
app.use(express.json({limit: '60mb'}));
app.use(express.urlencoded({extended: false, limit: '60mb'}));//try now done 
// bodyParser = {
//     json: {limit: '500mb', extended: true},
//     urlencoded: {limit: '500mb', extended: true}
//   };


const port = process.env.PORT || 3600; //can you solve this problem
const deliveryRouter = require("./api/delivery/delivery.router");
const partyRouter = require("./api/party/party.router");
const adminRouter = require("./api/admin/admin.router");
app.use("/api/delivery",deliveryRouter);
app.use("/api/party",partyRouter);
app.use("/api/admin",adminRouter);
//app.use(bodyParser.json({limit: '10mb', extended: true}));
//you can do it with express so you didnt need to use body parser ok?
// oh my god why you have port problem?,
  //come to anydek.
 // images too large
app.listen(port,()=>{
    console.log("server up and running on port ",port);
}) 