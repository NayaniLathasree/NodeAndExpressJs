const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );
const exphbs = require( 'express-handlebars' );
const session = require('express-session')
const cookieparser = require('cookie-parser')
const port = 3000;
const uname = 'latha'
const pswd = 'latha'
//session middleware
const oneDay = 24*60*60*1000
app.use(session({
    secret:'thisisasecretkey',
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge:oneDay
    }
}))

//cookie-parser
app.use(cookieparser())
//set-up handleba

app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

app.use(express.urlencoded({extended:true}))


// const dbUrl = 'mongodb+srv://admin:admin@cluster0.mmcdv.mongodb.net/products-App?retryWrites=true&w=majority';

const dbUrl = 'mongodb://localhost:27017/products-App';

mongoose.connect( dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
    ( err ) => {
        if ( !err ) {
            console.log( 'DB connection was successful ' );
        } else {
            console.log( 'DB connection failed' );
        }
    } );
// importing products route
const productsRoute = require('./routes/products')
// const orderRoute = require('./routes/orders')

// set up template engine
app.engine( 'handlebars', exphbs() );
app.set( 'view engine', 'handlebars' );

// body parser middleware
app.use( express.urlencoded( { extended: true } ) );
app.get('/user',(req,res)=>{
    console.log(req.session);
    if(req.session.userid){
        res.send(`Session is validated <a href ='/' >Logout</a>`)
    }else{
        res.redirect('/')
    }
})

// router level middleware
app.use('/products',productsRoute)
// app.use('/orders',orderRoute)

/* app.get( '/lan', ( req, res ) => {
    res.render('./landingpage.handlebars') 
} );
 */
app.get( '/error', ( req, res ) => {
    res.status(500).send('Something went wrong')
})

app.get('/',(req,res)=>{
    if(req.session.userid){
        res.redirect('/')
    }else{
        res.render('./login.handlebars')
    }
})
app.get('/login',(req,res)=>{
    res.render('./landingpage.handlebar');
})

app.post('/login',(req,res)=>{
    const {username,password} =req.body
    if(uname === username && pswd === password){
        req.session.userid = username;
        console.log(req.session);
        res.render('./landingpage.handlebar');

    }else{
        redirect('/')
    }
})

app.get('/logout',(req,res)=>{
     res.session.destory() 
     res.redirect('/')
 })

app.listen( port, () => {
    console.log(`Server is listening on port ${port}`);
})