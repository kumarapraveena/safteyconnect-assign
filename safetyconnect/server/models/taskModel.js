const mongoose=require("mongoose")
const taskSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
   
})
const taskModal=mongoose.model("task-model-safety",taskSchema)
module.exports=taskModal