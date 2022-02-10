export const allLoadedMovies = () => async (dispatch) => {
	const apiLink = 'http://localhost:4000/movies?limit=10';
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	dispatch({
		type: ALL_LOADED_MOVIES,
		payload: moviesData.data,
	});
};
