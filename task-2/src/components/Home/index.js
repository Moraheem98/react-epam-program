import React, { useState } from 'react';

import { SearchBanner } from '../../components/Banners/SearchBanner';
import { MovieDetailsBanner } from '../../components/Banners/MovieDetailsBanner';
import { Navigation } from '../../components/Navigation';
import { MovieList } from '../../components/MoviesList';
import { ToggleBar } from '../../components/ToggleBar';
import { Modal } from '../../components/Modal';

import './index.css';

export const Home = () => {
	const [openModal, setOpenModal] = useState(false);

	const [selectedMovie, setSelectedMovie] = useState(null);

	return (
		<div className='homeContainer'>
			{openModal && <Modal closeModal={setOpenModal} />}
			<button
				className='addMovieBtn'
				onClick={() => {
					setOpenModal(true);
				}}
			>
				add movie
			</button>
			<Navigation />
			{!selectedMovie ? (
				<SearchBanner />
			) : (
				<MovieDetailsBanner
					selectedMovie={selectedMovie}
					setSelectedMovie={setSelectedMovie}
				/>
			)}
			<ToggleBar />
			<MovieList setSelectedMovie={setSelectedMovie} />
		</div>
	);
};
