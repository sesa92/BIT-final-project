import React from "react";
import { Link } from "react-router-dom";

import "./CandidateCard.css";

export default function CandidateCard(props) {
  const { id, name, avatar, email } = props.candidate;

  return (
    <div className="container">
      <div className="card text-center scale pt-2 mb-2">
        <Link
          to={{
            pathname: `candidate-report/${id}`,
            state: {
              candidate: props.candidate,
            },
          }}
        >
          <img className="card-img" src={avatar} alt="" />
          <h4 className="card-text color-dark my-2"> {name} </h4>
          <p className="text-muted"> {email} </p>
        </Link>
      </div>
    </div>
  );
}
