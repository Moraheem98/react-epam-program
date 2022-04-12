import React, { useState } from 'react';

import { Modal } from '../../components/Modal';
import { Navigation } from '../../components/Navigation';
import { SearchBanner } from '../../components/Banners/SearchBanner';
import { ToggleBar } from '../../components/ToggleBar';
import { MovieList } from '../../components/MoviesList';

import './index.scss';

export const HomePage = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className='homeContainer'>
			{openModal && <Modal closeModal={setOpenModal} />}
			<Navigation setOpenModal={setOpenModal} />
			<SearchBanner />
			<ToggleBar />
			<MovieList setOpenModal={setOpenModal} />
		</div>
	);
};
