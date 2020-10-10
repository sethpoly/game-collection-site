import React from 'react';
import './Home-header.css';

function Home_header() {
  return (
    <div className="home-header-container">
        <h1 className="header-title">What's on your shelf?</h1>
        <h2 className="subheader-title"><span 
            style={{color:'var(--red-color)'}}>[Insert Name]. </span> 
            A simple video-game tracker.</h2>
        <button className="btn-signup">SIGN UP</button>
    </div>
  );
}

export default Home_header;
