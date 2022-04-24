import { FormatListBulleted, Map, Search } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import React, { useState } from 'react';
import '../styles/StoreLocator.css';
import LocationTabs from './LocationTabs';

function StoreLocator() {
	const [changeView, setChangeView] = useState(true);
	return (
		<div className='storelocator'>
			<div className='storelocator__header'>
				<h1>Locations</h1>
				<div className='storelocator__button__wrapper'>
					<button onClick={() => setChangeView(!changeView)}>
						{changeView && (
							<>
								Map{' '}
								<span>
									<Map />
								</span>
							</>
						)}
						{!changeView && (
							<>
								List
								<span>
									<FormatListBulleted />
								</span>
							</>
						)}
					</button>
				</div>
			</div>
			<div className='storelocator__main'>
				<div className='pickuplabel'>Pick Up</div>
				<div className='deliverylabel'>Delivery</div>
				<div className='searchfield'>
					<TextField
						sx={{
							width: 500,
							background: 'rgb(255, 255, 255)',
						}}
						id='outlined-basic'
						label='Your Address'
						variant='outlined'
						InputProps={{
							endAdornment: (
								<InputAdornment position='start'>
									<IconButton
										tabIndex='-1'
										style={{ width: '32px', height: '32px' }}>
										<Search />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</div>
			</div>
			<LocationTabs/>
		</div>
	);
}

export default StoreLocator;
