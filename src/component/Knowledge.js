import React from 'react';

import KNOWLEDGE from '../data/knowledge.json';

import '../css/Knowledge.css';

const ListItem = ({ title, author, url, category }) => (
  <li className="list-item">
    { category
      ? <img src={`img/icon/${category}.png`} alt={category} />
      : <i className="fa fa-search-plus fa-2x" aria-hidden="true" />
    }
    <span>
      { url
        ? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        : title
      }
      { author ? ` - ${author}` : null }
    </span>
  </li>
);

const List = ({ data }) => {
  const listItems = data.map(item => (
    <ListItem
      key={item.id}
      url={item.url}
      title={item.title}
      author={item.author}
      category={item.category}
    />
  ));
  return <ul className="list">{listItems}</ul>;
};

const Knowledge = () => (
  <section className="knowledge section">
    <div className="container">
      <h3 className="section-title">Essential knowledge</h3>
      <div className="flex-container">
        <div className="flex-item">
          <List data={KNOWLEDGE} />
        </div>
      </div>
    </div>
  </section>
);

export default Knowledge;
