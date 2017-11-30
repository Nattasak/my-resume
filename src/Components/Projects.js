import React from 'react'
import '../Styles/Projects.css'

export default class Projects extends React.Component {
  render() {
    return (
      <section className="projects-section section">
        <div className="container">
          <h3 className="section-title">Projects</h3>

          <div className="flex-container">
            <div className="flex-item">
              <ul className="projects-items">
                <li className="projects-item">
                  <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
                  <a href="https://nattasak.github.io/anime-splash/" target="_blank" rel="noopener noreferrer">Anime Splash</a><br />
                  <p>Angular 5 + Bootstrap + HttpClient</p>
                </li>
                <li className="projects-item">
                  <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
                  <a href="https://nattasak.github.io/bulma-axios/" target="_blank" rel="noopener noreferrer">Bulma Axios</a><br />
                  <p>React 16 + React router + Bulma + Axios</p>
                </li>
                <li className="projects-item">
                  <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
                  <a href="https://nattasak.github.io/job-quest-winter-2017/" target="_blank" rel="noopener noreferrer">Todo Winter</a><br />
                  <p>This project is a part of TakeMeTour's Job Quest (Winter 2017 Edition)</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    )
  }
}
