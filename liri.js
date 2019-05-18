//Setting variables for the user inputs
var userOption = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

//Exporting the userInput to the moviethis file to call the OMDB API
if (userOption === "movie-this") {
    if (userInput === undefined) {
        userInput = "Mr. Nobody";
        module.exports = userInput;
        require("./moviethis");
    } else {
        module.exports = userInput;
        require("./moviethis");
    };
};

//Exporting the userInput to the concertthis file to call the Bands in Town API
if (userOption === "concert-this") {
    if (userInput === undefined) {
        console.log("undefined");
    } else {
        module.exports = userInput;
        require("./concertthis");
    };
};

//Exporting the userInput to the spotifythissong file to call the Spotify API
if (userOption === "spotify-this-song") {
    if (!userInput) {
        module.exports = "the sign";
        require("./spotifythissong");
    } else {
        module.exports = userInput;
        require("./spotifythissong");
    };
};

//takes instruction from txt file random.txt and performs commands
if (userOption === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            console.log(data);
            let dataArray = data.split(",");
            let userInput = dataArray.slice(1);
            if (dataArray[0] === "spotify-this-song") {
                spotify.search({
                        type: 'track',
                        query: userInput
                    })
                    .then(response => {
                        // console.log(response.tracks.items);
                        for (i = 0; i < 4; i++) {
                            console.log("Artist: " + JSON.stringify(response.tracks.items[i].artists[0].name));
                            console.log("Track Name: " + response.tracks.items[i].name);
                            console.log("Album: " + response.tracks.items[i].album.name);
                            console.log("Song Preview: " + response.tracks.items[i].preview_url);
                        }
                    });
            } else if (dataArray[0] === "movie-this") {
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
            } else if (dataArray[0] === "concert-this") {
                axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
                    .then(response => {
                        // console.log(response.data);
                        for (i = 0; i < response.data.length; i++) {
                            console.log(response.data[i].venue.name);
                            console.log(response.data[i].venue.city);
                            var dateTimeConverted = response.data[i].datetime;
                            dateTimeConverted = moment(dateTimeConverted).format("MM/DD/YYYY");
                            console.log(dateTimeConverted);
                        };
                    });
            };
        };
    });
};