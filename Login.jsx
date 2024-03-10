import { Button, FormControl, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  let[name,setName]=useState("")
  let[pass,setPass]=useState("")
  
 
  let navigate=useNavigate()
  let formHandler=()=>{
    let payload={name,pass}
    axios.post("http://localhost:8000/login",payload)
    .then((res)=>{
      if(res.data=="success"){
        navigate("/home")
      }
    })
    .catch(()=>{console.log("error");})
  }
  
  return (
    <div className='h-[100vh] w-[100%] bg-gradient-to-tl from-emerald-900 via-lime-200 to-emerald-900 flex justify-center items-center'>
        <FormControl className='h-[350px] w-96 shadow-slate-950 shadow-sm flex flex-col items-center justify-evenly'>
            <h1 className='text-lg '>LOGIN</h1>
            <TextField id='outline-basic' label='Username' varient="outlined" size='small' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <TextField id='outline-basic' label='Password' varient="outlined" size='small' value={pass} type='password' onChange={(e)=>{setPass(e.target.value)}}/>
            <p><Link to="/register" className='text-emerald-900'>New User? Register</Link></p>
            <Button variant="contained" color='success' onClick={formHandler}>SUBMIT</Button>
        </FormControl>
    </div>
  )
}

export default Login