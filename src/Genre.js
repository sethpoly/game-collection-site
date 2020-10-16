import React from 'react';
import './Game.css';

function Genre({name}) {

  return (
    <div className="genre-container">
       <p className="detail-value">{name}</p>
    </div>
  );
}

export default Genre;
