const fs = require('fs')
// fs.mkdirSync('demo')
fs.writeFileSync('demo/write.json','name')
console.log('wriiten file');
const data = fs.readFileSync('demo/write.txt')
console.log(data.toString());
fs.appendFileSync('demo/write.txt','Append text')
console.log('Append file ');
fs.renameSync('demo/write.txt','demo/rename.txt')
console.log('Renaming the file');           

fs.unlinkSync('demo/rename.txt')
fs.rmdirSync('demo')

