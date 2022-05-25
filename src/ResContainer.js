import React from "react"
import ResCard from "./ResCard"
import "./ResContainer.css"

function ResContainer({ reservations }) {

  const resies = reservations.map(resy => {
    return (
      <ResCard 
        key={resy.id}
        {...resy}
      />
    )
  })

  return (
    <div className='resy-container'>
     {resies}
    </div>
  )
}

export default ResContainer