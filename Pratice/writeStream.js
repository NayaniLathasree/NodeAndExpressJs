const fs = require('fs')
let readData =''
const WriteStream = fs.createWriteStream('writeStream.txt')
const readStream = fs.createReadStream('writeStream.txt')
WriteStream.write("creating writable Stream ")
WriteStream.end()

readStream.read('writeStream.txt')

WriteStream.on('finish',()=>{
    console.log('Writable Stream Successfull');
})

WriteStream.on('error',(err)=>{
    console.log('error' ,err);
})

readStream.on('data',(chunck)=>{
    console.log("Buffer");
    console.log(chunck);
    readData +=chunck
    console.log('\n');
})


readStream.on('finish',()=>{
    console.log('read Stream Successfull');
})

readStream.on('end',(err)=>{
    console.log('error' ,err);
})