import React from 'react';
import '../styles/Menu.css';
import MenuItem from './MenuItem';

const menu = [
	{
		id: '1',
		imagesource:
			'https://cdn.sanity.io/images/czqk28jt/prod_th_ca/740c969a67ac6a502515424219122abc1c91e0e4-1024x1024.png?w=320&q=40&fit=max&auto=format',
		title: 'Hot Beverages',
	},
	{
		id: '2',
		imagesource:
			'https://cdn.sanity.io/images/czqk28jt/prod_th_ca/ad09b60e923f9daf494b776dafd6090c142d809f-646x645.png?w=320&q=40&fit=max&auto=format',
		title: 'Cold Beverages',
	},
	{
		id: '3',
		imagesource:
			'https://cdn.sanity.io/images/czqk28jt/prod_th_ca/41cf1f585a43697e30889a9c7a6404f888275043-622x637.png?rect=5,194,601,412&w=320&q=40&fit=max&auto=format',
		title: 'Breakfast',
	},
	{
		id: '4',
		imagesource:
			'https://cdn.sanity.io/images/czqk28jt/prod_th_ca/02b2a8411fc8e2d50aff90d75b587210f9bdf67f-445x395.png?w=320&q=40&fit=max&auto=format',
		title: 'Lunch (11am - 10pm)',
	},
	{
		id: '5',
		imagesource:
			'https://cdn.sanity.io/images/czqk28jt/prod_th_ca/6fd7b2dfdbe2ac9a195fc8f1c72b7767668460f0-794x574.png?w=320&q=40&fit=max&auto=format',
		title: 'Donuts & Timbits',
	},
	{
		id: '6',
		imagesource:
			'https://cdn.sanity.io/images/czqk28jt/prod_th_ca/1c3958ccf1425537d81f3c426ca28d796de3e14c-1500x1000.png?w=320&q=40&fit=max&auto=format',
		title: 'Baked Goods',
	},
	{
		id: '7',
		imagesource:
			'https://cdn.sanity.io/images/czqk28jt/prod_th_ca/5c292d70d6a50ae186462f8b5590c61ed9b94c27-8688x5792.png?rect=1026,0,7662,5792&w=320&q=40&fit=max&auto=format',
		title: 'Bagels',
	},
	{
		id: '8',
		imagesource:
			'https://cdn.sanity.io/images/czqk28jt/prod_th_ca/6c50f1eb2fd83ee840b8edff62c652244cd52379-3840x3154.jpg?w=320&q=40&fit=max&auto=format',
		title: 'Merchandise',
	},
];

function Menu() {
	return (
		<div className='menu'>
			<h1 className='menu__title'>Menu</h1>
			<div className='menu__map'>
				{menu.map((item) => (
					<MenuItem
						key={item.id}
						imagesource={item.imagesource}
						title={item.title}></MenuItem>
				))}
			</div>
		</div>
	);
}

export default Menu;
