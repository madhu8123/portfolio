
import {useDispatch } from "react-redux"
import {setUsers } from "./slices/userSlice"


const { useState } = require("react")
export default function Form1()
{
    function formSubmit(formdata)
    {    
        formdata.preventDefault()
       
        console.log('success............,',input.name,input.roll,input.city)
    }
    function updateData(d)
    {
        var variable =d.target.name;
        var value = d.target.value;
        console.log("the vari: ",variable,"the val: ",value)
        setInput((data)=>{
                return {...data,[variable]:value}
        }
        )
    }const dispatch=useDispatch()
    const [input,setInput]=useState(
        {
            roll:'',
            name:'',
            city:''
        }
    )
    const addUser=(formdata)=>{
      formdata.preventDefault()
      dispatch(setUsers(input))
    }
    return(
        <>
        <form onSubmit={formSubmit}>
        Name: <input type="text" name='name' onChange={updateData}></input><br/>
Roll: <input type="text" name='roll'  onChange={updateData}></input><br/>
City: <input type="text" name='city'   onChange={updateData}></input><br/>
{/* Name: <input type="text" name='txtName' onChange={(data)=>{setInput({...input,name:data.target.value})}}></input><br/>
Roll: <input type="text" name='txtRoll' onChange={(data)=>{setInput({...input,roll:data.target.value})}}></input><br/>
City: <input type="text" name='txtCity' onChange={(data)=>{setInput({...input,city:data.target.value})}}></input><br/> */}
        <input type="submit" onClick={addUser} value="signup"></input>
        </form>
        
        </>
    )
} 