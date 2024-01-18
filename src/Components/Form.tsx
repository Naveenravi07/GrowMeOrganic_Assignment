import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

export default function FormComponent(){
    const navigate = useNavigate()

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    
    const onFormSubmit= (e:React.MouseEvent) =>{
        e.preventDefault()
        const userData = {name,email,phone}

        if(! Object.values(userData).every((val)=>val.length >= 1)){
            return 
        }
        localStorage.setItem('user_data',JSON.stringify(userData))
        alert("Login Success")
        navigate('/data')
        
    }

    return (
    <Container component="main" maxWidth="xl">
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField  label="Name" onChange={(e)=>setName(e.target.value)} variant="outlined" margin="normal" fullWidth />
        <TextField  label="Phone" onChange={(e)=>setPhone(e.target.value)} variant="outlined" margin="normal" fullWidth />
        <TextField label="Email" onChange={(e)=>setEmail(e.target.value)} variant="outlined" margin="normal" fullWidth />
        <Button variant='contained' onClick={(e)=>onFormSubmit(e)} > Submit </Button>
      </form>
      <Button style={{paddingTop:'30px'}} onClick={()=>navigate('/data')} variant='text' > Already Logged In ? Click to redirect to data page</Button>
    </Container>
    )
}
