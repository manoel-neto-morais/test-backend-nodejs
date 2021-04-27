const express = require('express')
const categoryController = require('./controllers/categoryController')
const productController = require('./controllers/productController')

//utilização dos métodos de manipulação de todas do express
const routes = express.Router()


routes.get('/products', productController.showProducts)

routes.post('/products', productController.registerProduct)

routes.put('/products/:id', productController.updateProduct)

routes.delete('/products/:id', productController.removeProduct)

routes.post('/categories', categoryController.registerCategory)

routes.get('/categories', categoryController.showCategories)

routes.put('/categories/:id', categoryController.updateCategories)

routes.delete('/categories/:id', categoryController.removeCategories)


//exportação do módulo
module.exports = routes
