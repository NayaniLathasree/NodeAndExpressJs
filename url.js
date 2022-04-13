const http = require('http')
const url = require('url')

http.createServer((request,response)=>{
    const reqUrl = url.parse(request.url,true)
    console.log('reqUrl',reqUrl);
    console.log("query string",reqUrl.query);
    console.log("hello");
    response.write('hai ')
    response.write('welcome ')
    response.write(JSON.stringify(reqUrl.query))
    response.end('  hello world ')
})
.listen(2000, ()=>{
    console.log("listening on port 2000");
})