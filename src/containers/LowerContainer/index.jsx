import React from 'react'
import { Counter } from '../../components/CounterComponent';
import { SearchForm } from '../../components/SearchFormComponent';
import { Movies } from '../../components/MoviesComponent';

export const LowerContainer = () => {
    return (
        <div className="container">
            <Counter />
            <SearchForm />
            <Movies />
        </div>
    );
};

