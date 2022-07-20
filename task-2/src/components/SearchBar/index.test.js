import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fireEvent, render, screen } from '@testing-library/react';

const { SearchBar } = require('./index.js');
describe('Search component', () => {
	const initialState = { output: 10 };
	const mockStore = configureStore();
	let store;
	beforeAll(() => {
		store = mockStore(initialState);

		render(
			<Provider store={store}>
				<SearchBar />
			</Provider>,
		);
	});

	it('should have the right message in the dom', () => {
		const message = 'FIND YOUR MOVIE';
		expect(screen.getByText(message)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		let { asFragment } = render(
			<Provider store={store}>
				<SearchBar />
			</Provider>,
		);
		expect(asFragment(<SearchBar />)).toMatchSnapshot();
	});

	it('should simulate input', async () => {
		const { getByPlaceholderText } = render(
			<Provider store={store}>
				<SearchBar />
			</Provider>,
		);
		const inputID = getByPlaceholderText('Search any Movie...');
		fireEvent.change(inputID, { target: { value: 'ok' } });
	});
});
