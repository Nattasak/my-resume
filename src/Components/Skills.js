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
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">HTML</a>
                    <span className="green">  /  </span>
                    <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank" rel="noopener noreferrer">CSS</a>
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor" target="_blank" rel="noopener noreferrer">CSS Preprocessor</a>
                    {'   '}
                    ( SASS{'  /  '}LESS )
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a>
                    <span className="green">  /  </span>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
                    {'   '}
                    ( CRA{'  /  '}Next.js )
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular</a>
                    {'   '}
                    ( Angular CLI )
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-bug fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="https://en.wikipedia.org/wiki/Version_control" target="_blank" rel="noopener noreferrer">Version Control</a>
                    {'   '}
                    ( GIT )
                  </span>
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
