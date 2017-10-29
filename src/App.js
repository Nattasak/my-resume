import React, { Component } from 'react';
import './Styles/App.css';

// Components
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import Skills from './Components/Skills.js'
import SayHello from './Components/SayHello.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SayHello />
        <About />
        <Projects />
        <Skills />
        <Footer />
        {/*<ContactForm />*/}
      </div>
    );
  }
}

export default App;
