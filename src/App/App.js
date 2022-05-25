import React, { Component } from 'react';
import './App.css';
import getReservations from "../api-calls"
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
      console.log(this.state.reservations)
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <ResContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
