const express = require('express')
const mongoose = require('mongoose')
const Item = require('../models/item.js')

const router = express.Router()

router.get('/', async (req, res) =>{
    const items = await Item.find({})
    res.json(items)
})

router.get('/:id', async(req, res) =>{
    const item =  await Item.findById(req.params.id)
    res.json(item)
})

module.exports = router