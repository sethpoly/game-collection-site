import React, { useEffect, useCallback, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './GameHeading.css';
import axios from 'axios';


// The title and description of a specific game
function GameHeading({name, description}) {

    const [gameDesc, setGameDesc] = useState('');

    if(description != undefined){
        //console.log(extractHTML(description));
    }


  return (
    <div>
        {ReactHtmlParser(description)}
    </div>
  );
}

export default GameHeading;
