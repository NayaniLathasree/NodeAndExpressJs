const mongoose = require('mongoose')

const queriesSchema = new mongoose.Schema({
    ques:{
        type:String,
        required:true,
        minlength:1,
        maxlength:100
    },
    ans:{
         type:String,
        minlength:1,
        maxlength:100
    }
})
const diffSchema= new mongoose.Schema({
    difficultLevel:{
        type:String,
        required:true,
        minlength:1,
        maxlength:10
    }
})
const answerSchema = new mongoose.Schema({
    answer:{
        type:String,
        minlength:3,
        maxlength:10
    }
})

const querySchema = new mongoose.Schema({
    clientName:{
        required: true,
        type:String,
        minlength:3,
        maxlength:100
    },
    candidateName:{
        required: true,
        type:String,
        minlength:3,
        maxlength:100
    },
    technology:{
        type:String,
        required: true,
        minlength:3,
        maxlength:100
    },
    department:{
        required: true,
        type:String,
        minlength:1,
        maxlength:100
    },
    question:{
        required: true,
        type:[queriesSchema],
        minlength:3,
        maxlength:100
    },
    answer:{
        type:[answerSchema],
        minlength:6,
        maxlength:100
    },
    difficultlevel:{
        required: true,
        type:[diffSchema],
        minlength:3,
        maxlength:100                                                                                                                                                                                                                                                                                                                               
    },
    date :{
        type:Date,
        default:Date.now(),
    }
})
module.exports=mongoose.model('query',querySchema)