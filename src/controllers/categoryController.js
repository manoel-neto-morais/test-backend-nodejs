const mongoose = require('mongoose')


const Category = mongoose.model('Category')

module.exports = {

    //método pra registro de categoria
    async registerCategory(request, response) {
        try {
            const category = await Category.create(request.body)
            return response.status(200).json(category)
        } catch (error) {
            return response.status(500).json(
                {message: error.message || "Some error occurred while creating a store operation"}
            )
        }
    },

    //show all categories
    async showCategories(request, response) {
        try {
            const categories = await Category.find()
            return response.status(200).json(categories)
        } catch (error) {
            return response.status(500).json(
                {message: error.message || "Some error occurred!"}
            )
    
        }
    }, 

    //update categories
    async updateCategories(request, response){

        try {
            const category = await Category.findByIdAndUpdate(request.params.id, request.body, { new: true } )
            return response.status(200).json(category)

        } catch (error) {
            return response.status(500).json(
                {message: error.message || "Some error occurred!"}
            )
        }
    }, 

    async removeCategories(request, response){
        try {
            await Category.findByIdAndDelete(request.params.id)
            return response.send("Categoria Removida Com Sucesso!")
        } catch (error) {
            return response.status(500).json(
                {message: error.message || "Some error occurred!"}
            )
        }
    }
   
}