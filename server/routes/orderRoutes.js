const express = require('express')
const mongoose = require('mongoose')
const Order = require('../models/order.js')

const router = express.Router()

router.get('/', async (req, res) =>{
    const items = await Order.find({})
    res.json(items)
})

router.post('/', async (req, res) =>{
    const {orderItems, personalDetails, totalPrice} = req.body
    if(orderItems && orderItems.length ===0) {
        res.status(400)
        console.log('There are no items in the order.')
    } else {
        const order = new Order({
            orderItems,
            personalDetails, 
            totalPrice
        })
        const newOrder = await order.save()
        res.status(201).json(newOrder)
    }
})

module.exports = router