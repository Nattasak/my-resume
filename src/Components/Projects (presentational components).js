import React, { Component } from 'react'
import '../Styles/Projects.css'

const Project = ({ title, ghpage, children }) => (
  <li className="projects-item">
    <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
    <a href={`https://nattasak.github.io/${ghpage}`} target="_blank" rel="noopener noreferrer">{title}</a>
    <p>{children}</p>
  </li>
)

class Projects extends Component {
  render() {
    return (
      <section className="projects-section section">
        <div className="container">
          <h3 className="section-title">Projects</h3>
          <div className="flex-container">
            <div className="flex-item">
              <ul className="projects-items">
              <Project title='Anime Splash' ghpage='anime-splash'>
                Angular 5 + Bootstrap + HttpClient
              </Project>
              <Project title='Bulma Axios' ghpage='bulma-axios'>
                React 16 + React router + Bulma + Axios
              </Project>
              <Project title='Todo Winter' ghpage='job-quest-winter-2017'>
                This project is a part of TakeMeTour's Job Quest
              </Project>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects
