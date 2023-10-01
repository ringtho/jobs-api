require('dotenv').config()
require('express-async-errors')

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

// swagger Documentation
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = YAML.load('./swagger.yaml')

const express = require('express')
const app = express()

// connectDB
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')
// routers
const jobsRouter = require('./routes/jobs')
const authRouter = require('./routes/auth')

// error handlers
const notFoundMiddleware = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

// Extra security middlewares
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
}))
app.use(helmet())
app.use(cors())
app.use(xss())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>jobs API</h1><a href="/api-docs">Documentation</a>')
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/api/v1/jobs', authenticateUser, jobsRouter)
app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandler)

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
