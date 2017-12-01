import React, { Component } from 'react'
import '../Styles/Skills.css'

const List = ({ title, url='' }) => (
  <li className="skills-item">
    <i className="fa fa-linode fa-2x" aria-hidden="true"></i>
    <span>
      <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
    </span>
  </li>
)

class Knowledge extends Component {
  render() {
    return (
      <section className="skills-section section">
        <div className="container">
          <h3 className="section-title">Essential knowledge</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="skills-items">
                <List title='HTTP' />
                <List title='DOM handling' />
                <List title='AJAX / RESTful API' url='https://www.youtube.com/watch?v=s7wmiS2mSXY' />
                <List title='How JavaScript works' url='https://www.youtube.com/watch?v=8aGhZQkoFbQ' />
                <List title='Functional Programming' url='https://www.youtube.com/watch?v=FYXpOjwYzcs' />
                <List title='JS Style Guide' url='https://github.com/airbnb/javascript' />
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Knowledge
