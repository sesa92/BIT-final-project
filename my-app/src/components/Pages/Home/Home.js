import React, { useState, useEffect, Fragment } from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer";
import serviceCandidates from "../../../service/serviceCandidates.js";
//import CandidateCard from "../../Card/CandidateCard";
import "./Home.css";

function Home() {
  const token = sessionStorage.getItem("token");
  const [candidates, setCandidates] = useState([]);

 
  const onGetCandidates = () => {
    const get = async () => {
      const onGetCandidates = await serviceCandidates(token);
      setCandidates(onGetCandidates);
    };
    get();
}


  useEffect(() => {
    onGetCandidates();
  }, []);

  console.log(candidates);

  return(
    <Fragment>
      <Header title="Interview reports" showItems={true}/>
        {/* <CandidateCard candidates={candidates} /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;