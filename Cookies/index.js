const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

const port =5000;
//middle ware
app.use(cookieParser())

app.get('/read-cookie',(req,res)=>{
    console.log(req.cookies);
    if(req.cookies){
        res.send("Cookie exist"+ JSON.stringify(req.cookies))
        
}else{
        res.send("Cookie doesn't exits")
    }

})

//creating a non-persistent cookie
app.get('/create-cookie',(req,res)=>{
    res.cookie('myName','Latha')
    res.send('cookie is created')
}) 
//creating a persistent cookie
app.get('/create-pcookie',(req,res)=>{
    res.cookie('email','lathasreenayani1978@gmail.com',{
        maxAge: 86400000,
    })
    res.send('Persistent cookie created')
})
//clear or delete the cokie
app.get('/clear-cookie',(req,res)=>{
    res.clearCookie('myName')
    res.send('myName is cleared')
})


app.get('/create-objcookie',(req,res)=>{
    res.cookie('data',{ username: 'Latha',
    email :'lathasreenayani1978@gmail.com'
},{
    maxAge:86400000
})
    res.send('Persistent cookie created')
})
//clear or delete the cokie
app.get('/clear-allcookie',(req,res)=>{
   for(let cookie in req.cookies){
       res.clearCookie(cookie)
   }
   res.send('cookie are cleared')
})

app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})