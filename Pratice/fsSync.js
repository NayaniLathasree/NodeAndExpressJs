const fs = require('fs')
fs.mkdirSync('textFile')
fs.writeFileSync('textFile/text.txt','Writing to text file')
console.log("Written text file successfull")

const readData=fs.readFileSync('textFile/text.txt')
console.log('read data :' + readData)
console.log('read successfull');

fs.appendFileSync('textFile/text.txt',"Adding the content to text file")
console.log('added content to file successfull');

fs.renameSync('textFile/text.txt','textFile/file.txt')
console.log('rename Successfull');

// fs.unlinkSync('textFile/text.txt')
// fs.rmdirSync('textFile')
// console.log('deleted Successfull');