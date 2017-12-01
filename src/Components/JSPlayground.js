import React, { Component } from 'react'
import '../Styles/JSPlayground.css'

const Code = (props) => {
  let title = props.title
  let filename = title.replace(/\s+/g, '-')

  return (
    <li className="jsplayground-item">
      <i className="fa fa-code fa-2x" aria-hidden="true"></i>
      <a href={`https://rawgit.com/Nattasak/my-resume/master/public/assets/js-playground/${filename}.html`}
      target="_blank" rel="noopener noreferrer">{title}</a>
    </li>
  )
}

class JSPlayground extends Component {
  render() {
    return (
      <section className="jsplayground-section section">
        <div className="container">
          <h3 className="section-title">JS Playground</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="jsplayground-items">
                <Code title='Random Quotes' />
                <Code title='Pyramid Builder' />
                <Code title='Grade Calculator' />
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default JSPlayground
