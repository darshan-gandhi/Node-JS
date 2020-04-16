const express=require('express')
const app=express()
const fileController = require('./controller/fileupload')

app.use('/file', fileController)

app.listen(5000, (err)=>{
    if (err) throw err;
    else{
        console.log("server is active")
    }
})