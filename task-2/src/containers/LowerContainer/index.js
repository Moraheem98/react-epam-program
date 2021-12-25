import React from 'react';

import { MovieList } from '../../components/MoviesList';
import { ToggleBar } from '../../components/ToggleBar';
import './index.css';

export const LowerContainer = () => {
    return (
        <div className="lowerContainer">
            <ToggleBar />
            <MovieList />
        </div>
    );
};