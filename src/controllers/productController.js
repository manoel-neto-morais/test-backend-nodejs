
const mongoose = require('mongoose')


//importação do model criado
const Product = mongoose.model('Product')

module.exports = {

    //método para registro de um novo produto
    async registerProduct(request, response){

        try {
            const product = await Product.create(request.body)
            return response.json(product)

        } catch (error) {
            return response.status(500).json({
            message : error.message || "Some error occurred while creating a store operation"})
        }

    }, 
    
    //filtra os produtos por nome || categoria, caso não exista a query apropriada, retorna todos os produtos
    async showProducts(request, response){

        const { name, category } = request.query

        if (name || category){

            if(name){
                try {
                    const product = await Product.find({title:name}).populate('category')
                    return response.status(200).json(product)
                } catch (error) {
                    return response.status(500).send({
                        message : error.message || "Some error occurred"
                    })
                }
            }else{
                
                try {
                    const productByCategory = await Product.find({ category: mongoose.Types.ObjectId(category) }).populate('category')
                    return response.status(200).json(productByCategory)
                } catch (error) {
                    return response.status(500).send({
                        message : error.message || "Some error occurred"
                    })
                }         
            }
            
        }else{
            try {
                const products = await Product.find().populate('category')
                return response.status(200).json(products)
            
            } catch (error) {
                return response.status(500).send({
                    message : error.message || "Some error occurred"
                })
            }
        }
        
    },  
    
    //método para atualizar o código
    async updateProduct(request, response){
        try {
            const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true } )
        
            return response.status(200).json(product)
        } catch (error) {
            return response.status(500).send({
                message : error.message || "Some error occurred"
            })
        }
    },

    //método para remoção de um produto pelo seu ID
    async removeProduct(request, response){
        
        try {
            await Product.findByIdAndDelete(request.params.id)
            return response.send("Produto Removido Com Sucesso!")
        } catch (error) {
            console.warn(`Error! ${error}`)
        }

    }
}