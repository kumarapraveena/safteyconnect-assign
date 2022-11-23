import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Task = () => {
    const navigate=useNavigate()
    const[taskState,settaskState]=useState({});
    const taskFormData=[{attr:"username",type:"text",id:"username",label:"Username:"},
                     {attr:"description",type:"text",id:"description",label:"Description:"},
                     {attr:"type",type:"text",id:"type",label:"Type:"},
                     {attr:"status",type:"text",id:"status",label:"Status:"}]
    const handleUseradd=()=>{
        console.log(taskState)
        axios({
            url:"http://localhost:3006/add/task",
            method:"POST",
            headers:{
            //   username:username
            },
            data:taskState
        }).then((res)=>{
            localStorage.setItem("user-token",res.data.userVal)
window.alert(res.data)
 navigate("/details")
        }).catch((err)=>{
        window.alert(err.response.data)
        })
}
    const handleInputChange=(e,id)=>{
        // if(id==="phoneNumber"){
        //     e.target.value=parseInt(e.target.value)
        // }
settaskState({...taskState,[id]:e.target.value})
    }
  return (
    <div>
          <form>
{taskFormData.map((formKey)=>{
return (<div>
<div>
    <label for={formKey.id}>{formKey.label}</label>
</div>
<div>
    <input type={formKey.type} id={formKey.id} onChange={(e)=>{handleInputChange(e,formKey.id)}}/>
</div>
</div>)
})}
            </form>
            <button type="button" onClick={handleUseradd}>AddTask</button>
    </div>
  )
}

export default Task