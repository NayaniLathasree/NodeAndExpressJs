const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
//set-up the template engine
app.engine("handlebars",exphbs());
app.set("view engine","handlebars")

app.get('/',(req,res)=>{
    res.render('./sigin.handlebars')
})
app.listen(port,()=>{
    console.log(`Sever is listening ${port}`);
})