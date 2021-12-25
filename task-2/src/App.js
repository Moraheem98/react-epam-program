import React from 'react';

import { UpperContainer } from './containers/UpperContainer';
import { LowerContainer } from './containers/LowerContainer';
import ErrorBoundary from './components/ErrorBoundary';

import './app.css'

function App() {
  return (
    <div>
      <ErrorBoundary>
        <UpperContainer />
        <LowerContainer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
