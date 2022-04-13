const express = require( 'express' );
const app = express();
const exphbs = require( 'express-handlebars' );
// const session = require('express-session')
const cookieparser = require('cookie-parser')
const port = 2000;
const uname = 'latha'
const pswd = 'latha'
require('./config/db')

//cookie-parser
app.use(cookieparser())

app.use(express.urlencoded({extended:true}))

// set up template engine
app.engine( 'handlebars', exphbs() );
app.set( 'view engine', 'handlebars' );
// body parser middleware
app.use( express.urlencoded( { extended: true } ) );
app.get( '/error', ( req, res ) => {
    res.status(500).send('Something went wrong')
})

app.get('/',(req,res)=>{
    /* if(req.session.userid){
        res.redirect('/')
    }else{
        res.render('./login.handlebars')
    } */
    res.render('./login.handlebars')

})
app.get("/login",(req,res)=>{

    if(req.cookies.myname===uname && req.cookies.password===pswd){
        res.render('./landingpage.handlebars')
    }else{
        res.redirect('/')
    }
   
})

app.post('/login',(req,res)=>{
    const {username,password,checkbox} =req.body

    //logic  to create cookies or not 
  
    if(uname === username && pswd === password){
        console.log(req.session);
        res.render('./landingpage.handlebars');
        if(checkbox){

            res.cookie("myname",username,{
                maxAge:36000
            })
            res.cookie("password",password,{
                maxAge:36000
            })
        }

    }else{
        res.redirect('/')
    }
})
app.get("/logout", (req,res)=>{
    res.redirect("/")
});


app.listen( port, () => {
    console.log(`Server is listening on port ${port}`);
})