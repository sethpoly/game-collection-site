import React, {useEffect, useState} from 'react';
import './GameGallery.css';
import Genre from './Genre';

function Game({img, name, genres}) {

  return (
    <div className="item">
        <a href="#item1">
            <img src={img}></img></a>
          <h3 className="title-game">{name}</h3>
          <p className="heading-genre">Genres:</p>
          {genres.map(genre => (
            <Genre 
            name={genre.name}
            />
          ))}
    </div>
  );
}

export default Game;
