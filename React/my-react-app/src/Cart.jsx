import React from 'react'

const Cart = ({cartData}) => {
    console.log(cartData,"kaun hoooo");
    
  return (
    <div>
             {
        cartData.map((val)=>{
          return(<div id='main'>
          
          <div id='card'>  
          <img  src={val.image}/>
          <h5> {val.name}</h5>
    
          </div>
          </div>)
        })
      }
    </div>
  )
}

export default Cart