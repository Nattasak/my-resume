import React, { Component } from 'react';
import '../Styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header section">
        <h1 className="section-title">Nattasak Lertpoompunya</h1>
        <nav className="main-nav">
          <div className="container">
            <ul className="main-nav-items">
              <li className="main-nav-item"><a href="https://github.com/Nattasak"><i class="fa fa-github fa-5x" aria-hidden="true"></i></a></li>
              <li className="main-nav-item"><a href="https://codepen.io/nattasak1/"><i class="fa fa-codepen fa-5x" aria-hidden="true"></i></a></li>
              <li className="main-nav-item"><a href="https://medium.com/@nattasak101"><i class="fa fa-medium fa-5x" aria-hidden="true"></i></a></li>
              <li className="main-nav-item"><a href="https://notminetykub.wordpress.com/"><i class="fa fa-wordpress fa-5x" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
