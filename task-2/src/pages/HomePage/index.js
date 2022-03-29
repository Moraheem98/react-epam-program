import React, { useState } from 'react';

import { Modal } from '../../components/Modal';
import { Navigation } from '../../components/Navigation';
import { SearchBanner } from '../../components/Banners/SearchBanner';
import { ToggleBar } from '../../components/ToggleBar';
import { MovieList } from '../../components/MoviesList';

import './index.css';

export const HomePage = () => {
	const [openModal, setOpenModal] = useState(false);
	const [facets, setfacets] = useState('');

	return (
		<div className='homeContainer'>
			{openModal && <Modal closeModal={setOpenModal} />}
			<Navigation setOpenModal={setOpenModal} />
			<SearchBanner />
			<ToggleBar setFacets={setfacets} />
			<MovieList setOpenModal={setOpenModal} facets={facets} />
		</div>
	);
};
