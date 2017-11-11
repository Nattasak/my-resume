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
                Hi' my name is Nat, I'm 27 years old living in Bangkok, Thailand.<br />
                I love to learn new things. I wanna make the world better.
              </div>
              <ul className="about-items">
                {/*<li className="about-item">
                  <i className="fa fa-eercast fa-2x" aria-hidden="true"></i>
                  <span className="title">Senior High school</span><span>  -  Matthayom Wat Nairong School (Major Science-Math)</span>
                </li>*/}
                <li className="about-item">
                  <i className="fa fa-eercast fa-2x" aria-hidden="true"></i>
                  <span className="title">Bachelor degree</span><span>  -  Rajamangala University of Technology (Mechatronics) (1 yr)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-eercast fa-2x" aria-hidden="true"></i>
                  <span className="title">IT support</span><span>  -  Thai Summit Law (1 yr)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-eercast fa-2x" aria-hidden="true"></i>
                  <span className="title">Bachelor degree</span><span>  -  Nakhon Pathom Rajabhat University (Design) (3 yrs)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-eercast fa-2x" aria-hidden="true"></i>
                  <span className="title">Front End</span><span>  -  BizIdea Digital Marketing (1 yr)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-eercast fa-2x" aria-hidden="true"></i>
                  <span className="title">Stock Trader / Investor</span><span>  -  Home Sweet Home (3 yrs)</span>
                </li>
                <li className="about-item">
                  <i className="fa fa-eercast fa-2x" aria-hidden="true"></i>
                  <span className="title">JavaScript Engineer</span><span>  -  Waiting... (Start learning 18 oct 2017)</span>
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
