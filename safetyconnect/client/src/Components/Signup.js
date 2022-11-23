import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate=useNavigate()
    const[signuUpState,setSignUpState]=useState({});
    const signUpFormData=[{attr:"username",type:"text",id:"username",label:"Username:"},
    {attr:"password",type:"password",id:"password",label:"Password:"}]
    const handleUseradd=()=>{
        console.log(signuUpState)
        axios({
            url:"http://localhost:3006/user/signup",
            method:"POST",
            headers:{

            },
            data:signuUpState
        }).then((res)=>{
window.alert(res.data)
 navigate("/task")
        }).catch((err)=>{
        window.alert(err.response.data)
        })
}
    const handleInputChange=(e,id)=>{
        // if(id==="phoneNumber"){
        //     e.target.value=parseInt(e.target.value)
        // }
setSignUpState({...signuUpState,[id]:e.target.value})
    }
  return (
    <div>
          <form>
{signUpFormData.map((formKey)=>{
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
            <button type="button" onClick={handleUseradd}>Submit</button>
    </div>
  )
}

export default Signup