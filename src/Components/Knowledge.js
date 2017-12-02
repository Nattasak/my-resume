import React, { Component } from 'react'
import '../Styles/Skills.css'

const List = (props) => {
  if (props.author) {
    var author = '  -  ' + props.author
  }

  if (props.children) {
    var link = <a href={props.children} target="_blank" rel="noopener noreferrer">{props.title}</a>
  } else {
    var link = props.title
  }

  return (
    <li className="skills-item">
      <i className="fa fa-linode fa-2x" aria-hidden="true"></i>
      <span>{link}{author}</span>
    </li>
  )
}

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
                <List title='React: Presentational and Container Components' author='Dan Abramov'>
                  https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
                </List>
                <List title='React: Clean Code vs. Dirty Code' author='Donavon West'>
                  http://americanexpress.io/clean-code-dirty-code/
                </List>
                <List title='JS: What the heck is the event loop anyway?' author='Philip Roberts'>
                  https://www.youtube.com/watch?v=8aGhZQkoFbQ
                </List>
                <List title='JS: Airbnb JavaScript Style Guide' author='Airbnb'>
                  https://github.com/airbnb/javascript
                </List>
                <List title='JS: Functional Programming Basics In ES6' author='Jeremy Fairbank'>
                  https://www.youtube.com/watch?v=FYXpOjwYzcs
                </List>
                <List title='What is an API?' author='MuleSoft'>
                  https://www.youtube.com/watch?v=s7wmiS2mSXY
                </List>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Knowledge
