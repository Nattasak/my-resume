import React, { Component } from 'react'
import '../css/SayHi.css'

class SayHi extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="sayhi">
        { !this.state.value ? `What's your name ?` : `Hi, ${this.state.value}.` }
        <br />
        <input onChange={this.handleInputChange} maxLength='15' />
      </div>
    )
  }
}

export default SayHi
