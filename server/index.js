const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

const APP_ID = "ateo54zxrf0g2skykiad16p6xiwtkp";
const APP_SECRET = "gohjb2bnw7l405gj9mhsrq574co9uv";
let TOKEN = 0;

// Set up htlb API
let hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
});

// Retrieve (up to) 8 trending games from the igdb api
app.get('/trending',(req, res) => {
    // Get access token and save to TOKEN variable
    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`)
     .then(response => {
       TOKEN = response.data.access_token;

       // Post to search for games
        axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`,
                'Client-ID': APP_ID
            },
            data: `limit 9; fields name,rating,cover,summary,first_release_date; where rating > 80 & rating_count > 200; sort first_release_date desc;`,
        })
            .then(response => {
                res.send(response.data);
            })
            .catch(err => {
                res.send(err);
        });
     });
});

// A much better api that i will use instead
app.get('/rawg',(req, res) => {
    // Get access token and save to TOKEN variable
    axios.get(`https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added`)
     .then(response => {
        res.send(response.data);
     })
     .catch(err => {
        res.send(err);
});
});




// Retrieve the cover art img for a specific game from the idgb api
app.get('/cover/:id',(req, res) => {
    let id = req.params.id;
    // Get access token and save to TOKEN variable
    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`)
     .then(response => {
       TOKEN = response.data.access_token;

       // Post to search for games
        axios({
            url: "https://api.igdb.com/v4/covers",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`,
                'Client-ID': APP_ID
            },
            data: `limit 1; fields url; where id = ${id};`,
        })
            .then(response => {
                res.send(response.data);
            })
            .catch(err => {
                res.send(err);
        });
     });
});

// Works
app.get('/hltb', (req, res) => {
hltbService.search('Nioh').then(result => res.send(result));
});


// Listen on port ???
app.listen(3000, () =>{
    console.log('server started on port 3000');
})