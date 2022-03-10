import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { selectedMovieSelector } from '../../store/selectors';

import { MovieDetailsBanner } from '../Banners/MovieDetailsBanner';
import { SearchBanner } from '../Banners/SearchBanner';
import { Navigation } from '../Navigation';

import './index.css';

export const Header = ({ setOpenModal }) => {
	const selectedMovie = useSelector(selectedMovieSelector);
	return (
		<div className='headerContainer'>
			<Navigation setOpenModal={setOpenModal} />
			{!selectedMovie ? <SearchBanner /> : <MovieDetailsBanner />}
		</div>
	);
};

Header.propTypes = {
	setOpenModal: PropTypes.func,
};
