import { Fragment } from 'react';
import './App.css';
import { CandidatesList } from "./components/CandidatesList/CandidatesList";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Fragment>
    <Header />
     <CandidatesList />



    <Footer />
      
    </Fragment>
  );
}

export default App;
