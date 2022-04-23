import React from 'react';
import '../styles/MenuItem.css'
function MenuItem({ imagesource, title }) {
	return (
		<div className='menuItem'>
			<img className='menuItem__image' src={imagesource} alt={title} />
			<div className='menuItem__title'>{title}</div>
		</div>
	);
}

export default MenuItem;
