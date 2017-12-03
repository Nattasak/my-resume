import React from 'react'
import '../Styles/Skill.css'

const ListItem = (props) => {
  return (
    <li className="skills-item">
      <i className="fa fa-search-plus fa-2x" aria-hidden="true"></i>
      <span>
        { props.url 
          ? <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
          : props.title }
        { props.author ? ` - ${props.author}` : null }
      </span>
    </li>
  )
}

const KnowledgeList = (props) => {
  const data = props.data
  const listItems = data.map((item) => 
    <ListItem 
      key={item.id}
      url={item.url} 
      title={item.title}
      author={item.author} />
  )
  return (
    <ul className="skills-items">
      {listItems}
    </ul>
  )
}

const Knowledge = () => {
  return (
    <section className="skills-section section">
      <div className="container">
        <h3 className="section-title">Essential knowledge</h3>
        <div className="flex-container">
          <div className="flex-item">
            <KnowledgeList data={KNOWLEDGES} />
          </div>
        </div>
      </div>
    </section>
  )
}

const KNOWLEDGES = [
  {
    id: 1,
    title: 'HTTP',
    author: '',
    url: ''
  },
  {
    id: 2,
    title: 'DOM handling',
    author: '',
    url: ''
  },
  {
    id: 3,
    title: 'React: Presentational and Container Components',
    author: 'Dan Abramov',
    url: 'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0'
  },
  {
    id: 4,
    title: 'React: Clean Code vs. Dirty Code',
    author: 'Donavon West',
    url: 'http://americanexpress.io/clean-code-dirty-code'
  },
  {
    id: 5,
    title: 'JS: What the heck is the event loop anyway?',
    author: 'Philip Roberts',
    url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ'
  },
  {
    id: 6,
    title: 'JS: Airbnb JavaScript Style Guide',
    author: 'Airbnb',
    url: 'https://github.com/airbnb/javascript'
  },
  {
    id: 7,
    title: 'JS: Functional Programming Basics In ES6',
    author: 'Jeremy Fairbank',
    url: 'https://www.youtube.com/watch?v=FYXpOjwYzcs'
  },
  {
    id: 8,
    title: 'What is an API?',
    author: 'MuleSoft',
    url: 'https://www.youtube.com/watch?v=s7wmiS2mSXY'
  }
]

export default Knowledge
