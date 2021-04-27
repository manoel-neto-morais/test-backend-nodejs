const mongoose = require('mongoose')

//definição do Schema para as categorias
const categorySchema = new mongoose.Schema({
   name: {
       type: String, 
       require: true
   }
})


//registro do model 'Category'
mongoose.model('Category', categorySchema)
