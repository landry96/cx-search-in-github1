import { Component } from 'react'

import SearchBar from './components/SearchBar'
import GithubUserDetails from './components/GithubUserDetails'

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  async fetchUser(username = '') {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${username}`)
    const { user } = await response.json()

    this.setState({ user })
  }

  render() {
    const { user } = this.state

    return (
      <div>
        <SearchBar onSubmit={(value) => this.fetchUser(value)} />

        {user && <GithubUserDetails user={user} /> }
        {!user && <p> User not found </p>}
      </div>
    )  
  }
}

export default App
