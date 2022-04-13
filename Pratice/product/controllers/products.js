const product =  require('../models/products')

const getAllDetails =  async (req,res,next)=>{
    try{

        const pro= await product.find().lean()
        res.json({
            error :false,
            message : "",
            data:pro,
        })
    }catch(err){
        next( err)
    }

}




const addProducts = async ( req, res, next ) => {
    try {
        let { pName, pDesc, pPrice } = req.body;
        await product.insertMany( [{
            pName,
            pDesc,
            pPrice,
        }] )
        res.json( {
            error: false,
            message: 'product added successfully',
            data:null
        })
    } catch ( err ) {
        next(err)
    }
}



module.exports = {
    getAllDetails,addProducts
}