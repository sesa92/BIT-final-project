import { Link } from "react-router-dom";
import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { withRouter } from 'react-router-dom';
import "./Login.css";
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.loginUser = this.loginUser.bind(this);

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
        await this.loginUser(this.state.email, this.state.password);
    }

    async loginUser(email, password) {

        const url = "http://localhost:3333/login";

        const requestOptions = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email: email, password: password })
        }


        let response = await fetch(url, requestOptions);
        let token = await response.json();

        console.log("from login", token);
        sessionStorage.setItem("token", token.accessToken);
        this.props.history.push('./home');
    }

    render() {
        return (
            <div className="login">
                <Header title="Login Page" showItems={false} />
                <div className="loginbox">
                    <input className="username" type="text" value={this.state.email} onChange={this.emailHandler} placeholder="Email" />
                    <input className="pasword" type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="password" />
                    <button className="btn" type="submit" onClick={this.submitHandler}>Login</button>
                </div>
                <Link to="/">
                        <button>Interview reports</button>
                    </Link>
                <Footer />
            </div>
        )
    }

}

export default withRouter(Login);