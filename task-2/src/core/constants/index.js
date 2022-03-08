export const dropdownOptions = [
	{ label: 'genre', value: 'genre' },
	{ label: 'crime', value: 'crime' },
	{ label: 'fantasy', value: 'fantasy' },
	{ label: 'action', value: 'action' },
	{ label: 'drama', value: 'drama' },
];

export const formikFieldOptions = [
	{ title: 'Title', path: 'title', type: 'text' },
	{ title: 'Genre', path: 'genres', type: 'array' },
	{ title: 'Runtime', path: 'runtime', type: 'number' },
	{ title: 'Release Date', path: 'release_date', type: 'date' },
	{ title: 'Poster Path', path: 'poster_path', type: 'url' },
	{ title: 'Overview', path: 'overview', type: 'text' },
];
