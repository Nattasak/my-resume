import React, { Component } from 'react'
import './Styles/App.css'

// Components
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import JSPlayground from './components/JSPlayground'
import Skill from './components/Skill'
import Knowledge from './components/Knowledge'
import LabState from './components/LabState'

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
      <div className={ `App ${this.state.isDark ? 'dark' : 'light'}` }>
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
          {/* <LabState /> */}
          <Project />
          <JSPlayground />
          <Skill />
          <Knowledge />
        </div>
      </div>
    )
  }
}

export default App
