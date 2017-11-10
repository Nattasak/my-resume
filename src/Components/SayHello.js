import React, { Component } from 'react';
import '../Styles/SayHello.css';

class SayHello extends Component {
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
              <span>Hi'  What's your name ?</span>
            ) }
          </label><br />
          <input value={this.state.inputValue} onChange={this.inputValueHandler} />
        </div>
      </form>
    );
  }
}

export default SayHello;
