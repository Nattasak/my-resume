import React from 'react'
import '../Styles/Project.css'

import PROJECT from '../data/project.json'

const ListItem = (props) => (
  <li className="list-item">
    <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
    <a href={props.url}
      target="_blank"
      rel="noopener noreferrer">
      {props.title}</a>
    <p>{props.description}</p>
  </li>
)

const List = (props) => {
  const data = props.data
  const listItems = data.map((item) => 
    <ListItem 
      key={item.id}
      url={item.url} 
      title={item.title}
      description={item.description} />
  )
  return (
    <ul className="list">
      {listItems}
    </ul>
  )
}

const Project = () => (
  <section className="project section">
    <div className="container">
      <h3 className="section-title">Projects</h3>
      <div className="flex-container">
        <div className="flex-item">
          <List data={PROJECT} />
        </div>
      </div>
    </div>
  </section>
)

export default Project
