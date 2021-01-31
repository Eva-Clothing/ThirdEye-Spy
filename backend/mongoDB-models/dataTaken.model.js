const mongoose = require("mongoose");

const takenDataSchema = new mongoose.Schema({
    name : String,
    level: String,
    totallyCorrect : Number,
    notTotallyCorrect : [{startingTime : String,
        endingTime : String,
        timeCovered : String}]
});

const TakenData = mongoose.model("TakenData", takenDataSchema);

module.exports = TakenData;
