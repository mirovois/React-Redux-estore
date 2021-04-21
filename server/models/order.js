const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    orderItems:[{
        name:{
            type: String,
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
        inBasket:{
            type: Number,
            required: true,
            default: 0
        },
        price:{
            type: Number,
            required: true,
            default: 0
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Item'
        }
    }
    ],
    personalDetails:{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        postal:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        }
    },
    // isSubscibed:{
    //     type: Boolean,
    // },
    // payment:{
    //     creditCarde:{
    //         type:Number,
    //         required: true
    //     },
    //     expiration:{
    //         type: String,
    //         required: true
    //     },
    //     code:{
    //         type: Number,
    //         required: true
    //     }
    // },
    totalPrice:{
        type: Number,
        required: true
    },
    timestamps: String
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order