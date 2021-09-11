import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";

import LoginForm from './Pages/Login/Login';
import { Candidates } from "./Pages/Candidates/Candidates";

import './App.css';


function App() {
  let history = useHistory();
  if (!localStorage.getItem("token")) {
    history.push("/login");
  } else {
    history.push('/');
  }

  return (
    <Switch>
      <Route exact path='/login'>
        <LoginForm />
      </Route>
      <Route path="/">
        <Candidates />
      </Route>
    </Switch>
  );
}
export default App;
