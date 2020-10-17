require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;
const userRouter = require("./api/users/user.router");
app.use(express.json());
app.use("/api/users",userRouter);


app.listen(port,()=>{
    console.log("server up and running on port ",port);
}) 