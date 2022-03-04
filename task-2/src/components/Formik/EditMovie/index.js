import React from 'react';

import { Formik, Form } from 'formik';

import { formikFieldOptions } from '../../../core/constants';

import { FormikField } from '../FormikField';
import { movieValidationSchema } from '../movieValidationSchema';

import './index.css';

export const EditMovieForm = () => {
	const dispatch = useDispatch();

	const submitHandler = () => {
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
				<p>This movie has been edited</p>
			</div>
		</>
	);
};
