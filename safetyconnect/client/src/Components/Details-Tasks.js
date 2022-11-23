import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from "axios"

const DetailsTasks = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
                 axios({
                     method: "GET",
                     url: "http://localhost:3006/add/gettask",
                    
                 }).then((userData) => {
                     console.log(userData.data)
                     setData(userData.data)
                 }).catch((err) => {
                     console.log(err)
                 })
             }, [])
            
  return (
    <div>
       <h2>Details-Tasks</h2> 
       {
       data.map((item)=>{
        return <div style={{border:"1px solid black",width:"400px"}}>
            <div style={{color:"green"}}>name:{item.username}</div><span><button>Edittask</button></span><span><button>Deletetask</button></span>
            <div style={{color:"blue"}}>task:{item.description}</div>
            <div style={{color:"blue"}}>type of task:{item.type}</div>
            <div style={{color:"blue"}}>status:{item.status}</div>
        </div>
       })
       }
        </div>
  )
}
export default DetailsTasks
// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import axios from "axios"
// const DetailsTasks = () => {
//     const [data, setData] = useState([])//
//     const[detailsState,setdeailsState]=useState({});
//     const detailsFormData=[{attr:"username",type:"text",id:"username",label:"Username:"},
//     ]
//      useEffect(() =>{
//          axios({
//              method: "GET",
//              url: "http://localhost:3006/add/gettask",
            
//          }).then((userData) => {
//              console.log(userData)
//              setData(userData.data)
//          }).catch((err) => {
//              console.log(err)
//          })
//      }, [])
//      const handleUseradd=()=>{
//         console.log(detailsState)
        
// }
//     const handleInputChange=(e,id)=>{
//         // if(id==="phoneNumber"){
//         //     e.target.value=parseInt(e.target.value)
//         // }
//         setdeailsState({...detailsState,[id]:e.target.value})
//     }
//   return (
//     <div>
//           <form>
// {detailsFormData.map((formKey)=>{
// return (<div>
// <div>
//     <label for={formKey.id}>{formKey.label}</label>
// </div>
// <div>
//     <input type={formKey.type} id={formKey.id} onChange={(e)=>{handleInputChange(e,formKey.id)}}/>
// </div>
// </div>)
// })}
//             </form>
//             <button type="button" onClick={handleUseradd}>Submit</button>
//     </div>

//   )
// }

// export default DetailsTasks