import {
	requestMovies,
	requestMoviesByTitle,
	requestMoviesByDate,
	requestMoviesByRating,
	editMovieRequest,
	addMovieRequest,
	deleteMovieRequest,
	requestMoviesBySearch,
	requestMovie,
	requestMoviesByGenre,
} from '../../core/api/methods';

import { setMovie, setMovies } from '../actionCreators';

export const fetchMovies = () => async (dispatch) => {
	const movies = await requestMovies();
	dispatch(setMovies(movies));
};

export const fetchMovie = (id) => async (dispatch) => {
	const movie = await requestMovie(id);
	dispatch(setMovie(movie));
};

export const fetchMoviesByGenre = (movie_genre) => async (dispatch) => {
	const movies = await requestMoviesByGenre(movie_genre);
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

export const fetchMoviesBySearch = (movie_name) => async (dispatch) => {
	const movies = await requestMoviesBySearch(movie_name);
	dispatch(setMovies(movies));
};

export const addMovie = (movie) => async (dispatch) => {
	await addMovieRequest(movie);
	dispatch(fetchMovies());
};

export const editMovie = (movie) => async (dispatch) => {
	await editMovieRequest(movie);
	dispatch(fetchMovies());
};

export const deleteMovie = (movie) => async (dispatch) => {
	await deleteMovieRequest(movie);
	dispatch(fetchMovies());
};
