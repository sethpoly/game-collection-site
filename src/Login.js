import React, {useEffect, useState} from 'react';
import './Login.css';
import './Nav.css';
import {Link} from 'react-router-dom';

function Login() {

    // State to determine whether to render SIGN UP page or LOGIN page
    // {0 is SIGN UP, 1 is LOGIN}
    const [pageType, setPageType] = useState(0);

  return (
    <div>
        <div className="nav-stripped">
            <a className="logo-image">Logo</a>
            <Link to="/">
              <a className="btn-return">&#10005;</a>
            </Link>
        </div>
        <div className="login-container"> 
            <h1 className="header-title">{pageType ? 'Welcome Back' : 'Start Collecting'}.</h1>
            {pageType ? null : <input className="input-login" type="text" placeholder="Username"></input>}
            <input className="input-login" type="text"placeholder="Email"></input>
            <input className="input-login" type="text"placeholder="Password"></input>
            <button className="btn-submit">{pageType ? 'LOGIN' : 'SUBMIT'}</button>
            {pageType ? <p>Don't have an account? 
            <a className="toggle-login" onClick={() => setPageType(!pageType)}> Sign Up.</a></p> : <p className="text-white">Have an account? 
            <a className="toggle-login" onClick={() => setPageType(!pageType)}>  Login.</a></p>}
        </div>
    </div>
  );
}

export default Login;
