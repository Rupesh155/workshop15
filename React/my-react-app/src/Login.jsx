import axios from 'axios'
import React, { useState } from 'react'
const Login = () => {
    let [input,SetInput]=useState({
        email:"",
        passWord:""
    })

    function fun1(e){
        let {name,value}= e.target
        SetInput({...input,[name]:value})
    }

 async   function done(){


 let res=   await axios.post('http://localhost:5000/login',input)
 console.log(res,'heheheheh');
 

  //  let localData=   localStorage.getItem('user')
  //  let newData=    JSON.parse(localData)
  //  console.log(newData,"hehehe");
  //  if(newData.email==input.email && newData.passWord==input.passWord){
  //   alert('loginnn  doneeeeeee')
  //  }
  //  else{
  //   alert('FAKE HO TUM')
  //  }
   
}
  return (
    <div>    <fieldset> 
     <input  onChange={fun1} name='email'  value={input.email} placeholder='Enter your email'/>
     <br></br>
     <br></br>
     <input   onChange={fun1}    name='passWord'  value={input.passWord}  type='password'  placeholder='Enter your password'/>
     <br></br>
     <br></br>
     <button onClick={done}>save</button>
 
    </fieldset></div>
  )
}

export default Login