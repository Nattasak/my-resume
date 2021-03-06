import React from 'react';
import classNames from 'classnames';

import SKILL from '../data/skill.json';

import '../css/Skill.css';

const ListItem = ({ title, level }) => {
  const className = classNames({ [`fa fa-battery-${level} fa-2x`]: true });
  return (
    <li>
      <i className={className} aria-hidden="true" />
      <span>{title}</span>
    </li>
  );
};

const List = ({ data }) => {
  const listItems = data.map(item => (
    <ListItem
      key={item.id}
      title={item.title}
      level={item.level}
    />
  ));
  return <ul>{listItems}</ul>;
};

const Skill = () => (
  <section className="skill section">
    <div className="container">
      <h3 className="section-title">Skills</h3>
      <div className="flex-container">
        <div className="flex-item">
          <List data={SKILL} />
        </div>
      </div>
    </div>
  </section>
);

export default Skill;
