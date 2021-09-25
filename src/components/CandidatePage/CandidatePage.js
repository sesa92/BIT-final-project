import React from "react";
import { useState } from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import SearchField from "../SearchField/SearchField";
import NoResult from "../NoResults/NoResults"

function CandidatePage(props) {
  const [searchText, setSearchText] = useState("");
  

  const filtered = props.candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchText.trim())
  );
  if (filtered === 0) {
    return(
      <div>
        <SearchField searchText={searchText} setSearchText={setSearchText} />
        <NoResult />
      </div>
    )
  }
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
