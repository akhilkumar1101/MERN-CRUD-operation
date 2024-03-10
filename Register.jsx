import { Button, FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
    let navigate=useNavigate()
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[phone,setPhone]=useState("")
    let[newp,setNewp]=useState("")
    let[confp,setConfp]=useState("")
    

    let formHandle=(e)=>{
      e.preventDefault()
      let payload={name,email,phone,confp}
      axios.post("http://localhost:8000/register",payload)
      .then((res)=>{console.log("Data sent",res);})
      .catch(()=>{console.log("error");})
      navigate("/")
    }

    
  return (
    <div className='h-[100vh] w-[100%] bg-gradient-to-tl from-emerald-900 via-lime-200 to-emerald-900 flex justify-center items-center'>
        <FormControl className='h-[600px] w-96 shadow-slate-950 shadow-sm flex flex-col items-center justify-evenly'>
            <h1 className='text-lg'>REGISTER</h1>
            <TextField id='outline-basic' label='Name' varient="outlined" size='small' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <TextField id='outline-basic' label='Email' varient="outlined" size='small'value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField id='outline-basic' label='Phone' varient="outlined" size='small' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            <TextField id='outline-basic' label='New Password' type='password' varient="outlined" size='small' value={newp} onChange={(e)=>{setNewp(e.target.value)}}/>
            <TextField id='outline-basic' label='Conform Password' type='password' varient="outlined" size='small' value={confp} onChange={(e)=>{setConfp(e.target.value)}}/>
            <p><Link to="/" className='text-emerald-900'>Already have account? LOGIN</Link></p>
            <Button variant="contained" color='success' onClick={formHandle}>REGISTER</Button>
        </FormControl>
    </div>
  )
}

export default Register