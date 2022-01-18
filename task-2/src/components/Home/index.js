import React, { useState } from 'react';

import { Navigation } from '../../components/Navigation';
import { SearchBar } from '../../components/SearchBar';
import { MovieList } from '../../components/MoviesList';
import { ToggleBar } from '../../components/ToggleBar';
import { Modal } from '../../components/Modal';

import './index.css';

export const Home = () => {
	const [openModal, setOpenModal] = useState(false);
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
			<SearchBar />
			<ToggleBar />
			<MovieList />
		</div>
	);
};
