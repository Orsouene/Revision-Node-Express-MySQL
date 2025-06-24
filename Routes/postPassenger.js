const express=require("express")
const route=express.Router() 
const post = require("../Controllers/postPassenger");

route.post("/passengers", post);
module.exports=route