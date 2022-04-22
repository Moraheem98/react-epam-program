import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';

import { formikFieldOptions } from '../../../core/constants';
import { editMovie } from '../../../store/thunk';

import { AppButton } from '../../Button';

import { FormikField } from '../FormikFieldInput/FormikField';
import { movieValidationSchema } from '../movieValidationSchema';

export const EditMovieForm = ({ movie, closeModal }) => {
	const dispatch = useDispatch();

	const submitHandler = (values) => {
		dispatch(editMovie(values));
		closeModal();
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
				initialValues={movie}
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
EditMovieForm.propTypes = {
	movie: PropTypes.object,
	closeModal: PropTypes.func,
};
