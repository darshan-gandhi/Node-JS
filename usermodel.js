const mongoose = require('mongoose')

const uniquePluggin= require('mongoose-unique-validator')

const user= new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique :true
    },
    email : {
        type: String,
        required: true
    }, 

    mobile : {
        type : String, 
        required: true
    },
    city : {
        type : String,
        required : true
    }
}).plugin(uniquePluggin)


module.exports= mongoose.model('user',user)