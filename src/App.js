import { React, useState } from "react";
//import Footer from "./components/Footer/Footer";
//import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./components/Pages/Login/Login";

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
      </Switch>
  );
};
// return (
//   <BrowserRouter>
//     <Fragment>
//       <Header/>
//       <Switch>
//         {/* <Route exact path={"/home"} component={Home} /> */}
//         {/* <Route exact path={"/"} component={Home} /> */}
//       </Switch>
//       <Footer />
//     </Fragment>
//   </BrowserRouter>
// );
//};

export default App;
