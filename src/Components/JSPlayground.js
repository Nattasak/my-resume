import React from 'react'
import '../Styles/JSPlayground.css'

export default class JSPlayground extends React.Component {
  render() {
    return (
      <section className="jsplayground-section section">
        <div className="container">
          <h3 className="section-title">JS Playground</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="jsplayground-items">
                <li className="jsplayground-item">
                <i className="fa fa-code fa-2x" aria-hidden="true"></i>
                  <a href="https://cdn.rawgit.com/Nattasak/my-resume/gh-pages/assets/js-playground/Random-Quotes.html" target="_blank" rel="noopener noreferrer">Random Quotes</a>
                  {/* <span className="separate">   |   </span>
                  <a className="not-active" href="" target="_blank" rel="noopener noreferrer">Source code</a> */}
                </li>
                <li className="jsplayground-item">
                <i className="fa fa-code fa-2x" aria-hidden="true"></i>
                  <a href="https://cdn.rawgit.com/Nattasak/my-resume/gh-pages/assets/js-playground/logic/Pyramid-Builder.html" target="_blank" rel="noopener noreferrer">Logic - Pyramid Builder</a>
                  {/* <span className="separate">   |   </span>
                  <a className="not-active" href="" target="_blank" rel="noopener noreferrer">Source code</a> */}
                </li>
                <li className="jsplayground-item">
                <i className="fa fa-code fa-2x" aria-hidden="true"></i>
                  <a href="https://cdn.rawgit.com/Nattasak/my-resume/gh-pages/assets/js-playground/logic/Grade-Calculator.html" target="_blank" rel="noopener noreferrer">Logic - Grade Calculator</a>
                  {/* <span className="separate">   |   </span>
                  <a className="not-active" href="" target="_blank" rel="noopener noreferrer">Source code</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
