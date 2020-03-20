import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSmurfs } from '../actions';

import SmurfForm from './SmurfForm';
import Smurf from './Smurf';
import './App.css';

function App() {
	const smurfs = useSelector(state => state.smurfs);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSmurfs);
	}, [dispatch]);

	return (
		<div className='App'>
			<h1>Add a Smurf</h1>
			<SmurfForm />
			<h1>Smurfs</h1>
			<div className='smurf-container'>
				{smurfs &&
					smurfs.map(smurf => {
						return <Smurf key={smurf.id} smurf={smurf} />;
					})}
			</div>
		</div>
	);
}

export default App;
