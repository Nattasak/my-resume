import React, { Component } from 'react';
import '../Styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="name">Nattasak Lertpoompunya</h1>
        <nav className="main-nav">
          <div className="container">
            <ul className="main-nav-items">
              <li className="main-nav-item"><a href="">About</a></li>
              <li className="main-nav-item"><a href="">Skills</a></li>
              <li className="main-nav-item"><a href="">Projects</a></li>
              <li className="main-nav-item"><a href="">Github</a></li>
              <li className="main-nav-item"><a href="">Blog</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
