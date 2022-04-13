const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
//set-up the template engine
app.engine("handlebars",exphbs());
app.set("view engine","handlebars")

app.get('/',(req,res)=>{
    const person = {
        uname : 'latha',
        role:'SE'
    }
    res.render('./home.handlebars', {person})
})

app.get('/about',(req,res)=>{
    const persons= [
        {
            uname : 'latha',
            role:'SE'
        },
        {
            uname : 'divya',
            role:'tester'
        }]
    res.render('./about.handlebars',{persons})
})

app.get('/contact',(req,res)=>{
    const users = ['latha','veda']
   
    res.render('./contact.handlebars',{users}, isAdmin ='true')
})

app.listen(port,()=>{
    console.log('Server listening on port 3000');
});