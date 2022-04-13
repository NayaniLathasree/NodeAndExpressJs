const os  = require('os')
//Architecture os 
console.log('Architecture -',os.arch());
//platform
console.log('Platform ',os.platform());
//free memory in bts
console.log('Free memory ',os.freemem());
//tatal memory in bytes
console.log('Total Memory ',os.totalmem());
//to get cpu info 
console.log('cpu info -',os.cpus());
const meminbytes = os.freemem()
const meminKB = meminbytes/1024;

const memInMb = meminKB/1024;

const memIngb = memInMb/1024

console.log(' meminKB', Math.floor(meminKB));

console.log('memInMb',Math.floor(memInMb));

console.log('memIngb',Math.floor(memIngb));