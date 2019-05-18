require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

var song = require("./liri");

spotify.search({
        type: 'track',
        query: song
    })
    .then(response => {
        // console.log(response.tracks.items);
        for (i = 0; i < 4; i++) {
            console.log("Artist: " + JSON.stringify(response.tracks.items[i].artists[0].name));
            console.log("Track Name: " + response.tracks.items[i].name);
            console.log("Album: " + response.tracks.items[i].album.name);
            console.log("Song Preview: " + response.tracks.items[i].preview_url);
        };
    });