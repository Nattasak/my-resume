import React from 'react';
import '../css/JSPlayground.css';

const ListItem = (props) => {
  const filename = props.title.replace(/\s+/g, '-');
  return (
    <li>
      <i className="fa fa-code fa-2x" aria-hidden="true" />
      <a
        href={`https://rawgit.com/Nattasak/my-resume/master/public/assets/js-playground/${filename}.html`}
        target="_blank"
        rel="noopener noreferrer"
      >{props.title}
      </a>
    </li>
  );
};

const JSPlayground = () => (
  <section className="jsplayground section">
    <div className="container">
      <h3 className="section-title">JS Playground</h3>
      <div className="flex-container">
        <div className="flex-item">
          <ul>
            <ListItem title="Random Quotes" />
            <ListItem title="Pyramid Builder" />
            <ListItem title="Grade Calculator" />
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default JSPlayground;
