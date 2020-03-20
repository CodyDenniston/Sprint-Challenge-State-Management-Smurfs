import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addSmurf } from '../actions';

function SmurfForm() {
	const { handleSubmit } = useForm();
	const dispatch = useDispatch();

	const onSubmit = data => {
		dispatch(addSmurf(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Name
				<input name='name' />
			</label>
			<label>
				Age
				<input name='age' />
			</label>
			<label>
				Height
				<input name='height' />
			</label>
			<input type='submit' />
		</form>
	);
}

export default SmurfForm;
