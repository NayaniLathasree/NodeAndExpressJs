const express = require('express')
const app = express()
const port = 2000
const cookieParser = require('cookie-parser')

app.use(cookieParser())


app.get('/create-cookie',(req,res)=>{
    res.cookie('data','Persitent cookie',{
        maxAge:86400000
    })
    res.send('Cookie persistent')
})

app.get('/read-cookie',(req,res)=>{
    console.log(req.cookies);
    if(req.cookies){
        res.send('Cookie :' + JSON.stringify(req.cookies))
    }else{
        res.send('Persistent Cookie is Created ')
    }
})

app.get('/clear-Cookie',(req,res)=>{
    res.clearCookie('data')
    res.send('Cookie is Cleared')
})

app.listen(port ,()=>{
    console.log(`Server is listening on ${port} `);
})