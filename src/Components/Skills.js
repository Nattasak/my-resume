import React, { Component } from 'react';
import '../Styles/Skills.css';

class Skills extends Component {
  render() {
    return (
      <section className="skills-section section">
        <div className="container">
          <h3 className="section-title">Skills</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="skills-items">
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>HTML  |  CSS  |  Sass  |  Less  |  CSS Modules</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>JavaScript  |  React  |  Redux</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>Git</span>
                </li>
              </ul>
            </div>
            <div className="flex-item"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
