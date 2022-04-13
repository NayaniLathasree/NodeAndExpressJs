const fs = require('fs')
//write
fs.writeFileSync("output.txt", 'textfile');

console.log('file written');
//read
const text = fs.readFileSync("output.txt")
console.log(text.toString());

//rename
fs.renameSync('output.txt', 'newData.txt');
console.log('File renamed successfully');

//append 
fs.appendFileSync('newData.txt', "add me at the end of the file with sync in nodejs");

console.log("Append Success");
//delete
/* const filedelete = 'data.txt';
fs.unlinkSync( filedelete);
console.log('File Deleted ..!'); */