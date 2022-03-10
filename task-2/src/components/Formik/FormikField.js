import React from 'react';

import { Field } from 'formik';

import PropTypes from 'prop-types';

export const FormikField = ({ title, path, errors, touched, type }) => {
	return (
		<div>
			<>{title}</>
			<Field placeholder={title} name={path} type={type} id={path} />
			{errors[path] && touched[path] ? <p>{errors[path]}</p> : null}
		</div>
	);
};

FormikField.propTypes = {
	title: PropTypes.string,
	path: PropTypes.string,
	type: PropTypes.string,
	errors: PropTypes.object,
	touched: PropTypes.object,
};
