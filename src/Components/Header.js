import React from 'react'
import '../Styles/Header.css'
import SayHello from './SayHello.js'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header section">
        <h1 className="section-title">Nattasak Lertpoompunya</h1>
        <nav className="main-nav">
          <div className="container">
            <ul className="main-nav-items">
              <li className="main-nav-item say-hello"><SayHello /></li>
              <li className="main-nav-item"><a href="https://github.com/Nattasak/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-3x" aria-hidden="true"></i> </a></li>
              <li className="main-nav-item"><a href="https://medium.com/@nattasak111/" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium fa-3x" aria-hidden="true"></i> </a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
