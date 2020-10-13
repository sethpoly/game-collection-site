import React, {useEffect, useState} from 'react';
import './GameGallery.css';
import {Link} from 'react-router-dom';

function Game({img}) {

  return (
    <div>
        <a href="#item1" className="item">
            <img src={img}></img></a>
    </div>
  );
}

export default Game;
