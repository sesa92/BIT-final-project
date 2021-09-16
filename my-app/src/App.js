import { React, Fragment, useState  } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./src/pages/Login/Login.js"
import { loginUser } from "./components/Pages/Login"

const App = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangingEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangingPassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    const token = async () => {
      const data = await loginUser(email, password);
      sessionStorage.setItem("token", data.accessToken);
      setToken(data.accessToken);
     
    };
    token();
    setEmail("");
    setPassword("");
    e.preventDefault(); 
  };

  if (!token === "undefined") {
    return (
      <Fragment>
        <Login
         submit={submit}
         email={email}
         password={password}
         onChangeEmail={onChangingEmail}
         onChangePassword={onChangingPassword}
         />
      </Fragment>
    );
  }
  return (
    <BrowserRouter>
      <Fragment>
        <Header/>
        <Switch>
          <Route exact path={"/"} component={Home} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;