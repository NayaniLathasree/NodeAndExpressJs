const fs = require('fs')
if(!fs.existsSync('AsynctxtFile')){
    fs.mkdirSync('AsynctxtFile');
}
// fs.mkdir('AsynctxtFile')
fs.writeFile('Async.txt','Writing content to file Async Way ',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Written Successfull');
    }
})
fs.readFile('Async.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('read Successfull ' +data);
    }
})

fs.appendFile('Async.txt','adding  content to file Async Way ',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(' Added content  to file Successfull');
    }
})

fs.unlinkFile('Async.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        fs.rmdir('AsynctxtFile')
        console.log('deleted  Successfull');
    }
})