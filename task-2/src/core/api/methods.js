import { API_CONFIG } from './config';

export const requestMovies = async () => {
	const { baseUrl, moviesEndpoint } = API_CONFIG;
	const apiLink = `${baseUrl}${moviesEndpoint}?limit=12`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	return moviesData.data;
};

export const requestMovie = async (id) => {
	const { baseUrl, moviesEndpoint } = API_CONFIG;
	const apiLink = `${baseUrl}${moviesEndpoint}/${id}`;
	const apiData = await fetch(apiLink);
	const movieData = await apiData.json();
	return movieData;
};

export const requestMoviesByGenre = async (movie_genre) => {
	const { baseUrl, moviesEndpoint } = API_CONFIG;
	const apiLink = `${baseUrl}${moviesEndpoint}?searchBy=genres&filter=${movie_genre}`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	return moviesData.data;
};

export const requestMoviesByTitle = async () => {
	const { baseUrl, moviesEndpoint } = API_CONFIG;
	const apiLink = `${baseUrl}${moviesEndpoint}?sortBy=title&sortOrder=asc`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	return moviesData.data;
};

export const requestMoviesByDate = async () => {
	const { baseUrl, moviesEndpoint } = API_CONFIG;
	const apiLink = `${baseUrl}${moviesEndpoint}?sortBy=release_date&sortOrder=desc`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	return moviesData.data;
};

export const requestMoviesByRating = async () => {
	const { baseUrl, moviesEndpoint } = API_CONFIG;
	const apiLink = `${baseUrl}${moviesEndpoint}?sortBy=vote_average&sortOrder=desc`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	return moviesData.data;
};

export const requestMoviesBySearch = async (movie_name) => {
	const { baseUrl, moviesEndpoint } = API_CONFIG;
	const apiLink = `${baseUrl}${moviesEndpoint}?search=${movie_name}&searchBy=title`;
	const apiData = await fetch(apiLink);
	const moviesData = await apiData.json();
	return moviesData.data;
};

export const restRequest = async (payload, method, endPoint) => {
	const { baseUrl } = API_CONFIG;

	try {
		const apiLink = `${baseUrl}${endPoint}`;

		await fetch(apiLink, {
			method: method,
			body: payload ? JSON.stringify(payload) : null,
			headers: {
				'content-type': 'application/json',
			},
		});
	} catch (error) {}
};

export const addMovieRequest = async (movie) => {
	const { moviesEndpoint } = API_CONFIG;
	await restRequest(movie, 'POST', moviesEndpoint);
};

export const editMovieRequest = async (movie) => {
	const { moviesEndpoint } = API_CONFIG;
	await restRequest(movie, 'PUT', moviesEndpoint);
};
export const deleteMovieRequest = async (movie) => {
	const { moviesEndpoint } = API_CONFIG;
	const URL = `${moviesEndpoint}/${movie.id}`;
	await restRequest(null, 'DELETE', URL);
};
