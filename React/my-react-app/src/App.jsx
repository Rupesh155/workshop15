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

// export default App



import React, { useEffect, useState } from 'react'
const App = () => {
  // console.log('helloooooo');
  

  useEffect(()=>{

  fetch('https://dummyjson.com/recipes').then((res)=>{
    return res.json()

  }).then((data)=>{
    console.log(data);
    

  })

  },[])

  
  let [count,SetCount]=useState(0)
  function fun1(){
    SetCount(count+1)
  }
  return (
    <div>
      <h2> {count}</h2>
      <button onClick={fun1}> click</button>
    </div>
  )
}

export default App






