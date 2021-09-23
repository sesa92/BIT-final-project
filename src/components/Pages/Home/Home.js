import React, { useState, useEffect, Fragment } from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer";
import serviceCandidates  from "../../../service/serviceCandidates.js";
import CandidatePage from "../../CandidatePage/CandidatePage";
import "./Home.css";

function Home() {
  const token = sessionStorage.getItem("token");
  const [candidates, setCandidates] = useState([]);

 
  const onGetCandidates = () => {
    const get = async () => {
      const getCandidates = await serviceCandidates(token);
      setCandidates(getCandidates);
    };
    get();
}
  useEffect(() => {
    onGetCandidates();
  }, []);

  console.log(token, candidates);
  

  return(
    <Fragment>
      <Header title="Interview reports" showItems={true} />
      <CandidatePage candidates={candidates} />
      <Footer />
    </Fragment>
  );
};

export default Home;