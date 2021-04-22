const express = require('express')
const items = require('./data/stock')
const dotenv = require('dotenv')
const path =require('path')
const connectDB = require('./db/index.js')
const itemRouter = require('./routes/itemsRoutes')
const orderRouter = require('./routes/orderRoutes')
const cors = require('cors')

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

// const __dirname = path.resolve()
// Set fron-end production build as static folder
app.use('/items', itemRouter)
app.use('/orders', orderRouter)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'../client/build')))
    
    app.get('*', (req, res) => res.sendFile(path.resolve('client','build','index.html')))
    
} else {
    app.get('/', (req, res) =>{
        res.send('API is running...')
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port:${PORT}`))