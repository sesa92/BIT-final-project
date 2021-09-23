import React from "react";
import { useState } from "react";
import CandidateCard from "../Card/CandidateCard";
import SearchField from "../SearchField/SearchField";

function CandidatePage(props) {
  const [searchText, setSearchText] = useState("");
  

  const filtered = props.candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchText.trim())
  );

  return (
    <div className="container">
      <SearchField searchText={searchText} setSearchText={setSearchText} />
      <div className="row">
        {filtered.map((candidate, index) => (
          <CandidateCard
            className="card user-card"
            candidate={candidate}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CandidatePage;
