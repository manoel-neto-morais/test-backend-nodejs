const mongoose = require('mongoose')


//definição do Schema para os produtos
const productSchema = new mongoose.Schema({
//Title, description, price, category
    title: {
     type: String,
     required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    //estabelecendo o relacionamento com o Schema 'Category' através do ObjectId
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
})


//registro do model 'Product'
mongoose.model('Product', productSchema)