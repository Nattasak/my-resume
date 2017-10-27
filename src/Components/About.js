import React, { Component } from 'react';
import '../Styles/About.css';

class About extends Component {
  render() {
    return (
      <section className="about-section section">
        <div className="container">
          <h3 className="section-title">About</h3>
          <div className="flex-container">
            <div className="flex-item">
              My bio
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
