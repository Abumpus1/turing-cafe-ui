import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: null
    }
  }

  render() {
    return (
      <div className='resy-form'>
        <input name="name" type="text" value={this.state.name} placeholder="Name..." />
        <input name="date" type="text" value={this.state.date} placeholder="Date (mm/dd)" />
        <input name="time" type="text" value={this.state.time} placeholder="Time" />
        <input name="number" type="number" value={this.state.number} placeholder="Number of guests" />
        <button>Make Reservation</button>
      </div>
    )
  }
}

export default Form