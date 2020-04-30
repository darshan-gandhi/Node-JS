const express = require('express')

const app = express()

const mongoose = require('mongoose')

const userController = require('./controller/user')

const middleware = require('./utils/middleware')

app.use(express.urlencoded({ extended: true }))
app.use('/api/users', userController)

app.use(middleware.unknownEndpoint)
app.set('view engine','ejs')

const server = app.listen(5000, (err) => {
    if (err) console.error(err)
    else {
      console.log(`Server started at 5000`)
      mongoose.connect('mongodb://127.0.0.1:27017/darshan', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }, (error) => {
        if (error) console.error(error)
        else console.log('Connected to mongodb uri')
      })
    }
  })