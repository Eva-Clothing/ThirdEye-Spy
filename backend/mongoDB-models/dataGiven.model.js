const mongoose = require("mongoose");
//const TakenData = require("./dataTaken.model");

const givenDataSchema = new mongoose.Schema({
    name: String,
    level: String,
    sunday: [String],
    monday: [String],
    tuesday: [String],
    wednesday: [String],
    thursday: [String],
    friday: [String],
    Saturday: [String]
});

const GivenData = mongoose.model("GivenData", givenDataSchema);

module.exports = GivenData;