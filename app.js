
const express=require('express')
const app=express()
const fileController = require('./controller/fileupload')
const mongoose = require('mongoose')
app.set('view engine', 'ejs')
app.use('/api/auth/login', fileController)

// app.listen(4000, (err)=>{
// if (err) throw err;
// else{
// console.log("server is active")
// }
// })

// const express = require('express')
const cors = require('cors')
// const app = express()
const cookieParser = require('cookie-parser')


// const mongoose = require('mongoose')

const authController = require('./controller/auth')

const middleware = require('./utils/middleware')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/api/auth', authController)




const server = app.listen(4000, (err) => {
if (err) console.error(err)
else {
console.log(`Server started at 4000`)
mongoose.connect('mongodb://127.0.0.1:27017/authentication', {
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