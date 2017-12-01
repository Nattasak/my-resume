import React, { Component } from 'react'
import '../Styles/Skills.css'

class Knowledge extends Component {
  render() {
    return (
      <section className="skills-section section">
        <div className="container">
          <h3 className="section-title">Essential knowledge</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="skills-items">
                <li className="skills-item">
                  <i className="fa fa-linode fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">HTTP</a>
                    {'   '}
                    ( Request{'  /  '}Response )
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-linode fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">DOM handling</a>
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-linode fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">AJAX</a>
                    <span className="green">  /  </span>
                    <a href="https://www.youtube.com/watch?v=s7wmiS2mSXY" target="_blank" rel="noopener noreferrer">RESTful API</a>
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-linode fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank" rel="noopener noreferrer">How JavaScript works</a>
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-linode fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="https://www.youtube.com/watch?v=FYXpOjwYzcs" target="_blank" rel="noopener noreferrer">Functional Programming</a>
                  </span>
                </li>
                <li className="skills-item">
                  <i className="fa fa-linode fa-2x" aria-hidden="true"></i>
                  <span>
                    <a href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer">Style Guide</a>
                    {'   '}
                    ( Airbnb JavaScript Style Guide )
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

export default Knowledge
