const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
   type:String,
   required:true
    }
})
const userModal=mongoose.model("user-model-safety",userSchema)
module.exports=userModal