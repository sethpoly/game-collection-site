import React from 'react';
import './Nav.css';
import search_icon from './Images/search-icon.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div className="nav-bar">
        <div className="logo-image">
          <Link to="/">
            <a>Logo</a>
          </Link>
        </div>
        <div class="search-container">
            <input id="nav-search" type="text" placeholder="Search"></input>
            <img className="logo-search" src={search_icon}></img>
        </div>
        <Link to="/Login">
          <a id="login-btn">LOGIN</a>
        </Link>
        <a className="nav-item" href="#">ABOUT</a>
      </div>
    </div>
  );
}

export default Nav;