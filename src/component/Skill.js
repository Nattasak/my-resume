import React from 'react'
import '../css/Skill.css'
import classNames from 'classnames'

import SKILL from '../data/skill.json'

const ListItem = ({ title, level }) => {
  let className = classNames({ [`fa fa-battery-${level} fa-2x`]: true })
  return (
    <li className="list-item">
      <i className={className} aria-hidden="true"></i>
      <span className='title'>{title}</span>
    </li>
  )
}

const List = ({ data }) => {
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
