const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productionschema = new Schema({
    pName : String,
    pDesc : String,
    pPrice : Number,
    date :   {
        type:Date,
        default:Date.now(),
    }
})
module.exports = mongoose.model('products',productionschema);
