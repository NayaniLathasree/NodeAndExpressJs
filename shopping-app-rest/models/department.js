const mongoose = require('mongoose')
const departmentSchema = new mongoose.Schema({
    dname:String,
    dLoc:String,
    empid:{    //here we are refering to employee schema and this empid and in employee scheme id is same,
        //i.e, empid === _id(employee schema _id which generate )
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee'
    }
})

module.exports = mongoose.model('department',departmentSchema )