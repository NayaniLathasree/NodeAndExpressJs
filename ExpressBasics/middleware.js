const express =require('express')
const app = express()
const port = 2000;
//middleWare function
const getDetails = (req,res,next)=>{
    console.log('MiddleWare Function');


    const date = Date.now()
    req.requestDate= date
    //next should be called if the request need to be passed next routes
    next()
}

app.use(getDetails)
//build-in mw
app.use(express.static('./public'))
//dummy path 
app.use('/static',express.static('./files'))

app.get('/',(req,res)=>{
    res.send('Get mehod response   ' +new Date(req.requestDate))
})
app.get('/getDate', (req,res)=>{
    
    res.send(
        ` <h1>${new Date(req.requestDate)}</h1>
        <button onclick='alert(hello)'>Click</button>`
        )
})
app.post('/add',(req,res)=>{
    res.send('Add post Method ')
})
//it will all types of paths
app.all('*',(req,res)=>{
    throw new Error("The path doesn't exist")
})

//Error-Handling
app.use((err,req,res,next)=>{
    res.status(500)
    res.send(err.message)
})
app.listen(port,()=>{
    console.log(`Server is started on ${port}`);
})
