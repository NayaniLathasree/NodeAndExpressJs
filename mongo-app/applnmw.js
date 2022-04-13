const express = require('express');

// custom middleware create
const ApplnMiddleware = (req,res,next) =>{
    res.send(`date : - ${new Date()}`)
    next();
}

const app = express()

// application level middleware
app.use(ApplnMiddleware );


// users route
app.get('/users',(req,res)=>{
    res.json({
        'message':'users page',
    })
})


// save route
app.post('/save',(req,res)=>{
    res.json({
        "message" :" save page "
    })
})

app.listen(3000,(req,res)=>{
    console.log('server running on port 3000')
})