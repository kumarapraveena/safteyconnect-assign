const express=require("express")
const router=express.Router()
const userModel=require("../models/userModel")
const taskModel=require("../models/taskModel")
router.post("/signup",(req,res)=>{
    userModel.create({username:req.body.username,password:req.body.password}).then((userData)=>{
        res.status(200).send(`${userData.username} Registered Successfully`)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
module.exports=router