import React from 'react'
import '../Styles/JSPlayground.css'

const title = 'JS Playground'

const CodeList = (props) => {
  let filename = props.title.replace(/\s+/g, '-')
  return (
    <li className="jsplayground-item">
      <i className="fa fa-code fa-2x" aria-hidden="true"></i>
      <a href={`https://rawgit.com/Nattasak/my-resume/master/public/assets/js-playground/${filename}.html`}
      target="_blank" rel="noopener noreferrer">{props.title}</a>
    </li>
  )
}

const JSPlayground = () => {
  return (
    <section className="jsplayground-section section">
      <div className="container">
        <h3 className="section-title">{title}</h3>
        <div className="flex-container">
          <div className="flex-item">
            <ul className="jsplayground-items">
              <CodeList title='Random Quotes' />
              <CodeList title='Pyramid Builder' />
              <CodeList title='Grade Calculator' />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JSPlayground
