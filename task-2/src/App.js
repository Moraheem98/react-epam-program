import React from 'react'

import { UpperContainer } from './containers/UpperContainer'
import { LowerContainer } from './containers/LowerContainer'
import { ErrorBoundary } from './components/ErrorBoundary'

import './app.css'

const App = function () {
	return (
		<div>
			<ErrorBoundary>
				<UpperContainer />
				<LowerContainer />
			</ErrorBoundary>
		</div>
	)
}

export default App
