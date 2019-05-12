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
        .then(response => {
            console.log(JSON.stringify("Title: " + response.data.Title));
            console.log(JSON.stringify("Year: " + response.data.Year));
            console.log(JSON.stringify("Actors: " + response.data.Actors));
            console.log(JSON.stringify("Plot: " + response.data.Plot));
            console.log(JSON.stringify("Language: " + response.data.Language));
            console.log(JSON.stringify("Country Produced: " + response.data.Country));
            console.log(JSON.stringify("IMDB Rating: " + response.data.imdbRating));

        });
    }
}
