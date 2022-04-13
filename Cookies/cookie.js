const  express = require('express')
const cookieparser = require('cookie-parser')
const app = express()
const port = 2000
app.use(cookieparser())

app.get('/read',(req,res)=>{
    console.log(req.cookies);
    if(req.cookies){
        res.send("Cookie exist"+ JSON.stringify(req.cookies))
    }
    else{
        res.send('Cookie does not exist')
    }

})

app.get('/create',(req,res)=>{
    res.cookie('data',"cookie data")
    res.send('Cookie is created')
})

app.get('/createpersitent',(req,res)=>{
    res.cookie('persitent-Cookie','Creating persistent cookie',{
        maxAge:86400000
    })
    res.send('Persistent Cookie is Created')

})
app.get('/clear',(req,res)=>{
    res.clearCookie('data')
})