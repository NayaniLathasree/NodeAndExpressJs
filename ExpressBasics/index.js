const express =require('express')
const app = express()
const port = 2000;

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/add', (req,res)=>{
    
    res.send("Add get Method ")
})
app.post('/add',(req,res)=>{
    res.send('Add post Method ')
})
app.listen(port,()=>{
    console.log(`Server is started on ${port}`);
})