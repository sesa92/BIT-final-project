import React from 'react';
import './SearchField.css'

export default SearchField = (props) => {
    return(
        <div className="container d-flex align-items-center bar">
        <input type="search" placeholder="Search" value={props.value} onChange={props.search}  className="form-control"/>
        </div>
    )
};
