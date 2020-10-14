import React from 'react';
import './Genre.css';

function Genre({name}) {

  return (
    <div className="genre-container">
       <p className="genre-name">{name}</p>
    </div>
  );
}

export default Genre;
