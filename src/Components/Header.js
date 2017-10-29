import React, { Component } from 'react';
import '../Styles/Header.css';
import YoutubeComponent from './YoutubeComponent.js';
import Person from '../Person/Person.js';
import Clock from './Clock.js';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Nattasak', lastname: 'Lertpoompunya' }
      ],
      isToggleOn: false,
      showPersons: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const doesShow = this.state.showPersons;
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      showPersons: !doesShow
    }));

    if( this.state.showPersons ) {
      alert('Ok. I will go T_T')
    } else {
      alert(`Yeah, I'm back ^^`)
    }
  }

  render() {
    let persons = null;

    // Map Person data and Show
    if ( this.state.showPersons ) {
      console.log("Person data show");
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              lastname={person.lastname} />
          })}
        </div>
      );
    }

    return (
      <header className="header section">
        <Clock />
        <button className="button-toggle" onClick={this.handleClick}>{this.state.isToggleOn ? 'i luv u <3' : 'i hate u !'}</button>
        <h1 className="section-title">{persons}</h1>
        <nav className="main-nav">
          <div className="container">
            <ul className="main-nav-items">
              <li className="main-nav-item"><a href="https://github.com/Nattasak"><i className="fa fa-github fa-5x" aria-hidden="true"></i></a></li>
              <li className="main-nav-item"><a href="https://codepen.io/nattasak1/"><i className="fa fa-codepen fa-5x" aria-hidden="true"></i></a></li>
              <li className="main-nav-item"><a href="https://medium.com/@nattasak101"><i className="fa fa-medium fa-5x" aria-hidden="true"></i></a></li>
              <li className="main-nav-item"><a href="https://notminetykub.wordpress.com/"><i className="fa fa-wordpress fa-5x" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </nav>
        <div className="youtube">
          <YoutubeComponent />
        </div>
      </header>
    );
  }
}

export default Header;
