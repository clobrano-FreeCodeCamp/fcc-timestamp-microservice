var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:str', function(req, res) {
    var str = req.params.str;
    var json = {};

    if (!isNaN(Date.parse(str))) {
        // Natural language date string
        json.unix = convertNaturalTimestamp(str);
        json.natural = str;
    } else if (!isNaN(str)) {
        // Integer that might be a Unix timestamp
        json.unix = str;
        json.natural = convertUnixTimestamp(str);
    } else {
        // Not a valid timestamp
        json.unix = null;
        json.natural = null;
    }

//    if (isDateValid(str)){
//        if (isNaN(str)) {
//            console.log("string parameter");
//            json.unix = convertNaturalTimestamp(str);
//            json.natural = str;
//        } else {
//            console.log("number");
//            json.unix = str;
//            json.natural = convertUnixTimestamp(str);
//        }
//    } else {
//        console.log("not a valid date");
//    }
    res.send(json);
});

function isDateValid(date) {
    console.log(date);
    var d = Date.parse(date);
    return !isNaN(d);
}

function convertUnixTimestamp(timestamp) {
    // Convert a Unix timestamp in a Natural Language date (e.g. January 1, 2016).
    var nldate = new Date(timestamp * 1000);
    return nldate.toDateString();
}

function convertNaturalTimestamp(timeString) {
    // Convert a Natural Language timestamp in Unix format.
    var udate = new Date(timeString);
    return udate.getTime() / 1000;
}

module.exports = router;
