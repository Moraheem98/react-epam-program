import React, { useState } from 'react';

import { MovieList } from '../MoviesList';
import { ToggleBar } from '../ToggleBar';
import { Modal } from '../../components/Modal';
import { Header } from '../Header';
import '../../../src/assets/GlobalStyles/__globalButtons.css';

import './index.css';

export const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const [facets, setfacets] = useState('');

	return (
		<div className='homeContainer'>
			{openModal && <Modal closeModal={setOpenModal} />}
			<Header setOpenModal={setOpenModal} />
			<ToggleBar setFacets={setfacets} />
			<MovieList setOpenModal={setOpenModal} facets={facets} />
		</div>
	);
};
