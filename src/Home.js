import React, { useEffect, useCallback, useState } from 'react';
import './Home.css';
import Nav from './Nav';
import GameGallery from './GameGallery';
import {Link} from 'react-router-dom';
import HomeDefault from './HomeDefault';
import TrendingGames from './TrendingGames';
import TripleInfoBox from './TripleInfoBox';
import axios from 'axios';


function Home() {

  
  // Twitch oAUTH keys for IGDB API
  const APP_ID = "ateo54zxrf0g2skykiad16p6xiwtkp";
  const APP_SECRET = "gohjb2bnw7l405gj9mhsrq574co9uv";
  const [ACCESS_TOKEN, setToken] = useState(0);

  let hltb = require('howlongtobeat');
  let hltbService = new hltb.HowLongToBeatService();

    useEffect(() => {
      hltbService.search('Nioh').then(result => console.log(result));
  }, []);

  useEffect(() => {
      getToken();
  }, []);

  // useEffect(() => {
  //   if(ACCESS_TOKEN != 0){
  //     searchGames();
  //   }
  // }, [ACCESS_TOKEN]);

  // Get the access token
  const getToken = useCallback (() => {
    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`)
    .then((response) => {
      console.log(response.data.access_token);
      setToken(response.data.access_token);
    });
  }, []);

  // // Test to search for trending games
  // const searchGames = () => axios({
  //   url: "https://api.igdb.com/v4/games",
  //   method: 'POST',
  //   headers: {
  //       'Accept': 'application/json',
  //       'Authorization': `Bearer ${ACCESS_TOKEN}`,
  //       'Client-ID': APP_ID
  //   },
  //   params:{"fields": 'name'}
  // })
  //   .then(response => {
  //       console.log(response.data);
  //   })
  //   .catch(err => {
  //       console.error(err);
  // });


  return (
    <div>
      <Nav/>
      <HomeDefault/>
      <TripleInfoBox/>
      <TrendingGames/>
    </div>
  );
}

export default Home;
