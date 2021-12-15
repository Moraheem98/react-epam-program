import React from 'react'

import { Counter } from '../../components/Counter';
import { SearchForm } from '../../components/SearchForm';

export const LowerContainer = () => {
    return (
        <div className="container">
            <Counter />
            <SearchForm />
        </div>
    );
};

