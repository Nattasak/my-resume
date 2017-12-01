import React, { Component } from 'react'
import '../Styles/Skills.css'

const Skill = ({ title, level }) => (
  <li className="skills-item">
    <i className={`fa fa-battery-${level} fa-2x`} aria-hidden="true"></i>
    <span className='green'>
      {title}
    </span>
  </li>
)

class Skills extends Component {
  render() {
    return (
      <section className="skills-section section">
        <div className="container">
          <h3 className="section-title">Skills</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="skills-items">
                <Skill title='HTML / CSS' level='full' />
                <Skill title='CSS Preprocessor (SASS / LESS)' level='full' />
                <Skill title='CSS Framework (Bootstrap / Bulma)' level='full' />
                <Skill title='JavaScript / TypeScript' level='half' />
                <Skill title='React (CRA / Next.js)' level='half' />
                <Skill title='Angular (Angular CLI)' level='half' />
                <Skill title='Node.js (Express)' level='quarter' />
                <Skill title='Document-oriented database (MongoDB)' level='quarter' />
                <Skill title='Version Control (GIT)' level='full' />
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills
