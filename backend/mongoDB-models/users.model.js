const mongoose = require("mongoose");
//const TakenData = require("./dataTaken.model");

const UserSchema = new mongoose.Schema({
    email: String,
    secret: String
});

const User = mongoose.model("user", UserSchema);

module.exports = User;