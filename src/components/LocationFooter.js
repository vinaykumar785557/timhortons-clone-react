import { ArrowForwardIos, Room } from '@mui/icons-material';
import React from 'react';
import '../styles/LocationFooter.css';
import { ShoppingBag } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function LocationFooter() {
	const history = useHistory();

	const storelocatorpage = () => {
		history.push('/store-locator');
	};
	return (
		<div className='locationFooter'>
			<Room onClick={storelocatorpage} />

			<div className='locationFooter__searchBar' onClick={storelocatorpage}>
				<div className='location__text'>For item availability</div>
				<div className='locationFooter__searchBar__search'>
					<div className='location__text'>Choose a Location</div>
					<div>
						<ArrowForwardIos />
					</div>
				</div>
			</div>
			<div className='locationFooter__cart' onClick={storelocatorpage}>
				<ShoppingBag />
				<p className='locationFooter__cart__price'>0</p>
			</div>
		</div>
	);
}

export default LocationFooter;
