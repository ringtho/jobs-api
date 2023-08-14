require('dotenv').config()
require('express-async-errors')
const express = require('express')

const app = express()

//connectDB
const connectDB = require('./db/connect')
//routers
const jobsRouter = require('./routes/jobs')
const authRouter = require('./routes/auth')

//error handlers
const notFoundMiddleware = require('./middleware/not-found')


app.use(express.json())

app.use('/api/v1/jobs', jobsRouter)
app.use('/api/v1/auth', authRouter)
app.use('*', notFoundMiddleware)

const PORT = process.env.PORT || 5050
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server listening on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()
