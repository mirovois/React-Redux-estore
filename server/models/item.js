const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    timestamps: String
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item