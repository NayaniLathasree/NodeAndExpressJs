const fs = require('fs')
const readStream = fs.createReadStream('writable.txt',{
 highWaterMark : 128*1024,
})
let readData = '';
readStream.on('open',()=>{
    console.log(`Stream opened to read file`);
})
readStream.on('data',(chunk)=>{
    console.log('Buffer');
    console.log(chunk);
    readData +=chunk
     console.log('/n');
})

readStream.on('end',()=>{
    console.log('Stream closed');
})

readStream.on('error',(err)=>{
    console.log(err.stack);
})
