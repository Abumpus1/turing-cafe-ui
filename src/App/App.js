import React, { Component } from 'react';
import './App.css';
import { getReservations, addReservation } from "../api-calls"
import Form from "../Form"
import ResContainer from "../ResContainer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations().then(data => {
      this.setState({ reservations: data })
    })
    .catch(err => console.log(err))
  }

  addResy = (newResy) => {
    addReservation(newResy).then(data => {
      this.setState({ reservations: [...this.state.reservations, data] })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addResy={this.addResy} />
        <ResContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
