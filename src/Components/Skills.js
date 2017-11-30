import React from 'react'
import '../Styles/Skills.css'

export default class Skills extends React.Component {
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
                  <span>HTML  |  CSS  |  Sass  |  Less</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>JavaScript ES6  |  TypeScript</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>Angular  |  React  |  CRA  |  Next.js  |  Redux</span>
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
    )
  }
}
