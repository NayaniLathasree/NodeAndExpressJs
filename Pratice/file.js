const fs = require('fs')

if(!fs.existsSync('sfile')){
    fs.mkdirSync('sfile');
}

fs.writeFileSync('sfile/file.txt','Hello World')
if(fs.existsSync('sfile/file.txt')){
    const read=fs.readFileSync('sfile/file.txt')
    console.log(read.toString());
}
