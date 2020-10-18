require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 7000; 
const deliveryRouter = require("./api/delivery/delivery.router");
app.use(express.json());
app.use("/api/delivery",deliveryRouter);


app.listen(port,()=>{
    console.log("server up and running on port ",port);
}) 