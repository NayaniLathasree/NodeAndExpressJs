const http = require('http')
const url = require('url')
const products = [{
    id:1,
    name:'Bag',
    description:'Used to carry items',
    price: 1000,
}]

http.createServer((req,res)=>{
    
    const reqUrl = url.parse(req.url,true)
    const path =reqUrl.pathname
    if(path === '/products' && req.method=== 'GET'){
        res.end(JSON.stringify(products))
    }else if(path === '/products' && req.method === 'POST'){
        console.log(reqUrl.query);
        products.push(reqUrl.query)
        res.end(JSON.stringify(products))
    }else if(path === '/products' && req.method === 'PUT'){
        const id = reqUrl.query.id;
        const index = products.findIndex((products)=>{ 
            return parseInt(products.id) === parseInt(id)
        });
        console.log(index);
        products.splice(index,1,reqUrl.query)
        res.end(JSON.stringify(products))
    }else if(path === '/products' && req.method === 'DELETE'){
        const id = reqUrl.query.id;
        const index = products.findIndex((products)=>{
            return parseInt(products.id) === parseInt(id)
        });
        console.log(index);
        products.splice(index,1)
        res.end(JSON.stringify(products))
    }
}).listen(2000,()=>{
    console.log('Server is listening on 2000')
})