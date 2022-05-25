import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let resy = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: parseInt(this.state.number)
    }

    this.props.addResy(resy)
  }

  handleChange = ({ name, value }) => {
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form className='resy-form' onSubmit={(e) => this.handleSubmit(e)}>
        <input onChange={(e) => this.handleChange(e.target)} name="name" type="text" value={this.state.name} placeholder="Name..." />
        <input onChange={(e) => this.handleChange(e.target)} name="date" type="text" value={this.state.date} placeholder="Date (mm/dd)" />
        <input onChange={(e) => this.handleChange(e.target)} name="time" type="text" value={this.state.time} placeholder="Time" />
        <input onChange={(e) => this.handleChange(e.target)} name="number" type="number" value={this.state.number} placeholder="Number of guests" />
        <button className="submit">Make Reservation</button>
      </form>
    )
  }
}

export default Form