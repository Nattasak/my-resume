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
                  <span>HTML | CSS | CSS Modules | Sass | Less</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>JS | React | RxJS | Redux | MobX</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>API | Axios | SuperAgent</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>Git | Node.js | Express</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>Next.js</span>
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
