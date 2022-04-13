const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    fname:{
        required: true,
        type:String,
        minlength:3,
        maxlength:100
    },
    lname:{
        required: true,
        type:String,
        minlength:1,
        maxlength:100
    },
    email:{
        required: true,
        type:String,
        minlength:6,
        maxlength:100
    },
    password:{
        required: true,
        type:String,
        minlength:8,
        maxlength:100                                                                                                                                                                                                                                                                                                                               
    },
    role:{
        required: true,
        type:String,
        minlength:3,
        maxlength:20,
    },
    date :{
        type:Date,
        default:Date.now(),
    }
})
module.exports=mongoose.model('users',usersSchema)