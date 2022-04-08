const express = require('express')
const courses = require('./data/courses')
const app = express()

// Routes

app.get('/', (req, res) => {
  res.send('api is running...')
})

app.get('/courses', (req, res) => {
  res.json(courses)
})

app.get('/courses/:id', (req, res) => {
  const course = courses.find((c) => c._id === req.params.id)
  res.json(course)
})

// PORT
const PORT = process.env.PORT || 5000
const MODE = process.env.MODE || 'Development'

// Listener
app.listen(PORT, () => {
  console.log(`Server is running in ${MODE} at PORT ${PORT}`)
})
