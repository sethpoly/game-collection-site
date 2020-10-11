import React from 'react';
import './Home.css';
import Nav from './Nav';
import GameGallery from './GameGallery';
import {Link} from 'react-router-dom';
import HomeDefault from './HomeDefault';
import TrendingGames from './TrendingGames';
import TripleInfoBox from './TripleInfoBox';

function Home() {
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
