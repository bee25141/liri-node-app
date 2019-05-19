//File calls the OMDB api to get movie info from the userInput
const axios = require("axios");

var movie = function () {
    this.getMovie = function (userMovie) {
        axios.get("https://www.omdbapi.com/?t=" + userMovie + "&tomatoes=true&apikey=trilogy")
            .then(response => {
                console.log(JSON.stringify("Title: " + response.data.Title));
                console.log(JSON.stringify("Year: " + response.data.Year));
                console.log(JSON.stringify("Actors: " + response.data.Actors));
                console.log(JSON.stringify("Plot: " + response.data.Plot));
                console.log(JSON.stringify("Language: " + response.data.Language));
                console.log(JSON.stringify("Country Produced: " + response.data.Country));
                console.log(JSON.stringify("Rotten Tomatoes Rating: " + response.data.tomatoeRating));
                console.log(JSON.stringify("IMDB Rating: " + response.data.imdbRating));
            });
    }
}

module.exports = movie;