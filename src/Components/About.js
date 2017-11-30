import React from 'react'
import '../Styles/About.css'

export default class About extends React.Component {
  render() {
    return (
      <section className="about-section section">
        <div className="container">
          <div className="flex-container">
            <div className="flex-item">
              <div className="bio">
                Hi' my name is Nat, I'm 27 years old living in Bangkok, Thailand. 
                I love to learn new things. I wanna make the world better.
              </div>
              <ul className="about-items">
                <li className="about-item">
                  <span className="title">Front End</span><span>  -  BizIdea Digital Marketing (1 yr)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
