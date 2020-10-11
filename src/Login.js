import React, {useEffect, useState} from 'react';
import './Login.css';
import './Nav.css';

function Login() {

    // State to determine whether to render SIGN UP page or LOGIN page
    // {0 is SIGN UP, 1 is LOGIN}
    const [pageType, setPageType] = useState(0);

  return (
    <div className="login-page">
        <div className="nav-stripped">
            <a className="logo-image">Logo</a>
            <a className="btn-return">&#10005;</a>
        </div>
        <div className="login-container"> 
            <h1 className="header-title">{pageType ? 'Welcome Back' : 'Start Collecting'}.</h1>
            {pageType ? null : <input className="input-login" type="text" placeholder="Username"></input>}
            <input className="input-login" type="text"placeholder="Email"></input>
            <input className="input-login" type="text"placeholder="Password"></input>
            <button className="btn-submit">SUBMIT</button>
            {pageType ? <p classname="text-white">Don't have an account? 
            <a> Sign Up.</a></p> : <p classname="text-white">Have an account? 
            <a> Login.</a></p>}
        </div>
    </div>
  );
}

export default Login;
