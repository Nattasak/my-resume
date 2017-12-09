import React from 'react'
import '../Styles/About.css'

const intro = `
  Hi, my name is Nat. I'm 27 years old living in Bangkok, Thailand. 
  I am interested in JavaScript${'  /  '}React${'  /  '}Architecture and Algorithm.
`

const ListItem = (props) => (
  <li className="list-item">
    <span className="title">{props.position}{'  -  '}</span>
    <span>{props.company} ({props.years})</span>
  </li>
)

const About = () => (
  <section className="about section">
    <div className="container">
      <div className="flex-container">
        <div className="flex-item">
          <div className="bio">{intro}</div>
          <ul className="list">
            <ListItem
              position='Front End'
              company='BizIdea Digital Marketing'
              years='1 yr' />
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default About
