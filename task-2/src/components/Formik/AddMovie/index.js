import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { submitMovie } from '../../../store/actionCreators';
import { formikFieldOptions } from '../../../constants';

import { FormikField } from '../FormikField';

import './index.css';

const movieValidationSchema = Yup.object().shape({
	title: Yup.string().required('Title is required'),
	release_date: Yup.string().required('Release Date is required'),
	poster_path: Yup.string().required('Image Url is required'),
	genres: Yup.string().required('Genre is required'),
	overview: Yup.string().required('Overview Description is required'),
	runtime: Yup.number().required('Runtime is required'),
});

export const AddMovieForm = () => {
	const [formSubmit, setFormSubmit] = useState(false);
	const dispatch = useDispatch();

	const submitHandler = (values) => {
		setFormSubmit(true);
		dispatch(submitMovie(values));
	};

	return (
		<>
			<Formik
				initialValues={{
					title: '',
					release_date: '',
					poster_path: '',
					genres: '',
					overview: '',
					runtime: '',
				}}
				validationSchema={movieValidationSchema}
				onSubmit={submitHandler}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							{formikFieldOptions.map((field) => {
								return (
									<FormikField
										key={field.title}
										id={field.path}
										path={field.path}
										title={field.title}
										errors={errors}
										touched={touched}
									/>
								);
							})}
							<button type='submit'>Submit</button>
							<button type='reset'>reset</button>
						</div>
					</Form>
				)}
			</Formik>
			<div>
				{formSubmit ? <p>Your movie will be added to the list</p> : null}
			</div>
		</>
	);
};
