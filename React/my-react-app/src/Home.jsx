// import React from 'react'

// const Home = ({data}) => {
//   let home='abc'
//   // a={
//   //   data:'hello'
//   // }
  
//   return (
//     <div>{data}</div>
//   )
// }

// export default Home



// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// const Home = () => {
//   return (
//     <div>
//       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img height='300px' src="https://images.unsplash.com/photo-1732613942657-61684c51eb55?q=80&w=3834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img  height='300px' src="https://images.unsplash.com/photo-1732530361158-09f4154b6b3b?q=80&w=3581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img  height='300px' src="https://images.unsplash.com/photo-1732459996749-e39500ee6063?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>





// <div class="card" >
//   <img src="..." class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Home



// import React, { useEffect, useState } from 'react'
// import './Home.css'
// import OneCard from './OneCard'
// const Home = ({cartData,SetCartData}) => {
//   let [apiData,SetApiData]=useState([])
// useEffect(()=>{
//   fetch('https://dummyjson.com/recipes').then((res)=>{
//     return res.json()

//   }).then((data)=>{
//     console.log(data,"kyaaaa");
//     SetApiData(data.recipes)
//   })

// },[])
//   return (
//     <div>
//     <OneCard  cartData={cartData}  SetCartData={SetCartData}   apiData={apiData}/>
//     </div>
//   )
// }

// export default Home




// import React, { useContext } from 'react'
// import Context from './Context'
// const Home = () => {
//    let data=    useContext(Context)
//   return (
//     <div>
//       <h1> {data}</h1>
//     </div>
//   )
// }

// export default Home











