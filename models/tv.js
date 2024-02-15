const { Schema } = require('mongoose')

const TV= new Schema(
    {
        name : {type: String, required: true},
        features : {type: String, required: true},
        size : {type: String, required: true},
        brand: {type: String, required: true},
        price : {type: Number, required: true}
    },
    { timestamps: true }
)


module.exports = TV