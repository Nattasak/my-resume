import React, { Component } from 'react'
import '../Styles/About.css'

class About extends Component {
  render() {
    return (
      <section className="about-section section">
        <div className="container">
          <div className="flex-container">
            <div className="flex-item">
              <div className="bio">
                Hi, my name is Nat. I'm 27 years old living in Bangkok, Thailand. 
                I am interested in JavaScript{'  /  '}React{'  /  '}Architecture and Algorithm.
              </div>
              <ul className="about-items">
                <li className="about-item">
                  <span className="title">Front End</span><span>{'  -  '}BizIdea Digital Marketing (1 yr)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
