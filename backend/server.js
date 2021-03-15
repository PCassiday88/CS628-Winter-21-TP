import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import questions from './data/questions.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`
      .yellow.bold
  )
)
