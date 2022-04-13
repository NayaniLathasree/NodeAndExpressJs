const ProductSchema =  require('../models/product')

const getAllproduct = (async (req,res,next)=>{
  
   try{
       const products =  await ProductSchema.find().lean()
       res.json({
           error : false,
           message : '',
           data : products
       })
   }catch(err){
       next(err)
   }
})

module.exports = {
    getAllproduct
}