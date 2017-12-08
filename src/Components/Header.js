import React from 'react'
import '../Styles/Header.css'
import SayHi from './SayHi.js'

const myName = 'Nattasak Lertpoompunya'

const List = (props) => (
  <li className="main-nav-item">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${props.icon} fa-3x`} aria-hidden="true"></i>
    </a>
  </li>
)

const Header = () => (
  <header className="header section">
    <h1 className="section-title">{myName}</h1>
    <nav className="main-nav">
      <div className="container">
        <ul className="main-nav-items">
          <li className="main-nav-item say-hello"><SayHi /></li>
          <List url='https://github.com/Nattasak' icon='github' />
          <List url='https://medium.com/@nattasak111' icon='medium' />
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
