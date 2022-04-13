const query = require( '../models/query' );

const getAllqureies = async ( req, res ,next) => {
    try {
        const  queries  = await  query.find().lean();
        res.json( {
            error: false,
            message: "",
            data:queries ,
        } );
    } catch ( err ) {
       next(err)
    }
};
const addqueries = async ( req, res, next ) => {
    try {
        let { clientName, technology, candidateName,question,answer, difficultlevel, department } = req.body;
        await query.insertMany( [{
            clientName,  technology, question,answer,difficultlevel,candidateName, department 

        }] )
        res.json( {
            error: false,
            message: 'Query added successfully',
            data:null
        })
    } catch ( err ) {
        next(err)
    }
}

const matchqueries = async ( req, res, next ) => {
    try {
        let { clientName, technology, candidateName,question,answer, difficultlevel, department} = req.body;
        await query.insertMany( [{
            clientName, technology, candidateName,question,answer, difficultlevel, department

        }] )
        res.json( {
            error: false,
            message: 'Query added successfully',
            data:null
        })
    } catch ( err ) {
        next(err)
    }
}

module.exports = {
    getAllqureies ,addqueries
}