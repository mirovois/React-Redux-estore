const mongoose = require('mongoose')
const dotenv = require('dotenv')
const items = require('./server/data/stock')
const Item = require('./server/models/item')
const Order = require('./server/models/order')
const connectDB = require('./server/db/index.js')

dotenv.config()
connectDB()

const importItems = async () =>{
    try {
        await Order.deleteMany()
        await Item.deleteMany()

        await Item.insertMany(items)
        console.log('Items imported!!!')
    }
    catch (error){
        console.log(error)
    }
}

const destroyItems = async () =>{
    try {
        await Order.deleteMany()
        await Item.deleteMany()

        console.log('Items destroyed!!!')
    }
    catch (error){
        console.log(error)
    }
}

if (process.argv[2] === '-d') {
    destroyItems()
} else {
    importItems()
}