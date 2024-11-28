import React, { useState } from 'react'

const OneCard = ({apiData,SetCartData,cartData}) => {

function done(data){
    console.log(data,"hahahaah");
    SetCartData([...cartData,data])
    console.log(cartData,"hellooooo");
    
    

}
  return (
    <div>
          {
        apiData.map((val)=>{
          return(<div id='main'>
          
          <div id='card'>  
          <img  src={val.image}/>
          <h5> {val.name}</h5>
          <button onClick={()=>done(val)}>addToCart</button>
          </div>
          </div>)
        })
      }
    </div>
  )
}

export default OneCard