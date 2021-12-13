import React, { useState } from "react";

import JSONDATA from './data.json'

export const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const filterHandler = (value) => {
        if (searchTerm === "") {
            return value
        } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value
        }
    };

    const mapHandler = (value) => {
        return ( <div>{value.name}</div>
        )
    };

    const searchHandler = e => {setSearchTerm(e.target.value)}

    const renderSearchTerms = JSONDATA.filter(filterHandler).map(mapHandler)

    return (
        <>
            <input placeholder="Search any Movie..." onChange={searchHandler} />
            <button>Search</button>
            {renderSearchTerms}
        </>
    )
};
