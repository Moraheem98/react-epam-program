import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { SearchBanner } from '../../components/Banners/SearchBanner';
import { MovieDetailsBanner } from '../../components/Banners/MovieDetailsBanner';
import { Navigation } from '../../components/Navigation';
import { MovieList } from '../../components/MoviesList';
import { ToggleBar } from '../../components/ToggleBar';
import { Modal } from '../../components/Modal';

import { switchBanner } from '../../store/actionCreaters/actionCreators';

import './index.css';

export const Home = () => {
	const [openModal, setOpenModal] = useState(false);

	const [displayButton, setDisplayButton] = useState(false);
	const show = () => setDisplayButton(true);

	const dispatch = useDispatch();
	const selectedMovie = useSelector(
		(state) => state.switchBannerReducer.selectedMovie,
	);
	const handleSelectedMovie = (movie) => {
		const action = switchBanner(movie);
		dispatch(action);
	};

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
			<Navigation
				setSelectedMovie={handleSelectedMovie}
				displayButton={displayButton}
			/>
			{!selectedMovie ? (
				<SearchBanner />
			) : (
				<MovieDetailsBanner selectedMovie={selectedMovie} />
			)}
			<ToggleBar />
			<MovieList setSelectedMovie={handleSelectedMovie} show={show} />
		</div>
	);
};
