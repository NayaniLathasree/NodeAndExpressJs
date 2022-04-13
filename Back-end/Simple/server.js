const server = require('http')
const fs = require('fs')
fs.writeFile('details.txt',"Writing text in file ",(err)=>{
    if(!err){
        console.log('Successfully Written text into details.txt file ');
    }else{
        console.log(`Failed to write text into details.txt file`);
    }
})
fs.readFile('details.txt',(err,data)=>{
    if(!err){
        console.log('Reading txt file ' + data);
    }else{
        console.log('Failed to read file' , err);
    }
})

fs.appendFile('details.txt', "this is added in append operator" , (err) => {
	if(!err){
        console.log('Append successfully');
    }else{
        console.log('Error',err);

    }
		
});

fs.rename('details.txt','renaming.txt',(err)=>{
    if(!err){
        console.log('rename successfully');
    }else{
        console.log('Error',err);

    }

})
fs.unlink('renaming.txt',(err)=>{
    console.log('file deleted Successfully');
})

server.createServer((req,res)=>{
    res.writeHead(200 ,{'Content-type' : 'text/plain'})
    res.end('Hello World!')
}).listen(3000,()=>{
    console.log(`Server is listening on 3000`);
})