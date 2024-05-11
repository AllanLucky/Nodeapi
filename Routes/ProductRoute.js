const express = require('express')

const ProductController = require('../Controllers/ProductController')

const Routes = express.Router();


Routes.post('/addProduct', ProductController.addProduct)
Routes.get('/getAllProducts', ProductController.getProducts)





module.exports = Routes



