//File calls the Bands in Town API with the userInput
const axios = require("axios");
const moment = require('moment');
var concert = require("./liri");

axios.get("https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp")
    .then(response => {
        // console.log(response.data);
        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].venue.name);
            console.log(response.data[i].venue.city);
            var dateTimeConverted = response.data[i].datetime;
            dateTimeConverted = moment(dateTimeConverted).format("MM/DD/YYYY");
            console.log(dateTimeConverted);
        };
        console.log("response");
    })