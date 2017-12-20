import React from 'react';
import '../css/JSPlayground.css';
import JSPLAYGROUND from '../data/jsplayground.json';

const ListItem = ({ title }) => {
  const filename = title.replace(/\s+/g, '-');
  return (
    <li>
      <i className="fa fa-code fa-2x" aria-hidden="true" />
      <a
        href={`https://rawgit.com/Nattasak/my-resume/master/public/assets/js-playground/${filename}.html`}
        target="_blank"
        rel="noopener noreferrer"
      >{title}
      </a>
    </li>
  );
};

const List = ({ data }) => {
  const listItems = data.map(item => (
    <ListItem
      key={item.id}
      title={item.title}
    />
  ));
  return <ul>{listItems}</ul>;
};

const JSPlayground = () => (
  <section className="jsplayground section">
    <div className="container">
      <h3 className="section-title">JS Playground</h3>
      <div className="flex-container">
        <div className="flex-item">
          <List data={JSPLAYGROUND} />
        </div>
      </div>
    </div>
  </section>
);

export default JSPlayground;
