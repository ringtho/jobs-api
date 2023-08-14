require('dotenv').config()
const express = require('express')

const app = express()
const router = require('./routes/jobs')

const notFoundMiddleware = require('./middleware/not-found')


app.use(express.json())
app.use('/api/v1/jobs', router)
app.use('*', notFoundMiddleware)



const PORT = process.env.PORT || 5050
app.listen(PORT, console.log(`Server listening on port ${PORT}`))