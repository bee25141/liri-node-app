require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const moment = require('moment');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
var userOption = process.argv[2];
var userInput = process.argv.slice(3);


//Function that gathers movie info from the OMDB api
if (userOption === "movie-this") {
    if (userInput === undefined) {
        console.log("undefined");
    } else {
        axios.get("https://www.omdbapi.com/?t=" + userInput + "&tomatoes=true&apikey=trilogy")
            .then(response => {
                console.log(JSON.stringify("Title: " + response.data.Title));
                console.log(JSON.stringify("Year: " + response.data.Year));
                console.log(JSON.stringify("Actors: " + response.data.Actors));
                console.log(JSON.stringify("Plot: " + response.data.Plot));
                console.log(JSON.stringify("Language: " + response.data.Language));
                console.log(JSON.stringify("Country Produced: " + response.data.Country));
                console.log(JSON.stringify("Rotten Tomatoes Rating: " + response.data.tomatoeRating));
                console.log(JSON.stringify("IMDB Rating: " + response.data.imdbRating));
                console.log(response); 

            });
    }
}

//Getting concert info from the Bands in Town API
if (userOption === "concert-this") {
    if(userInput === undefined){
        console.log("undefined");
    }else{
        axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
        .then(response => {
            // console.log(response.data);
            for (i=0; i<response.data.length; i++){
                console.log(response.data[i].venue.name);
                console.log(response.data[i].venue.city);
                var dateTimeConverted = response.data[i].datetime;
                dateTimeConverted = moment(dateTimeConverted).format("MM/DD/YYYY");
                console.log(dateTimeConverted);
            }
        })
    }
}

//Getting the song info from the Spotify API
if(userOption === "spotify-this-song"){
    if(userInput === undefined){
        console.log(undefined);
    }else {
        spotify.getClientCredentialsGrant()
        .then(data => {
            spotify.setAccessToken(data.body['access_token']);
            console.log(spotify);
        })
        // .then(response => {
        //     console.log(response);
        // })
    }
}