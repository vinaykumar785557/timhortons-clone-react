import { ArrowForwardIos, Room } from '@mui/icons-material';
import React from 'react';
import '../styles/LocationFooter.css';
import { ShoppingBag } from '@mui/icons-material';
function LocationFooter() {
	return (
		<div className='locationFooter'>
			<Room />

			<div className='locationFooter__searchBar'>
				<div className='location__text'>For item availability</div>
				<div className='locationFooter__searchBar__search'>
					<div className='location__text' >Choose a Location</div>
					<div>
						<ArrowForwardIos />
					</div>
				</div>
			</div>
			<div className='locationFooter__cart'>
				<ShoppingBag />
				<p className='locationFooter__cart__price'>0</p>
			</div>
		</div>
	);
}

export default LocationFooter;
