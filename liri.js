require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
// const spotify = new Spotify(keys.spotify);
var userOption = process.argv[2];
var userInput = process.argv.slice(3);

if (userOption = "movie-this"){
    if (userInput === undefined){
        console.log("undefined");
    }else{
        axios.get("https://www.omdbapi.com/?t=" + userInput + "&apikey=trilogy")
        .then(function(response){
            console.log(JSON.stringify(response.data));
        });
    }
}
