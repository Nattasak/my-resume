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
              <div className="bio">
                Hi' my name is Nat, I'm 27 years old living in Bangkok, Thailand<br />
                I love to learn new things. I wanna make the world better : )
              </div>
              <ul className="about-items">
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">Elementary school</span><span> - Assumption College Primary Section</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">Junior High school</span><span> - Potisarnpittayakorn School (Mini English Program)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">Senior High school</span><span> - Matthayom Wat Nairong School (Major Science-Math)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">Bachelor degree</span><span> - Rajamangala University of Technology Rattanakosin (Mechatronics Engineering) (1 yr)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">IT support</span><span> - Thai Summit Law (1 yr)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">Bachelor degree</span><span> - Nakhon Pathom Rajabhat University (Visual Communication Design) (3 yrs)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">Front End</span><span> - BizIdea Digital Marketing (1 yr)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">Stock Trader / Investor</span><span> - at Home (3 yrs)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <span className="title">React Developer</span><span> - .... </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
