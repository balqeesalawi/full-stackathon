const express = require('express')
const logger = require('morgan')
const gameRouter = require('./routes/gameRouter')

const PORT = process.env.PORT || 3000

const db = require('./db')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/games', gameRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
