import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import logo from './logo.png';
import { auth, provider } from './firebase';

function Login() {
    const signIn =(e)=>{
        auth.signInWithPopup(provider)
        .catch(error=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="logo"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    
    )
}

export default Login
