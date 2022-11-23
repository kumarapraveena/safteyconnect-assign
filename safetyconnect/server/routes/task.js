const express=require("express")
const router=express.Router()
const userModel=require("../models/userModel")
const taskModel=require("../models/taskModel")
router.post("/task",(req,res)=>{
    userModel.find({username:req.body.username}).then((userVal)=>{
        if(userVal.length){
            taskModel.create({username:req.body.username,description:req.body.description,type:req.body.type,status:req.body.status}).then((userData)=>{
                // const userVal=userData.username
res.status(200).send(`${userData.username}'s Tasks Added Successfully`)
            })
        }
        else{
            res.status(400).send("User Not Found")
        }
    })
})
router.get("/gettask",(req,res)=>{
    taskModel.find().then((data)=>{
        console.log(data)
        res.send(data)
    })

})
module.exports=router