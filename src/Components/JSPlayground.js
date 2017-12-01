import React, { Component } from 'react'
import '../Styles/JSPlayground.css'

const Code = ({ title, filename }) => (
  <li className="jsplayground-item">
    <i className="fa fa-code fa-2x" aria-hidden="true"></i>
    <a href={`https://rawgit.com/Nattasak/my-resume/master/public/assets/js-playground/${filename}`}
    target="_blank" rel="noopener noreferrer">{title}</a>
  </li>
)

class JSPlayground extends Component {
  render() {
    return (
      <section className="jsplayground-section section">
        <div className="container">
          <h3 className="section-title">JS Playground</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="jsplayground-items">
                <Code title='Random Quotes' filename='Random-Quotes.html' />
                <Code title='Pyramid Builder' filename='Pyramid-Builder.html' />
                <Code title='Grade Calculator' filename='Grade-Calculator.html' />
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default JSPlayground
