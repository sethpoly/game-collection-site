import React from 'react';
import './Nav.css';
import search_icon from './Images/search-icon.png';

function Nav() {
  return (
    <div className="nav-bar">
        <div className="logo-image">
            <a href="#">Logo</a>
        </div>
        <div class="search-container">
            <input id="nav-search" type="text" placeholder="Search"></input>
            <img className="logo-search" src={search_icon}></img>
        </div>
        
        <a id="login-btn" href="#">LOGIN</a>
        <a classname="nav-item" href="#">ABOUT</a>
    </div>
  );
}

export default Nav;