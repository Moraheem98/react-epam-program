import React from 'react'

export const SearchButton = ({ setSelectedMovie }) => {
    return (
        <>
            <button onClick={() => setSelectedMovie(null)}>search again</button>
        </>
    )
};
