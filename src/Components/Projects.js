import React, { Component } from 'react';
import '../Styles/Projects.css';

class Projects extends Component {
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
                  <a href="https://nattasak.github.io/bulma-axios/" target="_blank" rel="noopener noreferrer">Bulma Axios</a><br />
                  <p>React (JavaScript Library) + React Router + Bulma (CSS Framework) + Axios (Promise)</p>
                </li>
                <li className="projects-item">
                  <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
                  <a href="https://nattasak.github.io/test-react-move/" target="_blank" rel="noopener noreferrer">KEEP CALM And Shine ON !</a><br />
                  <p>Funny project uses React Move (Beautiful, data-driven animations for React)</p>
                </li>
                <li className="projects-item">
                  <i className="fa fa-grav fa-2x" aria-hidden="true"></i>
                  <a href="https://nattasak.github.io/todo-winter/" target="_blank" rel="noopener noreferrer">Todo Winter</a><br />
                  <p>This project is a part of TakeMeTour's Job Quest (Winter 2017 Edition)</p>
                </li>
              </ul>
            </div>
            <div className="flex-item"></div>
          </div>

        </div>
      </section>
    );
  }
}

export default Projects;
