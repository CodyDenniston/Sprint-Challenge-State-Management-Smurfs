import React from 'react';

function Smurf({ smurf }) {
	return (
		<div className='smurf-card'>
			<h3>{smurf.name}</h3>
			<p>Age: {smurf.age}</p>
			<p>Height: {smurf.height}</p>
		</div>
	);
}

export default Smurf;
