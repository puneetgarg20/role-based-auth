const express=require("express");
require("dotenv").config();

const app =express();


app.listen(process.env.PORT,(req,res)=>[
    console.log("server is listening on port ",process.env.PORT)
])
             