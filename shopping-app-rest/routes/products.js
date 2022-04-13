const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
 const productController = require('../controllers/products')
router.get('/products',auth.authorizeUserAdmin,productController.getAllProducts)
router.post('/add-products',auth.authorizeAdmin,productController.addProduct)
router.put('/edit-products',auth.authorizeAdmin,productController.editProduct)
router.delete('/delete-products',auth.authorizeAdmin,productController.deleteProduct)
module.exports = router

