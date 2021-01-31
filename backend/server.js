// getting all the Packages start.

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
let TakenData = require("./mongoDB-models/dataTaken.model") // taking the mongo Schema made the "/mongoDB-models" folder.
const routes = require("./routes/api");

// Getting temp local depadencies
// const saveUnknown = require("../backend/unknownEntry")

// getting all the packages end.

require("dotenv").config();
const app = express();

const port = 5000 || process.env.PORT;  // setting up the dynamic port as well as the local port.

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(morgan("tiny"));  // https: request logger in the console.

const uri = process.env.ATLAS_URI; //getting mongoDB atlas connecting link from .env file.

mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true}) // connecting to mongoDB.
.then(() => {
    console.log("Database is connected Successfully");
    
})
.catch(err => {
    console.log("Can't Connect to the Databese..!", err);
    process.exit();
    
})

// testing data can be saved or not onto the cloud.
const data = new TakenData({
    name : "Rupam",
    totallyCorrect: 2,
    notTotallyCorrect : [
        {startingTime : "10-30-00", endingTime : "11-20-00", timeCovered : "50"},
        {startingTime : "10-30-00", endingTime : "11-20-00", timeCovered : "40"}
    ]
});

// Saving the unknown images(testing)
// saveUnknown()

//data.save();

app.use("/api", routes);

app.listen(port, function(){ // connecting to the local or dynamic port.
    console.log("Server in running on port 5000");
})