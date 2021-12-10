import React from "react";
import './index.css';

export const SearchForm = () => (
    <>
            <input
            type="text"
            id="header-search"
            placeholder="Search any Movie..."
        />
        <button type="submit">Search</button>
    </>
);