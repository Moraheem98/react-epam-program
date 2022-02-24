import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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

export const EditMovieForm = () => {
	const [formSubmit, setFormSubmit] = useState(false);

	const submitHandler = () => {
		setFormSubmit(true);
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
			<div>{formSubmit ? <p>This movie has been edited</p> : null}</div>
		</>
	);
};
