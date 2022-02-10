import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useSelector } from 'react-redux';

import { selectedMovieSelector } from '../../store/selectors';
import { SearchBanner } from '../../components/Banners/SearchBanner';
import { MovieDetailsBanner } from '../../components/Banners/MovieDetailsBanner';
import { Navigation } from '../../components/Navigation';
import { MovieList } from '../../components/MoviesList';
import { ToggleBar } from '../../components/ToggleBar';
import { Modal } from '../../components/Modal';

import { LoaderSpinner } from '../Loader';

import './index.css';

export const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const [displayButton, setDisplayButton] = useState(false);
	const show = () => setDisplayButton(true);
	const selectedMovie = useSelector(selectedMovieSelector);

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const movieApi = 'http://localhost:4000/movies?limit=10';

	// const apiFetchMovies = async () => {
	// 	const dispatch = useDispatch();
	// 	const response = await axios.get(movieApi);
	// 	dispatch(setData(response.data));
	// 	console.log(response.data);
	// };

	// useEffect(() => {
	// 	apiFetchMovies();
	// 	console.log(data);
	// }, []);

	useEffect(() => {
		axios
			.get(movieApi)
			.then((response) => {
				setData([...response.data.data]);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setData(null);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);

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
			{!loading ? (
				<MovieList movieApiData={data} show={show} />
			) : (
				<LoaderSpinner />
			)}
			{error && <h3>{`Error type - ${error}`}</h3>}we
		</div>
	);
};
