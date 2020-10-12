const express = require('express');
const app = express();
const axios = require('axios');

const APP_ID = "ateo54zxrf0g2skykiad16p6xiwtkp";
const APP_SECRET = "gohjb2bnw7l405gj9mhsrq574co9uv";
let TOKEN = 0;

let hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
});

// Also works
app.get('/igdb',(req, res) => {
    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`)
     .then(response => {
       //res.send(response.data);
       TOKEN = response.data.access_token;

        axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`,
                'Client-ID': APP_ID
            },
            data: "fields cover,screenshots,summary,name;"
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



app.listen(3000, () =>{
    console.log('server started on port 3000');
})