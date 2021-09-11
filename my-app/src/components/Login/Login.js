import React from 'react';
import './Login.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


async function loginUser(email, password) {

    const url = "http://localhost:3333/login";

    const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email: email, password, password })
    }

    let response = await fetch(url, requestOptions);
   let token = await response.json();
   console.log(token);
   localStorage.setItem("token", token.accessToken);

    // fetch(url, requestOptions)
    // .then(response => {
    //     if(response.status === 400) {
    //         alert("try again");
    //     }
    //     return response.json()
    // }).then(response=> {
    //     console.log(response);
    // })
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    async submitHandler(event) {
        event.preventDefault();
        console.log(this.state);
        await loginUser(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="login">
                <Header title="Login Page" showItems={false} />
                <div className="loginbox">
                    <input className="username" type="text" value={this.state.email} onChange={this.emailHandler} placeholder="Email"></input>
                    <input className="pasword" type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="password"></input>
                    <button className="btn" type="submit" onClick={this.submitHandler.bind(this)}>Login</button>

                </div>
                <Footer />
            </div>
        )
    }

}

export default LoginForm;
