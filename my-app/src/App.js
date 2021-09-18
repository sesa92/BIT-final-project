import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";

import LoginForm from './Pages/Login/Login';
import { Candidates } from "./Pages/Candidates/Candidates";

import './App.css';
import CandidateReport from './Pages/CandidateReports/CandidateReport';


function App() {
  let history = useHistory();
  if (!sessionStorage.getItem("token")) {
    history.push("/login");
  } else {
    history.push('/');
  }

  return (
    <Switch>
      <Route exact path='/login'>
        <LoginForm />
      </Route>
      <Route exact path="/">
        <Candidates />
      </Route>
      <Route exact path="/candidate-report/:id">
        <CandidateReport />
      </Route>
    </Switch>
  );
}
export default App;
