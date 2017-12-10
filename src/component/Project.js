import React from 'react'
import '../css/Project.css'

import PROJECT from '../data/project.json'

const ListItem = ({ title, url, desc }) => (
  <li className="list-item">
    <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
    <a href={url}
      target="_blank"
      rel="noopener noreferrer">
      {title}</a>
    <p>{desc}</p>
  </li>
)

const List = ({ data }) => {
  const listItems = data.map((item) =>
    <ListItem
      key={item.id}
      url={item.url}
      title={item.title}
      desc={item.description} />
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
