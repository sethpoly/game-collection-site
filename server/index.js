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

// Get trending games from a date range
app.get('/trending',(req, res) => {
    
    // Get today's date in yyyy-mm-dd format
    let min_date = getDateFormatted(0, 1);
    let max_date = getDateFormatted(1, 12);

    // Get most popular games from this year
    axios.get(`https://api.rawg.io/api/games?dates=${min_date},${max_date}&ordering=-added`)
    //axios.get(`https://api.rawg.io/api/games?platforms=17&ordering=-added`)
     .then(response => {
        res.send(response.data);
     })
     .catch(err => {
        res.send(err);
});
});

// Get game by id
app.get('/games/:id',(req, res) => {
    
    const id = req.params.id;
    // Get most popular games from this year
    axios.get(`https://api.rawg.io/api/games/${id}`)
     .then(response => {
        res.send(response.data);
     })
     .catch(err => {
        res.send(err);
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

// Get date in yyyy-mm-dd format
// @param1: either in past or future
// @param2: months difference
function getDateFormatted(format, months) {
    let today = new Date();
    if(format == 0){ // In past
        today.setMonth(today.getMonth() - months);
    }
    else{
        today.setMonth(today.getMonth() + months);
    }
    today = today.toLocaleDateString("en-US");
    today_arr = today.split('/').reverse();

    // If single digit, add leading zero
    if(today_arr[2].toString().length == 1) {
        today_arr[2] = '0' + today_arr[2];
    } 
    today = today_arr[0] + '-' + today_arr[2] + '-' + today_arr[1];
    return today;
}
