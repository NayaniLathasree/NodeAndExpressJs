const http =  require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type' :' text/html'})
    res.end('Hello Wrold')
}).listen(2000,()=>{
    console.log('Server is listening on 2000');
})