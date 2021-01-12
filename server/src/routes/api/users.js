const { Router }= require('express')

const Users = require('../../models/Users')
const { getUser } = require('../../core/github')

const api = Router()

api.get('/:username', async (request, response) => {
  const { username } = request.params
  let user = null

  try {
    user = await Users.findOne({
      where: {
        login: username,
      }
    })

    if (!user) {
      user = await getUser(username)
      await Users.create(user)
    }
  } catch (error) {
    console.log(error.message)
  }

  response.json({ user })
})

module.exports = api