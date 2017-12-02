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
  constructor(props) {
    super(props)
    this.state = {
      isDark: false
    }
  }

  handleCheckbox = (event) => {
    this.setState({
      isDark: event.target.checked
    })
  }

  render() {
    return (
      <div className={`App ${!this.state.isDark ? 'light' : 'dark'}`}>
        <div className="container">
          <label>
            Dark theme:
            <input
              name="isDark"
              type="checkbox"
              checked={this.state.isDark}
              onChange={this.handleCheckbox} />
          </label>
          <Header />
          <About />
          <Projects />
          <JSPlayground />
          <Skills />
          <Knowledge />
        </div>
      </div>
    )
  }
}

export default App
