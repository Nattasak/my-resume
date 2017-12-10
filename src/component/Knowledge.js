import React from 'react'
import '../css/Knowledge.css'

import KNOWLEDGE from '../data/knowledge.json';

const ListItem = (props) => (
  <li className="list-item">
    { props.category 
      ? <img src={`img/icon/${props.category}.png`} alt={props.category} />
      : <i className="fa fa-search-plus fa-2x" aria-hidden="true"></i>
    }
    <span>
      { props.url 
        ? <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
        : props.title }
      { props.author ? ` - ${props.author}` : null }
    </span>
  </li>
)

const List = (props) => {
  const data = props.data
  const listItems = data.map((item) => 
    <ListItem 
      key={item.id}
      category={item.category}
      title={item.title}
      author={item.author}
      url={item.url} />
  )
  return (
    <ul className="list">
      {listItems}
    </ul>
  )
}

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
)

export default Knowledge
