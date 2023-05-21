import React from 'react'

const Friends = ({friends}) => {
  return (
    <>
       {friends.map((data)=>{
        return(
            <>
            
            <h2>{data.name}</h2>
            
            </>
        )
       })}
    </>
  )
}

export default Friends