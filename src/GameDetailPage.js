import React, { useEffect, useCallback, useState } from 'react';
import './Home.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import axios from 'axios';

function GameDetailPage(props) {

  // Retrieve the id for the game selected
  const gameId = props.match.params.id;
  const [game, setGame] = useState(0);

   // Retrieve list of trending games
   useEffect(() => {
    axios.get(`http://localhost:3000/games/${gameId}`)
  .then(response => {
    setGame(response.data);

  });
}, []);

useEffect(() => {
console.log(game);
}, [game]);

  return (
    <div>
      <Nav/>
    </div>
  );
}

export default GameDetailPage;
