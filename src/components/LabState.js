import React, { Component, Fragment } from 'react'

class LabState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'coconut',
      isToggleOn: true
    }
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.handleToggle}>
          { this.state.isToggleOn ? 'ON' : 'OFF' }
        </button>

        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite La Croix flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    )
  }
}

export default LabState
