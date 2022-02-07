import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { selectedMovieSelector } from '../../store/selectors';
import { SearchBanner } from '../../components/Banners/SearchBanner';
import { MovieDetailsBanner } from '../../components/Banners/MovieDetailsBanner';
import { Navigation } from '../../components/Navigation';
import { MovieList } from '../../components/MoviesList';
import { ToggleBar } from '../../components/ToggleBar';
import { Modal } from '../../components/Modal';

import './index.css';

export const Home = () => {
	// const [openModal, setOpenModal] = useState(false);
	// const [displayButton, setDisplayButton] = useState(false);
	// const show = () => setDisplayButton(true);
	// const selectedMovie = useSelector(selectedMovieSelector);

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:4000/movies`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`,
					);
				}
				return response.json();
			})
			.then((actualData) => {
				setData([actualData]);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h1>all avaliable movies</h1>
			{loading && <div>A moment please...</div>}
			{error && (
				<div>{`There is a problem fetching the movies data - ${error}`}</div>
			)}
			<ul>{data.map((item) => console.log(item.data))}</ul>
		</div>
	);

	// return (
	// 	<div className='homeContainer'>
	// 		{openModal && <Modal closeModal={setOpenModal} />}
	// 		<button
	// 			className='addMovieBtn'
	// 			onClick={() => {
	// 				setOpenModal(true);
	// 			}}
	// 		>
	// 			add movie
	// 		</button>
	// 		<Navigation displayButton={displayButton} />
	// 		{!selectedMovie ? <SearchBanner /> : <MovieDetailsBanner />}
	// 		<ToggleBar />
	// 		<MovieList show={show} />
	// 	</div>
	// );
};
