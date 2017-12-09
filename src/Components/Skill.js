import React from 'react'
import '../Styles/Skill.css'
import classNames from 'classnames'

import SKILL from '../data/skill.json'

const ListItem = (props) => {
  let skillLevel = props.level
  let className = classNames({ [`fa fa-battery-${skillLevel} fa-2x`]: true })
  return (
    <li className="list-item">
      <i className={className} aria-hidden="true"></i>
      <span className='title'>{props.title}</span>
    </li>
  )
}

const List = (props) => {
  const data = props.data
  const listItems = data.map((item) => 
    <ListItem 
      key={item.id}
      title={item.title}
      level={item.level} />
  )
  return (
    <ul className="list">
      {listItems}
    </ul>
  )
}

const Skill = () => (
  <section className="skill section">
    <div className="container">
      <h3 className="section-title">Skills</h3>
      <div className="flex-container">
        <div className="flex-item">
          <List data={SKILL} />
        </div>
      </div>
    </div>
  </section>
)

export default Skill
