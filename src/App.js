import React from 'react'
import './Styles/App.css'

import Header from './Components/Header.js'
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import JSPlayground from './Components/JSPlayground.js'
import Skills from './Components/Skills.js'
import Knowledge from './Components/Knowledge.js'

export default class App extends React.Component {
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
