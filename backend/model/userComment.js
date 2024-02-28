import mongoose from "mongoose";
const schema=mongoose.Schema;
const userComment=new schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
export default mongoose.model("user Comments",userComment);
