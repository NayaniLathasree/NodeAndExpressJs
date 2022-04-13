const express = require('express')
const productsControllers = require('../controllers/products')
const router = express.Router()

router.get('/products',productsControllers.getAllDetails)
router.post('/add-products',productsControllers.addProducts)



module.exports = router