import React from 'react';
import './SearchField.css'

function SearchField( {searchText, setSearchText}) {

    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
      }
      
    return (
        <div>
          <div className="searchBar d-flex justify-content-end mb-2"> 
            <input
              className="form-control w-25"
              onChange={handleInput}
              type="text"
              value={searchText}
              placeholder="Search User"
            />
          </div>
        </div>
      );
    
};

export default SearchField;

