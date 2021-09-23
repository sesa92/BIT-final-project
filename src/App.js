import { React, useState } from "react";
import Home from "./components/Pages/Home/Home";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import CandidateReport from "./Pages/CandidateReports/CandidateReport";

const App = () => {
  const [token] = useState(sessionStorage.getItem("token"));

  let history = useHistory();
  if (!token) {
    history.push("/login");
  } else {
    history.push("/home");
  }

  return (
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/candidate-report/:id">
          <CandidateReport />
        </Route>
      </Switch>
  );
};

export default App;
