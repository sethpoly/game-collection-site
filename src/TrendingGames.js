import React, { useEffect, useState } from 'react';
import './TrendingGames.css';
import './GameGallery.css';
import Game from './Game';
import axios from 'axios';

function TrendingGames() {

  const [games, setGames] = useState([]);


  // Retrieve list of trending games
  useEffect(() => {
        axios.get('http://localhost:3000/trending')
      .then(response => {
        setGames(response.data.results);
      });
  }, []);

  useEffect(() => {
    console.log(games);
  }, [games]);


  return (
    <div>
      <div className="trending-games">
          <h2 className="title-trending">Trending Games</h2>
        <div className="container">
          {games.map(game => (
            <Game 
              key={game.id}
              id={game.id}
              img={game.background_image}
              name={game.name}
              genres={game.genres}
              release_date={game.released}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingGames;
