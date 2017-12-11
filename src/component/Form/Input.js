import React, { Component } from 'react';

class Input extends Component {
  focus() {
    this.el.focus();
  }

  render() {
    return (
      <input
        ref={(el) => { this.el = el; }}
      />
    );
  }
}

export default Input;
