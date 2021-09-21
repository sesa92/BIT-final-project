import { React, Fragment, useState  } from "react";
//import Footer from "./components/Footer/Footer";
//import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import  Login  from "./components/Pages/Login/Login"


const App = () => {
  // let history = useHistory();
  //   if (!sessionStorage.getItem("token")) {
  //    history.push("/login");
  //  } else {
  //    history.push('/home');
  // }
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  

  //if (!token === "undefined") {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
    );
  }
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