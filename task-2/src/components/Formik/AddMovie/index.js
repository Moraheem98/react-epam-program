import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';

import { submitMovie } from '../../../store/actionCreators';
import { formikFieldOptions } from '../../../core/constants';

import { FormikField } from '../FormikField';
import { movieValidationSchema } from '../movieValidationSchema';

import './index.css';

export const AddMovieForm = () => {
	const dispatch = useDispatch();

	const submitHandler = (values) => {
		dispatch(submitMovie(values));
	};

	const formikFieldMapHandler = ({ errors, touched }) =>
		formikFieldOptions.map((field) => (
			<FormikField
				key={field.title}
				id={field.path}
				path={field.path}
				title={field.title}
				errors={errors}
				touched={touched}
			/>
		));

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
							{formikFieldMapHandler({ errors, touched })}
							<button type='submit'>Submit</button>
							<button type='reset'>reset</button>
						</div>
					</Form>
				)}
			</Formik>
			<div>
				<p>Your movie will be added to the list</p>
			</div>
		</>
	);
};
