import {
	FacebookRounded,
	Instagram,
	Language,
	Twitter,
	YouTube,
} from '@mui/icons-material';
import React from 'react';
import '../styles/Footer.css';
function Footer() {
	return (
		<div className='footer'>
			<div className='footer__top'>
				<div className='footer__top__left'>
					<b>Careers</b>
					<p className='paratext'>Come join the team</p>
					<a href='none' className='links'>
						Browse Opportunities
					</a>
				</div>
				<div className='footer__top__center'>
					<b>Tims For Good</b>
					<p className='paratext'>Small changes, big impact</p>
					<a href='none' className='links'>
						Learn More
					</a>
				</div>
				<div className='footer__top__right'>
					<b>Find a Tim Hortons</b>
					<p className='paratext'>Come join the team</p>
					<a href='none' className='links'>
						Store Locator
					</a>
				</div>
			</div>
			<div className='footer__middle'>
				<div className='footer__middle__left'>
					<ul>
						<li>Franchising</li>
						<li>Investors</li>
						<li>Contact Us</li>
						<li>Frequently Asked Questions</li>
					</ul>
				</div>
				<div className='footer__middle__center'>
					<ul>
						<li>Privacy Policy</li>
						<li>Terms of Service</li>
						<li>Trademarks Notice</li>
						<li>Accessibility</li>
						<li>Diagnostics</li>
					</ul>
				</div>
				<div className='footer__middle__right'>
					<b>Connect with Us</b>
					<div className='footer__middle__right__icons'>
						<Instagram />
						<FacebookRounded />
						<YouTube />
						<Twitter />
					</div>
				</div>
			</div>
			<div className='footer__bottom'>
				<div className='footer__bottom__left'>
					TM & © Tim Hortons, {new Date().getFullYear()}
				</div>
				<div className='footer__bottom__button'>
					<Language /> EN/CA
				</div>
			</div>
		</div>
	);
}

export default Footer;
