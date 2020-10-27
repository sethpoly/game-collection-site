import React, { useEffect, useCallback, useState } from 'react';
import './GameHeading.css';
import axios from 'axios';


// The title and description of a specific game
function GameHeading({name, background_img}) {
  return (
    <div className="detail-heading-container">
       
       <img className="gameImg"src={background_img}></img>
    </div>
  );
}

export default GameHeading;
