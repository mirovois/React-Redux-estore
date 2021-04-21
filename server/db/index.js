const mongoose = require('mongoose')

const connection = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log('Connected to Mongo DB')
    }
    catch (error){
        console.log(`Error: ${error.message}`)
    }
}

module.exports = connection