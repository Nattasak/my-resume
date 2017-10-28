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
                  <a href="https://github.com/Nattasak/my-resume">My Resume</a> - React project
                </li>
                <li className="projects-item">
                  <i className="fa fa-asterisk" aria-hidden="true"></i>
                  <a href="https://github.com/Nattasak/react-button-list">React Button List</a> - React project
                </li>
                <li className="projects-item">
                  <i className="fa fa-asterisk" aria-hidden="true"></i>
                  <a href="https://notminetykub.wordpress.com/">Not Mine</a> - Wordpress free blog
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