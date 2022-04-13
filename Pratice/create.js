//creating server and core Module(os,path,http)
var http = require('http');

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(2000,()=>{
    console.log('Server is listening on port 2000');
});