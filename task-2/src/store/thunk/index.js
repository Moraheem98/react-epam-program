import {
	requestMovies,
	requestMoviesByTitle,
	requestMoviesByDate,
	requestMoviesByRating,
} from '../../core/api/methods';

import { setMovies } from '../actionCreators';

export const fetchMovies = () => async (dispatch) => {
	const movies = await requestMovies();
	dispatch(setMovies(movies));
};

export const moviesSortedByTitle = () => async (dispatch) => {
	const movies = await requestMoviesByTitle();
	dispatch(setMovies(movies));
};

export const moviesSortedByDate = () => async (dispatch) => {
	const movies = await requestMoviesByDate();
	dispatch(setMovies(movies));
};

export const moviesSortedByRating = () => async (dispatch) => {
	const movies = await requestMoviesByRating();
	dispatch(setMovies(movies));
};
