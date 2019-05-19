//File calls the Bands in Town API with the userInput
const axios = require("axios");
const moment = require('moment');

var concert = function () {
    this.getConcert = function (userConcert) {
        axios.get("https://rest.bandsintown.com/artists/" + userConcert + "/events?app_id=codingbootcamp")
            .then(response => {
                for (i = 0; i < response.data.length; i++) {
                    console.log(response.data[i].venue.name);
                    console.log(response.data[i].venue.city);
                    var dateTimeConverted = response.data[i].datetime;
                    dateTimeConverted = moment(dateTimeConverted).format("MM/DD/YYYY");
                    console.log(dateTimeConverted);
                };
                console.log("response");
            });
    };
};

module.exports = concert;