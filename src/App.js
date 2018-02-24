import React, { Component } from 'react';
import './css/App.css';

import Header from './component/Header';
import JSPlayground from './component/JSPlayground';
// import Knowledge from './component/Knowledge';
import Project from './component/Project';
// import Skill from './component/Skill';

class App extends Component {
  state = { isDark: true };

  handleCheckbox = (e) => {
    this.setState({ isDark: e.target.checked });
  }

  render() {
    const { isDark } = this.state;

    return (
      <div className={`App ${isDark ? 'dark' : 'light'}`}>
        <div className="container">
          <div className="theme">
            <label>
              Dark theme:
              <input
                name="isDark"
                type="checkbox"
                checked={isDark}
                onChange={this.handleCheckbox}
              />
            </label>
          </div>
          <Header />
          {/* <Knowledge /> */}
          <Project />
          <JSPlayground />
          {/* <Skill /> */}
        </div>
      </div>
    );
  }
}

export default App;
