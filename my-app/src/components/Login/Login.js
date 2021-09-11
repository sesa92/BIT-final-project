import React, {} from 'react';
import './Login.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function LoginForm (){
    return (
        <div className="login">
            <Header title="Login Page" showItems={false}/>
            <div className="loginbox">
                <input className="username" type="text" placeholder="username"></input>
                <input className="pasword" type="text"  placeholder="password"></input> 
                <button className="btn" type="submit">Login</button>
                <Footer/>
            </div>
            
        </div>
    )
}

