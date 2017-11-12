import React, { Component } from 'react';
import './Styles/App.css';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Skills from './Components/Skills.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Skills />
      </div>
    );
  }
}

export default App;
