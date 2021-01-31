const mongoose = require("mongoose")

const unknownSchema = new mongoose.Schema({
    imageURL: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

const Unknown = mongoose.model("unknown", unknownSchema)
module.exports = Unknown