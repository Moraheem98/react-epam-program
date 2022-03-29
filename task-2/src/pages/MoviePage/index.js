import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { selectedMovieSelector } from '../../store/selectors';

import { fetchMovie } from '../../store/thunk';

import { Modal } from '../../components/Modal';
import { Navigation } from '../../components/Navigation';
import { MovieDetailsBanner } from '../../components/Banners/MovieDetailsBanner';
import { ToggleBar } from '../../components/ToggleBar';
import { MovieList } from '../../components/MoviesList';

import './index.css';

export const MoviePage = () => {
	const [openModal, setOpenModal] = useState(false);
	const [facets, setfacets] = useState('');
	const dispatch = useDispatch();
	const selectedMovie = useSelector(selectedMovieSelector);
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchMovie(id));
	}, [id]);

	return (
		<div className='homeContainer'>
			{openModal && <Modal closeModal={setOpenModal} />}
			<Navigation setOpenModal={setOpenModal} />
			{selectedMovie && <MovieDetailsBanner selectedMovie={selectedMovie} />}
			<ToggleBar setFacets={setfacets} />
			<MovieList setOpenModal={setOpenModal} facets={facets} />
		</div>
	);
};
