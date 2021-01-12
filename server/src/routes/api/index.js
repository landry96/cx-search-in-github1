const { Router } = require('express')
/** API Routers */
const users = require('./users')

const api = Router()

api.use('/users', users)

module.exports = api