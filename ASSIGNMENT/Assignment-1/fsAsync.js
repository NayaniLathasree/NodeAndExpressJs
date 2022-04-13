// fs.writeFile(fileName [,options], callback) -- syntax to write 
const fs =  require('fs');
fs.writeFile('write.txt',"this is write txt in the file", (err) => {
	if (err){
        console.log("Error",err);
    }
	console.log('Written successful');
});


fs.readFile('write.txt', (err, data) => {
	if (err){
        console.log("Error",err);
    }else{

        console.log("Content of the file :  " + data);
    }

});
fs.appendFile('write.txt', "this is added in append operator" , (err) => {
	if(err){
        console.log('Error',err);
    }else{

        console.log('Append success');
    }
		
});

fs.rename('write.txt', 'newAsync.txt', (err) => {
	if(err){
        console.log('Error',err);
    }else{

        console.log('Renamed Successfully');
    }
});

fs.unlink("delete.txt", (err) => {
	console.log('File deleted ...');
});