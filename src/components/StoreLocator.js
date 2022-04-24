import { FormatListBulleted, Map } from '@mui/icons-material';

import React, { useState } from 'react';
import '../styles/StoreLocator.css';

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
		</div>
	);
}

export default StoreLocator;
