require('dotenv').config();
const express = require('express');
let bodyParser = require('body-parser');
const fs = require("fs");


const app = express();
const port = process.env.PORT || 7000; 
const deliveryRouter = require("./api/delivery/delivery.router");
const partyRouter = require("./api/party/party.router");
const adminRouter = require("./api/admin/admin.router");
app.use(express.json());
app.use("/api/delivery",deliveryRouter);
app.use("/api/party",partyRouter);
app.use("/api/admin",adminRouter);
app.use(bodyParser.json({limit: '10mb', extended: true}))
 
app.listen(port,()=>{
    console.log("server up and running on port ",port);
}) 