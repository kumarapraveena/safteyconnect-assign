const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
app.use(express.json())
app.use(cors())
const userController=require("./routes/user")
const taskController=require("./routes/task")
app.use(express.urlencoded({extended:false}))
app.listen(3006,(err)=>{
if(!err){
    console.log("Connected Port 3006")
}
else{
    console.log(err)
}
})
mongoose.connect("mongodb://localhost:27017/safetyconnect",(data)=>{
console.log("DB Connected Successfully...")
},(err)=>{
console.log(err)
})
app.use("/user",userController)
app.use("/add",taskController)