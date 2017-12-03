import React from 'react'
import '../Styles/Projects.css'

const ListItem = (props) => {
  return (
    <li className="projects-item">
      <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
      <a href={props.url}
        target="_blank"
        rel="noopener noreferrer">
        {props.title}
      </a>
      <p>
        {props.description}
      </p>
    </li>
  )
}

const ProjectList = (props) => {
  const data = props.data
  const listItems = data.map((item) => 
    <ListItem 
      key={item.id}
      url={item.url} 
      title={item.title}
      description={item.description} />
  )
  return (
    <ul className="projects-items">
      {listItems}
    </ul>
  )
}

const Project = () => {
  return (
    <section className="projects-section section">
      <div className="container">
        <h3 className="section-title">Projects</h3>
        <div className="flex-container">
          <div className="flex-item">
            <ProjectList data={PROJECTS} />
          </div>
        </div>
      </div>
    </section>
  )
}

const PROJECTS = [
  {
    id: 1,
    title: 'Anime Splash',
    description: 'Angular 5 + Bootstrap + HttpClient',
    url: 'https://nattasak.github.io/anime-splash'
  },
  {
    id: 2,
    title: 'Bulma Axios',
    description: 'React 16 + React router + Bulma + Axios',
    url: 'https://nattasak.github.io/bulma-axios'
  },
  {
    id: 3,
    title: 'Todo Winter',
    description: 'This project is a part of TakeMeTour\'s Job Quest',
    url: 'https://nattasak.github.io/job-quest-winter-2017'
  }
]

export default Project
