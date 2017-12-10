import React from 'react'
import '../css/Project.css'

import PROJECT from '../data/project.json'

/*
const List = (props) => {
  const data = props.data
  const listItems = data.map((item) =>
    <li className="list-item" key={item.id}>
      <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
      <a href={item.url}
        target="_blank"
        rel="noopener noreferrer">
        {item.title}</a>
      <p>{item.description}</p>
    </li>
  )
  return (
    <ul className="list">
      {listItems}
    </ul>
  )
}
*/

const ListItem = ({title, url, description}) => (
  <li className="list-item">
    <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
    <a href={url}
      target="_blank"
      rel="noopener noreferrer">
      {title}</a>
    <p>{description}</p>
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
