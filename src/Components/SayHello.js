import React, { Component } from 'react';
import '../Styles/SayHello.css';

export default class SayHello extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  inputValueHandler = (event) =>  {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <form id="contact_form" action="#">
        <div>
          <label>
            { this.state.inputValue ? (
              <span>Hi'  {this.state.inputValue}.  Nice to meet you  : )</span>
            ) : (
              <span>What's your name ?</span>
            ) }
          </label><br />
          <input value={this.state.inputValue} onChange={this.inputValueHandler} maxLength="15" />
        </div>
      </form>
    );
  }
}
