export const selectedMovieSelector = (state) =>
	state.switchBanner.selectedMovie;

export const allLoadedMoviesSelector = (state) => state.allMovies.allMovies[0];

// export const movieFilterSelector = (state) => {
// 	console.log(state);
// 	return state.movieFilter;
// };
