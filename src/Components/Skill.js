import React from 'react'
import '../Styles/Skill.css'

const title = 'Skills'

const ListItem = (props) => {
  return (
    <li className="skills-item">
      <i className={`fa fa-battery-${props.level} fa-2x`} aria-hidden="true"></i>
      <span className='title'>
        {props.title}
      </span>
    </li>
  )
}

const SkillList = (props) => {
  const data = props.data
  const listItems = data.map((item) => 
    <ListItem 
      key={item.id}
      title={item.title}
      level={item.level} />
  )
  return (
    <ul className="skills-items">
      {listItems}
    </ul>
  )
}

const Skill = () => {
  return (
    <section className="skills-section section">
      <div className="container">
        <h3 className="section-title">{title}</h3>
        <div className="flex-container">
          <div className="flex-item">
            <SkillList data={SKILLS} />
          </div>
        </div>
      </div>
    </section>
  )
}

const SKILLS = [
  { id: 1, title: 'HTML / CSS', level: 'full' },
  { id: 2, title: 'CSS Preprocessor (SASS / LESS)', level: 'full' },
  { id: 3, title: 'CSS Framework (Bootstrap / Bulma)', level: 'full' },
  { id: 4, title: 'JavaScript / TypeScript', level: 'half' },
  { id: 5, title: 'React (CRA / Next.js)', level: 'half' },
  { id: 6, title: 'Angular (Angular CLI)', level: 'half' },
  { id: 7, title: 'Node.js (Express)', level: 'quarter' },
  { id: 8, title: 'Document-oriented database (MongoDB)', level: 'quarter' },
  { id: 9, title: 'Version Control (GIT)', level: 'full' }
]

export default Skill
