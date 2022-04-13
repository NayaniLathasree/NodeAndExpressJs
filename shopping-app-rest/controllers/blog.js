/*  const blogModel = require('../models/blog')

 const saveBlog = async (req,res)=>{
     const data = req.body
     console.log(req.body);
     try{
         await blogModel.inserMany([{...data}])
         res.status(400).json({
             message :"Sucess"
         })
     }catch(err){
         next(err)
     }
 }

 module.exports = {
    saveBlog 
 } */