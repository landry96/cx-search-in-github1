require('dotenv').config()

const {
    DATABASE_HOST: host,
    DATABASE_NAME: database,
    DATABASE_USERNAME: username,
    DATABASE_PASSWORD: password,
} = process.env

module.exports = {
    "development": {
        username,
        password,
        database,
        host,
        "dialect": "postgres"
    },
    "test": {
        username,
        password,
        "database": 'searchGithub_test',
        host,
        "dialect": "postgres"
    },
    "production": {
        username,
        password,
        "database": 'searchGithub_production',
        host,
        "dialect": "postgres"
    }
}