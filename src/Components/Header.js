import React, { Fragment } from 'react'
import '../Styles/Header.css'

// Components
import SayHi from './SayHi'
import About from './About'

const myName = 'Nattasak Lertpoompunya'

const ListItem = (props) => (
  <li className="list-item">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${props.icon} fa-3x`} aria-hidden="true"></i>
    </a>
  </li>
)

const Header = () => (
  <Fragment>
    <header className="header section">
      <h1 className="section-title">{myName}</h1>
      <nav className="main-nav">
        <div className="container">
          <ul className="list">
            <li className="list-item say-hello"><SayHi /></li>
            <ListItem url='https://github.com/Nattasak' icon='github' />
            <ListItem url='https://medium.com/@nattasak111' icon='medium' />
          </ul>
        </div>
      </nav>
    </header>
    <About />
  </Fragment>
)

export default Header
