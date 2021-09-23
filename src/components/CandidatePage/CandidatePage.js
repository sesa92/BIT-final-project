import React from "react";
import { useState } from "react";
import CandidateCard from "../CandidatePage/CandidatePage";
import SearchField from "../SearchField/SearchField";


function CandidatePage({ candidates }) {
console.log(candidates)
  const [searchText, setSearchText] = useState('');
    if(!candidates) return <h1>No DAta </h1>
  return (
    <div className="container">
      <SearchField searchText={searchText} setSearchText={setSearchText} />
      <div className="row">
        {candidates.filter((candidate) => candidate.name.toLowerCase().includes(searchText.trim())).map((candidate, index) => <CandidateCard className="card user-card" candidate={candidate} key={index} />)}
      </div>
    </div>
  );
}

export default CandidatePage;