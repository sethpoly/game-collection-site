import React, { useEffect, useCallback, useState } from 'react';
import './GameHeading.css';
import axios from 'axios';


// The title and description of a specific game
function GameHeading({name, background_img}) {
   //const [gameDesc, setGameDesc] = useState('');

    // if(description != undefined){
    //     //console.log(extractHTML(description));
    // }


  return (
    <div className="container">
       <h1 className="gameTitle">{name}</h1>
       <img className="gameImg"src={background_img}></img>
    </div>
  );
}

export default GameHeading;
