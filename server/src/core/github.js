const fetch = require('node-fetch')

async function getUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`)

  return response.json()
}

module.exports = {
  getUser,
}