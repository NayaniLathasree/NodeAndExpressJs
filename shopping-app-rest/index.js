const express = require( 'express' );

require( 'dotenv' ).config();

// Db connection

require( './config/db.js' )

// product routes
const productsRoutes = require( './routes/products' )

// user Routes
const userRoutes = require('./routes/users')

//blog Route

// const blogRoute = require('./routes/blog')

const app = express();
const PORT = process.env.PORT || 4000;

// body parser middleware
app.use( express.urlencoded( { extended: true } ) );
app.use(express.json())

// route middleware
app.use( '/products', productsRoutes )
app.use('/users',userRoutes)
// app.use('/blog',blogRoute)

//2nd way to use route mw
app.use('/employee',require('./routes/employee'))

app.get( '/test', ( req, res ) => {
    res.json({'test':'test the rest service'})
} )

// Error handling hardware mw
app.use( ( err, req, res, next ) => {
    res.status(500).json( {
        error: true,
        message: err.message,
        data:null
    })
})

app.listen( PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})