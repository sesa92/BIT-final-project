import React from "react";

function NoResults(props) {
    const message = () => {
        if(props.message) {
            props.message;
        } else {
            "Error"}
        }

    return (
        <div className="text center m-5">
            <h3 className="display-4">{message}</h3>
        </div>
    );
}

export default { NoResults };