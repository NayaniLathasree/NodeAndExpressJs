const http = require( 'http' );
const handle = require( './handler.js' );

http.createServer( handle.requestHandler ).listen( 2000, () => {
    console.log( 'Server is listening on port 2000' );
} );