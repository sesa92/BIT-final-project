import React from "react";
import { Link } from "react-router-dom";


//import "./CandidateCard.css";

export default function CandidateCard(props) {
const { id, name, image, email } = props.candidate;

return (
  <div className="container">
    <div className="card text-center scale pt-2 mb-2">
        <Link to={
            {
                pathname: `candidate-report/${id}`,
                candidate: props.candidate
            }
        }>
            <img className="card-img" src={image} alt="" />
            <h4 className="card-text color-dark my-2"> {name} </h4>
            <p className="text-muted"> {email} </p>
        </Link>
  </div>
</div>
);


};

