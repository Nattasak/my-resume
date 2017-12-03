import React, { Component } from 'react'
import './Styles/App.css'

// Components
import Header from './Components/Header'
import About from './Components/About'
import Project from './Components/Project'
import JSPlayground from './Components/JSPlayground'
import Skill from './Components/Skill'
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
