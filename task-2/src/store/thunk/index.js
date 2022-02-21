import { moviesApiLink } from '../apiUrl';

import { setMovies } from '../actionCreators';

import { SET_MOVIES } from '../actionTypes';

export const fetchMovies = () => async (dispatch) => {
	const apiLink = moviesApiLink();
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	dispatch(setMovies(moviesData.data));
	console.log(moviesData.data);
};

export const moviesSortedByTitle = () => async (dispatch) => {
	const apiLink = `${moviesApiLink()}&sortBy=title&sortOrder=asc`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	console.log('checkAction', moviesData);
	dispatch({
		type: SET_MOVIES,
		payload: moviesData.data,
	});
};

export const moviesSortedByDate = () => async (dispatch) => {
	const apiLink = `${moviesApiLink()}&sortBy=release_date&sortOrder=desc`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	console.log('checkAction', moviesData);
	dispatch({
		type: SET_MOVIES,
		payload: moviesData.data,
	});
};

export const moviesSortedByRating = () => async (dispatch) => {
	const apiLink = `${moviesApiLink()}&sortBy=vote_average&sortOrder=desc`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	console.log('checkAction', moviesData);
	dispatch({
		type: SET_MOVIES,
		payload: moviesData.data,
	});
};
