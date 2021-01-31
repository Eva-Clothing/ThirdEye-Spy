const Express = require("express");
const router = Express.Router();
const TakenData = require("../mongoDB-models/dataTaken.model");
const GivenData = require("../mongoDB-models/dataGiven.model");
const Unknown = require("../mongoDB-models/unknown.model")
const { error } = require("jquery");
const User = require("../mongoDB-models/users.model");

// routes start.
//get requests

router.get("/", (req, res) => {
    TakenData.find({})
    .then((data) => {
        res.json(data)
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }); 
});

router.get("/unknown", (req, res) => {
    Unknown.find({})
    .then((data) => {
        res.json(data)
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }); 
});

router.get("/name", (req, res) => {
    const data = {
        name : "api",
        place : "a"
    };
    res.json(data)
});

router.post("/login", (req, res) => {
    const data = req.body;
    const id = data.id;
    console.log(id);
    const level2 = process.env.LEVEL2;
    const level3 = process.env.LEVEL3;
    if (id == level2) {
        res.send("2");
    } else if (id == level3) {
        res.send("3");
    } else {
        res.send("0");
    }
});

router.post("/resister", (req, res) => {
    const data = req.body;
    const email = data.email;
    const password = data.password;
    const level1 = process.env.LEVEL1;
    if (password === level1) {
        res.send("1");
    } else {
        res.send("0");
    }
    
    // res.json(data);
});


//post requests

router.post("/update", (req, res) => {
    const data = req.body;
    //console.log(data);
    const selectDay = data.selectDay;
    const selectPerson = data.selectPerson;
    const startingIndex = data.period;
    const minEntryTime = data.minEntryTime;
    const maxEntryTime = data.maxEntryTime;
    const minExitTime = data.minExitTime;
    const maxExitTime = data.maxExitTime;
    
    var start = startingIndex*4;
    var end = start + 4;
    GivenData.findOne({name: selectPerson}, function(err,obj) { 
        let array = obj[selectDay];
        //console.log(array);
        
        array[start] = minEntryTime;
        array[start+1] = maxEntryTime;
        array[start+2] = minExitTime;
        array[start+3] = maxExitTime;

        //console.log(selectDay);
        var day = {}
        day[selectDay] = array;

        GivenData.updateOne({"name": selectPerson}, {"$set": day}, { "upsert": false }, function(error, object){
            if(!error){
                console.log("Successfully updated the rutine");
            }
            else{
                console.log("unsuccessful...Sorry! Internal Server Error.");
                console.log(error);
            }
        });
    });

    //console.log(selectDay, selectPerson, startingIndex, minEntryTime, maxEntryTime, minExitTime, maxExitTime);
});

module.exports = router;