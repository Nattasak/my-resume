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
                  <span><b>HTML</b>{'  /  '}<b>CSS</b></span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span><b>CSS Preprocessor</b>{'   '}( SASS{'  /  '}LESS )</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span><b>JavaScript</b>  ES6  /  <b>TypeScript</b></span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span><b>React</b>{'   '}( CRA{'  /  '}Next.js )</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span><b>Angular</b>{'   '}( Angular CLI )</span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span><b>Version Control</b>{'   '}( GIT )</span>
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
