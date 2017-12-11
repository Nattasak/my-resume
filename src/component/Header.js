import React, { Component, Fragment } from 'react';
import '../css/Header.css';
import About from './About';

const ListItem = props => (
  <li className="list-item">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${props.icon} fa-3x`} aria-hidden="true" />
    </a>
  </li>
);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    this.inputName.focus();
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const myName = 'Nattasak Lertpoompunya';

    return (
      <Fragment>
        <header className="header section">
          <h1 className="section-title">{myName}</h1>
          <nav className="main-nav">
            <div className="container">
              <ul className="list">
                <li className="list-item say-hi">
                  <div className="sayhi">
                    <label>What’s your name ?</label>
                    <br />
                    <input
                      ref={(input) => { this.inputName = input; }}
                      onChange={this.handleInputChange}
                      maxLength="15"
                    />
                  </div>
                </li>
                <ListItem url="https://github.com/Nattasak" icon="github" />
                <ListItem url="https://medium.com/@nattasak111" icon="medium" />
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
