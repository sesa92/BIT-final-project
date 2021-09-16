import React, { useState, useEffect, Fragment } from "react";
import { candidates } from "../../../service/candidates";
import Card from "../../Card/Card";
import "./home.css";

const Home = () => {
  const token = sessionStorage.getItem("token");
  const [candidates, setCandidates] = useState([]);
  const [value, setValue] = useState("");
  const getCandidates = () => {
    const get = async () => {
      const getCandidates = await candidates(token);
      setCandidates(getCandidates);
    };
    get();
  };
  useEffect(getCandidates, [token]);
  const onChange = (item) => {
    setValue(item.target.value);
  };
  return (
    <Fragment>
      <Card candidates={candidates} value={value} search={onChange} />
    </Fragment>
  );
};

export default Home;