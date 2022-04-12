import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';

import { formikFieldOptions } from '../../../core/constants';
import { addMovie } from '../../../store/thunk';

import { AppButton } from '../../Button';

import { FormikField } from '../FormikFieldInput/FormikField';
import { movieValidationSchema } from '../movieValidationSchema';

import './index.scss';

export const AddMovieForm = () => {
	const dispatch = useDispatch();

	const submitHandler = (values) => {
		values.genres = [values.genres];
		dispatch(addMovie(values));
	};

	const formikFieldMapHandler = ({ errors, touched }) =>
		formikFieldOptions.map((field) => (
			<FormikField
				key={field.title}
				id={field.path}
				path={field.path}
				title={field.title}
				type={field.type}
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
					runtime: 0,
				}}
				validationSchema={movieValidationSchema}
				onSubmit={submitHandler}
			>
				{({ errors, touched }) => (
					<Form>
						<div className='formConatiner'>
							<div className='fieldsContainer'>
								{formikFieldMapHandler({ errors, touched })}
							</div>
							<section>
								<AppButton text='submit' type='submit' />
								<AppButton text='reset' type='reset' />
							</section>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};
