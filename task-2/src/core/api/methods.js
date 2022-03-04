import { API_CONFIG } from './config';

export const requestMovies = async () => {
	const { baseUrl, moviesEndpoint } = API_CONFIG;
	const apiLink = `${baseUrl}${moviesEndpoint}?limit=12`;
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
