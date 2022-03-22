import React, { useState } from 'react';

import { Modal } from '../../components/Modal';
import { Navigation } from '../../components/Navigation';
import { ToggleBar } from '../../components/ToggleBar';
import { MovieList } from '../../components/MoviesList';

import '../../../src/assets/GlobalStyles/__globalButtons.css';

import './index.css';
import { SearchBanner } from '../../components/Banners/SearchBanner';

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
