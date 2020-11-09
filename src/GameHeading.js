import React, { useEffect, useCallback, useState } from 'react';
import './GameHeading.css';
import axios from 'axios';


// The title and description of a specific game
function GameHeading({name, background_img}) {
  return (
    <div className="detail-heading-container">
       <div className="img-container"> 
        <img className="gameImg"src={background_img}></img>
       </div>
       <div className="container-overlay">
        <h1 className="game-title">{name}</h1>


       </div>
    </div>
  );
}

export default GameHeading;
