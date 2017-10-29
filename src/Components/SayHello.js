import React, { Component } from 'react';
import '../Styles/SayHello.css';

class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <form id="contact_form" action="#">
        <div>
          <label>
            { this.state.inputValue ? (
              <span>Hey, {this.state.inputValue}. what’s up? Nice to meet you.</span>
            ) : (
              <span>What's your name?</span>
            ) }
          </label><br />
          <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        </div>
      </form>
    );
  }
}
// Hey, what’s up?
export default SayHello;
