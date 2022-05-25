import React from "react"
import "./ResCard.css"

function ResCard({ date, id, name, number, time}) {
  return (
    <div className="resy">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}

export default ResCard