const user = [
    {
        id: 1,
        uname: 'Veda',
        age: 24,
    },
    {
        id: 2,
        uname: 'Divya',
        age: 20,
    },
];

const requestHandler = ( req, res ) => {
    if ( req.url === "/" ) {
        res.end( 'Home Page' )
    } else if ( req.url === "/login" ) {
        res.end( "Login Page" )
    } else if ( req.url === '/user' ) {
        const userData = JSON.stringify( user );
        res.end( userData );
    };
};

module.exports = {
    requestHandler
}