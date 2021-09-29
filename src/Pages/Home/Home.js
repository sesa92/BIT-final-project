import React, { useState, useEffect, Fragment } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer";
import { candidates as candidateService } from "../../service/candidates";
import CandidatePage from "../CandidatePage/CandidatePage";
import "./Home.css";

function Home() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const onGetCandidates = async () => {
        const token = sessionStorage.getItem("token");
        const getCandidates = await candidateService(token);
        setCandidates(getCandidates);
      };
    onGetCandidates();
  }, []);
  console.log(candidates)
  return (
    <Fragment>
      <Header title="Interview reports" showItems={true} />
      <CandidatePage candidates={candidates} />
      <Footer />
    </Fragment>
  );
}

export default Home;
