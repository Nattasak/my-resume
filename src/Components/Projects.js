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
                  <i className="fa fa-asterisk" aria-hidden="true"></i>
                  <a href="https://nattasak.github.io/my-resume/">My Resume</a> - react project
                </li>
                <li className="projects-item">
                  <i className="fa fa-asterisk" aria-hidden="true"></i>
                  <a href="https://github.com/Nattasak/react-button-list">React Button List</a> - react project
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
