import React, { Component } from 'react';
import './css/App.css';

import Header from './component/Header';
import Project from './component/Project';
import JSPlayground from './component/JSPlayground';
import Skill from './component/Skill';
import Knowledge from './component/Knowledge';

class App extends Component {
  state = { isDark: true };

  handleCheckbox = (e) => {
    this.setState({
      isDark: e.target.checked
    });
  }

  render() {
    return (
      <div className={`App ${this.state.isDark ? 'dark' : 'light'}`}>
        <div className="container">
          <div className="theme">
            <label>
              Dark theme:
              <input
                name="isDark"
                type="checkbox"
                checked={this.state.isDark}
                onChange={this.handleCheckbox}
              />
            </label>
          </div>
          <Header />
          <Project />
          <JSPlayground />
          <Skill />
          <Knowledge />
        </div>
      </div>
    );
  }
}

export default App;
