import React from 'react';
import './Home.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';

function HomeDefault() {
  return (
    <div>
      <div className="home-header-container">
          <h1 className="header-title">What's on your shelf?</h1>
          <h2 className="subheader-title"><span 
              style={{color:'var(--red-color)'}}>[Insert Name]. </span> 
              A simple video-game tracker.</h2>
          <Link to="/Login">
            <button className="btn-signup">SIGN UP</button>
          </Link>
      </div>
    </div>
  );
}

export default HomeDefault;
