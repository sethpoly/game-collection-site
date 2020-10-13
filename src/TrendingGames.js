import React, { useEffect, useCallback, useState } from 'react';
import './TrendingGames.css';
import GameGallery from './GameGallery';
import Game from './Game';
import {Link} from 'react-router-dom';
import axios from 'axios';

function TrendingGames() {

  const [games, setGames] = useState([]);
  const [img_urls, setUrls] = useState([]);
  const [tempGames, setTempGames] = useState([]);
  let img_id_array = [];

//   // Get trending games on first load
//   useEffect(() => {
//     axios.get('http://localhost:3000/trending')
//     .then(response => {
//       console.log(response.data);
//       setTempGames(response.data);
//     });
// }, []);

useEffect(() => {
      axios.get('http://localhost:3000/rawg')
    .then(response => {
      console.log(response.data);
    });
}, []);

  // Retrieve the covers once all games are loaded
  useEffect( ()  =>  {
    for(var i = 0; i < tempGames.length; i++){
      img_id_array[i] = tempGames[i].cover;
    }
    Promise.all(img_id_array.map(img => axios.get(`http://localhost:3000/cover/${img}`)))
    .then(response => {
      setUrls(response);
    });
  }, [tempGames]);

  useEffect(() => {
    getUrls();
  }, [img_urls]);

  // Once all images have been retrieved, save them to the games array
  const getUrls = () => {
    for(let i = 0; i < tempGames.length; i++){
      tempGames[i].cover = img_urls[i].data[0].url;
      console.log(tempGames[i].cover);
    }
    setGames(tempGames);
  }

  return (
    <div>
      <div className="trending-games">
          <h2 className="title-trending">Trending Games</h2>
        <div className="container">
          {games.map(game => (
            <Game 
              img={game.cover}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingGames;
