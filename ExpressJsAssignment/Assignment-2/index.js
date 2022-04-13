const express = require('express')
const app = express()
const fs = require('fs')
const exphbs = require('express-handlebars')
const port = 2000
app.use(express.json()) 
//setup template engine
app.engine('handlebars',exphbs())
app.set('view engine', 'handlebars')

const saveProductData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('products.json', stringifyData)
}

//get the user data from json file
const getProductData = () => {
    const jsonData = fs.readFileSync('products.json')
    return JSON.parse(jsonData)    
}

const existProduct = getProductData()

//body parse middleware
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('./landingpage.handlebars')
})
app.get('/products/products',(req,res)=>{
    res.render('./products.handlebars',{existProduct})
})
app.get('/products/add-product',(req,res)=>{
    res.render('./add-product.handlebars',)
})

app.post('/products/add-product',(req,res)=>{
    // res.render('./add-product.handlebars')
    let {_id,pName,pDesc,pPrice} = req.body
    console.log(req.body);
    _id = parseInt(_id)
     pPrice = parseInt(pPrice)
     existProduct.push({_id,
        pName,
        pDesc,
        pPrice
    })
    saveProductData(existProduct)
    res.redirect('/products/products')
    // res.send('Product added Successfully')
})
 app.get('/products/edit-products/:_id' , (req , res)=>{
    console.log(req.query._id);
    console.log(req.params._id);
   const index= existProduct.findIndex((product)=>{
        return parseInt(product._id) === parseInt(req.params._id)
    })
    const selectedProduct = existProduct[index]
  res.render('./edit-Product.handlebars',{selectedProduct})

}) 
app.post('/products/edit-product' , (req , res)=>{
    console.log(req.body);
    let {_id,pName,pDesc,pPrice} = req.body
    _id = parseInt(_id)
     pPrice = parseInt(pPrice)
     const index = existProduct.findIndex((product)=>{
        return parseInt(product._id) === parseInt(req.params._id)
    })
    existProduct.splice(index,1,{_id,pName,pDesc,pPrice})
    saveProductData(existProduct)
    res.redirect('/products/products')
}) 

app.get('/products/delete-products/:_id' , (req , res)=>{
   const _id = req.params._id
    const index= existProduct.findIndex((product)=>{
        return parseInt(product._id) === parseInt(_id)
    })
    existProduct.splice(index,1)
    saveProductData(existProduct)
    res.redirect('/products/products')
})
app.listen(port,()=>{
    console.log('Server started on port 2000');
})
