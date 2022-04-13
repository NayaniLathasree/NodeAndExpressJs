const fs = require("fs");

const data = 'writing data to file';

// Create a writable stream

const writerStream = fs.createWriteStream('output.txt')
// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');


// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish',()=> {
   console.log("Write completed.");
});

writerStream.on('error', (err)=> {
   console.log(err.stack);
});                                 

console.log("Program Ended");