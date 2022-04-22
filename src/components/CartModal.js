import React from 'react';
import '../styles/CartModal.css';
function CartModal() {
	return (
		<div className='cartmodal'>
			<h3>You don't have anything in your cart yet!</h3>
			<div className='cartmodal__total'>
				<p>Total*</p>
				<p>$0.00</p>
			</div>
			<div className='cartmodal__orderexceed'>Order can not exceed $100.00</div>
			<div className='checkout__button'>
				<button>Checkout</button>
			</div>
		</div>
	);
}

export default CartModal;
