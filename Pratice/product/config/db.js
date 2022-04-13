const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/proApp';

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology : true
},(err)=>{
    if(err){
        console.log('Db Connection Failed');
    }else{
        console.log('Db connection Successfull');
    }
})