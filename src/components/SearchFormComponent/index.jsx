import React from "react";
import { useState } from 'react'
import JSONDATA from './data.json'

export const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
    <>
        <input type="text" placeholder="Search any Movie..." onChange={event => {setSearchTerm(event.target.value)}} />
        <button type="submit">Search</button>
        {JSONDATA.filter((val)=> {
            if (searchTerm === "") {
                return val
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((val, key) => {
            return <div> {val.name} </div>
        })}
    </>
    );
};