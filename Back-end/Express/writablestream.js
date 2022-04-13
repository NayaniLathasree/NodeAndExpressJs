const fs = require('fs')

const data = 'Writable streams'
const writeStream = fs.createWriteStream('writestream.txt')
writeStream.write(data , 'UTF8')

writeStream.end()

// ..to handle finsih and error

writeStream.on('finish' ,()=>{
    console.log('write completed');1
})

writeStream.on('error',(err)=>{
    console.log(err.stack);
})