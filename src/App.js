import React, { Component } from 'react';
import './Styles/App.css';

// Components
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Skills from './Components/Skills.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
