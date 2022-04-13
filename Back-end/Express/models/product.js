const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    pName : String,
    pDesc : String,
    pPrice : Number,
    date :{
        type :Date,
        default :Date.now(),
    }
})


module.exports = mongoose.model('products',ProductSchema) 