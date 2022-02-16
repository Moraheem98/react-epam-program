import { moviesApiLink } from '../apiUrl';

import { setMovies } from '../actionCreators';

import {
	MOVIES_SORTED_BY_TITLE,
	MOVIES_SORTED_BY_DATE,
	MOVIES_SORTED_BY_RATING,
} from '../actionTypes';

export const fetchMovies = () => async (dispatch) => {
	const apiLink = moviesApiLink();
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	dispatch(setMovies(moviesData.data));
};

export const moviesSortedByTitle = () => async (dispatch) => {
	const apiLink = `${moviesApiLink()}?sortOrder=asc&sortBy=title`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	dispatch({
		type: MOVIES_SORTED_BY_TITLE,
		payload: moviesData.data,
	});
};

export const moviesSortedByDate = () => async (dispatch) => {
	const apiLink = `${moviesApiLink()}?sortOrder=asc&sortBy=release_date`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	dispatch({
		type: MOVIES_SORTED_BY_DATE,
		payload: moviesData.data,
	});
};

export const moviesSortedByRating = () => async (dispatch) => {
	const apiLink = `${moviesApiLink()}?sortOrder=asc&sortBy=vote_average`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	dispatch({
		type: MOVIES_SORTED_BY_RATING,
		payload: moviesData.data,
	});
};
