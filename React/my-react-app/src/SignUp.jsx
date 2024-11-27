import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate=     useNavigate()
    let [input,SetInput]=useState({
        name:"",
        email:"",
        passWord:""
    })
    function fun1(e){
        e.preventDefault()
        let {name,value}= e.target
        SetInput({...input,[name]:value})


    }
    function done(){
        console.log(input,"hehehe");
        localStorage.setItem('user',JSON.stringify(input))
        navigate('/login')
        
    }
  return (
    <div>
        <fieldset> 
     
         <input  onChange={fun1}  name='name'  value={input.name} placeholder='Enter your name'/>
         <br></br>
         <br></br>
         <input  onChange={fun1} name='email'  value={input.email}  placeholder='Enter your email'/>
         <br></br>
         <br></br>
         <input  type='password'   name='passWord'  value={input.passWord} onChange={fun1} placeholder='Enter your password'/>
         <br></br>
         <br></br>
         <button onClick={done} type='submit' >save</button>
    
        </fieldset>
    </div>
  )
}

export default SignUp