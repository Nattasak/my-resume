import React, { Component } from 'react'
import '../Styles/SayHi.css'

class SayHi extends Component {
  constructor(props) {
    super(props)
    this.state = { inputVal: '' }
  }

  inputValHandler = (evt) =>  {
    this.setState({ inputVal: evt.target.value })
  }

  render() {
    return (
      <div id="contact_form">
        { !this.state.inputVal ? `What's your name ?` : `Hi, ${this.state.inputVal}.` }
        <br />
        <input onChange={this.inputValHandler} maxLength='15' />
      </div>
    )
  }
}

export default SayHi
