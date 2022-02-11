import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { selectedMovieSelector } from '../../store/selectors';
import { SearchBanner } from '../../components/Banners/SearchBanner';
import { MovieDetailsBanner } from '../../components/Banners/MovieDetailsBanner';
import { Navigation } from '../../components/Navigation';
import { MovieList } from '../../components/MoviesList';
import { ToggleBar } from '../../components/ToggleBar';
import { Modal } from '../../components/Modal';

// import { LoaderSpinner } from '../Loader';

import './index.css';

export const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const [displayButton, setDisplayButton] = useState(false);
	const show = () => setDisplayButton(true);
	const selectedMovie = useSelector(selectedMovieSelector);

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
			<Navigation displayButton={displayButton} />
			{!selectedMovie ? <SearchBanner /> : <MovieDetailsBanner />}
			<ToggleBar />
			<MovieList show={show} />
			{/* {!loading ? (
				<MovieList movieApiData={moviesData} show={show} />
			) : (
				<LoaderSpinner />
			)} */}
			{/* {error && <h3>{`Error type - ${error}`}</h3>} */}
		</div>
	);
};
