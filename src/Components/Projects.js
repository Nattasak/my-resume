import React, { Component } from 'react'
import '../Styles/Projects.css'

class Projects extends Component {
  render() {
    return (
      <section className="projects-section section">
        <div className="container">
          <h3 className="section-title">Projects</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="projects-items">
                {PROJECTS.map(project => 
                  <li className="projects-item" key={project.id}>
                    <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
                    <a href={project.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {project.title}
                    </a>
                    <p>
                      {project.description}
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
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

export default Projects
