import React, { Component } from 'react'
import '../Styles/About.css'

const profile = `
  Hi, my name is Nat. I'm 27 years old living in Bangkok, Thailand. 
  I am interested in JavaScript${'  /  '}React${'  /  '}Architecture and Algorithm.
`

const Experience = ({ position, company, years }) => (
  <li className="about-item">
    <span className="title">{position}{'  -  '}</span>
    <span>{company} ({years})</span>
  </li>
)

class About extends Component {
  render() {
    return (
      <section className="about-section section">
        <div className="container">
          <div className="flex-container">
            <div className="flex-item">
              <div className="bio">
                {profile}
              </div>
              <ul className="about-items">
                <Experience position='Front End' company='BizIdea Digital Marketing' years='1 yr' />
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
