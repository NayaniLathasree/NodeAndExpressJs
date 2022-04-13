const http = require('http')
const fs = require('fs')
http.createServer((res,req)=>{
    if(req.url == '/' && req.method == 'GET'){
        fs.readFile('./read.txt',(err,data)=>{
        if(err){
            res.writeHead(404,{
                'content-type':'text/plain'
            })
            res.write('File not found')
            res.end()
        }else{
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        }
    })
}else{
   res.writeHead(404,{'content-type':'plain/text'}) 
    res.end('Invalid path or invalid HTTP method')
}

}).listen(2000,()=>{
    console.log("server started");
})