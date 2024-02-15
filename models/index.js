const mongoose = require('mongoose')
const computerSchema = require('./computer')
const SmartHomeSchema = require('./smartHome')
const TVSchema = require('./tv')


const Computer = mongoose.model('computer', computerSchema)
const SmartHome = mongoose.model('SmartHome', SmartHomeSchema)
const TV = mongoose.model('TV', TVSchema)

module.exports = {
    Computer,
    SmartHome,
    TV
}

