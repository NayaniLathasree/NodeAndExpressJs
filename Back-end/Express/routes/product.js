const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')

router.get('/getProducts',productController.getAllproduct)

module.exports = router