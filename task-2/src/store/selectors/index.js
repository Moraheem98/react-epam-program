import { useSelector } from 'react-redux';

export const selectedMovieSelector = () =>
	useSelector((state) => state.switchBannerReducer.selectedMovie);
