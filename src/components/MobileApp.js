import React from 'react';
import '../styles/MobileApp.css';
function MobileApp() {
	return (
		<div className='mobileapp'>
			<img
				src='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/a5a141fa4fb009612987d86c1fda395adea51a63-1460x2548.png?w=750&q=40&fit=max&auto=format'
				alt='mobile'
				className='mobileapp__image'
			/>
			<div className='mobileapp__text'>
				<h1>Order ahead, save time, & earn rewards!</h1>
				<p className='para'>
					Everything you love about Tim Hortons, now 'byte'-sized!
				</p>
				<div className='mobileapp__logos'>
					<img
						className='appstore'
						onClick={() =>
							window.open(
								'https://apps.apple.com/us/app/tim-hortons/id1143883086'
							)
						}
						src='https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png'
						alt='app store'
					/>
					<img
						className='playstore'
						onClick={() =>
							window.open(
								'https://play.google.com/store/apps/details?id=digital.rbi.timhortons'
							)
						}
						src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
						alt='play store'
					/>
				</div>
				<p className='trademark'>
					Apple and the Apple logo are trademarks of Apple Inc., registered in
					the U.S. and other countries. App Store is a service mark of Apple
					Inc. Google Play is a trademark of Google Inc. Terms apply.
				</p>
			</div>
		</div>
	);
}

export default MobileApp;
