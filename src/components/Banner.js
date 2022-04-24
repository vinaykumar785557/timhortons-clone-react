import React from 'react';
import '../styles/Banner.css';
function Banner() {
	return (
		<div className='banner'>
			<div className='banner__text'>
				<h1>Tims For Good</h1>
				<p>
					We’re on a journey to make our packaging reusable, recyclable, or
					compostable. Click 'Learn More' for details & updates about our
					long-term journey in Canada.
				</p>
				<button>Learn More</button>
			</div>
			<img
				className='banner__image'
				src='https://mma.prnewswire.com/media/1738687/Tim_Hortons_Tim_Hortons_introduces_new_white_hot_beverage_lids_a.jpg?p=facebook'
				alt='banner'
			/>
		</div>
	);
}

export default Banner;
