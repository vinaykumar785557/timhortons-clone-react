import React from 'react';
import '../styles/SubNav.css';
function SubNav() {
	return (
		<div className='subnav'>
			<div className='subnav__menu'>
				<ul className='subnav__list'>
					<li>Tims Rewards</li>
					<li>Tims it Forward</li>
					<li>Tim Card</li>
				</ul>
			</div>
			<div className='subnav__menu'>
				<ul className='subnav__list'>
					<li>Frequently Asked Questions</li>
					<li>Store Locator</li>
					<li>Feedback Survey</li>
					<li>Contact Us</li>
				</ul>
			</div>
			<div className='subnav__menu'>
				<ul className='subnav__list'>
					<li>Our Coffee Story</li>
					<li>Community Initiatives</li>
					<li>Tims at Home</li>
					<li>Nutrition and Allergens</li>
				</ul>
			</div>
			<div className='subnav__menu'>
				<ul className='subnav__list'>
					<li>About Us</li>
					<li>News</li>
					<li>Franchising</li>
					<li>Careers</li>
					<li>Privacy Policy</li>
					<li>Delivery Terms</li>
					<li>Terms of Service</li>
				</ul>
			</div>
		</div>
	);
}

export default SubNav;
