import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
   const [firstname,setFirstname] =useState("")
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("") 
  
  const [isFirstname,setIsFirstname] =useState(false)
  const [isLastname,setIsLastname] = useState(false)
  const [isEmail,setIsEmail] = useState(false)
  const [isPassword,setIsPassword] = useState(false) 

  const validateData = (e)=>{
   const {name,value} = e.target

   if(name==="firstname"){
    setFirstname(value)
    setIsFirstname(true)
   }else if(name==="lastname"){
    setLastname(value)
    setIsLastname(true)
   }else if(name==="email"){
    setEmail(value)
    setIsEmail(true)
   }else{
    setPassword(value)
    setIsPassword(true)
   }
  }

  const handleregister = (e)=>{
    e.preventDefault()
    if(!firstname || !lastname || !email || !password){
      alert('Please fill the form completely')
    }else{
      alert(`${firstname} ${lastname} registered successfully`)
      handleclear()
    }
  }

  const handleclear = ()=>{
    setFirstname("")
    setIsFirstname(false)
    setLastname("")
    setIsLastname(false)
    setEmail("")
    setIsEmail(false)
    setPassword("")
    setIsPassword(false)
  }

  return (
    < >
      <div className=' m-5 p-5 rounded'>
        <div className="row">
          <div className="col d-flex text-align-center align-items-center">
            <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1703053698~exp=1703054298~hmac=9db6faa440724c18b044fd1e7fbca93e6b8d00df2d990c257e49341e17b14763" alt="" width={'450px'} />
          </div>
          <div className="col d-flex justify-content-center align-items-center flex-column">
            <h1 className='d-flex justify-content-center text-success mt-5'>Registration form</h1>
            <div className='justify-content-center align-items-center mt-5'>
  
            <form onSubmit={handleregister}>
              <div className='mt-3 d-flex flex-row'>
              <TextField id="standard-basic" label="First name" name="firstname" value={firstname || ""} variant="standard" className='me-3' fullWidth onChange={(e)=>validateData(e)}/>
              <TextField id="standard-basic" label="Last name" name="lastname" value={lastname||""} variant="standard" fullWidth onChange={(e)=>validateData(e)}/>
              </div>
    
              <div className='mt-3'>
              <TextField id="standard-basic" label="Email address" name="email" value={email||""} variant="standard" fullWidth onChange={(e)=>validateData(e)}/>
              </div>
    
              <div className='mt-3'>
              <TextField id="standard-basic" label="Password" name="password" type='password' value={password||""} variant="standard" fullWidth onChange={(e)=>validateData(e)}/>
              </div>
    
              <div className='mt-5'>
              <Stack spacing={2} direction="row">
                <Button variant="text" className='text-danger' onClick={handleclear} >Clear</Button>
                <Button variant="contained" className='bg-success' type='submit' disabled={!isFirstname && !isLastname && !isEmail && !isPassword?true:false} fullWidth>Register</Button>
              </Stack>
              </div>
            </form>
  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
