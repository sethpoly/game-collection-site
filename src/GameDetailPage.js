import React, { useEffect, useCallback, useState } from 'react';
import './Home.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import axios from 'axios';



function GameDetailPage(props) {

  // Retrieve the id for the game selected
  const gameId = props.match.params.id;
  console.log(gameId);

  return (
    <div>
      <Nav/>
    </div>
  );
}

export default GameDetailPage;
