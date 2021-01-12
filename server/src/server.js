require('dotenv').config()

const express = require('express')
const cors = require('cors')

const api = require('./routes/api')

function launch(port = 8080) {
  const application = express()

  application.use(cors())

  application.use('/api', api)

  application.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)  
  })
}

const { PORT } = process.env
launch(PORT)