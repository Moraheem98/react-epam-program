import { moviesReducer } from '../moviesReducer';

describe('Movies Reducer', () => {
	test('test action type as SET_MOVIES', () => {
		const state = {
			allMovies: [],
		};
		const action = {
			type: 'SET_MOVIES',
			payload: ['ABC', 'DEF'],
		};
		const data = moviesReducer(state, action);
		expect(data.allMovies).toEqual(['ABC', 'DEF']);
	});
});
