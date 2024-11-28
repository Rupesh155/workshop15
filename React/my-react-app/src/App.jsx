// import React, { useState } from 'react'
// const App = () => {
//     let [count,SetCount]=     useState(0)
//   // Hook
//   // let count=0
//   function fun1(){
//     SetCount(count+2)
//     // console.log('heheheheh'); 
//   }
//   function fun2(){
//     SetCount(count-2)
//     // console.log('heheheheh'); 
//   }
//   function fun3(){
//     SetCount(0)
//     // console.log('heheheheh'); 
//   }
//   return (
//     <div> 
//       <h1> {count}</h1> 
//       <button onClick={fun1}>++</button>
//       <button onClick={fun2}>--</button>
//       <button onClick={fun3}>reset</button>

//      </div> 
//   )
// }
// export default App

// import React, { useState } from 'react'
// const App = () => {
//   let [color,SetColor]=useState('green')
//   function fun1(){
//     SetColor('red')
//   }
//   return (
//     <div style={{backgroundColor:color,height:"100vh"}}>
//       <button onClick={fun1}>red</button>
//       <button onClick={ ()=>{SetColor('yellow')}}>yellow</button>
//       <button>blue</button>
//       <button>black</button>


//     </div>
//   )
// }

// export default App


// import React from 'react'
// // import Home from './Home'
// import Card from './Card'
// const App = ({a}) => {
//   // let user='hellooo'
//   let arr=[1,2,3,4,5,6,78]
//   return (
//     <div>

//   {
//     arr.map((a)=>{
//       return(<div>
//         <lI>  {a}</lI>

//       </div>
//         )
//     })
//   }

//        </div>

//   )
// }

// export default App



// import React, { useState } from 'react'
// const App = () => {
//   let [samay,SetSamay]=useState()
//   setInterval(()=>{
//     let time=    new Date().toLocaleTimeString()
//     SetSamay(time)
//   })
//   return (
//     <div>
//       <h2>{samay}</h2>
//       <button>stop</button>
//     </div>
//   )
// }

9993671830


// export default App

// import React, { useEffect, useState } from 'react'
// const App = () => {
//   console.log('helloooooo');
//   let [count,SetCount]=useState(0)
//   let [state,SetState]=useState('delhi')
//   useEffect(()=>{

//   },[count])
//   function fun1(){
//     SetCount(count+1)
//   }
//   return (
//     <div>
//       <h2> {count}</h2>
//       <button onClick={fun1}> click</button>
//       <h1> {state}</h1>
//       <button onClick={()=>{SetState('jabalpur')}}>city</button>
//     </div>
//   )
// }

// export default App




// import React, { useEffect, useState } from 'react'
// import './App.css'
// const App = () => {
//   let [apiData, SetApiData] = useState([])
//   console.log('hellloooo');

//   useEffect(() => {
//     fetch('https://dummyjson.com/recipes').then((res) => {
//       return res.json()

//     }).then((data) => {
//       console.log(data);
//       SetApiData(data.recipes)

//     })
//   }, [])

//   function d(id){
//     console.log(id,"hehehehe");
//       let filterData= apiData.filter((a,b)=>{
//       return b!=id

//     })
//     SetApiData(filterData)
    

//   }

//   return (

//     <div>
//       {
//         apiData.map((val,index) => {
//           console.log(val, "heheheh");
//           return (<div id='main' >
//             <div id='card' onClick={()=>d(index)}>
//               <img src={val.image} />
//               <h4>{val.name}</h4>
//             </div>

//           </div>)
//         })
//       }
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// const App = () => {
//   let [data,SetData]=useState('')
//   function fun1(e){
//     console.log(e.target.value);
//     SetData(e.target.value) 
//   }
//   function store(){
//     localStorage.setItem('user',data)
//   }
//   return (
//     <div>
//       <h1> {data}</h1>
//       <input  onChange={fun1} placeholder='Enter your name'/>
//       <button onClick={store}>click</button>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// const App = () => {
//   let [input,SetInput]=useState({
//     name:"",
//     email:"",
//     passWord:""

//   })
//   function fun1(a){
//     let {name,value}=a.target
//     // console.log(name,value,'hellloo');
//     SetInput({...input,[name]:value})
//     console.log(input,"isse dekhooo");

//         // console.log(   a.target);
      
//     // SetInput(a.target.value
//   }
//   function done(){
//     localStorage.setItem('user',JSON.stringify(input))
//    let data=   localStorage.getItem('user')

//   }
//   return (
//     <div>
//     <fieldset>  
//       <legend> Form</legend>
//       <form>
//         <input onChange={fun1} name='name' value={input.name}  placeholder='Enter your name' />
//         <br></br>
//         <br></br>

//         <input placeholder='Enter email'  name='email'  value={input.email} onChange={fun1}  />
//         <br></br>
//         <br></br>
//         <input  type='password'  onChange={fun1}  name='passWord'  value={input.passWord} placeholder='Enter password' />
//        <button onClick={done}> save</button>
//       </form>
//       </fieldset>
//     </div>
//   )
// }

// export default App






// let obj={
//   name:"",
//   value:""
// }

// let {name,value}=obj




// http://localhost:5173/about







// import React,{useState} from 'react'
// import NavBar from './NavBar'
// import './App.css'
// import { Route,Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import SignUp from './SignUp'
// import Login from './Login'
// import Cart from './Cart'
// const App = () => {
//   // npm  i react-router-dom
//   let [cartData,SetCartData]=useState([])
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route  path='/'  element={<Home cartData={cartData}  SetCartData={SetCartData}/>}/>
//         <Route  path='/signup'  element={<SignUp/>}/>
//         <Route  path='/cart'  element={<Cart  cartData={cartData}/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App

// // import React, { useState } from 'react'

// // const App = () => {
// //   let [count,SetCount]=useState(0)
// //   return (
// //     <div>
// //       <h2> {count}</h2>
// //       <button onClick={()=>SetCount(count+1)}> click</button>
// //     </div>
// //   )
// // }

// // export default App





// // import React, { useReducer } from 'react'

// // const App = () => {
// //   function reduser(count,action){
// //     if(action.type==='incre'){
// //       return count+1

// //     }
// //     else if(action.type==='d'){
// //       return count-1
// //     }
// //     else if(action.type==='reset'){
// //       return 0
// //     }
// //     else{
// //       return count
// //     }

// //   }
// //       let [count,disptach]=      useReducer(reduser,0)
// //       function fun1(){
// //         disptach({
// //           type:"incre"

// //         })


// //       }
// //   return (
// //     <div>
// //       <h2> {count}</h2>
// //       <button  onClick={fun1}>++</button>
// //       <button  onClick={()=>disptach({type:'d'})}>--</button>
// //       <button  onClick={()=>disptach({type:'reset'})}>reset</button>
// //     </div>
// //   )
// // }

// // export default App

          

// // import React, { useReducer } from 'react'

// // const App = () => {
// //   function reduser(color,action){{
// //     if(action.type=='red'){
// //       return color='red'
// //     }
// //     else if(action.type=='green'){
// //       return color='green'
// //     }
// //     else{
// //       return color
// //     }
// //   }
 

// //   }
// //   let [color,disptach]=useReducer(reduser,'gold')
// //   return (
// //     <div style={{backgroundColor:color,height:'400px'}}>
// //       <button onClick={()=>disptach({type:"red"})}>red</button>
// //       <button onClick={()=>disptach({type:"green"})}>green</button>
// //       <button onClick={()=>disptach({type:"blue"})}>blue</button>

// //     </div>
// //   )
// // }

// // export default App



import React from 'react'
import Home from './Home.jsx'
const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App