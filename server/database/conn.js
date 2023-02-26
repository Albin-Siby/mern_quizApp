const mongoose = require('mongoose')

module.exports.connect = async() => {
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database is connected")
}