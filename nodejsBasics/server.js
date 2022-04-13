const http = require('http')

const servers = http.createServer((req,res)=>{
    res.end('welcome ro node js')
})
servers.listen(2000,()=>{
    console.log('Server is listening on port 2000');
})





