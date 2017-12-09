import React, { Component, Fragment } from 'react'
import '../css/Header.css'

// Component
import About from './About'

const myName = 'Nattasak Lertpoompunya'

const ListItem = (props) => (
  <li className="list-item">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${props.icon} fa-3x`} aria-hidden="true"></i>
    </a>
  </li>
)

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <header className="header section">
          <h1 className="section-title">{myName}</h1>
          <nav className="main-nav">
            <div className="container">
              <ul className="list">
                <li className="list-item say-hi">
                  <div className="sayhi">
                    <label>What's your name ?</label>
                    <br />
                    <input autoFocus onChange={this.handleInputChange} maxLength="15" />
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
    )
  }
}

export default Header
