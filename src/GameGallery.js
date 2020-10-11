import React, {useEffect, useState} from 'react';
import './GameGallery.css';
import {Link} from 'react-router-dom';

function GameGallery() {

  return (
    <div>
        <div className="container">
            <a href="#item1" className="item">
                <img src="https://placeimg.com/640/480/animals"></img></a>
            <a href="#item2" className="item">
                <img src="https://placeimg.com/640/480/animals"></img></a>
            <a href="#item3" className="item">
                <img src="https://placeimg.com/640/480/animals"></img></a>
            <a href="#item4" className="item">
                <img src="https://placeimg.com/640/480/animals"></img></a>
            <a href="#item4" className="item">
                <img src="https://placeimg.com/640/480/animals"></img></a>
        </div>
    </div>
  );
}

export default GameGallery;
