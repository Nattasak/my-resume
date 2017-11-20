import React, { Component } from 'react';
import '../Styles/About.css';

export default class About extends Component {
  render() {
    return (
      <section className="about-section section">
        <div className="container">
          <h3 className="section-title">About</h3>
          <div className="flex-container">
            <div className="flex-item">
              <div className="bio">
                Hi' my name is Nat, I'm 27 years old living in Bangkok, Thailand.<br />
                I love to learn new things. I wanna make the world better.
              </div>
              <ul className="about-items">
                <li className="about-item">
                  <i className="fa fa-eercast fa-2x" aria-hidden="true"></i>
                  <span className="title">Front End</span><span>  -  BizIdea Digital Marketing (1 yr)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
