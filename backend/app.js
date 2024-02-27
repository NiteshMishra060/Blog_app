var express =require("express") ;
var mongoose=require("mongoose");
var app =express();
import router from "./routes/user-routes";
var url= 'mongodb://localhost:27017/blog'
app.use("/api/user",router) ; 
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