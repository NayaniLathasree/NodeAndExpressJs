const express = require( 'express' );
// Db connection
require( './product/config/db' )
// product routes
const productsRoutes = require( './product/routes/products' )
const app = express();
const port = 4000;
// body parser middleware
app.use( express.urlencoded( { extended: true } ) );
app.use(express.json())
// route middleware
app.use( '/products', productsRoutes )

// Error handling hardware
app.use( ( err, req, res, next ) => {
    res.status(500).json( {
        error: true,
        message: err.message,
        data:null
    })
})
app.listen( port, () => {
    console.log(`Server is listening on port ${port}`);
})