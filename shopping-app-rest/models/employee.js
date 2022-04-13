const mongoose  = require('mongoose')

const employeeSchema = new mongoose.Schema({
    ename:String,
    salary:Number,
    gender:String
})

module.exports = mongoose.model('employee', employeeSchema )