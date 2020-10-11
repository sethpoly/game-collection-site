import React from 'react';
import './TrendingGames.css';
import Nav from './Nav';
import GameGallery from './GameGallery';
import {Link} from 'react-router-dom';

function TrendingGames() {
  return (
    <div>
      <div className="trending-games">
          <h2 className="title-trending">Trending Games</h2>
        <GameGallery/>
      </div>
    </div>
  );
}

export default TrendingGames;
