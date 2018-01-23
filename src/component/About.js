import React from 'react';

import '../css/About.css';

const ListItem = props => (
  <li className="list-item">
    <span className="title">{props.position}{'  -  '}</span>
    <span>{props.company} ({props.years})</span>
  </li>
);

const About = ({ name }) => {
  const intro = `
    Hi ${name ? `${name}${' !  '}Nice to meet you : )` : '!'}
    ${'  '}My name is Nat. I’m 27 years old living in Bangkok, Thailand.
    I am interested in JavaScript, Architecture and Algorithm.
  `;
  return (
    <section className="about section">
      <div className="container">
        <div className="flex-container">
          <div className="flex-item">
            <div className="bio">{intro}</div>
            <ul className="list">
              <ListItem
                position="Front End"
                company="Ultimate Digital Service"
                years="1 yr"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
