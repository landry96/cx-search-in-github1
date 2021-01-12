const { Sequelize } = require('sequelize')

function connect() {
  const {
    DATABASE_HOST: host,
    DATABASE_NAME: database,
    DATABASE_USERNAME: username,
    DATABASE_PASSWORD: password,
  } = process.env
  
  return new Sequelize({
    dialect: 'postgres',
    host,
    database,
    username,
    password,
  })
}

module.exports = {
  connect,
}
