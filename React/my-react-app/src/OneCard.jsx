import React from 'react'

const OneCard = ({apiData}) => {
  return (
    <div>
          {
        apiData.map((val)=>{
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

export default OneCard