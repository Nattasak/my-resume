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
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>HTML</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>CSS</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>JavaScript</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>React</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>Node.js</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>MongoDB</span>
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
