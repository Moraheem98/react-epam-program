import React, { useState } from "react";

import movieData from '../Movie/data.js'
import './index.css'; 

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const filterHandler = (value) => {
        if (searchTerm === "") {
            return value
        } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value
        }
    };

    const mapHandler = (value) => {
        return ( <div>{value.title}</div>
        )
    };

    const searchHandler = e => {setSearchTerm(e.target.value)}

    // const renderSearchTerms = movieData.filter(filterHandler).map(mapHandler)

    return (
        <div className="searchContainer">
            <h2>FIND YOUR MOVIE</h2>
            <input placeholder="Search any Movie..." onChange={searchHandler} />
            <button>Search</button>
            {/* {renderSearchTerms} */}
        </div>
    )
};
