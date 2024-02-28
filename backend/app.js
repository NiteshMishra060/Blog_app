import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
var app =express();
import router from "./routes/user-routes.js";
// import router from "./routes/user-routes";
const url= 'mongodb://localhost:27017/blog'
app.use("/api/user",router) ; 
console.log("this is main app");
mongoose.connect(url,err=>{
  if(!err) {
      console.log("successful connection with the server");  
  }
  else
      console.log("Error in the connectivity");
})

app.use("/",(req,res,next)=>{
  res.send("hello world");
}); 
app.listen(3000);   