import React, {useEffect, useState} from 'react';
import './GameGallery.css';
import './Game.css';
import Genre from './Genre';
import { Link } from 'react-router-dom';
import add_icon from './Images/icon-add.svg';

function Game({id, img, name, genres, release_date}) {

  return (
    <div className="item">
      <Link to= {{pathname: `/gamedetailpage/${id}`}}>
        <a>
          <img src={img}></img>
        </a>
      </Link>
          <h3 className="title-game">{name}</h3>

          <input type='submit' value="Add" className="icon-btn-add"/>

          <div className="detail-row">
            <p className="detail-heading">Genres:</p>
            {genres.map(genre => (
              <Genre 
              key={genre.id}
              name={genre.name}
              />
            ))}
          </div>
            
          <div className='detail-row'>
            <p className="detail-heading">Release Date:</p>
            <p className="detail-value">{formatDateToString(release_date)}</p>
          </div>

    </div>
  );
}

// Change the displayed date to mon dd, yyyy format
const formatDateToString = (date) => {
  let options = {month: 'short', day: 'numeric', year: 'numeric'};

  let parts = date.split('-');
  let newDate = new Date(parts[0], parts[1] - 1, parts[2]);

  let formattedDate = newDate.toLocaleDateString("en-US", options);
  return formattedDate;
}

export default Game;
