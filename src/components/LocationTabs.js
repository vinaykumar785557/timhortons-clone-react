import { Favorite, LocalCafe, ShoppingBag } from '@mui/icons-material';
import React, { useState } from 'react';
import '../styles/LocationTabs.css';
function LocationTabs() {
	const [showLocation, setShowLocation] = useState(true);
	const [showFavs, setShowFavs] = useState(false);
	const [showRecents, setShowRecents] = useState(false);

	const nearbyHandler = () => {
		setShowLocation(true);
		setShowFavs(false);
		setShowRecents(false);
	};
	const favHandler = () => {
		setShowLocation(false);
		setShowFavs(true);
		setShowRecents(false);
	};
	const recentHandler = () => {
		setShowLocation(false);
		setShowFavs(false);
		setShowRecents(true);
	};

	return (
		<div className='locationtabs'>
			<div className='locationtabs__buttons'>
				<button
					className={`btn__nearby ${showLocation ? 'active' : ''}`}
					onClick={nearbyHandler}>
					Nearby
				</button>
				<button
					className={`btn__favs ${showFavs ? 'active' : ''}`}
					onClick={favHandler}>
					Favourites
				</button>
				<button
					className={`btn__recent ${showRecents ? 'active' : ''}`}
					onClick={recentHandler}>
					Recents
				</button>
			</div>
			{showLocation && (
				<div className='locationtabs__choices'>
					<div className='choice__icon'>
						{' '}
						<ShoppingBag />
					</div>
					<h1>Find a Location Nearby</h1>
					<p>
						Let us know where you are so we can recommend nearby locations.{' '}
					</p>
					<div>
						<button className='btn'>Share my location</button>
					</div>
				</div>
			)}
			{showFavs && (
				<div className='locationtabs__choices'>
					<div className='choice__icon'>
						{' '}
						<Favorite />
					</div>
					<h1>Login to Save Favourites</h1>
					<p>
						To set a favourite location, first log in or sign up for an account.
					</p>
					<div>
						<button className='btn'>Sign In</button>
					</div>
				</div>
			)}
			{showRecents && (
				<div className='locationtabs__choices'>
					<div className='choice__icon'>
						{' '}
						<LocalCafe />
					</div>
					<h1>Sign In to See Recent Locations</h1>
					<p>First sign in or sign up for an account. </p>
					<div>
						<button className='btn'>Sign In </button>
					</div>
				</div>
			)}
		</div>
	);
}

export default LocationTabs;
