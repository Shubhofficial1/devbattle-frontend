import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDb from './config/db.js'
import courseRoutes from './routes/courseRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { errorHandler, notFound } from './middleware/errorMiddleware.js'

// Dotenv Configuration
dotenv.config()

// connect to MongoDb database
connectDb()

// Initialize App
const app = express()

app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('api is running...')
})

app.use('/api/courses', courseRoutes)
app.use('/api/users', userRoutes)

// Middlewares

app.use(notFound)
app.use(errorHandler)

// ENV
const PORT = process.env.PORT || 5000
const MODE = process.env.MODE || 'Development'

// Listener
app.listen(PORT, () => {
  console.log(`Server is running in ${MODE} at PORT ${PORT}`.yellow.bold)
})
