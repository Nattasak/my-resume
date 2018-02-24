import React, { Component, Fragment } from 'react';
import Clipboard from 'clipboard';

import About from './About';

import '../css/Header.css';

const ListItem = props => (
  <li className="list-item">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${props.icon} fa-3x`} aria-hidden="true" />
    </a>
  </li>
);

class Header extends Component {
  state = { value: '' };

  componentDidMount() {
    this.clipboard = new Clipboard('.copy-to-clipboard');
    this.inputName.focus();
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const myName = 'Nattasak Lertpoompunya';

    return (
      <Fragment>
        <header className="header section">
          <h1 className="section-title">{myName}</h1>
          <br /><br />
          <div>
            Do you want to search my Name on Google?
            <a href={`https://www.google.co.th/search?q="${myName}"`} target="_blank" rel="noopener noreferrer">
              <button className="button copy-to-clipboard" data-clipboard-text={myName}>
                Click
              </button>
            </a>
          </div>
          <br /><br /><hr />
          <nav className="main-nav">
            <div className="container">
              <ul className="list">
                <li className="list-item say-hi">
                  <div className="sayhi">
                    <label>What’s your name ?</label>
                    <br />
                    <input
                      ref={(input) => { this.inputName = input; }}
                      onChange={this.handleChange}
                      maxLength="15"
                    />
                  </div>
                </li>
                <ListItem url="https://github.com/Nattasak" icon="github" />
                {/* <ListItem url="https://medium.com/@nattasak111" icon="medium" /> */}
              </ul>
            </div>
          </nav>
        </header>
        <About name={this.state.value} />
      </Fragment>
    );
  }
}

export default Header;
