import { ShoppingBag } from '@mui/icons-material';
import React, { useState } from 'react';
import '../styles/Header.css';
import CartModal from './CartModal';
import SubNav from './SubNav';
function Header() {
	const [show, setShow] = useState(false);
	const [showCart, setShowCart] = useState(false);

	const subMenuHandler = () => setShow(!show);

	const showCartHandler = () => {
		setShowCart(!showCart);
	};

	return (
		<div className='header'>
			<div className='header__left'>
				<ul className='header__left__items'>
					<li>Menu</li>
					<li>Tims for Good</li>
					<li onClick={subMenuHandler}>More &#x25BC;</li>
				</ul>
			</div>

			<img
				src='https://www.serrala.com/sites/default/files/styles/max_650x650/public/2021-05/luxpng.com_tim-hortons-logo-5403680.png?itok=7Po9iWUU'
				alt='tim-hortons-logo'
				className='header__logo'></img>

			<div className='header__right'>
				<div className='button__signin'>Sign In</div>
				<div className='button__cart' onClick={showCartHandler}>
					<ShoppingBag />
					<p className='price'>0</p>
				</div>
			</div>
			{show && <div className='triangle'></div>}
			{show && <SubNav />}

			{showCart && <CartModal />}
		</div>
	);
}

export default Header;
