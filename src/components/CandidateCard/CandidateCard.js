import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../utils/avatar.png"
import "./CandidateCard.css";



export default function CandidateCard(props) {
  const { id, name, email } = props.candidate;

  return (
    <div className="gutter">
    <div className="card text-center scale pt-2 mb-2">
        <Link to={`candidate-report/${id}`}>
          <div>
            <img className="card-img" src={avatar} alt="" />
          </div>
            <h5 className="card-text color-dark my-2"> {name} </h5>
            <p className="text"> {email} </p>
        </Link>
    </div>
</div>
  );
}
