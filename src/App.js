import React, { Component } from 'react'
import './Styles/App.css'

// Components
import Header from './Components/Header.js'
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import JSPlayground from './Components/JSPlayground.js'
import Skills from './Components/Skills.js'
import Knowledge from './Components/Knowledge.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <JSPlayground />
        <Skills />
        <Knowledge />
      </div>
    )
  }
}

export default App
