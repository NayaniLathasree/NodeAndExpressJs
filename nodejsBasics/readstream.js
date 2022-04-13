const fs = require('fs')
console.log('program strated');
const readStream = fs.createReadStream('./read.txt',{
    highWaterMark:128*1024,
})
let readData ='';
// console.log('readStream - ',readStream);
readStream.on('open',()=>{
    console.log('Stream opened..');
})
readStream.on('data',(chunck)=>{
    console.log("Buffer");
    console.log(chunck);
    readData +=chunck
    console.log('\n');
})
readStream.on('end',()=>{
    // console.log(readData);
    console.log('stream closed..');
})
//to handle the error
readStream.on('error',(err)=>{
    console.log('error');
})
/* setTimeout(()=>{
    const data = readStream.read(10)
    console.log('10 bytes of data',data);

},1000) */
console.log('program ended');
