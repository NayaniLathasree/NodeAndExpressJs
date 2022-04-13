const express = require( 'express' );
require( 'dotenv' ).config();
const cors = require( 'cors' )

// Db connection
require( './config/db.js' )

// query routes
const queryRoutes = require( './routes/query' )
//users Routes
const userRoutes = require('./routes/users')


const app = express();
const PORT = process.env.PORT || 4000;

// cors middleware
app.use(cors())

// body parser middleware
app.use( express.urlencoded( { extended: true } ) );
app.use(express.json())

// route middleware
app.use( '/query', queryRoutes )
app.use('/users',userRoutes)

app.get( '/test', ( req, res ) => {
    res.json({'test':'test the rest service'})
} )

// Error handling hardware
app.use( ( err, req, res, next ) => {
    res.status(500).json( {
        error: true,
        message: err.message,
        deta:null
    })
})

app.listen( PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})