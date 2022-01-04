import React, { Component } from 'react'

export class ErrorBoundary extends Component {
	state = { hasError: false, error: null }

	static getDerivedStateFromError(error) {
		return { hasError: true, error }
	}

	componentsDidCatch(error, errorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <h1>oops, something went wrong</h1>
		}
		return this.props.children
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.element.isRequired,
}
