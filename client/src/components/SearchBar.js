import { Component } from 'react'

export default class SearchBar extends Component {
  constructor() {
    super()

    this.state = { value: '' }
  }

  submit() {
    this.props.onSubmit(this.state.value)
  }

  render() {
    const { value } = this.state
    
    return (
      <div>
        <input
            value={value}
            onChange={({ target }) => this.setState({ value: target.value })}
        />

        <button onClick={() => this.submit()}> submit </button>
      </div>
    )  
  }
}