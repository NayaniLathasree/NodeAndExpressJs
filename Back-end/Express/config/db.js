const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27010/product-App'

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedToplogy : true

},(err)=>{
    if(!err){
        console.log(`Db Connection Failed`);
    }
    else{
        console.log(`DB Connection Success`)
    }
})