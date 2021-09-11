import { Fragment } from 'react';
import './App.css';
import {useHistory} from 'react-router-dom'

import LoginForm  from './components/Login/Login';

function App() {
  let history = useHistory();
  if(!localStorage.getItem("token")) {
    //history.push("/login");
  }
  
  return (
    <Fragment>
      <LoginForm />
      
    </Fragment>
  );
}
export default App;
