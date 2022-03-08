import * as Yup from 'yup';

export const movieValidationSchema = Yup.object().shape({
	title: Yup.string().required('Title is required'),
	release_date: Yup.string().required('Release Date is required'),
	poster_path: Yup.string().required('Image Url is required'),
	// genres: Yup.string().required('Genre is required'),
	overview: Yup.string().required('Overview Description is required'),
	runtime: Yup.number().required('Runtime is required'),
});
