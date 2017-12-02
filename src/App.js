import React, { Component } from 'react'
import './Styles/App.css'

// Components
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import JSPlayground from './Components/JSPlayground'
import Skills from './Components/Skills'
import Knowledge from './Components/Knowledge'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDark: true
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
          <div className="theme">
            <label>
              Dark theme:
              <input
                name="isDark"
                type="checkbox"
                checked={this.state.isDark}
                onChange={this.handleCheckbox} />
            </label>
          </div>
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
