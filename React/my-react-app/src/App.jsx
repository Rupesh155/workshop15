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




import React, { useState } from 'react'

const App = () => {
  let [input,SetInput]=useState({
    name:"",
    email:"",
    passWord:""

  })
  function fun1(a){
    let {name,value}=a.target
    // console.log(name,value,'hellloo');
    SetInput({...input,[name]:value})
    console.log(input,"isse dekhooo");

        // console.log(   a.target);
      
    // SetInput(a.target.value
  }
  return (
    <div>
    <fieldset>  
      <legend> Form</legend>
      <form>
        <input onChange={fun1} name='name' value={input.name}  placeholder='Enter your name' />
        <br></br>
        <br></br>

        <input placeholder='Enter email'  name='email'  value={input.email} onChange={fun1}  />
        <br></br>
        <br></br>
        <input  type='password'  onChange={fun1}  name='passWord'  value={input.passWord} placeholder='Enter password' />

      </form>
      </fieldset>
    </div>
  )
}

export default App






// let obj={
//   name:"",
//   value:""
// }

// let {name,value}=obj









