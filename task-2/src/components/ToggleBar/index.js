import React from 'react';

import './index.css'

export const ToggleBar = () => {
    return (
        <div className="toggleBarContainer">
            <ul>
                <li>
                    All
                </li>
                <li>
                    Action
                </li>
                <li>
                    Documentary
                </li>
                <li>
                    Crime
                </li>
                <li>
                    Horror
                </li>
            </ul>
        </div>
    )
};